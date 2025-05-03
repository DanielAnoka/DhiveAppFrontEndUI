import { StatusBar } from 'expo-status-bar';
import { NativeRouter } from 'react-router-native';
import AppNavigator from './src/navigation/AppNavigator';


export default function App() {
  return (
    <NativeRouter>
      <AppNavigator />
    </NativeRouter>
  );
}
