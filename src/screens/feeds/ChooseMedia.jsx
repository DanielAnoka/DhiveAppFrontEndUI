import {
  View,
  Text,
  TouchableOpacity,
  Image,
  FlatList,
  Dimensions,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { useNavigate } from "react-router-native";
import { Icons } from "../../constants/icon";
import { media } from "../../constants";
import { useState } from "react";

const ChooseMedia = ({ onClick }) => {
  const navigate = useNavigate();
  const [selectedMedia, setSelectedMedia] = useState(media[0].imgUrl);
  const [multiSelect, setMultiSelect] = useState(false);

  return (
    <View className={"flex-1 bg-[#0A0D12] px-3"}>
      <View className="flex-row bg-transparent py-5 w-full items-center justify-between">
        <View className="flex-row items-center space-x-1">
          <TouchableOpacity onPress={() => navigate(-1)}>
            <Ionicons name="close" size={30} color="#fff" />
          </TouchableOpacity>
          <Text className="text-white">New Post</Text>
        </View>

        <TouchableOpacity
          onPress={onClick}
          className="bg-white flex-row items-center space-x-1 p-2 rounded-lg"
        >
          <Text className="text-[13px]">Next</Text>
          <Ionicons name="chevron-forward" size={15} color="#000" />
        </TouchableOpacity>
      </View>

      <FlatList
        data={media}
        keyExtractor={(item) => Math.random() * 20}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => setSelectedMedia(item.imgUrl)}
            className="w-full flex-1 m-0.5 relative"
          >
            <Image
              style={{
                width: "100%",
                height: 77,
              }}
              source={item.imgUrl}
            />
            {multiSelect && (
              <View className="h-4 w-4 rounded-full border border-white bg-white/50 absolute top-2 right-2"></View>
            )}
          </TouchableOpacity>
        )}
        contentContainerStyle={{
          // justifyContent: "space-between",
          paddingBottom: 40,
        }}
        numColumns={4}
        ListHeaderComponent={
          <View>
            <Image
              source={selectedMedia}
              style={{
                height: Dimensions.get("window").height * 0.5,
              }}
              className="w-full"
            />
            <View className="flex-row items-end justify-end space-x-2 my-3">
              <TouchableOpacity
                onPress={() => setMultiSelect((prev) => !prev)}
                className={`${
                  multiSelect ? "bg-white" : "bg-[#717680]"
                } p-2 rounded-full`}
              >
                <Ionicons
                  name="documents-outline"
                  color={multiSelect ? "#000" : "#fff"}
                  size={20}
                />
                {/* <Image className="w-5 h-5" source={Icons.DocumentCopy} /> */}
              </TouchableOpacity>
              <View className="bg-[#717680] p-2 rounded-full">
                <Image className="w-5 h-5" source={Icons.Camera} />
              </View>
            </View>
          </View>
        }
      />
    </View>
  );
};

export default ChooseMedia;
