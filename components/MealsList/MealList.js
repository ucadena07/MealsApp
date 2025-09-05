import { View, Text, StyleSheet, FlatList } from 'react-native'
import MealItem from './MealItem'
import { useLayoutEffect } from 'react';

function MealsList({displayedMeals}) {


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

export default MealsList;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
})