import React from "react";
import {View,Text, Image, StyleSheet, SafeAreaView, StatusBar, TouchableWithoutFeedbackBase, Pressable, Linking} from 'react-native';

const colorGithub = '#010409';
const colorFontA = 'red';
const colorFontB = 'blue';
const colorFontC = 'green';
const urlGitHub = 'https://github.com/Pretoriano88';

const imageProfile = 'https://www.10wallpaper.com/wallpaper/1366x768/1910/Zombie_army_4_dead_war_2019_Game_HD_Poster_1366x768.jpg'

const App = () => {
    
    const handlePress = async () => {
       const res = await Linking.canOpenURL(urlGitHub);
      
       if(res){
        await Linking.openURL(urlGitHub);
       
       }
    };

    return (
        <SafeAreaView style = {style.container}> 
        <StatusBar backgroundColor={colorGithub} barStyle='light-content' />
    <View style = {style.content} >
        <Image  accessibilityLabel="Gata sarada" 
        style={style.avatar} source={{uri: imageProfile}}/>  
        
        <Text style = {[style.defaultText, style.name]}>Lorem ipsum balbal</Text>
        <Text style = {[style.defaultText, style.nickName]}>Lorem ipsum balbalbl</Text>
        <Text style = {[style.defaultText, style.description]}>Lorem Ipsum blabalbl epson, balbalbal lorem ipsum epson</Text>
        <Pressable onPress= {handlePress} >

       <View style = {style.button}>
        <Text style = {[style.defaultText, style.textButton]}> Open Git hub</Text>

       </View>
       </Pressable>
    </View>
        </SafeAreaView>

        
    );
    };


export default App;

const style = StyleSheet.create ({
    container: {
        backgroundColor: colorGithub,
        flex: 1, // Expandir para a tela inteira
        justifyContent: 'center',
        alignContent: 'center',
        flexDirection: 'row',

    },

    content: {
        alignItems: 'center',
        padding: 20,
    },

    avatar: {
        height: 300,
        width: 300,
        borderRadius: 100, 
        borderColor: 'white',
        borderWidth: 2,

    },
    defaultText: {
        padding: 10 ,
        color: 'white',
    },
    name: {
        marginTop: 20,
        fontSize: 24,
        color: colorFontA,
    },
    nickName: {
        fontSize: 18,
        color: colorFontB,
    },
    description: {
        fontSize: 16,
        color: colorFontC,
    },
    button : {
        marginTop: 20,
        backgroundColor: 'grey',
        borderRadius: 10,
        padding: 10
        

    },
    textButton: {
        fontWeight: 'bold',
        fontSize: 16 
    }
 
    
});