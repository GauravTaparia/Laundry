import React from 'react'
import {
  Button,
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  Dimensions,
  ScrollView,
  TextInput,
  FlatList,
} from 'react-native'
import Icon from 'react-native-vector-icons/Ionicons'
import * as Animatable from 'react-native-animatable'
import Carosuel from '../navigation/Carosuel'

import Membership from '../navigation/Membership'
import Skillindia from '../navigation/Skillindia'
import Ourservice from '../navigation/Ourservice'
import Forquery from '../navigation/Forquery'
import Card from '../navigation/Card'
import Reviewcard from '../navigation/Reviewcard'
import Referral from '../navigation/Referral'

const { width } = Dimensions.get('window')
const height = width * 0.58

function HomeScreen({ navigation }) {
  return (
    <ScrollView>
      {/* SearchBar */}
      <View stle={{ flex: 1 }}>
        <View
          style={{
            height: 80,
            backgroundColor: '#000',
            justifyContent: 'center',
            paddingHorizontal: 10,
            marginTop: width * 0.07,
          }}
        >
          <Animatable.View
            animation='slideInRight'
            duration={500}
            style={{
              height: 50,
              backgroundColor: '#fff',
              flexDirection: 'row',
              padding: 5,
              alignItems: 'center',
              borderRadius: 5,
            }}
          >
            <Icon name='ios-search' style={{ fontSize: width * 0.04 }} />
            <TextInput
              placeholder='Search'
              style={{ fontSize: width * 0.04, marginLeft: 15 }}
            />
          </Animatable.View>
        </View>
      </View>
      {/* OfferWall Carosuel Component */}
      <View style={{ color: '#fff' }}>
        <Carosuel />
      </View>
      {/* Place your order button */}
      <View style={{ backgroundColor: '#fff' }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('Order')}
          style={{
            width: width * 0.5,
            borderRadius: 20,
            backgroundColor: '#e32f45',
            marginLeft: width * 0.25,
            marginRight: width * 0.25,
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize: width * 0.04,
              fontWeight: 'bold',
              color: 'white',
              padding: 10,
              textAlign: 'center',
            }}
          >
            Book Your Pickup Now
          </Text>
        </TouchableOpacity>
      </View>
      {/*Top Rated In Your Area*/}
      <Card />
      {/* Membership */}
      <Membership />
      {/* Our Service */}
      <Ourservice />
      {/* For Query*/}
      <Forquery />
      {/* ReviewCard*/}
      <Reviewcard />
      {/* Referral Card*/}
      <Referral />
      {/* Offer Image */}
      <View style={{ height: 100 }}>
        <Image
          source={require('../assets/3.jpg')}
          resizeMode='cover'
          style={{
            height: height * 0.6,
            width,
          }}
        />
      </View>
      {/* SkillIndia */}
      <Skillindia />
      <View style={{ color: 'grey', height: 120 }}></View>
    </ScrollView>
  )
}

export default HomeScreen
