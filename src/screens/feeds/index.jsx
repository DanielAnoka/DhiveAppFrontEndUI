import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  StatusBar,
  Dimensions,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigate } from "react-router-native";
import { Images } from "../../constants/image";
import { useRef, useState } from "react";
import LiveCard from "./LiveCard";
import CommentsModal from "./CommentsModal";
import LinearGradient from "react-native-linear-gradient";
import FeedItem from "./FeedItem";
import { commentsList, data } from "../../constants";

const Feeds = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState("following");
  const [openModal, setOpenModal] = useState(false);
  const videoRef = useRef < import("react-native-video").VideoRef > null;

  return (
    <SafeAreaView className="bg-background flex-1">
      <StatusBar barStyle="dark-content" />

      <View className=" bg-background ">
        <FlatList
          data={data}
          renderItem={({ item, index }) => (
            <FeedItem
              key={index}
              index={index}
              length={data.length}
              onCommentClick={() => setOpenModal((prev) => !prev)}
              source={item.video}
              isVideo={item.isVideo}
              reposted={item.reposted}
              isFollowing={item.isFollowing}
            />
          )}
          snapToInterval={Dimensions.get("window").height - 100}
          snapToStart
          decelerationRate={"fast"}
          keyExtractor={(item) => item.id.toString()}
          showsVerticalScrollIndicator={false}
          // className="flex-1"
          ListHeaderComponent={
            <View>
              <View className="flex-row w-full p-5 items-center justify-between">
                <View className="flex-row items-center gap-x-4">
                  <TouchableOpacity onPress={() => navigate("/profile")}>
                    <Image
                      source={Images.ChatAvatar}
                      resizeMode="contain"
                      className="w-[30px] h-[30px] rounded-full"
                    />
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => navigate("/business-live")}>
                    <LinearGradient
                      colors={["#6172F3", "#444CE7", "#2D31A6"]}
                      start={{ x: 0, y: 0 }}
                      end={{ x: 1, y: 0 }}
                      className="px-5 rounded-md py-2"
                    >
                      <Text className="text-white">LIVE</Text>
                    </LinearGradient>
                  </TouchableOpacity>
                </View>

                <View className="flex-row  gap-x-2 items-center">
                  <TouchableOpacity
                    // onPress={() => navigate("/filter")}
                    className="p-2 bg-[#F5F5F5] rounded-full w-fit"
                  >
                    <Ionicons name="search" size={20} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    // onPress={() => navigate("/filter")}
                    className="p-2 bg-[#F5F5F5] rounded-full w-fit"
                  >
                    <Ionicons
                      name="notifications-outline"
                      size={20}
                      color="#000"
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View className="bg-[#FAFAFA] mt-5 mx-5  flex-row justify-between px-2 py-1 rounded-md border border-[#E9EAEB]">
                <View className="px-1 w-1/2">
                  <TouchableOpacity
                    onPress={() => setPage("following")}
                    className={`${
                      page === "following" && "bg-white"
                    } flex-row items-center justify-center gap-x-2  text-primary rounded-md py-2.5 px-5`}
                  >
                    <Text
                      className={`${
                        page !== "following"
                          ? "text-[#717680]"
                          : "text-[#414651]"
                      } `}
                    >
                      Following
                    </Text>
                  </TouchableOpacity>
                </View>
                <View className="px-1 w-1/2">
                  <TouchableOpacity
                    onPress={() => setPage("for you")}
                    className={`${
                      page !== "following" && "bg-white"
                    } flex-row items-center justify-center gap-x-2  text-primary rounded-md py-2.5 px-5`}
                  >
                    <Text
                      className={`${
                        page === "following"
                          ? "text-[#717680]"
                          : "text-[#414651]"
                      } `}
                    >
                      For You
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <FlatList
                data={[1, 2, 3, 4, 5, 6]}
                keyExtractor={() => Math.random() * 50}
                renderItem={() => <LiveCard />}
                contentContainerStyle={{
                  padding: 10,
                }}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
              />
            </View>
          }
        />
      </View>
      <CommentsModal
        visible={openModal}
        onClose={() => setOpenModal((prev) => !prev)}
        commentsList={commentsList}
      />
    </SafeAreaView>
  );
};

export default Feeds;
