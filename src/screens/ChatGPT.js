import React from 'react';
import { View, Text } from 'react-native';
import tw from 'twrnc';

const ChatGPT = () => {
  return (
    <View style={tw`flex-1 bg-black items-center justify-center`}>
      <Text style={tw`text-white text-2xl font-bold`}>ChatGPT</Text>
    </View>
  );
};

export default ChatGPT;
