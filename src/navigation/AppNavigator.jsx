import React from 'react';
import { Routes, Route } from 'react-router-native';
import Auth from '../screens/Auth';
import SplashScreen from '../screens/SplashScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import OTPVerification from '../screens/OTPVerification';
import Next from '../screens/next';
import Phase1 from '../screens/phase1';
import Phase2 from '../screens/phase2';

export default function AppNavigator() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/onboarding" element={<OnboardingScreen />} />
      <Route path='/auth' element={<Auth />} />
      <Route path='/otp' element={<OTPVerification />} />
      <Route path='/next'  element={<Next />} />
      <Route path='/phase1' element={<Phase1 />} />
      <Route path='/phase2' element={<Phase2 />} />
    </Routes>
  );
}
