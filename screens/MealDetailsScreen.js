import { View, StyleSheet, Text, Pressable, Image } from 'react-native'
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';

function MealDetailsScreen({ route }) {
    const mealId = route.params.mealId
    const selectedMeal = MEALS.find((it) => it.id === mealId)
    return (
        <View>
            <Image source={{ uri: selectedMeal.imageUrl }} />
            <Text>{selectedMeal.title}</Text>
            <MealDetails duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability} />
            <Text>Ingredients</Text>
            {selectedMeal.ingredients.map((it) => (
                <Text key={it}>{it}</Text>
            ))}
            <Text>Steps</Text>
            {selectedMeal.steps.map((it) => (
                <Text key={it}>{it}</Text>
            ))}
        </View>
    )
}

export default MealDetailsScreen;