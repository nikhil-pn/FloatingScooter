import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";

const HomeScreen = () => {
  return (
    <SafeAreaView style={tw`bg-white h-full `}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={require("../assets/metroCycleLogo.png")}
        ></Image>
        <Text style={tw`text-red-500 p-10`}>Iam d n</Text>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
