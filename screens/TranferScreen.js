import React, { Component } from 'react';
import { View, Text, Image, SafeAreaView, Dimensions, ScrollView, Platform } from 'react-native';
import * as Animatable from 'react-native-animatable';
import styles from './styles';
import stepData from './stepElements';

export default class Animated extends Component {
    AnimationRef;

    constructor(props) {
        super(props);
        this.state = {
            currentStep: 0
        };
    };

    _onScroll = (event) => {
        const { currentStep } = this.state;
        const scrollPos = event.nativeEvent.contentOffset.y;
        if (Platform.OS === 'ios' && scrollPos > 0 || Platform.OS === 'android' && scrollPos > 70) {
            // this.refs._scrollView.scrollTo({ x: 0, y: 0, animated: false });
            switch (currentStep) {
                case 0:
                    this.setState({
                        currentStep: 1
                    });
                    break;
                case 1:
                    this.setState({
                        currentStep: 2
                    });
                    break;
                case 2:
                    this.setState({
                        currentStep: 3
                    });
                    break;
                case 3:
                    this.setState({
                        currentStep: 4
                    });
                    break;
                case 4:
                    this.setState({
                        currentStep: 5
                    });
                    break;
                default:
                    break;
            }
            console.log('currentStep', currentStep)
        }
    };

    _renderOpening = () => {
        const { height, width } = Dimensions.get('window');

        return <View style={styles.stepContainer}>
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

    // SCREEN
    _renderStep1 = () => {
        const { height, width } = Dimensions.get('window');
        const { currentStep } = this.state;
        const obj = stepData[currentStep - 1];

        return <View style={styles.stepContainer}>
            <Animatable.View animation='fadeInUpBig' style={styles.anmView}>
                <Image style={styles.sailBoat2} source={obj.backgroundImg} />
                <Image style={styles.stepBar1} source={obj.stepImg} />
            </Animatable.View>
            <Animatable.View animation='lightSpeedIn' delay={850} style={{ position: 'absolute', zIndex: 1, height: height, width: width, alignItems: 'center' }}>
                <View style={styles.arrowContainer1}>
                    <Image style={styles.arrow} source={obj.arrowImg}></Image>
                    <Text style={styles.text3}>{obj.title3}</Text>
                </View>
                <View style={{ position: 'absolute', top: "55%", alignItems: 'center' }}>
                    <Text style={styles.text4}>{obj.title1}</Text>
                    <Text style={styles.text3}>{obj.title2}</Text>
                </View>
            </Animatable.View>
        </View>
    }

    _renderStep2 = () => {
        const { height, width } = Dimensions.get('window');
        const { currentStep } = this.state;
        const obj = stepData[currentStep - 1];

        return <View style={styles.stepContainer}>
            <Animatable.View animation='zoomInUp' delay={850} style={styles.anmView}>
                <Image style={styles.sailBoat2} source={obj.backgroundImg} />
                <Image style={styles.stepBar1} source={obj.stepImg} />
            </Animatable.View>
            <Animatable.View animation='fadeIn' delay={850} style={{ position: 'absolute', zIndex: 1, height: height, width: width, alignItems: 'center' }}>
                <View style={styles.arrowContainer1}>
                    <Image style={styles.arrow} source={obj.arrowImg}></Image>
                    <Text style={styles.text3}>{obj.title3}</Text>
                </View>
                <View style={{ position: 'absolute', top: "55%", alignItems: 'center' }}>
                    <Text style={styles.text4}>{obj.title1}</Text>
                    <Text style={styles.text3}>{obj.title2}</Text>
                </View>
            </Animatable.View>
        </View>
    }

    _renderStep3 = () => {
        const { height, width } = Dimensions.get('window');
        const { currentStep } = this.state;
        const obj = stepData[currentStep - 1];

        return <View style={styles.stepContainer}>
            <Animatable.View animation='fadeInUpBig' style={styles.anmView}>
                <Image style={styles.sailBoat2} source={obj.backgroundImg} />
                <Image style={styles.stepBar1} source={obj.stepImg} />
            </Animatable.View>
            <Animatable.View animation='lightSpeedIn' delay={850} style={{ position: 'absolute', zIndex: 1, height: height, width: width, alignItems: 'center' }}>
                <View style={styles.arrowContainer1}>
                    <Image style={styles.arrow} source={obj.arrowImg}></Image>
                    <Text style={styles.text3}>{obj.title3}</Text>
                </View>
                <View style={{ position: 'absolute', top: "55%", alignItems: 'center' }}>
                    <Text style={styles.text4}>{obj.title1}</Text>
                    <Text style={styles.text3}>{obj.title2}</Text>
                </View>
            </Animatable.View>
        </View>
    }

    _renderStep4 = () => {
        const { height, width } = Dimensions.get('window');
        const { currentStep } = this.state;
        const obj = stepData[currentStep - 1];

        return <View style={styles.stepContainer}>
            <Animatable.View animation='zoomInUp' style={styles.anmView}>
                <Image style={styles.sailBoat2} source={obj.backgroundImg} />
                <Image style={styles.stepBar1} source={obj.stepImg} />
            </Animatable.View>
            <Animatable.View animation='fadeIn' delay={850} style={{ position: 'absolute', zIndex: 1, height: height, width: width, alignItems: 'center' }}>
                <View style={styles.arrowContainer1}>
                    <Image style={styles.arrow} source={obj.arrowImg}></Image>
                    <Text style={styles.text3}>{obj.title3}</Text>
                </View>
                <View style={{ position: 'absolute', top: "55%", alignItems: 'center' }}>
                    <Text style={styles.text4}>{obj.title1}</Text>
                    <Text style={styles.text3}>{obj.title2}</Text>
                </View>
            </Animatable.View>
        </View>
    }

    _renderStep5 = () => {
        const { height, width } = Dimensions.get('window');
        const { currentStep } = this.state;
        const obj = stepData[currentStep - 1];

        return <View style={styles.stepContainer}>
            <Animatable.View animation='fadeInUpBig' style={styles.anmView}>
                <Image style={styles.sailBoat2} source={obj.backgroundImg} />
                <Image style={styles.stepBar1} source={obj.stepImg} />
            </Animatable.View>
            <Animatable.View animation='lightSpeedIn' delay={850} style={{ position: 'absolute', zIndex: 1, height: height, width: width, alignItems: 'center' }}>
                <View style={styles.arrowContainer1}>
                    <Image style={styles.arrow} source={obj.arrowImg}></Image>
                    <Text style={styles.text3}>{obj.title3}</Text>
                </View>
                <View style={{ position: 'absolute', top: "55%", alignItems: 'center' }}>
                    <Text style={styles.text4}>{obj.title1}</Text>
                    <Text style={styles.text3}>{obj.title2}</Text>
                </View>
            </Animatable.View>
        </View>
    }

    // OPENING SCREEN
    _renderScreens = () => {
        const { currentStep } = this.state;
        switch (currentStep) {
            case 0:
                return this._renderOpening();
                break;
            case 1:
                return this._renderStep1();
                break;
            case 2:
                return this._renderStep2();
                break;
            case 3:
                return this._renderStep3();
                break;
            case 4:
                return this._renderStep4();
                break;
            case 5:
                return this._renderStep5();
                break;

            default:
                break;
        }
    }

    render() {
        return (
            <ScrollView ref='_scrollView' onScroll={this._onScroll} style={styles.container}>
                {this._renderScreens()}
            </ScrollView>
        );
    }
}
