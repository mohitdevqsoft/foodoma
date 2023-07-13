import React from 'react';
import { View, Image, StyleSheet, Dimensions, FlatList } from 'react-native';

const Home2 = () => {
    const images = [
        require('../assets/images/img1.png'),
        require('../assets/images/img2.jifi'),
        require('../assets/images/img3.jifi'),
    ];
    const renderItem = ({ item }) => {
        return (
            <View style={styles.slide}>
                <Image style={styles.image} source={item} />
            </View>
        );
    };
    return (
        <View style={styles.container}>
            <FlatList
                data={images}
                renderItem={renderItem}
                // keyExtractor={(_, index) => index.toString()}
                // horizontal
                // pagingEnabled
                // showsHorizontalScrollIndicator={true}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    slide: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    },
    image: {
        flex: 1,
    },
});

export default Home2;