import React from 'react';
import { TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const CheckBox = ({ checked, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress}>
      {checked ? (
        <Ionicons name="checkmark-circle" size={20} color="#444CE7" />
      ) : (
        <View
          style={{
            width: 20,
            height: 20,
            borderWidth: 1,
            borderColor: '#A4A7AE',
            backgroundColor: '#fff',
            borderRadius: 4,  // Make sure it's rounded
          }}
        />
      )}
    </TouchableOpacity>
  );
};

export default CheckBox;
