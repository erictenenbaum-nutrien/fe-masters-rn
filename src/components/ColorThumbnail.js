import React from 'react';
import { View, StyleSheet } from 'react-native';

const ColorThumbnail = ({ hexCode }) => {
    return <View style={[styles.box, { backgroundColor: hexCode }]} />
}

const styles = StyleSheet.create({
    box: {
        height: 50,
        width: 50,
        marginRight: 10,
        marginBottom: 10,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 1,
        elevation: 2,

    }
});

export default ColorThumbnail;