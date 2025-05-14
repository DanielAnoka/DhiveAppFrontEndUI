import { View, Text, TouchableOpacity } from "react-native";
import { p2pSelectOptions } from "../../constants";
import Feather from "react-native-vector-icons/Feather";
import { useNavigate } from "react-router-native";

const SelectOption = () => {
  const navigate = useNavigate();

  return (
    <View>
      {p2pSelectOptions.map((p2p) => (
        <TouchableOpacity
          onPress={() => navigate(p2p.route)}
          key={p2p.title}
          className="flex-row my-4 gap-x-3 items-center"
        >
          <View className="bg-[#EEF4FF] rounded-full p-2">
            <View className="bg-primary rounded-full p-1.5">
              <Feather name="trending-up" color={"#fff"} />
            </View>
          </View>
          <View>
            <Text className="text font-medium">{p2p.title}</Text>
            <Text className="text-sm text-textgray font-light">
              {p2p.subtext}
            </Text>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default SelectOption;
