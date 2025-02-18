export default function ThirdQuestion() {
    return (
        <div className="question-container">
            <h1 className="question-title">Kā veidot scenārijus?</h1>
            <p className="question-content">
                Scenāriji tiek rakstīti pēc konkrētas struktūras:
            </p>
            <ul className="question-content">
                <li>Ja ir dots (Given) – sākotnējais stāvoklis</li>
                <li>Kad (When) – veiktā darbība</li>
                <li>Tad (Then) – sagaidāmais rezultāts</li>
                <li>Var izmantot arī Un (And) un Bet (But), lai pievienotu papildu nosacījumus vai rezultātus.</li>
            </ul>
            <p className="question-content">Piemērs:</p>
            <div className="code-example">
Scenārijs: Veiksmīga autorizēšanās
Ja ir dots, ka lietotājs atrodas pieteikšanās lapā
Kad lietotājs ievada derīgus piekļuves datus
Un nospiež pieteikšanās pogu
Tad lietotājs tiek novirzīts uz savu profilu</div>
        </div>
    )
}
