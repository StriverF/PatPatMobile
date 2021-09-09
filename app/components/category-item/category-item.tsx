import * as React from "react"
import { StyleProp, TextStyle, ImageStyle, View, ViewStyle, Image } from "react-native"
import { observer } from "mobx-react-lite"
import { color, typography } from "../../theme"
import { Text } from "../"
import { flatten } from "ramda"
import { Category } from "../../models/category/category"

const CONTAINER: ViewStyle = {
  justifyContent: "flex-start",
  flexDirection: "row",
  width: 360,
  marginHorizontal: 6,
  marginVertical: 6,
  padding: 10,
  borderRadius: 10,
  backgroundColor: '#e9e9e9'
}

const IMAGE: ImageStyle = {
  height: 80,
  width: 80,
}

const TEXT: TextStyle = {
  fontFamily: typography.primary,
  marginLeft: 10,
  paddingTop: 30,
  fontSize: 14,
  color: color.dim,
  // backgroundColor: "red"
}

export interface CategoryItemProps {
  /**
   * An optional style override useful for padding & margin.
   */
  style?: StyleProp<ViewStyle>,
  categoryItem?: Category
}

/**
 * Describe your component here
 */
export const CategoryItem = observer(function CategoryItem(props: CategoryItemProps) {
  const { style, categoryItem } = props
  const styles = flatten([CONTAINER, style])

  return (
    <View style={styles}>
      <Image style={IMAGE} source={{uri: categoryItem.icon}}></Image>
      <Text style={TEXT}>{categoryItem.title}</Text>
    </View>
  )
})
