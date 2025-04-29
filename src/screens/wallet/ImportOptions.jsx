//
import React from "react";
import {
  Modal,
  View,
  TouchableWithoutFeedback,
  StyleSheet,
  TouchableOpacity,
  Text,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { importOptions } from "../../constants";
import { useNavigate } from "react-router-native";

const ImportOptions = ({ visible, onClose }) => {
  const navigate = useNavigate();

  return (
    <View>
      <Modal visible={visible} transparent={true} animationType="fade">
        <TouchableWithoutFeedback onPress={onClose}>
          <View style={styles.overlay} />
        </TouchableWithoutFeedback>
        <View style={[styles.bottomSheet, { height: 380 }]}>
          <TouchableOpacity style={styles.backButton} onPress={onClose}>
            <View style={styles.circle}>
              <Ionicons name="close" size={20} color="#000" />
            </View>
          </TouchableOpacity>
          <View
            style={{
              flexDirection: "column",
              height: "100%",
              justifyContent: "space-between",
              paddingBottom: 10,
            }}
          >
            <View
              style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                marginTop: 80,
                paddingHorizontal: 10,
              }}
            >
              <Text style={{ fontSize: 16, fontWeight: 700 }}>
                Import Options
              </Text>
              <Text
                style={{
                  //   fontWeight: 300,
                  fontSize: 14,
                  marginTop: 10,
                  lineHeight: 24,
                  textAlign: "center",
                  color: "#414651",
                }}
              >
                Import an existing wallet with your seed phrase, private key or
                hardware wallet
              </Text>
            </View>
            <View style={{ paddingHorizontal: 10 }}>
              {importOptions.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => navigate(item.route)}
                  style={styles.stepContainer}
                >
                  <View
                    style={{
                      borderRadius: "100%",
                      padding: 10,
                      backgroundColor: "#EEF4FF",
                      alignSelf: "center",
                    }}
                  >
                    <Image
                      source={item.image}
                      style={styles.icons}
                      resizeMode="contain"
                    />
                  </View>
                  <View>
                    <Text style={{ fontSize: 14, marginBottom: 5 }}>
                      {item.title}
                    </Text>
                  </View>
                  <View
                    style={{
                      marginRight: 30,
                      position: "absolute",
                      right: -10,
                    }}
                  >
                    <Ionicons name="chevron-forward" size={13} />
                  </View>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        </View>
      </Modal>
    </View>
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
  stepContainer: {
    backgroundColor: "#FAFAFA",
    paddingHorizontal: 10,
    paddingVertical: 20,
    marginBottom: 16,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    // justifyContent: "space-between",
    gap: 10,
  },
  backButton: {
    position: "absolute",
    right: 10,
    top: 20,
  },
  icons: {
    width: 18,
    height: 18,
  },

  circle: {
    width: 30,
    height: 30,
    borderRadius: 20,
    backgroundColor: "#03194B0A",
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#03194B",
  },
});

export default ImportOptions;
