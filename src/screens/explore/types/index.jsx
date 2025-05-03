import { View, Text } from "react-native";
import React from "react";
import Category from "./Category";
import Price from "./Price";

const renderContent = (type) => {
  switch (type) {
    case "Category":
      return <Category />;
    case "Price Range":
      return <Price />;

    default:
      <View>Wagwan</View>;
  }
};

const TypeOptions = ({ type }) => {
  return <View>{renderContent(type)}</View>;
};

export default TypeOptions;
