// Layou.js
import React from "react";
import { View, StyleSheet } from "react-native";
import NavbarBusiness from "../components/NavbarBusiness";

const LayoutBusinesses = ({ children }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>{children}</View>
      <NavbarBusiness />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
  },
});

export default LayoutBusinesses;
