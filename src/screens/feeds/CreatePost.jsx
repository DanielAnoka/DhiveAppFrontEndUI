import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigate } from "react-router-native";
import ChooseMedia from "./ChooseMedia";
import { useState } from "react";
import PreviewPage from "./PreviewPage";
import Post from "./Post";
import Mentions from "./Mentions";

const CreatePost = () => {
  const navigate = useNavigate();
  const [phase, setPhase] = useState("home");

  const RenderPage = ({ phase }) => {
    switch (phase) {
      case "preview":
        return (
          <PreviewPage
            onClick={() => setPhase("post")}
            onBack={() => setPhase("home")}
          />
        );
      case "post":
        return (
          <Post
            onClick={() => setPhase("post")}
            onMentionsClick={() => setPhase("mentions")}
          />
        );
      case "mentions":
        return <Mentions onClick={() => setPhase("post")} />;

      default:
        return <ChooseMedia onClick={() => setPhase("preview")} />;
    }
  };

  return (
    <SafeAreaView className="bg-background flex-1">
      <StatusBar barStyle="dark-content" />

      <RenderPage phase={phase} />
    </SafeAreaView>
  );
};

export default CreatePost;
