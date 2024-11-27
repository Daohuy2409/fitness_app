import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEllipsisVertical } from "@fortawesome/free-solid-svg-icons";

interface PostCardProps {
  gymId: number;
  postId: number;
  imageUrl: any;
  title: string;
}
const PostCardComponent: React.FC<PostCardProps> = ({
  gymId,
  postId,
  imageUrl,
  title,
}) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Image style={styles.img} source={imageUrl} />
      <Text style={styles.title}>{title}</Text>
      <View style={styles.OptionBtn}>
        <FontAwesomeIcon icon={faEllipsisVertical} />
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: 100,
    backgroundColor: "white",
    flexDirection: "row",
  },
  img: {
    flex: 2,
  },
  title: {
    flex: 3,
  },
  OptionBtn: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default PostCardComponent;
