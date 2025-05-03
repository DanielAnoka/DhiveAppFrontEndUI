import React from 'react';
import {
  ScrollView,
  View,
  Image,
  StyleSheet,
  Pressable,
} from 'react-native';
import { useNavigate } from 'react-router-native';
import BottomNav from '../components/BottomNav';



export default function BusinessLive() {
  const navigate = useNavigate();

  // Generate 5 repeated images for horizontal scroll
  const horizontalImages = Array.from({ length: 5 }, (_, i) => (
    <Image
      key={`horizontal-${i}`}
      source={require('../../assets/singlelive.png')}
      resizeMode="contain"
      style={styles.horizontalImage}
    />
  ));

  // Remaining images to display in 2 per row
  const gridImages = Array.from({ length: 9 }, (_, i) => (
    <Pressable
      key={`grid-${i}`}
      onPress={() => navigate('/LiveOverlayScreen')} // Example navigation route
    >
      <Image
        source={require('../../assets/tolive.png')}
        resizeMode="cover"
        style={styles.gridImage}
      />
    </Pressable>
  ));

  // Helper to split array into rows of 2
  const chunkArray = (array, size) => {
    const chunks = [];
    for (let i = 0; i < array.length; i += size) {
      chunks.push(array.slice(i, i + size));
    }
    return chunks;
  };

  const chunkedGridImages = chunkArray(gridImages, 2);

  return (
    <View style={{ flex: 1 }}><ScrollView style={styles.container}>
      {/* Top Image */}
      <Image
        style={styles.nameLive}
        source={require('../../assets/NameLive.png')}
        resizeMode="contain" />

      {/* Horizontal Scroll Section */}
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={true}
        style={styles.horizontalScrollContainer}
        contentContainerStyle={styles.horizontalContentContainer}
      >
        {horizontalImages}
      </ScrollView>

      {/* Grid Section - Two per Row */}
      {chunkedGridImages.map((row, index) => (
        <View key={`row-${index}`} style={styles.row}>
          {row.map((item, idx) => (
            <View key={`item-${idx}`} style={styles.gridItem}>
              {item}
            </View>
          ))}
        </View>
      ))}


    </ScrollView><BottomNav /></View>
  );
}

  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      flex: 1,
      padding: 4,
    },
    nameLive: {
      margin: 10,
      alignSelf: 'center',
      width: '100%',
    },
    horizontalScrollContainer: {
      height: 120,
      marginBottom: 10,
    },
    horizontalContentContainer: {
      flexDirection: 'row',
      alignItems: 'center',
    },
    horizontalImage: {
      width: 100,
      height: 100,
      marginRight: 10,
    },
    row: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 10,
    },
    gridItem: {
      width: '45%', // Takes half of the row
      paddingHorizontal: 3,
    },
    gridImage: {
      width: '100%',
      aspectRatio: 1,
      borderRadius: 12,
      resizeMode: 'cover',
    },
  });
  
  