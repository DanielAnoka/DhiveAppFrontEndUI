import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  Image,
  FlatList,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigate } from "react-router-native";
import LiveCard from "./LiveCard";
import ItemCard from "../explore/ItemCard";
import { products } from "../explore";
import { Images } from "../../constants/image";
import BusinessCard from "./BusinessCard";

const BusinessOnLive = () => {
  const navigate = useNavigate();
  const businesses = [
    {
      imgUrl: Images.Business1,
      headtext: "Mart Global",
      subtext: "All furniture's products",
    },
    {
      imgUrl: Images.Business2,
      headtext: "Mart Global",
      subtext: "All furniture's products",
    },
    {
      imgUrl: Images.Business3,
      headtext: "Mart Global",
      subtext: "All furniture's products",
    },
    {
      imgUrl: Images.Business4,
      headtext: "Mart Global",
      subtext: "All furniture's products",
    },
    {
      imgUrl: Images.Business1,
      headtext: "Mart Global",
      subtext: "All furniture's products",
    },
    {
      imgUrl: Images.Business2,
      headtext: "Mart Global",
      subtext: "All furniture's products",
    },
  ];

  return (
    <SafeAreaView className="bg-background flex-1">
      <StatusBar barStyle="dark-content" />

      <View className={"flex-1 bg-background"}>
        <View className="flex-row bg-background p-5  w-full items-center justify-between">
          <TouchableOpacity onPress={() => navigate(-1)}>
            <View className="w-[30px] h-[30px] rounded-full  justify-center items-center border border-black">
              <Ionicons name="chevron-back" size={20} color="#000" />
            </View>
          </TouchableOpacity>
          <Text className="text-lg">Businesses on Live</Text>

          <View></View>
        </View>

        <FlatList
          data={businesses}
          keyExtractor={(item) => Math.random() * 20}
          renderItem={({ item }) => <BusinessCard {...item} />}
          contentContainerStyle={{
            justifyContent: "space-between",
            paddingBottom: 60,
          }}
          numColumns={2}
          ListHeaderComponent={
            <FlatList
              data={[1, 2, 3, 4, 5, 6]}
              keyExtractor={() => Math.random() * 20}
              renderItem={() => <LiveCard />}
              contentContainerStyle={{
                padding: 10,
              }}
              horizontal={true}
              showsHorizontalScrollIndicator={false}
            />
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default BusinessOnLive;
