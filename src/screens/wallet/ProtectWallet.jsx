import { SafeAreaView, Text, View, StyleSheet, Image } from "react-native";
import DynamicStepLayout from "../StepOneLayout";
import PrimaryButton from "../../components/PrimaryButton";
import { useNavigate } from "react-router-native";
import { Images, protectWalletOptions, walletOptions } from "../../constants";
import ToggleSwitch from "../../components/Switch";

const ProtectWallet = () => {
  const navigate = useNavigate();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fdfdfd" }}>
      <DynamicStepLayout length={3} currentStep={3}>
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
                source={Images.Password}
                style={{ width: 142, height: 142 }}
                resizeMode="contain"
              />

              <Text
                style={{ fontSize: 16, fontWeight: 500, marginVertical: 10 }}
              >
                Protect your Wallet
              </Text>
              <Text style={styles.text}>
                Adding biometric security will ensure that you are the only one
                that can access your wallet
              </Text>
            </View>
            <View style={{ width: "100%", marginTop: 100 }}>
              {protectWalletOptions.map((item, index) => (
                <View key={index} style={styles.stepContainer}>
                  <View style={{ flexDirection: "row", gap: 5 }}>
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
                      <Text
                        style={{
                          fontWeight: 300,
                          fontSize: 12,
                        }}
                      >
                        {item.text}
                      </Text>
                    </View>
                  </View>

                  <View
                    style={{
                      marginRight: 30,
                      position: "absolute",
                      right: -10,
                    }}
                  >
                    <ToggleSwitch onChange={() => navigate("/pin")} />
                  </View>
                </View>
              ))}
            </View>
          </View>

          <PrimaryButton
            onPress={() => navigate("/success")}
            text="Continue"
            width={"100%"}
          />
        </View>
      </DynamicStepLayout>
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

export default ProtectWallet;
