import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { data } from "@/assets/pageData";
import { useNavigation, useRouter } from "expo-router";
import HorizontalCardList from "@/components/HorizontalCardList";
const followIcon = require("../../assets/images/follow.png");
export default function DetailScreen() {
  const navigation = useNavigation();
  useEffect(() => {
    navigation.setOptions({
      headerShown: false,
    });
  });
  const { id } = useLocalSearchParams();

  const gymData = data.find((item) => item.id === Number(id));
  if (!gymData) {
    return (
      <View style={styles.container}>
        <Text>Không tìm thấy dữ liệu</Text>
      </View>
    );
  }
  const [isFollowed, setIsFollowed] = useState(false);
  const [showImage, setShowImage] = useState(true);
  const router = useRouter();
  const handlePress = () => {
    setIsFollowed(!isFollowed);
    setShowImage(!showImage);
  };
  return (
    <View style={styles.container}>
      <Image source={gymData.coverPhotoUrl} style={styles.photo} />
      <Image source={gymData.avatarUrl} style={styles.avatar} />
      <TouchableOpacity
        style={[styles.button, isFollowed && styles.buttonFollowed]}
        onPress={handlePress}
      >
        {showImage && <Image source={followIcon} tintColor={"white"} />}
        <Text
          style={[styles.buttonText, isFollowed && styles.buttonTextFollowed]}
        >
          {isFollowed ? "Following" : "Follow"}
        </Text>
      </TouchableOpacity>

      <Text
        style={{
          fontWeight: "bold",
          fontSize: 24,
          alignSelf: "flex-start",
          marginHorizontal: 15,
          marginTop: 30,
        }}
      >
        Các bài viết gần đây
      </Text>
      <View style={styles.notifyContainer}>
        <HorizontalCardList />
      </View>

      <Text
        style={{
          fontWeight: "bold",
          fontSize: 24,
          alignSelf: "flex-start",
          margin: 15,
        }}
      >
        Tất cả các bài viết
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
  },
  header: {},
  photo: {
    height: 200,
  },
  avatar: {
    position: "absolute",
    top: 125,
    left: 20,
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 3,
    width: 150,
    height: 150,
  },
  button: {
    width: 90,
    height: 30,
    backgroundColor: "#004cff",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginLeft: 30,
    flexDirection: "row",
    marginTop: 10,
  },
  buttonText: {
    fontWeight: "bold",
    color: "white",
    marginLeft: 5,
  },
  buttonFollowed: {
    backgroundColor: "#004cff",
  },
  buttonTextFollowed: {
    color: "white",
  },
  notifyContainer: {
    width: "100%",
    marginTop: 10,
  },
});
