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
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigate, useParams } from "react-router-native";
import ContainerWrapper from "../../components/ContainerWrapper";
import PrimaryButton from "../../components/PrimaryButton";
import { Images } from "../../constants/image";
import { Icons } from "../../constants/icon";
import ItemCard from "../explore/ItemCard";
import { useEffect, useState } from "react";
import TransactionModal from "./TransactionModal";

const ProductDetails = () => {
  const navigate = useNavigate();
  const similarProducts = [
    {
      name: "Apple Watch Series 9 (Pink)",
      price: 132.78,
      imgUrl: Images.Item,
      company: "Next-Gen Electronics",
    },
    {
      name: "Apple Watch Series 9 (Pink)",
      price: 132.78,
      imgUrl: Images.Item,
      company: "Next-Gen Electronics",
    },
  ];

  const [quantity, setQuantity] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { status } = useParams();
  const [phase, setPhase] = useState(1);

  useEffect(() => {
    if (status == "payment") {
      setPhase(status);
      setIsModalOpen(true);
    }
  }, []);

  return (
    <SafeAreaView className="bg-background px-5">
      <StatusBar barStyle="dark-content" backgroundColor="#fdfdfd" />
      <FlatList
        data={quantity > 0 ? null : similarProducts}
        keyExtractor={() => Math.random() * 20}
        renderItem={({ item }) => <ItemCard {...item} />}
        contentContainerStyle={{
          justifyContent: "space-between",
        }}
        numColumns={2}
        ListHeaderComponent={
          <ContainerWrapper>
            <View className="flex-row w-full items-center justify-between">
              <TouchableOpacity onPress={() => navigate(-1)}>
                <View className="w-[30px] h-[30px] rounded-full bg-[#F5F5F5] justify-center items-center border border-[#000]">
                  <Ionicons name="chevron-back" size={20} color="#000" />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                onPress={() => navigate("/filter")}
                className="p-2 bg-[#F5F5F5] rounded-full w-fit"
              >
                <Ionicons name="notifications-outline" size={20} color="#000" />
              </TouchableOpacity>
            </View>
            <View className="mt-10">
              <FlatList
                data={Array(2).fill("")}
                keyExtractor={() => Math.random() * 20}
                renderItem={() => (
                  <View className="h-[200px] w-[320px] mr-2.5">
                    <Image
                      source={Images.Product}
                      resizeMode="contain"
                      className="w-full h-full"
                    />
                  </View>
                )}
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                style={{ flexGrow: 0 }}
              />
            </View>
            <View className="flex-row justify-between items-center mt-5">
              <View className="flex-row gap-x-2.5 mt-2.5 items-center">
                <Image
                  source={Images.Avatar}
                  resizeMode="contain"
                  className="w-12 h-12"
                />
                <View>
                  <Text className="mb-1">Next-Gen Electronics</Text>
                  <View className="bg-[#E9EAEB] w-1/3  h-fit p-0.5 rounded-md">
                    <Text className="text-sm text-center ">NGE</Text>
                  </View>
                </View>
              </View>
              <TouchableOpacity
                onPress={() => navigate("/trade-products")}
                className="bg-[#EEF4FF] flex-row items-center justify-center gap-x-2  text-primary rounded-md py-2.5 px-4"
              >
                <Image source={Icons.Trade} className="w-6 h-6" />
                <Text className="text-primary">Trade</Text>
              </TouchableOpacity>
            </View>
            <View className="mt-5">
              <Text className="mb-2 text-xl">Apple Watch Series 9 (Pink)</Text>
              <View className="flex-row gap-x-2">
                <View className="bg-[#EEF4FF] flex-row items-center justify-center gap-x-1 rounded-md p-1">
                  <Text className="font-light">Brand: </Text>
                  <Text className="text-primary">Trade</Text>
                </View>
                <View className="bg-[#EEF4FF] flex-row items-center justify-center gap-x-1 rounded-md p-1">
                  <Text className="font-light">Category: </Text>
                  <Text className="text-primary">Watch</Text>
                </View>
                <View className="flex-1 flex-row justify-end items-end">
                  <TouchableOpacity className="bg-primary flex-row items-center justify-center gap-x-2  text-primary rounded-md py-2.5 px-5">
                    <Text className="text-white">Follow</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            {quantity > 0 ? (
              <View className="w-full my-5">
                <View className="w-full flex-row justify-between items-center">
                  <View>
                    <View className="flex-row gap-x-1 mt-3 items-center">
                      <Text className="text-2xl ">132.78</Text>
                      <Text className="text-[#535862] pt-1">usdt</Text>
                    </View>
                    <View className="flex-row items-center gap-x-2 my-1.5">
                      <Text className="text-primary text-lg">$300</Text>
                      <View className="bg-[#FEF3F2] flex-row gap-x-1 items-center p-1 border border-[#FECDCA] rounded-3xl">
                        <View className="w-2 h-2 rounded-full bg-[#B42318]" />
                        <Text className="text-[#B42318] ">100 Unit Left</Text>
                      </View>
                    </View>
                  </View>
                  <View className="flex-row gap-x-3 items-center">
                    <TouchableOpacity
                      onPress={() =>
                        setQuantity((prev) => Math.max(0, prev - 1))
                      }
                      className="rounded-full p-2 bg-[#F5F5F5]"
                    >
                      <AntDesign name="minus" size={15} />
                    </TouchableOpacity>
                    <Text className="text-primary text-lg">{quantity}</Text>
                    <TouchableOpacity
                      onPress={() => setQuantity((prev) => prev + 1)}
                      className="rounded-full p-2 bg-[#F5F5F5]"
                    >
                      <AntDesign name="plus" size={15} />
                    </TouchableOpacity>
                  </View>
                </View>
                <View className="bg-[#FAFAFA] rounded-xl py-3 px-5 mt-5">
                  <View className="flex-row justify-between mb-6 items-center">
                    <Text className="text-textgray font-light">
                      Your Purchase Power
                    </Text>
                    <Text className="text-primary font-medium">
                      2,000,000 USDC
                    </Text>
                  </View>
                  <View className="flex-row justify-between mb-6 items-center">
                    <Text className="text-textgray font-light">Quantity</Text>
                    <Text className="font-medium">{quantity}</Text>
                  </View>
                  <View className="flex-row justify-between mb-6 items-center">
                    <Text className="text-textgray font-light">
                      Unit Amount
                    </Text>
                    <Text className="font-medium">132.75 USDC - $300</Text>
                  </View>
                  <View className="flex-row justify-between mb-5 items-center">
                    <Text className="text-textgray font-light">Total</Text>
                    <Text className="text-primary font-medium">
                      265.5 USDC - $600
                    </Text>
                  </View>
                </View>
              </View>
            ) : (
              <>
                <View className="flex-row gap-x-1 mt-3 items-center">
                  <Text className="text-2xl ">132.78</Text>
                  <Text className="text-[#535862] pt-1">usdt</Text>
                </View>
                <View className="flex-row items-center gap-x-2 my-1.5">
                  <Text className="text-primary text-lg">$300</Text>
                  <View className="bg-[#FEF3F2] flex-row gap-x-1 items-center p-1 border border-[#FECDCA] rounded-3xl">
                    <View className="w-2 h-2 rounded-full bg-[#B42318]" />
                    <Text className="text-[#B42318] ">100 Unit Left</Text>
                  </View>
                </View>
                <View className="flex-row items-center gap-x-1.5">
                  <View className="bg-[#F59E0B] p-1 rounded-md">
                    <AntDesign name="star" size={15} color="#fff" />
                  </View>
                  <Text className="text-lg">4.2</Text>
                  <Text className="text-lg font-light text-[#717680]">
                    (41)
                  </Text>
                </View>
                <View className="bg-[#FAFAFA] mt-5 flex-row justify-between px-2 py-1 rounded-md border border-[#E9EAEB]">
                  <View className="px-1 w-1/2">
                    <TouchableOpacity className="bg-white  flex-row items-center justify-center gap-x-2  text-primary rounded-md py-2.5 px-5">
                      <Text>Description</Text>
                    </TouchableOpacity>
                  </View>

                  <TouchableOpacity className="w-1/2 flex-row items-center justify-center gap-x-2  text-primary rounded-md py-2.5 px-5">
                    <Text className="text-[#717680]">Specifications</Text>
                  </TouchableOpacity>
                </View>
                <Text className="mt-5 text-[#535862] text-sm">
                  CARBON NEUTRAL — An aluminium Apple Watch Series 9 paired with
                  the latest Sport Loop is carbon neutral. WHY APPLE WATCH
                  SERIES 9 — Your essential companion for a healthy life is now
                  even more powerful. The S9 chip enables a super-bright display
                  and a magical new way to quickly and easily interact with your
                  Apple Watch without touching the screen. Advanced health,
                  safety and activity features provide powerful insights and
                  help when you need it. And redesigned apps in watchOS give you
                  more information at a glance.
                </Text>
                <Text className="my-5 text-lg">Ratings & Reviews</Text>
                <View className="border-t flex-row gap-x-1 border-b border-[#E9EAEB] py-5">
                  <Text className="text-4xl">4.8/5</Text>
                  <View>
                    <Text className="text-xs">Overall Rating</Text>
                    <Text className="text-xs font-light">574 Ratings</Text>
                  </View>
                </View>
                <View className="flex-row gap-x-2 mt-5">
                  {Array(5)
                    .fill("")
                    .map((text, i) => (
                      <View key={i}>
                        <AntDesign name="star" size={25} color="#F59E0B" />
                      </View>
                    ))}
                </View>
                <Text className="text-lg mt-3">Amazing</Text>
                <Text className="text-sm text-[#717680]">
                  An amazing fit. I am somewhere around 6ft and ordered 40 size,
                  It's a perfect fit and quality is worth the price...
                </Text>
                <View className="flex-row gap-x-2 mt-5">
                  {Array(3)
                    .fill("")
                    .map((text, i) => (
                      <View key={i}>
                        <Image
                          source={Images.Product}
                          className="w-14 h-16 rounded-lg"
                        />
                      </View>
                    ))}
                </View>
                <Text className="text-sm text-[#717680] mt-4">
                  David Johnson, 26 Apr 2025
                </Text>
                <View className="flex-row justify-between px-5 mt-5">
                  <Text className="text-primary">View All 78 Reviews</Text>
                  <TouchableOpacity onPress={() => navigate("/review")}>
                    <Ionicons
                      name="chevron-forward"
                      size={20}
                      color="#444CE7"
                    />
                  </TouchableOpacity>
                </View>
                <View className="mt-5">
                  <View className="flex-row">
                    <View className="bg-[#FAFAFA] mx-5 px-2 py-1 border border-[#E9EAEB] rounded-3xl">
                      <Text>Similar Products</Text>
                    </View>
                    <View></View>
                  </View>
                </View>
              </>
            )}
          </ContainerWrapper>
        }
        ListFooterComponent={
          quantity > 0 ? (
            <PrimaryButton
              onPress={() => setIsModalOpen((prev) => !prev)}
              text={"Buy Product"}
            />
          ) : (
            <View>
              <View className="flex-row">
                <View className="bg-[#FAFAFA] mx-5 px-2 py-1 border border-[#E9EAEB] rounded-3xl">
                  <Text>Similar Products</Text>
                </View>
                <View></View>
              </View>

              <FlatList
                data={similarProducts}
                keyExtractor={() => Math.random() * 20}
                renderItem={({ item }) => <ItemCard {...item} />}
                contentContainerStyle={{
                  justifyContent: "space-between",
                }}
                numColumns={2}
                ListFooterComponent={
                  <PrimaryButton
                    onPress={() => setQuantity((prev) => prev + 1)}
                    text={"Buy Product"}
                  />
                }
              />
            </View>
          )
        }
      />
      <TransactionModal
        visible={isModalOpen}
        onClose={() => setIsModalOpen((prev) => !prev)}
        phase={phase}
        setPhase={setPhase}
      />
    </SafeAreaView>
  );
};

export default ProductDetails;
