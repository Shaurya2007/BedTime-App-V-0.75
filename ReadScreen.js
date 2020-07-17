import React,{Component} from 'react'
import {View,Text,TouchableOpacity,TextInput} from 'react-native'
import { SearchBar } from 'react-native-elements'
import WriteScreen from './WriteScreen'

export default class ReadScreen extends Component{
render(){
    return(
        <View>
            <SearchBar
            placeholder="Search Here"
            />
        </View>
    )
}

retriveStories=async()=>{
    const allStories = await db.collection("storyText").where("storyText","==",this.state.storyText).get()
}

searchFilter=()=>{
    
}

}