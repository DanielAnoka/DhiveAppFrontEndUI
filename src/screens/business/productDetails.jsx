import React, { useState } from 'react';
import {
    View,
    Text,
    Image,
    SafeAreaView,
    TouchableOpacity,
    TouchableWithoutFeedback,
    Keyboard,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Images } from '../../constants/image';
import ProductSteps from './ProductSteps';
import Step1 from '../../components/products/step1';
import Step2 from '../../components/products/step2';
import Step3 from '../../components/products/step3';
import Step4 from '../../components/products/step4';

const ProductDetails = () => {
    const [stepAdded, setStepAdded] = useState(false);
    const [activeStep, setActiveStep] = useState(1);

    const handleAddProduct = () => {
        setStepAdded(true);
        setActiveStep(1);
    };

    const handleNextStep = () => {
        if (activeStep < 4) {
            setActiveStep(activeStep + 1);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
            <SafeAreaView className="flex-1 bg-white">
                <View className="flex-row items-center pt-5 px-5">
                    <TouchableOpacity className="mr-2">
                        <View className="w-[30px] h-[30px] rounded-full border border-black items-center justify-center">
                            <Ionicons name="chevron-back" size={20} color="#000" />
                        </View>
                    </TouchableOpacity>

                    <Text className="text-[18px] text-black font-semibold flex-1 text-center -ml-8">
                        Product Details
                    </Text>
                </View>

                {stepAdded ? (
                    <>
                        <ProductSteps activeStep={activeStep} />
                        <View className="px-6 mt-6">
                            {activeStep === 1 && <Step1 onContinue={handleNextStep} />}
                            {activeStep === 2 && <Step2 onContinue={handleNextStep} />}
                            {activeStep === 3 && <Step3 onContinue={handleNextStep} />}
                            {activeStep === 4 && <Step4 />}
                        </View>
                    </>
                ) : (
                    <View className="flex items-center justify-center mt-28">
                        <Image
                            source={Images.Empty}
                            className="w-[212px] h-[200px] mb-4"
                            resizeMode="contain"
                        />
                        <Text className="text-base text-black mb-2">
                            Your Product Wall is empty
                        </Text>
                        <Text className="text-center text-[#666]">
                            You have not added any product yet.
                        </Text>

                        <TouchableOpacity
                            className="flex-row items-center w-[80%] justify-center mt-10 px-4 py-2 bg-[#444CE7] rounded-lg"
                            onPress={handleAddProduct}
                        >
                            <Text className="text-white ml-2 font-semibold p-2">Add Product</Text>
                            <Ionicons name="add" size={20} color="#fff" />
                        </TouchableOpacity>
                    </View>
                )}
            </SafeAreaView>
        </TouchableWithoutFeedback>
    );
};

export default ProductDetails;
