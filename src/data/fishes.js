// Dane na podstawie:
// Dz.U. 2018 poz. 2003 – Rozporządzenie w sprawie połowu ryb (§6 wymiary ochronne, §7 okresy ochronne)
// Dz.U. 2019 poz. 2168 – Ustawa o rybactwie śródlądowym
// Dz.U. 2016 poz. 2183 – Rozporządzenie w sprawie ochrony gatunkowej zwierząt

const fishes = [
  {
    id: 1,
    image: null,
    name: 'Boleń',
    nazwaLacinska: 'Aspius aspius L.',
    okresOchronny: 'Brak okresu ochronnego',
    wymiarOchronny: '40 cm',
    informacjeDodatkowe:
      'Jedyna drapieżna ryba z rodziny karpiowatych w Polsce. Aktywny łowca atakujący ofiary na powierzchni wody. Zamieszkuje duże rzeki i jeziora. Nie jest objęty ochroną gatunkową.',
  },
  {
    id: 2,
    image: null,
    name: 'Brzanka',
    nazwaLacinska: 'Barbus petenyi Heckel',
    okresOchronny: 'Brak okresu ochronnego',
    wymiarOchronny: '20 cm',
    informacjeDodatkowe:
      'Objęta ochroną częściową (Załącznik nr 2 rozporządzenia o ochronie gatunkowej zwierząt). Zamieszkuje górskie i podgórskie rzeki karpackie. Preferuje czyste, szybko płynące, dobrze natlenione wody.',
  },
  {
    id: 3,
    image: null,
    name: 'Brzana',
    nazwaLacinska: 'Barbus barbus L.',
    okresOchronny: '1 stycznia – 30 czerwca',
    wymiarOchronny: '40 cm',
    informacjeDodatkowe:
      'Ryba denna preferująca szybko płynące, czyste rzeki o żwirowym lub kamienistym dnie. Uwaga: ikra brzany jest trująca dla ssaków. Gatunek wymaga długiego okresu ochronnego ze względu na późne tarło.',
  },
  {
    id: 4,
    image: null,
    name: 'Brzana karpacka',
    nazwaLacinska: 'Barbus cyclolepis Heckel',
    okresOchronny: '15 marca – 15 lipca',
    wymiarOchronny: '20 cm',
    informacjeDodatkowe:
      'Endemiczny gatunek karpacki zamieszkujący górskie dopływy Wisły i Sanu. Objęta ochroną częściową. Wymaga szczególnie czystej i dobrze natlenionej wody.',
  },
  {
    id: 5,
    image: null,
    name: 'Certa',
    nazwaLacinska: 'Vimba vimba L.',
    okresOchronny:
      'W Wiśle od zapory we Włocławku do ujścia: 1 września – 30 listopada; w Wiśle powyżej zapory i w pozostałych rzekach: 1 stycznia – 30 czerwca',
    wymiarOchronny: '30 cm',
    informacjeDodatkowe:
      'Ryba wędrowna, przybywająca z Bałtyku do rzek na tarło. Dolna Wisła jest jej najważniejszym tarliskiem w Polsce. Okres ochronny różni się w zależności od odcinka rzeki.',
  },
  {
    id: 6,
    image: null,
    name: 'Głowacica',
    nazwaLacinska: 'Hucho hucho L.',
    okresOchronny: '1 marca – 31 maja',
    wymiarOchronny: '70 cm',
    informacjeDodatkowe:
      'Największy łososiowaty w Polsce – może przekraczać 1 m długości. Objęta ścisłą ochroną gatunkową w dorzeczu Dunaju (Załącznik nr 1). Przy połowie łososiowatych i lipieni obowiązuje limit jednej wędki jednocześnie.',
  },
  {
    id: 7,
    image: null,
    name: 'Jaź',
    nazwaLacinska: 'Leuciscus idus L.',
    okresOchronny: 'Brak okresu ochronnego',
    wymiarOchronny: '25 cm',
    informacjeDodatkowe:
      'Wszystkożerna ryba z rodziny karpiowatych. Zamieszkuje spokojniejsze odcinki rzek i jeziora. Charakterystyczne złocisto-czerwone płetwy. Nie jest objęty ochroną gatunkową.',
  },
  {
    id: 8,
    image: null,
    name: 'Jelec',
    nazwaLacinska: 'Leuciscus leuciscus L.',
    okresOchronny: 'Brak okresu ochronnego',
    wymiarOchronny: '15 cm',
    informacjeDodatkowe:
      'Mała ryba z rodziny karpiowatych, zamieszkująca czyste, dobrze natlenione rzeki. Ławicowa, często mylona z kleńem – jelec jest wyraźnie mniejszy. Nie jest objęty ochroną gatunkową.',
  },
  {
    id: 9,
    image: null,
    name: 'Kleń',
    nazwaLacinska: 'Leuciscus cephalus L.',
    okresOchronny: 'Brak okresu ochronnego',
    wymiarOchronny: '25 cm',
    informacjeDodatkowe:
      'Wszystkożerna ryba z rodziny karpiowatych. Jeden z najpospolitszych gatunków w polskich rzekach. Może osiągać do 80 cm długości i ponad 4 kg masy. Nie jest objęty ochroną gatunkową.',
  },
  {
    id: 10,
    image: null,
    name: 'Lin',
    nazwaLacinska: 'Tinca tinca L.',
    okresOchronny: 'Brak okresu ochronnego',
    wymiarOchronny: '25 cm',
    informacjeDodatkowe:
      'Ryba denna preferująca jeziora i powolne rzeki z bujną roślinnością. Bardzo odporny na niedotlenienie. Charakterystyczna śliska, złotawa łuska z drobniutkimi łuskami. Nie jest objęty ochroną gatunkową.',
  },
  {
    id: 11,
    image: null,
    name: 'Lipień',
    nazwaLacinska: 'Thymallus thymallus L.',
    okresOchronny: '1 marca – 31 maja',
    wymiarOchronny: '30 cm',
    informacjeDodatkowe:
      'Ryba z rodziny łososiowatych, zwana „królową rzek górskich". Wymaga bardzo czystej, zimnej i dobrze natlenionej wody. Przy połowie lipieni obowiązuje limit jednej wędki jednocześnie.',
  },
  {
    id: 12,
    image: null,
    name: 'Łosoś',
    nazwaLacinska: 'Salmo salar L.',
    okresOchronny:
      'W Wiśle i dopływach powyżej Włocławka oraz w pozostałych rzekach: 1 października – 31 grudnia; na Wiśle od Włocławka do ujścia: 1 grudnia – koniec lutego. Poza sezonem obowiązują dodatkowe ograniczenia dni połowu.',
    wymiarOchronny: '35 cm',
    informacjeDodatkowe:
      'Ryba wędrowna, powracająca z Morza Bałtyckiego do rzek na tarło. Przy połowie łososiowatych obowiązuje limit jednej wędki. Poza okresem ochronnym w Wiśle powyżej Włocławka zakaz połowu obowiązuje dodatkowo w czwartki, piątki, soboty i niedziele.',
  },
  {
    id: 13,
    image: null,
    name: 'Miętus',
    nazwaLacinska: 'Lota lota L.',
    okresOchronny:
      '1 grudnia – koniec lutego (z wyjątkiem rzeki Odry od ujścia Warty do granicy z wodami morskimi)',
    wymiarOchronny:
      '25 cm; w rzece Odrze od ujścia Warty do granicy z wodami morskimi: 30 cm',
    informacjeDodatkowe:
      'Jedyna słodkowodna ryba z rodziny dorszowatych w Polsce. Tarło odbywa zimą, często pod lodem. Nocna ryba denna preferująca zimne i głębsze wody. Wymiar ochronny różni się w zależności od akwenu.',
  },
  {
    id: 14,
    image: null,
    name: 'Pstrąg potokowy',
    nazwaLacinska: 'Salmo trutta m. fario L.',
    okresOchronny:
      'W Wiśle (do ujścia Sanu), Sanie z dopływami, Odrze i jej dopływach do ujścia Bystrzycy: 1 września – 31 stycznia; w pozostałych wodach: 1 września – 31 grudnia',
    wymiarOchronny:
      '25 cm (w Wiśle do ujścia Sanu i dopływach, Odrze do Bystrzycy); 30 cm w pozostałych wodach',
    informacjeDodatkowe:
      'Łososiowata ryba górskich rzek, wskaźnik czystości wody. Wymaga bardzo czystej, zimnej wody z dobrym natlenioniem. Przy połowie łososiowatych obowiązuje limit jednej wędki. Wymiar ochronny i okres ochronny różnią się w zależności od akwenu.',
  },
  {
    id: 15,
    image: null,
    name: 'Rozpiór',
    nazwaLacinska: 'Abramis ballerus L.',
    okresOchronny: 'Brak okresu ochronnego',
    wymiarOchronny: '25 cm',
    informacjeDodatkowe:
      'Ryba z rodziny karpiowatych, blisko spokrewniona z leszczem. Zamieszkuje duże, spokojne rzeki i jeziora. Żywi się planktonem i organizmami dennymi. Nie jest objęty ochroną gatunkową.',
  },
  {
    id: 16,
    image: null,
    name: 'Sandacz',
    nazwaLacinska: 'Stizostedion lucioperca L.',
    okresOchronny: '1 marca – 31 maja',
    wymiarOchronny: '45 cm',
    informacjeDodatkowe:
      'Drapieżna ryba z rodziny okoniowatych. Jeden z najcenniejszych gatunków wędkarskich. Samiec pilnuje gniazda z ikrą. Preferuje głębsze wody jezior i dużych rzek z dobrą widocznością dna.',
  },
  {
    id: 17,
    image: null,
    name: 'Sapa',
    nazwaLacinska: 'Abramis sapa Pallas',
    okresOchronny: '1 kwietnia – 31 maja',
    wymiarOchronny: '25 cm',
    informacjeDodatkowe:
      'Rzadki gatunek ryby z rodziny karpiowatych, zamieszkujący duże rzeki nizinne. Ryba denna żywiąca się organizmami żyjącymi na dnie. W Polsce spotykana głównie w Wiśle.',
  },
  {
    id: 18,
    image: null,
    name: 'Sieja',
    nazwaLacinska: 'Coregonus lavaretus L.',
    okresOchronny: '15 października – 31 grudnia',
    wymiarOchronny: '35 cm',
    informacjeDodatkowe:
      'Ryba łososiowata zamieszkująca głębsze, zimne jeziora. Wskaźnik czystości i wysokiego natlenienia wód. Przy połowie łososiowatych obowiązuje limit jednej wędki jednocześnie.',
  },
  {
    id: 19,
    image: null,
    name: 'Sielawa',
    nazwaLacinska: 'Coregonus albula L.',
    okresOchronny: '15 października – 31 grudnia',
    wymiarOchronny: '18 cm',
    informacjeDodatkowe:
      'Mała ryba łososiowata typowa dla zimnych, czystych jezior. Ławicowa, planktonożerna. Przy połowie łososiowatych obowiązuje limit jednej wędki. Wskaźnik bardzo dobrej jakości wody jeziornej.',
  },
  {
    id: 20,
    image: null,
    name: 'Sum',
    nazwaLacinska: 'Silurus glanis L.',
    okresOchronny: '1 stycznia – 31 maja',
    wymiarOchronny: '70 cm',
    informacjeDodatkowe:
      'Największa słodkowodna ryba w Polsce i Europie – może przekraczać 2 m i 100 kg. Nocny drapieżnik denny polujący na ryby, żaby, ptaki wodne i małe ssaki. Aktywny głównie nocą i o zmierzchu.',
  },
  {
    id: 21,
    image: null,
    name: 'Szczupak',
    nazwaLacinska: 'Esox lucius L.',
    okresOchronny: '1 stycznia – 30 kwietnia',
    wymiarOchronny: '45 cm',
    informacjeDodatkowe:
      'Jeden z najpopularniejszych gatunków wędkarskich w Polsce. Aktywny drapieżnik zasadzający się na ofiarę. Zamieszkuje jeziora, stawy i wolno płynące rzeki z bujną roślinnością podwodną.',
  },
  {
    id: 22,
    image: null,
    name: 'Świnka',
    nazwaLacinska: 'Chondrostoma nasus L.',
    okresOchronny: '1 stycznia – 15 maja',
    wymiarOchronny: '25 cm',
    informacjeDodatkowe:
      'Ryba z rodziny karpiowatych zamieszkująca czyste rzeki o piaszczystym lub żwirowym dnie. Żywi się głównie glonami i okrzemkami zeskrobanymi z kamieni. Ławicowa ryba reofilna (miłująca prąd).',
  },
  {
    id: 23,
    image: null,
    name: 'Troć',
    nazwaLacinska: 'Salmo trutta m. trutta L.',
    okresOchronny:
      'W Wiśle i dopływach powyżej Włocławka oraz w pozostałych rzekach: 1 października – 31 grudnia; na Wiśle od Włocławka do ujścia: 1 grudnia – koniec lutego. Poza sezonem obowiązują dodatkowe ograniczenia dni połowu.',
    wymiarOchronny: '35 cm',
    informacjeDodatkowe:
      'Morska forma pstrąga, wędrowna, przybywająca z Bałtyku do rzek na tarło. Przy połowie łososiowatych obowiązuje limit jednej wędki. Poza sezonem obowiązują ograniczenia dni połowu analogiczne jak przy łososiu.',
  },
  {
    id: 24,
    image: null,
    name: 'Troć jeziorowa',
    nazwaLacinska: 'Salmo trutta m. lacustris L.',
    okresOchronny: '1 września – 31 stycznia',
    wymiarOchronny: '50 cm',
    informacjeDodatkowe:
      'Jeziorowa forma pstrąga – bytuje w jeziorze, ale wchodzi do rzek na tarło. Przy połowie łososiowatych obowiązuje limit jednej wędki jednocześnie. Preferuje zimne, głębokie jeziora z dopływającymi strumieniami.',
  },
  {
    id: 25,
    image: null,
    name: 'Węgorz',
    nazwaLacinska: 'Anguilla anguilla L.',
    okresOchronny: '1 grudnia – 31 marca',
    wymiarOchronny: '50 cm',
    informacjeDodatkowe:
      'Ryba wędrowna, rozmnażająca się w odległym Morzu Sargassowym. Obowiązuje dobowy limit połowu: do 2 sztuk. Może oddychać przez skórę i poruszać się po lądzie. Gatunek krytycznie zagrożony wyginięciem.',
  },
  {
    id: 26,
    image: null,
    name: 'Wzdręga',
    nazwaLacinska: 'Scardinius erythrophthalmus L.',
    okresOchronny: 'Brak okresu ochronnego',
    wymiarOchronny: '15 cm',
    informacjeDodatkowe:
      'Ryba z rodziny karpiowatych, podobna do płoci, lecz z charakterystycznymi jaskrawoczerwonymi oczami i płetwami. Zamieszkuje jeziora, stawy i spokojne odcinki rzek. Nie jest objęta ochroną gatunkową.',
  },
  {
    id: 27,
    image: null,
    name: 'Rak błotny',
    nazwaLacinska: 'Pontastacus leptodactylus Esch.',
    okresOchronny:
      'Samce: 15 października – 15 marca; samice: 15 października – 31 lipca',
    wymiarOchronny: '10 cm',
    informacjeDodatkowe:
      'Objęty ochroną częściową (Załącznik nr 2). Uwaga: rak błotny i rak szlachetny nie mogą być przedmiotem amatorskiego połowu wędkarskiego (Art. 2 ust. 1 Ustawy o rybactwie śródlądowym). Bardziej odporny na zanieczyszczenia niż rak szlachetny.',
  },
  {
    id: 28,
    image: null,
    name: 'Rak szlachetny',
    nazwaLacinska: 'Astacus astacus Esch.',
    okresOchronny:
      'Samce: 15 października – 15 marca; samice: 15 października – 31 lipca',
    wymiarOchronny: 'Samica: 12 cm; samiec: 10 cm',
    informacjeDodatkowe:
      'Objęty ochroną częściową (Załącznik nr 2). Uwaga: rak szlachetny i rak błotny nie mogą być przedmiotem amatorskiego połowu wędkarskiego (Art. 2 ust. 1 Ustawy o rybactwie śródlądowym). Gatunek silnie zagrożony wyginięciem przez dżumę raczą i inwazyjne gatunki obcych raków.',
  },
]

export default fishes
