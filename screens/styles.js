import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        fontFamily: 'Montserrat',
        justifyContent: 'center',
        height: Dimensions.get('screen').height,
        width: Dimensions.get('screen').width,
    },
    titleOpening: {
        fontWeight: 'bold',
        zIndex: 2,
        position: 'absolute',
    },
    text0_titleOpening: {
        fontSize: 30,
        color: 'white',
        marginVertical: 5,
        textAlign: 'center',
    },
    text1_titleOpening: {
        fontSize: 16,
        color: 'white',
        textAlign: 'center',
    },
    titleStarting: {
        position: 'absolute',
        zIndex: 1,
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
    },
    imageContainer: {
        flex: 1,
        alignItems: 'center',
        height: Dimensions.get('window').height,
        width: Dimensions.get('window').width,
        justifyContent: 'center'
    },
    slideArrow: { height: 10, width: 20, marginRight: 10 },
    scrollContainer: {
        zIndex: 1, position: 'absolute',
        flexDirection: 'row', alignItems: 'center',
        justifyContent: 'center',
    },
    scrollContainer1: {
        position: 'absolute',
        bottom: '5%', flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
});