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
import { ImportCryptoScreen } from "../screens/ImportCrypto";
import Send from "../screens/send";
import Receive from "../screens/receive";
import ReceiveToken from "../screens/ReceiveToken";
import SendToken from "../screens/select";
import Tf from "../screens/transferHistory";
import TransactionHistory from "../screens/transactionHistory";
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
import BusinessAssets from "../screens/business/asssets";
import BusinessProfile from "../screens/business/profile";
import BusinessPost from "../screens/business/post";
import BusinessLive from "../screens/business/businessLive";
import BusinessInsight from "../screens/business/Insights&Analytics";
import Live from "../screens/business/live";
import GoLive from "../screens/business/goLive";

// Placeholder components for feeds and explore
import Feeds from "../screens/feeds/index";
import ExplorePage from "../screens/explore";
import Search from "../screens/explore/Search";
import FilterPage from "../screens/explore/Filter";
import ProductDetails from "../screens/product-details";
import DeliveryContact from "../screens/product-details/DeliveryContact";
import TradeProducts from "../screens/trade-products";
import ReviewPage from "../screens/trade-products/Review";
import App from "../screens/wallet";
import P2PTrading from "../screens/p2p/P2PTrading";
import BuyCoin from "../screens/p2p/BuyCoin";
import BuyOffer from "../screens/p2p/BuyOffer";
import SellOffer from "../screens/p2p/SellOffer";
import SellCoin from "../screens/p2p/SellCoin";
import ChatSupport from "../screens/p2p/ChatSupport";
import MakeAppeal from "../screens/p2p/MakeAppeal";
import AppealTracking from "../screens/p2p/AppealTracking";
import BusinessOnLive from "../screens/feeds/BusinessOnLive";
import LivePage from "../screens/feeds/Live";
import UserProfile from "../screens/p2p/UserProfile";
import LayoutBusinesses from "../MainLayout/LayoutBusinesses";
import Businesses from "../screens/Businesses";
import SendMessage from "../screens/Businesses/SendMessage";
import DigitalProducts from "../screens/digital-products";
import Support from "../screens/p2p/Support";
import CreatePost from "../screens/feeds/CreatePost";
import LoginPage from "../screens/auth/LoginPage";
import Biometric from "../screens/auth/Biometric";

export default function AppNavigator() {
  return (
    <Routes>
      {/* Routes with BottomNav */}
      <Route
        path="/wallet"
        element={
          <MainLayout>
            <Wallet />
          </MainLayout>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/biometric" element={<Biometric />} />
      <Route
        path="/"
        element={
          <LayoutBusinesses>
            <Wallet />
          </LayoutBusinesses>
        }
      />
      <Route
        path="/businesses"
        element={
          <LayoutBusinesses>
            <Businesses />
          </LayoutBusinesses>
        }
      />
      <Route
        path="/feeds"
        element={
          <LayoutBusinesses>
            <Feeds />
          </LayoutBusinesses>
        }
      />
      <Route
        path="/explore"
        element={
          <LayoutBusinesses>
            <ExplorePage />
          </LayoutBusinesses>
        }
      />
      <Route
        path="/assets"
        element={
          <LayoutBusinesses>
            <Wallet />
          </LayoutBusinesses>
        }
      />
      <Route
        path="/profile"
        element={
          <MainLayout>
            <Profile />
          </MainLayout>
        }
      />
      <Route
        path="/mypost"
        element={
          <MainLayout>
            <MyPostScreen />
          </MainLayout>
        }
      />
      {/* Modal/tab-triggered routes */}
      <Route
        path="/bridge"
        element={
          <MainLayout>
            <Bridge />
          </MainLayout>
        }
      />
      <Route
        path="/swap"
        element={
          <MainLayout>
            <Swap />
          </MainLayout>
        }
      />
      {/* Routes without BottomNav */}
      <Route path="/token" element={<ManageToken />} />
      <Route path="/import" element={<ImportCryptoScreen />} />
      <Route path="/send" element={<Send />} />
      <Route path="/receive" element={<Receive />} />
      <Route path="/receiveToken" element={<ReceiveToken />} />
      <Route path="/sendToken" element={<SendToken />} />
      <Route path="/tf" element={<Tf />} />
      <Route path="/transaction" element={<TransactionHistory />} />
      {/* <Route path="/tokenSwap" element={<SwapToken />} />


      // {/* Profile routes  */}
      {/* // <Route path="/notifications" element={<Notifications />} />
      // <Route path="/preferences" element={<Preferences />} />
      // <Route path="/security" element={<Security />} />
      // <Route path="/passcode" element={<Passcode />} /> 
      // <Route path="/" element={<ExplorePage />} />
      // <Route path="/mypost" element={<MyPostScreen />} />
      // <Route path="/myorders" element={<MyOrdersScreen />} />
      // <Route path="/success" element={<Success />} />
      // <Route path="/doc" element={<Doc />} />
      // <Route path="/community" element={<Community />} />
      // <Route path="/manageWallet" element={<ManageWalletScreen />} />
      // <Route path="/privatekey" element={<PrivateKey />} />
      // <Route path="/walletprivatekey" element={<WalletPrivateKey />} /> */}
      {/* Placeholder routes */}
      // <Route path="/profileScreen" element={<ProfileScreen />} />
      {/* Business Routes  */}
      <Route
        path="/business"
        element={
          <BusinessLayout>
            <BusinessFeeds />
          </BusinessLayout>
        }
      />
      {/* Products routes */}
      {/* <Route path="/" element={<CreateTokenForm />} /> */}
      <Route path="/explore" element={<ExplorePage />} />
      <Route path="/search" element={<Search />} />
      <Route path="/filter" element={<FilterPage />} />
      <Route path="/product-details/:status" element={<ProductDetails />} />
      <Route path="/delivery-contact" element={<DeliveryContact />} />
      <Route path="/review" element={<ReviewPage />} />
      <Route path="/send-message" element={<SendMessage />} />
      {/* <Route path="/" element={<App />} /> */}
      <Route path="/trade-products" element={<TradeProducts />} />
      {/* Digital Product routes */}
      <Route path="/digitalproduct" element={<DigitalProducts />} />
      {/* P2P routes */}
      <Route path="/p2p-trading" element={<P2PTrading />} />
      <Route path="/buy-coin" element={<BuyCoin />} />
      <Route path="/sell-coin" element={<SellCoin />} />
      <Route path="/buy-offer" element={<BuyOffer />} />
      <Route path="/sell-offer" element={<SellOffer />} />
      <Route path="/chat-support" element={<ChatSupport />} />
      <Route path="/support" element={<Support />} />
      <Route path="/user-profile" element={<UserProfile />} />
      {/* <Route path="/" element={<ChatSupport />} /> */}
      <Route path="/make-appeal" element={<MakeAppeal />} />
      <Route path="/appeal-tracking" element={<AppealTracking />} />
      {/* Live and Feeds routes */}
      <Route path="/business-live" element={<BusinessOnLive />} />
      <Route path="/live" element={<LivePage />} />
      <Route path="/create-post" element={<CreatePost />} />
      {/* Business */}
      <Route
        path="/business/assets"
        element={
          <BusinessLayout>
            <BusinessAssets />
          </BusinessLayout>
        }
      />
      <Route path="/business/profile" element={<BusinessProfile />} />
      <Route
        path="/business/post"
        element={
          <BusinessLayout>
            <BusinessPost />
          </BusinessLayout>
        }
      />
      <Route
        path="/business/live"
        element={
          <BusinessLayout>
            <BusinessLive />
          </BusinessLayout>
        }
      />
      <Route path="/business/insights" element={<BusinessInsight />} />
      <Route path="/business/goLive" element={<Live />} />
      <Route path="/goLive" element={<GoLive />} />
      <Route />
    </Routes>
  );
}
