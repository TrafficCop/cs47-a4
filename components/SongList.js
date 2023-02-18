import { FlatList, Text, View } from 'react-native';
import Song from './SongEntry';

const SongList = ({tracks}) => {
    let hundo = '100%';
    let eighty = '80%';
    return (
    <View style={{width: hundo, height: hundo}}>
        <FlatList 
        data={tracks} 
        renderItem={({ item, index }) => {
                        return (
                            <Song song={item} idx={index} />
                        );
                    }} 
        keyExtractor={(item) => item.songTitle} />
    </View>
    );
};

export default SongList;