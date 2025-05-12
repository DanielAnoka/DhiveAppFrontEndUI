import React from "react";
import {
  Modal,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import PaymentPin from "../product-details/PaymentPin";
import SuccessPage from "../product-details/SuccessPage";
import ConfirmTransaction from "./ConfirmTransaction";
import Details from "./Details";
import FilterProducts from "./FilterProducts";

const TradeModal = ({ visible, onClose, phase, setPhase }) => {
  const GetPage = ({ phase }) => {
    switch (phase) {
      case "payment":
        return <PaymentPin onComplete={() => setPhase("success")} />;

      case "success":
        return (
          <SuccessPage
            headText="3,584,234,566.899 NGE"
            subText1={
              "Please wait while swapped your asset to Next-Gen Electronics"
            }
            subText2={"Coin (NGE)"}
            onButton1Click={() => setPhase("view-order")}
            button1Text={"View Transaction Summary"}
            button2Text={"Back Home"}
          />
        );
      case "view-order":
        return <Details onClick={onClose} />;
      case "filter":
        return <FilterProducts />;

      default:
        return <ConfirmTransaction onClick={() => setPhase("payment")} />;
    }
  };
  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>
      <View style={[styles.bottomSheet, { padding: 10, paddingTop: 40 }]}>
        <TouchableOpacity className="absolute right-3 top-12" onPress={onClose}>
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

export default TradeModal;
