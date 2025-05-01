import {
  View,
  Text,
  SafeAreaView,
  StatusBar,
  FlatList,
  StyleSheet,
} from "react-native";
import React, { useState } from "react";
import SearchBar from "./SearchBar";
import { products } from ".";
import ItemCard from "./ItemCard";

const Search = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleCancel = () => {
    setSearchTerm("");
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#fff" }}>
      <StatusBar barStyle="dark-content" backgroundColor="#fdfdfd" />

      <View style={{ padding: 10 }}>
        <SearchBar
          searchTerm={searchTerm}
          setSearchTerm={setSearchTerm}
          handleCancel={handleCancel}
        />
      </View>
      {searchTerm.length > 0 ? (
        <FlatList
          data={products}
          keyExtractor={() => Math.random() * 20}
          renderItem={({ item }) => <ItemCard {...item} />}
          contentContainerStyle={{
            justifyContent: "space-between",
            paddingBottom: 60,
          }}
          numColumns={2}
        />
      ) : (
        <View>
          <Text style={styles.text}>Trending Deals</Text>
          <Text style={styles.text}>New Arrivals</Text>
          <Text style={styles.text}>Token-backed Products</Text>
          <Text style={styles.text}>Token-backed Products</Text>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  text: { padding: 10, fontSize: 16 },
});

export default Search;
