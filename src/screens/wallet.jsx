import { SafeAreaView, ScrollView, StyleSheet, StatusBar, View } from 'react-native';
import HeaderSection from '../components/header';
import ActionButtons from '../components/ActionButtons';
import AssetsList from '../components/AssetsList';
import BottomNav from '../components/BottomNav';

export default function App() {
    return (
        <SafeAreaView style={styles.container}>
            {/* StatusBar Customization */}
            <StatusBar
                barStyle="light-content" // Text color in the status bar
                backgroundColor="#1F235B" // Status bar background color
            />

            <View style={styles.headerWrapper}>
                <HeaderSection />
            </View>

            <View style={styles.floatingActions}>
                <ActionButtons />
            </View>

            <View style={styles.panel}>
                <AssetsList />
            </View>

            <View style={styles.bottom}>
                <BottomNav />
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1F235B',
        position: 'relative',
    },
    content: {
        flex: 1,
    },
    headerWrapper: {
        height: 220,
        backgroundColor: '#1F235B',
        zIndex: 1,
    },
    floatingActions: {
        position: 'absolute',
        top: 290,
        left: 0,
        right: 0,
        zIndex: 10,
        alignItems: 'center',
    },
    panel: {
        flex: 1,
        backgroundColor: '#fff',
        marginTop: 60,
        paddingTop: 40,
        paddingHorizontal: 16,
        paddingBottom: 80,
    },
    bottom: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: '#fff',
        paddingBottom: 12,
        paddingTop: 8,
    },
});
