import {
  View,
  Image,
  TouchableOpacity,
  Text,
  Dimensions,
  PanResponder,
} from "react-native";
// import { Video } from "expo-av";
import Video from "react-native-video";

import { useState, useRef } from "react";
import AntDesign from "react-native-vector-icons/AntDesign";
import Feather from "react-native-vector-icons/Feather";
import Entypo from "react-native-vector-icons/Entypo";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Icons } from "../../constants/icon";
import { Images } from "../../constants/image";
import { formatTime } from "../../utils";

export default function FeedItem({
  source,
  index,
  length,
  onCommentClick,
  isVideo,
  isFollowing,
  reposted,
}) {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isReposted, setIsReposted] = useState(reposted);
  const { width, height } = Dimensions.get("window");
  const [status, setStatus] = useState({});
  const currentTime = formatTime(status?.positionMillis || 0);
  const totalTime = formatTime(status?.durationMillis || 0);
  const [dragging, setDragging] = useState(false);
  const [dragX, setDragX] = useState(0);
  const progressWidth = width - 32;

  const handlePlayPause = async () => {
    if (isPlaying) {
      await videoRef.current.pauseAsync();
    } else {
      await videoRef.current.playAsync();
    }
    setIsPlaying(!isPlaying);
  };

  const seek = (millis) => {
    videoRef.current.setPositionAsync(Math.max(0, millis));
  };

  const getProgress = () => {
    if (!status?.durationMillis) return 0;
    return (status.positionMillis / status.durationMillis) * progressWidth;
  };

  const getBuffered = () => {
    if (!status?.durationMillis) return 0;
    return (
      (status.playableDurationMillis / status.durationMillis) * progressWidth
    );
  };

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      setDragging(true);
    },
    onPanResponderMove: (_, gestureState) => {
      const newX = Math.max(
        0,
        Math.min(progressWidth, gestureState.dx + getProgress())
      );
      setDragX(newX);
    },
    onPanResponderRelease: () => {
      const newMillis = (dragX / progressWidth) * status.durationMillis;
      seek(newMillis);
      setDragging(false);
    },
  });

  const handlePosition = dragging ? dragX : getProgress();

  return (
    <View>
      {isVideo ? (
        <Video
          ref={videoRef}
          //   source={{ uri: source }}
          source={source}
          resizeMode="cover"
          shouldPlay={isPlaying}
          isLooping
          style={{
            flex: 1,
            width: width,
            height: index === 0 ? height * 0.545 : height - 100,
          }}
          onPlaybackStatusUpdate={(s) => setStatus(s)}
        />
      ) : (
        <Image
          source={source}
          // source={{ uri: source }}
          style={{
            flex: 1,
            width: Dimensions.get("window").width,
            height: index === 0 ? height * 0.545 : height - 100,
          }}
          resizeMode="cover"
        />
      )}
      {!isPlaying && isVideo && (
        <TouchableOpacity
          className="absolute top-[35%] border-[3px] rounded-full p-1 border-white  right-1/2"
          onPress={handlePlayPause}
        >
          <Entypo name="controller-play" size={28} color="white" />
        </TouchableOpacity>
      )}

      {/* Right Side Buttons */}
      <View
        className={`absolute right-2  ${
          index === 0 ? "-top-0" : "top-[25%]"
        } items-center space-y-5`}
      >
        <View className="flex-col mb-5 items-center justify-center">
          <View
            className={`p-[1px]   rounded-full  bg-transparent border-2 border-[#444CE7] ${
              index === 0 && "hidden"
            }`}
          >
            <Image
              source={Images.ChatAvatar}
              resizeMode="contain"
              className="w-[42px] h-[42px] rounded-full"
            />
          </View>
          {!isFollowing && (
            <TouchableOpacity className="-mt-2">
              <AntDesign
                name="plussquare"
                size={13}
                style={{
                  borderRadius: 40,
                }}
                color={"#D92D20"}
              />
            </TouchableOpacity>
          )}
        </View>

        <TouchableOpacity className="flex-col items-center gap-y-0.5">
          <Image source={Icons.Graph} className="w-8 h-8" />
          <Text className="text-white">Buy</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-col items-center gap-y-0.5">
          <Image source={Icons.TradeWhite} className="w-8 h-8" />
          <Text className="text-white">Trade</Text>
        </TouchableOpacity>
        <TouchableOpacity className="flex-col items-center gap-y-0.5">
          <Image source={Icons.Love} className="w-8 h-8" />
          <Text className="text-white">25.10k</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={onCommentClick}
          className="flex-col items-center gap-y-0.5"
        >
          <Image source={Icons.Message} className="w-8 h-8" />
          <Text className="text-white">25.10k</Text>
        </TouchableOpacity>
      </View>

      {/* Play/Pause and Progress Bar */}

      <View
        className={`absolute ${
          index === length - 1 ? "bottom-0" : "bottom-[2%]"
        } w-full pl-1`}
      >
        <View className={`${isVideo ? "mb-4" : "mb-14"} flex-row pl-2`}>
          {isReposted ? (
            <View className="flex-row items-center bg-[#F8F9FC] rounded-2xl border border-[#D5D9EB]">
              <Image
                source={Images.ChatAvatar}
                resizeMode="cover"
                className="w-5 h-5 rounded-full border border-white"
              />
              <Text className="pr-2 pl-1 text-xs">You reposted</Text>
            </View>
          ) : (
            <TouchableOpacity
              onPress={() => setIsReposted(true)}
              className="flex-row items-center gap-x-2"
            >
              <Feather name="repeat" size={30} color={"white"} />
              <Text className="text-white">Repost</Text>
            </TouchableOpacity>
          )}
        </View>
        {isVideo && (
          <View>
            <View className="gap-x-1 flex-row items-center">
              <TouchableOpacity onPress={handlePlayPause}>
                {isPlaying ? (
                  <Ionicons name="pause" size={28} color="white" />
                ) : (
                  <Entypo name="controller-play" size={28} color="white" />
                )}
              </TouchableOpacity>

              <View className="h-1.5 w-[88%] rounded bg-[#2f2f2f] overflow-hidden">
                {/* Buffered */}
                <View
                  style={{ width: getBuffered() }}
                  className="absolute left-0 top-0 bottom-0 bg-[#888888]"
                />
                {/* Played */}
                <View
                  style={{ width: getProgress() }}
                  className="absolute left-0 top-0 bottom-0 bg-white"
                />
              </View>

              {/* Handle */}
              <View
                style={{
                  position: "absolute",
                  bottom: 9.5, // offset for radius
                  left: 30 + handlePosition, // padding + position - radius
                  width: 10,
                  height: 10,
                  borderRadius: 8,
                  backgroundColor: "white",
                  zIndex: 10,
                }}
                {...panResponder.panHandlers}
              />
            </View>
            <View className="px-2 mb-1 flex-row justify-between items-center gap-x-2">
              <Text className="text-white text-sm">{currentTime}</Text>
              <Text className="text-white text-sm">{totalTime}</Text>
            </View>
          </View>
        )}
        <View
          style={{ width: width + 5 }}
          className="px-2 py-5 flex-row bg-[#0A0D12] w-full justify-between items-center gap-x-2"
        >
          <Text className="text-white ">Apple Watch Series 9 (Pink)</Text>
          <View className="border-[0.5px] border-[#ABEFC6] bg-[#ECFDF3] rounded-xl py-1 px-3">
            <Text>$132.78</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
