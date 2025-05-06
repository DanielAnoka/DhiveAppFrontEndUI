import React from "react";
import {
  Modal,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import PaymentPin from "./PaymentPin";
import TransactionDetails from "./TransactionDetails";
import SuccessPage from "./SuccessPage";
import OrderDetails from "./OrderDetails";

const TransactionModal = ({ visible, onClose, phase, setPhase }) => {
  const GetPage = ({ phase }) => {
    switch (phase) {
      case "payment":
        return <PaymentPin onComplete={() => setPhase("success")} />;

      case "success":
        return <SuccessPage viewOrder={() => setPhase("view-order")} />;
      case "view-order":
        return <OrderDetails />;

      default:
        return <TransactionDetails />;
    }
  };
  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>
      <View style={[styles.bottomSheet, { padding: 10 }]}>
        <TouchableOpacity className="absolute right-3 top-7" onPress={onClose}>
          <View className="border bg-[#00011B0A] p-1 rounded-full">
            <Ionicons name="close" size={20} color="#000" />
          </View>
        </TouchableOpacity>
        <GetPage phase={phase} />
      </View>
    </Modal>
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

export default TransactionModal;
