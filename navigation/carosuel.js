import React from "react";
import { View, Image, ScrollView, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const height = width * 0.58;

const images = [
  "/Users/gauravtaparia/Desktop/Laundry/assets/1.jpg",
  "/Users/gauravtaparia/Desktop/Laundry/assets/2.jpg",
  "/Users/gauravtaparia/Desktop/Laundry/assets/3.jpg",
];

export default class Carosuel extends React.Component {
  render() {
    return (
      <View style={{ marginTop: 10, marginBottom: 10, width, height }}>
        <ScrollView
          pagingEnabled
          horizontal
          style={{ width, height }}
          showsHorizontalScrollIndicator={false}
        >
          {images.map((imageurl, index) => (
            <View
              style={{
                backgroundColor: "white",
                paddingLeft: 10,
                paddingTop: 10,
                height: 400,
              }}
              key={index}
            >
              <Image
                key={index}
                source={{ uri: imageurl }}
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
          ))}
        </ScrollView>
      </View>
    );
  }
}
