import React, { useState, useRef } from 'react';
import Carousel, { Pagination } from 'react-native-snap-carousel';
import {
    TouchableOpacity,
    View,
    Text,
    Image,
    FlatList,
    Dimensions,
    Button
} from 'react-native';

const { width } = Dimensions.get('window');
//   const SPACING = 10;
//   const THUMB_SIZE = 80;

const IMAGES = {
    image1: require('../assets/images/img1.png'),
    image2: require('../assets/images/img1.png'),
    image3: require('../assets/images/img1.png'),
};

const Home = () => {
    const [images, setImages] = useState([
        { id: '1', image: IMAGES.image1, title: "Custom Gallery 1" },
        { id: '2', image: IMAGES.image2, title: "Custom Gallery 2" },
        { id: '3', image: IMAGES.image3, title: "Custom Gallery 3" },
    ]);
    let [dotindex, setDotindex] = useState();
    console.log(dotindex);
    return (
        <View style={{ flex: 1, backgroundColor: 'white', alignItems: 'center' }}>


            <View style={{ flex: 1, marginTop: 20 }}>

                <Carousel
                    layout='default'
                    data={images}
                    sliderWidth={width}
                    itemWidth={width}
                    onSnapToItem={(index) => setDotindex(index)}
                    renderItem={({ item, index }) => (
                        <View >
                            <Text
                                style={{
                                    color: 'black',
                                    fontSize: 32,
                                    marginTop: 50,
                                    marginBottom: 25,
                                    // marginLeft:50,
                                    textAlign: 'center'
                                }
                                }
                            >
                                {item.title}
                            </Text>
                            <Image
                                key={index}
                                style={{ width: "100%", height: '100%' }}
                                resizeMode='contain'
                                source={item.image}
                            />
                        </View>
                    )}
                />

            </View>

            <View style={{flex:.1}}>
                <Pagination
                    inactiveDotColor='gray'
                    dotColor={'orange'}
                    activeDotIndex={dotindex}
                    dotsLength={images.length}
                    animatedDuration={10}
                    inactiveDotScale={1}
                />
            </View>
            
            <View style={{flex:.2}}>
             <Button title='NEXT' style={{color:"red"}}/>
            </View>

        
        </View>
    );
};

export default Home;

