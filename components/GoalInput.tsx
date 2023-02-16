import React, { useState } from 'react';
import {
  Button,
  Modal,
  StyleSheet,
  TextInput,
  View,
  Image,
} from 'react-native';

interface Props {
  addHandler: (text: string) => void;
  onClose: () => void;
  visible: boolean;
}

const GoalInput = ({ addHandler, visible, onClose }: Props) => {
  const [enteredGoalText, setEnteredGoalText] = useState('');

  const goalInputHandler = (text: string) => {
    setEnteredGoalText(text);
  };

  const addGoalHandler = () => {
    addHandler(enteredGoalText);
    setEnteredGoalText('');
    onClose();
  };

  return (
    <Modal visible={visible} animationType="slide" onRequestClose={onClose}>
      <View style={styles.inputContainer}>
        <Image
          source={require('../assets/images/goal.png')}
          style={styles.image}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Your course goal!"
          onChangeText={goalInputHandler}
          value={enteredGoalText}
        />
        <View style={styles.actions}>
          <View style={styles.button}>
            <Button title="Add goal" onPress={addGoalHandler} color="#b180f0" />
          </View>
          <View style={styles.button}>
            <Button title="Cancel" onPress={onClose} color="#f31282" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    width: '100%',
    marginRight: 8,
    backgroundColor: '#e4d0ff',
    color: '#120438',
    borderRadius: 6,
    padding: 16,
  },
  actions: {
    flexDirection: 'row',
    marginTop: 16,
  },
  button: {
    width: '30%',
    marginHorizontal: 6,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});

export default GoalInput;
