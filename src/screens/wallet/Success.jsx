import { SafeAreaView, Text, View, StyleSheet, Image } from "react-native";
import PrimaryButton from "../../components/PrimaryButton";
import { useNavigate } from "react-router-native";
import { Images } from "../../constants";

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
  text: {
    fontSize: 14,
    fontWeight: 300,
    lineHeight: 22,
    marginTop: 10,
    textAlign: "center",
  },
});

export default Success;
