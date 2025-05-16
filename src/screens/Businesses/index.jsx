import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  FlatList,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
  ScrollView,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigate } from "react-router-native";
import ItemCard from "../explore/ItemCard";
import { Images } from "../../constants/image";
import { Icons } from "../../constants/icon";
import BusinessCard from "./BusinessCard";

const Businesses = () => {
  const navigate = useNavigate();
  const data = [
    {
      avatar: Images.Avatar,
      name: "SwiftRoletech",
      marketCap: "5,000",
      exchange: "#STL",
      createdAt: "3 weeks ago",
    },
    {
      avatar: Images.Avatar,
      name: "SwiftRoletech",
      marketCap: "5,000",
      exchange: "#STL",
      createdAt: "3 weeks ago",
    },
    {
      avatar: Images.Avatar,
      name: "SwiftRoletech",
      marketCap: "5,000",
      exchange: "#STL",
      createdAt: "3 weeks ago",
    },
    {
      avatar: Images.Avatar,
      name: "SwiftRoletech",
      marketCap: "5,000",
      exchange: "#STL",
      createdAt: "3 weeks ago",
    },
    {
      avatar: Images.Avatar,
      name: "SwiftRoletech",
      marketCap: "5,000",
      exchange: "#STL",
      createdAt: "3 weeks ago",
    },
    {
      avatar: Images.Avatar,
      name: "SwiftRoletech",
      marketCap: "5,000",
      exchange: "#STL",
      createdAt: "3 weeks ago",
    },
  ];

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fdfdfd" }}>
      <StatusBar barStyle="dark-content" backgroundColor="#fdfdfd" />
      <View
        style={{
          flexDirection: "row",
          padding: 10,
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Text className="text-xl">Businesses</Text>
        <View
          style={{
            flexDirection: "row",
            gap: 10,
          }}
        >
          <TouchableOpacity
            onPress={() => navigate("/search")}
            style={styles.button}
          >
            <Image source={Icons.Search} className="w-5 h-5" />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigate("/filter")}
            style={styles.button}
          >
            <Image
              source={Images.Filter}
              resizeMode="contain"
              style={{ width: 20, height: 20 }}
            />
          </TouchableOpacity>
        </View>
      </View>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ScrollView className="py-5 px-3" showsVerticalScrollIndicator={false}>
          <View className="border w-full border-[#D5D7DA] bg-white rounded-lg flex-row justify-between items-center p-2 ">
            <View className="flex-row items-center">
              <Image source={Icons.Search} className="w-5 h-5" />

              <TextInput
                className="h-full pl-2 pb-2.5 text-lg"
                placeholder="Search"
                placeholderTextColor={"#717680"}
              />
            </View>
            <View className="border rounded-md border-[#D5D7DA] p-1">
              <Image
                source={Icons.Shortcut}
                resizeMode="contain"
                className="w-5 h-5"
              />
            </View>
          </View>
          <View className="border w-full border-[#D5D7DA] bg-white space-x-2 rounded-lg flex-row justify-center items-center py-3 mt-2 ">
            <Ionicons name="filter" color="#414651" size={25} />

            <Text>Filters</Text>
          </View>
          <View className="w-full border-t my-3 border-[#E9EAEB]"></View>

          {data.map((item, i) => (
            <BusinessCard
              key={i}
              {...item}
              onClick={() => navigate("/trade-products")}
            />
          ))}
        </ScrollView>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#F5F5F5",
    padding: 10,
    borderRadius: "100%",
    alignItems: "center",
  },
  row: {
    justifyContent: "space-between",
    paddingBottom: 60,
  },
  bottom: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: "#fff",
    paddingBottom: 12,
    paddingTop: 8,
  },
});

export default Businesses;
