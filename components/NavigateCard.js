import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native";
import tw from "tailwind-react-native-classnames";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { StyleSheet } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { selectDestination, setDestination } from "../slices/navSlice";
import { useNavigation } from "@react-navigation/native";
import NavFavourites from "./NavFavourites";
import { Icon } from "react-native-elements";

const NavigateCard = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();

  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <Text style={tw`text-center py-5 text-xl`}>Good Morning, Nikhil</Text>
      <View style={tw`border-t border-gray-200 flex-shrink`}>
        <View>
          {/* fetching where to data from googleplaceautocomplet comp */}
          <GooglePlacesAutocomplete
            placeholder="Where To?"
            styles={toInputBoxStyles}
            fetchDetails={true}
            enablePoweredByContainer={false}
            minLength={2}
            query={{
              key: GOOGLE_MAPS_APIKEY,
              language: "en",
            }}
            returnKeyType={"search"}
            onPress={(data, details = null) => {
              dispatch(
                setDestination({
                  location: details.geometry.location,
                  description: data.description,
                })
              );
              // navigation.navigate("RideOptionsCard");
            }}
            nearbyPlacesAPI="GooglePlacesSearch"
            debounce={400}
          />
        </View>
        {/* defining navfavouriteis screen */}
        <View style={tw`p-4 pl-4`}>
          <NavFavourites></NavFavourites>
        </View>
        {/* the ride button click push to RideOptionsCard comp screen added */}
        <View>
          <View
            style={tw`mt-auto flex-row justify-evenly py-2 border-t border-gray-100`}
          >
            <TouchableOpacity
              style={[
                tw`flex-row  w-1/2 px-4 py-3 items-center flex justify-center`,
                { backgroundColor: "#556c89" },
              ]}
              onPress={() => navigation.push("RideOptionsCard")}
            >
              <Icon
                name="motorcycle"
                type="font-awesome"
                color="white"
                size={16}
              />
              <Text style={tw`text-white text-center pl-3`}>Ride</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default NavigateCard;

// navgateCard input box styles styleSheets
const toInputBoxStyles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    paddingTop: 20,
    flex: 0,
  },
  textInput: {
    backgroundColor: "#dddddf",
    borderRadius: 0,
    fontSize: 12,
  },
  textInputContainer: {
    paddingHorizontal: 20,
    paddingBottom: 0,
  },
});
