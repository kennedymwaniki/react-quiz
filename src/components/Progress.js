function Progress({ numQuestions, index, points, totalPoints }) {
  return (
    <header className="progress">
      <progress max={numQuestions} value={index} />
      <p>
        Question <strong>{index + 1}</strong> /{numQuestions}
      </p>
      <p>
        <strong>{points}</strong>/ {totalPoints}
      </p>
    </header>
  );
}

export default Progress;
