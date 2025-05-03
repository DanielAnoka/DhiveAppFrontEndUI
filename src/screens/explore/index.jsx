import {
  SafeAreaView,
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  StatusBar,
  FlatList,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigate } from "react-router-native";
import ItemCard from "./ItemCard";
import BottomNav from "../../components/BottomNav";
import { Images } from "../../constants/image";

export const products = [
  {
    name: "Apple Watch Series 9 (Pink)",
    price: 132.78,
    imgUrl: Images.Item,
    company: "Next-Gen Electronics",
  },
  {
    name: "Samsung",
    price: 234.99,
    imgUrl: Images.Item,
    company: "Next-Gen Electronics",
  },
  {
    name: "Tecno",
    price: 234.99,
    imgUrl: Images.Item,
    company: "Next-Gen Electronics",
  },
  {
    name: "Iphone 13",
    price: 234.99,
    imgUrl: Images.Item,
    company: "Next-Gen Electronics",
  },
  {
    name: "Iphone 12 Pro Max",
    price: 234.99,
    imgUrl: Images.Item,
    company: "Next-Gen Electronics",
  },
  {
    name: "Oraimo Watch 12",
    price: 234.99,
    imgUrl: Images.Item,
    company: "Next-Gen Electronics",
  },
  {
    name: "HP Laptop",
    price: 234.99,
    imgUrl: Images.Item,
    company: "Next-Gen Electronics",
  },
  {
    name: "NewAge Watch Series 9 (Pink)",
    price: 234.99,
    imgUrl: Images.Item,
    company: "Next-Gen Electronics",
  },
];

const ExplorePage = () => {
  const navigate = useNavigate();

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
        <Text style={{ fontSize: 20 }}>Explore</Text>
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
            <Ionicons name="search" size={20} />
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
      <FlatList
        data={products}
        keyExtractor={(item) => Math.random() * 20}
        renderItem={({ item }) => <ItemCard {...item} />}
        contentContainerStyle={styles.row}
        numColumns={2}
      />
      <View style={styles.bottom}>
        <BottomNav />
      </View>
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

export default ExplorePage;
