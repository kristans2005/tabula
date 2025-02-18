export default function SecondQuestion() {
    return (
        <div className="question-container">
            <h1 className="question-title">Kādā formātā veidot lietotājstāstus (angļu v. User Story)?</h1>
            <p className="question-content">
                Lietotājstāsti tiek veidoti pēc šāda parauga:
            </p>
            <div className="code-example">
                Kā [lietotāja loma]
                Es vēlos [konkrēta sistēmas darbība]
                Lai [sasniedzamais mērķis vai ieguvums]
            </div>
            <p className="question-content">
                Piemērs:
            </p>
            <div className="code-example">
                Kā bankas klients
                Es vēlos izņemt naudu no bankomāta,
                Lai man būtu pieejama skaidra nauda.
            </div>
        </div>
    )
}
