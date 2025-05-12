import React from "react";
import {
  Modal,
  View,
  Text,
  TouchableOpacity,
  Pressable,
  ScrollView,
  Dimensions,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";

const { height } = Dimensions.get("window");

export default function BottomModal({
  visible,
  onClose,
  title,
  children,
  titleAlign = "left",
}) {
  return (
    <Modal
      visible={visible}
      animationType="slide"
      transparent
      onRequestClose={onClose}
    >
      <View className="flex-1 justify-end bg-black/40">
        {/* Clickable background */}
        <Pressable onPress={onClose} className="absolute inset-0" />

        {/* Modal content */}
        <View className="bg-white rounded-t-3xl pt-7 px-4 pb-6 max-h-[85%]">
          {/* Header with title and close icon */}
          <View className="flex-row justify-between items-center mb-4">
            <Text
              className={`text-base font-semibold text-black ${
                titleAlign === "center" ? "text-center flex-1" : ""
              }`}
            >
              {title}
            </Text>
            <TouchableOpacity
              onPress={onClose}
              className="w-8 h-8 bg-[#00011B0A] rounded-full border border-black justify-center items-center mt-2"
            >
              <Icon name="close" size={20} color="#000" />
            </TouchableOpacity>
          </View>
          {children}
        </View>
      </View>
    </Modal>
  );
}
