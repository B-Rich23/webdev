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
        const list = [
            {
                title: 'Steps',
                value: '2,867'
            },
            {
                title: 'Distance',
                value: '1 mile'
            },
            {
                title: 'Elevation',
                value: '1 mile'
            },
            {
                title: 'Time',
                value: '30 mins'
            },
            {
                title: 'Avg Speed',
                value: '10 mph'
            }

        ]
        return (
            <View style={styles.container}>

                <Header
                    statusBarProps={{ barStyle: 'light-content' }}
                    leftComponent={{ icon: 'menu', color: '#fff' }}
                    centerComponent={{ text: 'FitQuest', style: { color: '#fff', fontWeight: 'bold', fontSize: 20 } }}
                    outerContainerStyles={{ backgroundColor: 'rgba(49, 111,244, 1)', flexDirection: 'row' }}
                    innerContainerStyles={{ justifyContent: 'space-around' }} />
                <ButtonGroup
                    onPress={this.updateIndex}
                    selectedIndex={selectedIndex}
                    buttons={buttons}
                    containerStyle={{
                        height: 75, width: '100%', backgroundColor: 'rgba(49, 111,244, 1)',
                        marginTop: -145
                    }}
                    textStyle={{ color: 'white', fontWeight: 'bold' }}
                />





                <Card containerStyle={{
                    flexDirection: 'row', width: "100%",
                    height: 450, backgroundColor: 'rgba(244, 49,229, 1))',
                    borderColor: 'rgba(244, 49,229, 1))', justifyContent: 'flex-start',
                    marginTop: -150
                }}>
                    <Avatar
                        xlarge
                        source={{ uri: "http://mrwgifs.com/wp-content/uploads/2013/08/Spongebob-Eagerly-Awaits-The-Start-Of-Boating-School_408x408.jpg" }}
                        onPress={() => console.log("Works!")}
                        activeOpacity={0.7}
                        containerStyle={{ justifyContent: 'flex-start', alignItem: 'flex-start' }}
                    />
                    <Text style={styles.textHome}>
                        {`Steps:

Distance:

Elevation:

Time:`}

                    </Text>


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

    },
    pressyThing: {
        backgroundColor: "rgba(49, 111,244, 1)",
        width: 300,
        height: 50,
        borderColor: "transparent",
        borderWidth: 0,
        borderRadius: 5,
        margin: 10,
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 20
    },
    text: {
        color: "white",
        fontWeight: "bold",
        fontSize: 25
    },
    textHome: {
        color: "white",
        fontWeight: "bold",
        fontSize: 25,
        marginTop: 20
    }
});
