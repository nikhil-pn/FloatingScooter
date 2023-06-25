// import { View, Text } from "react-native";
// import React, { useState } from "react";
// import MapView, { Marker } from "react-native-maps";
// import tw from "tailwind-react-native-classnames";
// import { useSelector } from "react-redux";
// import { selectOrigin } from "../slices/navSlice";

// const Map = () => {
//   const [data, setdata] = useState(null);
//   const origin = useSelector(selectOrigin);
//   console.log(origin, "origin map ");

//   if (origin) {
//     if (origin.description === data) {
//       return;
//     } else {
//       setdata(origin.description);
//     }
//   }

//   return (
//     // <MapView
//     //   style={tw`flex-1`}
//     //   mapType="mutedStandard"
//     //   initialRegion={{
//     //     latitude: origin?.loaction.lat,
//     //     longitude: origin?.loaction.lng,
//     //     latitudeDelta: 0.005,
//     //     longitudeDelta: 0.005,
//     //   }}
//     // ></MapView>
//     <View>
//       <Text style={{color: "black", fontSize: 50, flex: 1}}>{data}</Text>
//     </View>
//   );
// };

// export default Map;

import { StyleSheet, Text, View } from "react-native";
import React, { useEffect } from "react";
import MapView, { Marker } from "react-native-maps";
import tw from "tailwind-react-native-classnames";
import { useNavigation } from "@react-navigation/native";
import { useDispatch, useSelector } from "react-redux";
import { selectDestination, selectOrigin } from "../slices/navSlice";
import MapViewDirections from "react-native-maps-directions";
import { GooglePlacesAutocomplete } from "react-native-google-places-autocomplete";
import { GOOGLE_MAPS_APIKEY } from "@env";
import { useRef } from "react";

const Map = () => {
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  const mapRef = useRef(null);

  const navigation = useNavigation();
  const dispatch = useDispatch();

  // useEffect(() => {
  //   if (!origin || !destination) return;
  //   mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
  //     edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
  //   });
  // }, [origin, destination]);

  // useEffect(() => {
  //   if (!origin || !destination) return;
  //   getTravelTime();
  // }, [origin, destination, GOOGLE_MAPS_APIKEY]);

  // console.log(origin?.location?.lat, "description: ");

  useEffect(() => {
    if (!origin || !destination) return;
    //Zoom & fit to markers
    mapRef.current.fitToSuppliedMarkers(["origin", "destination"], {
      edgePadding: { top: 50, right: 50, bottom: 50, left: 50 },
    });
  }, [origin, destination]);

  return (
    <MapView
      ref={mapRef}
      style={tw`flex-1`}
      mapType="mutedStandard"
      initialRegion={{
        latitude: origin?.location?.lat,
        longitude: origin?.location?.lng,
        latitudeDelta: 0.005,
        longitudeDelta: 0.005,
      }}
  
    >
      {origin && destination && (
        <MapViewDirections
          origin={origin.description}
          destination={destination.description}
          apikey={GOOGLE_MAPS_APIKEY}
          strokeColor="black"
          strokeWidth={3}
        ></MapViewDirections>
      )}
      {origin?.location && (
        <Marker
          coordinate={{
            latitude: origin.location.lat,
            longitude: origin.location.lng,
          }}
          title="Origin"
          description={origin.description}
          identifier="origin"
        ></Marker>
      )}
      {destination?.location && (
        <Marker
          coordinate={{
            latitude: destination.location.lat,
            longitude: destination.location.lng,
          }}
          title="Destination"
          description={destination.description}
          identifier="destination"
        ></Marker>
      )}
    </MapView>
  );
};

export default Map;

const styles = StyleSheet.create({});
