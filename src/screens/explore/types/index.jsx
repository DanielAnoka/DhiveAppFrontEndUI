import { View } from "react-native";
import React from "react";
import Category from "./Category";
import Price from "./Price";
import Business from "./Business";
import SortBy from "./SortBy";

const renderContent = (type) => {
  switch (type) {
    case "Category":
      return <Category />;
    case "Price Range":
      return <Price />;
    case "Business":
      return <Business />;
    case "Sort By":
      return <SortBy />;

    default:
      <View>Wagwan</View>;
  }
};

const TypeOptions = ({ type }) => {
  return <View>{renderContent(type)}</View>;
};

export default TypeOptions;
