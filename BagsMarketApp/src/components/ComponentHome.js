import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from '../themes/styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon5 from 'react-native-vector-icons/FontAwesome5'
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const ComponentHome = ({ navigation }) => {
    console.log("🚀 😍 🎶 ✌ ~ file: ComponentHome.js:12 ~ ComponentHome ~ ComponentHome:", ComponentHome)

    return (
        <View style={[styles.flex_1, {
            marginTop: 23,
            backgroundColor: '#fff',
            padding: 10,
        }]}  >
            <View style={[styles.flex_6, {
            }]} >
                {/* menu */}
                <View style={[styles.row, { justifyContent: 'space-between', marginTop: 15, }]} >
                    <IconMaterialCommunityIcons name="menu" color="#000" size={28} />
                    <View style={[styles.row ,{}]} >
                        <Icon5 style={[ ,{paddingHorizontal: 10,}]}  name="shopping-bag" color="#000" size={28} />

                        <Icon style={[ ,{paddingHorizontal: 10, }]} name="user-o" color="#000" size={28} />

                    </View>
                </View>

                {/* Phông quảng cáo  */}
                <View style={[ styles.centerView, styles.flex_1, {}]} >
                    <Image  style={[, {
                        width: "90%", height: "80%",
                        borderRadius: 15,
                    }]} source={require('../images/img_Home_1.png')}  />
                </View>

                {/* Search  */}
                

            </View>
            {/*  */}

            <View style={[styles.flex_1, {
                backgroundColor: '#f00'
            }]} >

            </View>
            {/*  */}

            <View style={[styles.flex_6, {
                backgroundColor: '#0ff'
            }]} >

            </View>


            {/* <Text>ComponentHome</Text> */}
        </View>
    )
}

export default ComponentHome;

//           style={[ ,{}]}           
