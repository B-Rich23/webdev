import React from 'react';
import { StyleSheet, Text, View, TouchableHighlight } from 'react-native';
import { Header, ButtonGroup, Button, Avatar, List, ListItem, Card, Input, Icon } from 'react-native-elements';

export default class App extends React.Component {
constructor () {
  super()
  this.state = {
    selectedIndex: 2
  }
  this.updateIndex = this.updateIndex.bind(this)
}

updateIndex (selectedIndex) {
  this.setState({selectedIndex})
}



  render() {
  const buttons = ['Home', 'Past Quest', 'Next Quest', 'Stats']
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
         <Card containerStyle={{flexDirection: 'row', width: "100%",
            height: 80, backgroundColor: 'rgba(49, 111,244, 1)',
            borderColor: 'rgba(49, 111,244, 1)', justifyContent: 'space-around',
            alignItems: 'stretch', marginTop: 0
            }}> 
              <Header
                  statusBarProps={{ barStyle: 'light-content' }}
                  centerComponent={{ text: 'FitQuest', style: { color: '#fff',
                  fontWeight: 'bold', fontSize: 20, marginTop: 15 } }}
                  outerContainerStyles={{ backgroundColor: 'rgba(49, 111,244, 1)',
                   flexDirection: 'row', borderColor: 'rgba(49, 111,244, 1)',
                   width: '100%', justifyContent: 'space-around', alignItems: 'center' }}
                  innerContainerStyles={{ justifyContent: 'space-between' }}/>
              
            </Card>

            
                <ButtonGroup
                  onPress={this.updateIndex}
                  selectedIndex={selectedIndex}
                  buttons={buttons}
                  buttonStyle={{justifyContent: 'center', width: '100%'}}
                  containerStyle={{height: 70, width: '100%',
                  backgroundColor: 'rgba(49, 111,244, 1)',
                  justifyContent: 'flex-start', marginTop: 0}}
                  textStyle={{color: 'white', fontWeight: 'bold'}}
                />
  

              <Card containerStyle={{
                flexDirection: 'row', width: "100%",
                height: 450, backgroundColor: 'rgba(244, 49, 229, 1)',
                borderColor: 'rgba(244, 49, 229, 1)', justifyContent: 'flex-start',
                marginTop: -5
               }}>
                <Avatar
                    xlarge
                    source={{ uri: "http://mrwgifs.com/wp-content/uploads/2013/08/Spongebob-Eagerly-Awaits-The-Start-Of-Boating-School_408x408.jpg" }}
                    onPress={() => console.log("Works!")}
                    activeOpacity={0.7}
                    containerStyle={{ justifyContent: 'flex-start', alignItems: 'flex-start' }}
                />
                <Text style={styles.textHome}>
                    {`Steps:

Distance:

Elevation:

Time:`}

                    </Text>


                </Card>


        

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(244, 49, 229, 1)',
    alignItems: 'center',
    justifyContent: "flex-start"
    
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

