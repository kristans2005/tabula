import tekst from './tekst.json';

export default function Translation() {
    return (
        <div className="translation-container">
            {Object.entries(tekst).map(([language, terms]) => (
                <div key={language} className="language-section">
                    <h2 className="language-title">{terms.name} ({terms.native})</h2>
                    <table className="translation-table">
                        <thead>
                            <tr>
                                <th>Keyword</th>
                                <th>Translation</th>
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