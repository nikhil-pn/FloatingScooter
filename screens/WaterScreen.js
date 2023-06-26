import { View, Text } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Image } from "react-native";

const WaterScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full flex justify-center items-center`}>
      <Image
        style={{ width: 200, height: 200 }}
        source={require("../assets/boat.png")}
      ></Image>
      <Text style={tw`text-center  text-gray-700 text-2xl`}>Comming Soon</Text>
      <Text style={tw`text-center text-gray-700 text-sm`}>
        Will Launch every soon in kochi
      </Text>
    </SafeAreaView>
  );
};

export default WaterScreen;
