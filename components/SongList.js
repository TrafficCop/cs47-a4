import { FlatList, Text, View, StyleSheet } from 'react-native';
import Song from './SongEntry';

const SongList = ({tracks, nav}) => {
    let hundo = '100%';
    let ninety = '90%';
    return (
    <View style={{width: hundo, height: ninety}}>
        <FlatList 
        data={tracks} 
        renderItem={({ item, index }) => {
                        return (
                            <Song tracks={tracks} nav={nav} song={item} idx={index} />
                        );
                    }} 
        keyExtractor={(item) => item.songTitle} />
    </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})

export default SongList;