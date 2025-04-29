import React, { useEffect } from 'react';
import { View, Text, ActivityIndicator, StyleSheet, Platform, Image } from 'react-native';
import { useNavigate } from 'react-router-native';
import { Images } from "../constants/index"

export default function SplashScreen() {
  const navigate = useNavigate();

  useEffect(() => {
    const timeout = setTimeout(() => {
      navigate('/onboarding');
    }, 3000);

    return () => clearTimeout(timeout);
  }, []);

  return (
    <View style={styles.container}>

      <Image source={Images.Logo} style={styles.logo} />
      <ActivityIndicator size="large" color="#fff" style={styles.loader} />
      <Text style={styles.footer}>
        Powered by{"\n"}
        <Text style={styles.company}>Egochain</Text>
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#000',
    paddingHorizontal: 20,
  },
  logo: {
    fontSize: 40,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 20,
  },
  loader: {
    marginVertical: 20,
  },
  footer: {
    position: 'absolute',
    bottom: 30,
    color: '#aaa',
    textAlign: 'center',
    fontSize: 12,
  },
  company: {
    fontWeight: '600',
    color: '#fff',
    fontSize: 14,
  },
});
