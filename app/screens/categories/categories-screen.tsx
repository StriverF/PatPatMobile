import React from "react"
import { View, Text, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"

const FULL: ViewStyle = { flex: 1, justifyContent: 'center', alignItems: 'center' }
export const CategoriesScreen = observer(function CategoriesScreen() {
  return (
    <View testID="CategoriesScreen" style={FULL}>
      <Text>分类页面</Text>
    </View>
  )
})