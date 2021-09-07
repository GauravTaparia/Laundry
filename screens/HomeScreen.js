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
  TextInput,
  FlatList,
} from "react-native";
import Carosuel from "/Users/gauravtaparia/Desktop/Laundry/navigation/carosuel.js";

import Membership from "../navigation/Membership";
import Skillindia from "../navigation/Skillindia";
import Ourservice from "../navigation/Ourservice";
import Forquery from "../navigation/Forquery";
import Card from "../navigation/Card";
import Reviewcard from "../navigation/Reviewcard";
import Referral from "../navigation/Referral";
import Icon from "react-native-vector-icons/Ionicons";
import * as Animatable from "react-native-animatable";

const { width } = Dimensions.get("window");
const height = width * 0.58;

function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      <View style={{ flex: 1 }}>
        <View
          style={{
            backgroundColor: "#2E2B36",
            justifyContent: "center",
            padding: 10,
            flexDirection: "column",
          }}
        >
          <TouchableOpacity
            style={{
              borderRadius: 20,
              height: height * 0.2,
              backgroundColor: "#2E2B36",
              marginBottom: 5,
              padding: 5,
              alignItems: "center",
              justifyContent: "flex-start",
              flexDirection: "row",
            }}
          >
            <Icon
              name="ios-location-outline"
              style={{ fontSize: width * 0.07, color: "white" }}
            />
            <Text
              style={{
                color: "white",
                fontSize: width * 0.05,
                fontWeight: "700",
                marginLeft: 15,
              }}
            >
              Enter Your Location
            </Text>
          </TouchableOpacity>
          <Animatable.View
            animation="slideInLeft"
            duration={500}
            style={{
              height: 50,
              backgroundColor: "#fff",
              flexDirection: "row",
              padding: 5,
              alignItems: "center",
              borderRadius: 20,
            }}
          >
            <Icon
              name="ios-search"
              style={{ fontSize: width * 0.06, marginLeft: 5 }}
            />
            <TextInput
              placeholder="Search"
              style={{ fontSize: width * 0.05, marginLeft: 15 }}
            />
          </Animatable.View>
        </View>
      </View>
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
            backgroundColor: "#2E2B36",
            marginLeft: width * 0.25,
            marginRight: width * 0.25,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: width * 0.04,
              fontWeight: "bold",
              color: "white",
              padding: 10,
            }}
          >
            Book Your Pickup Now
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{ color: "#fff" }}>
        <Card />
      </View>
      {/* Membership */}
      <Membership />
      {/* Our Service */}
      <Ourservice />
      {/* For Query*/}
      <Forquery />
      {/* ReviewCard*/}
      <Reviewcard />
      {/* Referral Card*/}
      <Referral />
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
      <View style={{ color: "grey", height: 120 }}></View>
    </ScrollView>
  );
}

export default HomeScreen;
