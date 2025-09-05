import { View, Text, StyleSheet, FlatList } from 'react-native'
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealsList/MealItem'
import { useLayoutEffect } from 'react';
import MealsList from '../components/MealsList/MealList';

function MealsOverviewScreen({ route, navigation }) {
    const catId = route.params.categoryId;
    const displayedMeals = MEALS.filter((it) => {
        return it.categoryIds.indexOf(catId) >= 0;
    })

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title

        navigation.setOptions({
            title: categoryTitle
        })
    }, [catId, navigation])



   return <MealsList displayedMeals={displayedMeals}/>
}

export default MealsOverviewScreen;

