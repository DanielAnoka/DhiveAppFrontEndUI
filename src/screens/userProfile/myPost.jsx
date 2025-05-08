import React, { useState } from 'react';
import { View, Text, Image, TouchableOpacity, SafeAreaView, ScrollView, FlatList } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import { Images } from '../../constants/image';
import { Icons } from '../../constants/icon';

const posts = [
    { id: 1, image: Images.Post1, views: '2.1M' },
    { id: 2, image: Images.Post2, views: '3.4M' },
    { id: 3, image: Images.Post3, views: '10.9M' },
    { id: 4, image: Images.Post3, views: '659.1K' },
    { id: 5, image: Images.Post5, views: '545.6K' },
    { id: 6, image: Images.Post5, views: '111.3M' },
];

export default function MyPostScreen() {
    const [activeTab, setActiveTab] = useState(0);

    return (
        <SafeAreaView className="flex-1 bg-white ">
            {/* Header */}
            <View className="flex-row justify-between items-center px-4 py-4">
                <Text className="text-lg font-semibold px-3">My Post</Text>
                <TouchableOpacity>
                    <Icon name="settings-outline" size={22} color="#000" />
                </TouchableOpacity>
            </View>

            {/* Profile */}
            <View className="items-center px-4 pb-4">
                <View
                    className="w-20 h-20 rounded-full border-2 items-center justify-center"
                    style={{ borderColor: '#5F6DFB' }}
                >
                    <Image
                        source={{ uri: 'https://i.pravatar.cc/150' }}
                        className="w-16 h-16 rounded-full"
                    />
                </View>
                <Text className="mt-2 text-base font-semibold">Pomaline Favour</Text>
                <Text className="text-sm text-gray-500">pomaline@favourators</Text>

                <TouchableOpacity className="mt-3 px-4 py-2 border border-green-400 rounded-full bg-green-50">
                    <Text className="text-green-600 text-sm font-medium">Switch to business account →</Text>
                </TouchableOpacity>
            </View>

        
            <View className="flex-row justify-around border-b border-gray-200">
                {['albums-outline', 'swap-horizontal-outline', 'heart-outline'].map((icon, index) => (
                    <TouchableOpacity
                        key={index}
                        onPress={() => setActiveTab(index)}
                        className="items-center flex-1 py-3"
                    >
                        <Icon name={icon} size={22} color={activeTab === index ? '#5F6DFB' : '#999'} />
                        {activeTab === index && <View className="h-1 w-6 bg-[#5F6DFB] rounded-full mt-1" />}
                    </TouchableOpacity>
                ))}
            </View>


            <FlatList
                data={posts}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                contentContainerStyle={{ paddingBottom: 60 }}
                renderItem={({ item }) => (
                    <View className="w-1/3  p-0.5">
                        <Image
                            source={item.image}
                            className="w-full h-44 rounded-sm"
                            resizeMode="cover"
                        />
                        <View className="absolute bottom-1 left-1 flex-row items-center bg-transparent bg-opacity-50 px-1.5 py-0.5 rounded">
                            <Icon name="play-outline" size={12} color="#fff" />
                            <Text className="text-white text-xs ml-1">{item.views}</Text>
                        </View>
                    </View>
                )}
            />
        </SafeAreaView>
    );
}
