import React from "react";
import {
  View,
  Text,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");
const height = width * 0.58;

function Skillindia() {
  return (
    <View
      style={{
        backgroundColor: "white",
        flexDirection: "row",
        marginTop: height * 0.23,
      }}
    >
      <Image
        source={require("/Users/gauravtaparia/Desktop/Laundry/assets/Skill_India.png")}
        resizeMode="contain"
        style={{
          width: width * 0.4,
          height: height * 0.8,
          marginLeft: width * 0.01,
          marginRight: width * 0.01,
        }}
      />
      <View
        style={{
          backgroundColor: "#2E2B36",
          width: width * 0.6,
          flexDirection: "column",
        }}
      >
        <Text
          style={{
            fontWeight: "700",
            fontSize: 19,
            color: "white",
            margin: width * 0.01,
            justifyContent: "center",
            textAlign: "center",
          }}
        >
          Highly skilled professional under a resonable rate
        </Text>
        <View style={{ height: 10 }}></View>
        <Text
          style={{
            fontWeight: "700",
            fontSize: width * 0.03,
            color: "#bdb8b8",
            justifyContent: "center",
            marginLeft: width * 0.01,
            marginRight: width * 0.01,
            textAlign: "center",
          }}
        >
          We at (Company Name) believe in customer satisfaction. For us,
          delievering 5-star service is of umpteen importance.
        </Text>
        <View style={{ height: 10 }}></View>
        <TouchableOpacity
          style={{
            backgroundColor: "white",
            borderRadius: 10,
            width: width * 0.5,
            height: height * 0.12,
            margin: 15,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text style={{ fontWeight: "700", fontSize: width * 0.04 }}>
            Book Your Pickup Now
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Skillindia;
