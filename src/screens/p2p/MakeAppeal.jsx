import { View, Text, TextInput, Image } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import PrimaryButton from "../../components/PrimaryButton";
import { Icons } from "../../constants/icon";
import P2PLayout from "./Layout";
import { useNavigate } from "react-router-native";

const MakeAppeal = () => {
  const navigate = useNavigate();
  return (
    <P2PLayout title={"Make Appeal"}>
      <View className="h-full mt-3 px-5">
        <Text className="my-3">Support Reason</Text>
        <View className="bg-white px-2 py-5 flex-row justify-between items-center rounded-md border border-[#F1F1F1]">
          <Text className="flex-1 h-full font-light text-[#535862]">
            Choose Reason
          </Text>

          <Feather name="chevron-down" size={13} color="#00011B80" />
        </View>
        <Text className="my-3 pt-3">Proof</Text>
        <View className="bg-white px-2 py-5 flex-row justify-between items-center rounded-md border border-[#F1F1F1]">
          <Text className="flex-1 h-full font-light text-[#535862]">
            Upload Proof
          </Text>

          <Image source={Icons.Documentupload} className="w-4 h-4" />
        </View>
        <Text className="my-3 pt-3">Description</Text>
        <TextInput
          className="w-full h-36 border p-3 font-light border-[#F1F1F1] rounded-md bg-white"
          numberOfLines={4}
          multiline={true}
          placeholder="Your Appeal Description"
          placeholderTextColor={"#535862"}
        />
        <View className="mt-5">
          <PrimaryButton
            onPress={() => navigate("/appeal-tracking")}
            text={"Send Message"}
            width={"100%"}
          />
        </View>
      </View>
    </P2PLayout>
  );
};

export default MakeAppeal;
