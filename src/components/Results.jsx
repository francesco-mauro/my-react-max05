import { calculateInvestmentResults } from "../util/investment";

export default function Results({ input }) {
  console.log(input);
  const datiRisultato = calculateInvestmentResults(input);
  console.log(datiRisultato);

  return (
    <div>
      <div>Qui i riusltati</div>
    </div>
  );
}
