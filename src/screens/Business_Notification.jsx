import React from 'react';
import {
  ScrollView,
  View,
  Image,
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import { useNavigate, Link } from 'react-router-native';
import BottomNav from '../components/BottomNav';
import { TextInput, Text } from 'react-native';
const searchIcon = require('../../assets/search.png');
const filterIcon = require('../../assets/filter.png');


const BusinessNotification = () => {
  const navigate = useNavigate();

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <TouchableOpacity onPress={() => navigate('/business')}>
          <Image
            style={styles.topImage}
            source={require('../../assets/topnot.png')}
            resizeMode="cover"
          />
        </TouchableOpacity>

        <View style={styles.searchContainer}>
        <Image source={searchIcon} style={styles.searchIcon} />
        <TextInput
          placeholder="Search"
          placeholderTextColor="#888"
          style={styles.searchInput}
          // onChangeText / value omitted so it "does nothing"
        />
      </View>

      {/* ————————————————————————————————
          FILTERS BUTTON
         ———————————————————————————————— */}
      <TouchableOpacity
        style={styles.filterButton}
        activeOpacity={0.7}
        // no onPress, so it does nothing
      >
        <Image source={filterIcon} style={styles.filterIcon} />
        <Text style={styles.filterText}>Filters</Text>
      </TouchableOpacity>
        {[...Array(9)].map((_, idx) => (
          <TouchableOpacity
            key={idx}
            onPress={() => navigate('/business')}
            style={styles.notificationWrapper}
          >
            <Image
              source={require('../../assets/notification.png')}
              resizeMode="contain"
              style={styles.notificationImage}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <BottomNav />
    </View>
  );
};

export default BusinessNotification;

const { width } = Dimensions.get('window');
const TAB_ICON_SIZE = 24;
const CENTRAL_SIZE = 56;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
  
    // SEARCH
    searchContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 8,
      height: 40,
      margin: 10,
      paddingHorizontal: 10,
      // Optional shadow on iOS:
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 1 },
      shadowRadius: 2,
      elevation: 2, // for Android
    },
    searchIcon: {
      width: 16,
      height: 16,
      marginRight: 8,
    },
    searchInput: {
      flex: 1,
      fontSize: 16,
      padding: 0, // remove default padding
    },
  
    // FILTERS
    filterButton: {
      flexDirection: 'row',
      alignItems: 'center',
      backgroundColor: '#fff',
      borderWidth: 1,
      borderColor: '#ddd',
      borderRadius: 8,
      height: 40,
      marginHorizontal: 10,
      marginBottom: 8,
      paddingHorizontal: 12,
      shadowColor: '#000',
      shadowOpacity: 0.1,
      shadowOffset: { width: 0, height: 1 },
      shadowRadius: 2,
      elevation: 2,
    },
    filterIcon: {
      width: 16,
      height: 16,
      marginRight: 8,
    },
    filterText: {
      fontSize: 16,
      color: '#333',
    },
  
   
  
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  scrollContent: {
    padding: 4,
  },
  topImage: {
    margin: 10,
  },
  filterImage: {
    marginVertical: 8,
    alignSelf: 'center',
  },
  notificationWrapper: {
    marginVertical: 6,
    alignItems: 'center',
  },
  notificationImage: {
    width: width - 20,
    height: 100,
  },
  tabBarContainer: {
    flexDirection: 'row',
    height: 60,
    borderTopWidth: 1,
    borderTopColor: '#ddd',
    backgroundColor: '#fafafa',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  tabButton: {
    flex: 1,
    alignItems: 'center',
  },
  tabIcon: {
    width: TAB_ICON_SIZE,
    height: TAB_ICON_SIZE,
    resizeMode: 'contain',
  },
  centralButton: {
    width: CENTRAL_SIZE,
    height: CENTRAL_SIZE,
    borderRadius: CENTRAL_SIZE / 2,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -CENTRAL_SIZE / 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
  },
  centralIcon: {
    width: CENTRAL_SIZE - 16,
    height: CENTRAL_SIZE - 16,
    resizeMode: 'contain',
  },
});
