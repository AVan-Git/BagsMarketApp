import { View, Text, StatusBar, ImageBackground, TouchableOpacity } from 'react-native'
import React from 'react'

import styles from '../themes/styles'

const ComponentStart = ({ navigation }) => {
  // console.log("🚀 ~ file: ComponentStart.js:7 ~ ComponentStart ~ navigation:", navigation)
  return (
    <View style={[styles.flex_1, {
      backgroundColor: '#f0f0f0',
      marginTop: 23,
      marginLeft: -90,
      fontSize: 15,
    }]}>
      <ImageBackground style={[styles.flex_1, {}]} source={require('../images/img_Start_1.png')}   >

        <View style={[styles.flex_3, {}]}   ></View>
        <View style={[styles.flex_2, {
          // backgroundColor: '#F00',
          marginLeft: 90,
        }]}   >
          <Text style={[, { textAlign: 'center', fontSize: 25, color: '#fff', fontWeight: 'bold', textTransform: 'uppercase' }]} > take your style  </Text>
          <Text style={[, { textAlign: 'center', fontSize: 25, color: '#fff', fontWeight: 'bold', textTransform: 'uppercase' }]} > everywhere with us  </Text>
          <Text style={[, { textAlign: 'center', paddingHorizontal: 40, marginVertical: 20 }]} >More than a thousand od out bags are available for your luxury </Text>

          <View style={[, {
            borderRadius: 30, marginHorizontal: "5%", marginTop: 20,
            backgroundColor: '#c4c4c4'
          }]} >
            <TouchableOpacity style={[styles.row, {
              alignItems: 'center', justifyContent: 'space-between', margin: 8,
              backgroundColor: '#69ff69',
              borderRadius: 30,
            }]}
              onPress={() => navigation.navigate("ComponentHome")}
            >

              <Text style={[, {
                fontSize: 18, backgroundColor: '#fff',
                borderRadius: 30,
                padding: 12,
                paddingHorizontal: 20,
              }]}  >Start Shopping</Text>
              <Text style={[, { fontSize: 20, paddingHorizontal: 20, }]} > &gt; &gt; &gt;</Text>
            </TouchableOpacity>
          </View>

        </View>

      </ImageBackground>

      {/* <Text>ComponentStart</Text> */}
    </View>
  )
}

export default ComponentStart;

//           style={[ ,{}]}           