import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Header from '../components/Header';

export default class aboutme extends Component {

    render() {
        return(
            <View>
                <Header />
                <View style={styles.container}>
                    <Text style={styles.heading}>
                        About Me
                    </Text>
                    <Text>
                        Hi, my name is John. This page is all about me. I'm a student at University of Wisconsin Madison.
                    </Text>
                </View>
            </View>
            
        )
    };
};

aboutme.navigationOptions = {
    headerTitle:'About Me',
  };
  
const styles = StyleSheet.create({
    heading: {
        fontSize: 26,
        fontWeight: 'bold',
    },
    container: {
        marginTop: 60,
        marginHorizontal: 20,
        alignContent: 'center',
        justifyContent: 'center',
    }
});
