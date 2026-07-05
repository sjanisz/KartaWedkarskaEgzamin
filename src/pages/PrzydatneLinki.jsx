import './PrzydatneLinki.css'

const links = [
  {
    id: 1,
    url: 'https://pzw.org.pl/pliki/prezentacje/1911/cms/szablony/25533/pliki/strona_internetowa__ryby.pdf',
    opis: 'Źródło wymaganych zdjęć ryb w galerii z ich nazwami',
  },
  {
    id: 2,
    url: 'https://pzw.org.pl/pliki/prezentacje/29/cms/szablony/26539/pliki/materialy_szkoleniowe_na_karte_wedkarska_2020.pdf',
    opis: 'Materiał szkoleniowy dla osób zamierzających przystąpić do egzaminu na kartę wędkarską',
  },
  {
    id: 3,
    url: 'https://ompzw.pl/files/filesfile/1/file-1257.pdf',
    opis: 'Przykładowe pytania egzaminacyjne z odpowiedziami #1',
  },
  {
    id: 4,
    url: 'https://spytkowice.pzw.pl/strefa-wedkarza/komisja-egzaminacyjna-kola-spytkowice/przykladowy-zestaw-pytan-komisji-egzaminacyjnej-na-karte-wedkarska',
    opis: 'Przykładowe pytania egzaminacyjne bez odpowiedzi (te same pytania co #1)',
  },
  {
    id: 5,
    url: 'https://pzw.org.pl/pliki/prezentacje/1926/wiadomosci/248911/pliki/pytania_na_karte.pdf',
    opis: 'Przykładowe pytania egzaminacyjne z odpowiedziami #2',
  },
  {
    id: 6,
    url: 'https://rzeszow.pzw.pl/brepo/panel_repo/2024/05/11/cnenwz/testy-na-karte-wedkarska.pdf',
    opis: 'Przykładowe pytania egzaminacyjne z odpowiedziami #3 (podział na 10 różnych egzaminów + pytania dodatkowe)',
  },
]

export default function PrzydatneLinki() {
  return (
    <div className="linki-container">
      <h1 className="linki-title">Przydatne linki</h1>
      <ul className="linki-list">
        {links.map((item) => (
          <li key={item.id} className="linki-item">
            <a href={item.url} target="_blank" rel="noopener noreferrer" className="linki-link">
              {item.opis}
            </a>
            <span className="linki-url">{item.url}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}
