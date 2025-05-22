import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, StyleSheet, Dimensions } from 'react-native';
import { useLocation, useNavigate } from 'react-router-native';
import { Icons } from '../constants/icon';

const { width } = Dimensions.get("window");

const BusinessBottomNav = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigate("/business")} style={styles.tab}>
        <Image source={Icons.Feed} style={styles.icon} />
        <Text style={[styles.label, location.pathname === "/business" && styles.activeLabel]}>
          Feeds
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigate("/business/explore")} style={[styles.tab, styles.leftTab]}>
        <Image source={Icons.Shop} style={styles.icon} />
        <Text style={[styles.label, location.pathname === "/business/explore" && styles.activeLabel]}>
          Explore
        </Text>
      </TouchableOpacity>

      <View style={styles.fabWrapper}>
        <TouchableOpacity style={styles.fabButton} onPress={() => navigate("/goLive")}>
          <Image source={Icons.Home} style={styles.fabIcon} />
        </TouchableOpacity>
      </View>

      <TouchableOpacity onPress={() => navigate("/business/wall")} style={[styles.tab, styles.rightTab]}>
        <Image source={Icons.HomeTrend} style={styles.icon} />
        <Text style={[styles.label, location.pathname === "/business/wall" && styles.activeLabel]}>
          Business
        </Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigate("/business/assets")} style={styles.tab}>
        <Image source={Icons.Wallet3} style={styles.icon} />
        <Text style={[styles.label, location.pathname === "/business/assets" && styles.activeLabel]}>
          Assets
        </Text>
      </TouchableOpacity>
    </View>
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
    top: -19,
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

export default BusinessBottomNav;
