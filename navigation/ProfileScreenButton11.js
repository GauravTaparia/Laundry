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
export default function ProfileScreenButton10({ navigation }) {
  return (
    <View
      style={{
        paddingLeft: 0,
        paddingBottom: 10,
        paddingTop: 10,
        paddingRight: 10,
        marginTop: 10,
        backgroundColor: "white",

        flexDirection: "row",
      }}
    >
      <View
        style={{
          backgroundColor: "#C4C4C4",
          width: width * 0.3,
          paddingRight: 10,
          paddingTop: 10,
          paddingBottom: 10,
          borderBottomLeftRadius: 60,
          borderTopLeftRadius: 60,
          height: height * 0.3,
        }}
      >
        <Image
          resizeMode="contain"
          source={require("/Users/gauravtaparia/Desktop/Laundry/assets/terms-and-conditions.png")}
          style={{ width: width * 0.3, height: height * 0.2 }}
        />
      </View>
      <View
        style={{
          backgroundColor: "#2E2B36",
          width: width * 0.5,
          height: height * 0.3,
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            color: "white",
            fontSize: width * 0.05,
            fontWeight: "700",
            padding: 10,
          }}
        >
          Terms & Condition
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => navigation.navigate("AboutUs")}
        style={{
          backgroundColor: "#2E2B36",
          width: width * 0.2,
          height: height * 0.3,
          borderBottomRightRadius: 60,
          borderTopRightRadius: 60,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("/Users/gauravtaparia/Desktop/Laundry/assets/right-arrow.png")}
          style={{
            width: width * 0.1,
            height: height * 0.15,
          }}
        ></Image>
      </TouchableOpacity>
    </View>
  );
}
