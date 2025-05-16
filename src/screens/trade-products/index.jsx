import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  StatusBar,
  FlatList,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigate } from "react-router-native";
import ContainerWrapper from "../../components/ContainerWrapper";
import PrimaryButton from "../../components/PrimaryButton";
import { Images } from "../../constants/image";
import SecondaryButton from "../../components/SecondaryButton";
import TradeModal from "./TradeModal";
import { products } from "../explore";
import Trade from "./Trade";
import ItemCard from "../explore/ItemCard";
import ReviewCard from "./ReviewCard";

export const dummyReviewData = [
  {
    ratings: 5,
    text: "Amazing!",
    subtext:
      "An amazing fit. I am somewhere around 6ft and ordered 40 size, It's a perfect fit and quality is worth the price...",

    name: "David Johnson",
    date: "26 Apr 2025",
    images: [Images.Review1, Images.Review2, Images.Review3],
  },
  {
    ratings: 4,
    text: "Super sleek and packed with features!",
    subtext:
      "Tracks my workouts perfectly and keeps me connected all day......love it ❤️",

    name: "Cameron Williamson",
    date: "21 Apr 2025",
    images: [],
  },
  {
    ratings: 4,
    text: "Amazing battery life",
    subtext:
      "couldn’t ask for more! It stays charged through busy days and workouts.",
    name: "Floyd Miles",
    date: "21 Apr 2025",
    images: [],
  },
];
const TradeProducts = () => {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isFollowing, setisFollowing] = useState(false);
  const [phase, setPhase] = useState("default");
  const [page, setPage] = useState("trade");

  const RenderPage = ({ page }) => {
    switch (page) {
      case "products":
        return (
          <View className="pb-52 mb-10">
            <FlatList
              data={products}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              keyExtractor={() => Math.random() * 20}
              renderItem={({ item }) => (
                <ItemCard {...item} rating={4.3} numProducts={41} />
              )}
              contentContainerStyle={{
                justifyContent: "space-between",
                paddingBottom: 270,
              }}
              numColumns={2}
            />
          </View>
        );

      case "reviews":
        return (
          <View className="pb-52 my-10">
            <FlatList
              data={dummyReviewData}
              showsVerticalScrollIndicator={false}
              showsHorizontalScrollIndicator={false}
              keyExtractor={() => Math.random() * 20}
              renderItem={({ item }) => <ReviewCard {...item} />}
              contentContainerStyle={{
                // justifyContent: "space-between",
                width: "100%",
                paddingBottom: 270,
              }}
              numColumns={1}
            />
          </View>
        );

      default:
        return (
          <Trade
            onClick={() => {
              setIsModalOpen((prev) => !prev);
              setPhase("");
            }}
          />
        );
    }
  };

  return (
    <SafeAreaView className="bg-[#FDFDFD] px-5">
      <StatusBar barStyle="dark-content" backgroundColor="#fdfdfd" />

      <View className={"flex-col bg-background  h-full justify-between"}>
        <ContainerWrapper>
          <View className="flex-row w-full items-center justify-between">
            <View className="flex-row items-center gap-2">
              <TouchableOpacity onPress={() => navigate(-1)}>
                <View className="w-[30px] h-[30px] rounded-full bg-[#F5F5F5] justify-center items-center border border-[#000]">
                  <Ionicons name="chevron-back" size={20} color="#000" />
                </View>
              </TouchableOpacity>

              <Text className="text-lg font-semibold">Swiftrole’s Dhive</Text>
            </View>
            <TouchableOpacity
              onPress={() => {
                setPhase("filter");
                setIsModalOpen((prev) => !prev);
              }}
            >
              <View className="px-1.5 py-2 flex-row items-center justify-center gap-x-0.5 border border-[#00011B33] rounded-md">
                <View className="w-1 h-1 bg-black rounded-full" />
                <View className="w-1 h-1 bg-black rounded-full" />
                <View className="w-1 h-1 bg-black rounded-full" />
              </View>
            </TouchableOpacity>
          </View>

          <View className="flex-row justify-between items-center mt-5">
            <View className="flex-row gap-x-2.5 mt-2.5 items-center">
              <Image
                source={Images.Avatar}
                resizeMode="contain"
                className="w-12 h-12"
              />
              <View>
                <Text className="mb-1 font-semibold text-lg">
                  Swiftrole’s Dhive
                </Text>
                <View className="flex-row items-center gap-x-1">
                  <View className="bg-[#F5F5F5] flex-row items-center gap-x-2  py-0.5 px-1 rounded-md">
                    <Image
                      source={Images.AU}
                      resizeMode="contain"
                      className="w-4 h-4"
                    />
                    <Text className="text-sm text-center ">$STL</Text>
                  </View>
                  <View className="flex-row items-center gap-x-1 py-0.5 px-1 rounded-md">
                    <AntDesign name="user" size={18} />
                    <Text className="text-sm text-center ">16.3k</Text>
                  </View>
                </View>
              </View>
            </View>
            {isFollowing ? (
              <TouchableOpacity
                onPress={() => navigate("/send-message")}
                className="p-2 border border-[#D5D7DA] rounded-md bg-white"
              >
                <Text className="text-[#414651]">Send Message</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity
                onPress={() => setisFollowing((prev) => !prev)}
                className="py-2 px-5  rounded-md bg-primary"
              >
                <Text className="text-white">Follow</Text>
              </TouchableOpacity>
            )}
          </View>
          <Text className="my-5 text-[#535862]">
            Empowering businessess through tokenization
          </Text>

          <View className="flex-row items-center gap-x-2 my-1.5">
            <View className="bg-[#F8F9FC] flex-row gap-x-1 items-center p-1 border border-[#D5D9EB] rounded-3xl">
              <View className="w-2 h-2 rounded-full bg-[#4E5BA6]" />
              <Text className="text-[#363F72] ">Ox79....107hg</Text>
            </View>
            <View className="bg-[#EEF4FF] flex-row gap-x-1 items-center p-1 border border-[#C7D7FE] rounded-3xl">
              <View className="w-2 h-2 rounded-full bg-[#6172F3]" />
              <Text className="text-[#3538CD] ">Technology</Text>
            </View>
            <View className="bg-[#ECFDF3] flex-row gap-x-1 items-center p-1 border border-[#ABEFC6] rounded-3xl">
              <View className="w-2 h-2 rounded-full bg-[#4E5BA6]" />
              <Text className="text-[#067647] ">Ox79....107hg</Text>
            </View>
          </View>

          <View className="bg-[#FAFAFA] mt-5 flex-row justify-between px-2 py-1 rounded-md border border-[#E9EAEB]">
            <View className="px-1 w-1/3">
              <TouchableOpacity
                onPress={() => setPage("trade")}
                className={`${
                  page === "trade" && "bg-white"
                } flex-row items-center justify-center gap-x-2  text-primary rounded-md py-2.5 px-5`}
              >
                <Text>Trade</Text>
              </TouchableOpacity>
            </View>
            <View className="px-1 w-1/3">
              <TouchableOpacity
                onPress={() => setPage("products")}
                className={`${
                  page === "products" && "bg-white"
                } flex-row items-center justify-center gap-x-2  text-primary rounded-md py-2.5 px-5`}
              >
                <Text>Products</Text>
              </TouchableOpacity>
            </View>
            <View className="px-1 w-1/3">
              <TouchableOpacity
                onPress={() => setPage("reviews")}
                className={`${
                  page === "reviews" && "bg-white"
                } flex-row items-center justify-center gap-x-2  text-primary rounded-md py-2.5 px-5`}
              >
                <Text>Reviews</Text>
              </TouchableOpacity>
            </View>
          </View>
          <RenderPage page={page} />
        </ContainerWrapper>
      </View>
      <TradeModal
        visible={isModalOpen}
        onClose={() => setIsModalOpen((prev) => !prev)}
        phase={phase}
        setPhase={setPhase}
      />
    </SafeAreaView>
  );
};

export default TradeProducts;
