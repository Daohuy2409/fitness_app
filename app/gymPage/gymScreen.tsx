import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { useLocalSearchParams } from "expo-router";
import { data } from "@/assets/pageData";
import { useNavigation, useRouter } from "expo-router";
import HorizontalCardList from "@/components/HorizontalCardList";
import InfoCard from "@/components/InfoCardComponent";
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
    <ScrollView style={styles.container}>
      <Image source={gymData.coverPhotoUrl[0]} style={styles.photo} />

      <Image source={gymData.avatarUrl} style={styles.avatar} />

      <View style={styles.name}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>{gymData.name}</Text>
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
      </View>

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
        <HorizontalCardList
          posts={gymData.post}
          avatar={gymData.avatarUrl}
          name={gymData.name}
        />
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
      <View>
        {gymData.post.map((post) => (
          <InfoCard
            key={post.id}
            logo={gymData.avatarUrl}
            name={gymData.name}
            postInfo={post}
          />
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F0F0F0",
  },

  photo: {
    marginTop: -7,
    height: 200,
    width: "100%",
    resizeMode: "cover",
  },
  avatar: {
    position: "absolute",
    top: 125,
    left: 10,
    borderRadius: 100,
    borderColor: "white",
    borderWidth: 3,
    width: 150,
    height: 150,
  },
  name: {
    marginLeft: 170,
    marginTop: 10,
    flexDirection: "column",
  },
  button: {
    width: 90,
    height: 30,
    backgroundColor: "#004cff",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10,
    flexDirection: "row",
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
