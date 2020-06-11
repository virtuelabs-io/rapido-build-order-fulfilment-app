import { StyleSheet } from 'react-native';
import { Colors } from '../../commons/styles/colors';
import Utils from '../../commons/utils/index';

const Styles = StyleSheet.create({
    screen: {
        flex: 1,
        paddingHorizontal: "5%",
        paddingTop: 5,
        paddingBottom: 15
    },
    kpiParentContainer: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'center'
    },
    kpiContainer: {
        width: "40%",
        alignItems: 'center',
        justifyContent: 'center',
        // borderColor: Colors.codes.silver,
        // borderWidth: 1,
        // borderRadius: 5,
        margin: "5%"
    },
    kpiLabel: {
        fontSize: 16,
        fontFamily: Utils.getFontFamily(),
        color: Colors.primary
    },
    kpiValue: {
        fontSize: 40,
        fontFamily: 'quantico-bold'
    },
    vizHeader: {
        fontSize: 18,
        fontFamily: Utils.getHeadingFontFamily(),
        fontWeight: 'bold',
        color: Colors.primary
    }
})

export default Styles
