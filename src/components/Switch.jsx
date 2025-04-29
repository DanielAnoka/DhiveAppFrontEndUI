import React, { useState } from "react";
import { View, Switch, StyleSheet, Text } from "react-native";

const ToggleSwitch = ({ onChange }) => {
  const [isEnabled, setIsEnabled] = useState(false);

  const toggleSwitch = (value) => {
    setIsEnabled((previousState) => !previousState);
    if (value) {
      onChange();
    }
  };

  return (
    <View style={styles.container}>
      <Switch
        trackColor={{ false: "#E4E7EC", true: "#444CE7" }}
        thumbColor={"#f4f3f4"}
        ios_backgroundColor="#E4E7EC"
        onValueChange={(value) => toggleSwitch(value)}
        value={isEnabled}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default ToggleSwitch;
