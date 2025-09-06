import {View,Text} from 'react-native'
import MealsList from '../components/MealsList/MealList';
import { useContext } from 'react';
import { FavoritesContext } from '../store/context/favorites_context';
import { MEALS } from '../data/dummy-data';
import { useSelector } from 'react-redux';
function FavoritesScreen(){

    //const favoritesContext = useContext(FavoritesContext);
    const favoriteMealIds = useSelector((state) => state.favoriteMeals.ids)
    const favMeals = MEALS.filter(it => favoriteMealIds.includes(it.id))
    return (
        <MealsList displayedMeals={favMeals}/>
    )
}

export default FavoritesScreen;