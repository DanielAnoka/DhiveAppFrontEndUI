import React, { useState } from "react";
import {
  View,
  TouchableOpacity,
  Text,
  StyleSheet,
  Dimensions,
  Image,
} from "react-native";
import { Icons } from "../constants/icon";
import Feather from "react-native-vector-icons/Feather";
import { useNavigate, useLocation } from "react-router-native";
import BottomModal from "./BottomModal";

const { width } = Dimensions.get("window");

const NavbarBusiness = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const currentPath = location.pathname;
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => navigate("/feeds")} style={styles.tab}>
          <Image
            source={currentPath === "/feeds" ? Icons.Feeds : Icons.Feed}
            style={styles.icon}
          />
          <Text
            style={[
              styles.label,
              currentPath === "/feeds" && styles.activeLabel,
            ]}
          >
            Feeds
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigate("/explore")}
          style={[styles.tab, styles.leftTab]}
        >
          <Image
            source={currentPath === "/explore" ? Icons.Shop2 : Icons.Shop}
            style={styles.icon}
          />
          <Text
            style={[
              styles.label,
              currentPath === "/explore" && styles.activeLabel,
            ]}
          >
            Explore
          </Text>
        </TouchableOpacity>

        <View style={styles.fabWrapper}>
          <TouchableOpacity
            style={styles.fabButton}
            onPress={() => setModalVisible((prev) => !prev)}
          >
            <Image source={Icons.Home} style={styles.fabIcon} />
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => navigate("/businesses")}
          className="pl-3"
          style={[styles.tab, styles.rightTab]}
          cl
        >
          <Image
            source={
              currentPath === "/businesses"
                ? Icons.HomeTrendUp
                : Icons.HomeTrend
            }
            style={styles.icon}
          />
          <Text
            style={[
              styles.label,
              currentPath === "/businesses" && styles.activeLabel,
            ]}
          >
            Businesses
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigate("/assets")}
          style={[styles.tab]}
        >
          <Image
            source={currentPath === "/assets" ? Icons.Wallet : Icons.Wallet3}
            style={styles.icon}
          />
          <Text
            style={[
              styles.label,
              currentPath === "/assets" && styles.activeLabel,
            ]}
          >
            Assets
          </Text>
        </TouchableOpacity>
      </View>

      <BottomModal
        visible={modalVisible}
        onClose={() => setModalVisible((prev) => !prev)}
        title={"Select Option"}
      >
        <TouchableOpacity
          // onPress={() => navigate(p2p.route)}

          className="flex-row my-4 gap-x-3 items-center"
        >
          <View className="bg-[#EEF4FF] rounded-full p-2">
            <View className="bg-primary rounded-full p-1.5">
              <Feather name="trending-up" color={"#fff"} />
            </View>
          </View>
          <View>
            <Text className="text font-medium">Tokenize Your Business</Text>
            <Text className="text-sm text-textgray font-light">
              Create a tradable token for your business.
            </Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => navigate("/create-post")}
          className="flex-row mt-4 mb-10 gap-x-3 items-center"
        >
          <View className="bg-[#EEF4FF] rounded-full p-2">
            <View className="bg-primary rounded-full p-1.5">
              <Feather name="trending-up" color={"#fff"} />
            </View>
          </View>
          <View>
            <Text className="text font-medium">Make a Post</Text>
            <Text className="text-sm text-textgray font-light">
              Keep your audience in the loop
            </Text>
          </View>
        </TouchableOpacity>
      </BottomModal>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    height: 70,
    borderTopWidth: 1,
    borderColor: "#eee",
    backgroundColor: "#fff",
    justifyContent: "space-around",
    alignItems: "center",
    paddingHorizontal: 6,
    paddingBottom: 10,
  },
  tab: {
    alignItems: "center",
    justifyContent: "center",
    flex: 1,
  },
  leftTab: {
    marginRight: 25,
  },
  rightTab: {
    marginLeft: 25,
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
  label: {
    fontSize: 11,
    color: "#666",
    marginTop: 2,
  },
  activeLabel: {
    color: "#5F6DFB",
    fontWeight: "600",
  },
  fabWrapper: {
    position: "absolute",
    top: -30,
    left: width / 2 - 30,
    backgroundColor: "#fff",
    borderRadius: 30,
    padding: 4,
    elevation: 4,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  fabButton: {
    width: 60,
    height: 60,
    backgroundColor: "#5F6DFB",
    borderRadius: 30,
    justifyContent: "center",
    alignItems: "center",
  },
  fabIcon: {
    width: 28,
    height: 28,
    resizeMode: "contain",
  },
});

export default NavbarBusiness;
