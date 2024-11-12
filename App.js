import React, { useState } from 'react';
import { View, Text, Image, Button, Alert, StyleSheet, ScrollView } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#4169e1', // Royal blue
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#ffffff', // White text for contrast
  },
  questionContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#ffffff', // White background for contrast
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: 'cover',
  },
  questionText: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 10,
    textAlign: 'center',
    color: '#333', // Dark text for readability on white background
  },
  picker: {
    backgroundColor: '#f5f5f5',
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonContainer: {
    marginTop: 20,
    alignItems: 'center',
  },
});


const Lesson3 = () => {
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
        <Text style={styles.title}>Animal Quiz</Text>
        {questions.map((question, index) => (
            <View key={question.id} style={styles.questionContainer}>
              <Image source={question.image} style={styles.image} />
              <Text style={styles.questionText}>What animal is this?</Text>
              <Picker
                  selectedValue={answers[index]}
                  onValueChange={(value) => selectAnswer(index, value)}
                  style={styles.picker}
              >
                <Picker.Item label="Select an answer..." value={null} />
                {question.options.map((option) => (
                    <Picker.Item key={option} label={option} value={option} />
                ))}
              </Picker>
            </View>
        ))}
        <View style={styles.buttonContainer}>
          <Button title="Submit Answers" onPress={handleSubmit} color="#ffdd57" />
        </View>
      </ScrollView>
  );
};


export default Lesson3;
