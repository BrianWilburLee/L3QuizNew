import React, { useState } from 'react';
import { View, Text, Image, Button, Alert, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const App = () => {
  // Questions and Answers data
  const questions = [
    { id: 1, image: require('./img/bee.jpg'), options: ['Bee', 'Ant', 'Butterfly'], answer: 'Bee' },
    { id: 2, image: require('./img/kingfisher.jpg'), options: ['Eagle', 'Kingfisher', 'Penguin'], answer: 'Kingfisher' },
    { id: 3, image: require('./img/owl.jpg'), options: ['Sparrow', 'Owl', 'Falcon'], answer: 'Owl' },
  ];

  // State to track user answers
  const [answers, setAnswers] = useState(Array(questions.length).fill(null));

  // Function to handle answer selection
  const selectAnswer = (index, value) => {
    const updatedAnswers = [...answers];
    updatedAnswers[index] = value;
    setAnswers(updatedAnswers);
  };

  // Function to calculate score and display result
  const handleSubmit = () => {
    let score = 0;
    answers.forEach((answer, index) => {
      if (answer === questions[index].answer) {
        score += 1;
      }
    });
    Alert.alert(`You have ${score} correct answers!`);
  };

  return (
      <ScrollView contentContainerStyle={styles.container}>
        {questions.map((question, index) => (
            <View key={question.id} style={styles.questionContainer}>
              <Image source={question.image} style={styles.image} />
              <Text>What animal is this?</Text>
              <Picker
                  selectedValue={answers[index]}
                  onValueChange={(value) => selectAnswer(index, value)}
                  style={styles.picker}
              >
                <Picker.Item label="Select an item..." value={null} />
                {question.options.map((option) => (
                    <Picker.Item key={option} label={option} value={option} />
                ))}
              </Picker>
            </View>
        ))}
        <Button title="Submit Answers" onPress={handleSubmit} />
      </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    justifyContent: 'center',
  },
  questionContainer: {
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    resizeMode: 'cover',
  },
  picker: {
    marginVertical: 10,
  },
});

export default App;
