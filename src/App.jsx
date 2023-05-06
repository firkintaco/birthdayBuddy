import data from "./data.js";
import { useState } from "react";

const App = () => {
  const [people, setPeople] = useState(data);

  const clearAll = () => {
    setPeople([]);
  };
  const deleteBirthday = (id) =>
    setPeople(people.filter((user) => user.id !== id));

  return (
    <main>
      <div className="container">
        <h3>{people.length} Birthdays Today</h3>
        {people.map((people) => {
          const { id, name, age, image } = people;
          return (
            <div className="person" key={id}>
              <img src={image} alt={name} />
              <div>
                <h4>{name}</h4>
                <p>{age} years</p>
              </div>
              <input type="checkbox" onChange={() => deleteBirthday(id)} />
            </div>
          );
        })}
        <button className="btn-block btn" type="button" onClick={clearAll}>
          Clear All
        </button>
      </div>
    </main>
  );
};
export default App;
