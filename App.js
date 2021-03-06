import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View,Image } from 'react-native';
import { createAppContainer , createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import ReadScreen from './Screen/ReadScreen';
import WriteScreen from './Screen/WriteScreen';

export default class App extends React.Component{

render(){
return(
<AppContainer/>
)
}
}


const TabNavigator = createBottomTabNavigator({
  Transaction: {screen: TransactionScreen},
  Search: {screen: SearchScreen},
},
{
  defaultNavigationOptions: ({navigation})=>({
    tabBarIcon: ()=>{
      const routeName = navigation.state.routeName;
      console.log(routeName)
      if(routeName === "WriteScreen"){
        return(
          <Image
          source={require("./assets/writing.png")}
          style={{width:40, height:40}}
        />
        )
        
      }
      else if(routeName === "ReadScreen"){
        return(
          <Image
          source={require("./assets/reading.png")}
          style={{width:40, height:40}}
        />)
        
      }
    }
  })
}
);


