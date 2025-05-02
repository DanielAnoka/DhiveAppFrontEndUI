import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Modal,
  StyleSheet,
  FlatList,
  Dimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import CustomButton from './Button';

const { height } = Dimensions.get('window');

const filterOptions = [
  'All',
  'Pending',
  'Completed',
  'Failed',
  'Swap History',
  'Send History',
  'Transfer History',
  'P2P',
  'Purchases',
];

const FilterModal = ({ visible, onClose, onApply }) => {
  const [selectedOption, setSelectedOption] = useState('All');
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [dateType, setDateType] = useState(null);

  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const handleConfirmDate = (date) => {
    if (dateType === 'start') setStartDate(date);
    else setEndDate(date);
    setDatePickerVisibility(false);
  };

  return (
    <Modal animationType="slide" visible={visible} transparent>
      <View style={styles.overlay}>
        <View style={styles.modal}>
          {/* Header */}
          <View style={styles.header}>
            <Text style={styles.headerText}>Filter</Text>
            <TouchableOpacity onPress={onClose}>
              <Icon name="x" size={20} color="#000" style={styles.iconCircle}  />
            </TouchableOpacity>
          </View>

          {/* Date Filters */}
          <View style={styles.dateRow}>
            <TouchableOpacity
              style={styles.dateBox}
              onPress={() => {
                setDateType('start');
                setDatePickerVisibility(true);
              }}
            >
              <Text style={styles.dateLabel}>Start Date</Text>
              <Text style={styles.dateText}>
                {startDate.toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                })}
              </Text>
              <Icon name="calendar" size={16} color="#000" style={styles.dateIcon} />
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.dateBox}
              onPress={() => {
                setDateType('end');
                setDatePickerVisibility(true);
              }}
            >
              <Text style={styles.dateLabel}>End Date</Text>
              <Text style={styles.dateText}>
                {endDate.toLocaleDateString('en-US', {
                  month: 'long',
                  day: 'numeric',
                })}
              </Text>
              <Icon name="calendar" size={16} color="#000" style={styles.dateIcon} />
            </TouchableOpacity>
          </View>

          {/* Filter Options */}
          <FlatList
            data={filterOptions}
            keyExtractor={(item) => item}
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.optionRow}
                onPress={() => setSelectedOption(item)}
              >
                <Text style={styles.optionText}>{item}</Text>
                <View style={[styles.radio, selectedOption === item && styles.radioSelected]} />
              </TouchableOpacity>
            )}
          />

         
         
          <CustomButton style={styles.applyText} text='Apply Filter' onPress={onClose} />
        </View>
      </View>

     
    </Modal>
  );
};

export default FilterModal;

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
      maxHeight: height * 0.9,
    },
    iconCircle: {
        position: 'absolute',
        top: -14,
        right: 2,
        zIndex: 10,
        width: 24,
        height: 24,
        borderRadius: 18,
        borderWidth: 1,
        borderColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
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
    dateRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginBottom: 20,
    },
    dateBox: {
      flex: 0.48,
      backgroundColor: '#F9FAFB',
      borderRadius: 10,
      padding: 12,
      position: 'relative',
    },
    dateLabel: {
      fontSize: 12,
      color: '#6B7280',
    },
    dateText: {
      fontSize: 14,
      fontWeight: '600',
      marginTop: 4,
      color: '#000',
    },
    dateIcon: {
      position: 'absolute',
      right: 10,
      top: 10,
    },
    optionRow: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 19,
      
    },
    optionText: {
      fontSize: 14,
      color: '#111827',
    },
    radio: {
      width: 16,
      height: 16,
      borderRadius: 8,
      borderWidth: 1,
      borderColor: '#999',
    },
    radioSelected: {
      backgroundColor: '#4F46E5',
      borderColor: '#4F46E5',
    },
    applyButton: {
      backgroundColor: '#4F46E5',
      paddingVertical: 14,
      borderRadius: 10,
      alignItems: 'center',
      marginTop: 20,
    },
    applyText: {
      color: '#fff',
      fontWeight: '600',
      fontSize: 16,
      marginVertical: 16,
    },
  });
  