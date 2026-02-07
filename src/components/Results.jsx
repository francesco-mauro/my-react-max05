import { calculateInvestmentResults, formatter } from "../util/investment";

export default function Results({ input }) {
  console.log(input);
  const datiRisultato = calculateInvestmentResults(input);
  console.log(datiRisultato);

  return (
    <table id="result">
      <thead>
        <tr>
          <th>Anno</th>
          <th>Valore Totale Investimento</th>
          <th>Interesse (Anno)</th>
          <th>Totale Interesse</th>
          <th>Capitale investito</th>
        </tr>
      </thead>
      <tbody>
        {datiRisultato.map((yearData) => {
          const interesseTotale = yearData.valueEndOfYear - (yearData.investimentoAnnuale * yearData.year);
          return (
            <tr key={yearData.year}>
              <td>{yearData.year}</td>
              {/* // formatter.format() è un metodo che formatta i numeri come valuta, in questo caso in dollari */}
              <td>{formatter.format(yearData.valueEndOfYear)}</td>
              <td>{formatter.format(yearData.investimentoAnnuale)}</td>
              <td>{formatter.format(yearData.interest)}</td>
              <td>{formatter.format(yearData.investimentoAnnuale)}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}
