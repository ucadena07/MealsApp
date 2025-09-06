import { View, StyleSheet, Text, Pressable, Image, ScrollView, Button } from 'react-native'
import { useContext, useLayoutEffect } from 'react'
import { MEALS } from '../data/dummy-data';
import MealDetails from '../components/MealDetails';
import { withSafeAreaInsets } from 'react-native-safe-area-context';
import Subtitle from '../components/MealDetails/Subtitle';
import List from '../components/MealDetails/List';
import IconButton from '../components/IconButton';
import { useDispatch, useSelector } from 'react-redux';
import {addFavorite, removeFavorite} from '../store/redux/favorite'
//import { FavoritesContext } from '../store/context/favorites_context';

function MealDetailsScreen({ route, navigation }) {
    //const favoritesMealsContext = useContext(FavoritesContext)

    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids)
    const dispatch = useDispatch()

    const mealId = route.params.mealId

    const isFavorite = favoriteMealIds.includes(mealId)
    const selectedMeal = MEALS.find((it) => it.id === mealId)
    function headerButtonPressHandler() {
        if(isFavorite){
            //favoritesMealsContext.removeFavorite(mealId)
            dispatch(removeFavorite({id: mealId}))
        }else{
           // favoritesMealsContext.addFavorite(mealId)
           dispatch(addFavorite({id: mealId}))
        }
    }

    useLayoutEffect(() => {
        navigation.setOptions({
            headerRight: () => { return <IconButton onPress={headerButtonPressHandler} size={24} color={"white"} icon={isFavorite ? 'star':'star-outline'} /> }
        })
    }, [navigation, headerButtonPressHandler])

    return (
        <ScrollView>
            <Image source={{ uri: selectedMeal.imageUrl }} style={styles.image} />
            <Text style={styles.title}>{selectedMeal.title}</Text>
            <MealDetails duration={selectedMeal.duration} complexity={selectedMeal.complexity} affordability={selectedMeal.affordability} textStyle={styles.textStyle} />

            <View style={styles.listOuterContainer}>
                <View style={styles.listContainer}>
                    <Subtitle>Ingredients</Subtitle>
                    <List items={selectedMeal.ingredients} />
                    <Subtitle>Steps</Subtitle>
                    <List items={selectedMeal.steps} />
                </View>
            </View>
        </ScrollView >
    )
}

export default MealDetailsScreen;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: 350
    },
    title: {
        fontWeight: 'bold',
        fontSize: 24,
        margin: 8,
        textAlign: 'center',
        color: 'white'
    },
    detailText: {
        color: 'white'
    },
    subtitle: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold',
        textAlign: 'center',

    },
    subtitleContainer: {
        borderBottomColor: '#5f311aff',
        borderBottomWidth: 2,
        marginHorizontal: 24,
        marginVertical: 4,
        padding: 6,
    },
    listOuterContainer: {
        alignItems: 'center'
    },
    listContainer: {
        width: '80%'
    }
})