import React, { useState, useRef } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    Animated,
    Dimensions,
    Image
} from 'react-native';
import DynamicStepLayout from './StepOneLayout';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Button from '../components/Button';

import CustomButton from '../components/Button';
import { Images } from '../constants';
import { useNavigate } from 'react-router-native';

const { height } = Dimensions.get('window');

const Phase3 = () => {
    const [modalVisible, setModalVisible] = useState(false);
    const [selectedWords, setSelectedWords] = useState([]);
    const slideAnim = useRef(new Animated.Value(0)).current;
    const navigate = useNavigate();

    const handleNext = () => {
        navigate('/password');
    };

    const seedPhrase = [
        { word: "road", number: 10 },
        { word: "egg", number: 11 },
        { word: "lion", number: 12 },
        { word: "rock", number: 1 },
        { word: "praise", number: 2 },
        { word: "jump", number: 3 },
        { word: "junk", number: 7 },
        { word: "roller", number: 8 },
        { word: "check", number: 9 },
        { word: "food", number: 4 },
        { word: "joke", number: 5 },
        { word: "sleep", number: 6 }
    ];

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

    const handleWordPress = (wordNumber) => {

        setSelectedWords(prevState => {
            if (prevState.includes(wordNumber)) {
                return prevState.filter(num => num !== wordNumber);
            } else {
                return [...prevState, wordNumber];
            }
        });
    };

    const isSelected = (wordNumber) => {
        return selectedWords.includes(wordNumber);
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigate(-1)}>
                    <View style={styles.circle}>
                        <Ionicons name="chevron-back" size={20} color="#000" />
                    </View>
                </TouchableOpacity>

                <Text style={styles.backText}>Confirm Backup</Text>
            </View>

            <DynamicStepLayout currentStep={2}>
                <Text style={styles.text}>
                    To ensure your recovery phrase has been backed up, select the{' '}
                    <Text style={styles.boldText}>2nd, 5th & 10th</Text> of your phrase below.
                </Text>

                <View style={{ marginVertical: 42, marginTop: 50, marginHorizontal: 15 }}>
                    <View style={styles.phraseContainer}>
                        {seedPhrase.map((word, index) => (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.phraseItem,
                                    isSelected(word.number) && styles.selectedItem,
                                ]}
                                onPress={() => handleWordPress(word.number)}
                            >
                                <Text style={styles.phraseText}>
                                    {word.number}. {word.word}
                                </Text>
                            </TouchableOpacity>
                        ))}
                    </View>
                </View>

                <Button
                    onPress={toggleModal}
                    text="Complete Set-Up"
                    style={styles.button}
                    textStyle={styles.buttonText}
                />
            </DynamicStepLayout>

            {/* Overlay behind modal */}
            {modalVisible && (
                <View style={styles.overlay} />
            )}

            {/* Slide-up modal */}
            {modalVisible && (
                <Animated.View
                    style={[styles.modalContainer, {
                        transform: [{
                            translateY: slideAnim.interpolate({
                                inputRange: [0, 1],
                                outputRange: [height, 0],
                            }),
                        }]
                    }]}
                >
                    <View style={styles.modalContent}>
                        <TouchableOpacity style={styles.closeIcon} onPress={toggleModal}>
                            <Ionicons name="close" size={24} color="black" />
                        </TouchableOpacity>


                        <Image source={Images.Success} style={styles.successImage} />

                        <View style={styles.textContainer}>
                            <Text style={styles.modalHeaderText}>
                                Successful
                            </Text>
                            <Text style={styles.modalSubText}>
                                Your wallet has been created successfully.
                            </Text>
                        </View>

                        <CustomButton text='Continue' onPress={handleNext} />
                    </View>
                </Animated.View>
            )}
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        paddingTop: 20,
        paddingHorizontal: 20,
    },
    backButton: {
        marginRight: 8,
    },
    circle: {
        width: 30,
        height: 30,
        borderRadius: 20,
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderColor: '#000',
    },
    backText: {
        fontSize: 18,
        color: '#000',
        fontWeight: '600',
        flex: 1,
        textAlign: 'center',
        marginLeft: -32,
    },
    text: {
        fontSize: 14,
        fontWeight: '400',
        lineHeight: 22,
        marginTop: 20,
        letterSpacing: 0.48,
    },
    boldText: {
        fontWeight: 'bold',
    },
    phraseContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        marginBottom: 24,
        marginTop: 20,
    },
    phraseItem: {
        width: '30%',
        marginVertical: 8,
        padding: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: '#E4E7EC',
        alignItems: 'center',
    },
    phraseText: {
        fontSize: 14,
        color: '#444CE7',
        fontWeight: '600',
    },
    selectedItem: {
        backgroundColor: '#E0E7FF',
    },
    button: {
        backgroundColor: '#444CE7',
        borderRadius: 8,
        paddingVertical: 14,
        marginTop: 20,
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
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
        bottom: 0,
        left: 0,
        right: 0,
        zIndex: 2,
    },
    modalContent: {
        padding: 20,
        paddingBottom: 40,
        backgroundColor: '#FFFFFF',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        minHeight: 400,
        justifyContent: 'flex-start',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: -2 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 8,
        position: 'relative',
        paddingTop: 40,
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
        width: 100,
        height: 100,
        alignSelf: 'center',
        marginBottom: 20,
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

export default Phase3;
