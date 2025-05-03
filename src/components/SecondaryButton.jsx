import React from "react";
import CustomButton from "./Button";

const SecondaryButton = ({ text, onPress, width }) => {
  return (
    <CustomButton
      onPress={onPress}
      text={text}
      style={{
        backgroundColor: "#FAFAFA",
        borderRadius: 8,
        borderColor: "#D5D7DA",
        borderWidth: 1,
        marginTop: 10,
        paddingVertical: 14,
        marginHorizontal: 10,
        width,
      }}
      textStyle={{
        color: "#252B37",
        fontSize: 16,
        fontWeight: "500",
      }}
    />
  );
};

export default SecondaryButton;
