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
const height = width * 0.58;
function Referral() {
  return (
    <View
      style={{
        backgroundColor: "#fff",
        marginBottom: 10,
        marginTop: 10,
        flexDirection: "row",
      }}
    >
      <Image
        source={require("/Users/gauravtaparia/Desktop/Laundry/assets/referral_man.jpg")}
        resizeMode="cover"
        style={{
          height: height * 0.8,
          width: width * 0.4,
          borderTopLeftRadius: 10,
          borderBottomLeftRadius: 10,
          marginLeft: 5,
          marginBottom: 5,
          marginTop: 5,
        }}
      />
      <View
        style={{
          backgroundColor: "#2E2B36",
          width: width * 0.58,
          borderTopRightRadius: 10,
          borderBottomRightRadius: 10,
          marginRight: 5,
          marginBottom: 5,
          marginTop: 5,
          flexDirection: "column",
        }}
      >
        <Text
          style={{
            fontWeight: "700",
            fontSize: 26,
            color: "white",
            margin: 10,
          }}
        >
          Become Our Member
        </Text>
        <Text
          style={{
            fontWeight: "700",
            fontSize: 13,
            color: "#bdb8b8",
            justifyContent: "center",
            marginLeft: 10,
            marginRight: 10,
            textAlign: "justify",
          }}
        >
          Why book everytime , When we can schedule it for you automatically
          that too with exclusive discounts.
        </Text>
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
          <Text style={{ fontWeight: "700", fontSize: 17 }}>
            View Membership Plans
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default Referral;
