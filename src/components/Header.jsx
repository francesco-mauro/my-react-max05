import logo from "../assets/investment-calculator-logo.png";

export default function Header() {
  return (
    <header id="header">
      <img src={logo} alt="Logo con una busta di soldi" />
      <h1>Calcolatrice di investimenti</h1>
    </header>
  );
}
