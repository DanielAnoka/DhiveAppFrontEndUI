// // AppNavigator.js
// import React from "react";
// import { Routes, Route } from "react-router-native";

// // import SplashScreen from "../screens/SplashScreen";
// // import OnboardingScreen from "../screens/OnboardingScreen";
// // import Auth from "../screens/Auth";
// // import OTPVerification from "../screens/OTPVerification";
// // import Next from "../screens/next";
// // import Phase1 from "../screens/phase1";
// // import Phase2 from "../screens/phase2";
// // import Phase3 from "../screens/phase3";
// // import CreatePassword from "../screens/createPassword";
// // import Pin from "../screens/setPin";
// // import AreaOfInteret from "../screens/area";
// import Wallet from "../screens/wallet";
// import ManageToken from "../screens/manageToken";
// import { ImportCryptoScreen } from '../screens/ImportCrypto';
// import Send from '../screens/send';
// import Receive from "../screens/receive"
// import ReceiveToken from '../screens/ReceiveToken'; 
// import SendToken from "../screens/select"
// import Tf from "../screens/transferHistory"
// import TransactionHistory from '../screens/transactionHistory';
// import Bridge from "../screens/BridgeTrading/index";
// import Swap from "../screens/Swap";
// import SwapToken from "../screens/Swap/swap"
// import Profile from "../screens/userProfile/index";

// export default function AppNavigator() {
//   return (
//     <Routes>
//       {/* <Route path="/" element={<SplashScreen />} />
//       <Route path="/onboarding" element={<OnboardingScreen />} />
//       <Route path="/auth" element={<Auth />} />
//       <Route path="/otp" element={<OTPVerification />} />
//       <Route path="/next" element={<Next />} />
//       <Route path="/phase1" element={<Phase1 />} />
//       <Route path="/phase2" element={<Phase2 />} />
//       <Route path="/phase3" element={<Phase3 />} />
//       <Route path="/password" element={<CreatePassword />} />
//       <Route path="/pin" element={<Pin />} />
//       <Route path="/area" element={<AreaOfInteret />} /> */}

//        <Route path="/profile" element={<Profile />} /> 

//       <Route path="/" element={<Wallet />} />
//       <Route path="/token" element={<ManageToken />} />
//       <Route path="/import" element={<ImportCryptoScreen />} />
//       <Route path="/send" element={<Send />} />
//       <Route path='/receive' element={<Receive />} />
//       <Route path='receiveToken' element={<ReceiveToken />} />
//       <Route path='/sendToken' element={<SendToken />} />
//       <Route path='/tf' element={<Tf />} />
//       <Route path='/transaction' element={<TransactionHistory />} />
//       <Route path='/bridge' element={<Bridge />} />
//       <Route path='/swap' element={<Swap />} />
//       <Route path='/tokenSwap' element={<SwapToken />} />

//       {/* <Route path="/explore" element={<Explore />} /> */}
//       {/* <Route path="/navigate" element={<Navigate />} /> */}
//       {/* <Route path="/trading" element={<Trading />} /> */}
//       {/* <Route path="/profile" element={<Profile />} /> */}
//       {/* <Route path="/feed" element={<Feed />} /> */}
//     </Routes>
//   );
// }

import React from "react";
import { Routes, Route } from "react-router-native";
import MainLayout from "../MainLayout/layout";

import Wallet from "../screens/wallet";
import ManageToken from "../screens/manageToken";
import { ImportCryptoScreen } from '../screens/ImportCrypto';
import Send from '../screens/send';
import Receive from "../screens/receive";
import ReceiveToken from '../screens/ReceiveToken'; 
import SendToken from "../screens/select";
import Tf from "../screens/transferHistory";
import TransactionHistory from '../screens/transactionHistory';
import Bridge from "../screens/BridgeTrading/index";
import Swap from "../screens/Swap";
import SwapToken from "../screens/Swap/swap";
import Profile from "../screens/userProfile/index";
import Notifications from "../screens/userProfile/Notifications ";
import Preferences from "../screens/userProfile/Preferences";
import Security from "../screens/userProfile/Security";
import Passcode from "../screens/userProfile/Passcode";
import MyPostScreen from "../screens/userProfile/myPost";
import MyOrdersScreen from "../screens/userProfile/MyOrders";
import Success from "../screens/userProfile/Success";
import Doc from "../screens/userProfile/doc";
import Community from "../screens/userProfile/Community";
import ProfileScreen from "../screens/userProfile/ProfileScreen";
import ManageWalletScreen from "../screens/userProfile/ManageWalllet";
import PrivateKey from "../screens/userProfile/privateKey";
import WalletPrivateKey from "../screens/userProfile/WalletPrivateKey";
import BusinessLayout from "../MainLayout/BusinessLayout";
import CreateTokenForm from "../screens/business/CreateTokenForm";
import BusinessFeeds from "../screens/business/feeds"; 

// Placeholder components for feeds and explore
import Feeds from "../screens/feeds/index"; 
import Explore from "../screens/explore/index"; 

export default function AppNavigator() {
  return (
    <Routes>
      {/* Routes with BottomNav */}
      {/* <Route path="/" element={<MainLayout><Wallet /></MainLayout>} /> */}
      <Route path="/feeds" element={<MainLayout><Feeds /></MainLayout>} />
      <Route path="/explore" element={<MainLayout><Explore /></MainLayout>} />
      <Route path="/profile" element={<MainLayout><Profile /></MainLayout>} />
      <Route path="/mypost" element={<MainLayout><MyPostScreen /></MainLayout>} />

      {/* Modal/tab-triggered routes */}
      <Route path="/bridge" element={<MainLayout><Bridge /></MainLayout>} />
      <Route path="/swap" element={<MainLayout><Swap /></MainLayout>} />

      {/* Routes without BottomNav */}
      <Route path="/token" element={<ManageToken />} />
      <Route path="/import" element={<ImportCryptoScreen />} />
      <Route path="/send" element={<Send />} />
      <Route path="/receive" element={<Receive />} />
      <Route path="/receiveToken" element={<ReceiveToken />} />
      <Route path="/sendToken" element={<SendToken />} />
      <Route path="/tf" element={<Tf />} />
      <Route path="/transaction" element={<TransactionHistory />} />
      <Route path="/tokenSwap" element={<SwapToken />} />


      {/* Profile routes  */}
      <Route path="/notifications" element={<Notifications />} />
      <Route path="/preferences" element={<Preferences />} />
      <Route path="/security" element={<Security />} />
      <Route path="/passcode" element={<Passcode />} />
      <Route path="/mypost" element={<MyPostScreen />} />
      <Route path="/myorders" element={<MyOrdersScreen />} />
      <Route path="/success" element={<Success />} />
      <Route path="/doc" element={<Doc />} />
      <Route path="/community" element={<Community />} />
      <Route path="/profileScreen" element={<ProfileScreen />} />
      <Route path="/manageWallet" element={<ManageWalletScreen />} />
      <Route path="/privatekey" element={<PrivateKey />} />
      <Route path="/walletprivatekey" element={<WalletPrivateKey />} />
      {/* Placeholder routes */}


      {/* Business Routes  */}
      <Route path="/business" element={<BusinessLayout><BusinessFeeds /></BusinessLayout>} />  

      <Route path="/" element={<CreateTokenForm />} />
    </Routes>
  );
}
