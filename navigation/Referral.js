import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  Dimensions,
} from "react-native";

const { width } = Dimensions.get("window");
const height = width * 0.7;

function Referral() {
  return (
    <View
      style={{
        width: width * 0.4,
        height: height * 0.6,
        marginBottom: 10,
        flexDirection: "row",
      }}
    >
      <View
        style={{
          width: width * 0.3,
          height: height * 0.6,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          resizeMode="contain"
          source={require("/Users/gauravtaparia/Desktop/Laundry/assets/referral.png")}
          style={{ width: width * 0.4, height: height * 0.4 }}
        />
      </View>
      <View
        style={{
          width: width * 0.5,
          height: height * 0.6,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#2E2B36",
          flexDirection: "column",
          padding: 10,
        }}
      >
        <Text
          style={{
            fontWeight: "700",
            fontSize: width * 0.05,
            color: "white",
            marginBottom: 10,
          }}
        >
          Help your friends protect their clothes{" "}
        </Text>
        <Text
          style={{
            color: "#BDB8B8",
            fontWeight: "700",
            fontSize: width * 0.03,
            marginBottom: 10,
            marginLeft: 5,
          }}
        >
          Refer your friends and earn great rewards upto Rs.5,000.
        </Text>
      </View>
      <TouchableOpacity
        style={{
          width: width * 0.2,
          height: height * 0.6,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#2E2B36",
        }}
      >
        <Image
          resizeMode="contain"
          source={require("/Users/gauravtaparia/Desktop/Laundry/assets/right-arrow.png")}
          style={{ width: width * 0.2, height: height * 0.15 }}
        />
      </TouchableOpacity>
    </View>
  );
}

export default Referral;
