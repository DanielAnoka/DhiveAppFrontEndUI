import React from "react";
import {
    View,
    Text,
    SafeAreaView,
    TouchableOpacity,
    Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { LinearGradient } from "expo-linear-gradient";
import { Images } from "../../constants/image";
import { useNavigate } from "react-router-native";

const avatars = [
    { id: 1, uri: Images.Guy2 },
    { id: 2, uri: Images.Guy },
    { id: 3, uri: Images.Guy3 },
];

const LiveScreen = () => {
    const navigate = useNavigate();

    return (
        <SafeAreaView className="flex-1 bg-black relative">
            {/* Top Header */}
            <View className="flex-row justify-between items-center px-4 pt-4">
                <TouchableOpacity onPress={() => navigate(-1)}>
                    <Ionicons name="close" size={24} color="white" />
                </TouchableOpacity>
                <View className="flex-row items-center">
                  
                    <View className="flex-row">
                        {avatars.map((item, index) => (
                            <Image
                                key={item.id}
                                source={item.uri}
                                className={`w-9 h-9 rounded-full border border-black ${index !== 0 ? "-ml-2" : ""
                                    }`}
                            />
                        ))}
                    </View>
                    <Text className="text-white text-xs ml-2">
                        500 followers active now
                    </Text>
                </View>

                <Ionicons name="settings-outline" size={24} color="white" />
            </View>
            <View className="absolute bottom-20 w-full items-center">
                <TouchableOpacity activeOpacity={0.8} onPress={() => navigate('/goLive')} >
                    <View className="flex-1 justify-center items-center">
                        <View className="items-center justify-center">

                            <LinearGradient
                                colors={["#A0BFFF", "#2D31A6"]}
                                className="w-28 h-28 rounded-full items-center justify-center"
                            >

                                <View className="w-20 h-20 bg-white rounded-full items-center justify-center">

                                    <View className="w-16 h-16 bg-[#4F46E5] rounded-full items-center justify-center">
                                        <Text className="text-white font-semibold text-base">Start</Text>
                                    </View>
                                </View>
                            </LinearGradient>


                            <View className="absolute bottom-0">
                                <View className="bg-[#4F46E5] border border-white rounded-md px-2 py-1">
                                    <Text className="text-white text-xs font-semibold">LIVE</Text>
                                </View>
                            </View>
                        </View>
                    </View>

                </TouchableOpacity>
            </View>
            <View className="absolute bottom-6 left-0 right-0 items-center">
                <View className="flex-row space-x-1">
                    <TouchableOpacity className="px-4 py-1" onPress={() => navigate("/create-post")}>
                        <Text className="text-sm font-medium" style={{ color: '#717680' }}>Post</Text>
                    </TouchableOpacity>
                    <TouchableOpacity className="px-4 py-1">
                        <Text className="text-white text-sm font-bold">Live</Text>
                    </TouchableOpacity>
                </View>
            </View>
            <TouchableOpacity className="absolute bottom-10 right-4">
                <MaterialIcons name="flip-camera-ios" size={26} color="white" />
            </TouchableOpacity>
        </SafeAreaView>
    );
};

export default LiveScreen;
