export default function UserInput({ onChange, userInput }) {
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
              onChange("investimentoIniziale", event.target.value);
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
              onChange("investimentoAnnuale", event.target.value);
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
              onChange("ritornoDiInvestimentoAtteso", event.target.value);
            }}
          />
        </p>
        <p>
          <label>Durata</label>
          <input
            type="number"
            value={userInput.durata}
            onChange={(event) => {
              onChange("durata", event.target.value);
            }}
          />
        </p>
      </div>
    </section>
  );
}
