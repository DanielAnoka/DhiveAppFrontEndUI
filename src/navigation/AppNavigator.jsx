import React from 'react';
import { Routes, Route } from 'react-router-native';
import Auth from '../screens/Auth';
import SplashScreen from '../screens/SplashScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import OTPVerification from '../screens/OTPVerification';
import Next from '../screens/next';
import Phase1 from '../screens/phase1';
import Phase2 from '../screens/phase2';
import Phase3 from "../screens/phase3"
import CreatePassword from '../screens/createPassword';
import Pin from "../screens/setPin"
import AreaOfInteret from '../screens/area';

export default function AppNavigator() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/onboarding" element={<OnboardingScreen />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/otp' element={<OTPVerification />} />
      <Route path='/next' element={<Next />} />
      <Route path='/phase1' element={<Phase1 />} />
      <Route path='/phase2' element={<Phase2 />} />
      <Route path='/phase3' element={<Phase3 />} />
      <Route path='/password' element={<CreatePassword />} />
      <Route path='/pin' element={<Pin />} />
      <Route path='/area' element={<AreaOfInteret />} />
    </Routes>
  );
}
