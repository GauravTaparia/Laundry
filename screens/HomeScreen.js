import React from "react";
import { Button, View, Dimensions, ScrollView } from "react-native";
import Carosuel from "/Users/gauravtaparia/Desktop/Laundry/navigation/carosuel.js";
import OrderButton from "../navigation/OrderButton";

const { width } = Dimensions.get("window");

function HomeScreen() {
  return (
    <ScrollView>
      {/* OfferWall Carosuel Component */}
      <View style={{ color: "#fff" }}>
        <Carosuel />
      </View>
      {/* Place your order button */}
      <OrderButton />
    </ScrollView>
  );
}

export default HomeScreen;
