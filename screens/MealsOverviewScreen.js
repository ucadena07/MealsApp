import { View, Text, StyleSheet, FlatList } from 'react-native'
import { CATEGORIES, MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';
import { useLayoutEffect } from 'react';

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



    function renderMealIteam(itemData) {
        return <>
            <MealItem {...itemData.item} />
        </>
    }
    return (
        <>
            <View style={styles.container}>
                <FlatList data={displayedMeals} keyExtractor={(item) => item.id} renderItem={renderMealIteam} />
            </View>
        </>
    )
}

export default MealsOverviewScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})