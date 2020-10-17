import React from 'react';
import { SafeAreaView, View, Text } from 'react-native';

const limit = 100;

const App = () => {
    return (
        <SafeAreaView>
            <View>
                <Text >Hello World {limit}</Text>
            </View>
        </SafeAreaView>
    )
}

export default App;