import { useState } from "react";

export default function UserInput() {
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
    <section id="user-input">
      <div className="input-group">
        <p>
          <label>Investimento Iniziale</label>
          <input
            type="number"
            required
            value={userInput.investimentoIniziale}
            onChange={(event) => {
              handleUserInput("investimentoIniziale", event.target.value);
            }}
          />
        </p>
        <p>
          <label>Investimento Annuale</label>
          <input
            type="number"
            required
            value={userInput.investimentoAnnuale}
            onChange={(event) => {
              handleUserInput("investimentoAnnuale", event.target.value);
            }}
          />
        </p>
      </div>
      <div className="input-group">
        <p>
          <label>Ritorno di Investimento Atteso</label>
          <input
            type="number"
            required
            value={userInput.ritornoDiInvestimentoAtteso}
            onChange={(event) => {
              handleUserInput(
                "ritornoDiInvestimentoAtteso",
                event.target.value,
              );
            }}
          />
        </p>
        <p>
          <label>Durata</label>
          <input
            type="number"
            value={userInput.durata}
            onChange={(event) => {
              handleUserInput("durata", event.target.value);
            }}
          />
        </p>
      </div>
    </section>
  );
}
