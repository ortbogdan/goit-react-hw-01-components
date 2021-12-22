// import React from 'react';

export const Statistics = ({ stats }) => {
  return (
    <ul className="stat-list">
      {stats.map(({ label, percentage }) => {
        return (
          <li className="item">
            <span className="label">{label}</span>
            <span className="percentage">{percentage}</span>
          </li>
        );
      })}
    </ul>
  );
};

// export const Statistics = ({ stats }) => {
//   return (
//     <section className="statistics">
//     <h2 className="title">Upload stats</h2>
//     <ul className="stat-list">
//       {stats.map(book => (
//         <li key={book.id}>{book.name}</li>
//       ))}
//           </ul>
//           </section>
//   );
// };
