import React, { useState } from "react";
import { View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import { PostInterface } from "@/assets/pageData";

const InfoCard = ({
  postInfo,
  name,
  logo,
}: {
  postInfo: PostInterface;
  name: string;
  logo: any;
}) => {
  const [isExpanded, setIsExpanded] = useState(false); // State để điều khiển xem toàn bộ nội dung
  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={logo} style={styles.logo} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.date}>{postInfo.date.toDateString()}</Text>
        </View>
      </View>
      <Text style={styles.title}>{postInfo.title}</Text>
      <Text
        style={styles.content}
        numberOfLines={isExpanded ? undefined : 4} // Giới hạn dòng hoặc hiển thị toàn bộ
      >
        {postInfo.content}
      </Text>
      {postInfo.content.length > 100 && ( // Hiển thị nút "Xem thêm" nếu nội dung dài
        <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
          <Text style={styles.readMore}>
            {isExpanded ? "Thu gọn" : "Xem thêm"}
          </Text>
        </TouchableOpacity>
      )}
      {postInfo.photoUrl && (
        <Image source={postInfo.photoUrl} style={styles.fullWidthImage} />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    marginBottom: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 0 }, // Bóng đều cả 4 phía
    shadowOpacity: 0.2, // Độ trong suốt của bóng
    shadowRadius: 5, // Độ mờ của bóng
    elevation: 5, // Dành cho Android
    width: "95%",
    alignSelf: "center",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  logo: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
    borderColor: "gray",
    borderWidth: 1,
  },
  name: {
    fontSize: 18,
    fontWeight: "bold",
  },
  date: {
    fontSize: 12,
    color: "gray",

    fontWeight: "bold",
  },
  title: {
    fontSize: 16,
    fontWeight: "bold",
    marginBottom: 10,
  },
  content: {
    fontFamily: "Roboto",
    fontSize: 14,

    alignContent: "flex-start",
  },
  fullWidthImage: {
    marginTop: 10,
    width: "100%", // Chiều rộng cố định
    height: undefined, // Điều chỉnh chiều cao tự động theo tỉ lệ
    aspectRatio: 1, // Đặt tỉ lệ phù hợp nếu biết trước
    borderRadius: 10,
  },
  readMore: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 5,
  },
});

export default InfoCard;
