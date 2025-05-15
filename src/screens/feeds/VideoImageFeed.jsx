// import { useState, useRef } from "react";
// import { View, FlatList, Dimensions } from "react-native";
// import FeedItem from "./test";
// import { Images } from "../../constants/image";

// const VideoFeed = ({ component, onCommentClick }) => {
//   const [currentIndex, setCurrentIndex] = useState(0);
//   const flatListRef = useRef(null);
//   const { height } = Dimensions.get("window");
//   const videoSource = require("../../../test2.mp4");

//   const data = [
//     { id: 1, video: videoSource, isVideo: true },
//     { id: 2, video: videoSource, isVideo: true },
//     { id: 3, video: Images.Feed, isVideo: false },
//     { id: 4, video: Images.Feed, isVideo: false },
//   ];

//   const onViewableItemsChanged = ({ viewableItems }) => {
//     if (viewableItems.length > 0) {
//       setCurrentIndex(viewableItems[0].index);
//     }
//   };

//   const viewabilityConfig = {
//     itemVisiblePercentThreshold: 100,
//   };

//   return (

//   );
// };

// export default VideoFeed;
