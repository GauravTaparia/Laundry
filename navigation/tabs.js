import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen.js";
import OrderScreen from "../screens/OrderScreen.js";
import ProfileScreen from "../screens/ProfileScreen.js";
import RewardScreen from "../screens/RewardScreen.js";
import RecentOrderScreen from "../screens/RecentOrderScreen.js";
import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();

const CustomTabBarButton = ({ children, onPress }) => (
  <TouchableOpacity
    onPress={onPress}
    style={{
      top: -30,
      justifyContent: "center",
      alignItems: "center",
      ...style.shadow,
    }}
  >
    <View
      style={{
        width: 70,
        height: 70,
        borderRadius: 35,
        backgroundColor: "#e32f45",
      }}
    >
      {children}
    </View>
  </TouchableOpacity>
);

const Tabs = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarStyle: [
          {
            position: "absolute",
            bottom: 25,
            left: 20,
            right: 20,
            elevation: 0,
            backgroundColor: "#fff",
            borderRadius: 15,
            height: 90,
            ...style.shadow,
          },
          null,
        ],
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                top: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("/Users/gauravtaparia/Desktop/Laundry/assets/home.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              ></Image>
              <Text
                style={{
                  fontSize: 13,
                }}
              >
                Home
              </Text>
            </View>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="PastOrder"
        component={RecentOrderScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                top: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("/Users/gauravtaparia/Desktop/Laundry/assets/PastOrder.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              ></Image>
              <Text
                style={{
                  fontSize: 13,
                }}
              >
                Past Order
              </Text>
            </View>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="NewOrder"
        component={OrderScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <Image
              source={require("/Users/gauravtaparia/Desktop/Laundry/assets/NewOrder.png")}
              resizeMode="contain"
              style={{
                width: 30,
                height: 30,
                tintColor: "#fff",
              }}
            />
          ),
          tabBarButton: (props) => <CustomTabBarButton {...props} />,
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Reward"
        component={RewardScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                top: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("/Users/gauravtaparia/Desktop/Laundry/assets/Rewards.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              ></Image>
              <Text
                style={{
                  fontSize: 13,
                }}
              >
                Rewards
              </Text>
            </View>
          ),
        }}
      ></Tab.Screen>
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ focused }) => (
            <View
              style={{
                top: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                source={require("/Users/gauravtaparia/Desktop/Laundry/assets/Profile.png")}
                resizeMode="contain"
                style={{
                  width: 25,
                  height: 25,
                  tintColor: focused ? "#e32f45" : "#748c94",
                }}
              ></Image>
              <Text
                style={{
                  fontSize: 13,
                }}
              >
                Profile
              </Text>
            </View>
          ),
        }}
      ></Tab.Screen>
    </Tab.Navigator>
  );
};

const style = StyleSheet.create({
  shadow: {
    shadowColor: "#7F5DF0",
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.5,
    elevation: 5,
  },
});

export default Tabs;
