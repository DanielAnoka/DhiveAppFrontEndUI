import React, { useRef, useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import DynamicStepLayout from './StepOneLayout';
import { useNavigate } from 'react-router-native';

const SetPin = () => {
    const pinInputs = useRef([]);
    const confirmInputs = useRef([]);
    const [pin, setPin] = useState(['', '', '', '', '', '']);
    const [confirmPin, setConfirmPin] = useState(['', '', '', '', '', '']);
    const navigate = useNavigate();

    const handleChange = () => {
        navigate('/area')
    }

    const handlePinChange = (text, index, isConfirm = false) => {
        const updated = isConfirm ? [...confirmPin] : [...pin];
        updated[index] = text;

        isConfirm ? setConfirmPin(updated) : setPin(updated);

        if (text && index < 5) {
            const nextRef = isConfirm ? confirmInputs.current[index + 1] : pinInputs.current[index + 1];
            nextRef?.focus();
        }
    };

    const handleKeyPress = (e, index, isConfirm = false) => {
        if (e.nativeEvent.key === 'Backspace' && index > 0) {
            const updated = isConfirm ? [...confirmPin] : [...pin];
            if (!updated[index]) {
                const prevRef = isConfirm ? confirmInputs.current[index - 1] : pinInputs.current[index - 1];
                prevRef?.focus();
            }
        }
    };

    const sanitize = (arr) => arr.map((v) => v.trim());
    const isValid =
        sanitize(pin).every((v) => v !== '') &&
        sanitize(confirmPin).every((v) => v !== '') &&
        sanitize(pin).join('') === sanitize(confirmPin).join('');



    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <DynamicStepLayout currentStep={3}>
                <Text style={styles.headerText}>Set Pin</Text>
                <Text style={styles.subText}>Only you can access your wallet — set your PIN now.</Text>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Pin</Text>
                    <View style={styles.otpContainer}>
                        {pin.map((digit, index) => (
                            <View key={index} style={styles.otpBoxWrapper}>
                                <TextInput
                                    ref={(ref) => (pinInputs.current[index] = ref)}
                                    style={styles.otpBox}
                                    maxLength={1}
                                    keyboardType="numeric"
                                    textAlign="center"
                                    value={digit}
                                    onChangeText={(text) => handlePinChange(text, index)}
                                    onKeyPress={(e) => handleKeyPress(e, index)}
                                    selectionColor="#000000"
                                    secureTextEntry
                                />
                                {!digit && <View style={styles.dashLine} />}
                            </View>
                        ))}
                    </View>
                </View>

                <View style={styles.inputGroup}>
                    <Text style={styles.label}>Confirm Pin</Text>
                    <View style={styles.otpContainer}>
                        {confirmPin.map((digit, index) => (
                            <View key={index} style={styles.otpBoxWrapper}>
                                <TextInput
                                    ref={(ref) => (confirmInputs.current[index] = ref)}
                                    style={styles.otpBox}
                                    maxLength={1}
                                    keyboardType="numeric"
                                    textAlign="center"
                                    value={digit}
                                    onChangeText={(text) => handlePinChange(text, index, true)}
                                    onKeyPress={(e) => handleKeyPress(e, index, true)}
                                    selectionColor="#000000"
                                    secureTextEntry
                                />
                                {!digit && <View style={styles.dashLine} />}
                            </View>
                        ))}
                    </View>
                </View>

                <TouchableOpacity
                    style={[styles.button, !isValid && styles.buttonDisabled]}
                    onPress={handleChange}
                    disabled={!isValid}
                >
                    <Text style={styles.buttonText}>Continue</Text>
                </TouchableOpacity>
            </DynamicStepLayout>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    headerText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#00011B',
        marginTop: 40,
        marginBottom: 10,
    },
    subText: {
        fontSize: 16,
        color: '#667085',
        lineHeight: 24,
        marginBottom: 20,
    },
    label: {
        fontSize: 14,
        color: '#101828',
        fontWeight: '600',
        marginBottom: 8,
    },
    inputGroup: {
        marginBottom: 32,
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    otpBoxWrapper: {
        width: 50,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        marginHorizontal: 4,
    },
    dashLine: {
        width: 20,
        height: 2,
        backgroundColor: '#E9EBF0',
        position: 'absolute',
        zIndex: 0,
    },
    otpBox: {
        width: '100%',
        height: '100%',
        borderWidth: 1,
        borderColor: '#E9EBF0',
        borderRadius: 8,
        fontSize: 24,
        fontWeight: '500',
        backgroundColor: 'transparent',
        zIndex: 1,
    },
    button: {
        backgroundColor: '#444CE7',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
        marginTop: 20,
    },
    buttonDisabled: {
        backgroundColor: '#A0A3BD',
    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default SetPin;
