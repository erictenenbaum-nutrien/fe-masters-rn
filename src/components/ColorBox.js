import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ colorName, hexCode }) => {
    const textColorResolver = parseInt(hexCode.replace('#', ''), 16) > 0xffffff / 1.1 ? 'black' : 'white';
    return (
        <View style={[styles.background, { backgroundColor: hexCode }]}>
            <Text style={{ ...styles.textFont, color: textColorResolver }}>{colorName}: {hexCode}</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    background: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 5,
        marginTop: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 2,
    },
    textFont: {
        padding: 10,
        fontSize: 16,
        fontWeight: 'bold',
    }
});

export default ColorBox;