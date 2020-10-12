import React, { Component } from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import { Sizes } from '@dungdang/react-native-basic';
import Icon from 'react-native-vector-icons/FontAwesome5';
class OrderItemComponent extends Component {
    render() {
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.header}>

                    <Icon name='arrow-left' size={20} style={{ color: 'white', marginLeft: Sizes.s15 }} />
                    <Text style={styles.titile}>Trang chủ</Text>
                    <Icon name='ellipsis-v' size={20} style={{ color: 'white', marginRight: Sizes.s15 }} />

                </SafeAreaView>
                <View>
                    <Text>OrderItem</Text>
                </View>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: Sizes.s50,
        backgroundColor: '#4dbd73',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    titile: {
        color: '#fff',
        fontSize: Sizes.h18,
        fontWeight: 'bold',

    },
});

export default OrderItemComponent;