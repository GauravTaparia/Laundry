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
} from 'react-native'
import ProfileScreenButton1 from '../navigation/ProfileScreenButton1'
import ProfileScreenButton2 from '../navigation/ProfileScreenButton2'
import ProfileScreenButton3 from '../navigation/ProfileScreenButton3'
import ProfileScreenButton4 from '../navigation/ProfileScreenButton4'
import ProfileScreenButton5 from '../navigation/ProfileScreenButton5'
import ProfileScreenButton6 from '../navigation/ProfileScreenButton6'
import ProfileScreenButton7 from '../navigation/ProfileScreenButton7'
import ProfileScreenButton8 from '../navigation/ProfileScreenButton8'
import ProfileScreenButton9 from '../navigation/ProfileScreenButton9'
import ProfileScreenButton10 from '../navigation/ProfileScreenButton10'

const { width } = Dimensions.get('window')
const height = width * 0.58
function ProfileScreenAfterLogin({ navigation }) {
  return (
    <ScrollView>
      <View>
        <View
          style={{
            backgroundColor: 'white',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 10,
          }}
        >
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              fontSize: width * 0.05,
              fontWeight: 'bold',
              marginTop: 10,
              marginBottom: 5,
            }}
          >
            Gaurav Taparia
          </Text>
          <Text
            style={{
              textAlign: 'center',
              color: 'black',
              fontSize: width * 0.05,
              fontWeight: 'bold',
              marginBottom: 10,
            }}
          >
            +91 7977729965
          </Text>
        </View>
        <ProfileScreenButton1 />
        <ProfileScreenButton2 />
        <ProfileScreenButton3 />
        <ProfileScreenButton4 />
        <ProfileScreenButton5 />
        <ProfileScreenButton6 />
        <ProfileScreenButton7 />
        <ProfileScreenButton8 />
        <ProfileScreenButton9 />
        <ProfileScreenButton10 />
        <View style={{ backgroundColor: 'white' }} />
      </View>
    </ScrollView>
  )
}

export default ProfileScreenAfterLogin
