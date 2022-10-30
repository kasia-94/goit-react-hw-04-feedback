import React from 'react';
import { Statictics } from './Statistics/Statistics';
import { Section } from './Section/Section';
import { FeedbackOptions } from './FeedbackOptions/FeedbackOptions';
import { Notification } from './Notification/Notification';
import { useState } from 'react';

export function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0,
  });

  function addFeedback(value) {
    setFeedback(prevState => ({ ...prevState, [value]: prevState[value] + 1 }));
  }

  const getTotal = () => {
    return Object.values(feedback).reduce(
      (prevValue, curValue) => prevValue + curValue,
      0
    );
  };

  const getPositiveFeedbackPercentage = () => {
    return Math.floor((feedback.good / getTotal()) * 100);
  };

  return (
    <>
      <Section title={'Please leave feedback'}>
        <FeedbackOptions
          options={Object.keys(feedback)}
          onLeaveFeedback={addFeedback}
        />
      </Section>

      <Section title={'Statistics'}>
        {getTotal() ? (
          <Statictics
            good={feedback.good}
            bad={feedback.bad}
            neutral={feedback.neutral}
            total={getTotal()}
            positivePercentage={getPositiveFeedbackPercentage()}
          />
        ) : (
          <Notification message={'There is no feedback'} />
        )}
      </Section>
    </>
  );
}
