import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import { Sizes } from '@dungdang/react-native-basic'
import Icon from 'react-native-vector-icons/FontAwesome5'
class FindGuest extends Component {
    render() {
        return (
            <TouchableOpacity style={styles.backgourdMenu}>
                <Icon name='search' size={30} />
                <Text style={{ paddingVertical: Sizes.s10 }}> Find Guest </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    backgourdMenu: {
        borderRadius: Sizes.s10,
        backgroundColor: 'white',
        width: '24%',
        height: Sizes.s120,
        justifyContent: 'center',
        alignItems: 'center'

    }
})

export default FindGuest;