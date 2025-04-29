import React from "react";
import {
  SafeAreaView,
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import DynamicStepLayout from "./StepOneLayout";
import { Images } from "../constants";
import Button from "../components/Button";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigate } from "react-router-native";

const Next = () => {
  const navigate = useNavigate();

  const handleWallet = () => {
    navigate("/phase1");
  };

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <TouchableOpacity
        style={styles.backButton}
        onPress={console.log("hello")}
      >
        <View style={styles.backCircle}>
          <Ionicons name="chevron-back" size={20} color="#000" />
        </View>
      </TouchableOpacity>

      <DynamicStepLayout currentStep={2} length={4}>
        <View style={styles.container}>
          <View style={styles.imageWrapper}>
            <Image
              source={Images.Auth2}
              style={styles.image}
              resizeMode="contain"
            />
          </View>

          <View style={styles.contentArea}>
            <Text style={styles.contentText}>
              Dehive - Secure and Easy to Use
            </Text>
            <Text style={styles.text}>
              Manage your assets, shop, and trade with confidence. No stress,
              just seamless control..
            </Text>

            <Button
              onPress={() => navigate("/add-wallet")}
              style={{
                backgroundColor: "#fff",
                borderColor: "#E9EBF0",
                borderWidth: 1,
                borderRadius: 8,
                marginBottom: 16,
                marginTop: 36,
              }}
              textStyle={{ color: "#181D27", fontWeight: "500" }}
              text="I Already Have a Wallet"
            />

            <Button
              onPress={handleWallet}
              text="Create a New Wallet"
              style={{
                backgroundColor: "#444CE7",
                borderRadius: 8,
                paddingVertical: 14,
              }}
              textStyle={{
                color: "#fff",
                fontSize: 16,
                fontWeight: "600",
              }}
            />

            <Text style={styles.footerText}>
              By proceeding, you agree to these{" "}
              <Text
                style={styles.linkText}
                onPress={() => console.log("Terms & Conditions")}
              >
                Terms & Conditions
              </Text>
            </Text>
          </View>
        </View>
      </DynamicStepLayout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    top: 50,
    left: 16,
    zIndex: 10,
  },
  backCircle: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: "#F5F5F5",
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    marginTop: 48,
  },
  imageWrapper: {
    top: -100,
    left: -20.83,
  },
  image: {
    width: 404.57,
    height: 464.14,
  },
  contentArea: {
    marginTop: -100,
    width: "100%",
  },
  contentText: {
    fontSize: 20,
    textAlign: "left",
    color: "#181D27",
    fontWeight: "700",
  },
  text: {
    fontWeight: "400",
    fontSize: 15,
    lineHeight: 25,
    marginTop: 10,
  },
  footerText: {
    fontSize: 14,
    color: "#535862",
    textAlign: "center",
    marginTop: 20,
  },
  linkText: {
    color: "#444CE7",
    fontWeight: "400",
  },
});

export default Next;
