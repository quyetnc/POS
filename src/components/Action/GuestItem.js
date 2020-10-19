import React from 'react'
import { Text, View, StyleSheet } from 'react-native'
import { Sizes } from '@dungdang/react-native-basic'
import Icon from 'react-native-vector-icons/FontAwesome5'

const GuestItem = props => {
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <View style={{ width: Sizes.s60, justifyContent: 'center', marginLeft: 10 }}>
                    <Icon name='user-circle' size={Sizes.s35} color='white' />
                </View>
                <View style={styles.guest}>
                    <Text style={{ fontWeight: 'bold' }}>{props.FULL_NAME}</Text>
                    <Text>{props.CONFIRMATION_NO}</Text>
                    <Text>{props.RESV_STATUS}</Text>
                </View>
            </View>
            <View >
                <Text style={{ marginLeft: Sizes.s55 }}>{props.ROOM_CODE}</Text>
                <Text>{props.BALANCE}</Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10
    },
    guest: {

    }
});
export default GuestItem;