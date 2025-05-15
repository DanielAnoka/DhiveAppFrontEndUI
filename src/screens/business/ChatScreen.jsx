import React from "react";
import { View, Text, TextInput, ScrollView, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { LinearGradient } from "expo-linear-gradient";
import { Images } from "../../constants/image";
import { Icons } from "../../constants/icon";

export default function ChatScreen() {
    return (
        <SafeAreaView className="flex-1 bg-white">
            <View className="relative pb-6">
                <LinearGradient
                    colors={['#E0C3FC', '#8EC5FC']}
                    className="h-20 "
                />
                <View className="absolute bottom-[-35] left-4 right-4 flex-row items-end">
                    <Image
                        source={Images.Avatar}
                        className="w-24 h-24 rounded-full border-2 border-white"
                    />
                    <View className="flex-row gap-2 ml-[40%]">
                        <View className="flex-row items-center mb-1 ">
                            <Image source={Images.AU} className='w-[14px] h-[14px]' />
                            <Text className="text-sm text-gray-900">$STL</Text>
                        </View>
                        <View className="flex-row items-center mb-1 ">
                            <Image source={Icons.Users} />
                            <Text className="text-sm text-gray-900">16.3k</Text>
                        </View>

                    </View>
                </View>

            </View>

            <View className="px-5 mt-10 flex-row items-center justify-between">
                <View className="flex-row items-center">
                    <Text className="text-[25px] font-[700] text-black mr-2">Swiftrole’s Dhives</Text>
                    <View className="w-3 h-3 rounded-full bg-green-500" style={{ marginTop: 10 }} />
                </View>
                <Ionicons name="ellipsis-vertical" size={23} color="#A4A7AE" />
            </View>
            <View className="flex-row flex-wrap items-center mt-1 px-5 ">
                <View className="flex-row items-center bg-[#D5D9EB] rounded-full px-2 py-0.5 mr-2">
                    <View className="w-2 h-2 rounded-full bg-gray-400 mr-1" />
                    <Text className="text-xs text-gray-500">Ox79...107hg</Text>
                </View>

                <View className="flex-row items-center bg-blue-100 rounded-full px-2 py-0.5 mr-2">
                    <View className="w-2 h-2 rounded-full bg-blue-500 mr-1" />
                    <Text className="text-xs text-blue-800">Technology</Text>
                </View>

                <View className="flex-row items-center bg-green-100 rounded-full px-2 py-0.5">
                    <View className="w-2 h-2 rounded-full bg-green-500 mr-1" />
                    <Text className="text-xs text-green-800">Cash Back - 20%</Text>
                </View>
            </View>

            {/* Chat Area */}
            <ScrollView className="flex-1 px-4 mt-10">
                <View className="mt-4">
                    <View className="flex-row items-start">
                        <Image source={Images.Avatar} className="w-8 h-8 rounded-full mr-2" />
                        <View className="flex-1">
                            <View className="flex-row items-center justify-between space-x-2">
                                <Text className="text-sm text-gray-700 font-semibold">Swiftrole</Text>
                                <Text className="text-xs text-gray-400">Thursday 10:45am</Text>
                            </View>
                            <View className="bg-gray-100 p-3 rounded-lg mt-1">
                                <Text className="text-sm text-black">
                                    work on making those changes you suggested and will shoot it over.
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>


                <View className="mt-4">

                    <View className="flex-row items-start">
                        <Image source={Images.Avatar} className="w-8 h-8 rounded-full mr-2" />
                        <View className="flex-1">
                            <View className="flex-row items-center justify-between space-x-2">
                                <Text className="text-sm text-gray-700 font-semibold">Swiftrole</Text>
                                <Text className="text-xs text-gray-400 mb-1">Thursday 11:02am</Text>
                            </View>
                            <View className="bg-gray-100 p-3 rounded-lg mt-1">
                                <Text className="text-sm text-black">
                                    Hey Olivia, I’ve finished with the requirements doc! I made some notes in the doc as well for Phoenix to look over.
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View className="mt-4">
                    <View className="flex-row items-start">
                        <Image source={Images.Avatar} className="w-8 h-8 rounded-full mr-2" />
                        <View className="flex-1">
                            <View className="flex-row items-center justify-between space-x-2">
                                <Text className="text-sm text-gray-700 font-semibold">Swiftrole</Text>
                                <Text className="text-xs text-gray-400 mb-1">Thursday 11:02am</Text>
                            </View>
                            <View className="bg-gray-100 p-3 rounded-lg mt-1 flex-row items-center">
                                <FontAwesome name="file-pdf-o" size={20} color="red" />
                                <Text className="ml-2 text-sm text-black">Tech requirements.pdf (1.2 MB)</Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View className="mt-4 items-end">
                    <View className="flex-row justify-between  ">
                        <Text className="text-sm text-gray-700 font-semibold ">You</Text>
                        <Text className="text-xs text-gray-400">Thursday 11:05am</Text>
                    </View>
                    <View className="bg-blue-500 p-3 rounded-lg">
                        <Text className="text-white text-sm">Awesome! Thanks. I'll look at this today.</Text>
                    </View>
                </View>

                <View className="mt-4">
                    <View className="flex-row items-start">
                        <Image source={Images.Avatar} className="w-8 h-8 rounded-full mr-2" />
                        <View className="flex-1">
                            <View className="flex-row items-center justify-between space-x-2">
                                <Text className="text-sm text-gray-700 font-semibold">Swiftrole</Text>
                                <Text className="text-xs text-gray-400">Thursday 10:45am</Text>
                            </View>
                            <View className="bg-gray-100 p-3 rounded-lg mt-1">
                                <Text className="text-sm text-black">
                                    No rush though — we still have to wait for Liani’s designs.
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View className="mt-4">
                    <View className="flex-row items-start">
                        <Image source={Images.Avatar} className="w-8 h-8 rounded-full mr-2" />
                        <View className="flex-1">
                            <View className="flex-row items-center justify-between space-x-2">
                                <Text className="text-sm text-gray-700 font-semibold">Swiftrole</Text>
                                <Text className="text-xs text-gray-400">Thursday 10:45am</Text>
                            </View>
                            <View className="bg-gray-100 p-3 rounded-lg mt-1">
                                <Text className="text-sm text-black">
                                    Hey Olivia, can you please review the latest design when you can?
                                </Text>
                            </View>
                        </View>
                    </View>
                </View>

                <View className="mt-5 items-end w-full">
                    <View className="flex-row justify-between w-full ">
                        <Text className="text-sm text-gray-700 font-semibold">You</Text>
                        <Text className="text-xs text-gray-400">Today 9:05am</Text>
                    </View>
                    <View className="bg-blue-500 p-3 rounded-lg">
                        <Text className="text-white text-sm">
                            Sure thing, I’ll have a look today. They’re looking great!
                        </Text>
                    </View>
                </View>


                <View className="mt-4">

                    <View className="flex-row items-start">
                        <Image source={Images.Avatar} className="w-8 h-8 rounded-full mr-2" />
                        <View className="flex-1">
                            <View className="flex-row items-center justify-between space-x-2">
                                <Text className="text-sm text-gray-700 font-semibold">Swiftrole</Text>
                                <Text className="text-xs text-gray-400">Today 9:07am</Text>
                            </View>
                            <Text className="text-2xl mt-1">👏🔥</Text>
                        </View>
                    </View>
                </View>
            </ScrollView>


            <View className="p-3 border-t border-gray-200">
                <TextInput
                    placeholder="Send a message"
                    className="p-3 bg-gray-100 rounded-lg text-sm"
                />
                <View className="items-end mt-2">
                    <View className="flex-row space-x-2 items-center">
                        <View className="justify-center items-center">
                            <Image source={Icons.Face}/>
                        </View>
                        <View className="justify-center items-center">
                            <Ionicons name="ellipsis-horizontal" size={23} color="#A4A7AE" />
                        </View>
                        <TouchableOpacity className="bg-blue-500 p-3 rounded-xl">
                            <Text className="text-white text-[14px]">Send message</Text>
                        </TouchableOpacity>
                    </View>

                </View>
            </View>

        </SafeAreaView>
    );
}




