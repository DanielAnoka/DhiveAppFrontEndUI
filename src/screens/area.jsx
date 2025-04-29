import React, { useState } from 'react';
import {
    SafeAreaView,
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
} from 'react-native';
import DynamicStepLayout from './StepOneLayout';
import Ionicons from 'react-native-vector-icons/Ionicons';

const areas = [
    "Technology", "Web 3", "E-commerce", "AI", "Buying",
    "Selling", "Learning", "Development", "NFTs", "Tokens",
    "Defi", "Marketing", "Designs", "EMV"
];

const AreaOfInterest = () => {
    const [selectedAreas, setSelectedAreas] = useState([]);

    const handleAreaToggle = (area) => {
        if (selectedAreas.includes(area)) {
            setSelectedAreas(prev => prev.filter(item => item !== area));
        } else {
            if (selectedAreas.length < 4) {
                setSelectedAreas(prev => [...prev, area]);
            }
        }
    };

    const handleContinue = () => {
        console.log("Continue with areas:", selectedAreas);
        
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => console.log('Back pressed')}>
                    <View style={styles.circle}>
                        <Ionicons name="chevron-back" size={20} color="#000" />
                    </View>
                </TouchableOpacity>
                <Text style={styles.backText}>Area of Interest</Text>
            </View>

            <DynamicStepLayout currentStep={4}>
                <Text style={styles.text}>
                    Kindly select up to 4 areas of interest below, so we will know how to serve you better.
                </Text>

                <View style={styles.areasContainer}>
                    {areas.map((area, index) => {
                        const isSelected = selectedAreas.includes(area);
                        return (
                            <TouchableOpacity
                                key={index}
                                style={[
                                    styles.areaButton,
                                    isSelected && styles.selectedAreaButton
                                ]}
                                onPress={() => handleAreaToggle(area)}
                            >
                                <View style={styles.areaButtonContent}>
                                    <Text style={[
                                        styles.areaButtonText,
                                        isSelected && styles.selectedAreaButtonText
                                    ]}>
                                        {area}
                                    </Text>
                                    <Ionicons
                                        name="add"
                                        size={18}
                                        color="#000"
                                        style={{ marginLeft: 8 }}
                                    />
                                </View>
                            </TouchableOpacity>
                        );
                    })}
                </View>
            </DynamicStepLayout>

            {/* Continue Button */}
            <View style={styles.buttonContainer}>
                <TouchableOpacity
                    style={[
                        styles.continueButton,
                        selectedAreas.length === 0 && styles.disabledButton
                    ]}
                    onPress={handleContinue}
                    disabled={selectedAreas.length === 0}
                >
                    <Text style={styles.continueButtonText}>Continue to Account</Text>
                </TouchableOpacity>
            </View>
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
    areasContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    areaButton: {
        backgroundColor: 'white',
        paddingVertical: 12,
        paddingHorizontal: 20,
        margin: 8,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#ccc',
    },
    areaButtonContent: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    areaButtonText: {
        fontSize: 13,
        color: '#333',
        fontWeight: '600',
    },
    selectedAreaButton: {
        backgroundColor: '#F5F5F5',
    },
    selectedAreaButtonText: {
        color: 'black',
    },
    buttonContainer: {
        paddingHorizontal: 20,
        paddingVertical: 16,
    },
    continueButton: {
        backgroundColor: '#444CE7',
        paddingVertical: 14,
        borderRadius: 10,
        alignItems: 'center',
    },
    continueButtonText: {
        color: '#fff',
        fontSize: 16,
        fontWeight: '600',
    },
    disabledButton: {
        backgroundColor: '#999',
    },
});

export default AreaOfInterest;
