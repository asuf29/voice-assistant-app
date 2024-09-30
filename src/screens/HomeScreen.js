import React from 'react';
import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  Image,
} from 'react-native';
import tw from 'twrnc';

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={tw`flex-1 bg-black`}>
      <View style={tw`items-center mt-10`}>
        <Text style={tw`text-white text-2xl font-bold mb-10`}>Features</Text>
      </View>
      <TouchableOpacity
        style={tw`bg-blue-500 rounded-lg mx-5`}
        onPress={() => navigation.navigate('chatGPT')}
      >
        <View style={tw`flex-row items-center px-4 py-3`}>
          <Image
            source={require('../../assets/images/chatGPT.png')}
            style={tw`w-10 h-10`}
          />
          <Text style={tw`text-black text-base font-bold ml-2`}>ChatGPT</Text>
        </View>
        <Text style={tw`text-white text-sm mt-1 px-4 mb-4`}>
          An AI-powered conversational agent that assists you in generating
          text, answering questions, and engaging in discussions on various
          topics.
        </Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={tw`bg-blue-500 rounded-lg mx-5 mt-5`}
        onPress={() => navigation.navigate('chatGPT')}
      >
        <View style={tw`flex-row items-center px-4 py-3`}>
          <Image
            source={require('../../assets/images/chatGPT.png')}
            style={tw`w-10 h-10`}
          />
          <Text style={tw`text-black text-base font-bold ml-2`}>DALL-E</Text>
        </View>
        <Text style={tw`text-white text-sm mt-1 px-4 mb-4`}>
          An AI tool that generates images from text descriptions, enabling you
          to visualize your ideas and concepts in a unique and creative way.
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default HomeScreen;
