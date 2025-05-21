import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigate } from "react-router-native";
import ContainerWrapper from "../../components/ContainerWrapper";
import { Images } from "../../constants/image";
import { LinearGradient } from "expo-linear-gradient";
import Chat from "../p2p/Chat";
import MessageBox from "../p2p/MessageBox";
import { messages } from "../../constants";

const SendMessage = () => {
  return (
    <SafeAreaView className="bg-[#FDFDFD] px-5">
      <StatusBar barStyle="dark-content" backgroundColor="#fdfdfd" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        className={" bg-background h-full"}
      >
        <LinearGradient
          colors={["#E0C3FC", "#8EC5FC"]}
          start={{ x: 0, y: 1 }}
          end={{ x: 1, y: 0 }}
          className="h-20"
        ></LinearGradient>
        <ContainerWrapper>
          <View className="flex-row justify-between items-end -mt-10">
            <View className="flex items-end">
              <Image
                source={Images.Avatar}
                resizeMode="contain"
                className="w-24 h-24 border border-white rounded-full"
              />
              <View>
                <Image
                  source={Images.Gradient}
                  resizeMode="contain"
                  className="w-4 h-4 -mt-6 -ml-5"
                />
              </View>
            </View>
            <View>
              <View className="flex-row items-center gap-x-1">
                <View className="bg-[#F5F5F5] flex-row items-center gap-x-2  py-0.5 px-1 rounded-md">
                  <Image
                    source={Images.AU}
                    resizeMode="contain"
                    className="w-4 h-4"
                  />
                  <Text className="text-sm text-center ">$STL</Text>
                </View>
                <View className="flex-row items-center gap-x-1 py-0.5 px-1 rounded-md">
                  <AntDesign name="user" size={18} />
                  <Text className="text-sm text-center ">16.3k</Text>
                </View>
              </View>
            </View>
          </View>
          <View className="mt-5 flex-row items-center space-x-1.5">
            <Text className="mb-1 font-semibold text-xl">
              Swiftrole’s Dhives
            </Text>
            <View className="w-2.5 h-2.5 bg-[#17B26A] rounded-full" />
          </View>

          <View className="flex-row items-center space-x-1.5 my-1.5">
            <View className="bg-[#F8F9FC] flex-row gap-x-1 items-center p-1 border border-[#D5D9EB] rounded-3xl">
              <View className="w-2 h-2 rounded-full bg-[#4E5BA6]" />
              <Text className="text-[#363F72] ">Ox79....107hg</Text>
            </View>
            <View className="bg-[#EEF4FF] flex-row gap-x-1 items-center p-1 border border-[#C7D7FE] rounded-3xl">
              <View className="w-2 h-2 rounded-full bg-[#6172F3]" />
              <Text className="text-[#3538CD] ">Technology</Text>
            </View>
            <View className="bg-[#ECFDF3] flex-row gap-x-1 items-center p-1 border border-[#ABEFC6] rounded-3xl">
              <View className="w-2 h-2 rounded-full bg-[#4E5BA6]" />
              <Text className="text-[#067647] ">Cash Back - 20%</Text>
            </View>
          </View>
          <View className="h-full">
            <Chat day={"Thursday"} messages={messages.slice(0, 4)} />
            <Chat day={"Today"} messages={messages.slice(4)} />
            <MessageBox />
          </View>
        </ContainerWrapper>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SendMessage;
