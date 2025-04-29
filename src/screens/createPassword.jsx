import React, { useState } from 'react';
import { TouchableOpacity, Text, View, StyleSheet, SafeAreaView, TextInput } from 'react-native';
import DynamicStepLayout from './StepOneLayout';
import CustomButton from '../components/Button';
import { useNavigate } from 'react-router-native';

const CustomCheckbox = ({ label, onValueChange, value }) => {
    return (
        <TouchableOpacity style={styles.checkboxContainer} onPress={() => onValueChange(!value)}>
            <View style={[styles.checkbox, value && styles.checked]}>
                {value && <View style={styles.checkMark} />}
            </View>
            <Text style={styles.checkboxText}>

                {label.split("Learn more")[0]}

                <Text
                    style={styles.linkText}
                    onPress={() => alert('Learn more clicked')}>
                    Learn more
                </Text>

                {label.split("Learn more")[1]}
            </Text>
        </TouchableOpacity>
    );
};

const CreatePassword = () => {
    const [isChecked, setIsChecked] = useState(false);
      const navigate = useNavigate();
      
        const handleChange = ()=>{
            navigate('/pin')
        }
    

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <DynamicStepLayout currentStep={3}>

                <Text style={styles.headerText}>
                    Set Password
                </Text>

                <Text style={styles.subText}>
                    This password will unlock your Dehive wallet only on this device.
                </Text>

                <Text style={styles.label}>New Password</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry
                    placeholder="Enter your new password"
                />

                <Text style={styles.label}>Confirm Password</Text>
                <TextInput
                    style={styles.input}
                    secureTextEntry
                    placeholder="Confirm your new password"
                />

                <Text style={styles.passwordRequirement}>
                    Must be at least 8 characters
                </Text>

                <CustomCheckbox
                    label="I understand that MetaMask cannot recover this password for me. Learn more"
                    value={isChecked}
                    onValueChange={setIsChecked}
                />


                <CustomButton text='Create Password' style={[styles.button, { marginTop: 180 }]} onPress={handleChange} />
            </DynamicStepLayout>
        </SafeAreaView>
    );
};

// Styles
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
        marginTop: 20,
    },
    input: {
        height: 50,
        borderColor: '#D1D5DB',
        borderWidth: 1,
        borderRadius: 8,
        paddingHorizontal: 10,
        fontSize: 16,
        marginBottom: 10,
    },
    passwordRequirement: {
        fontSize: 14,
        color: '#667085',
        textAlign: 'left',
        marginLeft: 8,
    },
    checkboxContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 25,
    },
    checkbox: {
        width: 20,
        height: 20,
        borderWidth: 1,
        borderColor: '#667085',
        borderRadius: 4,
        justifyContent: 'center',
        alignItems: 'center',
    },
    checked: {
        backgroundColor: '#444CE7',
    },
    checkMark: {
        width: 12,
        height: 12,
        backgroundColor: '#fff',
        borderRadius: 2,
    },
    checkboxText: {
        fontSize: 14,
        color: '#667085',
        marginLeft: 10,
    },
    linkText: {
        fontSize: 14,
        color: '#444CE7',
        textDecorationLine: 'none',
    },
    button: {
        backgroundColor: '#444CE7',
        paddingVertical: 14,
        borderRadius: 8,
        alignItems: 'center',

    },
    buttonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
});

export default CreatePassword;
