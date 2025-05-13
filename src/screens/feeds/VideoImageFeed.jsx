import React, { useState, useRef } from "react";
import { View, FlatList } from "react-native";
import { Video } from "expo-av";

const VideoFeed = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  const data = [
    { id: 1, video: "https:" },
    { id: 2, video: "https://example.com/video2.mp4" },
    { id: 3, video: "https://example.com/video3.mp4" },
  ];

  const onViewableItemsChanged = ({ viewableItems }) => {
    if (viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  };

  const viewabilityConfig = {
    itemVisiblePercentThreshold: 50,
  };

  const renderItem = ({ item, index }) => (
    <View className="h-screen w-full my-5 bg-black">
      <Video
        source={require("../../../test.mp4")}
        className="h-[90%]"
        resizeMode="cover"
        shouldPlay={index === currentIndex}
        // isLooping={true}
        useNativeControls={false}
      />
    </View>
  );

  return (
    <FlatList
      ref={flatListRef}
      data={data}
      renderItem={renderItem}
      keyExtractor={(item) => item.id.toString()}
      pagingEnabled={true}
      showsVerticalScrollIndicator={false}
      onViewableItemsChanged={onViewableItemsChanged}
      viewabilityConfig={viewabilityConfig}
      // className="flex-1"
    />
  );
};

export default VideoFeed;
