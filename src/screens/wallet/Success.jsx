import { SafeAreaView, Text, View, StyleSheet, Image } from "react-native";
import DynamicStepLayout from "../StepOneLayout";
import PrimaryButton from "../../components/PrimaryButton";
import { useNavigate } from "react-router-native";
import { Images, protectWalletOptions, walletOptions } from "../../constants";
import ToggleSwitch from "../../components/Switch";

const Success = () => {
  const navigate = useNavigate();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fdfdfd" }}>
      <View
        style={{
          flexDirection: "column",
          height: "90%",
          justifyContent: "space-between",
          backgroundColor: "#fdfdfd",
        }}
      >
        <View
          style={{
            height: "95%",
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: "#fdfdfd",
          }}
        >
          <View
            style={{
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Image
              source={Images.Confetti}
              style={{ width: 142, height: 142 }}
              resizeMode="contain"
            />
            <Text style={{ fontSize: 18, fontWeight: 600, marginVertical: 10 }}>
              You are ready to go
            </Text>
            <Text style={styles.text}>You can now fully enjoy your wallet</Text>
          </View>
        </View>

        <PrimaryButton onPress={() => navigate("/next")} text="Continue" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  loader: {
    marginVertical: 20,
  },
  textArea: {
    height: 128,
    borderColor: "#F1F1F1",
    borderWidth: 1,
    padding: 10,
    backgroundColor: "#fff",
    marginTop: 20,
    borderRadius: 5,
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
  text: {
    fontSize: 14,
    fontWeight: 300,
    lineHeight: 22,
    marginTop: 10,
    textAlign: "center",
  },
  stepContainer: {
    backgroundColor: "#FAFAFA",
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  icons: {
    width: 18,
    height: 18,
  },
  warningText: {
    color: "#B54708",
    fontSize: 15,
    lineHeight: 22,
    textAlign: "left",
  },
});

export default Success;
