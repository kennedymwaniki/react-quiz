function NextButton({ dispatch, answer, index, question }) {
  if (answer === null) return null;
  const hasAnswered = answer !== null;
  return (
    <button
      className="btn btn-ui"
      disabaled={hasAnswered}
      onClick={() => dispatch({ type: "nextQuestion" })}
    >
      Next
    </button>
  );
}

export default NextButton;
