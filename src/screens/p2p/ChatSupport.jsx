import { View, ScrollView } from "react-native";
import { useNavigate } from "react-router-native";
import { Images } from "../../constants/image";
import { useState } from "react";
import P2PLayout from "./Layout";
import Chat from "./Chat";
import Support from "./Support";
import { messages } from "../../constants";
import MessageBox from "./MessageBox";
import UserProfile from "./UserProfile";
import MakeAppeal from "./MakeAppeal";
import AppealTracking from "./AppealTracking";

const ChatSupport = () => {
  const navigate = useNavigate();
  // const [page, setPage] = useState({page: "profile", title : 'Pomaline Moses'});
  const [page, setPage] = useState({ page: "home", title: "Support" });
  // const [page, setPage] = useState({ page: "support", title: "Support" });
  // const [page, setPage] = useState({ page: "appeal", title: "Make Appeal" });
  // const [page, setPage] = useState({
  //   page: "appeal-tracking",
  //   title: "Appeal Tracking",
  // });

  const RenderPage = ({ page }) => {
    switch (page) {
      case "support":
        return <Support />;
      case "profile":
        return <UserProfile />;
      case "appeal-tracking":
        return <AppealTracking />;

      default:
        return (
          <View className="h-full">
            <Chat day={"Thursday"} messages={messages.slice(0, 4)} />
            <Chat day={"Today"} messages={messages.slice(4)} />
            <MessageBox />
          </View>
        );
    }
  };

  return (
    <P2PLayout
      avatar={page.page === "home" ? Images.ChatAvatar : null}
      title={page.title}
    >
      <ScrollView className="flex-1  p-5">
        <RenderPage page={page.page} />
      </ScrollView>
    </P2PLayout>
  );
};

export default ChatSupport;
