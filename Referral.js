
 import React from 'react'; 
 import { View, Text, Image, Dimensions, ScrollView, StyleSheet, css } from 'react-native'
 import { TouchableOpacity } from 'react-native'
 import Tabs from "C:/Users/Admin/React/Laundry/navigation/tabs";

 const { width } = Dimensions.get('window')
 const height = width * 0.58
 function Referral() {
   return (
     <ScrollView style={{backgroundColor: 'white'}}>
    
 
       <View style={{backgroundColor: 'white'}}>

         <View
           style={{
             backgroundColor: 'white',
             
             marginBottom: 0,
             alignItems: 'center',
             justifyContent: 'center',
             marginTop: height*0.3,
           }}
         >
           <Text
             style={{
               textAlign: 'center',
               color: 'black',
               fontSize: 27,
               fontWeight: '700',
               marginTop: 0,
               marginBottom: height*0.1,
               flex:1,
               flexWrap: 'wrap',
               flexDirection:'row',
               alignItems:'center',
               justifyContent:'center'
             }}
           >
             Refer & Get upto Rs.5000
           </Text>
          <View style={{
             flexDirection: 'row',
              borderBottomColor: '#E9E8E8',
              borderBottomWidth: 10,
    
           }}>
           <Text style={{fontSize: 18,fontWeight: '700', marginLeft:width*0.07,flex: 1, alignItems:'center',
               justifyContent:'center', flexWrap: 'wrap', flexDirection: "row",marginBottom: height*0.2}}>
             Refer your friends & get 50 credits after
              they place their first order, also they get 50 credits for using your referral code on their first order.
           </Text>
           
    
           <Image
             source={require('C:/Users/Admin/React/Laundry/assets/giftbox_1.png')}
             resizeMode='cover'
             style={{
               height: height*0.4,
               width: width*0.25,
               marginLeft: 0,
               marginRight: width*0.05,
               marginBottom: 0,
               backgroundColor: 'black',
               marginTop: 0,
               borderRadius: 200
               
               
             }}
             
            />
          </View>
           



<Text
             style={{
               textAlign: 'center',
               color: 'black',
               fontSize: 27,
               fontWeight: '700',
               marginTop: height*0.2,
               marginBottom: height*0.09,
               flex:1,
               flexDirection:'row',
               alignItems:'center',
               justifyContent:'center'
             }}
           >
             Refer Through
           </Text>
           <View style={{
             flexDirection: 'row',marginBottom: height*0.09,
             
           }}>
           <TouchableOpacity activeOpacity={0.5}>
             <Image source={require('C:/Users/Admin/React/Laundry/assets/facebook.png')}
             style={{
              height: height*0.2,
              width: width*0.12,
              marginRight: height*0.09,
              marginBottom: height*0.09,
              marginTop: height*0.09,
              borderRadius: 200
              
            }}/>
             <View/>          
           </TouchableOpacity>


           <TouchableOpacity activeOpacity={0.5}>
             <Image source={require('C:/Users/Admin/React/Laundry/assets/90b215ea4a3a4a6664eb4dd558571d3d.png')}
             style={{
              height: height*0.2,
              width: width*0.12,
              marginLeft: height*0.09,
              marginRight: height*0.09,
              marginBottom: height*0.09,
              marginTop: height*0.09,
              borderRadius: 200
              
            }}/>
             <View/>          
           </TouchableOpacity>

           <TouchableOpacity activeOpacity={0.5}>
             <Image source={require('C:/Users/Admin/React/Laundry/assets/checklistt.png')}
             style={{
              height: height*0.2,
              width: width*0.12,
              marginLeft: height*0.09,
              marginBottom: height*0.09,
              marginTop: height*0.09,
              borderRadius: 0
              
            }}/>
             <View/>          
           </TouchableOpacity>
           </View>
           <View style={{ borderBottomColor: '#E9E8E8',
              borderBottomWidth: 10}}><Text>                                                                                                               </Text></View>

           <Text
             style={{
               textAlign: 'center',
               color: 'black',
               fontSize: 27,
               fontWeight: '700',
               marginTop: height*0.2,
               marginBottom: height*0.1,
               flex:1,
               flexDirection:'row',
               alignItems:'center',
               justifyContent:'center'
             }}
           >
             Current Referrals
           </Text>
           <View style={{
             flexDirection: 'row'
           }}>
           
           <View style={{marginTop: height*0.05, marginRight: width*0.05}}>
           <Text style={{fontSize: 22, marginBottom: height*0.1, fontWeight: '700'}}>Total Credits: 0</Text>
           <Text style={{fontSize: 22, fontWeight: '700'}}>Total Numbers: 0</Text>
           </View>

           <Image
             source={require('C:/Users/Admin/React/Laundry/assets/wallet.png')}
             resizeMode='cover'
             style={{
               height: height*0.4,
               width: height*0.4,
               marginLeft: width*0.05,
               marginBottom: height*0.05,
              
               marginTop: 0,
               borderRadius: 0
               
             }}
           />
          </View>
         </View>
         <View style={{ backgroundColor: 'white' }}></View>
       </View>

       

     </ScrollView>
     
   )
 }
 
 
 
export default Referral


