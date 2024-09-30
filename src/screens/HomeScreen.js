import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import tw from 'twrnc';

function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={tw`flex-1 bg-black`}>
      <View style={tw`flex-1 items-center justify-center`}>
        <Text style={tw`text-white text-3xl font-bold`}>Home Screen</Text>
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;
