import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, FlatList, ActivityIndicator } from 'react-native'
import { Sizes } from '@dungdang/react-native-basic'
import Icon from 'react-native-vector-icons/FontAwesome5'
import GuestItem from './GuestItem'
import { objectIsNull, arrayIsEmpty, stringIsEmpty } from '@dungdang/react-native-basic/src/Functions';

class FindGuest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [],
            isLoading: false,
            refreshing: false
        }
    }



    async componentDidMount() {
        this.props.onGetFindGuestAction();
    }
    async componentDidUpdate(prevProps) {
        if (prevProps.getFindGuestReducers !== this.props.getFindGuestReducers) {
            if (!objectIsNull(this.props.getFindGuestReducers)) {
                this.setState({
                    data: this.props.getFindGuestReducers,
                    isLoading: true,
                    refreshing: false
                })
            }
        }
    }
    async handleRefresh() {
        this.setState({ refreshing: true });
        this.props.onGetFindGuestAction();

    }
    renderItem = ({ item, index }) => (
        <GuestItem
            key={index}
            BALANCE={item.BALANCE}
            ROOM_CODE={item.ROOM_CODE}
            RESV_NAME_ID={item.RESV_NAME_ID}
            RESV_STATUS={item.RESV_STATUS}
            CONFIRMATION_NO={item.CONFIRMATION_NO}
            FULL_NAME={item.FULL_NAME}

        />
    )
    render() {
        const { data, isLoading } = this.state
        const showContent = isLoading === true ? (<FlatList
            onRefresh={() => this.handleRefresh()}
            refreshing={this.state.refreshing}
            data={data}
            keyExtractor={(item, index) => index}
            renderItem={this.renderItem}
        />) : (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><ActivityIndicator size="large" color="#00ff00" /></View>)
        return (
            <View style={styles.container}>
                <SafeAreaView style={styles.header}>
                    <TouchableOpacity style={{ position: 'absolute', left: 0, marginLeft: 10 }} onPress={() => this.props.navigation.goBack()}>
                        <Icon name='arrow-left' size={20} color='white' />
                    </TouchableOpacity>
                    <Text style={styles.titile}>Find Guest</Text>
                </SafeAreaView>
                {showContent}

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
        justifyContent: 'center',
        alignItems: 'center',
    },
    titile: {
        color: '#fff',
        fontSize: Sizes.h18,
        fontWeight: 'bold',
    },
});

export default FindGuest;