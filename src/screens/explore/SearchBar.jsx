import React from "react";
import {
  View,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Text,
  Image,
} from "react-native";
import Ionicons from "react-native-vector-icons/Ionicons";
import { useNavigate } from "react-router-native";
import { Images } from "../../constants";

const SearchBar = ({ searchTerm, setSearchTerm, handleCancel }) => {
  const navigate = useNavigate();

  return (
    <View
      style={{
        flexDirection: "row",
        marginTop: 10,

        alignItems: "center",
      }}
    >
      <View
        style={[
          styles.container,
          { width: searchTerm.length > 0 ? "65%" : "85%" },
        ]}
      >
        <Ionicons name="search" color="#A4A7AE" size={20} />

        <TextInput
          style={styles.input}
          value={searchTerm}
          onChangeText={(text) => setSearchTerm(text)}
          placeholder="Search products"
        />
      </View>

      <TouchableOpacity
        onPress={() => {
          handleCancel();
          navigate("/explore");
        }}
      >
        <Text style={styles.cancelButton}>Cancel</Text>
      </TouchableOpacity>
      {searchTerm.length > 0 && (
        <TouchableOpacity style={styles.button}>
          <Image
            source={Images.Filter}
            resizeMode="contain"
            style={{ width: 20, height: 20, marginLeft: 10 }}
          />
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#F5F5F5",
    padding: 10,
    borderRadius: "50%",
    alignItems: "center",
    flexDirection: "row",
  },
  container: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#F5F5F5",
    padding: 10,
    borderRadius: 10,
    gap: 5,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
  },
  cancelButton: {
    fontSize: 16,
    marginLeft: 10,
  },
});

export default SearchBar;
