/**
 * This is the navigator you will modify to display the logged-in screens of your app.
 * You can use RootNavigator to also display an auth flow or other user flows.
 *
 * You'll likely spend most of your time in this file.
 */
import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { CategoriesScreen, SearchScreen } from "../../screens"
import { ViewStyle, TextStyle, Image } from "react-native"
import { Button } from "../../components"
import commonIcons from "../common/icons"
 
 /**
  * This type allows TypeScript to know what routes are defined in this navigator
  * as well as what properties (if any) they might take when navigating to them.
  *
  * If no params are allowed, pass through `undefined`. Generally speaking, we
  * recommend using your MobX-State-Tree store(s) to keep application state
  * rather than passing state through navigation params.
  *
  * For more information, see this documentation:
  *   https://reactnavigation.org/docs/params/
  *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
  */
export type PrimaryParamList = {
  categories: undefined,
  search: undefined
}
 
 // Documentation: https://reactnavigation.org/docs/stack-navigator/
 const Stack = createStackNavigator<PrimaryParamList>()
 
export function CategoriesNavigator() {
  const CartIcon = () => {
    // eslint-disable-next-line react-native/no-inline-styles
    return <Image style={{ height:'120%', width: '120%' }} resizeMode={'contain'} source={commonIcons.cart}></Image>
  }
  

  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: true,
      }}
    >
      <Stack.Screen name="categories" component={CategoriesScreen}
      options={({ navigation }) => ({
       title: '分类',
       // eslint-disable-next-line react/display-name
       headerTitle: () => (
        <Button style={searchBar} textStyle={searchBarTextStyle} tx="common.search" onPress={() => navigation.navigate("search")}/>
      ),
       headerTitleAlign: 'left',
       // eslint-disable-next-line react/display-name
       headerRight: () => (
         <Button style={rightItemStyle} onPress={() => {navigation.navigate("cart", {screen: 'Account'})}} >
          <CartIcon/>
        </Button>
       )
     })}
     />
      <Stack.Screen name="search" component={SearchScreen} />
    </Stack.Navigator>
   )
 }

 const searchBar: ViewStyle = {
  marginLeft: 0,
  paddingLeft: 4,
  paddingTop: 4,
  paddingBottom: 4,
  height: 30,
  alignItems: "stretch",
  borderRadius: 16,
  backgroundColor: "#ececec",
}
const searchBarTextStyle: TextStyle = {
  // backgroundColor: "#ccc",
  color: '#999',
  fontSize: 14
}

const rightItemStyle: ViewStyle = {
  marginRight: 10,
  // padding: 6,
  width: 50,
  height: 30,
  backgroundColor: '#ccc'
}
 
 /**
  * A list of routes from which we're allowed to leave the app when
  * the user presses the back button on Android.
  *
  * Anything not on this list will be a standard `back` action in
  * react-navigation.
  *
  * `canExit` is used in ./app/app.tsx in the `useBackButtonHandler` hook.
  */
 const exitRoutes = ["categories"]
 export const canExit = (routeName: string) => exitRoutes.includes(routeName)
 