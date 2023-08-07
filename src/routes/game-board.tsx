import React, { useState, useEffect } from 'react';
import { Card, CardContent, Grid, Typography, Box } from '@mui/material';
import CircularProgress from '@mui/material/CircularProgress';

interface QuestionAnswer {
  question: string;
  correctAnswer: string;
  answers: string[];
}

const sampleQuestionsAndAnswers: QuestionAnswer[] = [
    {
        question: 'What is Batman\'s guilty pleasure?',
        correctAnswer: 'The Bat Signal',
        answers: [
          'Robin\'s one-liners',
          'The Batmobile',
          'The Joker\'s jokes',
          'The Bat Signal',
          'Batarangs',
          'Alfred\'s cooking',
        ],
      },
      {
        question: 'Why did the chicken cross the road?',
        correctAnswer: 'To get to the other side',
        answers: [
          'To catch the worm',
          'To escape from the farmer',
          'To get to the other side',
          'To meet the other chickens',
          'To join a band',
          'To play chicken hockey',
        ],
      },
      {
        question: 'What do you call a cow with no legs?',
        correctAnswer: 'Ground beef',
        answers: [
          'Moo moo',
          'Beefy',
          'Ground beef',
          'Cow down',
          'Steak',
          'Burger',
        ],
      },
      {
        question: 'Why do we never tell secrets on a farm?',
        correctAnswer: 'Because the potatoes have eyes and the corn has ears.',
        answers: [
          'Because the animals can hear us',
          'Because farmers are nosy',
          'Because the potatoes have eyes and the corn has ears.',
          'Because secrets are bad.',
          'Because the scarecrow listens',
          'Because the barn talks',
        ],
      },
      {
        question: 'What do you get when you cross a snowman and a dog?',
        correctAnswer: 'Frostbite',
        answers: [
          'Snowpaw',
          'Frostbite',
          'Snowdog',
          'Snowman-dog',
          'Snowman-friend',
          'Icedog',
        ],
      },
      {
        question: 'What is orange and sounds like a parrot?',
        correctAnswer: 'A carrot',
        answers: [
          'A parrot',
          'An orange',
          'A carrot',
          'A bird',
          'A tangerine',
          'A canary',
        ],
      },
      // Add more questions and answers here...
    ];

  
const generateRandomQuestions = (): QuestionAnswer => {
  const randomIndex = Math.floor(Math.random() * sampleQuestionsAndAnswers.length);
  return sampleQuestionsAndAnswers[randomIndex];
};


const FirstRow: React.FC<{ question: string }> = ({ question }) => {
  return (
    <Grid item xs={12}>
      <Card
        sx={{
          border: '4px solid black',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          margin: '0 auto', // Center the first card on the screen
          borderRadius: '5%',
          height: 350,
          width: 200,
        }}
      >
        <CardContent>
          <Typography variant="h5">{question}</Typography>
        </CardContent>
      </Card>
    </Grid>
  );
};

const SecondRow: React.FC<{ answers: string[]; onAnswerSelected: (answer: string) => void }> = ({
  answers,
  onAnswerSelected,
}) => {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleCardClick = (answer: string) => {
    setSelectedAnswer(answer);
    onAnswerSelected(answer);
  };

  return (
    <Grid container spacing={4}>
      {answers.map((answer, index) => (
        <Grid key={index} item xs={12} sm={6} md={4} lg={2}>
          <Card
            onClick={() => handleCardClick(answer)}
            elevation={selectedAnswer === answer ? 4 : 1}
            sx={{
              cursor: 'pointer',
              backgroundColor: selectedAnswer === answer ? '#cdbcbc' : 'white',
              border: '4px solid black',
              borderRadius: '10%',
              width: 150,
              height: 250,
            }}
          >
            <CardContent>
              <Typography variant="h6">{answer}</Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
};

const GameBoard: React.FC = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [questions, setQuestions] = useState<QuestionAnswer[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [isAnswerCorrect, setIsAnswerCorrect] = useState<boolean | null>(null);

  useEffect(() => {
    // Simulate a delay of 4 seconds
    const timer = setTimeout(() => {
      setIsLoading(false);
      const generatedQuestions: QuestionAnswer[] = Array.from({ length: 5 }).map(() =>
        generateRandomQuestions()
      );
      setQuestions(generatedQuestions);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  const handleAnswerSelected = (answer: string) => {
    setSelectedAnswer(answer);
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = answer === currentQuestion.correctAnswer;
    setIsAnswerCorrect(isCorrect);
    setTimeout(() => {
      setSelectedAnswer(null);
      setIsAnswerCorrect(null);
      if (currentQuestionIndex < questions.length - 1) {
        setCurrentQuestionIndex((prevIndex) => prevIndex + 1);
      } else {
        // Game Over, you can reset the game here if needed
      }
    }, 2000); // 2 seconds timeout before moving to the next question
  };

  if (isLoading) {
    return (
      <Grid container justifyContent="center" alignItems="center" minHeight="100vh">
        <CircularProgress size={80} thickness={5} />
        <Typography position="absolute">searching for games...</Typography>
      </Grid>
    );
  }

//   const currentQuestion = questions[currentQuestionIndex];

  return (
    <>
    <div>Game Board!</div>

    <Box p={2}>
      <Grid container spacing={16}>
        <Grid item xs={12}>
          <FirstRow question={questions[currentQuestionIndex].question} />
        </Grid>
        <Grid item xs={12}>
          <SecondRow
            answers={questions[currentQuestionIndex].answers}
            onAnswerSelected={handleAnswerSelected}
          />
        </Grid>
      </Grid>
    </Box>

    <Typography variant="h6" align="center" color={isAnswerCorrect ? 'green' : 'red'}>
      {isAnswerCorrect === true ? 'Correct Answer!' : isAnswerCorrect === false ? 'Wrong Answer!' : ''}
    </Typography>
  </>
  );
};

export default GameBoard;
