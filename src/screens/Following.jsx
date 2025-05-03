// FollowingScreen.jsx
import React, { useState, useRef } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  Modal,
  SafeAreaView,
  ScrollView,
  ImageBackground,
  TextInput,
  Dimensions,
} from 'react-native';
import {
  useNavigate,
  useLocation,
  Link,
} from 'react-router-native';
import BottomNav from '../components/BottomNav';
import { Video } from 'expo-av';


const { height } = Dimensions.get('window');
const actions = [
  { name: 'win',   label: '' },
  { name: 'buy',   label: '' },
  { name: 'trade', label: '' },
  { name: 'heart', label: '' },
  { name: 'comment', label: '' },
];

const iconMap = {
  win: require('../../assets/win.png'),
  buy: require('../../assets/buy.png'),
  trade: require('../../assets/trade.png'),
  heart: require('../../assets/heart.png'),
  comment: require('../../assets/comment.png'),
};

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const current =
    location.pathname.toLowerCase() === '/foryou' ? 'ForYou' : 'Following';

  return (
    <View>
      <View style={styles.headerBar}>
        <View style={styles.leftGroup}>
          <TouchableOpacity>
            <Image source={require('../../assets/profile.jpg')} style={styles.profilePic} />
          </TouchableOpacity>
          <TouchableOpacity
      onPress={() => navigate('/LiveOverlayScreen')}
      
    >
          <Image source={require('../../assets/live_badge.png')} style={styles.liveBadge} />
          </TouchableOpacity>
        </View>
        <View style={styles.rightGroup}>
          <TouchableOpacity style={styles.iconButton}>
            <Image source={require('../../assets/search.png')} style={styles.iconSmall} />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <Image source={require('../../assets/notification-bing.png')} style={styles.iconSmall} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.segmentContainer}>
        <Link
          to="/"
          underlayColor="#f0f4f7"
          style={[
            styles.segmentButton,
            current === 'Following' && styles.segmentButtonActive,
          ]}
        >
          <Text
            style={[
              styles.segmentText,
              current === 'Following' && styles.segmentTextActive]
} >
            Following
          </Text>
        </Link>
        <Link
          to="/foryou"
          underlayColor="#f0f4f7"
          style={ [   styles.segmentButton,
            current === 'ForYou' && styles.segmentButtonActive]}>
          <Text
            style={[
              styles.segmentText,
              current === 'ForYou' && styles.segmentTextActive
]}
          >
            For You
          </Text>
        </Link>
      </View>
    </View>
  );
};

const FeedItem = ({ placeholder }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState('');
  const dummyComments = [
    "I wish I could just purchase this right now. Though I've been thinking differently on the color.",
    'Looks great! Where did you get it?',
    'Amazing product — totally adding to cart!',
    'Does it come in other colors?',
  ];

  const actions = [
    { name: 'win', label: '' },
    { name: 'buy', label: '' },
    { name: 'trade', label: '' },
    { name: 'heart', label: '' },
    { name: 'comment', label: '' },
  ];

  return (
    <View style={styles.feedItem}>
      <ImageBackground
        source={placeholder}
        style={styles.streamContent}
        imageStyle={styles.streamImage} // optional, for cover
      >
        {/* mid‑right icons */}
        <View style={styles.iconColumnMid}>
          {actions.map(({ name, label }, i) => (
            <TouchableOpacity
              key={i}
              style={styles.iconWrapper}
              onPress={() => name === 'comment' && setModalVisible(true)}
            >
              <Image source={iconMap[name]} style={styles.iconMid} />
              {label !== '' && <Text style={styles.iconLabelMid}>{label}</Text>}
            </TouchableOpacity>
          ))}
        </View>
  
        {/* ←— Product info now overlaid at the bottom of the image */}
        <View style={styles.productOverlay}>
          <Text style={styles.productTitle}>Apple Watch Series 9 (Pink)</Text>
          <View style={styles.priceBadge}>
            <Text style={styles.priceText}>$132.78</Text>
          </View>
        </View>
      </ImageBackground>
  

      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.sheetContainer}>
            <Text style={styles.modalTitle}>Comments</Text>
            <ScrollView style={styles.commentList}>
              {dummyComments.map((text, idx) => (
                <View key={idx} style={styles.commentRow}>
                  <Image
                    source={require('../../assets/profile.jpg')}
                    style={styles.commentAvatar}
                  />
                  <View style={styles.commentContent}>
                    <Text style={styles.commentAuthor}>Wade Warren</Text>
                    <Text style={styles.commentText}>{text}</Text>
                    {text.length > 10 && (
                      <View style={styles.commentActions}>
                        <Text style={styles.commentAction}>Like</Text>
                        <Text style={styles.commentAction}>•</Text>
                        <Text style={styles.commentAction}>Reply</Text>
                      </View>
                    )}
                  </View>
                </View>
              ))}
            </ScrollView>
            <View style={styles.messageInputRow}>
              <TextInput
                style={styles.textInput}
                placeholder="Send a message"
                placeholderTextColor="#888"
                value={message}
                onChangeText={setMessage}
              />
              <TouchableOpacity
                style={styles.sendButton}
                onPress={() => setMessage('')}
              >
                <Text style={styles.sendText}>➤</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => setModalVisible(false)}
              style={styles.closeBtn}
            >
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};


// 3a) Full‑width video placeholder





function VideoPlaceholder({ src }) {
  const videoRef = useRef(null);
  const [status, setStatus] = useState({
    isPlaying: false,
    positionMillis: 0,
    durationMillis: 1,
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState('');

  const dummyComments = [
    "I wish I could just purchase this right now. Though I've been thinking differently on the color.",
    'Looks great! Where did you get it?',
    'Amazing product — totally adding to cart!',
    'Does it come in other colors?',
  ];

  const actions = [
    { name: 'wina', label: '' },
    { name: 'buy' },
    { name: 'trade' },
    { name: 'heart', label: '' },
    { name: 'comment', label: '' },
  ];

  const iconMap = {
    wina: require('../../assets/win.png'),
    buy: require('../../assets/buy.png'),
    trade: require('../../assets/trade.png'),
    heart: require('../../assets/heart.png'),
    comment: require('../../assets/comment.png'),
  };

  const togglePlayback = () => {
    if (status.isPlaying) {
      videoRef.current.pauseAsync();
    } else {
      videoRef.current.playAsync();
    }
  };

  return (
    <View style={styles.feedItem}>
      <View style={styles.streamContent}>
        <Video
          ref={videoRef}
          source={src}
          style={StyleSheet.absoluteFill}
          resizeMode="cover"
          shouldPlay={false}
          onPlaybackStatusUpdate={s => setStatus(s)}
        />

        <TouchableOpacity style={styles.playButton} onPress={togglePlayback}>
          <Image source={require('../../assets/play.png')} style={styles.playIcon} />
        </TouchableOpacity>

        <View style={styles.iconColumnMid}>
          {actions.map(({ name, label }, i) => (
            <TouchableOpacity
              key={i}
              style={styles.iconWrapper}
              onPress={() => name === 'comment' && setModalVisible(true)}
            >
              <Image source={iconMap[name]} style={styles.iconMid} />
              {!!label && <Text style={styles.iconLabelMid}>{label}</Text>}
            </TouchableOpacity>
          ))}
        </View>

        {/* Progress Bar */}
        <View style={styles.videoProgressContainer}>
          <View
            style={[
              {
                flex: status.durationMillis
                  ? status.positionMillis / status.durationMillis
                  : 0,
                backgroundColor: '#fff',
              },
            ]}
          />
        </View>

        {/* Product Overlay */}
        <View style={styles.productOverlay}>
          <Text style={styles.productTitle}>Apple Watch Series 9 (Pink)</Text>
          <View style={styles.priceBadge}>
            <Text style={styles.priceText}>$132.78</Text>
          </View>
        </View>
      </View>

      {/* Comments Modal */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.sheetContainer}>
            <Text style={styles.modalTitle}>Comments</Text>
            <ScrollView style={styles.commentList}>
              {dummyComments.map((text, idx) => (
                <View key={idx} style={styles.commentRow}>
                  <Image
                    source={require('../../assets/profile.jpg')}
                    style={styles.commentAvatar}
                  />
                  <View style={styles.commentContent}>
                    <Text style={styles.commentAuthor}>Wade Warren</Text>
                    <Text style={styles.commentText}>{text}</Text>
                    {text.length > 10 && (
                      <View style={styles.commentActions}>
                        <Text style={styles.commentAction}>Like</Text>
                        <Text style={styles.commentAction}>•</Text>
                        <Text style={styles.commentAction}>Reply</Text>
                      </View>
                    )}
                  </View>
                </View>
              ))}
            </ScrollView>
            <View style={styles.messageInputRow}>
              <TextInput
                style={styles.textInput}
                placeholder="Send a message"
                placeholderTextColor="#888"
                value={message}
                onChangeText={setMessage}
              />
              <TouchableOpacity style={styles.sendButton} onPress={() => setMessage('')}>
                <Text style={styles.sendText}>➤</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeBtn}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}


function MixedPlaceholder({ items }) {
  const videoItem = items.find(i => i.kind === 'video');
  const imageItems = items.filter(i => i.kind === 'image');

  const videoRef = useRef(null);
  const [status, setStatus] = useState({});
  const [commentModalVisible, setCommentModalVisible] = useState(false);
  const [message, setMessage] = useState('');

  const dummyComments = [
    "I wish I could just purchase this right now.",
    'Looks great! Where did you get it?',
    'Amazing product — totally adding to cart!',
    'Does it come in other colors?',
  ];

  const togglePlayback = () => {
    if (status.isPlaying) {
      videoRef.current.pauseAsync();
    } else {
      videoRef.current.playAsync();
    }
  };
  const actions = [
    { name: 'wina', label: '' },
    { name: 'buy' },
    { name: 'trade' },
    { name: 'heart', label: '' },
    { name: 'comment', label: '' },
  ];

  const iconMap = {
    wina: require('../../assets/win.png'),
    buy: require('../../assets/buy.png'),
    trade: require('../../assets/trade.png'),
    heart: require('../../assets/heart.png'),
    comment: require('../../assets/comment.png'),
  };

  return (
    <View style={styles.feedItem}>
      <View style={{ width: '100%', aspectRatio: 9 / 16 }}>
  {/* Top half: Video */}
  <View style={{ flex: 1 }}>
    <Video
      ref={videoRef}
      source={videoItem?.src}
      style={{ width: '100%', height: '100%' }}
      resizeMode="cover"
      shouldPlay={false}
      onPlaybackStatusUpdate={setStatus}
    />
    <TouchableOpacity style={styles.playButton} onPress={togglePlayback}>
      <Image source={require('../../assets/play.png')} style={styles.playIcon} />
    </TouchableOpacity>
  </View>

  {/* Bottom half: 2 images side by side */}
  <View style={{ flex: 1, flexDirection: 'row' }}>
    {imageItems.slice(0, 2).map((img, i) => (
      <Image
        key={i}
        source={img.src}
        style={{ width: '50%', height: '100%' }}
        resizeMode="cover"
      />
    ))}
  </View>
</View>


      {/* Side icons */}
      <View style={styles.iconColumnMid}>
          {actions.map(({ name, label }, i) => (
            <TouchableOpacity
              key={i}
              style={styles.iconWrapper}
              onPress={() => name === 'comment' && setModalVisible(true)}
            >
              <Image source={iconMap[name]} style={styles.iconMid} />
              {!!label && <Text style={styles.iconLabelMid}>{label}</Text>}
            </TouchableOpacity>
          ))}
        </View>
      {/* Product overlay */}
      <View style={styles.productOverlay}>
        <Text style={styles.productTitle}>Apple Watch Series 9 (Pink)</Text>
        <View style={styles.priceBadge}>
          <Text style={styles.priceText}>$132.78</Text>
        </View>
      </View>

      {/* Comment Modal — matching VideoPlaceholder style */}
      <Modal
        visible={commentModalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setCommentModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.sheetContainer}>
            <Text style={styles.modalTitle}>Comments</Text>
            <ScrollView style={styles.commentList}>
              {dummyComments.map((text, idx) => (
                <View key={idx} style={styles.commentRow}>
                  <Image
                    source={require('../../assets/profile.jpg')}
                    style={styles.commentAvatar}
                  />
                  <View style={styles.commentContent}>
                    <Text style={styles.commentAuthor}>Wade Warren</Text>
                    <Text style={styles.commentText}>{text}</Text>
                    {text.length > 10 && (
                      <View style={styles.commentActions}>
                        <Text style={styles.commentAction}>Like</Text>
                        <Text style={styles.commentAction}>•</Text>
                        <Text style={styles.commentAction}>Reply</Text>
                      </View>
                    )}
                  </View>
                </View>
              ))}
            </ScrollView>
            <View style={styles.messageInputRow}>
              <TextInput
                style={styles.textInput}
                placeholder="Send a message"
                placeholderTextColor="#888"
                value={message}
                onChangeText={setMessage}
              />
              <TouchableOpacity style={styles.sendButton} onPress={() => setMessage('')}>
                <Text style={styles.sendText}>➤</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => setCommentModalVisible(false)} style={styles.closeBtn}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}


// 3c) Carousel of 3 images with paging dots
function CarouselPlaceholder({ items }) {
  const [index, setIndex] = useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState('');
  const actions = [
    { name: 'wina', label: '' },
    { name: 'buy' },
    { name: 'trade' },
    { name: 'heart', label: '' },
    { name: 'comment', label: '' },
  ];

  const iconMap = {
    wina: require('../../assets/win.png'),
    buy: require('../../assets/buy.png'),
    trade: require('../../assets/trade.png'),
    heart: require('../../assets/heart.png'),
    comment: require('../../assets/comment.png'),
  };


  const dummyComments = [
    "This one's clean.",
    'Wishlisted ✅',
    'Perfect match with the other accessories!',
    'Is this available in blue?',
  ];

  return (
    <View style={styles.feedItem}>
      <ScrollView
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={e => {
          const newIndex = Math.round(
            e.nativeEvent.contentOffset.x / e.nativeEvent.layoutMeasurement.width
          );
          setIndex(newIndex);
        }}
      >
        {items.map((src, i) => (
          <View key={i} style={{ width: Dimensions.get('window').width, aspectRatio: 9 / 16 }}>
            <Image
              source={src}
              style={{ width: '100%', height: '100%' }}
              resizeMode="cover"
            />
          </View>
        ))}
      </ScrollView>
      {/* Pagination Dots */}
      <View style={styles.carouselDots}>
        {items.map((_, i) => (
          <View
            key={i}
            style={[
              styles.dot,
              i === index ? styles.dotActive : null
            ]}
          />
        ))}
      </View>

      {/* Side icons */}
      <View style={styles.iconColumnMid}>
          {actions.map(({ name, label }, i) => (
            <TouchableOpacity
              key={i}
              style={styles.iconWrapper}
              onPress={() => name === 'comment' && setModalVisible(true)}
            >
              <Image source={iconMap[name]} style={styles.iconMid} />
              {!!label && <Text style={styles.iconLabelMid}>{label}</Text>}
            </TouchableOpacity>
          ))}
        </View>

      

      {/* Product overlay */}
      <View style={styles.productOverlay}>
        <Text style={styles.productTitle}>Apple Watch Series 9 (Pink)</Text>
        <View style={styles.priceBadge}>
          <Text style={styles.priceText}>$132.78</Text>
        </View>
      </View>

      {/* Comment Modal */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.sheetContainer}>
            <Text style={styles.modalTitle}>Comments</Text>
            <ScrollView style={styles.commentList}>
              {dummyComments.map((text, idx) => (
                <View key={idx} style={styles.commentRow}>
                  <Image
                    source={require('../../assets/profile.jpg')}
                    style={styles.commentAvatar}
                  />
                  <View style={styles.commentContent}>
                    <Text style={styles.commentAuthor}>Wade Warren</Text>
                    <Text style={styles.commentText}>{text}</Text>
                    {text.length > 10 && (
                      <View style={styles.commentActions}>
                        <Text style={styles.commentAction}>Like</Text>
                        <Text style={styles.commentAction}>•</Text>
                        <Text style={styles.commentAction}>Reply</Text>
                      </View>
                    )}
                  </View>
                </View>
              ))}
            </ScrollView>
            <View style={styles.messageInputRow}>
              <TextInput
                style={styles.textInput}
                placeholder="Send a message"
                placeholderTextColor="#888"
                value={message}
                onChangeText={setMessage}
              />
              <TouchableOpacity style={styles.sendButton} onPress={() => setMessage('')}>
                <Text style={styles.sendText}>➤</Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.closeBtn}>
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}


export default function FollowingScreen() {
  const navigate = useNavigate();

  const horizontalImages = Array.from({ length: 20 }, (_, i) => (
    <TouchableOpacity
      key={i}
      onPress={() => navigate('/LiveOverlayScreen')}
      style={styles.horizontalImageWrapper}
    >
      <Image
        source={require('../../assets/singlelive.png')}
        style={styles.horizontalImage}
        resizeMode="contain"
      />
    </TouchableOpacity>
  ));

  const feedData = [
    { type: 'video',    src: require('../../assets/placeholder1.mp4') },
    {
      type: 'mixed',
      items: [
        { kind: 'video', src: require('../../assets/placeholder2.mp4') },
        { kind: 'image', src: require('../../assets/placeholder2a.png') },
        { kind: 'image', src: require('../../assets/placeholder2b.png') },
      ],
    },
    { type: 'video',    src: require('../../assets/placeholder3.mp4') },
    {
      type: 'carousel',
      items: [
        require('../../assets/placeholder4a.png'),
        require('../../assets/placeholder4b.png'),
        require('../../assets/placeholder4c.png'),
      ],
    },
  ];
  

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        showsVerticalScrollIndicator={false}
      >
        <Header />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.horizontalScrollContainer}
        >
          {horizontalImages}
        </ScrollView>

        {feedData.map((item, idx) => {
  switch(item.type) {
    case 'video':
      return <VideoPlaceholder key={idx} src={item.src} />;
    case 'mixed':
      return <MixedPlaceholder key={idx} items={item.items} />;
    case 'carousel':
      return <CarouselPlaceholder key={idx} items={item.items} />;
    default:
      return null;
  }
})}

      </ScrollView>

      <BottomNav />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  carouselDots: {
    position: 'absolute',
    bottom: 12,
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 6,
    backgroundColor: 'white',
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 6,
  },
  
  dot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#ddd',
  },
  
  dotActive: {
    backgroundColor: '#3F48FC', // or the vibrant blue you use
  },
  
  playButton: {
    position: 'absolute',
    top: '45%', left: '45%', // roughly center
    zIndex: 2,
  },
  playIcon: { width: 50, height: 50 },

  videoProgressContainer: {
    position: 'absolute',
    bottom: 60, // just above your productOverlay
    left: 16, right: 16, height: 3,
    backgroundColor: '#444',
    borderRadius: 2,
    overflow: 'hidden',
  },
  videoProgress: {
    backgroundColor: '#fff',
    height: '100%',
  },

  // for MixedPlaceholder
  mixedContainer: {
    flexDirection: 'row',
    width: '100%',
    aspectRatio: 9/16,
  },
  mixedVideo: {
    flex: 2,
    marginRight: 4,
  },
  mixedImages: {
    flex: 1,
    justifyContent: 'space-between',
  },
  mixedImage: {
    width: '100%',
    flex: 1,
  },

  // for CarouselPlaceholder
  carouselDots: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 4,
  },
  dot: {
    width: 8, height: 8,
    borderRadius: 4,
    backgroundColor: '#888',
    marginHorizontal: 4,
  },
  dotActive: {
    backgroundColor: '#fff',
  },

  feedItem: {
    marginVertical: 12,
    // remove any fixed height here
  },

  streamContent: {
    width: '100%',
    // use aspectRatio or dynamic height as before:
    aspectRatio: 9 / 16,

    // make this the positioning container:
    position: 'relative',
    overflow: 'hidden',
  },
  // optional: fine‑tune the inner image
  streamImage: {
    resizeMode: 'cover',     // ensure no distortion
  },

  // bottom‑pinned overlay
  productOverlay: {
    position: 'absolute',
    bottom: 0,    // stick to bottom of streamContent
    left: 0,
    right: 0,

    backgroundColor: 'rgba(0,0,0,0.5)',
    paddingHorizontal: 16,
    paddingVertical: 10,

    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    zIndex: 1,    // ensure it sits on top
  },

  productTitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  priceBadge: {
    backgroundColor: '#D4F0E4',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  priceText: {
    color: '#144A2D',
    fontSize: 13,
    fontWeight: '600',
  },
  productOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: 'rgba(0,0,0,1)',
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productTitle: {
    color: '#fff',
    fontSize: 14,
    fontWeight: '500',
  },
  priceBadge: {
    backgroundColor: '#D4F0E4',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  priceText: {
    color: '#144A2D',
    fontSize: 13,
    fontWeight: '600',
  },
  
  container: { flex: 1, backgroundColor: '#fff' },
  contentContainer: { paddingBottom: 80 },

  headerBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 10,
  },
  leftGroup: { flexDirection: 'row', alignItems: 'center' },
  profilePic: { width: 32, height: 32, borderRadius: 18 },
  liveBadge: { marginLeft: 20, height: 34, borderRadius: 6, width: 78 },
  rightGroup: { flexDirection: 'row' },
  iconButton: { marginLeft: 16 },
  iconSmall: { width: 40, height: 40 },

  segmentContainer: {
    flexDirection: 'row',
    backgroundColor: '#F2F2F2',
    borderRadius: 10,
    padding: 4,
    marginHorizontal: 16,
    marginTop: 30,
    marginBottom: 26
  },
  segmentButton: {
    flex: 1, alignItems: 'center', paddingVertical: 8, borderRadius: 10,
  },
  segmentButtonActive: {
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
    elevation: 2,
  },
  segmentText: { color: '#888', fontSize: 16 },
  segmentTextActive: { color: '#000', fontWeight: '600' },

  horizontalScrollContainer: {
    height: 98, marginTop: 8, paddingHorizontal: 16, marginBottom: 29
  },
  horizontalImageWrapper: {
   width: 98, height: 98, 
   marginRight: 12, borderRadius: 30,
  },
  horizontalImage: { width: 98, height: 98 },

  feedItem: { marginVertical: 12 },

  // centered play
  playButton: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    marginLeft: -22,
    marginTop: -22,
  },

  // mid‑right icons
  iconColumnMid: {
    position: 'absolute',
    right: 16,
    top: '20%',
    alignItems: 'center',
  },
  iconWrapper: {
    width: 65,
    height: 65,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 16,
  },
  iconMid: { width: 60, height: 60, resizeMode: 'contain' },
  iconLabelMid: { marginTop: 4, fontSize: 12, color: '#fff' },

  productFooter: {
    backgroundColor: '#000',
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  productTitle: { color: '#fff', fontSize: 14, fontWeight: '500' },
  priceBadge: {
    backgroundColor: '#D4F0E4',
    paddingVertical: 4,
    paddingHorizontal: 10,
    borderRadius: 12,
  },
  priceText: { color: '#144A2D', fontSize: 13, fontWeight: '600' },

  // comments sheet overlay
  modalOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.3)',
    justifyContent: 'flex-end',
  },
  sheetContainer: {
    height: height * 0.5,
    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  modalTitle: { fontSize: 18, fontWeight: '600', marginBottom: 12 },
  commentList: { flexGrow: 0, maxHeight: height * 0.25, marginBottom: 12 },
  commentRow: { flexDirection: 'row', marginBottom: 16 },
  commentAvatar: { width: 36, height: 36, borderRadius: 18, marginRight: 10 },
  commentContent: {
    flex: 1,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    padding: 10,
  },
  commentAuthor: { fontWeight: 'bold', marginBottom: 4 },
  commentText: { fontSize: 14, color: '#333' },
  commentActions: { flexDirection: 'row', marginTop: 6 },
  commentAction: { marginRight: 10, color: '#888', fontSize: 13 },

  messageInputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 12,
    paddingHorizontal: 12,
    paddingVertical: 8,
    backgroundColor: '#fff',
    marginBottom: 12,
  },
  textInput: { flex: 1, fontSize: 15, color: '#000' },
  sendButton: {
    marginLeft: 10,
    backgroundColor: '#4A6CF7',
    padding: 10,
    borderRadius: 50,
  },
  sendText: { color: '#fff', fontSize: 16 },
  closeBtn: { alignSelf: 'flex-end' },
  closeText: { color: '#007AFF' },

  // bottom tabs
  tabBarContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: 60,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
  tabButton: { alignItems: 'center' },
  tabIcon: { width: 35, height: 35 },
  centralButton: {
    backgroundColor: '#4E4CF5',
    padding: 14,
    borderRadius: 30,
    marginBottom: 20,
  },
  centralIcon: { width: 24, height: 24, tintColor: '#fff' },
});


