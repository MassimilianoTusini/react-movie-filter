import { useState, useEffect } from "react";

// Lista di film (statica, fuori dal componente così non si ricrea a ogni render)
const films = [
    { title: "Inception", genre: "Fantascienza" },
    { title: "Il Padrino", genre: "Thriller" },
    { title: "Titanic", genre: "Romantico" },
    { title: "Batman", genre: "Azione" },
    { title: "Interstellar", genre: "Fantascienza" },
    { title: "Pulp Fiction", genre: "Thriller" },
];
function FilmList() {
    // Stato per la categoria selezionata dalla select
    const [activeType, setActiveType] = useState("");
    // Stato per i film filtrati in base alla categoria
    const [results, setResults] = useState(films);

    // useEffect che si attiva ogni volta che cambia "activeType"
    useEffect(() => {
        // If Else (se non è seleionata nessuna categoria mostra tutti i film, altrimenti mostra tutta la lista)
        if (activeType === "") {
            setResults(films);
        } else {
            setResults(films.filter((film) => film.genre === activeType));
        }
    }, [activeType]);

    const genres = films.map((f) => f.genre);

    return (
        <section className="container">

            {/* Select per filtrare */}
            <div className="box">
                <select
                    className="film-select"
                    value={activeType}
                    onChange={(e) => setActiveType(e.target.value)}
                >
                    <option value="">Tutti i generi</option>
                    {genres.map((genre, i) => (
                        <option key={i} value={genre}>
                            {genre}
                        </option>
                    ))}
                </select>
            </div>

            {/* Lista film */}
            <ul className="film-list">
                {results.map((movie, index) => (
                    <li key={index} className="film-card">
                        <div className="poster"></div>
                        <div className="info">
                            <h3>{movie.title}</h3>  
                            <span>{movie.genre}</span>
                        </div>
                    </li>
                ))}
            </ul>
        </section>
    );
}

export default FilmList;
