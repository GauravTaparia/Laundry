import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
} from "react-native";

const { width } = Dimensions.get("window");
const height = width * 0.58;
function AboutUsScreen({ navigation }) {
  return (
    <ScrollView>
      <View>
        <View
          style={{
            backgroundColor: "white",
            flexDirection: "column",
            marginBottom: 10,
            alignItems: "center",
            justifyContent: "center",
            marginTop: 10,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              color: "black",
              fontSize: width * 0.06,
              fontWeight: "700",
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            About Us
          </Text>
          <Text
            style={{
              color: "#bdb8b8",
              fontSize: width * 0.05,
              fontWeight: "bold",
              marginBottom: 10,
              marginLeft: width * 0.01,
              marginRight: width * 0.01,
              textAlign: "justify",
            }}
          >
            Our company strives to provide our users with excellent laundry
            service, overcoming the issues caused by the already existing
            network and also providing security & reliability for their
            expensive clothes.
          </Text>
          <Image
            source={require("/Users/gauravtaparia/Desktop/Laundry/assets/enterprise.png")}
            resizeMode="cover"
            style={{
              height: height * 0.9,
              width: width * 0.525,
              marginLeft: 5,
              marginBottom: 5,
              marginTop: 5,
            }}
          />
        </View>
        <View style={{ backgroundColor: "#fff" }}>
          <TouchableOpacity
            onPress={() => navigation.navigate("ProfileScreenAfterLogin")}
            style={{
              width: width * 0.5,
              borderRadius: 20,
              backgroundColor: "#e32f45",
              marginLeft: width * 0.25,
              marginRight: width * 0.25,
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontSize: width * 0.042,
                fontWeight: "bold",
                color: "white",
                padding: 10,
              }}
            >
              Back To My Profile
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

export default AboutUsScreen;
