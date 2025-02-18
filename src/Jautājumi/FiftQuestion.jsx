export default function FiftQuestion() {
    return (
        <div className="question-container">
            <h1 className="question-title">Kas ir veiksmīgā iznākuma scenārijs (angļu v. Happy Path Scenario)?</h1>
            <p className="question-content">
                Veiksmīgā iznākuma scenārijs (Happy Path) ir tāds scenārijs, kur viss notiek kā 
                paredzēts, bez kļūdām un problēmām. Tas attēlo optimālo situāciju, kurā sistēma 
                darbojas ideāli.
            </p>
            <p className="question-content">Piemērs:</p>
            <div className="code-example">
Scenārijs: Veiksmīga pirkuma apmaksa
Ja ir dots, ka lietotājam ir preces iepirkumu grozā
Un lietotājs atrodas apmaksas lapā
Kad lietotājs ievada derīgu maksājuma informāciju
Un apstiprina pasūtījumu
Tad pasūtījums tiek veiksmīgi apstrādāts
Un lietotājs saņem apstiprinājuma e-pastu</div>
        </div>
    )
}