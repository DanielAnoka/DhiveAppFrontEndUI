// AppNavigator.js
import React from 'react';
import { Routes, Route } from 'react-router-native';

import SplashScreen from '../screens/SplashScreen';
import OnboardingScreen from '../screens/OnboardingScreen';
import Auth from '../screens/Auth';
import OTPVerification from '../screens/OTPVerification';
import Next from '../screens/next';
import Phase1 from '../screens/phase1';
import Phase2 from '../screens/phase2';
import Phase3 from "../screens/phase3";
import CreatePassword from '../screens/createPassword';
import Pin from "../screens/setPin";
import AreaOfInteret from '../screens/area';
import Wallet from "../screens/wallet";
import ManageToken from "../screens/manageToken";
import { ImportCryptoScreen } from '../screens/ImportCrypto';
import Send from '../screens/send';
import Receive from "../screens/receive"
import ReceiveToken from '../screens/ReceiveToken'; 
import SendToken from "../screens/select"
import Tf from "../screens/transferHistory"
import TransactionHistory from '../screens/transactionHistory';
import BridgeScreen from "../screens/BridgeScreen"

export default function AppNavigator() {
  return (
    <Routes>
      {/* <Route path="/" element={<SplashScreen />} />
      <Route path="/onboarding" element={<OnboardingScreen />} />
      <Route path="/auth" element={<Auth />} />
      <Route path="/otp" element={<OTPVerification />} />
      <Route path="/next" element={<Next />} />
      <Route path="/phase1" element={<Phase1 />} />
      <Route path="/phase2" element={<Phase2 />} />
      <Route path="/phase3" element={<Phase3 />} />
      <Route path="/password" element={<CreatePassword />} />
      <Route path="/pin" element={<Pin />} />
      <Route path="/area" element={<AreaOfInteret />} /> */}
      <Route path="/" element={<Wallet />} />
      <Route path="/token" element={<ManageToken />} />
      <Route path="/import" element={<ImportCryptoScreen />} />
      <Route path="/send" element={<Send />} />
      <Route path='/receive' element={<Receive />} />
      <Route path='receiveToken' element={<ReceiveToken />} />
      <Route path='/sendToken' element={<SendToken />} />
      <Route path='/tf' element={<Tf />} />
      <Route path='/transaction' element={<TransactionHistory />} />
      <Route path='/bridge' element={<BridgeScreen />} />
    </Routes>
  );
}
