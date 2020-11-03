import React, { Component } from 'react'
import { Text, View, StyleSheet, TouchableOpacity, SafeAreaView, FlatList, ActivityIndicator, StatusBar } from 'react-native'
import { Sizes } from '@dungdang/react-native-basic'
import Icon from 'react-native-vector-icons/AntDesign'
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
            color={index % 2 === 0 ? 'red' : 'green'}
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
        />) : (<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}><ActivityIndicator size="large" color="#1890FF" /></View>)
        return (
            <View style={styles.container}>

                <SafeAreaView style={styles.header}>
                    <TouchableOpacity style={{ position: 'absolute', left: 0, padding: Sizes.s15 }} onPress={() => this.props.navigation.goBack()}>
                        <Icon name='left' size={20} color='white' />
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
        height: Sizes.s100,
        backgroundColor: '#1890FF',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    titile: {
        color: '#fff',
        fontSize: Sizes.h32,
        fontWeight: 'bold',
    },
});

export default FindGuest;