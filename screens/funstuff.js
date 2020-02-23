import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

import Header from '../components/Header';

export default class Funstuff extends Component {

    render() {
        return(
            <View>
                <Header />
                <View style={styles.container}>
                    <Text style={styles.heading}>
                        Fun Stuff
                    </Text>
                    <Text>
                        For fun, I like to go on bike rides and read books.
                        I am also a member of several student socities on campus.
                        Some of them include <Text style={styles.color}>Debating Club</Text> and 
                        <Text style={styles.color}> Triathlon Club.</Text>
                    </Text>
                </View>
            </View>
            
        )
    };
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
    },
    color: {
        color: 'red',
        fontWeight: 'bold',
    }
});
