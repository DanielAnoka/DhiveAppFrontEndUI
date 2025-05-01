import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import { Images } from "../../constants";

const ItemCard = ({ name, price, imgUrl, company }) => {
  return (
    <View style={styles.card}>
      <Image source={imgUrl} resizeMode="contain" style={styles.image} />
      <Text style={styles.name} numberOfLines={1}>
        {name}
      </Text>
      <Text style={styles.price}>${price}</Text>
      <View
        style={{
          flexDirection: "row",
          gap: 10,
          marginTop: 10,
          alignItems: "center",
        }}
      >
        <Image
          source={Images.Avatar}
          resizeMode="contain"
          style={{ width: 20, height: 20 }}
        />
        <Text style={{ width: "50%" }} numberOfLines={2}>
          {company}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    flex: 1,
    margin: 10,
    backgroundColor: "",
    borderRadius: 10,
    padding: 10,
  },
  image: {
    width: "100%",
    height: 250,
    borderRadius: 10,
  },
  name: {
    fontWeight: "400",
    color: "#535862",
    width: "90%",
  },
  price: {
    fontSize: 18,
    color: "#535862",
    marginTop: 10,
    fontWeight: "bold",
  },
  row: {
    justifyContent: "space-between",
  },
});

export default ItemCard;
