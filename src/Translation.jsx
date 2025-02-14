import tekst from './tekst.json';
import './App.css'

export default function Translation() {
    return (
        <div>
            {Object.entries(tekst).map(([language, terms]) => (
                <div key={language} className="language-section">
                    <h2>{terms.name} ({terms.native})</h2>
                    <table>
                        <thead>
                            <tr>
                                <th>Keyword</th>
                                <th>Equivalent(s)</th>
                            </tr>
                        </thead>
                        <tbody>
                            {Object.entries(terms).map(([key, value]) => (
                                <tr key={key}>
                                    <td>{key}</td>
                                    <td>{Array.isArray(value) ? value.join(', ') : value}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            ))}
        </div>
    );
}