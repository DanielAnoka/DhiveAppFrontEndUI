import { SafeAreaView, Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';
import DynamicStepLayout from './StepOneLayout';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Images } from '../constants';
import Button from '../components/Button';
import { useNavigate } from 'react-router-native';

const phase1 = () => {
    const navigate = useNavigate();
    const handleNext = () => {
        navigate('/phase2')
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={styles.headerContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => console.log('hello')}>
                    <View style={styles.circle}>
                        <Ionicons name="chevron-back" size={20} color="#000" />
                    </View>
                </TouchableOpacity>

                <Text style={styles.backText}>Secure Your Wallet</Text>
            </View>

            <DynamicStepLayout currentStep={2} >

                <Text style={styles.text}>
                    Your passphrase is the only way to recover your Dhive wallet. Without it, you could permanently lose access to your assets.
                </Text>
                <View style={styles.imageContainer}>
                    <Image
                        source={Images.Auth3}
                        style={styles.image}
                        resizeMode="contain"
                    />
                </View>

                <View style={styles.container}>
                    <Text style={styles.warningText}>
                        We'll never ask for your recovery phrase, please never give it out to anyone.
                    </Text>
                </View>

                <Button
                    onPress={handleNext}
                    text="Generate Recovery Phrase"
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

            </DynamicStepLayout>
        </SafeAreaView>
    )
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
        fontWeight: 400,
        lineHeight: 22,
        marginTop: 20
    },
    imageContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        marginVertical: 20,
        marginTop: 39
    },
    image: {
        width: 350,
        height: 380,
    },
    container: {
        backgroundColor: '#FFFAEB',
        padding: 16,
        borderRadius: 8,
        marginBottom: 16,
        borderColor: "#FEDF89"
    },
    warningText: {
        color: '#B54708',
        fontSize: 15,
        lineHeight: 22,
        textAlign: 'left',
    },
});

export default phase1;