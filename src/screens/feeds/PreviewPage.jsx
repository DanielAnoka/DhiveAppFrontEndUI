import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigate } from "react-router-native";
import { Icons } from "../../constants/icon";
import { media } from "../../constants";
import { useState } from "react";

import PrimaryButton from "../../components/PrimaryButton";
import { Video } from "expo-av";
import { Images } from "../../constants/image";

const PreviewPage = ({ onClick, onBack }) => {
  const isPostingImage = true;
  const videoSource = require("../../../preview.mp4");

  return (
    <View className={"flex-1 relative bg-background px-3 pt-5"}>
      <TouchableOpacity
        className="absolute top-10 left-5 z-50"
        onPress={onBack}
      >
        <View className="w-[30px] h-[30px] rounded-full bg-transparent justify-center items-center border border-white">
          <Ionicons name="chevron-back" size={20} color="#fff" />
        </View>
      </TouchableOpacity>

      <View className="flex-1">
        {!isPostingImage ? (
          <Video
            //   ref={videoRef}
            //   source={{ uri: source }}
            source={videoSource}
            resizeMode="cover"
            shouldPlay
            isLooping
            style={{
              height: Dimensions.get("window").height * 0.8,
              flex: 1,
              marginBottom: 20,
            }}
            //   onPlaybackStatusUpdate={(s) => setStatus(s)}
          />
        ) : (
          <Image
            source={Images.Similar1}
            style={{
              height: Dimensions.get("window").height * 0.6,
            }}
            className="w-full mb-5 rounded-md"
          />
        )}
        <View className="w-full justify-center items-center">
          <TouchableOpacity>
            <Ionicons name="chevron-down" size={20} color="#000" />
          </TouchableOpacity>
        </View>

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
            padding: 10,
            paddingLeft: Dimensions.get("screen").width * 0.35,
            // flex: 1,
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />

        <PrimaryButton onPress={onClick} text={"Next"} />
      </View>
    </View>
  );
};

export default PreviewPage;
