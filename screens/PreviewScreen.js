import { StyleSheet, Text, View, Dimensions } from 'react-native'
import React from 'react'
import {WebView} from 'react-native-webview'

const PreviewScreen = ({route}) => {
  //<Text>{route.params.url}</Text>
  return (
    <WebView startInLoadingState={true}  style = {{ width: Dimensions.get('window').width, height: Dimensions.get('window').height}}  source={{ uri: route.params.url}}  />
  )
}

export default PreviewScreen

const styles = StyleSheet.create({})