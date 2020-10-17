import React from 'react';
import { SafeAreaView, View, Text, Alert } from 'react-native';

import Button from './components/Button'

const App = () => {

    function sayHello() {
        alert("Hello there!")
    }

    return (
        <SafeAreaView style={{flex: 1}}>
            <View>
                <Text style={{fontSize: 50}}>Hello World</Text>
            </View>

            <Button
                myOnPress={() => sayHello()}
                //users={[1, 2, 3, 4, 5]}
                //count={189}
                //number = {3}
                title='Press Me'
                color='purple'
            />

            <Button
                myOnPress={() => {
                    Alert.alert('Clarusway', 'FullStack 4ever!')
                }}
                //users={[1, 2, 3, 4, 5]}
                //count={189}
                title='Press Me and Say Hi'
            />


        </SafeAreaView>
    )
}


export default App;

