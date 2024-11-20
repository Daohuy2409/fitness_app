import { Text, View } from "@/components/Themed";
import { useNavigation } from "expo-router";
import { useEffect } from "react";
import { StyleSheet, TextInput } from "react-native";
import CardComponent from "@/components/SearchComponent";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

import { data } from "@/assets/pageData";

const image1 = require("../assets/images/gym1.png");
const image2 = require("../assets/images/gym2.png");
const image3 = require("../assets/images/gym3.png");
export default function SearchScreen() {
  const navigation = useNavigation();

  useEffect(() => {
    navigation.setOptions({
      title: "Tìm kiếm",
      headerTitleStyle: {
        fontSize: 24,
        fontWeight: "bold",
      },
      headerShadowVisible: false,
      headerTitleAlign: "center",
    }); // Đặt tiêu đề mới cho màn hình này
  }, []);

  return (
    <View style={styles.body}>
      <TextInput style={styles.input} placeholder="Nhập tên phòng tập" />
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        Các phòng tập được gợi ý
      </Text>
      {data.map((item) => (
        <CardComponent
          key={item.id}
          id={item.id}
          imageUrl={item.avatarUrl}
          name={item.name}
          address={item.address}
          follow={item.follow}
        />
      ))}

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
});
