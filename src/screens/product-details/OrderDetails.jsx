import { View, Text, TouchableOpacity } from "react-native";
import PrimaryButton from "../../components/PrimaryButton";

const OrderDetails = ({
  onClick,
  isDigitalProduct,
  amount,
  product,
  quantity,
  refID,
  status,
  hash,
  time,
  buttonText,
  onDownload,
}) => {
  return (
    <View>
      <View className="my-5 w-full">
        <Text className="mb-5 text-lg">Transaction Details</Text>
        <Text className="mb-2 text-4xl text-center">${amount}</Text>
      </View>

      <View className="bg-[#FAFAFA] rounded-xl py-3 px-5 mt-5">
        <View className="flex-row justify-between mb-6 items-center">
          <Text className="text-textgray font-light">Product</Text>
          <Text className=" font-medium">{product}</Text>
        </View>
        <View className="flex-row justify-between mb-6 items-center">
          <Text className="text-textgray font-light">Quantity</Text>
          <Text className="font-medium">{quantity}</Text>
        </View>
        <View className="flex-row justify-between mb-6 items-center">
          <Text className="text-textgray font-light">Reference ID</Text>
          <Text className="font-medium">{refID}</Text>
        </View>
        {isDigitalProduct && (
          <View className="flex-row justify-between mb-5 items-center">
            <Text className="text-textgray font-light">Link</Text>
            <TouchableOpacity onPress={onDownload}>
              <Text className="text-primary font-medium">Download E-Book</Text>
            </TouchableOpacity>
          </View>
        )}
        <View className="flex-row justify-between mb-5 items-center">
          <Text className="text-textgray font-light">Status</Text>
          <Text className="text-[#17B26A] font-medium">{status}</Text>
        </View>
        <View className="flex-row justify-between mb-6 items-center">
          <Text className="text-textgray font-light">Transaction Hash</Text>
          <Text className="font-medium">{hash}</Text>
        </View>

        <View className="flex-row justify-between mb-5 items-center">
          <Text className="text-textgray font-light">Time</Text>
          <Text className=" font-medium">{time}</Text>
        </View>
      </View>
      {isDigitalProduct ? null : (
        <>
          <View className="w-full bg-[#F5F5F5] py-1 flex justify-center items-center">
            <Text>NOTE</Text>
          </View>
          <View className="shadow-2xl bg-white mx-3 p-5 mt-5">
            <View className="h-2 w-10 rounded-md bg-[#F5F5F5] mb-5 mx-auto"></View>
            <Text>
              Mark the the button as received if you have gotten the product.
            </Text>
          </View>
        </>
      )}

      <View className="my-5">
        <PrimaryButton onPress={onClick} text={buttonText} />
      </View>
      <Text className="font-medium flex-row text-sm  px-10 mb-5 w-full mt-5 gap-1 text-primary text-center">
        <Text className="font-light text-center text-black">
          Having any issues with this transaction? Reach out to us via our{" "}
        </Text>
        Support Channel.
      </Text>
    </View>
  );
};

export default OrderDetails;
