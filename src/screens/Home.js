import React from 'react';
import {Alert, Image, StyleSheet, View} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styled from 'styled-components/native';
import HomeButton from '../components/HomeButton';
import { HomeButtonStyles } from '../styles/ButtonStyle';

const Home = ({navigation})=>{
    return (
        <View style={styles.mainView}>
            <Image
                style={{width: '100%', height: '10%', marginTop: '30%'}}
                source={require('../../assets/wealthlogo.png')}
            />
            <Image
                style={{width: '100%', height: '50%', marginBottom: '10%'}}
                source={require('../../assets/waterboy.png')}
            />
            <HomeButton
                title="Sign Up"
                fontcolor="#FFFFFF"
                bgcolor="#A3CFE5"
                onPress={()=>alert('um hi')}
            />
            <HomeButton
                title="Login"
                fontcolor="#A3CFE5"
                bgcolor="#FFFFFF"
                onPress={()=>navigation.navigate('Login')}
            />
            
        </View>
    );
};

const styles = StyleSheet.create({
    mainView:{
        backgroundColor: '#ffffff',
        alignItems: 'center',
    }
})

export default Home;