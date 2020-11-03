import React from 'react'
import { Text, View, StyleSheet, Image } from 'react-native'
import { Sizes } from '@dungdang/react-native-basic'
import images from '../../res/images/index';

const GuestItem = props => {
    const currencyFormat = (num) => {
        if (num == 0) {
            return '';
        } else {
            return num.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
        }
    };
    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'row' }}>
                <Image source={images.ic_guest} resizeMode='contain' style={{ width: Sizes.s100, height: Sizes.s200, marginRight: Sizes.s25 }} />
                <View style={styles.guest}>
                    <View style={{ marginTop: Sizes.s20 }}>
                        <Text style={{ fontWeight: 'bold' }}>{props.FULL_NAME}</Text>
                        <Text style={{ paddingVertical: Sizes.s10 }}>{props.CONFIRMATION_NO}</Text>
                        <Text>{props.RESV_STATUS}</Text>
                    </View>
                    <View style={{ marginTop: Sizes.s20 }}>
                        <Text style={{ textAlign: 'right', paddingVertical: Sizes.s10 }}>Phòng {props.ROOM_CODE}</Text>
                        <Text style={{ textAlign: 'right', color: 'red' }}>{currencyFormat(props.BALANCE)}</Text>
                    </View>
                </View>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        padding: 10,
    },
    guest: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderBottomColor: '#E8E8E8',
        borderBottomWidth: 1,
        width: '83%',
    }
});
export default GuestItem;