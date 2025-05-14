import { View, Text } from "react-native";
import P2PLayout from "./Layout";

const AppealTracking = () => {
  return (
    <P2PLayout title={"Appeal Tracking"}>
      <View className="m-5 pt-5">
        <View className="flex-row gap-x-4 items-start">
          <View className="flex-col items-center space-y-3">
            <View className="p-0.5 rounded-full bg-white border border-primary">
              <View className="p-1  bg-primary rounded-full" />
            </View>
            <View className="flex-col gap-y-1">
              <View className="h-1.5  bg-black w-0.5" />
              <View className="h-2  bg-black w-0.5" />
              <View className="h-2  bg-black w-0.5" />
              <View className="h-1.5  bg-black w-0.5" />
            </View>
          </View>
          <View>
            <Text className="mb-2">Money Not Released</Text>
            <Text className="text-textgray font-light">
              01 - 09 - 2025 (12:30 PM)
            </Text>
          </View>
        </View>
        <View className="flex-row my-4 gap-x-4 items-start">
          <View className="flex-col items-center space-y-3">
            <View className="p-0.5 rounded-full bg-white  border-primary">
              <View className="p-1  bg-primary rounded-full" />
            </View>
            <View className="flex-col gap-y-1">
              <View className="h-1.5  bg-black w-0.5" />
              <View className="h-2  bg-black w-0.5" />
              <View className="h-2  bg-black w-0.5" />
              <View className="h-1.5  bg-black w-0.5" />
            </View>
          </View>
          <View>
            <Text className="mb-2">Case Assigned</Text>
            <Text className="text-textgray font-light">
              01 - 09 - 2025 (12:30 PM)
            </Text>
          </View>
        </View>
        <View className="flex-row gap-x-4 items-start">
          <View className="flex-col items-center space-y-3">
            <View className="p-0.5 rounded-full bg-white  border-primary">
              <View className="p-1  bg-primary rounded-full" />
            </View>
          </View>
          <View>
            <Text className="mb-2">Customer Care Contacted</Text>
            <Text className="text-textgray font-light">
              01 - 09 - 2025 (12:30 PM)
            </Text>
          </View>
        </View>
      </View>
    </P2PLayout>
  );
};

export default AppealTracking;
