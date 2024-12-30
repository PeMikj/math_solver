import React, { useState } from 'react';

function NewProblem() {
  const [problemText, setProblemText] = useState('');
  const [knownAnswer, setKnownAnswer] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem('token');
    const response = await fetch('http://localhost:8000/api/problems', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`,
      },
      body: JSON.stringify({ problem_text: problemText, known_answer: knownAnswer }),
    });
    const data = await response.json();
    setMessage(data.message || 'Problem submitted successfully');
  };

  return (
    <div>
      <h2>Submit a Problem</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='Problem Text'
          value={problemText}
          onChange={(e) => setProblemText(e.target.value)}
        />
        <input
          type='text'
          placeholder='Known Answer'
          value={knownAnswer}
          onChange={(e) => setKnownAnswer(e.target.value)}
        />
        <button type='submit'>Submit</button>
      </form>
      <p>{message}</p>
    </div>
  );
}

export default NewProblem;

