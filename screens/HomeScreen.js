import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";
import Carosuel from "/Users/gauravtaparia/Desktop/Laundry/navigation/carosuel.js";

import Tabs from "../navigation/tabs";
import { NavigationContainer } from "@react-navigation/native";
import Membership from "../navigation/Membership";
import Skillindia from "../navigation/Skillindia";
import Ourservice from "../navigation/Ourservice";
import Forquery from "../navigation/Forquery";

const { width } = Dimensions.get("window");
const height = width * 0.58;

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
      {/* Membership */}
      <Membership />
      <Ourservice />
      <Forquery />
      {/* Offer Image */}
      <View style={{ height: 100 }}>
        <Image
          source={require("../assets/3.jpg")}
          resizeMode="cover"
          style={{
            height: height * 0.6,
            width,
          }}
        />
      </View>
      {/* SkillIndia */}
      <Skillindia />
    </ScrollView>
  );
}

export default HomeScreen;
