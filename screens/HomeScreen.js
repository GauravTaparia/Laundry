import React from "react";
import { Button, View, Dimensions, ScrollView } from "react-native";
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
        <View
          style={{
            width: width * 0.5,
            borderRadius: 20,
            backgroundColor: "#e32f45",
            marginLeft: width * 0.25,
            marginRight: width * 0.25,
            alignItems: "center",
          }}
        >
          <Button
            title="Book Your Pickup Now"
            color="#fff"
            onPress={() => navigation.navigate("Order")}
          />
        </View>
      </View>
    </ScrollView>
  );
}

export default HomeScreen;
