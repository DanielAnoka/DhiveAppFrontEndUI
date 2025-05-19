import {
  Modal,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigate } from "react-router-native";
import PaymentPin from "../product-details/PaymentPin";
import PaymentMethod from "../product-details/PaymentMethod";
import SuccessPage from "../product-details/SuccessPage";
import OrderDetails from "../product-details/OrderDetails";
import TransactionDetails from "../product-details/TransactionDetails";

const DigitalProductModal = ({ visible, onClose, phase, setPhase }) => {
  const navigate = useNavigate();

  const GetPage = ({ phase }) => {
    switch (phase) {
      case "payment":
        return <PaymentPin onComplete={() => setPhase("success")} />;
      case "payment-method":
        return <PaymentMethod onComplete={onClose} />;

      case "success":
        return (
          <SuccessPage
            headText="Successful"
            subText1={"You have successfully purchased"}
            subText2={
              "The Art Of Not Giving A Fuck  (E-Book), from Next-Gen Academy, You can always check your Order page to revisit this product again"
            }
            onButton1Click={() => setPhase("view-order")}
            button1Text={"Proceed to Download your E-Book"}
            button2Text={"View Your Receipt"}
            isDigitalProduct={true}
          />
        );
      case "view-order":
        return (
          <OrderDetails
            amount={"300"}
            product={"The Art of Not Giving A Fuck"}
            quantity={"1"}
            refID={"090338839CP"}
            status={"Successful"}
            hash={"090338839"}
            time={"Apr 26, 2025 - 7:10PM"}
            buttonText={"Done"}
            onClick={onClose}
            isDigitalProduct
          />
        );

      default:
        return (
          <TransactionDetails
            onClick={() => setPhase("payment")}
            name={"The Arts Of Not Giving A Fuck"}
            brand={"Books"}
            category={"E-Book"}
            purchasePower={"2,000,000 USDC"}
            quantity={"1"}
            unitAmount={"132.75 USDC - $300"}
            total={"100.5 USDC - $300"}
            sender={"0x49e3b...oabeb3"}
            networkFee={"$0.14"}
            estTime={"1 min."}
          />
        );
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

export default DigitalProductModal;
