import { View, Text, SafeAreaView } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import Map from "../components/Map";
import MapView from "react-native-maps";

const MapScreen = () => { 
  return (
    <View>
      <View style={tw`h-1/2`}>
        <Map></Map>
      </View>
      <View style={tw`h-1/2`}>
        {/* <Map></Map> */}
      </View>
    </View>
  );
};

export default MapScreen;
