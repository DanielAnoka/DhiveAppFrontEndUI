import { View, Text, Image } from "react-native";
import React from "react";
import CheckBox from "../../components/CheckBox";
import { Images } from "../../constants";

const Accounts = () => {
  return (
    <View style={{ marginTop: 150 }}>
      <View
        style={{
          flexDirection: "row",
          backgroundColor: "#fff",
          justifyContent: "space-between",
          width: "100%",
          padding: 10,
          marginBottom: 20,
        }}
      >
        <Text>0 accounts selected</Text>
        <View style={{ flexDirection: "row", gap: 6, alignItems: "center" }}>
          <Text style={{ color: "#717680", fontWeight: 300 }}>Select All</Text>
          <CheckBox />
        </View>
      </View>
      <View style={{ backgroundColor: "#FAFAFA", padding: 10 }}>
        <View
          style={{
            flexDirection: "row",

            justifyContent: "space-between",
            width: "100%",
          }}
        >
          <Text style={{ marginVertical: 5 }}>Account 1</Text>

          <CheckBox />
        </View>
        <View
          style={{
            borderTopWidth: 1,
            marginVertical: 10,
            borderColor: "#E9EAEB",
          }}
        />
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              gap: 7,
            }}
          >
            <Image
              source={Images.Avatar}
              resizeMode="contain"
              style={{ width: 50, height: 50 }}
            />
            <View>
              <Text
                style={{ marginVertical: 5, fontSize: 16, fontWeight: 600 }}
              >
                Swiftrole’s Dhive
              </Text>
              <Text style={{ fontWeight: 300, fontSize: 12 }}>0.167 STL</Text>
            </View>
          </View>
          <Text style={{ fontWeight: 300, fontSize: 12 }}>Ox91.....D26cab</Text>
        </View>
      </View>
    </View>
  );
};

export default Accounts;
