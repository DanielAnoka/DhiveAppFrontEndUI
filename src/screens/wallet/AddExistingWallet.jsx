import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { walletOptions } from "../../constants";
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";
import ImportOptions from "./ImportOptions";
import { Images } from "../../constants/image";
import { useNavigate } from "react-router-native";

const AddExistingWallet = () => {
  const [showImportOptions, setShowImportOptions] = useState(false);
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

        <Text style={styles.backText}>Add Existing Wallet</Text>
      </View>

      <View style={styles.imageContainer}>
        <Image
          source={Images.Wallet}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <View style={{ paddingHorizontal: 8 }}>
        {walletOptions.map((item, index) => (
          <View key={index} style={styles.stepContainer}>
            <View
              style={{
                borderRadius: "100%",
                padding: 10,
                backgroundColor: "#F5F8FF",
                alignSelf: "center",
              }}
            >
              <Image
                source={item.image}
                style={styles.icons}
                resizeMode="contain"
              />
            </View>
            <View>
              <Text style={{ fontSize: 16, marginBottom: 5 }}>
                {item.title}
              </Text>
              <Text style={{ fontWeight: 300, fontSize: 12, paddingRight: 80 }}>
                {item.text}
              </Text>
            </View>
            <View
              style={{
                marginRight: 30,
                position: "absolute",
                right: -10,
              }}
            >
              <Ionicons name="chevron-forward" size={13} />
            </View>
          </View>
        ))}
      </View>

      <View>
        <PrimaryButton text="Continue with Email" />
        <SecondaryButton
          onPress={() => setShowImportOptions((prev) => !prev)}
          text={"Other import options"}
        />
      </View>
      {showImportOptions && (
        <ImportOptions
          onClose={() => setShowImportOptions((prev) => !prev)}
          visible={showImportOptions}
        />
      )}
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
  stepContainer: {
    backgroundColor: "fff",
    paddingHorizontal: 10,
    paddingVertical: 15,
    marginBottom: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    gap: 10,
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
  icons: {
    width: 18,
    height: 18,
  },
  text: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 22,
    marginTop: 20,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    marginTop: 39,
  },
  image: {
    width: 170,
    height: 136,
  },
});

export default AddExistingWallet;
