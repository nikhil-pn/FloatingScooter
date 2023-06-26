import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";

const SuccessScreen = ({ route }) => {
  const navigation = useNavigation();
  //geting data from args from the navigation.nativagte method by route.params
  const { data } = route.params;
  return (
    //styling the sucess screen
    <SafeAreaView style={tw``}>
      <View style={tw`h-full justify-center`}>
        <View style={tw`p-5 text-center flex  justify-center items-center `}>
          <Image
            source={require("../assets/sc.png")}
            style={{ width: 150, height: 150, resizeMode: "contain" }}
          ></Image>
          <Text style={tw`font-bold text-2xl mb-3 text-center`}>
            Your {data?.title} is on the way
          </Text>
          <View style={tw`items-center `}>
            <Text>Please the Amount of : {data?.price} Rupees</Text>
           
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SuccessScreen;
