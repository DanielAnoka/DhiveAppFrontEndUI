import {
  Platform,
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  Dimensions,
  FlatList,
  StatusBar,
} from 'react-native';

import { Images } from '../constants/index';
import Button from '../components/Button';
import { slides } from '../constants/index';
import { useState, useRef } from 'react';
import { useNavigate } from 'react-router-native';

const { width: windowWidth, height: windowHeight } = Dimensions.get('window');

export default function OnboardingScreen() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slidesRef = useRef(null);
  const navigate = useNavigate();

  const onViewableItemsChanged = useRef(({ viewableItems }) => {
    if (viewableItems && viewableItems.length > 0) {
      setCurrentIndex(viewableItems[0].index);
    }
  }).current;

  const viewabilityConfig = useRef({
    itemVisiblePercentThreshold: 50,
  }).current;

  const renderItem = ({ item }) => (
    <View style={styles.slide}>
      <Text style={styles.slideTitle}>{item.title}</Text>
      <Text style={styles.slideSubtitle}>{item.description}</Text>
    </View>
  );

  return (
    <SafeAreaView style={[styles.container, Platform.OS === 'android' && { paddingTop: StatusBar.currentHeight }]}>
      <View style={styles.background}>
        <Image
          source={Images.Slider}
          style={styles.image}
          resizeMode="cover"
        />

        <View style={styles.overlay}>
          <View style={styles.indicatorContainer}>
            {slides.map((_, index) => (
              <View
                key={index}
                style={[
                  styles.indicator,
                  index === currentIndex && styles.activeIndicator,
                  index === currentIndex && styles.activeIndicatorShape,
                ]}
              />
            ))}
          </View>

          <FlatList
            ref={slidesRef}
            data={slides}
            renderItem={renderItem}
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
            onViewableItemsChanged={onViewableItemsChanged}
            viewabilityConfig={viewabilityConfig}
            keyExtractor={(item) => item.id}
            style={styles.slider}
          />

          <View style={styles.footer}>
            <Button
              text={'Get Started'}
              style={styles.button}
              onPress={() => {
                navigate('/auth');
              }}
            />
            <Text style={styles.footerText}>
              Already have an account?{' '}
              <Text
                style={styles.linkText}
                // onPress={() => console.log('Import Seed Phrase pressed')}
              >
                Import Seed Phrase
              </Text>
            </Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  background: {
    flex: 1,
    width: '100%',
    backgroundColor: '#fff',
  },
  image: {
    width: 313,
    height: 616,
    position: 'absolute',
    left: 43,
    top: 30,
  },
  overlay: {
    position: 'absolute',
    bottom: 0,
    height: windowHeight * 0.5,
    width: '100%',
    backgroundColor: '#fff',
    paddingHorizontal: 24,
    paddingTop: 32,
    paddingBottom: 40,
  },
  indicatorContainer: {
    flexDirection: 'row',
    marginBottom: 32,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  indicator: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: '#E9EBF0',
    marginRight: 8,
  },
  activeIndicator: {
    backgroundColor: '#444CE7',
  },
  activeIndicatorShape: {
    width: 8,
    height: 8,
    borderRadius: 8,
  },
  slider: {
    flex: 1,
  },
  slide: {
    width: windowWidth - 48,
    justifyContent: 'flex-start',
  },
  slideTitle: {
    fontSize: 28,
    fontWeight: '700',
    marginBottom: 16,
    textAlign: 'left',
    color: '#181D27',
    lineHeight: 34,
  },
  slideSubtitle: {
    fontSize: 16,
    color: '#535862',
    textAlign: 'left',
    lineHeight: 24,
    letterSpacing: 0.5,
  },
  footer: {
    width: '100%',
    alignItems: 'center',
    marginBottom: 10,
  },
  button: {
    width: 343,
    marginBottom: 40,
  },
  footerText: {
    fontSize: 14,
    color: '#535862',
    textAlign: 'center',
  },
  linkText: {
    color: '#444CE7',
    fontWeight: '400',
  },
});
