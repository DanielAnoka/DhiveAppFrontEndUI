import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from "react-native";
import React, { useState } from "react";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigate } from "react-router-native";
import { filterTypes } from "../../constants";
import ContainerWrapper from "../../components/ContainerWrapper";
import PrimaryButton from "../../components/PrimaryButton";
import FilterTypeModal from "./FilterTypeModal";
// import { Images, walletOptions } from "../../constants";
// import PrimaryButton from "../../components/PrimaryButton";
// import SecondaryButton from "../../components/SecondaryButton";

const FilterPage = () => {
  const navigate = useNavigate();
  const [selectedType, setSelectedType] = useState(filterTypes[0]);
  const [showCategoryModal, setShowCategoryModal] = useState(false);
  return (
    <SafeAreaView className="bg-[#FDFDFD] px-5">
      <View className={"flex-col  h-full justify-between"}>
        <ContainerWrapper>
          <View className="flex-row w-full items-center justify-between">
            <View className="flex-row items-center gap-2">
              <TouchableOpacity onPress={() => navigate(-1)}>
                <View className="w-[30px] h-[30px] rounded-full bg-[#F5F5F5] justify-center items-center border border-[#000]">
                  <Ionicons name="chevron-back" size={20} color="#000" />
                </View>
              </TouchableOpacity>

              <Text className="text-base font-medium">Filter</Text>
            </View>
            <Text className="text-base font-medium text-[#252B37]">Reset</Text>
          </View>
          <View className="mt-10">
            {filterTypes.map((type, i) => (
              <View
                key={type.type}
                className="flex-row mb-4 w-full justify-between items-center"
              >
                <TouchableOpacity
                  onPress={() => {
                    setSelectedType(type);
                    setShowCategoryModal(true);
                  }}
                  className="flex-row gap-2 items-center"
                >
                  <Image
                    source={type.image}
                    className="w-6 h-6"
                    // resizeMode="contain"
                  />
                  <Text>{type.type}</Text>
                </TouchableOpacity>
                <Text className="text-primary">{type.resetOptions}</Text>
              </View>
            ))}
          </View>
        </ContainerWrapper>
        <PrimaryButton text={"Apply"} />
      </View>

      <FilterTypeModal
        selectedType={selectedType}
        onClose={() => setShowCategoryModal((prev) => !prev)}
        visible={showCategoryModal}
      />
    </SafeAreaView>
  );
};

export default FilterPage;
