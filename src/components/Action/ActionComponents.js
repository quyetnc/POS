import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';


const ActionComponents = props => {

    return (
        <View style={styles.container}>
            <Text>Action</Text>
        </View>
    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
export default ActionComponents;