import React from "react";
import CustomButton from "./Button";

const PrimaryButton = ({ text, onPress, width }) => {
  return (
    <CustomButton
      onPress={onPress}
      text={text}
      style={{
        backgroundColor: "#444CE7",
        borderRadius: 8,
        paddingVertical: 16,
        // marginHorizontal: 10,
        width,
      }}
      textStyle={{
        color: "#fff",
        fontSize: 16,
        fontWeight: "500",
      }}
    />
  );
};

export default PrimaryButton;
