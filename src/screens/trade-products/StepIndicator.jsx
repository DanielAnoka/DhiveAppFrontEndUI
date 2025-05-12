import React, { useState } from "react";
import { View, Dimensions } from "react-native";

const StepIndicator = () => {
  const totalSteps = 5;
  const [currentStep, setCurrentStep] = useState(0);

  const { width } = Dimensions.get("screen");

  return (
    <View className="w-full">
      <View className="flex-row items-center mb-6">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <View key={index} className="flex-row items-center">
            <View
              className={`h-5 w-5 rounded-full border-2
                ${index <= currentStep ? "border-white" : "border-[#E9EAEB]"}
                `}
            >
              <View
                className={`h-full w-full rounded-full items-center justify-center 
                ${index <= currentStep ? "bg-blue-600" : "bg-white"}`}
              />
            </View>

            {index < totalSteps - 1 && (
              <View
                style={{ width: width / 6 }}
                className={`h-1.5 ${
                  index < currentStep - 1 ? "bg-blue-600" : "bg-[#E9EAEB]"
                }`}
              />
            )}
          </View>
        ))}
      </View>

      {/* <TouchableOpacity
        onPress={handleNext}
        className="bg-blue-600 px-4 py-2 rounded-full"
      >
        <Text className="text-white font-semibold">Complete Task</Text>
      </TouchableOpacity> */}
    </View>
  );
};

export default StepIndicator;
