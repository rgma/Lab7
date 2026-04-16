import React, { useState, useEffect, useRef } from 'react';
import { StyleSheet, View, ScrollView, KeyboardAvoidingView, Keyboard, Platform, Text } from 'react-native';
import { handleInput } from '../Order';
import ChatView from './ChatView'
import WelcomeView from './WelcomeView';

export default function(){
  const [messages, setMessages] = useState([]);
  const [inputBarText, setInputBarText] = useState('');
  const scrollViewRef = useRef(null);

  // Scroll to bottom helper
  const scrollToBottom = (animated = true) => {
    // Small timeout ensures the layout has calculated before scrolling
    setTimeout(() => {
      scrollViewRef.current?.scrollToEnd({ animated });
    }, 100);
  };

  useEffect(() => {
    // Setup keyboard listeners
    const showSubscription = Keyboard.addListener('keyboardDidShow', () => scrollToBottom());
    const hideSubscription = Keyboard.addListener('keyboardDidHide', () => scrollToBottom());

    // Initial scroll
    scrollToBottom(false);

    return () => {
      showSubscription.remove();
      hideSubscription.remove();
    };
  }, []);

  // Scroll whenever messages update
  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = () => {
    if (inputBarText.trim().length === 0) return;

    // Correct way to update state: create a NEW array
    let newMessages = [{ direction: 'right', text: inputBarText }];
    const aResponse = handleInput(inputBarText);
    for(const message of aResponse){
      newMessages.push({direction: "left", text: message});
    }
    setMessages([...messages, ...newMessages]);
    setInputBarText('');
  };

  return (
  <View style={styles.outer}>
    <View style={styles.chatContainer}>
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={{ width: '100%' }}
      >
        {messages.length ? (
          <ChatView
            scrollToBottom={scrollToBottom}
            sendMessage={sendMessage}
            scrollViewRef={scrollViewRef}
            styles={styles}
            messages={messages}
            setInputBarText={setInputBarText}
            inputBarText={inputBarText}
          />
        ) : (
          <WelcomeView
            scrollToBottom={scrollToBottom}
            sendMessage={sendMessage}
            scrollViewRef={scrollViewRef}
            styles={styles}
            messages={messages}
            setInputBarText={setInputBarText}
            inputBarText={inputBarText}
          />
        )}
      </KeyboardAvoidingView>
    </View>
  </View>
);
};

//TODO: separate these out. This is what happens when you're in a hurry!
const styles = StyleSheet.create({

  chatContainer: {
    
  chatContainer: {
  width: '90%',
  maxWidth: 700,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',
  borderRadius: 12,
  padding: 10,
},

  justifyContent: 'center',
  alignItems: 'center',
},

  //ChatView

  outer: {
  flex: 1,
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'white',
  width: '100%',
  },

  messages: {
    flex: 1
  },

  header: {
  flexDirection: 'row',
  alignItems: 'center',
  padding: 12,
  borderBottomWidth: 1,
  borderColor: '#eee',
  backgroundColor: '#fff'
},
headerDot: {
  width: 10,
  height: 10,
  borderRadius: 5,
  backgroundColor: '#66db30',
  marginRight: 8
},
headerText: {
  fontSize: 16,
  fontWeight: '600'
},

})