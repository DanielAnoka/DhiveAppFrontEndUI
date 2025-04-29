import React from 'react';
import { Routes, Route } from 'react-router-native';

import SplashScreen from '../screens/SplashScreen';
import OnboardingScreen from '../screens/OnboardingScreen';

export default function AppNavigator() {
  return (
    <Routes>
      {/* Initial screen */}
      <Route path="/" element={<SplashScreen />} />

      {/* Next screen after splash */}
      <Route path="/onboarding" element={<OnboardingScreen />} />
    </Routes>
  );
}
