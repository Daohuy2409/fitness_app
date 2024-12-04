import { useState } from "react";
import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  TouchableOpacity,
} from "react-native";
import { PostInterface } from "@/assets/pageData";

interface HorizontalCardListProps {
  posts: PostInterface[];
  avatar: any;
  name: string;
}

const HorizontalCardItem = ({ item, avatar, name }: any) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <View style={styles.card}>
      <View style={styles.header}>
        <Image source={avatar} style={styles.avatar} />
        <View>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.date}>{item.date.toDateString()}</Text>
        </View>
      </View>
      <Text
        style={styles.description}
        numberOfLines={isExpanded ? undefined : 1}
      >
        {item.description}
      </Text>

      {item.photoUrl && <Image source={item.photoUrl} style={styles.image} />}
    </View>
  );
};
const HorizontalCardList = ({
  posts,
  avatar,
  name,
}: HorizontalCardListProps) => {
  return (
    <FlatList
      data={posts}
      renderItem={({ item }) => (
        <HorizontalCardItem item={item} avatar={avatar} name={name} />
      )}
      keyExtractor={(item) => item.id.toString()}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.cardContainer}
    />
  );
};

const styles = StyleSheet.create({
  card: {
    width: 300,
    height: 305,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    marginRight: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 1,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
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
  readMore: {
    fontWeight: "bold",
    marginTop: 5,
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
  },
  image: {
    marginTop: 5,
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
  },
  cardContainer: {
    paddingHorizontal: 10,
  },
});

export default HorizontalCardList;
