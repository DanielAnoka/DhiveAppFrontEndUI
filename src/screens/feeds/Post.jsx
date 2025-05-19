import {
  View,
  TouchableOpacity,
  Dimensions,
  Text,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigate } from "react-router-native";
import PrimaryButton from "../../components/PrimaryButton";
import SecondaryButton from "../../components/SecondaryButton";
import { Video } from "expo-av";
import { Icons } from "../../constants/icon";

const Post = ({ onClick, onBack }) => {
  const navigate = useNavigate();
  const videoSource = require("../../../preview.mp4");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        className={
          "flex-1 flex-col justify-center items-center relative bg-background px-3 pt-5"
        }
      >
        <View className="relative pb-5 w-[177px] h-[280px]">
          <Video
            source={videoSource}
            resizeMode="cover"
            shouldPlay
            isLooping
            style={{
              height: "100%",
              width: "100%",
            }}
            //   onPlaybackStatusUpdate={(s) => setStatus(s)}
          />
          <TouchableOpacity className="absolute bottom-2 bg-[#0A0D1280] left-2 p-3 rounded-2xl">
            <Text className="text-white">Edit Cover</Text>
          </TouchableOpacity>
          {/* <Image
          source={selectedMedia}
          style={{
            height: Dimensions.get("window").height * 0.8,
          }}
          className="w-full mb-5"
        /> */}
        </View>
        <View className="border-t border-[#D5D7DA] py-3 w-full mt-5">
          <TextInput
            className="bg-transparetn h-20 px-2 py-2.5 mt-2"
            placeholder="Write a caption and hashtags......."
            multiline={true}
            numberOfLines={15}
          />
          <View className="flex-row space-x-2">
            <TouchableOpacity className="bg-[#F5F5F5] p-3 rounded-lg">
              <Text>#Hashtags</Text>
            </TouchableOpacity>
            <TouchableOpacity className="bg-[#F5F5F5] p-3 rounded-lg">
              <Text>@Mention</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-between mt-10 items-center">
            <View className="flex-row space-x-2 items-center">
              <Image source={Icons.Map} className="w-5 h-5" />
              <Text>Location</Text>
            </View>
            <Ionicons name="chevron-forward" size={15} color="#000" />
          </View>
        </View>
        <View className="flex-row items-center my-3 w-full space-x-2">
          {Array(4)
            .fill("")
            .map((_, i) => (
              <TouchableOpacity
                key={i}
                className="bg-[#F5F5F5] p-1.5 rounded-lg"
              >
                <Text className="text-[10.5px]">Victoria Island</Text>
              </TouchableOpacity>
            ))}
        </View>
        <View className="flex-row items-center space-x-3 mt-10 justify-between">
          <View className="flex-1">
            <TouchableOpacity className="bg-[#FAFAFA] flex-row justify-center items-center border py-4 rounded-lg border-[#D5D7DA]">
              <Text>Save to Drafts</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-1">
            <PrimaryButton onPress={onClick} text={"Post"} />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default Post;
