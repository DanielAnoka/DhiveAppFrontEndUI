//
import React from "react";
import {
  Modal,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";

import { useNavigate } from "react-router-native";
import { Icons } from "../../constants/icon";
import TypeOptions from "./types";
import { SliderProvider } from "./_context";

const FilterTypeModal = ({ visible, onClose, selectedType }) => {
  const navigate = useNavigate();

  return (
    <SliderProvider>
      <Modal visible={visible} transparent animationType="fade">
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
        <View style={[styles.bottomSheet, { paddingVertical: 10 }]}>
          <View className="flex-row px-2.5 my-6 w-full justify-between items-center">
            <View className="flex-row gap-2 items-center">
              <Image
                source={selectedType.image}
                className="w-6 h-6"
                // resizeMode="contain"
              />
              <Text>{selectedType.type}</Text>
            </View>
            <TouchableOpacity onPress={onClose}>
              <Text className="text-primary">Done</Text>
            </TouchableOpacity>
          </View>
          <View className="border-t w-full border-[#E9EAEB]" />
          <TypeOptions type={selectedType.type} />
        </View>
      </Modal>
    </SliderProvider>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  bottomSheet: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
});

export default FilterTypeModal;
