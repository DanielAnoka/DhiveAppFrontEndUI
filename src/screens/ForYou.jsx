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
import { FlatList } from 'react-native';



const windowHeight = Dimensions.get('window').height;
const bottomNavHeight = 70;
const feedItemHeight = windowHeight - bottomNavHeight;
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
  ];

  const actions = [
    { name: 'win', label: '' },
    { name: 'buy' },
    { name: 'trade' },
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

  const togglePlayback = () => {
    if (status.isPlaying) {
      videoRef.current.pauseAsync();
    } else {
      videoRef.current.playAsync();
    }
  };

  const formatTime = (millis) => {
    const totalSeconds = Math.floor(millis / 1000);
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  };

  return (
    <View style={[styles.feedItem, { height: feedItemHeight }]}>
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

        {/* Bottom Controls */}
        <View style={styles.bottomControlsContainer}>
          <View style={styles.repostContainer}>
            <TouchableOpacity style={styles.repostButtonHorizontal}>
              <Image source={require('../../assets/repost.png')} style={styles.repostIconHorizontal} />
              <Text style={styles.repostTextHorizontal}>Repost</Text>
            </TouchableOpacity>
          </View>
          <View style={styles.videoTimelineContainer}>
            <View style={styles.timelineBarWithIcon}>
              <Image source={require('../../assets/v.png')} style={styles.timelineIcon} />
              <View style={styles.timelineBackground}>
                <View style={styles.timelineProgress} />
              </View>
            </View>
            <View style={styles.timeRow}>
              <Text style={styles.timeTextLeftBelowIcon}>{formatTime(status.positionMillis)}</Text>
              <Text style={styles.timeTextRight}>{formatTime(status.durationMillis)}</Text>
            </View>
          </View>
        </View>



        {/* Product Overlay */}
        <View style={styles.productOverlay}>
          <Text style={styles.productTitle}>Apple Watch Series 9 (Pink)</Text>
          <View style={styles.priceBadge}>
            <Text style={styles.priceText}>$132.78</Text>
          </View>
        </View>
      </View> {/* --- HERE IS THE MISSING CLOSING TAG --- */}

      {/* Comments Modal */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.sheetContainer}>
            <Image source={require('../../assets/rectangle.png')} style={styles.modalTopImage} />
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Comments</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.headerCloseButton}>
                <Text style={styles.headerCloseText}>×</Text>
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.commentList}>
              {dummyComments.map((text, idx) => (
                <View key={idx} style={styles.commentContainer}>
                  <View style={styles.commentRow}>
                    <Image
                      source={require('../../assets/profile.jpg')}
                      style={styles.commentAvatar}
                    />
                    <View style={styles.commentContent}>
                      <Text style={styles.commentAuthor}>Wade Warren</Text>
                      <Text style={styles.commentText}>{text}</Text>
                    </View>
                  </View>

                  {text.length > 10 && (
                    <View style={styles.commentActionsUnder}>
                      <Text style={styles.commentAction}>Like</Text>
                      <Text style={styles.commentAction}>•</Text>
                      <Text style={styles.commentAction}>Reply</Text>
                    </View>
                  )}
                </View>
              ))}
            </ScrollView>

            <View style={styles.inputRowContainer}>
              <View style={styles.messageInputBox}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Send a message"
                  placeholderTextColor="#888"
                  value={message}
                  onChangeText={setMessage}
                />
              </View>

              <TouchableOpacity
                style={styles.sendButton}
                onPress={() => setMessage('')}
              >
                <Image
                  source={require('../../assets/Button.png')}
                  style={{ width: 40, height: 40, alignSelf: 'flex-start', marginTop: 10 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}
function MixedPlaceholder({ items }) {
  const videoItem = items.find(i => i.kind === 'video');
  const imageItems = items.filter(i => i.kind === 'image');
  const [modalVisible, setModalVisible] = useState(false);
  const [message, setMessage] = useState('');

  const videoRef = useRef(null);
  const [status, setStatus] = useState({});

  const dummyComments = [
    "I wish I could just purchase this right now.",
    'Looks great! Where did you get it?',
    'Amazing product — totally adding to cart!',
  ];

  const togglePlayback = () => {
    if (status.isPlaying) {
      videoRef.current.pauseAsync();
    } else {
      videoRef.current.playAsync();
    }
  };
  const actions = [
    { name: 'win', label: '' },
    { name: 'buy' },
    { name: 'trade' },
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
  
  

  return (
    <View style={[styles.feedItem, { height: feedItemHeight }]}>
      <View style={{ width: '100%', height: '100%' }}>
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

        <View style={styles.bottomControlsContainer}>
          <View style={styles.repostContainer2}>
            <TouchableOpacity style={styles.repostButtonHorizontal}>
              <Image source={require('../../assets/Badge.png')} style={styles.repostIconHorizontal2} />
            </TouchableOpacity>
          </View>
          
        </View>
        
      {/* Product overlay */}
      <View style={styles.productOverlay}>
        <Text style={styles.productTitle}>Apple Watch Series 9 (Pink)</Text>
        <View style={styles.priceBadge}>
          <Text style={styles.priceText}>$132.78</Text>
        </View>
      </View>

      {/* Comment Modal — matching VideoPlaceholder style */}
            {/* Comments Modal */}
            <Modal
        visible={modalVisible}
        transparent
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.sheetContainer}>
            <Image source={require('../../assets/rectangle.png')} style={styles.modalTopImage} />
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Comments</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.headerCloseButton}>
                <Text style={styles.headerCloseText}>×</Text>
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.commentList}>
              {dummyComments.map((text, idx) => (
                <View key={idx} style={styles.commentContainer}>
                  <View style={styles.commentRow}>
                    <Image
                      source={require('../../assets/profile.jpg')}
                      style={styles.commentAvatar}
                    />
                    <View style={styles.commentContent}>
                      <Text style={styles.commentAuthor}>Wade Warren</Text>
                      <Text style={styles.commentText}>{text}</Text>
                    </View>
                  </View>

                  {text.length > 10 && (
                    <View style={styles.commentActionsUnder}>
                      <Text style={styles.commentAction}>Like</Text>
                      <Text style={styles.commentAction}>•</Text>
                      <Text style={styles.commentAction}>Reply</Text>
                    </View>
                  )}
                </View>
              ))}
            </ScrollView>

            <View style={styles.inputRowContainer}>
              <View style={styles.messageInputBox}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Send a message"
                  placeholderTextColor="#888"
                  value={message}
                  onChangeText={setMessage}
                />
              </View>

              <TouchableOpacity
                style={styles.sendButton}
                onPress={() => setMessage('')}
              >
                <Image
                  source={require('../../assets/Button.png')}
                  style={{ width: 40, height: 40, alignSelf: 'flex-start', marginTop: 10 }}
                />
              </TouchableOpacity>
            </View>
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
    { name: 'win', label: '' },
    { name: 'buy' },
    { name: 'trade' },
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


  const dummyComments = [
    "This one's clean.",
    'Wishlisted ✅',
    'Perfect match with the other accessories!',
    'Is this available in blue?',
  ];

  return (
    <View style={[styles.feedItem, { height: feedItemHeight }]}>
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
          <View key={i} style={{ width: Dimensions.get('window').width, height: '100%' }}>
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
  {items.map((_, i) => {
    console.log('Rendering dot:', i); // ADD THIS LINE
    return (
      <View
        key={i}
        style={[
          styles.dot,
          i === index ? styles.dotActive : null
        ]}
      />
    );
  })}
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

      <View style={styles.bottomControlsContainer}>
          <View style={styles.repostContainer2}>
            <TouchableOpacity style={styles.repostButtonHorizontal}>
              <Image source={require('../../assets/Badge.png')} style={styles.repostIconHorizontal2} />
            </TouchableOpacity>
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
            <Image source={require('../../assets/rectangle.png')} style={styles.modalTopImage} />
            <View style={styles.modalHeader}>
              <Text style={styles.modalTitle}>Comments</Text>
              <TouchableOpacity onPress={() => setModalVisible(false)} style={styles.headerCloseButton}>
                <Text style={styles.headerCloseText}>×</Text>
              </TouchableOpacity>
            </View>

            <ScrollView style={styles.commentList}>
              {dummyComments.map((text, idx) => (
                <View key={idx} style={styles.commentContainer}>
                  <View style={styles.commentRow}>
                    <Image
                      source={require('../../assets/profile.jpg')}
                      style={styles.commentAvatar}
                    />
                    <View style={styles.commentContent}>
                      <Text style={styles.commentAuthor}>Wade Warren</Text>
                      <Text style={styles.commentText}>{text}</Text>
                    </View>
                  </View>

                  {text.length > 10 && (
                    <View style={styles.commentActionsUnder}>
                      <Text style={styles.commentAction}>Like</Text>
                      <Text style={styles.commentAction}>•</Text>
                      <Text style={styles.commentAction}>Reply</Text>
                    </View>
                  )}
                </View>
              ))}
            </ScrollView>

            <View style={styles.inputRowContainer}>
              <View style={styles.messageInputBox}>
                <TextInput
                  style={styles.textInput}
                  placeholder="Send a message"
                  placeholderTextColor="#888"
                  value={message}
                  onChangeText={setMessage}
                />
              </View>

              <TouchableOpacity
                style={styles.sendButton}
                onPress={() => setMessage('')}
              >
                <Image
                  source={require('../../assets/Button.png')}
                  style={{ width: 40, height: 40, alignSelf: 'flex-start', marginTop: 10 }}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  );
}


export default function ForYou() {
  const navigate = useNavigate();

  const horizontalImages = Array.from({ length: 20 }, (_, i) => (
    <TouchableOpacity
      key={i}
      onPress={() => navigate('/BusinessLive')}
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
    {
      type: 'carousel',
      items: [
        require('../../assets/f1.jpg'),
        require('../../assets/placeholder4b.png'),
        require('../../assets/placeholder4c.png'),
      ],
    },    
      {type: 'mixed',
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
      <FlatList
        data={feedData}
        keyExtractor={(_, i) => i.toString()}
        ListHeaderComponent={() => (
          <>
            <Header />
            <ScrollView
              horizontal
              showsHorizontalScrollIndicator={false}
              style={styles.horizontalScrollContainer}
            >
              {horizontalImages}
            </ScrollView>
          </>
        )}
        renderItem={({ item }) => {
          switch(item.type) {
            case 'video':    return <VideoPlaceholder src={item.src} />;
            case 'mixed':    return <MixedPlaceholder items={item.items} />;
            case 'carousel': return <CarouselPlaceholder items={item.items} />;
            default:         return null;
          }
        }}
        pagingEnabled
        decelerationRate="fast"
        showsVerticalScrollIndicator={false}
        getItemLayout={(_, index) => ({
          length: feedItemHeight + 24,
          offset: (feedItemHeight + 24) * index,
          index,
        })}
        contentContainerStyle={{ paddingBottom: bottomNavHeight }}
      />
      <BottomNav />
    </SafeAreaView>
  
  );
}

const styles = StyleSheet.create({
  bottomControlsContainer: {
    position: 'absolute',
    bottom: 60, // Adjust as needed
    left: 16,
    right: 16,
    zIndex: 1,
  },
  
  repostContainer: {
    alignItems: 'flex-start',
    marginBottom: 45,
  },
  repostContainer2: {
    alignItems: 'flex-start',
    marginBottom: 85,
  },
  repostButtonHorizontal: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  repostIconHorizontal: {
    width: 30,
    height: 30,
    tintColor: '#fff',
    marginRight: 10,
  },
  repostIconHorizontal2 : {
    width: 104,
    height: 22,
  },
  repostTextHorizontal: {
    color: '#fff',
    fontSize: 17,
  },
  videoTimelineContainer: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  timelineBarWithIcon: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '95%',
  },
  timelineIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  timelineBackground: {
    flex: 1,
    height: 10,
    backgroundColor: 'rgba(255,255,255,0.3)',
    borderRadius: 2.5,
    overflow: 'hidden',
  },
  timelineProgress: {
    backgroundColor: '#fff',
    height: '100%',
    borderRadius: 2.5,
    flex: status.durationMillis ? status.positionMillis / status.durationMillis : 0,
  },
  timeRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    marginTop: 4,
  },
  timeTextLeftBelowIcon: {
    color: '#fff',
    fontSize: 12,
  },
  timeTextRight: {
    color: '#fff',
    fontSize: 12,
  },
  commentContainer: {
    marginBottom: 16,             // space between comments
  },
  commentRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
  },
  commentActionsUnder: {
    flexDirection: 'row',
    marginTop: 1,
    marginLeft: 52,              // avatar width (40) + marginRight (12)
  },
  commentAction: {
    fontSize: 13,
    color: '#888',
    marginRight: 12,
  },
  carouselDots: {
    position: 'absolute',
    bottom: 90,
    alignSelf: 'center',
    flexDirection: 'row',
    gap: 6,
    backgroundColor: 'white',
    borderRadius: 16,
    paddingHorizontal: 10,
    paddingVertical: 6,
    zIndex: 1000
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
inputRowContainer: {
    flexDirection: 'row',
    alignItems: 'right',
    marginTop: 2, 
    height: 67
  },
// the graphic at the very top of the sheet
modalTopImage: {
  width: '60%',
  height: 5,             // tweak this to control its visual height
  resizeMode: 'contain',
  alignSelf: 'center'
},

// row containing title + close‑button
modalHeader: {
  flexDirection: 'row',
  justifyContent: 'space-between',
  alignItems: 'center',
  marginBottom: 12,
},

// tappable area around the “×”
headerCloseButton: {
  padding: 8,
},

// style for the close “×” symbol
headerCloseText: {
  fontSize: 27,
  lineHeight: 24,
  color: '#000000',       // match your other closeText
},
  // for CarouselPlaceholder
 
  feedItem: {
    marginVertical: 12,
    // remove any fixed height here
  },

  streamContent: {
    width: '100%',
    // use aspectRatio or dynamic height as before:
height: '100%',
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
    height: 65
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
    marginTop: 10,
    height: 120,
    marginBottom: 6,
    marginLeft: 24,
    marginRight: 24

  },
  horizontalContentContainer: {
    flexDirection: 'row',
    //alignItems: 'center',
  },
  horizontalImage: {
    width: 85,
    height: 85,
    marginRight: 6,
  },

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
  iconMid: { width: 45, height: 45, resizeMode: 'contain' },
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
    maxHeight: windowHeight * 0.8, // optional cap if you still want a ceiling
    flexShrink: 1,    width: '100%',
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    paddingHorizontal: 16,
    paddingTop: 16,
  },

  modalTitle: { fontSize: 20, fontWeight: '1500', marginBottom: 7, padding: 8, marginTop: 30 },
  commentList: { maxHeight: windowHeight * 0.9, marginBottom: 12 },
  commentRow: { flexDirection: 'row', marginBottom: 10 },
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

  messageInputBox: {
    flex: 1,                  // takes up all remaining width
    flexDirection: 'row',     // (optional) if you want any icon inside
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#ddd',
    borderRadius: 8,
    paddingHorizontal: 8,
    marginTop: 22,
    backgroundColor: '#fff',
    height: 36
  },
  textInput: { flex: 1, fontSize: 15, color: '#000' },
  sendButton: {
    marginLeft: 10,
    padding: 10,
    borderRadius: 50,
  },
  sendText: { color: '#fff', fontSize: 16 },
  

  
});


