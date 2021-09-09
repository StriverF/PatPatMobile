import React, { useEffect } from "react"
import { SafeAreaView, FlatList, ViewStyle } from "react-native"
import { observer } from "mobx-react-lite"
import { useStores } from "../../models"
import { CategoryItem } from "../../components/category-item/category-item"

const FULL: ViewStyle = { flex: 1, justifyContent: 'center', alignItems: 'center' }
export const CategoriesScreen = observer(function CategoriesScreen() {
  const { categoryStore } = useStores()
  const DATA = categoryStore.categories

  const renderItem = ({ item }) => (
    <CategoryItem categoryItem={item} />
  );

  useEffect(() => {
    async function fetchData() {
      await categoryStore.getCategories()
    }

    fetchData()
  }, [])
  return (
    <SafeAreaView testID="CategoriesScreen" style={FULL}>
      <FlatList data={DATA}
      renderItem={renderItem}/>
    </SafeAreaView>
  )
})