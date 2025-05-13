import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  StatusBar,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigate } from "react-router-native";
import ContainerWrapper from "../../components/ContainerWrapper";
import { Images } from "../../constants/image";
import { useState } from "react";
import LiveCard from "./LiveCard";
import VideoFeed from "./VideoImageFeed";

const Feeds = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState("following");

  return (
    <SafeAreaView className="bg-background flex-1">
      <StatusBar barStyle="dark-content" />

      <View className=" bg-background p-5">
        <View className="flex-row w-full items-center justify-between">
          <View className="flex-row items-center gap-x-4">
            <Image
              source={Images.ChatAvatar}
              resizeMode="contain"
              className="w-[30px] h-[30px] rounded-full"
            />
            <View className="bg-[#444CE7] px-5 rounded-md py-2">
              <Text className="text-white">LIVE</Text>
            </View>
          </View>

          <View className="flex-row gap-x-2 items-center">
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
              <Ionicons name="notifications-outline" size={20} color="#000" />
            </TouchableOpacity>
          </View>
        </View>
        <View className="bg-[#FAFAFA] mt-5 flex-row justify-between px-2 py-1 rounded-md border border-[#E9EAEB]">
          <View className="px-1 w-1/2">
            <TouchableOpacity
              onPress={() => setPage("following")}
              className={`${
                page === "following" && "bg-white"
              } flex-row items-center justify-center gap-x-2  text-primary rounded-md py-2.5 px-5`}
            >
              <Text
                className={`${
                  page !== "following" ? "text-[#717680]" : "text-[#414651]"
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
                  page === "following" ? "text-[#717680]" : "text-[#414651]"
                } `}
              >
                For You
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
          data={[1, 2, 3, 4, 5, 6]}
          keyExtractor={() => Math.random() * 20}
          renderItem={() => <LiveCard />}
          contentContainerStyle={{
            paddingVertical: 10,
          }}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
        />
        <VideoFeed />
      </View>
    </SafeAreaView>
  );
};

export default Feeds;
