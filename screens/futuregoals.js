import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import Header from '../components/Header';

export default class Futuregoals extends Component {

    render() {

        const list = [
            {
              name: 'Pass Software Engineering',
              avatar_url: 'https://images.idgesg.net/images/article/2019/11/microsoft_windows_security_binary_lock_by_gerd_altmann_cc0_via_pixabay_1800x1200-100817345-large.jpg',
              subtitle: 'Low Priority'
            },
            {
              name: 'Graduate',
              avatar_url: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRSAK8qKTckwD2VQHx_vX_qaZZyyNAs4ipwFZBwvTcHXcV4UMKa',
              subtitle: 'High Priority'
            },
            {
                name: 'get a job',
                avatar_url: 'https://upload.wikimedia.org/wikipedia/en/thumb/b/ba/Flag_of_Germany.svg/1200px-Flag_of_Germany.svg.png',
                subtitle: 'High Priority'
              },
          ]
        return(
            <View>
                <Header />
                <View style={styles.container}>
                    <Text style={styles.heading}>
                        Future Goals
                    </Text>
                <View>
  {
    list.map((l, i) => (
      <ListItem
        key={i}
        leftAvatar={{ source: { uri: l.avatar_url } }}
        title={l.name}
        subtitle={l.subtitle}
        bottomDivider
      />
    ))
  }
</View>
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
    }
});
