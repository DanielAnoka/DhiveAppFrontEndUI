import React from "react";
import { Routes, Route } from "react-router-native";
import Auth from "../screens/Auth";
import SplashScreen from "../screens/SplashScreen";
import OnboardingScreen from "../screens/OnboardingScreen";
import OTPVerification from "../screens/OTPVerification";
import Next from "../screens/next";
import Phase1 from "../screens/phase1";
import Phase2 from "../screens/phase2";
import AddExistingWallet from "../screens/wallet/AddExistingWallet";
import RecoveryPhrase from "../screens/wallet/RecoveryPhrase";
import ImportAccount from "../screens/wallet/ImportAccount";
import ProtectWallet from "../screens/wallet/ProtectWallet";
import PinVerification from "../screens/wallet/PinVerification";
import Success from "../screens/wallet/Success";

export default function AppNavigator() {
  return (
    <Routes>
      <Route path="/" element={<SplashScreen />} />
      <Route path="/onboarding" element={<OnboardingScreen />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/otp" element={<OTPVerification />} />
      <Route path="/next" element={<Next />} />
      <Route path="/phase1" element={<Phase1 />} />
      <Route path="/phase2" element={<Phase2 />} />
      <Route path="/add-wallet" element={<AddExistingWallet />} />
      <Route path="/recovery-phase" element={<RecoveryPhrase />} />
      <Route path="/import-account" element={<ImportAccount />} />
      <Route path="/protect-wallet" element={<ProtectWallet />} />
      <Route path="/pin" element={<PinVerification />} />
      <Route path="/success" element={<Success />} />
    </Routes>
  );
}
