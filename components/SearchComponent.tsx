import React, { ReactNode } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { useNavigation, useRouter } from "expo-router";

interface CustomComponentProps {
  id: number;
  imageUrl: any;
  name: string;
  address: string;
  follow: number;
}

const CardComponent: React.FC<CustomComponentProps> = ({
  id,
  imageUrl,
  name,
  address,
  follow,
}) => {
  const [isFollowed, setIsFollowed] = useState(false);
  const router = useRouter();
  const handlePress = () => {
    setIsFollowed(!isFollowed);
  };
  const handleCardPress = () => {
    router.push({
      pathname: "/gymPage/gymMapInfo",
      params: { id },
    });
  };
  const formatFollowers = (num: number) => {
    if (num >= 1000) {
      return (num / 1000).toFixed(1) + "k followers";
    }
    return num + " followers";
  };

  return (
    <TouchableOpacity onPress={handleCardPress} style={styles.customComponent}>
      <Image source={imageUrl} style={styles.img} />
      <View style={styles.content}>
        <Text style={styles.header}>{name}</Text>
        <Text style={styles.address} numberOfLines={1} ellipsizeMode="tail">
          {address}
        </Text>
        <Text style={styles.followers}>{formatFollowers(follow)}</Text>
      </View>
      <TouchableOpacity
        style={[styles.button, isFollowed && styles.buttonFollowed]}
        onPress={handlePress}
      >
        <Text
          style={[styles.buttonText, isFollowed && styles.buttonTextFollowed]}
        >
          {isFollowed ? "Following" : "Follow"}
        </Text>
      </TouchableOpacity>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  customComponent: {
    flexDirection: "row",
    borderWidth: 0, // border: none
    backgroundColor: "white",
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    paddingVertical: 10,
    height: 80,
    marginTop: 2,
  },
  img: {
    width: 40,
    height: 40,
    borderRadius: 100,
    marginRight: 20,
  },
  content: {
    flex: 1,
    flexDirection: "column",
  },
  header: {
    fontWeight: "bold",
    fontSize: 16,
  },
  address: {
    fontSize: 14,
    color: "gray",
  },
  followers: {
    marginTop: 5,
    fontSize: 12,
  },
  button: {
    width: 80,
    height: 30,
    backgroundColor: "white",
    borderWidth: 0.5,
    borderColor: "#8D8D93",
    borderRadius: 5,
    justifyContent: "center",
    alignItems: "center",
    alignSelf: "center",
    marginLeft: 5,
  },
  buttonText: {
    fontWeight: "bold",
  },
  buttonFollowed: {
    backgroundColor: "#007BFF",
  },
  buttonTextFollowed: {
    color: "white",
  },
});

export default CardComponent;
