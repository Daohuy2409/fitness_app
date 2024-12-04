import React, { useState } from "react";
import {
  View,
  FlatList,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Modal,
  TouchableWithoutFeedback,
} from "react-native";
import { data } from "@/assets/pageData";

const HorizontalImgList = ({ id }) => {
  // Lọc dữ liệu dựa trên id
  const selectedData = data.find((item) => item.id === Number(id));

  // Nếu không tìm thấy dữ liệu, trả về null
  if (!selectedData) {
    alert("Id:" + id);
    return null;
  }
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedImage, setSelectedImage] = useState<any>(null);

  const renderItem = ({ item, index }) => {
    if (index % 3 === 0) {
      return (
        <TouchableOpacity
          onPress={() => {
            setSelectedImage(selectedData.coverPhotoUrl[index]);
            setIsModalVisible(true);
          }}
        >
          <View style={[styles.box, styles.largeBox]}>
            <Animated.Image
              source={selectedData.coverPhotoUrl[index]}
              style={styles.image}
            />
          </View>
        </TouchableOpacity>
      );
    } else if (index % 3 === 1 && selectedData.coverPhotoUrl[index + 1]) {
      return (
        <View style={styles.smallBoxContainer}>
          <TouchableOpacity
            style={[styles.box, styles.smallBox]}
            onPress={() => {
              setSelectedImage(selectedData.coverPhotoUrl[index]);
              setIsModalVisible(true);
            }}
          >
            <Animated.Image
              source={selectedData.coverPhotoUrl[index]}
              style={styles.image}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.box, styles.smallBox]}
            onPress={() => {
              setSelectedImage(selectedData.coverPhotoUrl[index + 1]);
              setIsModalVisible(true);
            }}
          >
            <Animated.Image
              source={selectedData.coverPhotoUrl[index + 1]}
              style={styles.image}
            />
          </TouchableOpacity>
        </View>
      );
    } else if (index % 3 === 2) {
      // Skip rendering this item because it was already rendered in the previous index
      return null;
    }
    return null; // Ensure a return value
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        horizontal
        renderItem={renderItem}
        keyExtractor={(item, index) => index.toString()}
      />
      {/* Modal hiển thị ảnh full màn hình */}
      <Modal
        visible={isModalVisible}
        transparent={true}
        onRequestClose={() => setIsModalVisible(false)}
        animationType="fade"
      >
        <TouchableWithoutFeedback onPress={() => setIsModalVisible(false)}>
          <View style={styles.modalContainer}>
            <Animated.Image
              source={selectedImage}
              style={styles.fullScreenImage}
            />
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
  },
  box: {
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  largeBox: {
    height: "100%",
    width: 200,
    backgroundColor: "gray",
    borderRadius: 10,
  },
  smallBoxContainer: {
    height: "100%",
    justifyContent: "space-between",
  },
  smallBox: {
    height: "48%",
    width: 150,
    backgroundColor: "gray",
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: "100%",
    resizeMode: "cover",
    borderRadius: 10,
  },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.8)",
  },
  fullScreenImage: {
    width: "100%",
    height: "100%",
    resizeMode: "contain", // Đảm bảo ảnh không bị cắt xén
  },
});

export default HorizontalImgList;
