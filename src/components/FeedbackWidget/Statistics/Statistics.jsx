import css from './Statistics.module.css';

export const Statistics = ({ statistics }) => {
    const items = Object.values(statistics);
  return (
    <>
      <h2> Statistics </h2>
      <ul className={css['list-zeroing']}>
        {items.map(({ name, value }) => (
          <li key={name}>
            <p>
              {name}: {value}
            </p>
          </li>
        ))}
      </ul>
    </>
  );
};
