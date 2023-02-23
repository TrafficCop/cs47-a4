import { Image, Text, View, StyleSheet, Dimensions, Pressable } from 'react-native'
import { Themes } from '../assets/Themes'
import Ionicons from '@expo/vector-icons/Ionicons';

// get width of screen
const { width } = Dimensions.get('window');
const thirty = "28%";
const three = "1%";
const p2 = "3%";

const Song = ({ song, nav, tracks, idx }) => {
    let seconds = ((song.duration % 60000) / 1000).toFixed(0);
    seconds = seconds < 10 ? '0' + seconds : seconds;
    let time = Math.floor(song.duration / 60000) + ":" + seconds
    const hundo = '100%';
    const p1 = "8%";
    const p3 = "15%"
    
    return (
        <Pressable onPress={() => nav.navigate('DetailScreen', {url: tracks[idx]["externalUrl"]})}>
        <View style={styles.container}>
            
            <View style= {{ width: p1, display: 'flex', justifyContent: 'center'}}>
                <Pressable onPress={() => nav.navigate('PreviewScreen', {url: tracks[idx]["previewUrl"]})}>
                    <Ionicons name="play-circle" size={28} color="green" />
                </Pressable>
            </View>

            <View style={{ width: p3, height: undefined, aspectRatio: 1, marginRight: p2, }}>
                <Image source={{ uri: song.imageUrl }}  style={{ width: hundo, height: hundo }} />
            </View>

            <View style={styles.subContainer}>
                <Text numberOfLines = { 1 } style={styles.mainText}>{song.songTitle}</Text>
                <Text numberOfLines = { 1 } style={styles.descText}>{song.songArtists[0].name}</Text>
            </View>
            
            <View style={styles.subContainer}>
                <Text numberOfLines = { 1 } style={styles.mainText}>{song.albumName}</Text>
            </View>

            <View style= {{ width: 0.08*width }}>
                <Text numberOfLines = { 1 } style={styles.mainText}>{time}</Text>
            </View>
            
        </View>
        </Pressable>
    )
}

const styles = StyleSheet.create({
    mainText: {
        color: Themes.colors.white,
    },
    descText: {
        color: Themes.colors.gray,
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'center', //flex-start
        alignItems: 'center',
        marginBottom: 18, // 18
    },
    subContainer: {
        marginRight: p2,
        width: thirty,
    }
});

export default Song;