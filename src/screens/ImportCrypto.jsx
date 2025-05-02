import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  SafeAreaView,
  TouchableWithoutFeedback,
  Keyboard,
  Clipboard,
  Image,
  FlatList,
  Animated,
  Dimensions,
} from 'react-native';
import { useNavigate } from 'react-router-native';
import Icon from 'react-native-vector-icons/Ionicons';
import CustomButton from '../components/Button';
import { Icons, Images } from '../constants';


const { height } = Dimensions.get('window');

export const ImportCryptoScreen = () => {
  const navigate = useNavigate();

  const [network, setNetwork] = useState('Ethereum');
  const [address, setAddress] = useState('');
  const [name, setName] = useState('');
  const [symbol, setSymbol] = useState('');
  const [decimals, setDecimals] = useState('');
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);

  const slideAnim = useRef(new Animated.Value(0)).current;

  const networks = ['Ethereum', 'Binance Smart Chain', 'Polygon', 'Avalanche', 'Solana'];

  const handleBack = () => {
    navigate('/token');
  };

  const handleNext = () => {
    navigate('/');
  };

  const toggleModal = () => {
    if (!modalVisible) {
      setModalVisible(true);
      Animated.timing(slideAnim, {
        toValue: 1,
        duration: 300,
        useNativeDriver: true,
      }).start();
    } else {
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 300,
        useNativeDriver: true,
      }).start(() => {
        setModalVisible(false);
      });
    }
  };

  const handlePaste = async () => {
    const clipboardContent = await Clipboard.getString();
    setAddress(clipboardContent);
  };

  const handleNetworkSelect = (selectedNetwork) => {
    setNetwork(selectedNetwork);
    setDropdownVisible(false);
  };

  const renderNetworkItem = ({ item }) => (
    <TouchableOpacity style={styles.networkItem} onPress={() => handleNetworkSelect(item)}>
      <Text style={styles.networkText}>{item}</Text>
    </TouchableOpacity>
  );

  return (
    <SafeAreaView style={styles.safeArea}>
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.container}>
          {/* Header */}
          <View style={styles.headerRow}>
            <TouchableOpacity style={styles.iconCircle} onPress={handleBack}>
              <Icon name="chevron-back" size={20} color="#000" />
            </TouchableOpacity>
            <Text style={styles.headerText}>Import Crypto</Text>
            <View style={{ width: 32 }} />
          </View>

          {/* Main Content */}
          <View style={styles.main}>
            <Text style={styles.warning}>
              ⚠️ Anyone can create a token, including fake versions of existing tokens.
            </Text>

            <Text style={styles.label}>Network</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.input, { flex: 1 }]}
                value={network}
                editable={false}
                placeholder="Select Network"
              />
              <TouchableOpacity
                style={styles.dropdownIconContainer}
                onPress={() => setDropdownVisible(!dropdownVisible)}
              >
                <Icon name="caret-down" size={20} color="#444CE7" />
              </TouchableOpacity>
            </View>

            {dropdownVisible && (
              <FlatList
                data={networks}
                renderItem={renderNetworkItem}
                keyExtractor={(item) => item}
                style={styles.dropdownList}
              />
            )}

            <Text style={styles.label}>Address</Text>
            <View style={styles.inputContainer}>
              <TextInput
                style={[styles.input, { flex: 1 }]}
                value={address}
                onChangeText={setAddress}
                placeholder="Paste"
                placeholderTextColor="#888"
              />
              <TouchableOpacity style={styles.pasteButton} onPress={handlePaste}>
                <Text style={styles.pasteButtonText}>Paste</Text>
                <Image source={Icons.Scranner2} style={styles.pasteIcon} />
              </TouchableOpacity>
            </View>

            <Text style={styles.label}>Name</Text>
            <TextInput style={styles.input} value={name} onChangeText={setName} />

            <Text style={styles.label}>Symbol</Text>
            <TextInput style={styles.input} value={symbol} onChangeText={setSymbol} />

            <Text style={styles.label}>Decimals</Text>
            <TextInput
              style={styles.input}
              value={decimals}
              onChangeText={setDecimals}
              keyboardType="numeric"
            />

            <CustomButton text="Import" style={styles.importButton} onPress={toggleModal} />
          </View>

          {modalVisible && <View style={styles.overlay} />}

          {modalVisible && (
            <Animated.View
              style={[
                styles.modalContainer,
                {
                  transform: [
                    {
                      translateY: slideAnim.interpolate({
                        inputRange: [0, 1],
                        outputRange: [height, 0],
                      }),
                    },
                  ],
                },
              ]}
            >
              <View style={styles.modalContent}>
                <TouchableOpacity style={styles.closeIcon} onPress={toggleModal}>
                  <Icon name="close" size={24} color="black" />
                </TouchableOpacity>

                <Image source={Images.Success} style={styles.successImage} />

                <View style={styles.textContainer}>
                  <Text style={styles.modalHeaderText}>Import Successful</Text>
                  <Text style={styles.modalSubText}>You’ve successfully imported your token</Text>
                </View>

                <CustomButton text="Back home" onPress={handleNext} />
              </View>
            </Animated.View>
          )}
        </View>
      </TouchableWithoutFeedback>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 56,
    marginBottom: 10,
  },
  iconCircle: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerText: {
    fontSize: 16,
    fontWeight: '500',
    color: '#00011B',
  },
  main: {
    paddingHorizontal: 5,
    marginTop: 10,
  },
  warning: {
    color: '#B54708',
    marginBottom: 10,
    fontSize: 13,
    backgroundColor: '#FFFAEB',
    padding: 15,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#FEDF89',
    textAlign: 'center',
  },
  label: {
    marginTop: 20,
    marginBottom: 8,
    fontWeight: '600',
    fontSize: 14,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    fontSize: 14,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    position: 'relative',
  },
  dropdownIconContainer: {
    position: 'absolute',
    right: 10,
  },
  dropdownList: {
    maxHeight: 150,
    borderWidth: 1,
    borderColor: '#ccc',
    marginTop: 5,
    borderRadius: 8,
    backgroundColor: '#fff',
    position: 'absolute',
    top: 55,
    left: 0,
    right: 0,
    zIndex: 1000,
  },
  networkItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  networkText: {
    fontSize: 14,
    color: '#444CE7',
  },
  pasteButton: {
    marginLeft: 10,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    right: 10,
    top: 10,
  },
  pasteButtonText: {
    fontSize: 14,
    color: '#444CE7',
    marginRight: 5,
    fontWeight: '400',
    lineHeight: 20,
  },
  pasteIcon: {
    marginLeft: 5,
    width: 20,
    height: 20,
    resizeMode: 'contain',
  },
  importButton: {
    backgroundColor: '#444CE7',
    marginTop: '39%',
    padding: 15,
    alignItems: 'center',
    borderRadius: 10,
  },
  overlay: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    zIndex: 1,
  },
  modalContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 2,
    justifyContent: 'flex-end',
  },
  modalContent: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
    backgroundColor: 'white',
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    alignItems: 'center',
  },
  closeIcon: {
    position: 'absolute',
    top: 10,
    right: 10,
    zIndex: 10,
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 1,
    borderColor: '#000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  successImage: {
    width: 70,
    height: 70,
    alignSelf: 'center',
    marginBottom: 10,
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 20,
  },
  modalHeaderText: {
    fontSize: 22,
    fontWeight: '600',
    color: '#101828',
    marginBottom: 8,
    textAlign: 'center',
  },
  modalSubText: {
    fontSize: 16,
    color: '#667085',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 24,
  },
});
