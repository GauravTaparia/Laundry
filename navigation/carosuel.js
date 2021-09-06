import React from "react";
import { View, Image, ScrollView, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const height = width * 0.58;

export default class Carosuel extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 10, marginBottom: 10, width, height }}>
        <ScrollView
          pagingEnabled
          horizontal
          style={{ width: width, height: height }}
          showsHorizontalScrollIndicator={false}
        >
          <View
            style={{
              backgroundColor: "white",
              paddingLeft: 10,
              paddingTop: 10,
              height: 400,
            }}
          >
            <Image
              source={require("/Users/gauravtaparia/Desktop/Laundry/assets/1.jpg")}
              style={{
                width: width * 0.9,
                height: height * 0.9,
                resizeMode: "cover",
                borderRadius: 35,

                alignItems: "center",
                justifyContent: "center",
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: "white",
              paddingLeft: 10,
              paddingTop: 10,
              height: 400,
            }}
          >
            <Image
              source={require("/Users/gauravtaparia/Desktop/Laundry/assets/2.jpg")}
              style={{
                width: width * 0.9,
                height: height * 0.9,
                resizeMode: "cover",
                borderRadius: 35,

                alignItems: "center",
                justifyContent: "center",
              }}
            />
          </View>
          <View
            style={{
              backgroundColor: "white",
              paddingLeft: 10,
              paddingTop: 10,
              height: 400,
            }}
          >
            <Image
              source={require("/Users/gauravtaparia/Desktop/Laundry/assets/3.jpg")}
              style={{
                width: width * 0.9,
                height: height * 0.9,
                resizeMode: "cover",
                borderRadius: 35,

                alignItems: "center",
                justifyContent: "center",
              }}
            />
          </View>
        </ScrollView>
      </View>
    );
  }
}
