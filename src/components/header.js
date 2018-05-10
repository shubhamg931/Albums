import React from 'react';
import {Text, View} from 'react-native';

const Header = (props) => {
    const {textStyle, viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>{props.headerText}</Text>
        </View>
    );
};

const styles = {
    textStyle: {
        fontSize: 30,
        color: "white",
        fontWeight: '600'
    },
    viewStyle: {
        padding: 10,
        backgroundColor: "#e79627",
        justifyContent: "center",
        alignItems: "center"
    },

};

export default Header;