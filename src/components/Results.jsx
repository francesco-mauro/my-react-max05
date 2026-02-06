import { calculateInvestmentResults } from "../util/investment";

export default function Results({ input }) {
  console.log(input);
  const datiRisultato = calculateInvestmentResults(input);
  console.log(datiRisultato);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Anno</th>
          <th>Investimento Iniziale</th>
          <th>Investimento Annuale</th>
          <th>Ritorno di Investimento Atteso</th>
          <th>Durata</th>
        </tr>
      </thead>
    </table>
  );
}
