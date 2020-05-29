import { StyleSheet, Dimensions } from 'react-native'
const { height, width } = Dimensions.get('window')

export default StyleSheet.create({
    container: {
        backgroundColor: '#CDEAF8',
        height: height,
        width: width,
        position: 'absolute',
        bottom: 0
    },
    text1: {
        fontSize: 26,
        textAlign: 'center',
        marginHorizontal: '10%',
        fontWeight: 'bold'
    },
    text2: {
        /* Body 1 Bold */
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 16,
        color: '#313131',
    },
    text3: {
        color: 'white',
        fontSize: 16,
    },
    text4: {
        fontSize: 26,
        color: 'white',

    },
    contentText: {
        position: 'absolute',
        zIndex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: width,
        height: height,
        top: 0
    },
    arrowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width,
        justifyContent: 'center',
    },
    arrowContainer1: {
        flexDirection: 'row',
        alignItems: 'center',
        width: width,
        justifyContent: 'center',
        bottom: '2%',
        position: 'absolute',
    },
    arrow: {
        height: height * 0.015,
        width: width * 0.05,
        marginHorizontal: 10,
        marginVertical: 20
    },
    anmView: {
        width: width,
        height: height,
        alignItems: 'center',
        justifyContent: 'center',
    },
    stepContainer: {
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
    },
    sailBoat2: { width: width, height: height, position: 'absolute', top: '10%' },
    stepBar1: { width: width * 0.85, height: height * 0.14, position: 'absolute', bottom: '10%' },
});