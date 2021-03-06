import React from "react"
import { View, Text, ViewStyle, Button } from "react-native"
import { observer } from "mobx-react-lite"
import i18n from "i18n-js"
import { useStores } from "../../models"

const FULL: ViewStyle = { flex: 1, justifyContent: 'center', alignItems: 'center' }
export const HomeScreen = observer(function HomeScreen() {

  const { langStore } = useStores()
  const mobxStatus = langStore.i18n.locale
  const i18nStatus = i18n.locale

  const switchLang = (lang) => {
    i18n.locale=lang;
    console.log(`切换${i18n.locale}`);
    langStore.saveI18n({locale: lang});

  }
  return (
    <View testID="HomeScreen" style={FULL}>
      <Text>首页页面</Text>
      <Button title="切换英文" onPress={()=>switchLang('en')} />
      <Button title="切换中文" onPress={()=>switchLang('zh-Hant-HK')} />
      <Text>Mobx状态：{mobxStatus}</Text>
      <Text>i18n状态：{i18nStatus}</Text>
    </View>
  )
})