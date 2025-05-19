import { View, Text, TouchableOpacity } from "react-native";
import { Image } from "react-native";
import { Images } from "../../constants/image";

const SubComment = ({ name, comment }) => {
  return (
    <View className="flex-row  gap-x-2 mt-4">
      <Image
        source={Images.ChatAvatar}
        resizeMode="contain"
        className="w-7 h-7 rounded-full"
      />

      <View className="flex-1">
        <View className="bg-[#F5F5F5] p-2 rounded-md">
          <Text className="font-semibold">{name}</Text>
          <Text className="font-light pt-1">{comment}</Text>
        </View>
      </View>
    </View>
  );
};
const Comment = ({ name, comment, subComments, hasNextMessage }) => {
  return (
    <View className="flex-row gap-x-2 my-3">
      <View className="flex-col items-center">
        <Image
          source={Images.ChatAvatar}
          resizeMode="contain"
          className="w-10 h-10 rounded-full"
        />
        {hasNextMessage && (
          <View className="w-0.5 mt-1 h-full bg-[#E9EAEB] flex-1" />
        )}
      </View>

      <View className="flex-1">
        <View className="bg-[#F5F5F5] p-2 rounded-md">
          <Text className="font-semibold">{name}</Text>
          <Text className="font-light pt-1">{comment}</Text>
        </View>

        <View className="flex-row mt-1 items-center gap-x-2">
          <TouchableOpacity>
            <Text>Like</Text>
          </TouchableOpacity>
          <View className="h-1 w-1 rounded-full bg-[#D9D9D9]" />
          <TouchableOpacity>
            <Text>Reply</Text>
          </TouchableOpacity>
        </View>

        {subComments?.map((item, i) => (
          <View key={i} className="-ml-5">
            <SubComment name={item.name} comment={item.comment} />
          </View>
        ))}
      </View>
    </View>
  );
};

export default Comment;
