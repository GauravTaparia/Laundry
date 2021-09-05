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

function Ourservice() {
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
        Our Services
      </Text>
      {/*Card 1  */}
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
            borderBottomLeftRadius: 20,
            borderTopLeftRadius: 20,
          }}
        >
          <Image
            resizeMode="contain"
            source={require("/Users/gauravtaparia/Desktop/Laundry/assets/dry.png")}
            style={{ width: width * 0.3, height: height * 0.4 }}
          />
        </View>
        <View
          style={{
            backgroundColor: "#2E2B36",
            width: width * 0.5,
            height: height * 0.5,
            flexDirection: "column",
          }}
        >
          <Text
            style={{
              textAlign: "left",
              color: "white",
              fontSize: 18,
              fontWeight: "700",
              padding: 10,
            }}
          >
            Garment Dry-Cleaning Service
          </Text>
          <Text
            style={{
              textAlign: "left",
              color: "#BDB8B8",
              fontSize: 15,
              fontWeight: "700",
              paddingLeft: 10,
            }}
          >
            Get your premium clothes dry-cleaned by our experts
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#2E2B36",
            width: width * 0.15,
            height: height * 0.5,
            borderBottomRightRadius: 20,
            borderTopRightRadius: 20,
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
      {/*Card 2  */}
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
            borderBottomLeftRadius: 20,
            borderTopLeftRadius: 20,
          }}
        >
          <Image
            resizeMode="contain"
            source={require("/Users/gauravtaparia/Desktop/Laundry/assets/ironing-board.png")}
            style={{ width: width * 0.3, height: height * 0.4 }}
          />
        </View>
        <View
          style={{
            backgroundColor: "#2E2B36",
            width: width * 0.5,
            height: height * 0.5,
            flexDirection: "column",
          }}
        >
          <Text
            style={{
              textAlign: "left",
              color: "white",
              fontSize: 18,
              fontWeight: "700",
              padding: 10,
            }}
          >
            Ironing & Washing Service
          </Text>
          <Text
            style={{
              textAlign: "left",
              color: "#BDB8B8",
              fontSize: 15,
              fontWeight: "700",
              paddingLeft: 10,
            }}
          >
            Get your clothes washed and ironed by our experts
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#2E2B36",
            width: width * 0.15,
            height: height * 0.5,
            borderBottomRightRadius: 20,
            borderTopRightRadius: 20,
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
      {/*Card 3  */}
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
            borderBottomLeftRadius: 20,
            borderTopLeftRadius: 20,
          }}
        >
          <Image
            resizeMode="contain"
            source={require("/Users/gauravtaparia/Desktop/Laundry/assets/sneakers.png")}
            style={{ width: width * 0.3, height: height * 0.4 }}
          />
        </View>
        <View
          style={{
            backgroundColor: "#2E2B36",
            width: width * 0.5,
            height: height * 0.5,
            flexDirection: "column",
          }}
        >
          <Text
            style={{
              textAlign: "left",
              color: "white",
              fontSize: 18,
              fontWeight: "700",
              padding: 10,
            }}
          >
            Shoe & Bag Cleaning Service
          </Text>
          <Text
            style={{
              textAlign: "left",
              color: "#BDB8B8",
              fontSize: 15,
              fontWeight: "700",
              paddingLeft: 10,
            }}
          >
            Get your accessories dry-cleaned by our experts
          </Text>
        </View>
        <TouchableOpacity
          style={{
            backgroundColor: "#2E2B36",
            width: width * 0.15,
            height: height * 0.5,
            borderBottomRightRadius: 20,
            borderTopRightRadius: 20,
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

export default Ourservice;
