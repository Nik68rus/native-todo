import { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import { Goal } from './types';

export default function App() {
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);

  const addGoalHandler = (text: string) => {
    setCourseGoals((prevState) => [
      ...prevState,
      { id: Math.random().toString(), text },
    ]);
  };

  const deleteGoalHandler = (id: string) => {
    setCourseGoals(courseGoals.filter((goal) => goal.id !== id));
  };

  return (
    <View style={styles.appContainer}>
      <GoalInput addHandler={addGoalHandler} />
      <View style={styles.goalsContainer}>
        <FlatList
          data={courseGoals}
          alwaysBounceVertical={false}
          keyExtractor={(item) => item.id}
          renderItem={(itemData) => (
            <GoalItem item={itemData.item} onDelete={deleteGoalHandler} />
          )}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    paddingTop: 70,
    paddingHorizontal: 16,
  },
  goalsContainer: {
    flex: 5,
  },
});
