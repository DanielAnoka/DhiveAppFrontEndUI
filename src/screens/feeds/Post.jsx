import {
  View,
  TouchableOpacity,
  Dimensions,
  Text,
  TextInput,
  Image,
  TouchableWithoutFeedback,
  Keyboard,
  FlatList,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import PrimaryButton from "../../components/PrimaryButton";
// import { Video } from "expo-av";
import Video from "react-native-video";

import { Icons } from "../../constants/icon";
import { Images } from "../../constants/image";

const Post = ({ onClick, onMentionsClick }) => {
  const isPostingImage = true;

  const videoSource = require("../../../preview.mp4");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View
        className={
          "flex-col flex-1 justify-between items-center relative bg-background px-3 pt-5"
        }
      >
        <View className="w-full flex-col justify-center items-center">
          {isPostingImage ? (
            <FlatList
              data={[1, 2, 3, 4, 5, 6]}
              keyExtractor={() => Math.random() * 50}
              renderItem={() => (
                <Image
                  style={{
                    width: 80,
                    height: 80,
                  }}
                  source={Images.Similar1}
                  className="w-full m-0.5 rounded-md"
                />
              )}
              contentContainerStyle={{
                paddingBottom: 50,
              }}
              horizontal={true}
              // showsHorizontalScrollIndicator={false}
            />
          ) : (
            <View className="relative mb-10 w-[177px] h-[280px]">
              <Video
                source={videoSource}
                resizeMode="cover"
                shouldPlay
                isLooping
                style={{
                  height: "100%",
                  width: "100%",
                }}
              />
              <TouchableOpacity className="absolute bottom-2 bg-[#0A0D1280] left-2 p-3 rounded-2xl">
                <Text className="text-white">Edit Cover</Text>
              </TouchableOpacity>
            </View>
          )}
          {isPostingImage && (
            <Text className="w-full pb-2 text-xs text-textgray">
              Add a title to your picture video
            </Text>
          )}
          <View className="border-t border-[#D5D7DA] py-3 w-full">
            <TextInput
              className={`bg-transparent text-xs ${
                isPostingImage ? "h-40" : "h-20"
              } `}
              placeholder="Write a caption and hashtags......."
              multiline={true}
              numberOfLines={15}
              placeholderTextColor={"#535862"}
            />
            <View className="flex-row space-x-2">
              <TouchableOpacity className="bg-[#F5F5F5] p-3 rounded-lg">
                <Text>#Hashtags</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={onMentionsClick}
                className="bg-[#F5F5F5] p-3 rounded-lg"
              >
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
