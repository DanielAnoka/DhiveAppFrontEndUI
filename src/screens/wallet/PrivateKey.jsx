import { SafeAreaView, Text, View, StyleSheet, TextInput } from "react-native";
import DynamicStepLayout from "../StepOneLayout";
import PrimaryButton from "../../components/PrimaryButton";
import { useNavigate } from "react-router-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Dropdown from "../../components/Dropdown";

const PrivateKey = () => {
  const navigate = useNavigate();

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fdfdfd" }}>
      <DynamicStepLayout length={3} currentStep={1}>
        <View
          style={{
            flexDirection: "column",
            height: "90%",
            justifyContent: "space-between",
          }}
        >
          <View>
            <Text style={{ fontSize: 16, fontWeight: 500, paddingTop: 15 }}>
              Private Key
            </Text>
            <Text style={styles.text}>
              Restore an existing wallet with your private key
            </Text>

            <View style={styles.container}>
              <Text style={{ fontSize: 14 }}>Network</Text>
              {/* <TextInput
                style={styles.textArea}
                // onChangeText={(text) => setText(text)}
                placeholder="Solana"
              /> */}

              <Dropdown
                options={[{ value: "Solana" }, { value: "Ethereum" }]}
              />
              <View
                style={{
                  marginRight: 30,
                  position: "absolute",
                  right: -25,
                }}
              >
                <Ionicons name="chevron-forward" size={13} />
              </View>
            </View>
            <View style={styles.container}>
              <Text style={{ fontSize: 14 }}>Name</Text>
              <TextInput
                style={styles.textArea}

                // onChangeText={(text) => setText(text)}
              />
            </View>
            <View style={styles.container}>
              <Text style={{ fontSize: 14 }}>Network</Text>
              <Text style={{ fontSize: 14, color: "#444CE7" }}>Paste</Text>
            </View>
          </View>

          <PrimaryButton
            onPress={() => navigate("/import-account")}
            text="Import"
            width={"100%"}
          />
        </View>
      </DynamicStepLayout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  textArea: {
    width: "30%",
  },

  container: {
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "#E9EAEB",
    borderRadius: 5,
    alignItems: "center",
    paddingHorizontal: 5,
    paddingVertical: 14,
    marginBottom: 10,
  },

  text: {
    fontSize: 14,
    fontWeight: 300,
    lineHeight: 22,
    marginTop: 20,
    marginBottom: 40,
  },
});

export default PrivateKey;
