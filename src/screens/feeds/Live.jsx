import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Image,
  TextInput,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from "expo-linear-gradient";

import Fontisto from "react-native-vector-icons/Fontisto";
import { useNavigate } from "react-router-native";
import { Images } from "../../constants/image";
import { Icons } from "../../constants/icon";

const LivePage = () => {
  const navigate = useNavigate();
  const isFollowing = false;

  return (
    <SafeAreaView className="bg-black flex-1">
      <StatusBar barStyle="light-content" />

      <View className={"flex-1 "}>
        <Image
          source={Images.LiveImage}
          resizeMode="centre"
          className="w-full h-full rounded-t-md"
        />
        <View className="absolute flex-col justify-between  h-full w-full top-3">
          <View className="flex-row justify-between items-center px-2  w-full">
            <View className="flex-row gap-x-2.5 mt-2.5 items-center">
              <Image
                source={Images.Avatar}
                resizeMode="contain"
                className="w-10 h-10"
              />
              <Text className="text-white">Swiftrole's Dhive</Text>
            </View>
            <View className="flex-row  items-center gap-x-1">
              <TouchableOpacity>
                <LinearGradient
                  colors={["#6172F3", "#444CE7", "#2D31A6"]}
                  start={{ x: 0, y: 0 }}
                  end={{ x: 1, y: 0 }}
                  className="px-3 rounded-md py-1.5"
                >
                  <Text className="text-white text-xs">
                    {isFollowing ? "LIVE" : "+ FOLLOW"}
                  </Text>
                </LinearGradient>
              </TouchableOpacity>
              <View className="flex-row bg-[#0000004D] py-1.5 px-2 rounded-md items-center gap-x-1">
                <Image source={Images.Shape} className="w-2.5 h-2.5" />
                <Text className="text-white text-xs">110</Text>
              </View>
              <TouchableOpacity onPress={() => navigate(-1)}>
                <Ionicons name="close" size={25} color="white" />
              </TouchableOpacity>
            </View>
          </View>
          <View>
            <View className="px-5">
              <Text className="text-white font-light mb-3 text-xs">
                We're telling your followers that you’ve started a live video.
              </Text>
              <Text className="text-white font-light mb-3 text-xs">
                Hang on! We're telling more followers to join your video.
              </Text>
              {[
                {
                  name: "",
                  comment: "maxjacobson joined",
                },
                {
                  name: "Ayomide",
                  comment: "maxjacobson joined",
                },
                {
                  name: "Dayemo",
                  comment: "All your products are nice and okay",
                },
                {
                  name: "Juan",
                  comment: "What is your delivery fee for this product",
                },
              ].map((item, i) => (
                <View key={i} className="flex-row mb-3 items-center gap-x-2">
                  <Image
                    source={Images.ChatAvatar}
                    resizeMode="contain"
                    className="w-7 h-7 rounded-full"
                  />
                  <View>
                    {item.name && (
                      <Text className="text-[#D5D7DA]">{item.name}</Text>
                    )}
                    <Text className="text-white">{item.comment}</Text>
                  </View>
                </View>
              ))}
            </View>
            <View className="flex-row px-2 pt-4 pb-7 bg-[#0A0D12] items-center gap-x-2.5">
              <TextInput
                className="w-full flex-1 border px-2 text-white py-3 border-[#414651] rounded-md bg-[#181D27]"
                placeholder="Comment"
                placeholderTextColor={"#717680"}
              />
              <TouchableOpacity>
                <Image source={Icons.Questions} className="w-6 h-6" />
              </TouchableOpacity>

              <TouchableOpacity>
                <Fontisto name="heart-alt" size={24} color={"#fff"} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default LivePage;
