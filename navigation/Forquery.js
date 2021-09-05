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

function Forquery() {
  return (
    <View
      style={{
        backgroundColor: "white",
        flexDirection: "column",
        marginBottom: 10,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          color: "black",
          fontSize: 30,
          fontWeight: "700",
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        For Queries
      </Text>
      {/*Card 1*/}
      <View
        style={{
          paddingLeft: 10,
          paddingBottom: 10,
          paddingRight: 10,

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
            height: height * 0.4,
          }}
        >
          <Image
            resizeMode="contain"
            source={require("/Users/gauravtaparia/Desktop/Laundry/assets/chatbot.png")}
            style={{ width: width * 0.3, height: height * 0.3 }}
          />
        </View>
        <View
          style={{
            backgroundColor: "#2E2B36",
            width: width * 0.5,
            height: height * 0.4,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              textAlign: "left",
              color: "white",
              fontSize: 20,
              fontWeight: "700",
              padding: 10,
            }}
          >
            24X7 Online Chat Support
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#2E2B36",
            width: width * 0.2,
            height: height * 0.4,
            borderBottomRightRadius: 80,
            borderTopRightRadius: 80,
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
      {/*Card 2*/}
      <View
        style={{
          paddingLeft: 10,
          paddingBottom: 10,
          paddingRight: 10,

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
            height: height * 0.4,
          }}
        >
          <Image
            resizeMode="contain"
            source={require("/Users/gauravtaparia/Desktop/Laundry/assets/communicate.png")}
            style={{ width: width * 0.3, height: height * 0.3 }}
          />
        </View>
        <View
          style={{
            backgroundColor: "#2E2B36",
            width: width * 0.5,
            height: height * 0.4,
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              textAlign: "left",
              color: "white",
              fontSize: 20,
              fontWeight: "700",
              padding: 10,
            }}
          >
            Customer Care Call & Mail Support
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#2E2B36",
            width: width * 0.2,
            height: height * 0.4,
            borderBottomRightRadius: 80,
            borderTopRightRadius: 80,
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
    </View>
  );
}

export default Forquery;
