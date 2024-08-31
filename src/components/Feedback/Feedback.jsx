export default function Feedback({ data, positive, total }) {
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
}
