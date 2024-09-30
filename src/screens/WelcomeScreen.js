import React from 'react';
import { View, Text, SafeAreaView, TouchableOpacity } from 'react-native';
import { Video } from 'expo-av';
import tw from 'twrnc';

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView style={tw`flex-1 bg-black`}>
      <Video
        source={require('../../assets/images/voice.mp4')}
        style={tw`flex-1`}
        resizeMode="cover"
        isLooping
        shouldPlay
      />
      <View style={tw`absolute bottom-20 left-0 right-0 items-center`}>
        <Text style={tw`text-white text-3xl font-bold`}>Welcome!</Text>
        <Text style={tw`text-white text-lg mt-2`}>
          Start your journey with the app.
        </Text>
        <TouchableOpacity
          style={tw`mt-5 bg-blue-500 px-8 py-3 rounded-full`}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={tw`text-white text-lg font-bold`}>Get Started</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
