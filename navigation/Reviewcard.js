import React from "react";
import { Component } from "react";
import {
  View,
  Button,
  Text,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
} from "react-native";

const { width } = Dimensions.get("window");
const height = width * 0.7;
function Reviewcard() {
  return (
    <View
      style={{
        width,
        height: height,
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",

        marginBottom: 10,
        backgroundColor: "white",
      }}
    >
      <Text
        style={{
          textAlign: "center",
          color: "black",
          fontSize: width * 0.07,
          fontWeight: "700",
          marginTop: 10,
          marginBottom: 10,
        }}
      >
        Customer Reviews
      </Text>
      <ScrollView
        pagingEnabled
        horizontal
        style={{
          width,
          height: height * 0.6,
          backgroundColor: "white",
          padding: 10,
        }}
        showsHorizontalScrollIndicator={false}
      >
        {/* Review Card 1 */}
        <TouchableOpacity
          style={{
            backgroundColor: "#C4C4C4",
            width: width * 0.8,
            height: height * 0.6,
            borderRadius: 40,
            flexDirection: "row",
            marginLeft: width * 0.065,
          }}
        >
          <View
            style={{
              width: width * 0.3,
              backgroundColor: "#2E2B36",
              borderBottomLeftRadius: 40,
              borderTopLeftRadius: 40,
              height: height * 0.6,
            }}
          >
            <Image
              style={{
                borderRadius: 100,
                width: width * 0.25,
                height: height * 0.4,
                marginLeft: 10,
                marginTop: height * 0.1,
              }}
              source={require("/Users/gauravtaparia/Desktop/Laundry/assets/topratedcard.jpeg")}
            ></Image>
          </View>
          <View
            style={{
              margin: 15,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontWeight: "700",
                color: "black",
                fontSize: width * 0.06,
                width: width * 0.4,

                textAlign: "left",
              }}
            >
              "
            </Text>
            <Text
              style={{
                fontWeight: "700",
                color: "black",
                fontSize: width * 0.04,
                width: width * 0.4,
              }}
            >
              Punctual, polite and delivered a professional & satisfactory
              service
            </Text>
            <Text
              style={{
                fontWeight: "700",
                color: "black",
                fontSize: width * 0.06,
                width: width * 0.4,

                textAlign: "right",
              }}
            >
              "
            </Text>
          </View>
        </TouchableOpacity>
        {/* Review Card 2 */}
        <TouchableOpacity
          style={{
            backgroundColor: "#C4C4C4",
            width: width * 0.8,
            height: height * 0.6,
            borderRadius: 40,
            flexDirection: "row",
            marginLeft: width * 0.065,
          }}
        >
          <View
            style={{
              width: width * 0.3,
              backgroundColor: "#2E2B36",
              borderBottomLeftRadius: 40,
              borderTopLeftRadius: 40,
              height: height * 0.6,
            }}
          >
            <Image
              style={{
                borderRadius: 100,
                width: width * 0.25,
                height: height * 0.4,
                marginLeft: 10,
                marginTop: height * 0.1,
              }}
              source={require("/Users/gauravtaparia/Desktop/Laundry/assets/topratedcard.jpeg")}
            ></Image>
          </View>
          <View
            style={{
              margin: 15,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontWeight: "700",
                color: "black",
                fontSize: width * 0.06,
                width: width * 0.4,

                textAlign: "left",
              }}
            >
              "
            </Text>
            <Text
              style={{
                fontWeight: "700",
                color: "black",
                fontSize: width * 0.04,
                width: width * 0.4,
              }}
            >
              Punctual, polite and delivered a professional & satisfactory
              service
            </Text>
            <Text
              style={{
                fontWeight: "700",
                color: "black",
                fontSize: width * 0.06,
                width: width * 0.4,

                textAlign: "right",
              }}
            >
              "
            </Text>
          </View>
        </TouchableOpacity>
        {/* Review Card 3 */}
        <TouchableOpacity
          style={{
            backgroundColor: "#C4C4C4",
            width: width * 0.8,
            height: height * 0.6,
            borderRadius: 40,
            flexDirection: "row",
            marginLeft: width * 0.065,
          }}
        >
          <View
            style={{
              width: width * 0.3,
              backgroundColor: "#2E2B36",
              borderBottomLeftRadius: 40,
              borderTopLeftRadius: 40,
              height: height * 0.6,
            }}
          >
            <Image
              style={{
                borderRadius: 100,
                width: width * 0.25,
                height: height * 0.4,
                marginLeft: 10,
                marginTop: height * 0.1,
              }}
              source={require("/Users/gauravtaparia/Desktop/Laundry/assets/topratedcard.jpeg")}
            ></Image>
          </View>
          <View
            style={{
              margin: 15,
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                fontWeight: "700",
                color: "black",
                fontSize: width * 0.06,
                width: width * 0.4,

                textAlign: "left",
              }}
            >
              "
            </Text>
            <Text
              style={{
                fontWeight: "700",
                color: "black",
                fontSize: width * 0.04,
                width: width * 0.4,
              }}
            >
              Punctual, polite and delivered a professional & satisfactory
              service
            </Text>
            <Text
              style={{
                fontWeight: "700",
                color: "black",
                fontSize: width * 0.06,
                width: width * 0.4,

                textAlign: "right",
              }}
            >
              "
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

export default Reviewcard;
