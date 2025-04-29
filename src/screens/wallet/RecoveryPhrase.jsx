import { SafeAreaView, Text, View, StyleSheet, TextInput } from "react-native";
import DynamicStepLayout from "../StepOneLayout";
import PrimaryButton from "../../components/PrimaryButton";
import { useNavigate } from "react-router-native";

const RecoveryPhrase = () => {
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
              Recovery Phrase
            </Text>
            <Text style={styles.text}>
              Restore an existing wallet with your 12 or 24-word recovery phrase
            </Text>

            <View>
              <Text style={{ fontSize: 16, marginTop: 30 }}>Secret Phrase</Text>
              <TextInput
                style={styles.textArea}
                multiline={true}
                numberOfLines={4}
                // onChangeText={(text) => setText(text)}
                placeholder="Enter your text here"
              />
            </View>
          </View>

          <PrimaryButton
            onPress={() => navigate("/import-account")}
            text="Import Recovery Phrase"
            width={"100%"}
          />
        </View>
      </DynamicStepLayout>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
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

export default RecoveryPhrase;
