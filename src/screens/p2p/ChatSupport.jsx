import { View, ScrollView } from "react-native";
import { Images } from "../../constants/image";
import P2PLayout from "./Layout";
import Chat from "./Chat";
import { messages } from "../../constants";
import MessageBox from "./MessageBox";
const ChatSupport = () => {
  return (
    <P2PLayout avatar={Images.ChatAvatar} title={"Pomaline Moses"}>
      <ScrollView className="flex-1  p-5">
        <View className="h-full">
          <Chat day={"Thursday"} messages={messages.slice(0, 4)} />
          <Chat day={"Today"} messages={messages.slice(4)} />
          <MessageBox />
        </View>
      </ScrollView>
    </P2PLayout>
  );
};

export default ChatSupport;
