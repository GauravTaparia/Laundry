import React from 'react'
import {
  View,
  Text,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
  Dimensions,
} from 'react-native'

const { width } = Dimensions.get('window')
const height = width * 0.58
export default function ProfileScreenButton3() {
  return (
    <View
      style={{
        paddingLeft: 0,
        paddingBottom: 10,
        paddingRight: 10,
        marginTop: 10,
        backgroundColor: 'white',

        flexDirection: 'row',
      }}
    >
      <View
        style={{
          backgroundColor: '#C4C4C4',
          width: width * 0.3,
          paddingRight: 10,
          paddingTop: 10,
          paddingBottom: 10,
          borderBottomLeftRadius: 60,
          borderTopLeftRadius: 60,
          height: height * 0.4,
        }}
      >
        <Image
          resizeMode='contain'
          source={require('/Users/patel/OneDrive/Desktop/Laundry-master/assets/share.png')}
          style={{ width: width * 0.3, height: height * 0.3 }}
        />
      </View>
      <View
        style={{
          backgroundColor: '#2E2B36',
          width: width * 0.5,
          height: height * 0.4,
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text
          style={{
            textAlign: 'left',
            color: 'white',
            fontSize: 20,
            fontWeight: '700',
            padding: 10,
          }}
        >
          Join Our Service Force
        </Text>
      </View>
      <TouchableOpacity
        style={{
          backgroundColor: '#2E2B36',
          width: width * 0.2,
          height: height * 0.4,
          borderBottomRightRadius: 60,
          borderTopRightRadius: 60,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Image
          source={require('/Users/patel/OneDrive/Desktop/Laundry-master/assets/right-arrow.png')}
          style={{
            width: width * 0.1,
            height: height * 0.15,
          }}
        ></Image>
      </TouchableOpacity>
    </View>
  )
}
