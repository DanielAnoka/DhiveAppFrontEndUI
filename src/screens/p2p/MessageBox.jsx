import { View, Text, TextInput, TouchableOpacity } from "react-native";
import Entypo from "react-native-vector-icons/Entypo";

const MessageBox = () => {
  return (
    <View>
      <TextInput
        className="w-full h-16 border p-2 border-[#D5D7DA] rounded-md bg-white"
        placeholder="Send a message"
        numberOfLines={4}
        multiline={true}
      />
      <View className="flex-row items-center my-3 gap-x-2 justify-end">
        <TouchableOpacity>
          <Entypo name="emoji-happy" size={17} color={"#717680"} />
        </TouchableOpacity>
        <TouchableOpacity>
          <View className="px-1.5 py-2 flex-row items-center justify-center gap-x-0.5">
            <View className="w-1 h-1 bg-[#717680] rounded-full" />
            <View className="w-1 h-1 bg-[#717680] rounded-full" />
            <View className="w-1 h-1 bg-[#717680] rounded-full" />
          </View>
        </TouchableOpacity>
        <TouchableOpacity className="bg-primary p-3 rounded-lg">
          <Text className="text-white">Send message</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MessageBox;
