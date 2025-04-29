import React, { useState } from 'react';
import {
    View,
    Text,
    SafeAreaView,
    StyleSheet,
    TextInput,
    TouchableOpacity,
    Image,
    Platform,
} from 'react-native';
import { Icons } from '../constants/index';
import Button from '../components/Button';
import { useNavigate } from 'react-router-native';
import StepOneLayout from './StepOneLayout';

const Auth = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');

    const handleGoogleSignIn = () => {
        console.log('Google Sign-In');
    };

    const handleContinue = () => {
        navigate('/otp');
    };

    return (
        <SafeAreaView style={styles.safeArea}>
            <StepOneLayout currentStep={1}>
                <View style={{ flex: 1 }}>

                    <Text style={styles.label}>Email Address</Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Enter your email"
                        keyboardType="email-address"
                        value={email}
                        onChangeText={setEmail}
                        autoCapitalize="none"
                    />


                    <Button
                        onPress={handleGoogleSignIn}
                        style={{
                            backgroundColor: '#fff',
                            borderColor: '#E9EBF0',
                            borderWidth: 1,
                            borderRadius: 8,
                            marginBottom: 16,
                        }}
                        textStyle={{ color: '#181D27', fontWeight: '500' }}
                        icon={<Image source={Icons.Google} style={{ width: 20, height: 20 }} />}
                        text="Sign in with Google"
                    />


                    <Button
                        onPress={handleContinue}
                        text="Continue"
                        style={{
                            backgroundColor: '#444CE7',
                            borderRadius: 8,
                            paddingVertical: 14,
                        }}
                        textStyle={{
                            color: '#fff',
                            fontSize: 16,
                            fontWeight: '600',
                        }}
                    />
                </View>
            </StepOneLayout>
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
        paddingHorizontal: 24,
        backgroundColor: '#fff',
    },
    spacer: {
        height: Platform.OS === 'android' ? 64 : 48,
    },
    indicatorRow: {
        flexDirection: 'row',
        marginBottom: 32,
    },
    indicator: {
        width: 30,
        height: 5,
        borderRadius: 4,
        backgroundColor: '#E9EBF0',
        marginRight: 8,
    },
    activeIndicator: {
        backgroundColor: '#000000',
    },
    label: {
        fontSize: 16,
        color: '#181D27',
        marginBottom: 8,
        fontWeight: '400',
        marginTop: 40
    },
    input: {
        borderWidth: 1,
        borderColor: '#E9EBF0',
        borderRadius: 8,
        paddingHorizontal: 16,
        paddingVertical: 12,
        fontSize: 16,
        marginBottom: 24,
        color: '#181D27',
    },
    googleButton: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderColor: '#E9EBF0',
        borderWidth: 1,
        paddingVertical: 12,
        borderRadius: 8,
        justifyContent: 'center',
        marginBottom: 16,
    },
    googleIcon: {
        width: 20,
        height: 20,
        marginRight: 12,
    },
    googleText: {
        fontSize: 16,
        fontWeight: '500',
        color: '#181D27',
    },
    continueButton: {
        backgroundColor: '#444CE7',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',
    },
    continueText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default Auth;
