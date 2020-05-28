import React, { Component } from 'react';
import { View, Text, Image, SafeAreaView, Dimensions, ScrollView } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles';

export default class Animated extends Component {
    AnimationRef;

    constructor(props) {
        super(props);
        this.state = {
            currentStep: 0
        };
    };

    _onScroll = (event, data) => {
        const { currentStep } = this.state;
        if (event.nativeEvent.contentOffset.y > 0) {
            this.setState({
                ...this.state,
                currentStep: 1
            });
        }
    };

    _renderOpening = () => {
        const { height, width } = Dimensions.get('window');

        return <View style={{
            height: Dimensions.get('screen').height,
            width: Dimensions.get('screen').width,
        }}>
            <Animatable.View animation='fadeIn' delay={200}>
                <View style={styles.contentText}>
                    <Text style={styles.text1}>Hãy tưởng tượng bạn đang đứng trước một chuyến đi du hành vòng quanh thế giới</Text>
                    <View style={styles.arrowContainer}>
                        <Image style={styles.arrow} source={require('../images/ScrollUp1.png')}></Image>
                        <Text style={styles.text2}>Cuộn lên để bắt đầu</Text>
                    </View>
                </View>
            </Animatable.View>
            <Image style={{ width: width, height: height }} source={require('../images/BG1.png')} />
        </View>
    };

    _renderVerify = () => {
        const { height, width } = Dimensions.get('window');
        <View style={{
            height: Dimensions.get('screen').height,
            width: Dimensions.get('screen').width,
        }}>
            <Animatable.View animation='fadeIn' delay={850} style={{ position: 'absolute', zIndex: 1, height: height, width: width, alignItems: 'center' }}>
                <View style={styles.arrowContainer1}>
                    <Image style={styles.arrow} source={require('../images/ScrollUp2.png')}></Image>
                    <Text style={styles.text3}>Tiến hành xác nhận SIM</Text>
                </View>
                <View style={{ position: 'absolute', top: "50%", alignItems: 'center' }}>
                    <Text style={styles.text4}>Tấm vé trong tay</Text>
                    <Text style={styles.text3}>Bạn bước lên thuyền, lòng tràn đầy hứng khởi</Text>
                </View>
            </Animatable.View>
            <Animatable.View animation="fadeInUpBig" style={styles.anmView}>
                <Image style={{ width: width, height: height, position: 'absolute', top: '10%' }} source={require('../images/BG2.png')} />
                <Image style={{ width: width * 0.85, height: height * 0.14, position: 'absolute', bottom: '10%' }} source={require('../images/Step1.png')} />
            </Animatable.View>
        </View>
    }

    _renderScreens = () => {
        const { currentStep } = this.state;
        switch (currentStep) {
            case 0:
                return this._renderOpening();
                break;
            case 1:
                return this._renderVerify();
                break;
            default:
                break;
        }
    };

    render() {
        const { currentStep } = this.state;
        const stepArr = [1, 2, 3, 4, 5]
        return (
            <ScrollView onScroll={this._onScroll} style={styles.container}>
                {/* {() => this._renderScreens()} */}
                {this._renderScreens()}
            </ScrollView>
        );
    }
}
