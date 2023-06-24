import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import React from "react";

import tw from "tailwind-react-native-classnames";
import { Icon } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";

const data = [
  {
    id: "12345",
    title: "Bike Taxi",
    image: "https://links.papareact.com/3pn",
    screen: "MapScreen",
  },
  {
    id: "56789",
    title: "Water Metro",
    image: "https://links.papareact.com/28w",
    screen: "EatsScreen", // CHANGES IN FUTURE ...
  },
];

const NavOptions = () => {
  const navigation = useNavigation();
  return (
    <FlatList
      data={data}
      keyExtractor={(item) => item.id}
      horizontal
      renderItem={({ item }) => (
        <TouchableOpacity
          onPress={() => navigation.navigate(item.screen)}
          style={tw`p-2 pl-6 pb-8 pt-4 bg-gray-100 m-2 w-40 rounded`}
        >
          <View>
            <Image
              style={{ width: 120, height: 120, resizeMode: "contain" }}
              source={{ uri: item.image }}
            ></Image>
            <Text
              style={[
                tw`mt-2 text-lg font-semibold pl-3 `,
                { color: "black" },
              ]}
            >
              {item.title}
            </Text>
            <Icon
              name="arrowright"
              color="white"
              type="antdesign"
              style={[tw`p-2 bg-black ml-8 rounded-full w-10 mt-4`,{backgroundColor: "#003f5e"}]}
            ></Icon>
          </View>
        </TouchableOpacity>
      )}
    />
  );
};

export default NavOptions;
