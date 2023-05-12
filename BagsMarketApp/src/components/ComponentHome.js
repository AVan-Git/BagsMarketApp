import { View, Text, Image, TextInput, StyleSheet, FlatList } from 'react-native'
import React, { useState } from 'react'
import styles from '../themes/styles'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon5 from 'react-native-vector-icons/FontAwesome5'
import IconMaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import datas from '../databases/database'

let time = new Date();

const ComponentHome = ({ navigation }) => {
    console.log("🚀 😍 🎶 ✌ ~ file: ComponentHome.js:12 ~ ComponentHome ~", `${time.getHours()}:${time.getMinutes()}`)

    const [listBag, setListBag] = useState(datas);


    // renderBag
    let renderBag = ({ item }) => {
        return (
            <View style={[, {
                backgroundColor: '#fff', width: 165, maxHeight: 220,
                marginRight: 5, marginBottom: 10, 
                borderWidth: 1, borderRadius: 10, borderColor: '#8c8c8c'
            }]}  >
                <Image style={[, { borderRadius: 10, width: '100%', height: 150, }]} source={item.img} />
                <Text style={[, { fontSize: 15, fontWeight: '600', paddingHorizontal: 15, }]} >{item.name}</Text>
                <Text style={[, { fontSize: 15, paddingHorizontal: 15, }]} >$ {item.price}.00</Text>
            </View>
        )
    }

    return (
        <View style={[styles.flex_1, {
            marginTop: 23,
            backgroundColor: '#fff',
            padding: 10,
        }]}  >
            <View style={[styles.flex_6, {
                // backgroundColor: '#0f0'
            }]} >
                {/* menu */}
                <View style={[styles.row, { justifyContent: 'space-between', marginTop: 15, }]} >
                    <IconMaterialCommunityIcons name="menu" color="#000" size={28} />
                    <View style={[styles.row, {}]} >
                        <Icon5 style={[, { paddingHorizontal: 10, }]} name="shopping-bag" color="#000" size={28} />

                        <Icon style={[, { paddingHorizontal: 10, }]} name="user-o" color="#000" size={28} />

                    </View>
                </View>

                {/* Phông quảng cáo  */}
                <View style={[styles.centerView, styles.flex_1, {}]} >
                    <Image style={[, {
                        width: "100%", height: "90%",
                        borderRadius: 15,
                    }]} source={require('../images/img_Home_1.png')} />
                </View>

                {/* Search  */}
                <View style={[styles.row, {
                    backgroundColor: '#f7f7f7',
                    padding: 10,
                    marginBottom: 10,
                    borderRadius: 10,
                }]} >
                    <Icon style={[, {}]} name='search' size={25} color={'#000'} />
                    <TextInput style={[, { paddingLeft: 10, fontSize: 16 }]} placeholder='Search bag...' />

                </View>

            </View>
            {/*  */}

            <View style={[styles.flex_1, styles.row, {
                // backgroundColor: '#f00',
                // paddingVertical: 10,
            }]} >
                {/* navbar */}
                <Text style={[styles.navbar, styles.navbar_show, {}]}  >dior</Text>
                <Text style={[styles.navbar, {}]}  >gucci</Text>
                <Text style={[styles.navbar, {}]}  >Prada</Text>
                <Text style={[styles.navbar, {}]}  >celine</Text>
                <Text style={[styles.navbar, {}]}  >channel</Text>
            </View>
            {/*  */}

            <View style={[styles.flex_6, {
                // backgroundColor: '#0ff'
            }]} >
                <View style={[styles.row, {
                    justifyContent: 'space-between',
                    paddingVertical: 10,
                }]} >
                    <Text style={[, { fontWeight: '600', fontSize: 16 }]} >New Collection</Text>
                    <Text style={[, { opacity: 0.6 }]} >See All</Text>
                </View>

                {/* listItem */}
                <View style={[styles.flex_1, styles.row, {
                    // justifyContent: 'space-between'
                }]} >

                    {/* item */}
                    {/* <View style={[, {
                        backgroundColor: '#fff', width: '48%', maxHeight: 220,
                        borderWidth: 1, borderRadius: 10, borderColor: '#8c8c8c'
                    }]}  >
                        <Image style={[, { borderRadius: 10, width: '100%', height: 150, }]} source={item.img} />
                        <Text style={[, { fontSize: 15, fontWeight: '600', paddingHorizontal: 15, }]} >{item.name}</Text>
                        <Text style={[, { fontSize: 15, paddingHorizontal: 15, }]} >$ {item.price}.00</Text>
                    </View> */}

                    <FlatList
                    // getItem={2}
                        // horizontal={true}
                        data={listBag}
                        numColumns={2}
                        keyExtractor={item => item.id}
                        renderItem={renderBag}
                    />


                </View>
            </View>


            {/* <Text>ComponentHome</Text> */}
        </View>
    )
}

export default ComponentHome;

//           style={[ ,{}]}           


const stylez = StyleSheet.create({

})