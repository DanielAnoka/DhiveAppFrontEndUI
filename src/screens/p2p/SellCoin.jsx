import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import Feather from "react-native-vector-icons/Feather";
import { useNavigate } from "react-router-native";
import { Images } from "../../constants/image";
import BottomModal from "../../components/BottomModal";
import { useState } from "react";
import PrimaryButton from "../../components/PrimaryButton";
import Details from "./Details";
import SuccessPage from "../product-details/SuccessPage";
import TransactionDetails from "./TransactionDetails";
import P2PLayout from "./Layout";

const SellCoin = () => {
  const navigate = useNavigate();

  const [openModal, setOpenModal] = useState(false);
  const [page, setPage] = useState("home");

  const RenderPage = ({ page }) => {
    switch (page) {
      case "details":
        return (
          <Details
            onClick={() => {
              setPage("success");
              setOpenModal(true);
            }}
          />
        );

      default:
        return (
          <View className="h-full">
            <View>
              <View className="bg-white px-2 py-4 flex-row justify-between items-center rounded-md border border-[#F1F1F1]">
                <TextInput className="flex-1 h-full" placeholder="Volume" />

                <TouchableOpacity>
                  <View className="flex-row bg-[#FAFAFA]  p-1 items-center gap-x-1 rounded-2xl">
                    <Image source={Images.Gradient} className="w-3 h-3" />

                    <Text className="text-xs">USDC</Text>
                    <Feather name="chevron-down" size={13} color="#00011B80" />
                  </View>
                </TouchableOpacity>
              </View>
              <View className=" flex-row pt-3 my-3 justify-between items-center">
                <Text className="text-[#00011B99]">Quantity</Text>
                <Text>0 BTC</Text>
              </View>
              <View className=" flex-row my-3 justify-between items-center">
                <Text className="text-[#00011B99]">Amount</Text>
                <Text>0 USDC</Text>
              </View>
            </View>
            <View className="absolute bottom-4 w-[95%]">
              <PrimaryButton
                onPress={() => {
                  setPage("home");
                  setOpenModal((prev) => !prev);
                }}
                text={"Sell Coin"}
                width={"100%"}
              />
            </View>
          </View>
        );
    }
  };

  return (
    <P2PLayout title={"Sell Coin"}>
      <View className="flex-1 p-5">
        <RenderPage page={page} />
      </View>

      <BottomModal
        visible={openModal}
        onClose={() => setOpenModal((prev) => !prev)}
        title={
          page === "success"
            ? ""
            : page === "transaction-details"
            ? "Transaction Details"
            : "Trade Information"
        }
      >
        {page === "success" ? (
          <View className="h-full">
            <SuccessPage
              headText={"0.09839 USDC"}
              subText1="Successfully Sold to"
              subText2="Pomaline"
              subTextUnderline={true}
              button1Text={"View Transaction Summary"}
              button2Text={"Back to Dashboard"}
              onButton1Click={() => setPage("transaction-details")}
              onButton2Click={() => navigate(-1)}
            />
          </View>
        ) : page === "transaction-details" ? (
          <TransactionDetails onClick={() => setOpenModal(false)} />
        ) : page === "more" ? (
          <View className="flex-col gap-y-7 items-start">
            <Text className="font-light text-xs">
              1. Do not only check the buyer's payment proof. Make sure to log
              into your account and verify payment is received
            </Text>
            <Text className="font-light text-xs">
              2. If the payment is still processing, wait until you have
              received payment in your account before releasing the crypto
            </Text>
            <Text className="font-light text-xs">
              3. Do NOT accept payment from a third-party account. Refund the
              full amount immediately if you receive such payment to avoid
              financial losses caused by bank chargeback after you have released
              the crypto.
            </Text>
            <View className="w-full">
              <PrimaryButton
                onPress={() => {
                  setPage("details");
                  setOpenModal(false);
                }}
                text={"Confirm trade"}
              />

              <TouchableOpacity
                onPress={() => setOpenModal(false)}
                className="flex-row w-full items-center justify-center py-5"
              >
                <Text className="text-primary">Cancel Transaction</Text>
              </TouchableOpacity>
            </View>
          </View>
        ) : (
          <View>
            <View className="bg-[#FAFAFA] rounded-xl py-3 px-5 mt-5">
              <View className="flex-row justify-between mb-6 items-center">
                <Text className="text-textgray font-light">Wait Time</Text>
                <Text className=" font-medium">15 Min</Text>
              </View>
              <View className="flex-row justify-between mb-6 items-center">
                <Text className="text-textgray font-light">Buy's Name</Text>
                <Text className="font-medium">Pomaline</Text>
              </View>
              <View className="flex-row justify-between mb-6 items-center">
                <Text className="text-textgray font-light">Payment Method</Text>
                <Text className="font-medium">Wallet Transfer</Text>
              </View>
              <View className="flex-row justify-between mb-6 items-center">
                <Text className="text-textgray font-light">Fiat Amount</Text>
                <Text className="font-medium">900,000 USDC</Text>
              </View>
              <View className="flex-row justify-between mb-5 items-center">
                <Text className="text-textgray font-light">Amount</Text>
                <Text className=" font-medium">0.986 BTC</Text>
              </View>
            </View>

            <View className="my-5">
              <PrimaryButton
                onPress={() => setPage("more")}
                text={"Confirm Trade"}
              />
            </View>
          </View>
        )}
      </BottomModal>
    </P2PLayout>
  );
};

export default SellCoin;
