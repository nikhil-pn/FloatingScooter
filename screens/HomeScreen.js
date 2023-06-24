import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import tw from "tailwind-react-native-classnames";
import NavOptions from "../components/NavOptions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useDispatch } from "react-redux";
import {
  setDestination,
  setOrigin,
  setTravelTimeInformation,
} from "../slices/navSlice";

import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

const HomeScreen = () => {
  const dispatch = useDispatch();

  return (
    <SafeAreaView style={tw`bg-white h-full `}>
      <View style={tw`p-5`}>
        <Image
          style={{ width: 100, height: 100, resizeMode: "contain" }}
          source={require("../assets/metro-logo.png")}
        ></Image>

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
        <NavOptions></NavOptions>
        {/* <View style={tw`flex items-center p-2`}>
        <Text style={tw`text-3xl font-semibold uppercase`}>
          Celas Uber Kochi
        </Text>
          <Image
            style={{
              width: 150,
              height: 150,
              resizeMode: "contain",
              borderRadius: 100,
              justifyContent: "center",
            }}
            source={require("../assets/celas.png")}
          ></Image>
        <Text style={tw`text-1xl font-semibold uppercase`}>
          Comming soon..!
        </Text>
        </View> */}
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;

// import { View, Text, SafeAreaView, Image } from "react-native";
// import React from "react";
// import NavOptions from "../components/NavOptions";
// import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
// import { GOOGLE_MAPS_APIKEY } from "@env";
// import { useDispatch } from "react-redux";
// import { setDestination, setOrigin } from "../slices/navSlice";
// // import NavFavourites from "../components/NavFavourites";

// const HomeScreen = () => {
//   const dispatch = useDispatch();

//   return (
//     <SafeAreaView className="h-full bg-white p-5">
//       <View className="px-5">
//         <Image
//           style={{
//             width: 100,
//             height: 100,
//             resizeMode: "contain",
//           }}
//           source={{
//             uri: "https://links.papareact.com/gzs",
//           }}
//         />

//         <GooglePlacesAutocomplete
//           placeholder="Where From?"
//           styles={{
//             container: {
//               flex: 0,
//             },
//             textInput: {
//               fontSize: 18,
//             },
//           }}
//           onPress={(data, details = null) => {
//             dispatch(
//               setOrigin({
//                 location: details.geometry.location,
//                 description: data.description,
//               })
//             );

//             dispatch(setDestination(null));
//           }}
//           fetchDetails={true}
//           enablePoweredByContainer={false}
//           minLength={2}
//           query={{
//             key: GOOGLE_MAPS_APIKEY,
//             language: "en",
//           }}
//           nearbyPlacesAPI="GooglePlacesSearch"
//           debounce={400}
//         />

//         <NavOptions />
//         {/* <NavFavourites /> */}
//       </View>
//     </SafeAreaView>
//   );
// };

// export default HomeScreen;
