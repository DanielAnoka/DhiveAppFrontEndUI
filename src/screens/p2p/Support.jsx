import { View, Text, TextInput } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import PrimaryButton from "../../components/PrimaryButton";
import P2PLayout from "./Layout";

const Support = () => {
  return (
    <P2PLayout title={"Support"}>
      <View className="h-full mt-5 px-5">
        <Text className="my-3">Support Category</Text>
        <View className="bg-white px-2 py-4 flex-row justify-between items-center rounded-md border border-[#F1F1F1]">
          <Text className="flex-1 h-full font-light text-[#535862]">
            Select Category
          </Text>

          <Feather name="chevron-down" size={13} color="#00011B80" />
        </View>
        <Text className="my-3 pt-3">Subject</Text>
        <View className="bg-white px-2 py-4 flex-row justify-between items-center rounded-md border border-[#F1F1F1]">
          <Text className="flex-1 h-full font-light text-[#535862]">
            Your Complaint Title
          </Text>

          <Feather name="chevron-down" size={13} color="#00011B80" />
        </View>
        <Text className="my-3 pt-3">Subject</Text>
        <TextInput
          className="w-full h-36 border p-3 font-light border-[#F1F1F1] rounded-md bg-white"
          numberOfLines={4}
          multiline={true}
          placeholder="Your message"
          placeholderTextColor={"#535862"}
        />
        <View className="mt-5">
          <PrimaryButton text={"Send Message"} width={"100%"} />
        </View>
      </View>
    </P2PLayout>
  );
};

export default Support;
