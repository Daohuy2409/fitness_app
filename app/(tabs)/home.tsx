import { StyleSheet, ScrollView, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Link } from "expo-router";
import { Text, View } from "@/components/Themed";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBell, faCircleUser } from "@fortawesome/free-regular-svg-icons";
import {
  faAngleRight,
  faPersonRunning,
} from "@fortawesome/free-solid-svg-icons";
import BoxComponent from "@/components/BoxComponent";
import { ProgressChart } from "react-native-chart-kit";
import ProgressChartComponent from "@/components/ProgressChart";
import CircularProgress from "react-native-circular-progress-indicator";
import { Image } from "expo-image";

import HorizontalCardList from "@/components/HorizontalCardList";
import FullScreenAutoSlider from "@/components/AutoSlider";

const chart1 = require("../../assets/images/chart1.png");
const chart2 = require("../../assets/images/chart2.png");
const adver = require("../../assets/images/califor.jpg");
const indicator = require("../../assets/images/indicator.png");
export default function TabOneScreen() {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <View style={styles.headLeft}>
          <FontAwesomeIcon size={32} icon={faCircleUser} />
          <View style={styles.headTextLeft}>
            <Text style={styles.textLeft1}>Hello, Huy</Text>
            <Text style={styles.textLeft2}>Welcome Back</Text>
          </View>
        </View>

        <FontAwesomeIcon style={styles.headRight} icon={faBell} size={20} />
      </View>
      <View style={styles.body}>
        <Link href="/searchScreen" style={styles.searchLink}>
          <Text style={styles.input}>Tìm kiếm phòng gym</Text>
        </Link>

        <Text
          style={{
            fontSize: 25,
            fontWeight: "bold",
            marginTop: 10,
          }}
        >
          Bạn có thể thích
        </Text>
        <View style={styles.imageContainer}>
          <FullScreenAutoSlider />
        </View>

        <View
          style={{
            marginTop: 20,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              fontSize: 25,
              fontWeight: "bold",
            }}
          >
            Thông báo mới
          </Text>
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <Text>Xem thêm</Text>
            <FontAwesomeIcon icon={faAngleRight} />
          </View>
        </View>
        <View style={styles.notifyContainer}>
          <HorizontalCardList />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    fontFamily: "Roboto",
    backgroundColor: "white",
  },
  header: {
    margin: 20,
    marginTop: 50,
    flexDirection: "row",

    justifyContent: "space-between",
  },
  headLeft: {
    flexDirection: "row",
    alignItems: "center",
  },
  headTextLeft: {
    marginLeft: 10,
  },
  textLeft1: {
    color: "gray",
  },
  textLeft2: {
    fontWeight: "bold",
    fontSize: 18,
  },
  headRight: {
    marginTop: 10,
  },
  body: { margin: 20 },
  headerText: {
    fontSize: 20,
    fontWeight: "bold",
  },
  searchLink: {
    height: 30,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    textAlignVertical: "center",
  },
  input: {
    color: "#B0B0B0",
  },
  contentView: {
    backgroundColor: "transparent",
    flexDirection: "row",
    alignItems: "center",
  },
  contentText: {
    marginLeft: 20,
  },
  imageContainer: {
    position: "relative",
    height: 200, // Đặt chiều cao của container
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    marginTop: 10,
    borderRadius: 20,
  },
  indicator: {
    position: "absolute",
    width: 50, // Đặt chiều rộng của ảnh thứ hai
    height: 20,
    bottom: 0,
    right: 10,
    zIndex: 10,
    resizeMode: "contain",
  },
  notifyContainer: {
    width: "100%",
    marginTop: 20,
  },
  notifyItem: {
    width: "100%",
    height: 100,
    borderRadius: 10,
  },
});
