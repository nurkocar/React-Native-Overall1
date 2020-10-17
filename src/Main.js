import React from 'react';
import { SafeAreaView, View, Text, TouchableOpacity,StyleSheet } from 'react-native';

import Button from './components/Button'

const App = () => {
    return (
        <SafeAreaView>
            <View>
                <Text style = {{fontSize:50}}>Hello World</Text>
            </View>

            <Button />

        </SafeAreaView>
    )
}


export default App;

