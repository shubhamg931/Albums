import React from 'react';
import {AppRegistry, View} from 'react-native';
import Header from './src/components/header';
import AlbumList from "./src/components/AlbumList";

const App = () => {
    return (
        <View>
            <Header headerText={'Most Awesome App'}/>
            <AlbumList/>
        </View>
    );
};

AppRegistry.registerComponent('firstApp', () => App);
