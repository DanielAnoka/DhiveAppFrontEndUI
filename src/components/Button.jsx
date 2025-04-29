import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Platform,
  View,
  Image,
} from 'react-native';

const CustomButton = ({
  text = 'Button',
  onPress,
  style = {},
  textStyle = {},
  activeOpacity = 0.8,
  icon = null, 
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, style]}
      activeOpacity={activeOpacity}
    >
      <View style={styles.innerContainer}>
        {icon && <View style={styles.iconContainer}>{icon}</View>}
        <Text style={[styles.text, textStyle]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#444CE7',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 12,
    alignItems: 'center',
    justifyContent: 'center',
    ...Platform.select({
      ios: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
      },
      android: {
        elevation: 3,
      },
    }),
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconContainer: {
    marginRight: 12,
  },
  text: {
    color: '#FFFFFF',
    fontWeight: Platform.OS === 'ios' ? '600' : '500',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default CustomButton;
