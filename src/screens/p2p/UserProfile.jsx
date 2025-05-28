import { View, Text, Image, TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import LinearGradient from "react-native-linear-gradient";
import { Images } from "../../constants/image";
import { Icons } from "../../constants/icon";
import PrimaryButton from "../../components/PrimaryButton";
import P2PLayout from "./Layout";
import { useNavigate } from "react-router-native";

const UserProfile = () => {
  const navigate = useNavigate();
  return (
    <P2PLayout title={"Pomaline Moses"}>
      <View className="flex-col space-y-3 px-5 mt-10 items-center justify-center">
        <Image source={Images.ChatAvatar} className="w-20 h-20" />

        <View className="flex-row items-center gap-x-2">
          <Text>Pomaline.DH</Text>
          <MaterialIcons name="verified" color={"#6172F3"} />
        </View>
        <Text>Completed trade 239(89%)</Text>

        <View className="flex-row items-center mb-5 gap-x-2.5">
          <View className="flex-row bg-[#34C7590D] py-2 px-3 rounded-3xl items-center gap-x-0.5">
            <FontAwesome name="thumbs-up" color={"#34C759"} />

            <Text className="text-[#34C759] text-xs"> 789</Text>
          </View>
          <View className="flex-row bg-[#006CFB0D] py-2 px-3 rounded-3xl items-center gap-x-0.5">
            <Image source={Icons.Medalstar} className="w-4 h-4" />

            <Text className="text-[#006CFB] text-xs"> 4.8</Text>
          </View>
          <TouchableOpacity
            onPress={() => navigate("/chat-support")}
            className="pl-1"
          >
            <LinearGradient
              colors={["#6172F3", "#444CE7", "#2D31A6"]}
              start={{ x: 0, y: 0 }}
              end={{ x: 1, y: 0 }}
              className="flex-row justify-center  pr-2 py-2 items-center gap-x-2 rounded-3xl"
            >
              <Image source={Icons.Messagenotif} className="w-4 h-4" />

              <Text className="text-white">Chat</Text>
            </LinearGradient>
          </TouchableOpacity>
        </View>
        <View className="bg-[#FAFAFA] w-full mt-20 mb-10  rounded-xl py-3 px-5 ">
          <View className="flex-row justify-between mb-6 items-center">
            <Text className="text-textgray font-light">
              Average Release Time
            </Text>
            <Text className="font-medium">16 Min</Text>
          </View>
          <View className="flex-row justify-between mb-6 items-center">
            <Text className="text-textgray font-light">Average Pay Time</Text>
            <Text className=" font-medium">3 Min</Text>
          </View>
          <View className="flex-row justify-between mb-6 items-center">
            <Text className="text-textgray font-light">Ratings</Text>
            <Text className="font-medium text-primary">89%</Text>
          </View>
          <View className="flex-row justify-between mb-6 items-center">
            <Text className="text-textgray font-light">Reviews</Text>
            <Text className=" font-medium">67</Text>
          </View>
          <View className="flex-row justify-between mb-6 items-center">
            <Text className="text-textgray font-light">Registered Date</Text>
            <Text className="font-medium">02/06/2025</Text>
          </View>
        </View>
        <PrimaryButton text={"Block Trader"} width={"100%"} />
      </View>
    </P2PLayout>
  );
};

export default UserProfile;
