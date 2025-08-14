import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from "../components/CategoryGridTile"


function renderCategoryItem(data){
    return <CategoryGridTile title={data.item.title} color={data.item.color}/>
}

function CategoriesScreen() {
    return (
        <>
            <FlatList data={CATEGORIES}
                keyExtractor={(item) => item.id}
                renderItem={(item) =>  renderCategoryItem(item)}
                numColumns={2} />
        </>
    )
}

export default CategoriesScreen;