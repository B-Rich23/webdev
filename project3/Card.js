import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Header, ButtonGroup, Button, Avatar, List, ListItem, Card, Input, Icon } from 'react-native-elements';

export default class App extends React.Component {
    constructor() {
        super()
        this.state = {
            selectedIndex: 2
        }
        this.updateIndex = this.updateIndex.bind(this)
    }

    updateIndex(selectedIndex) {
        this.setState({ selectedIndex })
    }



    render() {
        const buttons = ['Home', 'Past Quest', 'New Quest']
        const { selectedIndex } = this.state
        return (
            <View style={styles.container}>
                <Card containerStyle={{
                    flexDirection: 'row', width: "100%",
                    height: 450, backgroundColor: 'rgba(244, 49,229, 1))',
                    borderColor: 'rgba(244, 49,229, 1))', justifyContent: 'flex-start',
                    marginTop: -150
                }}>


                </Card>




                <TouchableHighlight style={styles.pressyThing}>
                    <Text style={styles.text}>Press Me!</Text>

                </TouchableHighlight>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'rgba(244, 49,229, 1))',
        alignItems: 'center',
        justifyContent: "space-between"

    }
});
