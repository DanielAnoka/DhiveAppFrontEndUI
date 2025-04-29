import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
import DynamicStepLayout from "./StepOneLayout";
import Ionicons from "react-native-vector-icons/Ionicons";
import Button from "../components/Button";

const phase1 = () => {
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <View style={styles.headerContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => console.log("hello")}
        >
          <View style={styles.circle}>
            <Ionicons name="chevron-back" size={20} color="#000" />
          </View>
        </TouchableOpacity>

        <Text style={styles.backText}>Secure Your Wallet</Text>
      </View>

      <DynamicStepLayout currentStep={2} length={4}>
        <Text style={styles.text}>
          Your <Text style={styles.boldText}>Secret Passphrase</Text> is the
          master key to your wallet. This is the only way to recover your wallet
          if you ever get locked out of the app or sign into a new device.
        </Text>

        <Button
          onPress={console.log("hello")}
          text="Backup on Drive"
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
      </DynamicStepLayout>
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
  text: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: 22,
    marginTop: 20,
    letterSpacing: 0.48,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
    marginTop: 39,
  },
  image: {
    width: 350,
    height: 380,
  },
  container: {
    backgroundColor: "#FFFAEB",
    padding: 16,
    borderRadius: 8,
    marginBottom: 16,
    borderColor: "#FEDF89",
  },
  warningText: {
    color: "#B54708",
    fontSize: 15,
    lineHeight: 22,
    textAlign: "left",
  },
  boldText: {
    fontWeight: "bold",
  },
});

export default phase1;
