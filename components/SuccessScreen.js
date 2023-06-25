import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const SuccessScreen = ({ route }) => {
  const navigation = useNavigation();
  const { data } = route.params;
  return (
    <SafeAreaView style={tw`flex`}>
      {/* <TouchableOpacity
        style={[tw`bg-white p-3 rounded-full shadow-lg`]}
        onPress={() => navigation.navigate("HomeScreen")}
      >
        <Icon type="antdesign" name="home" color="black" size={16} />
      </TouchableOpacity> */}
      <View style={tw`self-center`}>
        <View style={tw`p-5 w-full `}>
          {/* <Image
            source={require("../assets/car_animation.gif")}
            style={tw`w-60 h-40`}
          /> */}
        </View>
        <View style={tw`p-5 text-center self-center`}>
          <Text style={tw`font-bold text-lg mb-3 text-center`}>
            Your {data?.title} is on the way
          </Text>
          <Text style={tw`text-base text-center`}>
            Ride cost: ${data?.price}
          </Text>
          <Text style={tw`text-base text-center`}>
            Estimated time: {data?.time}
          </Text>
          <Text style={tw`text-base text-center`}>
            Total Distance: {data?.distance}
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default SuccessScreen;
