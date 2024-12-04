import { StyleSheet, ScrollView } from "react-native";
import { Link } from "expo-router";
import { Text, View } from "@/components/Themed";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faBell, faCircleUser } from "@fortawesome/free-regular-svg-icons";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

import HorizontalCardList from "@/components/HorizontalCardList";
import FullScreenAutoSlider from "@/components/AutoSlider";
import { data } from "@/assets/pageData";

export default function TabOneScreen() {
  const selectedPosts = [...data[2].post.slice(0, 3)];
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
            backgroundColor: "#f0f0f0",
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
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "#f0f0f0",
            }}
          >
            <Text>Xem thêm</Text>
            <FontAwesomeIcon icon={faAngleRight} />
          </View>
        </View>
      </View>
      <View style={styles.notifyContainer}>
        <HorizontalCardList
          posts={selectedPosts}
          avatar={data[0].avatarUrl}
          name={data[0].name}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    fontFamily: "Roboto",
    backgroundColor: "#f0f0f0",
  },
  header: {
    margin: 20,
    marginTop: 50,
    flexDirection: "row",
    backgroundColor: "#f0f0f0",
    justifyContent: "space-between",
  },
  headLeft: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  headTextLeft: {
    marginLeft: 10,
    backgroundColor: "#f0f0f0",
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
  body: { margin: 20, backgroundColor: "#f0f0f0" },
  searchLink: {
    height: 30,
    borderColor: "gray",
    borderWidth: 1,
    borderRadius: 10,
    paddingHorizontal: 10,
    marginVertical: 10,
    textAlignVertical: "center",
    backgroundColor: "white",
  },
  input: {
    color: "#B0B0B0",
  },

  imageContainer: {
    position: "relative",
    height: 200, // Đặt chiều cao của container
  },

  notifyContainer: {
    width: "100%",
    marginTop: 20,
    backgroundColor: "#f0f0f0",
    marginBottom: 10,
  },
});
