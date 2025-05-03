// AppNavigator.js
import React from 'react';
import { Routes, Route } from 'react-router-native';
import FollowingScreen from '../screens/Following';
import ForYou from '../screens/ForYou';
import LiveOverlayScreen from '../screens/Live';
import BusinessLive from '../screens/Business_Live';



export default function AppNavigator() {
  return (
    <Routes>
      <Route path="/" element={<FollowingScreen />} />
      <Route path='/BusinessLive' element={<BusinessLive />} />
      <Route path="/foryou" element={<ForYou />} />
      <Route path='/LiveOverlayScreen' element={<LiveOverlayScreen />} />
    </Routes>
  );
}
