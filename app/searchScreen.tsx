import { Text, View } from "@/components/Themed";
import { useState, useEffect, useCallback } from "react";
import { StyleSheet, TextInput, Button, FlatList } from "react-native";
import CardComponent from "@/components/SearchComponent";
import { data } from "@/assets/pageData";

// Hàm tính khoảng cách giữa hai vị trí (toạ độ)
const getDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const R = 6371; // Bán kính Trái đất (km)
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Khoảng cách
  return distance;
};

// Hàm lấy địa chỉ từ tọa độ (sử dụng Geocoding API)
const getAddressFromCoordinates = async (latitude: number, longitude: number) => {
  try {
    const response = await fetch(
      `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
    );
    const data = await response.json();
    return data.address
      ? `${data.address.house_number || ""} ${data.address.road || ""}, ${data.address.city || ""}`
      : "Unknown Location";
  } catch (error) {
    console.error("Error fetching address:", error);
    return "Unknown Location";
  }
};

export default function SearchScreen() {
  // Vị trí cố định của người dùng
  const currentLocation = {
    latitude: 21.028776,
    longitude: 105.780664,
  };

  const [nearbyGyms, setNearbyGyms] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [showNearbyGyms, setShowNearbyGyms] = useState(false);
  const [currentAddress, setCurrentAddress] = useState<string>("");

  useEffect(() => {
    // Lấy địa chỉ khi màn hình load
    const fetchAddress = async () => {
      const address = await getAddressFromCoordinates(
        currentLocation.latitude,
        currentLocation.longitude
      );
      setCurrentAddress(address);
    };

    fetchAddress();
  }, []);

  const searchNearbyGyms = useCallback(() => {
    setLoading(true);

    // Lọc và tính khoảng cách các phòng gym gần
    const nearby = data
      .map((gym) => {
        const distance = getDistance(
          currentLocation.latitude,
          currentLocation.longitude,
          gym.location[0],
          gym.location[1]
        );
        return { ...gym, distance: parseFloat(distance.toFixed(2)) };
      })
      .filter((gym) => gym.distance <= 5) // Bán kính 5km
      .sort((a, b) => a.distance - b.distance); // Sắp xếp theo khoảng cách

    setNearbyGyms(nearby);
    setLoading(false);
    setShowNearbyGyms(true);
  }, [currentLocation]);

  return (
    <View style={styles.body}>
      <TextInput style={styles.input} placeholder="Nhập tên phòng tập" />

      {/* Hiển thị địa chỉ người dùng */}
      <View style={styles.locationContainer}>
        <Text style={styles.locationText}>{currentAddress}</Text>
      </View>

      {/* Tiêu đề */}
      <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}>
        {showNearbyGyms ? "Các phòng tập gần bạn" : "Đề xuất phòng gym"}
      </Text>

      {showNearbyGyms ? (
        loading ? (
          <Text>Đang tìm kiếm...</Text>
        ) : (
          <FlatList
            data={nearbyGyms}
            renderItem={({ item }) => (
              <CardComponent
                key={item.id}
                id={item.id}
                imageUrl={item.avatarUrl}
                name={item.name}
                address={item.address}
                follow={item.follow}
              >
                <Text style={styles.distanceText}>{item.distance} km</Text>
              </CardComponent>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        )
      ) : (
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <CardComponent
              key={item.id}
              id={item.id}
              imageUrl={item.avatarUrl}
              name={item.name}
              address={item.address}
              follow={item.follow}
            />
          )}
          keyExtractor={(item) => item.id.toString()}
        />
      )}

      {/* Nút tìm kiếm */}
      <Button
        title="Tìm kiếm phòng gym gần"
        onPress={searchNearbyGyms}
        style={styles.searchButton}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    paddingHorizontal: 20,
    backgroundColor: "white",
    height: "100%",
  },
  input: {
    height: 40,
    paddingLeft: 15,
    backgroundColor: "#EFEFEF",
    borderRadius: 15,
    marginBottom: 10,
  },
  searchButton: {
    marginTop: 20,
  },
  locationContainer: {
    position: "absolute",
    top: 10,
    right: 10,
    backgroundColor: "white",
    padding: 8,
    borderRadius: 8,
    elevation: 3,
    zIndex: 100,
  },
  locationText: {
    fontSize: 14,
    color: "gray",
  },
  distanceText: {
    fontSize: 14,
    color: "gray",
    marginTop: 5,
  },
});
