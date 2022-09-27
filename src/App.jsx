import { useEffect, useState } from "react";
import { shuffle } from "lodash";
import { Header } from "./components/Header";
import { Card } from "./components/Card";
import { Board } from "./components/Board";

import getRandomNumbers from "./utils/getRandomNumbers";

function App() {
  const [data, setData] = useState([]);
  const [hasError, setError] = useState(false);
  const randomNumbers = getRandomNumbers();

  const fetchCharacter = async () => {
    const response = await fetch(
      `https://rickandmortyapi.com/api/character/${randomNumbers}`
    );
    response
      .json()
      .then((response) =>
        setData(shuffle(data.concat(response).concat(response)))
      )
      .catch((error) => setError(error));
  };

  useEffect(() => {
    fetchCharacter();
  }, []);

  console.log(data);

  return (
    <div className="App">
      <Header />
      <Board data={data} />
    </div>
  );
}

export default App;
