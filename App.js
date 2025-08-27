import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import CategoriesScreen from './screens/CategoriesScreen';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import MealsOverviewScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen';
import { createDrawerNavigator } from '@react-navigation/drawer'
import FavoritesScreen from './screens/FavoritesScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();
function DrawerNavigator() {
  return (<Drawer.Navigator>
    <Drawer.Screen name="Categories" component={CategoriesScreen}/>
     <Drawer.Screen name="Favorites" component={FavoritesScreen}/>
  </Drawer.Navigator>
  )
}

export default function App() {
  return (
    <>
      <StatusBar style='light' />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{
          headerStyle: { backgroundColor: '#351404' },
          headerTintColor: 'white',
          contentStyle: {
            backgroundColor: '#3f2f25'
          }
        }}>
          <Stack.Screen name='DrawerScreen' component={DrawerNavigator}
            options={{
              headerShown:false
            }}/>
          <Stack.Screen name='MeaksOverview' component={MealsOverviewScreen}
            options={({ route, navigation }) => {
              const catId = route.params.categoryId
              return {
                title: catId
              }
            }} />
          <Stack.Screen name='MealDetails' component={MealDetailsScreen}
            options={{
              title: "Details"

            }} />
        </Stack.Navigator>
      </NavigationContainer>
    </>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
