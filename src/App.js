import { useState } from 'react';
import './App.css';
import Statistics from "./components/Statistics"
import FeedbackOptions from "./components/FeedbackOptions"
import Section from "./components/Section";
import Notification from "./components/Notification"

function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleIncrement = (name) => {
    switch (name) {
      case 'good':
        setGood(good => good + 1);
        break;

      case 'neutral':
        setNeutral(neutral => neutral + 1);
        break;

      case 'bad':
        setBad(bad => bad + 1);
        break;

      default:
        break;
    }
  };

  const countTotalFeedback = () => {
    const totalFeedback = good + neutral + bad;
    return totalFeedback;
  };

  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return (total > 0 ? Math.round((good / total) * 100) : 0);
  };

  const persentage = countPositiveFeedbackPercentage();
  const totalSum = countTotalFeedback();

  return (
    <>
      <Section title="Please leave the feedback">
        <FeedbackOptions
          options={['good', 'neutral', 'bad']}
          onLeaveFeedback={handleIncrement}
        />
      </Section>

      <Section title="Statistics">
        {totalSum < 1 ?
          (<Notification message="No feedback given"></Notification>) :
          (<Statistics good={good}
            neutral={neutral}
            bad={bad}
            total={totalSum}
            persentage={persentage} />)
        }
      </Section>
    </>
  )

}


export default App;