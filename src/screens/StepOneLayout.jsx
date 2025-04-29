import React from 'react';
import { View, StyleSheet, SafeAreaView } from 'react-native';

const DynamicStepLayout = ({ children, currentStep = 1 }) => {
  const steps = [1, 2, 3, 4]; 

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.indicatorRow}>
          {steps.map((step) => (
            <View
              key={step}
              style={[
                styles.indicator,
                step === currentStep && styles.activeIndicator,
              ]}
            />
          ))}
        </View>
        {children}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: '#fff',
  },
  indicatorRow: {
    flexDirection: 'row',
    marginBottom: 10,
    marginTop: 60,
  },
  indicator: {
    width: 30,
    height: 5,
    borderRadius: 4,
    backgroundColor: '#E9EBF0',
    marginRight: 8,
  },
  activeIndicator: {
    backgroundColor: '#000',
  },
});

export default DynamicStepLayout;
