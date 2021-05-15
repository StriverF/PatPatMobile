import React from "react"
import { View, Text, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"

const FULL: ViewStyle = { flex: 1, justifyContent: 'center', alignItems: 'center' }
export const LifeScreen = observer(function HomeScreen() {
  return (
    <View testID="LifeScreen" style={FULL}>
      <Text>社群页面</Text>
    </View>
  )
})