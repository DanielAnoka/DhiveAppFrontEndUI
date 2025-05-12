import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  StatusBar,
  FlatList,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigate } from "react-router-native";
import ReviewCard from "./ReviewCard";
import { dummyReviewData } from ".";

const ReviewPage = () => {
  const navigate = useNavigate();

  return (
    <SafeAreaView className="bg-[#FDFDFD] px-5">
      <StatusBar barStyle="dark-content" backgroundColor="#fdfdfd" />

      <View className={"flex-col bg-background  h-full justify-between"}>
        <FlatList
          data={dummyReviewData}
          keyExtractor={() => Math.random() * 20}
          renderItem={({ item }) => (
            <View className="px-3">
              <ReviewCard {...item} />
            </View>
          )}
          contentContainerStyle={{
            // justifyContent: "space-between",
            width: "100%",
            paddingBottom: 270,
          }}
          numColumns={1}
          ListHeaderComponent={
            <View className="flex-row w-full items-center justify-between mb-10 px-2 mt-3">
              <View className="flex-row items-center gap-2">
                <TouchableOpacity onPress={() => navigate(-1)}>
                  <View className="w-[30px] h-[30px] rounded-full bg-[#F5F5F5] justify-center items-center border border-[#000]">
                    <Ionicons name="chevron-back" size={20} color="#000" />
                  </View>
                </TouchableOpacity>
              </View>
              <Text className="text-lg font-semibold">Reviews</Text>

              <TouchableOpacity>
                <View className="px-1.5 py-2 flex-row items-center justify-center gap-x-0.5 border border-[#00011B33] rounded-md">
                  <View className="w-1 h-1 bg-black rounded-full" />
                  <View className="w-1 h-1 bg-black rounded-full" />
                  <View className="w-1 h-1 bg-black rounded-full" />
                </View>
              </TouchableOpacity>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
};

export default ReviewPage;
