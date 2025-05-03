import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  ActivityIndicator,
} from "react-native";
import DynamicStepLayout from "../StepOneLayout";
import PrimaryButton from "../../components/PrimaryButton";
import { useNavigate } from "react-router-native";
import { useEffect, useState } from "react";
import SecondaryButton from "../../components/SecondaryButton";
import Ionicons from "react-native-vector-icons/Ionicons";
import Accounts from "./Accounts";

const ImportAccount = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [showAccounts, setShowAccounts] = useState(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fdfdfd" }}>
      <DynamicStepLayout length={3} currentStep={2}>
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
              height: "85%",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
              backgroundColor: "#fdfdfd",
            }}
          >
            {loading ? (
              <View
                style={{
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <ActivityIndicator
                  size="large"
                  color="#444CE7"
                  style={styles.loader}
                />
                <Text style={{ fontSize: 16, fontWeight: 500 }}>
                  Importing Accounts
                </Text>
                <Text style={styles.text}>Finding accounts with activity</Text>
              </View>
            ) : (
              <View
                style={{
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                <Ionicons name="checkmark-circle" size={60} color="#444CE7" />

                <Text style={{ fontSize: 16, fontWeight: 500 }}>
                  Importing Accounts
                </Text>
                <Text style={styles.text}>
                  We found 1 account with activity
                </Text>
              </View>
            )}
            {showAccounts && <Accounts />}
          </View>
          {!loading && (
            <View>
              <PrimaryButton
                onPress={() => navigate("/protect-wallet")}
                text="Continue"
                width={"100%"}
              />
              {!showAccounts && (
                <SecondaryButton
                  onPress={() => setShowAccounts((prev) => !prev)}
                  text="View Accounts"
                  width={"100%"}
                />
              )}
            </View>
          )}
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

  text: {
    fontSize: 14,
    fontWeight: 300,
    lineHeight: 22,
    marginTop: 10,
  },
});

export default ImportAccount;
