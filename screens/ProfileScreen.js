import React from 'react'
import { View, Text, Image, Dimensions, ScrollView } from 'react-native'
import ProfileScreenButton1 from '../navigation/ProfileScreenButton1'
import ProfileScreenButton2 from '../navigation/ProfileScreenButton2'
import ProfileScreenButton3 from '../navigation/ProfileScreenButton3'

const { width } = Dimensions.get('window')
const height = width * 0.58
function ProfileScreen() {
  return (
    <ScrollView>
      <View>
        <ProfileScreenButton1 />
        <ProfileScreenButton2 />
        <ProfileScreenButton3 />
        <View
          style={{
            backgroundColor: 'white',
            flexDirection: 'column',
            marginBottom: 10,
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              fontSize: width * 0.06,
              fontWeight: '700',
              marginTop: 10,
              marginBottom: 10,
            }}
          >
            About Us
          </Text>
          <Text
            style={{
              color: '#bdb8b8',
              fontSize: width * 0.05,
              fontWeight: 'bold',
              marginBottom: 10,
              marginLeft: width * 0.01,
              marginRight: width * 0.01,
              textAlign: 'justify',
            }}
          >
            Our company strives to provide our users with excellent laundry
            service, overcoming the issues caused by the already existing
            network and also providing security & reliability for their
            expensive clothes.
          </Text>
          <Image
            source={require('/Users/patel/OneDrive/Desktop/Laundry-master/assets/enterprise.png')}
            resizeMode='cover'
            style={{
              height: height * 0.9,
              width: width * 0.525,
              marginLeft: 5,
              marginBottom: 5,
              marginTop: 5,
            }}
          />
        </View>
        <View style={{ backgroundColor: 'white' }}></View>
      </View>
    </ScrollView>
  )
}

export default ProfileScreen
