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
const height = width * 0.58;

export default class Card extends Component {
  render() {
    return (
      <View
        style={{
          marginTop: 10,
          width,
          height: height * 0.9,
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
          marginTop: 10,
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
          Top Rated In Your Area
        </Text>
        <ScrollView
          pagingEnabled
          horizontal
          style={{
            width,
            height: height * 0.5,
            backgroundColor: "white",
            padding: 10,
          }}
          showsHorizontalScrollIndicator={false}
        >
          {/* Card 1 */}
          <TouchableOpacity
            style={{
              backgroundColor: "#2E2B36",
              width: width * 0.8,
              height: height * 0.5,
              borderRadius: 40,
              flexDirection: "row",
              marginLeft: width * 0.065,
            }}
          >
            <Image
              style={{
                borderRadius: 100,
                width: width * 0.25,
                height: height * 0.4,
                marginLeft: 10,
                marginTop: 10,
              }}
              source={require("/Users/gauravtaparia/Desktop/Laundry/assets/topratedcard.jpeg")}
            ></Image>
            <View style={{ margin: 10, flexDirection: "column" }}>
              <Text
                style={{
                  fontWeight: "700",
                  color: "white",
                  fontSize: width * 0.045,
                  marginBottom: 5,
                  marginTop: 5,
                }}
              >
                Gaurav Taparia
              </Text>
              <Text
                style={{
                  fontWeight: "700",
                  color: "white",
                  fontSize: width * 0.03,
                }}
              >
                Andheri (West)
              </Text>
            </View>
            <View style={{ width: width * 0.2, flexDirection: "row" }}>
              <Image
                style={{
                  width: width * 0.08,
                  height: height * 0.08,
                  marginTop: height * 0.07,
                }}
                resizeMode="contain"
                source={require("/Users/gauravtaparia/Desktop/Laundry/assets/star.png")}
              ></Image>
              <Text
                style={{
                  fontWeight: "700",
                  color: "white",
                  fontSize: width * 0.03,
                  marginTop: height * 0.08,
                  marginRight: width * 0.03,
                }}
              >
                5.0
              </Text>
            </View>
          </TouchableOpacity>
          {/* Card 2 */}
          <TouchableOpacity
            style={{
              backgroundColor: "#2E2B36",
              width: width * 0.8,
              height: height * 0.5,
              borderRadius: 40,
              flexDirection: "row",
              marginLeft: width * 0.065,
            }}
          >
            <Image
              style={{
                borderRadius: 100,
                width: width * 0.25,
                height: height * 0.4,
                marginLeft: 10,
                marginTop: 10,
              }}
              source={require("/Users/gauravtaparia/Desktop/Laundry/assets/topratedcard.jpeg")}
            ></Image>
            <View style={{ margin: 10, flexDirection: "column" }}>
              <Text
                style={{
                  fontWeight: "700",
                  color: "white",
                  fontSize: width * 0.045,
                  marginBottom: 5,
                  marginTop: 5,
                }}
              >
                Gaurav Taparia
              </Text>
              <Text
                style={{
                  fontWeight: "700",
                  color: "white",
                  fontSize: width * 0.03,
                }}
              >
                Andheri (West)
              </Text>
            </View>
            <View style={{ width: width * 0.2, flexDirection: "row" }}>
              <Image
                style={{
                  width: width * 0.08,
                  height: height * 0.08,
                  marginTop: height * 0.07,
                }}
                resizeMode="contain"
                source={require("/Users/gauravtaparia/Desktop/Laundry/assets/star.png")}
              ></Image>
              <Text
                style={{
                  fontWeight: "700",
                  color: "white",
                  fontSize: width * 0.03,
                  marginTop: height * 0.08,
                  marginRight: width * 0.03,
                }}
              >
                5.0
              </Text>
            </View>
          </TouchableOpacity>
          {/*Card 3*/}
          <TouchableOpacity
            style={{
              backgroundColor: "#2E2B36",
              width: width * 0.8,
              height: height * 0.5,
              borderRadius: 40,
              flexDirection: "row",
              marginLeft: width * 0.065,
            }}
          >
            <Image
              style={{
                borderRadius: 100,
                width: width * 0.25,
                height: height * 0.4,
                marginLeft: 10,
                marginTop: 10,
              }}
              source={require("/Users/gauravtaparia/Desktop/Laundry/assets/topratedcard.jpeg")}
            ></Image>
            <View style={{ margin: 10, flexDirection: "column" }}>
              <Text
                style={{
                  fontWeight: "700",
                  color: "white",
                  fontSize: width * 0.045,
                  marginBottom: 5,
                  marginTop: 5,
                }}
              >
                Gaurav Taparia
              </Text>
              <Text
                style={{
                  fontWeight: "700",
                  color: "white",
                  fontSize: width * 0.03,
                }}
              >
                Andheri (West)
              </Text>
            </View>
            <View style={{ width: width * 0.2, flexDirection: "row" }}>
              <Image
                style={{
                  width: width * 0.08,
                  height: height * 0.08,
                  marginTop: height * 0.07,
                }}
                resizeMode="contain"
                source={require("/Users/gauravtaparia/Desktop/Laundry/assets/star.png")}
              ></Image>
              <Text
                style={{
                  fontWeight: "700",
                  color: "white",
                  fontSize: width * 0.03,
                  marginTop: height * 0.08,
                  marginRight: width * 0.03,
                }}
              >
                5.0
              </Text>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    );
  }
}
