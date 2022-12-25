import css from './Statistics.module.css';

export const Statistics = ({ statistics }) => {
  const items = Object.entries(statistics);
  return (
    <>
      <h2> Statistics </h2>
      <ul className={css['list-zeroing']}>
        {items.map(([key, value]) => (
          <li key={key}>
            <p>
              {key}: {value}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};
