import React from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

const { height } = Dimensions.get('window');

const Trading = ({ visible, onClose, onSelectOption, }) => {
  const options = [
    {
      id: 'bridge',
      title: 'Bridge Trading',
      subtitle: 'Bridge from one token to another.',
    },
    {
      id: 'swap',
      title: 'Swap',
      subtitle: 'Swap from one token to another.',
    },
  ];

  return (
    <Modal animationType="slide" visible={visible} transparent>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          <View style={styles.header}>
            <Text style={styles.headerText}>Select Trading Option</Text>
            <TouchableOpacity onPress={onClose}>
              <View style={styles.iconCircle}>
                <Icon name="x" size={20} color="#000" />
              </View>
            </TouchableOpacity>
          </View>

          {options.map((item) => (
            <TouchableOpacity
              key={item.id}
              style={styles.optionCard}
              onPress={() => onSelectOption(item.id)}
              activeOpacity={0.7}
            >
              <View style={styles.iconWrapper}>
                <Icon name="activity" size={16} color="#fff" />
              </View>
              <View style={styles.textWrapper}>
                <Text style={styles.optionTitle}>{item.title}</Text>
                <Text style={styles.optionSubtitle}>{item.subtitle}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </Modal>
  );
};

export default Trading;

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.4)',
  },
  modal: {
    backgroundColor: '#fff',
    padding: 20,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    height: 320, 
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  headerText: {
    fontWeight: '600',
    fontSize: 16,
  },
  iconCircle: {
    width: 24,
    height: 24,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  optionCard: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  iconWrapper: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#4C52FF',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 12,
  },
  textWrapper: {
    flex: 1,
  },
  optionTitle: {
    fontSize: 14,
    fontWeight: '600',
  },
  optionSubtitle: {
    fontSize: 12,
    color: '#666',
  },
});
