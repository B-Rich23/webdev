import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight } from 'react-native';
import { Header, ButtonGroup, Button, Avatar, List, ListItem, Card, Input, Icon } from 'react-native-elements';
import { LinearGradient, Stop, Defs } from 'react-native-svg';
import { BarChart } from 'react-native-svg-charts';


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
   const data    = [ 50, 10, 40, 95, -4, -24, 85, 91, 35, 53, -53, 24, 50, -20, -80 ]

        const Gradient = () => (
            <Defs key={'gradient'}>
                <LinearGradient id={'gradient'} x1={'0%'} y={'0%'} x2={'0%'} y2={'100%'}>
                    <Stop offset={'0%'} stopColor={'rgb(134, 65, 244)'}/>
                    <Stop offset={'100%'} stopColor={'rgb(66, 194, 244)'}/>
                </LinearGradient>
            </Defs>
        )
    return (
      <View style={styles.container}>
       <Card containerStyle={{flexDirection: 'row', width: "100%",
      height: '10%', backgroundColor: 'rgba(49, 111,244, 1)',
      borderColor: 'rgba(49, 111,244, 1)', justifyContent: 'space-around',
      alignItems: 'stretch', marginTop: '0%'
      }}> 
                
<Header 
          statusBarProps={{ barStyle: 'light-content' }}
          centerComponent={{ text: 'FitQuest', style: { color: '#fff',
          fontWeight: 'bold', fontSize: 30, marginTop: '0%', marginBottom: '7%' } }}
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
            containerStyle={{height: '10%', width: '100%',
            backgroundColor: 'rgba(49, 111,244, 1)',
            justifyContent: 'flex-start', marginTop: '0%', marginBottom: '0%'}}
            textStyle={{color: 'white', fontWeight: 'bold'}}
          />
  
  <Card containerStyle={{flexDirection: 'row', width: "100%",
      height: '80%', backgroundColor: 'white',
      borderColor: 'white', justifyContent: 'space-around',
      alignItems: 'center', marginTop: 0, 
      }}> 

      <BarChart
                style={ { height: '10%' } }
                data={ data }
                contentInset={ { top: 5, bottom: 5 } }
                extras={[ Gradient ]}
                svg={ {
                    strokeWidth: 2,
                    fill: 'url(#gradient)',
                } }
            />

    </Card> 
    
         

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
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
        color: 'rgba(49, 111,244, 1)',
        fontWeight: "bold",
        fontSize: 30,
        alignItems: 'center',
        textAlign: 'justify'
        
    },
    textHome: {
        color: "white",
        fontWeight: "bold",
        fontSize: 25,
        marginTop: 20
    }
});

