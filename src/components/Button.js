import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const Button = (props) => {

    console.log(props);

    let selectedColor = props.color;

    if (props.color == undefined)
        selectedColor = '#a5d6a7'

    return (
        <TouchableOpacity
            style={
                [styles.buttonContainer,{ backgroundColor: selectedColor }]
            }
            onPress={props.myOnPress}
        >
            <Text>{props.title}</Text>
        </TouchableOpacity>
    )
}

export default Button;

const styles = StyleSheet.create({
    buttonContainer: {
        backgroundColor: '#a5d6a7',
        padding: 15,
        margin: 10,
        borderRadius: 5,
        alignItems: 'center'
    }
})


// backgroundColor: props.color === undefined ? '#a5d6a7' : props.color  Boyle yazarsak yukaridaki degisken tanimlamasina ve if condition a gerek kalmaz.
