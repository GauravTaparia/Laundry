import React from "react";
import {
  Text,
  Button,
  View,
  Dimensions,
  ScrollView,
  Touchable,
  TouchableOpacity,
} from "react-native";
import Carosuel from "/Users/gauravtaparia/Desktop/Laundry/navigation/carosuel.js";

import Tabs from "../navigation/tabs";
import { NavigationContainer } from "@react-navigation/native";

const { width } = Dimensions.get("window");

function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      {/* OfferWall Carosuel Component */}
      <View style={{ color: "#fff" }}>
        <Carosuel />
      </View>

      {/* Place your order button */}
      <View style={{ backgroundColor: "#fff" }}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Order")}
          style={{
            width: width * 0.5,
            borderRadius: 20,
            backgroundColor: "#e32f45",
            marginLeft: width * 0.25,
            marginRight: width * 0.25,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 18,
              fontWeight: "bold",
              color: "white",
              padding: 10,
            }}
          >
            Book Your Pickup Now
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
