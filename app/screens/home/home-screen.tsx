import React from "react"
import { View, Text, ViewStyle, Button } from "react-native"
import { observer } from "mobx-react-lite"
import i18n from "i18n-js"

const FULL: ViewStyle = { flex: 1, justifyContent: 'center', alignItems: 'center' }
export const HomeScreen = observer(function HomeScreen() {


  return (
    <View testID="HomeScreen" style={FULL}>
      <Text>首页页面</Text>
      <Button title="切换繁体中文" onPress={() => { i18n.locale='zh-HK';i18n.currentLocale();console.log("切换繁体中文") }} />
    </View>
  )
})