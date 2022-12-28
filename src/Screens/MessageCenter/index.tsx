import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
} from 'react-native';
import React, {useCallback, useEffect, useRef, useState} from 'react';
import {GiftedChat} from 'react-native-gifted-chat';
import Colors from '../../Theme/Colors';
import HeaderBar from '../../components/Header';
import ChatHeader from './ChatHeader';
import {getIcons, Icons} from '../../Assets/Svg/Icons';
import {wp} from '../../Theme/Dimensions';

export default function index(props: any) {
  const [messages, setMessages] = useState([]);
  const [Chat, setChat] = useState('');
  let ref = useRef();

  const onSend = useCallback((messages: any) => {
    const data = [
      {
        _id: 'e36dc54f-fe57-4548-b9f1-05f4812c5fac',
        createdAt: new Date(),
        text: messages,
        user: {_id: 1},
      },
    ];

    setMessages(previousMessages => GiftedChat.append(previousMessages, data));
  }, []);

  const data = [
    {
      _id: 1,
      text: 'Hello developer',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      },
    },
    {
      _id: 2,
      text: 'Hello developer',
      createdAt: new Date(),
      user: {
        _id: 2,
        name: 'React Native',
        avatar: 'https://placeimg.com/140/140/any',
      },
    },
  ];

  useEffect(() => {
    setMessages(data);
  }, []);

  const submit = () => {
    if (Chat == '') {
      return;
    } else {
      onSend(Chat), setChat('');
    }
  };

  return (
    <View style={{flex: 1, backgroundColor: Colors.white}}>
      <HeaderBar {...props} />
      <ChatHeader />
      <View style={{marginBottom: 20, flex: 1}}>
        <GiftedChat
          messages={messages}
          user={{
            _id: 1,
          }}
          quickReplyStyle={{}}
          quickReplyTextStyle={{
            fontWeight: '200',
            backgroundColor: Colors.red,
            color: 'red',
          }}
          timeTextStyle={{
            left: {color: Colors.Grey},
            right: {color: Colors.Grey},
          }}
          isTyping={false}
          renderComposer={() => (
            <View style={styles.chatComponent}>
              <TouchableOpacity
                onPress={() => {
                  ref.current.focus();
                }}
                style={styles.ChatInput}>
                <TextInput
                  value={Chat}
                  ref={ref}
                  returnKeyType="send"
                  placeholder={'Write a message...'}
                  onChangeText={setChat}
                  style={styles.input}
                  onSubmitEditing={submit}
                />
                {getIcons(Icons.POPULAR, wp(10), Colors.white)}
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={5}
                onPress={submit}
                style={styles.bottom}>
                {getIcons(Icons.SEND, wp(7), Colors.green)}
              </TouchableOpacity>
            </View>
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  bottom: {
    width: 50,
    height: 50,
    backgroundColor: Colors.green,
    borderRadius: 100,
    padding: 10,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  input: {
    width: wp(65),
    borderRadius: 15,
    paddingHorizontal: 10,
  },
  ChatInput: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    width: wp(80),
    borderRadius: 15,
  },
  chatComponent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
});
