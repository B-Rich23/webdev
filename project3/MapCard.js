import React from 'react';
import { StyleSheet, Text, View, ScrollView, TouchableHighlight } from 'react-native';
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
          fontWeight: 'bold', fontSize: 30, marginTop: 0, marginBottom: 15 } }}
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
            justifyContent: 'flex-start', marginTop: 0, marginBottom: 0}}
            textStyle={{color: 'white', fontWeight: 'bold'}}
          />
  
  <Card containerStyle={{flexDirection: 'row', width: "100%",
      height: '75%', backgroundColor: 'white',
      borderColor: 'rgba(49, 111,244, 1)', justifyContent: 'space-around',
      alignItems: 'center', marginTop: 0, 
      }}> 
    <Card containerStyle={{flexDirection: 'row', width: "95%",
        height: 175, backgroundColor: 'rgba(44, 244, 250, 1)',
        borderColor: 'rgba(44, 244, 250, 1)', justifyContent: 'space-around',
        alignItems: 'center', marginTop: 30
        }}> 
        <Icon
  name='assignment' color='rgba(49, 111,244, 1)'/>
        <Text style={styles.text}>{`Daily`}</Text>

      </Card>
         <Card containerStyle={{flexDirection: 'row', width: "95%",
        height: 175, backgroundColor: 'rgba(44, 244, 250, 1)',
        borderColor: 'rgba(44, 244, 250, 1)', justifyContent: 'space-around',
        alignItems: 'center', marginTop: 15
        }}> 
        <Icon
  name='stars' color='rgba(49, 111,244, 1)' />
        <Text style={styles.text}>{`Public`}</Text>

      </Card>
         <Card containerStyle={{flexDirection: 'row', width: "95%",
        height: 175, backgroundColor: 'rgba(44, 244, 250, 1)',
        borderColor: 'rgba(44, 244, 250, 11)', justifyContent: 'space-around',
        alignItems: 'center', marginTop: 15
        }}> 
        <Icon
  name='explore' color='rgba(49, 111,244, 1)' />
        <Text style={styles.text}>{`New`}</Text>

      </Card>
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

