import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigate } from 'react-router-native';
import { Icons } from '../constants'; 

const actions = [
  { name: 'Send', icon: Icons.Send, backgroundColor: '#EFF8FF', path: '/send' },
  { name: 'Receive', icon: Icons.ArrowDown, backgroundColor: '#F5F8FF', path: '/receive' },
  { name: 'P2P', icon: Icons.P2P, backgroundColor: '#FDF2F8', path: '/p2p' },
  { name: 'More', icon: Icons.More, backgroundColor: '#ECFDF3', path: '/more' },
];

const ActionButtons = () => {
  const navigate = useNavigate(); 

  const handlePress = (path) => {
    navigate(path);
  };

  return (
    <View style={styles.container}>
      <View style={styles.row}>
        {actions.map((action) => (
          <TouchableOpacity
            key={action.name}
            style={styles.btn}
            onPress={() => handlePress(action.path)}
          >
            <View style={[styles.iconCircle, { backgroundColor: action.backgroundColor }]}>
              <Image source={action.icon} style={styles.icon} />
            </View>
            <Text style={styles.text}>{action.name}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginHorizontal: 8,
    width: '84%',
    alignSelf: 'center',
    paddingVertical: 14,
    borderRadius: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.05,
    shadowRadius: 6,
    elevation: 3,
    height: 100,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 24,
  },
  btn: {
    alignItems: 'center',
    width: 60,
  },
  iconCircle: {
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  text: {
    marginTop: 13,
    fontSize: 12,
    fontWeight: '500',
    color: '#1F235B',
  },
});

export default ActionButtons;
