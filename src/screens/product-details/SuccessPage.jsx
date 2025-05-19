import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { Image } from "react-native";
import { Images } from "../../constants/image";
import PrimaryButton from "../../components/PrimaryButton";
import { useNavigate } from "react-router-native";

const SuccessPage = ({
  onButton1Click,
  onButton2Click,
  headText,
  subText1,
  subText2,
  button1Text,
  button2Text,
  subTextUnderline,
  isDigitalProduct,
}) => {
  const navigate = useNavigate();
  return (
    <View
      className="flex-col justify-center gap-y-3 pt-20 pb-3 px-3 items-center"
      //   style={{ height: 0.6 * height }}
    >
      <View className="p-3 bg-[#F5F5F5] rounded-full">
        <Image source={Images.Confetti} className="w-[64px] h-[64px]" />
      </View>
      <Text className="font-medium text-lg">{headText}</Text>

      <Text className="font-medium flex-row text-sm gap-x-1 text-center">
        <Text className="font-light text-center">{subText1} </Text>
        {subTextUnderline ? null : subText2}
      </Text>
      {subTextUnderline && (
        <Text className="text-primary underline font-medium">{subText2}</Text>
      )}
      <View className="mb-5 pt-24 w-full flex-col items-center">
        <TouchableOpacity
          onPress={onButton1Click}
          className="py-4 mb-3 flex-row items-center space-x-2"
        >
          <Text className="text-primary">{button1Text}</Text>
          {isDigitalProduct && (
            <View className="p-1 rounded-full border  border-primary">
              <MaterialIcons
                name="arrow-right-alt"
                color={"#444CE7"}
                size={20}
              />
            </View>
          )}
        </TouchableOpacity>
        <PrimaryButton
          onPress={onButton2Click}
          text={button2Text}
          width={"100%"}
        />
      </View>

      <Text
        onPress={() => navigate("/support")}
        className="font-medium flex-row text-sm w-[85%] mt-5 gap-1 text-primary text-center"
      >
        <Text className="font-light text-center text-textgray">
          Having any issues with this transaction? Reach out to us via our{" "}
        </Text>
        Support Channel.
      </Text>
    </View>
  );
};

export default SuccessPage;
