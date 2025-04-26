import { Text, View, StyleSheet, FlatList } from "react-native";
import { MEALS, CATEGORIES } from "../data/dummy-data";
import MealItem from "../components/MealItem";
import { useEffect, useLayoutEffect } from "react";

export default function MealsOverviewScreen({ route, navigation }) {
    const catId = route.params.categoryId;

    const displayedMeals = MEALS.filter((mealItem) => {
        return mealItem.categoryIds.indexOf(catId) >= 0;
    });

    // useEffect(() => {
    //     const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

    //     navigation.setOptions({
    //         title: categoryTitle
    //     });
    // }, [catId, navigation]);

    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === catId).title;

        navigation.setOptions({
            title: categoryTitle
        });
    }, []);

    return (
        <View style={styles.container}>
            <FlatList
                data={displayedMeals}
                keyExtractor={(item) => item.id}
                renderItem={(itemData) => {
                    const item = itemData.item;
                    const mealItemProps = {
                        id: item.id,
                        title: item.title,
                        imageUrl: item.imageUrl,
                        affordability: item.affordability,
                        complexity: item.complexity,
                        duration: item.duration
                    }

                    return (
                        <MealItem {...mealItemProps} />
                    );
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16
    }
});