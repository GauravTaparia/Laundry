import React from "react";
import { Button, View, Dimensions, ScrollView } from "react-native";

const { width } = Dimensions.get("window");

function OrderButton() {
  return (
    <View style={{ backgroundColor: "#fff" }}>
      <View
        style={{
          width: width * 0.5,
          borderRadius: 20,
          backgroundColor: "#e32f45",
          marginLeft: width * 0.25,
          marginRight: width * 0.25,
          alignItems: "center",
        }}
      >
        <Button title="Book Your Pickup Now" color="#fff" />
      </View>
    </View>
  );
}

export default OrderButton;
