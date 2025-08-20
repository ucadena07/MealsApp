import { View, Text, StyleSheet, FlatList } from 'react-native'
import { MEALS } from '../data/dummy-data';
import MealItem from '../components/MealItem';

function MealsOverviewScreen({ route }) {
    const catId = route.params.categoryId;
    const displayedMeals = MEALS.filter((it) => {
        return it.categoryIds.indexOf(catId) >= 0;
    })

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