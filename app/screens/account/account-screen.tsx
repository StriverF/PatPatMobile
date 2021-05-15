import React from "react"
import { View, Text, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"

const FULL: ViewStyle = { flex: 1, justifyContent: 'center', alignItems: 'center' }
export const AccountScreen = observer(function AccountScreen() {
  return (
    <View testID="AccountScreen" style={FULL}>
      <Text>个人中心页面</Text>
    </View>
  )
})