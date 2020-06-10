import { StyleSheet } from 'react-native';
import Utils from '../../../commons/utils/index';

export const Styles = StyleSheet.create({
    logoContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        paddingVertical: 15
    },
    logo: {
        width: 75,
        height: 75
    },
    headingText: {
        fontFamily: Utils.getHeadingFontFamily(),
        fontSize: 30
    }
});

export default Styles
