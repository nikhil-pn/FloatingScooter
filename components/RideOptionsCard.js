import { useNavigation } from "@react-navigation/native";
import React, { useEffect, useState } from "react";
import {
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Alert,
} from "react-native";
import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import Screen from "./Screen";
import { useSelector } from "react-redux";
import {
  selectDestination,
  selectOrigin,
  selectTravelTimeInformation,
} from "../slices/navSlice";

// data for the bike and images etc
const data = [
  {
    id: "Bike",
    title: "Bike",
    multiplier: 0.75,
    image: require("../assets/sc.png"),
  },
 
];

// if we have Surge pricing , this goes up
const SURGE_CHARGE_RATE = 1.75;

const RideOptionsCard = () => {
  // states and selectors defining 
  const navigation = useNavigation();
  const [selected, setSelected] = useState(null);
  const travelTimeInformation = useSelector(selectTravelTimeInformation);
  const origin = useSelector(selectOrigin);
  const destination = useSelector(selectDestination);
  
  // if origin an destination null return to navigate card func created
  useEffect(() => {
    if (!origin || !destination) navigation.navigate("NavigateCard");
  }, [origin, destination]);
  
  // for demo purposes simple travel cost func 
  const travelConst = (item) => {
    const result = kilometerMile();
    const price = result * 15;
    return price;
  };

  //Kilimetro distance function
  const kilometerMile = () => {
    const result = travelTimeInformation?.distance?.text;
    let str = result;
    let number = parseFloat(str.match(/\d+(\.\d+)?/)[0]);
    console.log(number); // 11.6
    return number * 1.6;
  };
  // onChoose func
  const onChoose = () => {
    if (!selected) return Alert.alert("Please select a ride option");
    navigation.navigate("SuccessScreen", {
      data: {
        ...selected,
        distance: travelTimeInformation?.distance?.text,
        time: travelTimeInformation?.duration.text,
        price: travelConst(selected),
      },
    });
  };

  return (
    //Ride option card screen styled according to need
    <Screen style={tw`bg-white h-full`}>
      <View style={tw`items-center flex-row justify-center mb-3`}>
        <TouchableOpacity
          style={{ left: 10, position: "absolute", zIndex: 100 }}
          onPress={() => navigation.navigate("NavigateCard")}
        >
          <Icon
            type="antdesign"
            name="arrowleft"
            color="black"
            size={23}
            style={tw`p-3`}
          />
        </TouchableOpacity>
        <Text style={tw`text-center text-xl font-bold`}>
          Select a ride - {kilometerMile()} KM
        </Text>
      </View>
      <View style={tw`flex-1 mt-2`}>
        <FlatList
          data={data}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <TouchableOpacity
              style={tw`flex-row items-center justify-between px-5 ${
                selected?.id === item.id && "bg-gray-100"
              }`}
              onPress={() => setSelected(item)}
            >
              <Image source={item.image} style={styles.image} />
              <View style={tw`flex-row items-center justify-between flex-1`}>
                <View>
                  <Text style={tw`text-xl font-bold text-black`}>
                    {item.title}
                  </Text>
                  <Text style={tw`text-gray-600`}>
                    {travelTimeInformation?.duration?.text} Travel time
                  </Text>
                </View>
                <Text style={tw`text-gray-800 text-lg`}>
                  ₹{travelConst(item)}
                </Text>
              </View>
            </TouchableOpacity>
          )}
        />
      </View>
      <View>
        <TouchableOpacity
          style={tw`bg-black py-3 m-3 rounded-lg ${!selected && "bg-gray-300"}`}
          // disabled={!selected}
          onPress={onChoose}
        >
          <Text style={tw`text-center text-white text-xl`}>
            Confirm {selected?.title}
          </Text>
        </TouchableOpacity>
      </View>
    </Screen>
  );
};

export default RideOptionsCard;

const styles = StyleSheet.create({
  image: {
    width: 90,
    height: 90,
    resizeMode: "contain",
    marginRight: 10 
  },
});
