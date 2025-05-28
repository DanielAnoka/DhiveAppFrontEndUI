import { View, Text, Image, TouchableOpacity } from "react-native";
import { Images } from "../../constants/image";
import { useNavigate } from "react-router-native";
import LinearGradient from "react-native-linear-gradient";

const LiveCard = () => {
  const navigate = useNavigate();

  return (
    <TouchableOpacity
      onPress={() => navigate("/live")}
      className="mr-5 mt-3 relative flex-col items-center"
    >
      <View className="p-0.5 rounded-full bg-white border-2 border-[#444CE7]">
        <Image
          source={Images.ChatAvatar}
          resizeMode="contain"
          className="w-[65px] h-[65px] rounded-full"
        />
      </View>
      {/* <View className="bg-[#444CE7] -mt-2.5 border border-white p-1 flex-row rounded">
      </View> */}
      <LinearGradient
        colors={["#6172F3", "#444CE7", "#2D31A6"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        className="-mt-2.5 border border-white p-1 flex-row rounded"
      >
        <Text className="text-white text-[8px]">LIVE</Text>
      </LinearGradient>

      <Text className="text-xs -mt-0.5">NextGen</Text>
    </TouchableOpacity>
  );
};

export default LiveCard;
