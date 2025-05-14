import React from 'react';
import { View } from 'react-native';

const ProductSteps = ({ activeStep }) => {
    return (
        <View className="flex-row justify-start space-x-2 px-6 mb-4 mt-12">
            {[1, 2, 3,4].map((s) => (
                <View
                    key={s}
                    className={`w-[40px] h-[5px] rounded-[2.5px] ${activeStep === s ? 'bg-[#000000]' : 'bg-[#E9EAEB]'}`}
                />
            ))}
        </View>
    );
};

export default ProductSteps;
