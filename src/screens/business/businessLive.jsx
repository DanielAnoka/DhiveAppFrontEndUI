import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
  FlatList,
  StatusBar,
  Dimensions,
  Modal
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import { useNavigate } from "react-router-native";
import { Images } from "../../constants/image";
import { useState } from "react";
import LiveCard from "./LiveCard";
import CommentsModal from "./CommentsModal";
import { LinearGradient } from "expo-linear-gradient";
import FeedItem from "./FeedItem";
import BottomModal from "../../components/BottomModal";
import { commentsList, data } from "../../constants";
import Icon from "react-native-vector-icons/Ionicons";
import { Icons } from "../../constants/icon";

const Feeds = () => {
  const navigate = useNavigate();
  const [page, setPage] = useState("following");
  const [openModal, setOpenModal] = useState(false);
  const [openSelectModal, setOpenSelectModal] = useState(false);
  const [showModal, setShowModal] = useState(true);

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
                  <Image
                    source={Images.ChatAvatar}
                    resizeMode="contain"
                    className="w-[30px] h-[30px] rounded-full"
                  />
                 <TouchableOpacity onPress={() => setOpenSelectModal(true)}>
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
      <BottomModal
        visible={openSelectModal}
        onClose={() => setOpenSelectModal((prev) => !prev)}
        title={"Select Option"}
      >
        <TouchableOpacity
           onPress={() => navigate('/business/goLive')}

          className="flex-row my-4 gap-x-3 items-center"
        >
          <View className="bg-[#EEF4FF] rounded-full p-2">
            <View className="bg-primary rounded-full p-1.5">
              <Feather name="trending-up" color={"#fff"} />
            </View>
          </View>
          <View>
            <Text className="text font-medium">Go Live</Text>
            <Text className="text-sm text-textgray font-light">
              Start showcasing your products in real time.
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate("/create-post")}
          className="flex-row mt-4 mb-10 gap-x-3 items-center"
        >
          <View className="bg-[#EEF4FF] rounded-full p-2">
            <View className="bg-primary rounded-full p-1.5">
              <Feather name="trending-up" color={"#fff"} />
            </View>
          </View>
          <View>
            <Text className="text font-medium">Make a Post</Text>
            <Text className="text-sm text-textgray font-light">
              Keep your audience in the loop
            </Text>
          </View>
        </TouchableOpacity>
      </BottomModal>

       <Modal visible={showModal} transparent animationType="fade">
              <View className="flex-1 justify-center items-center bg-black/40">
                <View className="w-11/12 bg-white rounded-3xl p-5">
                  <View className="flex-row justify-between items-center mb-10">
                    <Text className="text-[16px] font-semibold text-black">
                      Select Chain to Deploy
                    </Text>
                    <TouchableOpacity
                      onPress={() => setShowModal(false)}
                      className="w-8 h-8 rounded-full bg-[#F5F5F5] border border-black items-center justify-center"
                    >
                      <Icon name="close" size={16} color="#000" />
                    </TouchableOpacity>
      
                  </View>
      
                  {/* Option 1 */}
                 
                  <TouchableOpacity className="flex-row items-start space-x-3 mb-4 p-2" onPress={()=>navigate('/create')} >
                    <View className="mt-1">
                      <View className="w-7 h-7 rounded-full border border-gray-400 bg-black items-center justify-center">
                        <Image source={Icons.Up} className="w-4 h-3" resizeMode="contain" />
                      </View>
                    </View>
                    <View>
                      <Text className="text-sm font-medium text-black">
                        ERC-20 Tokens (Ethereum Standard)
                      </Text>
                      <Text className="text-xs text-gray-500">
                        Ethereum and EVM-compatible blockchains
                      </Text>
                    </View>
                  </TouchableOpacity>
      
                  {/* Option 2 */}
                  <TouchableOpacity className="flex-row items-start space-x-3 p-2" onPress={()=>navigate('/create')}>
                    <View className="mt-1">
                      <View className="w-7 h-7 rounded-full border border-gray-400 bg-black items-center justify-center">
                        <Image source={Icons.Up} className="w-4 h-3" resizeMode="contain" />
                      </View>
                    </View>
                    <View>
                      <Text className="text-sm font-medium text-black">
                        SPL Tokens (Solana Standard)
                      </Text>
                      <Text className="text-xs text-gray-500">
                        Token standard on Solana, kind of like ERC-20
                      </Text>
                    </View>
                  </TouchableOpacity>
      
      
                </View>
              </View>
            </Modal>
    </SafeAreaView>
  );
};

export default Feeds;
