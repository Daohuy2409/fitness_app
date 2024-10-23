import React, { ReactNode } from "react";
import { View, Text, StyleSheet } from "react-native";

interface CustomComponentProps {
  header: ReactNode;
  content: ReactNode;
}

const BoxComponent: React.FC<CustomComponentProps> = ({ header, content }) => {
  return (
    <View style={styles.customComponent}>
      <View style={styles.header}>{header}</View>
      <View style={styles.content}>{content}</View>
    </View>
  );
};

const styles = StyleSheet.create({
  customComponent: {
    borderWidth: 0, // border: none
    borderRadius: 15,
    backgroundColor: "white",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  header: {
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
    padding: 10,
  },
  content: {
    padding: 10,
  },
});

export default BoxComponent;
