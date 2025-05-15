import { View, Text, Image, TouchableOpacity } from "react-native";
import { Images } from "../../constants/image";
import { useNavigate } from "react-router-native";

const Chat = ({ day, messages }) => {
  const currentUserId = "123";
  const navigate = useNavigate();
  return (
    <View className="pt-10">
      <View className="border-t border-[#E9EAEB]" />

      <View className="flex-row w-24 mx-auto justify-center -mt-3.5 bg-white items-center">
        <Text className="text-center text-lg text-textgray">{day}</Text>
        <View></View>
      </View>
      {messages?.map((message, index) => {
        const isCurrentUser = message.userId === currentUserId;
        return (
          <View
            key={`${message.userId}-${index}`}
            className={`flex-row ${
              !isCurrentUser ? "items-start" : "items-end justify-end"
            }`}
          >
            <View className="w-[90%] my-3">
              <View className="flex-row items-center justify-between w-full">
                {isCurrentUser ? (
                  <Text className="ml-8 text-textgray mb-1 text-xs">You</Text>
                ) : (
                  <View className="flex-row flex-1 items-center gap-x-2">
                    <TouchableOpacity onPress={() => navigate("/user-profile")}>
                      <Image
                        source={message.avatar}
                        resizeMode="contain"
                        className="w-[26px] mt-2 h-[26px] rounded-full"
                      />
                    </TouchableOpacity>

                    <Text>{message.username}</Text>
                  </View>
                )}

                <Text className="text-textgray text-xs">
                  {message.createdAt}
                </Text>
              </View>
              <View className="pl-8">
                <View
                  className={` rounded-lg ${
                    isCurrentUser
                      ? "bg-[#444CE7] rounded-tr-none"
                      : "border-[#E9EAEB] rounded-tl-none border bg-[#fafafa]"
                  } w-full p-2.5`}
                >
                  {message?.files ? (
                    <View className="flex-row items-center gap-x-2">
                      <Image source={Images.PDF} className="w-10 h-10" />
                      <View>
                        <Text className="text-[#414651] text-sm">
                          {message.files}
                        </Text>
                        <Text className="text-[#414651] text-sm">
                          {message.filesize}
                        </Text>
                      </View>
                    </View>
                  ) : (
                    <Text
                      className={`leading-5 ${isCurrentUser && "text-white"}`}
                    >
                      {message.message}
                    </Text>
                  )}
                </View>
              </View>
              <View
                className={`flex-row ${
                  !isCurrentUser ? "items-start pl-8" : "items-end justify-end"
                } gap-x-2 pt-1`}
              >
                {message.reactions &&
                  message.reactions.map((reaction, i) => (
                    <View key={i} className="rounded-full p-2 bg-[#FAFAFA]">
                      <Text>{reaction}</Text>
                    </View>
                  ))}
              </View>
            </View>
          </View>
        );
      })}
    </View>
  );
};

export default Chat;
