export default function Options({ total, handleResetClick, updateFeedback }) {
  let resetButton = total ? (
    <button onClick={handleResetClick}>Reset</button>
  ) : null;
  return (
    <>
      <button
        onClick={() => {
          updateFeedback("good");
        }}
      >
        Good
      </button>
      <button
        onClick={() => {
          updateFeedback("neutral");
        }}
      >
        Neutral
      </button>
      <button
        onClick={() => {
          updateFeedback("bad");
        }}
      >
        Bad
      </button>
      {resetButton}
    </>
  );
}
