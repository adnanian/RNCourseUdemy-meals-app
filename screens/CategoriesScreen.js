import { FlatList } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

export default function CategoriesScreen({ navigation }) {

    function pressHandler(categoryId) {
        navigation.navigate('MealsOverview', { categoryId: categoryId });
    }

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => {
                return (
                    <CategoryGridTile
                        title={itemData.item.title}
                        color={itemData.item.color}
                        onPress={() => pressHandler(itemData.item.id)}
                    />
                )
            }}
            numColumns={2}
        />
    );
}

