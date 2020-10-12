import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Sizes } from '@dungdang/react-native-basic';
import { ScrollView } from 'react-native-gesture-handler';
class TabLocation extends Component {

    constructor(props) {
        super(props)
        this.state = {
            tabData: [],
            tableData: [],
            selectedFloor: 1
        }

    }
    renderTabLayout() {
        const data = [
            { id: 1, item: 'A' },
            { id: 2, item: 'B' },
            { id: 3, item: 'C' },
            { id: 4, item: 'D' },
            { id: 5, item: 'E' },
            { id: 6, item: 'F' },
            { id: 7, item: 'G' },
            { id: 8, item: 'H' },
            { id: 9, item: 'I' },

        ]
        let floor = [];
        data.map((item, index) => {
            floor.push(
                <TouchableOpacity onPress={() => {
                    this.setState({ selectedFloor: item.id })
                }} style={styles.itemFloor} key={index}><Text style={this.state.selectedFloor === item.id ? { color: 'red' } : { color: 'black' }}>{item.item}</Text></TouchableOpacity>
            )
        })
        return floor;
    }
    render() {

        return (
            <View style={styles.container}>
                <View style={styles.TabCustom}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1, }}>
                        <View style={{ flexDirection: 'row' }}>{this.renderTabLayout()}</View>

                    </ScrollView>
                </View>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        borderColor: 'black',
        backgroundColor: 'white',
    },
    TabCustom: {
        flexDirection: 'row',
        justifyContent: 'space-around'

    },
    itemFloor: {
        paddingVertical: Sizes.s10,
        paddingHorizontal: Sizes.s45,

    }
})

export default TabLocation;