import React from "react";
import { View, Text, FlatList, StyleSheet, ListRenderItem } from "react-native";

interface CardData {
  id: string;
  title: string;
}
const data: CardData[] = [
  { id: "1", title: "Card 1" },
  { id: "2", title: "Card 2" },
  { id: "3", title: "Card 3" },
  { id: "4", title: "Card 4" },
  { id: "5", title: "Card 5" },
];

const HorizontalCardList = () => {
  const renderItem: ListRenderItem<CardData> = ({ item }) => (
    <View style={styles.card}>
      <Text style={styles.cardText}>{item.title}</Text>
    </View>
  );

  return (
    <FlatList
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.cardContainer}
    />
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    paddingHorizontal: 10,
  },
  card: {
    width: 150,
    height: 200,
    backgroundColor: "#f2f2f2",
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 5,
  },
  cardText: {
    fontSize: 18,
    fontWeight: "bold",
  },
});

export default HorizontalCardList;
