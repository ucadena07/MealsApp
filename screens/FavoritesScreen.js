import {View,Text} from 'react-native'
import MealsList from '../components/MealsList/MealList';
import { useContext } from 'react';
import { FavoritesContext } from '../store/context/favorites_context';
import { MEALS } from '../data/dummy-data';
function FavoritesScreen(){

    const favoritesContext = useContext(FavoritesContext);
    const favMeals = MEALS.filter(it => favoritesContext.ids.includes(it.id))
    return (
        <MealsList displayedMeals={favMeals}/>
    )
}

export default FavoritesScreen;