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

const OverlappingImages = () => {
    return (
      <View style={styles2.container}>
        <Image
          source={require('../../assets/base.png')}
          style={styles2.baseImage}
          resizeMode="contain"
        />
        <Image
          source={require('../../assets/overlay.png')}
          style={styles2.overlayImage}
          resizeMode="contain"
        />
      </View>
    );
  };
  
  const styles2 = StyleSheet.create({
    container: {
      justifyContent: 'center',
      alignItems: 'center',
      height: 100,
    },
    baseImage: {
      width: '100%',
      height: '100%',
      position: 'absolute',
      top: 0,
      left: 0,
      alignSelf: 'center',
    },
    overlayImage: {
      width: '180%',
      height: '180%',
      position: 'absolute',
      alignSelf: 'center',
      top: '66%',
    },
  });


export default function MessageScreen() {
  const [messages, setMessages] = useState([
    {
      id: '1',
      fromMe: false,
      text: `Hey Olivia, I’ve finished with the requirements doc! I made some notes in the gdoc as well for Phoenix to look over.`,
      time: 'Thursday 11:40 am',
      senderName: 'Swiftrole',
      avatar: require('../../assets/logo.png'), // Updated avatar source
    },
    {
      id: '3',
      fromMe: true,
      text: `Awesome! Thanks. I’ll look at this today.`,
      time: 'Just Now',
      senderName: 'You',
      avatar: null, // No avatar for "You"
    },
    {
      id: '7',
      fromMe: false,
      text: '. • .',
      time: '',
      type: 'typing',
      senderName: 'Swiftrole',
      avatar: require('../../assets/logo.png'),
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
      senderName: 'You',
      avatar: null,
    };

    const typingMessage = {
      id: 'typing',
      fromMe: false,
      text: '. • .',
      time: '',
      type: 'typing',
      senderName: 'Swiftrole',
      avatar: require('../../assets/logo.png'),
    };

    setMessages((prevMessages) => [...prevMessages.filter((m) => m.type !== 'typing'), next, typingMessage]);
    setInput('');
    setTimeout(() => {
      setMessages((prevMessages) => prevMessages.filter((m) => m.type !== 'typing'));
      listRef.current?.scrollToEnd({ animated: true });
    }, 1000);
  };

  const renderItem = ({ item }) => {
    const isFile = item.type === 'file';
    const isTyping = item.type === 'typing';
    const alignStyle = item.fromMe ? styles.messageRight : styles.messageLeft;

    return (
      <View style={[styles.bubbleRow, item.fromMe && !isTyping && styles.bubbleRowRight]}>
        {!item.fromMe && !isTyping && item.avatar && ( // Only show avatar if it exists
          <Image
            source={item.avatar}
            style={styles.avatarPlaceholder}
          />
        )}
        <View style={[alignStyle, {  }]}>
          <View style={[styles.nameTimeContainer, { flexDirection: item.fromMe ? 'row-reverse' : 'row' }]}>
            {!item.fromMe && !isTyping && item.senderName && (
              <Text style={[styles.senderName, ]}>{item.senderName}</Text>
            )}
            {item.time && (
              <Text style={[styles.timeText, ]}>
                {item.time}
              </Text>
            )}
          </View>
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
              <Text style={item.fromMe ? styles.bubbleTextRight : styles.bubbleTextLeft}>
                {item.text}
              </Text>
            )}
          </View>
        </View>
      </View>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* HEADER */}
      <View style={styles.header}>
        <OverlappingImages />
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
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Send a message"
            value={input}
            onChangeText={setInput}
          />
          <View style={styles.inputBottomRow}>
            <Image source={require('../../assets/Icons.png')} style={styles.iconButton} />
            <TouchableOpacity style={styles.sendButton} onPress={send}>
              <Text style={styles.sendText}>Send Message</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const { width } = Dimensions.get('window');
const bubbleMax = width * 0.75;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF' },

  header: {
    height: 260,
  },
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
    marginRight: 8,
    marginBottom: 60
  },
  senderName: {
    fontSize: 12,
    color: '#555',
    marginBottom: 2,
    marginLeft:6
  },
  messageLeft: {
    alignItems: 'flex-start',
  },
  messageRight: {
    alignItems: 'flex-end',

  },
  nameTimeContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    width: '100%',
  },

  bubble: {
    maxWidth: bubbleMax,
    padding: 12,

borderBottomLeftRadius: 6, 
borderBottomRightRadius: 6, 

},
  bubbleLeft: { backgroundColor: '#FAFAFA', marginLeft: 8, borderTopLeftRadius: 'none', 
    borderTopRightRadius: 6, borderWidth: 1, borderColor: '#E9EAEB'},
  bubbleRight: { backgroundColor: '#444CE7', marginRight: 8, borderTopLeftRadius: 6, 
    borderTopRightRadius: 'none',  },
  bubbleTextLeft: { color: '#333' },
  bubbleTextRight: { color: '#FFF' },

  timeText: {
    fontSize: 10,
    color: '#888',
    marginBottom: 10,
    marginRight: 8
  },


  fileBubble: { paddingVertical: 16 },
  fileText: { fontSize: 14, color: '#000' },

  inputContainer: {
    padding: 12,
    borderTopWidth: 1,
    borderColor: '#EEE',
    backgroundColor: '#FFF',
    height: 140
  },
  input: {
    height: 40,
    borderWidth: 1,
    borderColor: '#DDD',
    borderRadius: 10,
    paddingHorizontal: 12,
    marginBottom: 8,
    flex: 1, // Make input take up available space
  },
  inputBottomRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end', // Align items to the end (right)
  },
  sendButton: {
    backgroundColor: '#4C60FF',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    marginLeft: 8,
    width: 124,
    height: 40
  },
  sendText: { color: '#FFF', fontWeight: '600', fontSize: 14 },
  iconButton: {
    width: 74,  // Adjust as needed
    height: 36, // Adjust as needed
    resizeMode: 'contain', // Ensure the image scales correctly
    marginRight: 8,       // Add some left margin for spacing
  },
  typingAvatar: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: '#CCC',
    marginRight: 8,
  }
});
