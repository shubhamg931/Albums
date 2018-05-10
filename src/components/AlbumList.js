import React, {Component} from 'react';
import {ScrollView, Text, View} from "react-native"
import axios from 'axios';
import AlbumDetail from './AlbumDetail';

class AlbumList extends Component{
    state = {
        albums: []
    };

    componentWillMount(){
        console.log("heheheheh");
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({albums: response.data}));
    }

    renderAlbums(){
        return this.state.albums.map((album) => {
                return (
                    <AlbumDetail key={album.title} record={album}/>
                );
            });
    };
    render() {
        console.log(this.state);

        const {listStyle} = styles;
        return (
            <ScrollView>
                {/*<Text style={listStyle}>List :)</Text>*/}
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

const styles = {
    listStyle: {
        fontSize: 20,
        color: "black"
    }
};

export default AlbumList;