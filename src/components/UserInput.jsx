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
            //pippo.target.value
            // pippo è puntamento all'oggetto che sta cambiando all'interno di imput. l'oggetto è l'evento del componente, che contrien i riferimenti all'oggetto che sto cambiando. Tale oggetto ha i vari attributi del mio tag html che potrei stare utilizzando
            // target specifica l'elemtno del target html
            //value è il tag html che voglio esrarre come parametro per l'onChange (react, non mia funzione)
            //stampo anche onChange, che funziona quando sto scrivendo
            onChange={(pippo) => {
              onChange("investimentoIniziale", pippo.target.value);
              console.log(pippo);
            }}
            //stampo anche onBlur, che funziona quando esco dal campo
            onBlur={(pippo) => {
              onChange("investimentoIniziale", pippo.target.value);
              console.log(pippo);
            }}
            //stampo anche onKeyDown, che funziona quando premo un tasto
            onKeyDown={(pippo) => {
              if (pippo.key === "Enter") {
                onChange("investimentoIniziale", pippo.target.value);
              }
              console.log(pippo);
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
