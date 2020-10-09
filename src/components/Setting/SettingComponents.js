import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

const SettingComponents = props => {

    return (
        <View style={styles.container}>
            <Text>Setting</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})

export default SettingComponents;
