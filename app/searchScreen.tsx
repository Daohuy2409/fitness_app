import { Text, View } from "@/components/Themed";
import { useState, useEffect } from "react";
import { StyleSheet, TextInput, Button, FlatList } from "react-native";
import CardComponent from "@/components/SearchComponent";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { data } from "@/assets/pageData";

// Hàm tính khoảng cách giữa hai vị trí (toạ độ)
const getDistance = (lat1: number, lon1: number, lat2: number, lon2: number) => {
  const R = 6371; // Radius of the Earth in km
  const dLat = (lat2 - lat1) * (Math.PI / 180);
  const dLon = (lon2 - lon1) * (Math.PI / 180);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * (Math.PI / 180)) *
      Math.cos(lat2 * (Math.PI / 180)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c; // Distance in km
  return distance;
};

// Hàm lấy địa chỉ từ tọa độ (sử dụng Geocoding API)
const getAddressFromCoordinates = async (latitude: number, longitude: number) => {
  const response = await fetch(
    `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`
  );
  const data = await response.json();
  
  // Trả về địa chỉ chi tiết không có tên quốc gia
  return data.address
    ? `${data.address.house_number || ""} ${data.address.road || ""}, ${data.address.city || ""}`
    : "Unknown Location"; // Trả về địa chỉ chi tiết (số nhà, tên đường và thành phố)
};

export default function SearchScreen() {
  // Vị trí cố định của người dùng (latitude, longitude)
  const currentLocation = {
    latitude: 21.028776,
    longitude: 105.780664,
  };

  const [nearbyGyms, setNearbyGyms] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const [showNearbyGyms, setShowNearbyGyms] = useState(false); // Trạng thái hiển thị phòng gym gần
  const [currentAddress, setCurrentAddress] = useState<string>(""); // Địa chỉ người dùng

  useEffect(() => {
    // Lấy địa chỉ từ tọa độ hiện tại khi màn hình load
    const fetchAddress = async () => {
      const address = await getAddressFromCoordinates(
        currentLocation.latitude,
        currentLocation.longitude
      );
      setCurrentAddress(address);
    };

    fetchAddress();
  }, []);

  const searchNearbyGyms = () => {
    setLoading(true);
    // Lọc các phòng gym trong bán kính 5km
    const nearby = data.filter((gym) => {
      const distance = getDistance(
        currentLocation.latitude,
        currentLocation.longitude,
        gym.location[0],
        gym.location[1]
      );
      return distance <= 5; // Bán kính 5km
    });
    // Sắp xếp phòng gym theo khoảng cách gần nhất
    nearby.sort((a, b) => {
      const distanceA = getDistance(
        currentLocation.latitude,
        currentLocation.longitude,
        a.location[0],
        a.location[1]
      );
      const distanceB = getDistance(
        currentLocation.latitude,
        currentLocation.longitude,
        b.location[0],
        b.location[1]
      );
      return distanceA - distanceB;
    });
    setNearbyGyms(nearby);
    setLoading(false);
    setShowNearbyGyms(true); // Hiển thị phòng gym gần
  };

  return (
    <View style={styles.body}>
      <TextInput style={styles.input} placeholder="Nhập tên phòng tập" />
      
      {/* Hiển thị địa chỉ người dùng */}
      <View style={styles.locationContainer}>
        <Text style={styles.locationText}>{currentAddress}</Text>
      </View>

      {/* Tiêu đề hiển thị: Đề xuất phòng gym mặc định hoặc Các phòng tập gần bạn */}
      <Text style={{ fontSize: 20, fontWeight: "bold", marginTop: 20 }}>
        {showNearbyGyms ? "Các phòng tập gần bạn" : "Đề xuất phòng gym"}
      </Text>
      
      {showNearbyGyms ? (
        // Hiển thị danh sách phòng gym gần
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
                {/* Hiển thị khoảng cách từ vị trí người dùng tới phòng gym */}
                <Text style={styles.distanceText}>
                  {getDistance(
                    currentLocation.latitude,
                    currentLocation.longitude,
                    item.location[0],
                    item.location[1]
                  ).toFixed(2)}{" "}
                  km
                </Text>
              </CardComponent>
            )}
            keyExtractor={(item) => item.id.toString()}
          />
        )
      ) : (
        // Hiển thị phòng gym mặc định khi chưa tìm kiếm
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
      
      {/* Nút tìm kiếm phòng gym gần */}
      <Button
        title="Tìm kiếm phòng gym gần"
        onPress={searchNearbyGyms}
        style={styles.searchButton}
      />

      {!showNearbyGyms && (
        <View
          style={{ flexDirection: "row", alignItems: "center", marginTop: 20 }}
        >
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            size={12}
            style={{ color: "gray" }}
          />
          <Text style={{ fontSize: 16, color: "gray", marginLeft: 2 }}>
            Tìm kiếm gần khu vực bạn
          </Text>
        </View>
      )}
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
    top: 20,
    right: 20,
    backgroundColor: "white",
    padding: 5,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
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
