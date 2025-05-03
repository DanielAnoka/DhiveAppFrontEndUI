import React from 'react';
import { useState } from 'react';
import { useNavigate } from 'react-router-native';
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ImageBackground,
  Modal,
  StyleSheet,
} from 'react-native';

const LiveOverlayScreen = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const navigate = useNavigate();

  const handleEndLive = () => {
    setModalVisible(false);
    navigate('/');
  };

  return (
    <ImageBackground
      source={require('../../assets/Live.png')}
      style={styles.background}
    >
      <View style={styles.topBar}>
        <View style={styles.leftTop}>
          <Image source={require('../../assets/profile.jpg')} style={styles.avatar} />
          <Text style={styles.username}>Swiftrole,s Dhive</Text>
          <View style={styles.liveBadge}><Text style={styles.liveText}>+FOLLOW</Text></View>
          <View style={styles.viewerCount}><Text style={styles.viewerText}>10</Text></View>
        </View>
        <TouchableOpacity onPress={() => setModalVisible(true)}>
          <Text style={styles.closeButton}>✕</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.bottomOverlay}>
       <Image source={require('../../assets/converse.png')} />

        <View style={styles.joinedBox}>
          <Image source={require('../../assets/profile.jpg')} style={styles.joinedAvatar} />
          <Text style={styles.joinedText}>
            <Text style={{ fontWeight: '600' }}>maxjacobson</Text> joined
          </Text>
        </View>
      </View>
      <Image source={require('../../assets/bot.png')} style={styles.bottomImage} />

      {/* Modal */}
      <Modal
        visible={modalVisible}
        transparent
        animationType="fade"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackdrop}>
          <View style={styles.modalBox}>
            <TouchableOpacity
              style={styles.modalClose}
              onPress={() => setModalVisible(false)}
            >
              <Text style={styles.modalCloseText}>✕</Text>
            </TouchableOpacity>
            <Text style={styles.modalTitle}>End Live Video?</Text>
            <Text style={styles.modalSubtitle}>
              If you end your live, it will also end for all your viewers.
            </Text>

            <TouchableOpacity
              style={styles.endButton}
              onPress={handleEndLive}
            >
              <View style={styles.modalItem}>
                <View style={[styles.iconCircle, { backgroundColor: '#F34E4E' }]} />
                <Text style={styles.endText}>End Live Now</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.cancelButton}
              onPress={() => setModalVisible(false)}
            >
              <View style={styles.modalItem}>
                <View style={[styles.iconCircle, { backgroundColor: '#000' }]} />
                <Text style={styles.cancelText}>Cancel</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
};
export default LiveOverlayScreen

const styles = StyleSheet.create({
  modalBackdrop: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0,0,0,0.4)',
    padding: 20,
  },
  modalBox: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 24,
    width: '100%',
    maxWidth: 320,
    alignItems: 'center',
    position: 'relative',
  },
  modalClose: {
    position: 'absolute',
    top: 12,
    right: 12,
  },
  modalCloseText: {
    fontSize: 18,
    color: '#000',
  },
  modalTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
    marginBottom: 6,
    textAlign: 'center',
  },
  modalSubtitle: {
    fontSize: 13,
    color: '#666',
    textAlign: 'center',
    marginBottom: 24,
  },
  modalItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  iconCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 12,
  },
  endButton: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    width: '100%',
  },
  endText: {
    color: '#F34E4E',
    fontWeight: 'bold',
  },
  cancelButton: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
    width: '100%',
  },
  cancelText: {
    color: '#000',
    fontWeight: '500',
  },
  
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'space-between',
  },
  topBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
    alignItems: 'center',
  },
  leftTop: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 6,
  },
  avatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
  },
  username: {
    color: '#fff',
    fontWeight: '600',
    marginHorizontal: 6,
  },
  liveBadge: {
    backgroundColor: '#5F4BFF',
    paddingHorizontal: 8,
    paddingVertical: 4,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  liveText: {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',

  },
  viewerCount: {
    backgroundColor: '#0006',
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderRadius: 4,
  },
  viewerText: {
    color: '#fff',
    fontSize: 12,
  },
  closeButton: {
    color: '#fff',
    fontSize: 22,
  },
  bottomOverlay: {
    padding: 16,
    backgroundColor: 'rgba(0,0,0,0.3)',
  },
  infoText: {
    color: '#fff',
    fontSize: 13,
    marginBottom: 4,
  },
  joinedBox: {
    marginTop: 12,
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#0006',
    padding: 6,
    borderRadius: 6,
  },
  joinedAvatar: {
    width: 24,
    height: 24,
    borderRadius: 12,
    marginRight: 8,
  },
  joinedText: {
    color: '#fff',
    fontSize: 13,
  },
  bottomImage: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: 60,
    resizeMode: 'contain',
    backgroundColor: 'black'
  },
});
