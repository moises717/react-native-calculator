/* eslint-disable react-native/no-inline-styles */
import { Text, TouchableOpacity, View } from 'react-native';
import React from 'react';
import { styles } from '../theme/appTheme';

interface Props {
    text: string;
    color?: string;
    ancho?: boolean;
    action: (numberText: string) => void;
}

export const Button = ({ text, color = '#2D2D2D', ancho = false, action }: Props) => {
    return (
        <TouchableOpacity onPress={() => action(text)}>
            <View style={
                {
                    ...styles.button,
                    backgroundColor: color,
                    width: ancho ? 180 : 80,
                }
            }>
                <Text style={{
                    ...styles.textButton,
                    color: (color === '#9B9B9B') ? 'black' : 'white',
                }}
                > {text}</Text>
            </View>
        </TouchableOpacity>

    );
};
