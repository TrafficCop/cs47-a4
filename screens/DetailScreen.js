import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import {WebView} from 'react-native-webview'

const DetailScreen = ({route}) => {
  return (
    <WebView startInLoadingState={true}  style = {{ width: Dimensions.get('window').width, height: Dimensions.get('window').height}}  source={{ uri: route.params.url}}  />
  )
}

export default DetailScreen

const styles = StyleSheet.create({})