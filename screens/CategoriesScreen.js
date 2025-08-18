import { FlatList } from 'react-native';
import { CATEGORIES } from '../data/dummy-data'
import CategoryGridTile from "../components/CategoryGridTile"


function renderCategoryItem(data, nav){
    function pressHandler(){
        nav.navigate("MeaksOverview",
            {
                categoryId: data.item.id
            })
    }
    return <CategoryGridTile title={data.item.title} color={data.item.color} onPress={pressHandler}/>
}

function CategoriesScreen({navigation}) {
    return (
        <>
            <FlatList data={CATEGORIES}
                keyExtractor={(item) => item.id}
                renderItem={(item) =>  renderCategoryItem(item,navigation)}
                numColumns={2} />
        </>
    )
}

export default CategoriesScreen;