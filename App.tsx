import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItem from './components/GoalItem';
import { Goal } from './types';

export default function App() {
  const [courseGoals, setCourseGoals] = useState<Goal[]>([]);
  const [modalVisible, setModalVisible] = useState(false);

  const addGoalHandler = (text: string) => {
    setCourseGoals((prevState) => [
      ...prevState,
      { id: Math.random().toString(), text },
    ]);
  };

  const deleteGoalHandler = (id: string) => {
    setCourseGoals((prevState) => prevState.filter((goal) => goal.id !== id));
  };

  const startAddGoalHandler = () => {
    setModalVisible(true);
  };

  const finishAddGoalHandler = () => {
    setModalVisible(false);
  };

  return (
    <>
      <StatusBar style="light" />
      <View style={styles.appContainer}>
        <Button
          title="Add goal"
          color="#a065ec"
          onPress={startAddGoalHandler}
        />
        <GoalInput
          visible={modalVisible}
          addHandler={addGoalHandler}
          onClose={finishAddGoalHandler}
        />
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
    </>
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
    marginTop: 10,
  },
});
