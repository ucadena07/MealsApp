import {createContext, useState} from 'react'

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {}
});

function FavoritesContextProvider({children}){
    const [favoriteMealsIds, setFavoriteMealIds] = useState([])

    function addFavorite(id){
        setFavoriteMealIds((currentState) => [...currentState,id])
    }

    function removeFavorite(id){
        setFavoriteMealIds((currentState) => currentState.filter(it => it !== id))
    }

    const value = {
        ids: favoriteMealsIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite
    }


    return <FavoritesContext.Provider value={value}>
        {children}
    </FavoritesContext.Provider>
}

export default FavoritesContextProvider;


