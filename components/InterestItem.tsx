import React from "react";
import { View, Text, StyleSheet, Image } from "react-native";

interface InterestItemProps {
  name: string;
  color: string;
  avatar?: string | null;
}

const InterestItem: React.FC<InterestItemProps> = ({ name, color, avatar }) => {
  return (
    <View style={[styles.container, { borderColor: color }]}>
      {avatar && <Image source={{ uri: avatar }} style={styles.avatar} />}
      <Text style={styles.text}>{name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    marginBottom: 5,
  },
  avatar: {
    width: 30,
    height: 30,
    borderRadius: 15,
    marginRight: 10,
  },
  text: { fontSize: 16 },
});

export default InterestItem;
