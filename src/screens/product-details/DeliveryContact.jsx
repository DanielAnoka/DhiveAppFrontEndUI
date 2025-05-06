import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigate } from "react-router-native";
import PrimaryButton from "../../components/PrimaryButton";

const DeliveryContact = () => {
  const navigate = useNavigate();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        flexDirection: "column",
        justifyContent: "space-between",
        backgroundColor: "#FDFDFD",
        height: "100%",
      }}
    >
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigate(-1)}
        >
          <View style={styles.circle}>
            <Ionicons name="chevron-back" size={20} color="#000" />
          </View>
        </TouchableOpacity>

        <Text style={styles.backText}>Delivery Contact</Text>
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <View className="flex-1 flex-col justify-between">
          <View className=" px-5 mt-10">
            <View className="flex-col gap-y-3">
              <Text className="font-medium">Contact Name</Text>
              <TextInput
                className="bg-white border rounded-lg border-[#F1F1F1] py-5 px-2"
                placeholder="Enter Contact Name"
              />
            </View>
            <View className="flex-col gap-y-3 mt-4">
              <Text className="font-medium">Contact Phone Line</Text>
              <TextInput
                className="bg-white border rounded-lg  border-[#F1F1F1] py-5 px-2"
                placeholder="Enter Phone Line"
              />
            </View>
            <View className="flex-col gap-y-3 mt-4">
              <Text className="font-medium">Contact Address</Text>
              <TextInput
                className="bg-white border rounded-lg  border-[#F1F1F1] h-40 px-2 py-2.5"
                placeholder="Enter Address"
                multiline={true}
                numberOfLines={15}
              />
            </View>
          </View>
          <PrimaryButton
            text={"Continue"}
            onPress={() => navigate("/product-details/payment")}
          />
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: "row",
    alignItems: "center",
    paddingTop: 20,
    paddingHorizontal: 20,
  },
  backButton: {
    marginRight: 8,
  },

  circle: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#000",
  },
  backText: {
    fontSize: 18,
    color: "#000",
    fontWeight: "600",
    flex: 1,
    textAlign: "center",
    marginLeft: -32,
  },
});

export default DeliveryContact;
