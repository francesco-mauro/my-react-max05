import { useState } from "react";
import Results from "./components/Results";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import { use } from "react";

function App() {
  // Stato per gestire i valori di input dell'utente con valori di default
  const [userInput, setUserInput] = useState({
    investimentoIniziale: 10000,
    investimentoAnnuale: 5000,
    ritornoDiInvestimentoAtteso: 6,
    durata: 10,
  });

  // Funzione per aggiornare lo stato in base all'input dell'utente e all'id dell'input
  function handleUserInput(inputId, newValue) {
    setUserInput((prevUserValue) => {
      return {
        ...prevUserValue,
        [inputId]: newValue,
      };
    });
  }

  return (
    <>
      <Header />
      <UserInput userInput={userInput} onChange={handleUserInput} />
      <Results input={userInput} />
    </>
  );
}

export default App;
