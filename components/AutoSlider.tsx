import React, { useState, useEffect, useRef } from "react";
import {
  View,
  FlatList,
  Image,
  Dimensions,
  ListRenderItem,
} from "react-native";

interface image {
  id: string;
  url: any;
}
const imageList: image[] = [
  { id: "1", url: require("../assets/images/califor.jpg") },
  { id: "2", url: require("../assets/images/anh1.jpg") },
  { id: "3", url: require("../assets/images/anh2.jpg") },
];

const FullScreenAutoSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef<FlatList<image>>(null);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imageList.length);
    }, 2000); // Chuyển ảnh mỗi 2 giây

    return () => clearInterval(interval); // Dọn dẹp interval khi component unmount
  }, []);

  useEffect(() => {
    flatListRef.current?.scrollToIndex({
      index: currentIndex,
      animated: true,
    });
  }, [currentIndex]);

  const renderItem: ListRenderItem<image> = ({ item }) => (
    <Image
      source={item.url}
      style={{
        width: Dimensions.get("window").width,
        height: 200,
      }}
      resizeMode="cover"
    />
  );

  return (
    <FlatList
      ref={flatListRef}
      data={imageList}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      horizontal
      pagingEnabled
      scrollEnabled={false}
      getItemLayout={(data, index) => ({
        length: Dimensions.get("window").width,
        offset: Dimensions.get("window").width * index,
        index,
      })}
      initialScrollIndex={currentIndex}
      extraData={currentIndex}
    />
  );
};

export default FullScreenAutoSlider;
