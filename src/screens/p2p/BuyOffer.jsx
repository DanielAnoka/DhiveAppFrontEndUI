import { View, Text, Image } from "react-native";
import { Images } from "../../constants/image";
import BottomModal from "../../components/BottomModal";
import { useState } from "react";
import PrimaryButton from "../../components/PrimaryButton";
import P2PLayout from "./Layout";
import CreateBuyORSellOffer from "./CreateBuyORSellOffer";
import PaymentOption from "./PaymentOption";

const BuyOffer = () => {
  const [openModal, setOpenModal] = useState(false);
  const [page, setPage] = useState("home");

  const RenderPage = ({ page }) => {
    switch (page) {
      case "payment":
        return <PaymentOption onClick={() => setOpenModal((prev) => !prev)} />;

      default:
        return <CreateBuyORSellOffer onClick={() => setPage("payment")} />;
    }
  };

  return (
    <P2PLayout
      title={page === "payment" ? "Payment Option" : "Create Buy Offer"}
      onBackButtonPress={page === "payment" ? () => setPage("home") : null}
    >
      <View className="flex-1 p-5">
        <RenderPage page={page} />
      </View>

      <BottomModal
        visible={openModal}
        onClose={() => setOpenModal((prev) => !prev)}
      >
        <View className="flex-col justify-center gap-y-5 mt-4 mb-24  px-3 items-center">
          <View className="p-3 bg-[#F5F5F5] rounded-full">
            <Image source={Images.Confetti} className="w-[64px] h-[64px]" />
          </View>
          <Text className="font-medium text-lg">Successful</Text>

          <Text className="font-light text-center pb-10">
            Your Offer Has Been Created Successfully{" "}
          </Text>
        </View>
        <View className="absolute left-4 bottom-6 w-full">
          <PrimaryButton text={"View Offer"} width={"100%"} />
        </View>
      </BottomModal>
    </P2PLayout>
  );
};

export default BuyOffer;
