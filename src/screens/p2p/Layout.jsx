import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigate } from "react-router-native";

const P2PLayout = ({ onClick, avatar, onBackButtonPress, title, children }) => {
  const navigate = useNavigate();

  return (
    <SafeAreaView className="bg-[#1F235B] flex-1">
      <StatusBar barStyle="light-content" backgroundColor="#1F235B" />

      <View className={"flex-1 bg-background"}>
        <View className="flex-row bg-[#1F235B] p-5  w-full items-center justify-between">
          <TouchableOpacity
            onPress={onBackButtonPress ? onBackButtonPress : () => navigate(-1)}
          >
            <View className="w-[30px] h-[30px] rounded-full bg-transparent justify-center items-center border border-white">
              <Ionicons name="chevron-back" size={20} color="#fff" />
            </View>
          </TouchableOpacity>
          <View className="flex-row gap-x-1.5 items-center">
            {avatar && (
              <Image
                source={avatar}
                resizeMode="contain"
                className="w-[26px] h-[26px] rounded-full"
              />
            )}
            <Text className="text-lg text-white">{title}</Text>
          </View>

          {onClick ? (
            <TouchableOpacity onPress={onClick}>
              <View className="px-2.5 py-1.5 rounded-xl bg-transparent justify-center items-center border border-white">
                <AntDesign name="filter" size={17} color="#fff" />
              </View>
            </TouchableOpacity>
          ) : (
            <View></View>
          )}
        </View>
        {children}
      </View>
    </SafeAreaView>
  );
};

export default P2PLayout;
