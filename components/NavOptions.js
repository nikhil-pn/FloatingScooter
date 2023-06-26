import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";

import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { selectOrigin } from "../slices/navSlice";

// data for navOpitons
const data = [
  {
    id: "12345",
    title: "   Scooty",
    image: require("../assets/sc.png"),
    screen: "MapScreen",
  },
  {
    id: "56789",
    title: "Water Metro",
    image: require("../assets/boat.png"),
    screen: "WaterScreen", // CHANGES IN FUTURE ...
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  const origin = useSelector(selectOrigin);

  return (
    // looping through the data in flatlist and styling them according both bike and boad button created in touchableOpacity
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity
          disabled={!origin}
          //using navigation to navigate to the appropriate screen
          onPress={() => navigation.navigate(item.screen)}
          style={[
            tw`p-2 pl-6 pb-8 pt-4 bg-gray-100 m-2 w-40 rounded`,
            { backgroundColor: "#f6f6f6" },
          ]}
        >
          <View style={tw`${!origin && "opacity-20"}`}>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={item.image}
            ></Image>
            <Text
              style={[tw`mt-2 text-lg font-semibold pl-3 `, { color: "black" }]}
            >
              {item.title}
            </Text>
            <Icon
              name="arrowright"
              color="white"
              type="antdesign"
              style={[
                tw`p-2 bg-black ml-8 rounded-full w-10 mt-4`,
                { backgroundColor: "#003f5e" },
              ]}
            ></Icon>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
