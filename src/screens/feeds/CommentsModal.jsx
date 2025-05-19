import {
  Modal,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
  TextInput,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import Feather from "react-native-vector-icons/Feather";
import Comment from "./Comment";
import { Images } from "../../constants/image";

const CommentsModal = ({ visible, onClose, commentsList }) => {
  return (
    <Modal visible={visible} transparent={true} animationType="fade">
      <TouchableWithoutFeedback onPress={onClose}>
        <View style={styles.overlay} />
      </TouchableWithoutFeedback>
      <View style={[styles.bottomSheet, { paddingVertical: 10 }]}>
        <TouchableOpacity className="absolute right-3 top-7" onPress={onClose}>
          <Ionicons name="close" size={20} color="#000" />
        </TouchableOpacity>
        <View style={styles.dragHandle}>
          <View style={styles.dragBar} />
        </View>
        <View className="flex-col space-y-20 mb-5">
          <ScrollView className="px-4">
            <Text className="text-xl mb-3">Comments</Text>
            {commentsList.length > 0 ? (
              commentsList.map((item, i) => <Comment key={i} {...item} />)
            ) : (
              <View className="flex-col my-20 items-center justify-center">
                <Image source={Images.DoubleMessages} className="w-20 h-20" />
                <Text className="text-[#717680] mt-1">No comments yet</Text>
              </View>
            )}
          </ScrollView>
          <View className="flex-row items-center gap-x-2 px-5">
            <TextInput
              className="w-full flex-1 border px-2 py-3 border-[#D5D7DA] rounded-md bg-white"
              placeholder="Send a message"
            />

            <TouchableOpacity className="bg-primary py-2 px-2.5 rounded-lg">
              <Feather name="send" size={25} color={"white"} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  bottomSheet: {
    position: "absolute",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#fff",
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  dragHandle: {
    height: 30,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 5,
  },
  dragBar: {
    width: 40,
    height: 5,
    backgroundColor: "#ccc",
    borderRadius: 2.5,
  },
});

export default CommentsModal;
