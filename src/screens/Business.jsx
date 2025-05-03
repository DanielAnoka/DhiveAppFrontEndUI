// Business.tsx
import React, { useState } from 'react';
import {
  ScrollView,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,
  Modal,
  Dimensions,
  Text,
  TextInput,
  Linking,
  SafeAreaView,
} from 'react-native';
import BottomNav from '../components/BottomNav';
import { Navigate } from 'react-router-native';

export default function Business() {
  const [modalVisible, setModalVisible] = useState(false);
  const [step, setStep] = useState(0);
  const [pin, setPin] = useState('');

  const openModal = () => {
    setStep(0);
    setPin('');
    setModalVisible(true);
  };
  const closeModal = () => {
    setModalVisible(false);
    setStep(0);
    setPin('');
  };

  const handleApprove     = () => setStep(1);
  const handlePinComplete = () => setStep(2);
  const handleViewSummary = () => setStep(3);
  const handleBackHome    = () => closeModal();
  const handleDone        = () => closeModal();

  return (
    <SafeAreaView style={styles.fullScreen}>
      <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
        {/* Static images */}<TouchableOpacity onPress={()=>{Navigate('/Message')}}>
        <Image style={{ margin: 10 }} source={require('../../assets/a.png')} resizeMode="contain" />
        </TouchableOpacity>
        <Image source={require('../../assets/b.png')} resizeMode="contain" style={styles.image} />
        <Image source={require('../../assets/c.png')} resizeMode="contain" style={styles.image} />
        <Image source={require('../../assets/d.png')} resizeMode="contain" style={styles.image} />
        <Image source={require('../../assets/e.png')} resizeMode="contain" style={styles.image} />
        <Image source={require('../../assets/f.png')} resizeMode="contain" style={styles.image} />
        <Image source={require('../../assets/Pagination.png')} resizeMode="contain" style={styles.image} />

        {/* Action buttons */}
        <TouchableOpacity onPress={openModal}>
          <Image source={require('../../assets/Buttonbuy.png')} resizeMode="contain" />
        </TouchableOpacity>
        <TouchableOpacity onPress={openModal} style={{ marginTop: 12 }}>
          <Image source={require('../../assets/Buttonsell.png')} resizeMode="contain" />
        </TouchableOpacity>
      </ScrollView>

      {/* Modal */}
      <Modal
        visible={modalVisible}
        animationType="slide"
        transparent
        onRequestClose={closeModal}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalSheet}>
            {/* Close button */}
            <TouchableOpacity style={styles.closeButton} onPress={closeModal}>
              <Image source={require('../../assets/Vector.png')} style={styles.closeIcon} />
            </TouchableOpacity>

            {step === 0 && (
              // 1) Confirm Transaction
              <View style={styles.stepContainer}>
                <Text style={styles.modalHeading}>Confirm Transaction</Text>
                <View style={styles.card}>
                  {[
                    ['Price', '$1.00'],
                    ['To receive', '743,833,123,077.75623418'],
                    ['Network Fee', '$0.14'],
                    ['Slippage Tolerance', '0.50%'],
                  ].map(([label, value]) => (
                    <View key={label} style={styles.row}>
                      <Text style={styles.rowLabel}>{label}</Text>
                      <Text style={styles.rowValue}>{value}</Text>
                    </View>
                  ))}
                </View>
                <TouchableOpacity style={styles.primaryButton} onPress={handleApprove}>
                  <Text style={styles.primaryButtonText}>Approve</Text>
                </TouchableOpacity>
              </View>
            )}

            {step === 1 && (
              // 2) Input Payment PIN
              <View style={styles.stepContainer}>
                <Image source={require('../../assets/lock.png')} style={styles.lockIcon} />
                <Text style={styles.modalHeading}>Input Payment Pin</Text>
                <Text style={styles.subText}>
                  Use your PIN code to authorize this transaction
                </Text>
                <View style={styles.pinContainer}>
                  {[0, 1, 2, 3].map(i => (
                    <View
                      key={i}
                      style={[
                        styles.pinCircle,
                        i < pin.length && styles.pinCircleFilled,
                      ]}
                    />
                  ))}
                </View>
                <TextInput
                  autoFocus
                  style={styles.hiddenInput}
                  keyboardType="number-pad"
                  maxLength={4}
                  value={pin}
                  onChangeText={t => {
                    setPin(t);
                    if (t.length === 4) handlePinComplete();
                  }}
                />
              </View>
            )}

            {step === 2 && (
              // 3) Swap – Success
              <View style={styles.stepContainer}>
                <Image source={require('../../assets/party.png')} style={styles.partyIcon} />
                <Text style={styles.successAmount}>3,584,234,566,899 NGE</Text>
                <Text style={styles.subText}>
                  Please wait while we swap your asset to Next‑Gen Electronics Coin (NGE)
                </Text>
                <TouchableOpacity onPress={handleViewSummary}>
                  <Text style={styles.linkText}>View Transaction Summary</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.primaryButton} onPress={handleBackHome}>
                  <Text style={styles.primaryButtonText}>Back Home</Text>
                </TouchableOpacity>
                <Text style={styles.footerText}>
                  Having issues?{' '}
                  <Text
                    style={styles.linkText}
                    onPress={() => Linking.openURL('https://support.example.com')}
                  >
                    Contact Support
                  </Text>
                </Text>
              </View>
            )}

            {step === 3 && (
              // 4) Transaction Details
              <View style={styles.stepContainer}>
                <Text style={styles.modalHeading}>Transaction Details</Text>
                <View style={styles.iconRow}>
                  <Image source={require('../../assets/nexgen.png')} style={styles.chainIcon} />
                  <Image source={require('../../assets/eth.png')} style={styles.chainIcon} />
                </View>
                <Text style={styles.bigAmount}>$80.00</Text>
                <Text style={styles.subText}>Swap From ETH – NGE</Text>
                <View style={styles.card}>
                  {[
                    ['Swap From', '0.00432 ETH'],
                    ['Swap To', '3,584,234,566.899 NGE'],
                    ['Purchase Rate', '1 ETH ≈ 22,000 NGE'],
                    ['Reference ID', '090338839DH'],
                    ['Status', 'Success'],
                    ['Time Stamp', 'April 25, 2025 – 5:00 PM'],
                  ].map(([label, value], i) => (
                    <View key={i} style={styles.row}>
                      <Text style={styles.rowLabel}>{label}</Text>
                      <Text
                        style={[
                          styles.rowValue,
                          label === 'Status' && { color: '#28A745' },
                        ]}
                      >
                        {value}
                      </Text>
                    </View>
                  ))}
                </View>
                <TouchableOpacity style={styles.primaryButton} onPress={handleDone}>
                  <Text style={styles.primaryButtonText}>Done</Text>
                </TouchableOpacity>
                <Text style={styles.footerText}>
                  Having issues?{' '}
                  <Text
                    style={styles.linkText}
                    onPress={() => Linking.openURL('https://support.example.com')}
                  >
                    Contact Support
                  </Text>
                </Text>
              </View>
            )}
          </View>
        </View>
      </Modal>

      {/* Bottom Tab Bar */}
      <BottomNav />
    </SafeAreaView>
  );
}

const { width } = Dimensions.get('window');
const CARD_WIDTH = width - 64;

const styles = StyleSheet.create({
  fullScreen: { flex: 1, backgroundColor: '#fff' },
  container: { flex: 1, padding: 4 },
  contentContainer: { justifyContent: 'center', alignItems: 'center', paddingBottom: 80 },
  image: { marginVertical: 15 },

  // Modal Overlay & Sheet
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
  },
  modalSheet: {
    backgroundColor: '#FFF',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingTop: 16,
    paddingBottom: 32,
    paddingHorizontal: 24,
    maxHeight: '85%',
    alignItems: 'center',
  },
  closeButton: { alignSelf: 'flex-end', padding: 8 },
  closeIcon: { width: 24, height: 24 },

  // Steps
  stepContainer: { width: '100%', alignItems: 'center' },
  modalHeading: { fontSize: 20, fontWeight: '600', marginBottom: 16, textAlign: 'center' },

  // Card (steps 1 & 4)
  card: {
    width: CARD_WIDTH,
    backgroundColor: '#F9FAFB',
    borderRadius: 12,
    padding: 16,
    marginBottom: 24,
  },
  row: { flexDirection: 'row', justifyContent: 'space-between', paddingVertical: 6 },
  rowLabel: { color: '#555' },
  rowValue: { fontWeight: '500', color: '#000' },

  primaryButton: {
    width: CARD_WIDTH,
    backgroundColor: '#4C60FF',
    paddingVertical: 14,
    borderRadius: 10,
    alignItems: 'center',
    marginBottom: 16,
  },
  primaryButtonText: { color: '#FFF', fontSize: 16, fontWeight: '600' },

  // PIN entry (step 2)
  lockIcon: { width: 48, height: 48, marginBottom: 12 },
  subText: { color: '#666', fontSize: 14, textAlign: 'center', marginBottom: 16 },
  pinContainer: { flexDirection: 'row', justifyContent: 'center', marginBottom: 24 },
  pinCircle: { width: 14, height: 14, borderRadius: 7, backgroundColor: '#DDD', marginHorizontal: 8 },
  pinCircleFilled: { backgroundColor: '#4C60FF' },
  hiddenInput: { position: 'absolute', width: 0, height: 0, opacity: 0 },

  // Success (step 3)
  partyIcon: { width: 60, height: 60, marginBottom: 16 },
  successAmount: { fontSize: 22, fontWeight: '600', marginBottom: 8 },

  linkText: { color: '#4C60FF', fontSize: 14, textDecorationLine: 'underline', marginBottom: 24 },
  footerText: { fontSize: 12, color: '#999', textAlign: 'center', marginTop: 16 },

  // Details icons (step 4)
  iconRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  chainIcon: { width: 32, height: 32, marginHorizontal: 8 },
  bigAmount: { fontSize: 24, fontWeight: '600', marginBottom: 4 },

  // Bottom Tab Bar
  tabBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  tabButton: { alignItems: 'center' },
  tabIcon: { width: 35, height: 35 },
  centralButton: { backgroundColor: '#4E4CF5', padding: 14, borderRadius: 40, marginBottom: 20 },
  centralIcon: { width: 24, height: 24, tintColor: '#fff' },
  tabLabel: { display: 'none' },
});
