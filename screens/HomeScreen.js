import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
//importing selector from redux/ slices
import {
  setDestination,
  setOrigin,
  setTravelTimeInformation,
} from "../slices/navSlice";

import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";
import NavFavourites from "../components/NavFavourites";

const HomeScreen = () => {
  //use dispatch func to add the data to the redux state management
  const dispatch = useDispatch();

  return (
    // safearieaview tag for optimizing the notch of screens
    <SafeAreaView style={tw`bg-white h-full `}>
      <View style={tw`p-5`}>
        <View style={tw`flex justify-center items-center -mb-4 pl-4 `}>
          <Image
            style={{
              width: 140,
              height: 140,
              resizeMode: "contain",
              alignContent: "center",
              display: "flex",
            }}
            source={require("../assets/floating.png")}
          ></Image>
        </View>
        {/* Adding the GooglPlaceautocomplete component */}
        <GooglePlacesAutocomplete
          placeholder="Where From?"
          styles={{
            container: {
              flex: 0,
            },
            textInput: {
              fontSize: 18,
            },
          }}
          // fetching the data from google maps api & dispatching the origin
          onPress={(data, details = null) => {
            dispatch(
              setOrigin({
                location: details.geometry.location,
                description: data.description,
              })
            );

            dispatch(setDestination(null));
          }}
          fetchDetails={true}
          enablePoweredByContainer={false}
          minLength={2}
          query={{
            key: GOOGLE_MAPS_APIKEY,
            language: "en",
          }}
          nearbyPlacesAPI="GooglePlacesSearch"
          debounce={400}
        />
        {/* Navoption component */}
        <NavOptions></NavOptions>
        {/* NavFavourites */}
        <View style={tw`pt-6`}>
          <NavFavourites></NavFavourites>
        </View>
        {/* footer */}
        <View style={tw`justify-center items-center pt-10`}>
          <Text style={tw`text-xs`}>www.nikhilpn.com</Text>
          <Text style={tw`text-sm`}>©2023 all right reservered</Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
