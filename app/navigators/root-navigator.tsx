/**
 * The root navigator is used to switch between major navigation flows of your app.
 * Generally speaking, it will contain an auth flow (registration, login, forgot password)
 * and a "main" flow (which is contained in your MainNavigator) which the user
 * will use once logged in.
 */
import React from "react"
import { Image } from 'react-native';
import { NavigationContainer, NavigationContainerRef } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { HomeNavigator } from "./tab/home-navigator"
import { CategoriesNavigator } from "./tab/categories-navigator"
import { LifeNavigator } from "./tab/life-navigator"
import { AccountNavigator } from "./tab/account-navigator"
import tabIcons from './tab/icons';
import i18n from "i18n-js"

/**
 * This type allows TypeScript to know what routes are defined in this navigator
 * as well as what properties (if any) they might take when navigating to them.
 *
 * We recommend using MobX-State-Tree store(s) to handle state rather than navigation params.
 *
 * For more information, see this documentation:
 *   https://reactnavigation.org/docs/params/
 *   https://reactnavigation.org/docs/typescript#type-checking-the-navigator
 */
export type RootParamList = {
  homeStack: undefined,
  categoryStack: undefined,
  lifeStack: undefined,
  account: undefined,
}

const Stack = createStackNavigator<RootParamList>()
const Tab = createBottomTabNavigator();

const HomeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="homeStack"
        component={HomeNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}

const CategoriesStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="categoryStack"
        component={CategoriesNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}

const LifeStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="lifeStack"
        component={LifeNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}

const AccountStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen
        name="account"
        component={AccountNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  )
}

export const RootNavigator = React.forwardRef<
  NavigationContainerRef,
  Partial<React.ComponentProps<typeof NavigationContainer>>
>((props, ref) => {
  return (
    <NavigationContainer {...props} ref={ref}>
      <Tab.Navigator screenOptions={({ route }) => ({
        // eslint-disable-next-line react/display-name
          tabBarIcon: ({ focused }) => {
            let iconPath: any
            switch (route.name) {
              case "Home": {
                iconPath = focused ? tabIcons.homeActive : tabIcons.home 
                break;
              }
              case "Categories": {
                iconPath = focused ? tabIcons.categoriesActive : tabIcons.categories 
                break;
              }
              case "Life": {
                iconPath = focused ? tabIcons.lifeActive : tabIcons.life 
                break;
              }
              case "Account": {
                iconPath = focused ? tabIcons.accountActive : tabIcons.account 
                break;
              }
              default: {
                iconPath = focused ? tabIcons.homeActive : tabIcons.home 
                break;
              }
            }
            return <Image resizeMode={'contain'} source={iconPath}/>
          },
        })}
        tabBarOptions={{
          activeTintColor: '#ff2556',
          inactiveTintColor: 'gray',
        }}>
        <Tab.Screen name="Home" options={{tabBarLabel: i18n.t('tabBar.home')}} component={HomeStack} />
        <Tab.Screen name="Categories" options={{tabBarLabel: i18n.t('tabBar.categories')}} component={CategoriesStack} />
        <Tab.Screen name="Life" options={{tabBarLabel: i18n.t('tabBar.life')}} component={LifeStack} />
        <Tab.Screen name="Account" options={{tabBarLabel: i18n.t('tabBar.account')}} component={AccountStack} />
      </Tab.Navigator>
    </NavigationContainer>
  )
})

RootNavigator.displayName = "RootNavigator"
