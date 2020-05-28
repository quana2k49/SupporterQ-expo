import React, { Component } from 'react';
import { View, Text, Image, TouchableOpacity, Dimensions, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles';

export default class Animated extends Component {
    AnimationRef;

    constructor(props) {
        super(props);
        this.state = {
            isDefault: true,
            simVerify: false
        };
    };



    handleScroll1 = (event) => {
        if (event.nativeEvent.contentOffset.y > 0) {
            this.setState({
                ...this.state,
                isDefault: false
            });
            this.AnimationRefImage.fadeInUpBig(1000);
            this.AnimationRefText0.fadeIn(1000);
        }
    }

    handleScroll2 = (event) => {
        if (event.nativeEvent.contentOffset.y > 0) {
            this.setState({
                ...this.state,
                simVerify: true,
                isDefault: true
            });
            this.AnimationRefImage.fadeOut();
        }
        if (event.nativeEvent.contentOffset.y < 0) {
            this.AnimationRefText0.fadiInDownBig(1000);
            this.setState({
                ...this.state,
                isDefault: true
            });
        }
    }

    render() {
        const { isDefault, simVerify } = this.state;
        const { height, width } = Dimensions.get('window');
        return (
            <ScrollView onScroll={!!isDefault ? this.handleScroll1 : this.handleScroll2} style={{
                backgroundColor: '#CDEAF8',

            }}>
                <View style={styles.container}>
                    {
                        !!isDefault ?
                            <Animatable.View style={styles.titleStarting}
                                ref={ref => (this.AnimationRefText0 = ref)}>
                                <Image style={{
                                    position: 'absolute',
                                    bottom: 0,
                                    zIndex: 1,
                                    height: height,
                                    width: width,
                                }} source={require('../ultils/images/background0.png')} />
                                <Text style={{
                                    position: 'absolute',
                                    top: '25%',
                                    zIndex: 1,
                                    left: '10%',
                                    right: '10%',
                                    fontSize: 26, fontWeight: 'bold',
                                    textAlign: 'center'
                                }}>Hãy tưởng tượng bạn đang
                                đứng trước một chuyến đi du hành vòng quanh thế giới</Text>
                            </Animatable.View> : null
                    }

                    <Animatable.View style={styles.imageContainer} ref={ref => (this.AnimationRefImage = ref)}>
                        <Image style={{
                            position: 'absolute',
                            top: !!isDefault ? 4000 : '10%',
                            height: height,
                            width: width,
                        }} source={require('../ultils/images/background1.png')} />
                        <Image style={{
                            width: width * 0.9,
                            height: height * 0.08,
                            position: 'absolute',
                            bottom: !!isDefault ? 4000 : '20%',
                        }} source={require('../ultils/images/stepBar.png')} />
                        <Image style={{
                            position: 'absolute',
                            bottom: !!isDefault ? -4000 : '20%',
                            width: width * 0.7,
                            height: height * 0.11,
                        }} source={require('../ultils/images/role.png')} />
                    </Animatable.View>


                    {
                        isDefault == true ?
                            <View style={styles.scrollContainer}>
                                <Image style={styles.slideArrow} source={require('../ultils/images/slideUp1.png')} />
                                <Text>Cuộn lên để bắt đầu</Text>
                            </View> :
                            <View style={styles.scrollContainer1}>
                                <Image style={styles.slideArrow} source={require('../ultils/images/slideUp2.png')} />
                                <Text style={{ color: 'white', fontSize: 18, fontWeight: 'bold' }}>Tiến hành xác nhận SIM</Text>
                            </View>
                    }

                    {
                        !isDefault ?
                            <Animatable.View style={styles.titleOpening}
                                animation="fadeIn" delay={850} >
                                <Text style={styles.text0_titleOpening}>
                                    Tấm vé trong tay
                                </Text>
                                <Text style={styles.text1_titleOpening}>
                                    Bạn bước lên thuyền, lòng đầy hứng khởi
                                </Text>
                            </Animatable.View>
                            : null
                    }

                    {
                        !!simVerify ?
                            <Animatable.View style={styles.titleStarting}
                                ref={ref => (this.AnimationRefImage1 = ref)} animation="fadeInUpBig">
                                <Image style={{
                                    position: 'absolute',
                                    top: 0,
                                    zIndex: 1,
                                    height: height,
                                    width: width,
                                }} source={require('../ultils/images/background3.png')} />
                            </Animatable.View> : null
                    }
                </View >
            </ScrollView>

        );
    }
}
