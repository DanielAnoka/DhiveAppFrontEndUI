// MessageScreen.jsx
import React, { useState, useRef } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  FlatList,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Dimensions,
} from 'react-native';

export default function MessageScreen() {
  const [messages, setMessages] = useState([
    {
      id: 'pinned',
      fromMe: false,
      text: `work on making those
changes you suggested and
will shoot it over.`,
      time: '',
    },
    {
      id: '1',
      fromMe: false,
      text: `Hey Olivia, I’ve finished with the requirements doc! I made some notes in the gdoc as well for Phoenix to look over.`,
      time: 'Thursday 11:40 am',
    },
    {
      id: '2',
      fromMe: false,
      text: 'Tech requirements.pdf',
      time: 'Thursday 11:41 am',
      type: 'file',
    },
    {
      id: '3',
      fromMe: true,
      text: `Awesome! Thanks. I’ll look at this today.`,
      time: 'Thursday 11:41 am',
    },
    {
      id: '4',
      fromMe: false,
      text: `No rush though — we still have to wait for Lana’s designs.`,
      time: 'Thursday 11:44 am',
    },
    {
      id: '5',
      fromMe: false,
      text: `Hey Olivia, can you please review the latest design when you can?`,
      time: 'Today 2:20 pm',
    },
    {
      id: '6',
      fromMe: true,
      text: `Sure thing, I’ll have a look today. They’re looking great!`,
      time: 'Just now',
    },
    {
      id: '7',
      fromMe: false,
      text: '•••',
      time: '',
      type: 'typing',
    },
  ]);

  const [input, setInput] = useState('');
  const listRef = useRef(null);

  const send = () => {
    if (!input.trim()) return;
    const next = {
      id: Date.now().toString(),
      fromMe: true,
      text: input.trim(),
      time: 'Just now',
    };
    setMessages(prev => [
      ...prev.filter(m => m.type !== 'typing'),
      next,
      { id: 'typing', fromMe: false, text: '•••', time: '', type: 'typing' },
    ]);
    setInput('');
    setTimeout(() => listRef.current?.scrollToEnd({ animated: true }), 100);
  };

  const renderItem = ({ item }) => {
    const isFile = item.type === 'file';
    const isTyping = item.type === 'typing';

    return (
      <View
        style={[
          styles.bubbleRow,
          item.fromMe && !isTyping && styles.bubbleRowRight,
        ]}
      >
        {!item.fromMe && !isTyping && <View style={styles.avatarPlaceholder} />}
        <View
          style={[
            styles.bubble,
            item.fromMe ? styles.bubbleRight : styles.bubbleLeft,
            isFile && styles.fileBubble,
            isTyping && styles.bubbleLeft,
          ]}
        >
          {isFile ? (
            <Text style={styles.fileText}>📄 {item.text}</Text>
          ) : (
            <Text
              style={
                item.fromMe ? styles.bubbleTextRight : styles.bubbleTextLeft
              }
            >
              {item.text}
            </Text>
          )}
          {item.time ? <Text style={styles.timeText}>{item.time}</Text> : null}
        </View>
        {item.fromMe && !isTyping && <View style={styles.avatarPlaceholder} />}
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <Image
          source={require('../../assets/header-bg.png')}
          style={styles.headerBg}
        />
        <View style={styles.headerContent}>
          <View style={styles.avatarWrapper}>
            <Image
              source={require('../../assets/logo.png')}
              style={styles.avatar}
            />
            <Image
              source={require('../../assets/status-dot.png')}
              style={styles.statusDot}
            />
          </View>
          <View style={styles.headerInfo}>
            <View style={styles.tokenRow}>
              <Image
                source={require('../../assets/token-icon.png')}
                style={styles.tokenIcon}
              />
              <Text style={styles.tokenText}>$STL</Text>
              <Image
                source={require('../../assets/user-icon.png')}
                style={styles.userIcon}
              />
              <Text style={styles.userText}>16.3k</Text>
            </View>
            <View style={styles.titleRow}>
              <Text style={styles.title}>Swiftrole’s Dhives</Text>
              <View style={styles.onlineDot} />
            </View>
            <View style={styles.tagsRow}>
              <View style={styles.tag}>
                <Text style={styles.tagText}>0x79…107hg</Text>
              </View>
              <View style={styles.tag}>
                <Text style={styles.tagText}>Technology</Text>
              </View>
              <View style={[styles.tag, styles.tagGreen]}>
                <Text style={[styles.tagText, styles.tagGreenText]}>
                  Cash Back – 20%
                </Text>
              </View>
            </View>
          </View>
          <TouchableOpacity>
            <Image
              source={require('../../assets/more-vertical.png')}
              style={styles.moreIcon}
            />
          </TouchableOpacity>
        </View>
      </View>

      {/* CHAT */}
      <FlatList
        ref={listRef}
        data={messages}
        keyExtractor={m => m.id}
        renderItem={renderItem}
        contentContainerStyle={styles.chatContainer}
      />

      {/* INPUT */}
      <KeyboardAvoidingView
        behavior={Platform.select({ ios: 'padding' })}
        keyboardVerticalOffset={80}
      >
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            placeholder="Send a message"
            value={input}
            onChangeText={setInput}
          />
          <TouchableOpacity style={styles.sendButton} onPress={send}>
            <Text style={styles.sendText}>Send</Text>
          </TouchableOpacity>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const { width } = Dimensions.get('window');
const bubbleMax = width * 0.75;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },

  header: { height: 180 },
  headerBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    width: '100%',
    height: 180,
    resizeMode: 'cover',
  },
  headerContent: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingTop: 40,
  },
  avatarWrapper: { position: 'relative' },
  avatar: { width: 56, height: 56, borderRadius: 28 },
  statusDot: {
    width: 14,
    height: 14,
    borderRadius: 7,
    backgroundColor: '#28A745',
    position: 'absolute',
    bottom: 0,
    right: 0,
    borderWidth: 2,
    borderColor: '#FFF',
  },

  headerInfo: { flex: 1, marginLeft: 12 },
  tokenRow: { flexDirection: 'row', alignItems: 'center' },
  tokenIcon: { width: 20, height: 20 },
  tokenText: { marginHorizontal: 4, fontSize: 12, color: '#333' },
  userIcon: { width: 18, height: 18, marginLeft: 12 },
  userText: { marginLeft: 4, fontSize: 12, color: '#333' },

  titleRow: { flexDirection: 'row', alignItems: 'center', marginTop: 8 },
  title: { fontSize: 20, fontWeight: '600', color: '#000' },
  onlineDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#28A745',
    marginLeft: 8,
  },

  tagsRow: { flexDirection: 'row', marginTop: 8 },
  tag: {
    paddingHorizontal: 8,
    paddingVertical: 4,
    backgroundColor: '#F0F4FF',
    borderRadius: 12,
    marginRight: 8,
  },
  tagText: { fontSize: 12, color: '#3B4A67' },
  tagGreen: { backgroundColor: '#E6FFE8' },
  tagGreenText: { color: '#057A55' },

  moreIcon: { width: 24, height: 24, tintColor: '#666' },

  chatContainer: { padding: 16, paddingBottom: 80 },
  bubbleRow: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    marginBottom: 12,
  },
  bubbleRowRight: { justifyContent: 'flex-end' },
  avatarPlaceholder: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#CCC',
  },

  bubble: {
    maxWidth: bubbleMax,
    padding: 12,
    borderRadius: 12,
  },
  bubbleLeft: { backgroundColor: '#F2F2F2', marginLeft: 8 },
  bubbleRight: { backgroundColor: '#4C60FF', marginRight: 8 },
  bubbleTextLeft: { color: '#333' },
  bubbleTextRight: { color: '#FFF' },

  timeText: {
    fontSize: 10,
    color: '#888',
    marginTop: 6,
    textAlign: 'right',
  },

  fileBubble: { paddingVertical: 16 },
  fileText: { fontSize: 14, color: '#000' },

  inputRow: {
    flexDirection: 'row',
    padding: 12,
    borderTopWidth: 1,
    borderColor: '#EEE',
    backgroundColor: '#FFF',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 20,
    paddingHorizontal: 12,
  },
  sendButton: {
    marginLeft: 12,
    backgroundColor: '#4C60FF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
  },
  sendText: { color: '#FFF', fontWeight: '600' },
});
