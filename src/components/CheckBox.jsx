import { View, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";

const CheckBox = () => {
  const [checked, setChecked] = useState(false);
  return (
    <TouchableOpacity onPress={() => setChecked((prev) => !prev)}>
      {checked ? (
        <Ionicons name="checkmark-circle" size={20} color="#444CE7" />
      ) : (
        <View
          style={{
            width: 20,
            height: 20,
            borderWidth: 1,
            borderColor: "#A4A7AE",
            backgroundColor: "#fff",
            borderRadius: "100%",
          }}
        ></View>
      )}
    </TouchableOpacity>
  );
};

export default CheckBox;
