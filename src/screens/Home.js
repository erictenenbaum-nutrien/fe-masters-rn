import React, { useCallback, useState, useEffect } from 'react';
import { View, Text, StyleSheet, SectionList, FlatList, TouchableOpacity } from 'react-native';
import axios from 'axios';
// import colors from '../data/colors';
import ColorThumbnail from '../components/ColorThumbnail';

const Home = ({ navigation }) => {
    const [colors, setColors] = useState([]);
    const [isRefreshing, setIsRefreshing] = useState(false);

    const fetchColors = useCallback(async () => {
        const result = await axios.get('https://color-palette-api.kadikraman.now.sh/palettes');
        setColors(shuffleArray(formatColorArray(result.data)));
    }, [])

    useEffect(() => {
        // const fetchColors = async () => {
        //     const result = await axios.get('https://color-palette-api.kadikraman.now.sh/palettes');
        //     setColors(formatColorArray(result.data));
        // }

        fetchColors();
    }, [])

    const handleRefresh = useCallback(async () => {
        console.log('refreshing...')
        setIsRefreshing(true);
        await fetchColors();
        setTimeout(() => {
            setIsRefreshing(false);
        }, 500);
    }, []);

    return (
        <View style={styles.page}>
            <SectionList
                sections={colors}
                refreshing={isRefreshing}
                onRefresh={handleRefresh}
                keyExtractor={(item, index) => item.colorName + item.hexCode + index}
                renderSectionHeader={({ section: { title, data } }) => {
                    return (
                        <View style={styles.boxContainer}>
                            <Text style={styles.title}>{title}</Text>
                            <FlatList
                                horizontal
                                data={data.slice(0, 5)}
                                keyExtractor={(item, index) => item.hexCode + item.colorName + index}
                                showsHorizontalScrollIndicator={false}
                                renderItem={({ item }) => {
                                    return (
                                        <TouchableOpacity
                                            onPress={() => navigation.navigate('ColorPallet', { title, colors: data })}
                                        >
                                            <ColorThumbnail hexCode={item.hexCode} />
                                        </TouchableOpacity>
                                    );

                                }}
                            />
                        </View>
                    )
                }}
                renderItem={() => null}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10
    },
    page: {
        backgroundColor: 'white',
        flex: 1
    },
    boxContainer: {
        marginLeft: 10,
        marginBottom: 20
    }
});

function formatColorArray(colorArray) {
    return colorArray.map(colorObj => ({ title: colorObj.paletteName, data: colorObj.colors }));
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}


export default Home;

