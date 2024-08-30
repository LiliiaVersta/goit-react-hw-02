export default function Feedback({ data }) {
  let total = data.good + data.neutral + data.bad;
  let positive = ((data.good + data.neutral) * 100) / total;
  if (total) {
    return (
      <>
        <ul>
          <li>Good: {data.good}</li>
          <li>Neutral: {data.neutral}</li>
          <li>Bad: {data.bad}</li>
          <li>Total: {total}</li>
          <li>Positive: {positive}%</li>
        </ul>
      </>
    );
  } else {
    return <p>No feedback yet</p>;
  }
}
