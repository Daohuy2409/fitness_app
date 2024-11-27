import React, { useEffect } from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  Animated,
  PanResponder,
  Alert,
  TouchableOpacity,
} from "react-native";
import { useLocalSearchParams, useNavigation, useRouter } from "expo-router";
import { data } from "@/assets/pageData";
import { WebView } from "react-native-webview";
import { useState, useRef } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faDiamondTurnRight } from "@fortawesome/free-solid-svg-icons";

const { height } = Dimensions.get("window");
export default function DetailScreen() {
  const navigation = useNavigation();
  const { id } = useLocalSearchParams();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  const gymData = data.find((item) => item.id === Number(id));
  if (!gymData) {
    return (
      <View style={styles.container}>
        <Text>Không tìm thấy dữ liệu</Text>
      </View>
    );
  }
  const locationString = `[${gymData.location[0]}, ${gymData.location[1]}]`;
  const htmlContent = `
    <!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js"></script>
        <link rel="stylesheet" href="https://unpkg.com/leaflet@1.7.1/dist/leaflet.css" />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
        <style>
          html, body {
            height: 100%;
            padding: 0;
            margin: 0;
          }
          #map {
            width: 100%;
            height: 100%;
          }
        </style>
      </head>
      <body>
        <div id="map"></div>
        <script>
          var map = L.map('map', {zoomControl: false}).setView(${locationString}, 18);
          L.tileLayer('https://tmdt.fimo.edu.vn/hot/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap contributors</a>'
          }).addTo(map);
          L.control.scale({imperial: true, metric: true}).addTo(map);
          
          L.marker(${locationString}).addTo(map).bindPopup("${gymData.name}").openPopup();
          
        </script>
      </body>
    </html>
  `;

  const animation = useRef(new Animated.Value(150)).current;
  const currentHeight = useRef(150);
  const addressHeight = useRef(new Animated.Value(20)).current; // Chiều cao của address
  const followHeight = useRef(new Animated.Value(20)).current;
  const opacityAnimation = useRef(new Animated.Value(1)).current; // Độ mờ của address và follow
  const translateAnimation = useRef(new Animated.Value(0)).current;
  const panResponder = useRef(
    PanResponder.create({
      onMoveShouldSetPanResponder: (_, gestureState) =>
        Math.abs(gestureState.dy) > 5, // Chỉ kích hoạt khi vuốt
      onPanResponderMove: (_, gestureState) => {
        // Cập nhật giá trị chiều cao dựa trên gesture
        const newHeight = Math.max(
          100,
          Math.min(height - 100, currentHeight.current - gestureState.dy)
        );
        animation.setValue(newHeight); // Cập nhật giá trị tức thời
        // Tính toán độ mờ và vị trí dựa trên chiều cao
        const progress = (newHeight - 100) / (height * 0.5 - 100);
        opacityAnimation.setValue(progress);
        translateAnimation.setValue((1 - progress) * 20);
      },
      onPanResponderRelease: (_, gestureState) => {
        // Khi vuốt kết thúc, xác định chiều cao mục tiêu
        const targetHeight = gestureState.dy > 0 ? 100 : height * 0.5; // Thu nhỏ nếu vuốt xuống, mở rộng nếu vuốt lên

        Animated.parallel([
          // Animation chiều cao
          Animated.spring(animation, {
            toValue: targetHeight,
            speed: 12,
            bounciness: 8,
            useNativeDriver: false,
          }),
          // Animation độ mờ
          Animated.timing(opacityAnimation, {
            toValue: targetHeight === 100 ? 0 : 1,
            duration: 300,
            useNativeDriver: false,
          }),
          // Animation chiều cao của address
          Animated.timing(addressHeight, {
            toValue: targetHeight === 100 ? 0 : 20,
            duration: 300,
            useNativeDriver: false,
          }),
          // Animation chiều cao của follow
          Animated.timing(followHeight, {
            toValue: targetHeight === 100 ? 0 : 20,
            duration: 300,
            useNativeDriver: false,
          }),
          // Animation vị trí
          Animated.timing(translateAnimation, {
            toValue: targetHeight === 100 ? 20 : 0,
            duration: 300,
            useNativeDriver: false,
          }),
        ]).start(() => {
          currentHeight.current = targetHeight;
        });
      },
    })
  ).current;

  const formatFollowers = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k followers";
    }
    return num + " followers";
  };

  const handlePress = () => {
    Alert.alert("Thông báo", "Bạn đã bấm nút!", [{ text: "OK" }]);
  };

  const router = useRouter();
  const redirectToGymPage = () => {
    router.push({
      pathname: "/gymPage/gymScreen",
      params: { id },
    });
  };
  return (
    <View style={styles.container}>
      <WebView
        originWhitelist={["*"]}
        source={{ html: htmlContent }}
        style={styles.webview}
        onLoadEnd={() => setLoading(false)}
      />

      <Animated.View
        {...panResponder.panHandlers}
        style={[styles.box, { height: animation }]} // Áp dụng animation cho chiều cao
      >
        <Text style={styles.panelTitle} onPress={redirectToGymPage}>
          {gymData.name}
        </Text>
        <Animated.Text
          style={[
            { color: "gray", fontWeight: "500", height: 20 },
            {
              height: followHeight,
              opacity: opacityAnimation, // Ẩn dần
            },
          ]}
        >
          {formatFollowers(gymData.follow)}
        </Animated.Text>
        <Animated.Text
          style={[
            styles.panelSubtitle,
            {
              height: addressHeight,
              opacity: opacityAnimation, // Ẩn dần
            },
          ]}
        >
          {gymData.address}
        </Animated.Text>
        <TouchableOpacity style={styles.directionBtn} onPress={handlePress}>
          <FontAwesomeIcon icon={faDiamondTurnRight} color="white" size={20} />
          <Text
            style={{
              color: "white",
              marginLeft: 5,
              fontWeight: "bold",
              fontSize: 16,
            }}
          >
            Dẫn đường
          </Text>
        </TouchableOpacity>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  webview: {
    flex: 1,
    width: 400,
  },

  box: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "white",
    width: "100%",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 10,
    paddingTop: 5,
  },
  panelHeader: {
    padding: 20,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  panelTitle: {
    fontSize: 26,
    fontWeight: "500",
    width: 173,
  },
  panelSubtitle: {
    color: "gray",
    fontWeight: "500",
    height: 20,
  },
  panelContent: {
    padding: 20,
  },
  directionBtn: {
    flexDirection: "row",
    backgroundColor: "#075be3",
    alignItems: "center",
    justifyContent: "center",
    width: 150,
    height: 40,
    borderRadius: 25,
    marginTop: 10,
  },
});
