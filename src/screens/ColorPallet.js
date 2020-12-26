import React, { useEffect } from 'react';
import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native';
import ColorBox from '../components/ColorBox';

const ColorPallet = ({ route, navigation }) => {
    const { colors, title } = route.params;

    useEffect(() => {
        navigation.setOptions({ title });
    });

    return (
        <View style={styles.safeArea}>
            <FlatList
                data={colors}
                keyExtractor={item => item.colorName}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => {
                    return (
                        <ColorBox
                            colorName={item.colorName}
                            hexCode={item.hexCode}
                            textColor={item.colorName.includes('Base') ? 'white' : 'black'}
                        />
                    );
                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    // title: {
    //     marginBottom: 5,
    //     marginTop: 40,
    //     fontWeight: 'bold',
    // },
    // allBackground: {
    //     alignItems: 'center',
    //     justifyContent: 'center',
    //     paddingVertical: 5,
    //     marginTop: 10,
    // },
    // textFont: {
    //     color: 'white',
    //     padding: 10,
    //     fontSize: 16,
    //     fontWeight: 'bold',
    // },
    // cyanBackground: {
    //     backgroundColor: '#2aa198',
    // },
    // blueBackground: {
    //     backgroundColor: '#268bd2',
    // },
    // magentaBackground: {
    //     backgroundColor: '#d33682',
    // },
    // orangeBackground: {
    //     backgroundColor: '#cd4b16',
    // },
    safeArea: {
        marginHorizontal: 20,
        flex: 1,
    },
});

export default ColorPallet;