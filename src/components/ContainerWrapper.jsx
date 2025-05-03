import { View } from "react-native";
import React from "react";

const ContainerWrapper = ({ children }) => {
  return <View className="p-2.5 mx-auto">{children}</View>;
};

export default ContainerWrapper;
