import { FlatList, StyleSheet } from "react-native";
import { CATEGORIES } from "../data/dummy-data";
import CategoryGridTile from "../components/CategoryGridTile";

export default function CategoriesScreen({ navigation }) {

    function pressHandler() {
        navigation.navigate('MealsOverview');
    }

    return (
        <FlatList
            data={CATEGORIES}
            keyExtractor={(item) => item.id}
            renderItem={(itemData) => {
                return (
                    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} />
                )
            }}
            numColumns={2}
        />
    );
}

