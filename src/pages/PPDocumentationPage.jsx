import React, { useState, useEffect } from 'react';

const PPDocumentation = () => {
  const [activeSection, setActiveSection] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  // Inizialmente apri la prima sezione
  useEffect(() => {
    setActiveSection('section1');
  }, []);

  const toggleSection = (sectionId) => {
    setActiveSection(activeSection === sectionId ? null : sectionId);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const increaseFontSize = () => {
    if (fontSize < 24) {
      setFontSize(fontSize + 2);
    }
  };

  const decreaseFontSize = () => {
    if (fontSize > 12) {
      setFontSize(fontSize - 2);
    }
  };

  // Stili dinamici basati su stato
  const mainBgColor = darkMode ? '#1a1a1a' : '#f8f9fa';
  const textColor = darkMode ? '#e0e0e0' : '#333333';
  const headingColor = darkMode ? '#61dafb' : '#0056b3';
  const sectionBgColor = darkMode ? '#2a2a2a' : '#ffffff';
  const sectionBorderColor = darkMode ? '#444444' : '#e0e0e0';
  const headerBgColor = darkMode ? '#333333' : '#e6f2ff';
  const headerTextColor = darkMode ? '#ffffff' : '#0056b3';

  const containerStyle = {
    fontFamily: "'Roboto', 'Segoe UI', Arial, sans-serif",
    fontSize: `${fontSize}px`,
    backgroundColor: mainBgColor,
    color: textColor,
    padding: '2rem',
    maxWidth: '1000px',
    margin: '0 auto',
    borderRadius: '8px',
    boxShadow: darkMode ? '0 4px 8px rgba(0, 0, 0, 0.5)' : '0 4px 12px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.3s ease'
  };

  const controlsStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
    padding: '1rem',
    backgroundColor: headerBgColor,
    borderRadius: '8px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
  };

  const buttonStyle = {
    padding: '0.5rem 1rem',
    margin: '0 0.5rem',
    backgroundColor: darkMode ? '#444444' : '#0056b3',
    color: '#ffffff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    fontWeight: 'bold',
    transition: 'background-color 0.2s ease'
  };

  const fontControlsStyle = {
    display: 'flex',
    alignItems: 'center'
  };

  const titleStyle = {
    fontSize: `${fontSize + 10}px`,
    color: headingColor,
    marginBottom: '1.5rem',
    fontWeight: 'bold',
    textAlign: 'center'
  };

  const sectionStyle = {
    marginBottom: '1.5rem',
    border: `1px solid ${sectionBorderColor}`,
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: darkMode ? '0 2px 4px rgba(0, 0, 0, 0.3)' : '0 2px 4px rgba(0, 0, 0, 0.05)',
    transition: 'all 0.3s ease'
  };

  const sectionHeaderStyle = {
    backgroundColor: headerBgColor,
    padding: '1rem 1.5rem',
    cursor: 'pointer',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    transition: 'background-color 0.2s ease'
  };

  const sectionTitleStyle = {
    fontSize: `${fontSize + 4}px`,
    fontWeight: 'bold',
    color: headerTextColor,
    margin: 0
  };

  const sectionContentStyle = {
    padding: '1.5rem',
    backgroundColor: sectionBgColor,
    lineHeight: '1.6',
    transition: 'all 0.3s ease'
  };

  const subSectionTitleStyle = {
    fontSize: `${fontSize + 2}px`,
    fontWeight: 'bold',
    color: headingColor,
    marginTop: '1.5rem',
    marginBottom: '1rem'
  };

  const listStyle = {
    paddingLeft: '2rem',
    marginBottom: '1rem'
  };

  const listItemStyle = {
    marginBottom: '0.5rem'
  };

  const strongStyle = {
    fontWeight: 'bold',
    color: darkMode ? '#61dafb' : '#0056b3'
  };

  return (
    <div style={containerStyle}>
      <div style={controlsStyle}>
        <div>
          <button 
            style={buttonStyle} 
            onClick={toggleDarkMode}
          >
            {darkMode ? '🌞 Modalità Chiara' : '🌙 Modalità Scura'}
          </button>
          <button 
            style={buttonStyle} 
            onClick={() => setActiveSection(null)}
          >
            Chiudi Tutti
          </button>
          <button 
            style={{...buttonStyle, backgroundColor: darkMode ? '#555555' : '#28a745'}} 
            onClick={() => {
              const sections = Array.from({length: 10}, (_, i) => `section${i+1}`);
              setActiveSection(sections.includes(activeSection) ? null : 'section1');
            }}
          >
            {activeSection ? 'Chiudi Sezione' : 'Apri Prima Sezione'}
          </button>
        </div>
        <div style={fontControlsStyle}>
          <button 
            style={{...buttonStyle, fontSize: '1.2rem'}} 
            onClick={decreaseFontSize}
          >
            A-
          </button>
          <span style={{margin: '0 0.5rem', fontWeight: 'bold'}}>{fontSize}px</span>
          <button 
            style={{...buttonStyle, fontSize: '1.2rem'}} 
            onClick={increaseFontSize}
          >
            A+
          </button>
        </div>
      </div>

      <h1 style={titleStyle}>Documentazione SAP - Modulo Production Planning (PP)</h1>
      
      {/* Sezione 1: Concetti Fondamentali e Definizioni */}
      <div style={sectionStyle}>
        <div 
          style={sectionHeaderStyle}
          onClick={() => toggleSection('section1')}
        >
          <h2 style={sectionTitleStyle}>1. Concetti Fondamentali e Definizioni</h2>
          <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section1' ? '▼' : '▶'}</span>
        </div>
        
        {activeSection === 'section1' && (
          <div style={sectionContentStyle}>
            <h3 style={subSectionTitleStyle}>1.1 Pianificazione della Produzione (PP)</h3>
            <p style={{marginBottom: '1rem'}}>
              Il modulo PP governa e gestisce i processi produttivi, rispondendo a domande fondamentali:
            </p>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                <span style={strongStyle}>Come deve essere fatto?</span> - Descrizione della struttura quantitativa del prodotto: elementi necessari per produrre o comprare
              </li>
              <li style={listItemStyle}>
                <span style={strongStyle}>Quali prodotti finiti, quanti e quando devo produrli?</span> - Input del processo di pianificazione della produzione sono le previsioni di vendita e gli ordini cliente
              </li>
              <li style={listItemStyle}>
                <span style={strongStyle}>Che cosa, quando e quanto mi serve per produrre?</span> - Con un motore di pianificazione, MRP, si esplodono le quantità previste/vendute e si determina cosa, quanto e quando serve per produrlo
              </li>
              <li style={listItemStyle}>
                <span style={strongStyle}>Ho le risorse disponibili per produrre?</span> - Verifica dei carichi capacitivi delle risorse produttive ovvero capire se il fabbisogno di ore possa essere soddisfatto oppure riprogrammato
              </li>
              <li style={listItemStyle}>
                <span style={strongStyle}>Cosa, come, quando e quanto devo produrre?</span> - Gli ordini di produzione formano il programma di produzione ovvero una lista di attività ben specificate nei contenuti, nelle quantità e nei tempi
              </li>
            </ul>
            
            <h3 style={subSectionTitleStyle}>1.2 Struttura di Base del Processo</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Il piano di produzione deriva da ordini di vendita o da previsioni</li>
              <li style={listItemStyle}>È necessario un tool che aiuti a capire quanto è disponibile in magazzino (in SAP abbiamo l'MRP, che sviluppa proposte nel momento in cui abbiamo una rottura di stock)</li>
              <li style={listItemStyle}>L'MRP ragiona all'infinito, quindi è necessario uno strumento che scheduli le proposte nel tempo - per questo si utilizza un tool che gestisce le capacità dei centri di costo (CDC)</li>
              <li style={listItemStyle}>Verificato questo, si può creare il piano di produzione (quantità, data inizio e fine, ecc.)</li>
            </ul>

            <h3 style={subSectionTitleStyle}>1.3 Componenti del Sistema</h3>
            <p style={{marginBottom: '1rem'}}>
              A sistema, la pianificazione della produzione si traduce in dati e anagrafiche:
            </p>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                <span style={strongStyle}>Master Data</span>
                <ul style={{paddingLeft: '2rem'}}>
                  <li style={listItemStyle}>Prodotti</li>
                  <li style={listItemStyle}>Distinte</li>
                  <li style={listItemStyle}>Cicli</li>
                  <li style={listItemStyle}>Versioni</li>
                </ul>
              </li>
              <li style={listItemStyle}>
                <span style={strongStyle}>Demand</span>
                <ul style={{paddingLeft: '2rem'}}>
                  <li style={listItemStyle}>Domanda previsionale</li>
                  <li style={listItemStyle}>Ordini cliente</li>
                </ul>
              </li>
              <li style={listItemStyle}>
                <span style={strongStyle}>Planning</span>
                <ul style={{paddingLeft: '2rem'}}>
                  <li style={listItemStyle}>MRP e/o Reop</li>
                  <li style={listItemStyle}>Fabbisogni dipendenti</li>
                  <li style={listItemStyle}>Proposte produzione</li>
                  <li style={listItemStyle}>Proposte acquisto</li>
                </ul>
              </li>
              <li style={listItemStyle}>
                <span style={strongStyle}>SFC Produzione</span>
                <ul style={{paddingLeft: '2rem'}}>
                  <li style={listItemStyle}>Ordini produzione</li>
                  <li style={listItemStyle}>Controllo ATP</li>
                  <li style={listItemStyle}>Conferme</li>
                  <li style={listItemStyle}>Prelievi e versamenti</li>
                </ul>
              </li>
            </ul>
          </div>
        )}
      </div>
      
      {/* Sezione 2: Master Data */}
      <div style={sectionStyle}>
        <div 
          style={sectionHeaderStyle}
          onClick={() => toggleSection('section2')}
        >
          <h2 style={sectionTitleStyle}>2. Master Data</h2>
          <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section2' ? '▼' : '▶'}</span>
        </div>
        
        {activeSection === 'section2' && (
          <div style={sectionContentStyle}>
            <p style={{marginBottom: '1rem'}}>
              Non è possibile eseguire alcuna attività a sistema senza una struttura dati adeguata. I master data principali sono:
            </p>
            
            <h3 style={subSectionTitleStyle}>2.1 Anagrafica Materiali</h3>
            <p style={{marginBottom: '1rem'}}>
              L'anagrafica materiale ha una struttura gerarchica che imita la struttura organizzativa di una società.
            </p>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                <span style={strongStyle}>Struttura Gerarchica:</span>
                <ul style={{paddingLeft: '2rem'}}>
                  <li style={listItemStyle}>Mandante (livello gerarchico più alto)</li>
                  <li style={listItemStyle}>Divisione / Organizzazione Commerciale</li>
                  <li style={listItemStyle}>Divisione / Magazzino</li>
                  <li style={listItemStyle}>Divisione / Numero Magazzino</li>
                </ul>
              </li>
              <li style={listItemStyle}>
                <span style={strongStyle}>Categorie di Dati:</span>
                <ul style={{paddingLeft: '2rem'}}>
                  <li style={listItemStyle}>Informazioni descrittive: dati contenenti la descrizione</li>
                  <li style={listItemStyle}>Informazioni di controllo: dati quali il tipo di MRP, il controllo prezzo, la classe di valorizzazione</li>
                </ul>
              </li>
            </ul>
            
            <h3 style={subSectionTitleStyle}>2.2 Distinta Base (BOM)</h3>
            <p style={{marginBottom: '1rem'}}>
              La distinta base è tendenzialmente a più livelli, includendo materie prime ma anche semilavorati.
            </p>
            <ul style={listStyle}>
              <li style={listItemStyle}>Trasformare la distinta da elenco dei materiali (distinta tecnica) a una distinta produttiva significa creare livelli intermedi che saranno utilizzati nel ciclo produttivo (es. semilavorati, come l'impasto di una torta)</li>
              <li style={listItemStyle}>La distinta si ferma dove esiste della giacenza</li>
              <li style={listItemStyle}>Rappresenta la struttura del prodotto e le quantità necessarie di ciascun componente</li>
            </ul>
            
            <h3 style={subSectionTitleStyle}>2.3 Cicli di Lavoro</h3>
            <p style={{marginBottom: '1rem'}}>
              I cicli esprimono, per ogni livello creato nella distinta, cosa fanno gli operatori e le macchine.
            </p>
            <ul style={listStyle}>
              <li style={listItemStyle}>Definiscono le operazioni da eseguire</li>
              <li style={listItemStyle}>Indicano i centri di lavoro coinvolti</li>
              <li style={listItemStyle}>Specificano i tempi di lavorazione</li>
              <li style={listItemStyle}>Possono contenere istruzioni di lavoro</li>
            </ul>
            
            <h3 style={subSectionTitleStyle}>2.4 Versioni</h3>
            <p style={{marginBottom: '1rem'}}>
              Le versioni rappresentano diversi percorsi produttivi per ottenere un medesimo prodotto finito.
            </p>
            <ul style={listStyle}>
              <li style={listItemStyle}>Permettono di gestire alternative produttive</li>
              <li style={listItemStyle}>Consentono di selezionare il percorso più adatto in base a disponibilità, costi o altri fattori</li>
            </ul>
            
            <h3 style={subSectionTitleStyle}>2.5 View Pianificazione MRP 1</h3>
            <p style={{marginBottom: '1rem'}}>
              Parametri fondamentali per la pianificazione:
            </p>
            <ul style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>Gruppo di pianificazione:</span> Riunisce i materiali dal punto di vista della pianificazione MRP, per attribuire loro dei parametri di controllo speciali</li>
              <li style={listItemStyle}><span style={strongStyle}>Gruppo Acquisti:</span> ID che identifica il buyer o gruppo di buyer; ha rilevanza quale elemento di selezione dati ed analisi statistiche nei processi di acquisto</li>
              <li style={listItemStyle}><span style={strongStyle}>Codice ABC:</span> Classifica un materiale in base al suo valore di consumo come parte A, B o C secondo l'analisi ABC</li>
              <li style={listItemStyle}><span style={strongStyle}>Caratteristica MRP:</span> Chiave che determina se e come viene pianificato il materiale (pianificazione deterministica, stocastica, nessuna pianificazione) e le declinazioni con gli eventuali orizzonti di fissazione</li>
              <li style={listItemStyle}><span style={strongStyle}>Responsabile MRP:</span> ID del pianificatore o gruppo di pianificatori; campo obbligatorio utile per le ricerche di vari oggetti di produzione</li>
              <li style={listItemStyle}><span style={strongStyle}>Lotto pianificazione:</span> Procedimento di dimensionamento del lotto secondo il quale il sistema calcola la quantità da approvvigionare o produrre</li>
            </ul>
          </div>
        )}
      </div>
      
      {/* Sezione 3: Demand Planning */}
      <div style={sectionStyle}>
        <div 
          style={sectionHeaderStyle}
          onClick={() => toggleSection('section3')}
        >
          <h2 style={sectionTitleStyle}>3. Demand Planning</h2>
          <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section3' ? '▼' : '▶'}</span>
        </div>
        
        {activeSection === 'section3' && (
          <div style={sectionContentStyle}>
            <h3 style={subSectionTitleStyle}>3.1 Obiettivi</h3>
            <p style={{marginBottom: '1rem'}}>
              Inserire un piano previsionale di domanda che serva come base per determinare un piano di produzione e di acquisti in modo anticipato rispetto al portafoglio reale.
            </p>
            
            <h3 style={subSectionTitleStyle}>3.2 Strategie di Pianificazione</h3>
            <p style={{marginBottom: '1rem'}}>
              Attraverso le strategie di pianificazione viene regolata la modalità con cui il sistema tratta il demand inserito, la sua eventuale compensazione rispetto agli ordini cliente (e ordini di trasferimento) e la modalità di reazione dell'elaborazione MRP.
            </p>
            
            <h3 style={subSectionTitleStyle}>3.3 Compensazione delle Previsioni</h3>
            <p style={{marginBottom: '1rem'}}>
              Le previsioni (Planned Independent Requirement o Fabbisogni Indipendenti Pianificati) possono essere compensate (erose) dagli ordini cliente in base a impostazioni nell'anagrafica del materiale:
            </p>
            <ul style={listStyle}>
              <li style={listItemStyle}>La direzione di ricerca della previsione rispetto alla data di consegna dell'ordine cliente</li>
              <li style={listItemStyle}>La lunghezza del periodo di ricerca (periodo di compensazione)</li>
              <li style={listItemStyle}>Eventuale cambio direzione</li>
              <li style={listItemStyle}>
                <span style={strongStyle}>Modalità di compensazione:</span>
                <ul style={{paddingLeft: '2rem'}}>
                  <li style={listItemStyle}>Riduzione a ritroso</li>
                  <li style={listItemStyle}>Riduzione a ritroso/in avanti</li>
                  <li style={listItemStyle}>Escludi riduzione in avanti</li>
                  <li style={listItemStyle}>Riduzione in avanti a ritroso</li>
                  <li style={listItemStyle}>Liquidazione specifica del periodo</li>
                </ul>
              </li>
            </ul>
            
            <h3 style={subSectionTitleStyle}>3.4 Logiche di Produzione</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                <span style={strongStyle}>MTS puro (Make-to-Stock):</span>
                <ul style={{paddingLeft: '2rem'}}>
                  <li style={listItemStyle}>Domanda reale e stock impattano il piano</li>
                  <li style={listItemStyle}>Il demand netto o lordo (in base alla strategia) forma l'input per la pianificazione MRP</li>
                  <li style={listItemStyle}>Determina fabbisogni MP a lungo termine</li>
                  <li style={listItemStyle}>Attiva rifornimenti MP a breve termine</li>
                  <li style={listItemStyle}>Formula piani di produzione</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Special Procurement:</span> Modalità speciali di approvvigionamento per casi non standard o critici</li>
              <li style={listItemStyle}><span style={strongStyle}>ATO (Assembly-to-Order):</span> Strategia produttiva che assembla prodotti solo dopo ricezione dell'ordine cliente</li>
              <li style={listItemStyle}><span style={strongStyle}>MTO (Make-to-Order):</span> Strategia produttiva che avvia la produzione solo dopo ricezione dell'ordine specifico</li>
              <li style={listItemStyle}><span style={strongStyle}>ETO (Engineering-to-Order):</span> Approccio che prevede progettazione e produzione su specifica completamente personalizzata del cliente</li>
            </ul>
          </div>
        )}
      </div>
      
      {/* Sezione 4: MRP (Material Requirements Planning) */}
      <div style={sectionStyle}>
        <div 
          style={sectionHeaderStyle}
          onClick={() => toggleSection('section4')}
        >
          <h2 style={sectionTitleStyle}>4. MRP (Material Requirements Planning)</h2>
          <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section4' ? '▼' : '▶'}</span>
        </div>
        
        {activeSection === 'section4' && (
          <div style={sectionContentStyle}>
            <h3 style={subSectionTitleStyle}>4.1 Definizione e Scopo</h3>
            <p style={{marginBottom: '1rem'}}>
              L'MRP risponde alla domanda "cosa, quanto e quando produrre". Lo scopo principale è determinare una proposta di programma di produzione e di acquisto sulla base dei fabbisogni indipendenti e dipendenti.
            </p>
            
            <h3 style={subSectionTitleStyle}>4.2 Fabbisogni</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                <span style={strongStyle}>Fabbisogni Indipendenti:</span>
                <ul style={{paddingLeft: '2rem'}}>
                  <li style={listItemStyle}>Domanda e Ordini di vendita (-)</li>
                  <li style={listItemStyle}>Giacenze, Ordini (+)</li>
                </ul>
              </li>
              <li style={listItemStyle}>
                <span style={strongStyle}>Fabbisogni Dipendenti:</span>
                <ul style={{paddingLeft: '2rem'}}>
                  <li style={listItemStyle}>Fabbisogni da Piano/Produzione (-)</li>
                  <li style={listItemStyle}>Giacenze, Ordini (+)</li>
                </ul>
              </li>
            </ul>
            
            <h3 style={subSectionTitleStyle}>4.3 Modelli di Pianificazione</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>Pianificazione a fabbisogno o deterministica (MRP):</span> Logica push</li>
              <li style={listItemStyle}><span style={strongStyle}>Pianificazione a consumo o stocastica:</span> Logica pull (tipicamente per materiali di consumo sui quali si vuole un livello di stock costante che non dipende dalla domanda), ad esempio Reorder Point</li>
            </ul>
            
            <h3 style={subSectionTitleStyle}>4.4 Termini Chiave MRP</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>BOM explosion:</span> Processo di scomposizione della distinta base per identificare tutti i componenti necessari alla produzione</li>
              <li style={listItemStyle}><span style={strongStyle}>Analisi shortage:</span> Valutazione delle carenze di materiali o risorse che potrebbero compromettere la produzione</li>
              <li style={listItemStyle}><span style={strongStyle}>Rescheduling message:</span> Comunicazioni di rimodulazione dei piani produttivi a seguito di variazioni</li>
              <li style={listItemStyle}><span style={strongStyle}>Proposte produzione:</span> Suggerimenti operativi su cosa, quanto e quando produrre</li>
              <li style={listItemStyle}><span style={strongStyle}>Proposte acquisto:</span> Suggerimenti per gli approvvigionamenti di materiali e componenti</li>
            </ul>
          </div>
        )}
      </div>
      
      {/* Sezione 5: Shop Floor Process */}
      <div style={sectionStyle}>
        <div 
          style={sectionHeaderStyle}
          onClick={() => toggleSection('section5')}
        >
          <h2 style={sectionTitleStyle}>5. Shop Floor Process</h2>
          <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section5' ? '▼' : '▶'}</span>
        </div>
        
        {activeSection === 'section5' && (
          <div style={sectionContentStyle}>
            <h3 style={subSectionTitleStyle}>5.1 Panoramica degli Ordini di Produzione</h3>
            <p style={{marginBottom: '1rem'}}>
              Il processo di produzione inizia con la creazione di un ordine di produzione e comprende diverse fasi fino alla chiusura dell'ordine stesso.
            </p>
            
            <h3 style={subSectionTitleStyle}>5.2 Creazione dell'Ordine di Produzione</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Gli ordini di produzione vengono creati a partire da proposte MRP o manualmente</li>
              <li style={listItemStyle}>Contengono informazioni dettagliate su materiale, quantità, date, ecc.</li>
              <li style={listItemStyle}>Specificano quali componenti sono necessari e quali operazioni devono essere eseguite</li>
            </ul>
            
            <h3 style={subSectionTitleStyle}>5.3 Controllo disponibilità ATP</h3>
            <p style={{marginBottom: '1rem'}}>
              Verifica che i materiali e le risorse necessarie siano disponibili per l'ordine di produzione.
            </p>
            
            <h3 style={subSectionTitleStyle}>5.4 Rilascio e Stampa</h3>
            <p style={{marginBottom: '1rem'}}>
              Una volta verificata la disponibilità, l'ordine viene rilasciato per la produzione e può essere stampato.
            </p>
            
            <h3 style={subSectionTitleStyle}>5.5 Consumo Componenti</h3>
            <p style={{marginBottom: '1rem'}}>
              Durante la produzione, i componenti necessari vengono prelevati dal magazzino e registrati come consumati.
            </p>
            <ul style={listStyle}>
              <li style={listItemStyle}>I movimenti 261 sono CONSUMI</li>
              <li style={listItemStyle}>Se hai movimentato il materiale manualmente e non hai spuntato "consumo retroattivo", il consumo è puntuale</li>
            </ul>
            
            <h3 style={subSectionTitleStyle}>5.6 Conferma Operazioni</h3>
            <p style={{marginBottom: '1rem'}}>
              Le operazioni vengono confermate per registrare l'avanzamento della produzione, i tempi e le risorse utilizzate.
            </p>
            
            <h3 style={subSectionTitleStyle}>5.7 Versamento</h3>
            <p style={{marginBottom: '1rem'}}>
              Il versamento a magazzino rappresenta la registrazione del carico a magazzino del materiale prodotto.
            </p>
            <ul style={listStyle}>
              <li style={listItemStyle}>I movimenti 101 sono VERSAMENTI</li>
              <li style={listItemStyle}>Se si fa un versamento parziale (minore rispetto a quella suggerita dal sistema), in "visualizza ordine di produzione" si vedrà nella voce "consegnato" la quantità versata</li>
            </ul>
            
            <h3 style={subSectionTitleStyle}>5.8 Chiusura Tecnica</h3>
            <p style={{marginBottom: '1rem'}}>
              L'ultima fase dell'ordine di produzione è la chiusura tecnica.
            </p>
            <ul style={listStyle}>
               <li style={listItemStyle}>Quando l'ordine viene chiuso, i costi sostenuti vengono attribuiti ai conti dedicati</li>
               <li style={listItemStyle}>La chiusura tecnica può essere fatta tramite "modifica ordine" oppure massivamente</li>
               <li style={listItemStyle}>L'app per le modifiche massive è "elab di massa"</li>
             </ul>
           
           <h3 style={subSectionTitleStyle}>5.9 Movimenti Merci</h3>
           <p style={{marginBottom: '1rem'}}>
             In "visualizza ordine", "passaggio a", "movimenti merci documentati", si possono vedere tutti i movimenti che sono stati fatti.
           </p>
           
           <h3 style={subSectionTitleStyle}>5.10 COGI (Errori di Movimento Merci)</h3>
           <p style={{marginBottom: '1rem'}}>
             COGI consente di visualizzare i movimenti che hanno avuto problemi e correggerli.
           </p>
           <ul style={listStyle}>
             <li style={listItemStyle}>L'app è "RIELABORA MOVIMENTI MERCI"</li>
             <li style={listItemStyle}>È importante visualizzarla spesso per evitare problemi sia dal punto di vista logistico che contabile</li>
             <li style={listItemStyle}>Se hai movimentato il materiale manualmente e non hai spuntato "consumo retroattivo", il consumo è puntuale; quindi, quando fai il versamento in COGI non vedrai errori</li>
           </ul>
         </div>
       )}
     </div>
     
     {/* Sezione 6: Quality Management */}
     <div style={sectionStyle}>
       <div 
         style={sectionHeaderStyle}
         onClick={() => toggleSection('section6')}
       >
         <h2 style={sectionTitleStyle}>6. Quality Management</h2>
         <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section6' ? '▼' : '▶'}</span>
       </div>
       
       {activeSection === 'section6' && (
         <div style={sectionContentStyle}>
           <h3 style={subSectionTitleStyle}>6.1 Quality Planning</h3>
           <p style={{marginBottom: '1rem'}}>
             La pianificazione della qualità definisce come e quando vengono eseguiti i controlli durante il processo produttivo.
           </p>
           
           <h3 style={subSectionTitleStyle}>6.2 Piani di Controllo</h3>
           <ul style={listStyle}>
             <li style={listItemStyle}>Ogni operazione comprende l'elenco delle Caratteristiche di Controllo con relativi metodi da utilizzare</li>
             <li style={listItemStyle}>Ogni caratteristica ha parametri di configurazione (indicatori di controllo) e parametri di valutazione (limiti, procedura di campionamento, ecc.)</li>
             <li style={listItemStyle}>Le Operazioni di Controllo definiscono le fasi necessarie per effettuare l'ispezione e i centri di lavoro QM</li>
           </ul>
           
           <h3 style={subSectionTitleStyle}>6.3 Caratteristiche di Controllo</h3>
           <p style={{marginBottom: '1rem'}}>
             Le Caratteristiche di controllo sono un'anagrafica QM che rappresenta i singoli test/prove da effettuare ai fini di valutare l'accettabilità della merce.
           </p>
           <ul style={listStyle}>
             <li style={listItemStyle}>
               <span style={strongStyle}>Tipi di caratteristiche:</span>
               <ul style={{paddingLeft: '2rem'}}>
                 <li style={listItemStyle}><span style={strongStyle}>Caratteristica di Riferimento:</span> I parametri vengono definiti all'interno dell'anagrafica della caratteristica e non possono essere modificati nel piano di controllo</li>
                 <li style={listItemStyle}><span style={strongStyle}>Modello copia incompleto:</span> I parametri possono essere inseriti/modificati all'interno del piano di controllo</li>
                 <li style={listItemStyle}><span style={strongStyle}>Modello copia completo:</span> I parametri vengono definiti nell'anagrafica ma possono essere modificati nel piano di controllo</li>
               </ul>
             </li>
             <li style={listItemStyle}>
               <span style={strongStyle}>Classificazione:</span>
               <ul style={{paddingLeft: '2rem'}}>
                 <li style={listItemStyle}><span style={strongStyle}>Qualitative:</span> I valori che la caratteristica può assumere sono definiti all'interno di un catalogo codici</li>
                 <li style={listItemStyle}><span style={strongStyle}>Quantitative:</span> Sono numeriche</li>
                 <li style={listItemStyle}><span style={strongStyle}>Obbligatorie:</span> Il controllo è necessario ai fini della decisione di impiego</li>
                 <li style={listItemStyle}><span style={strongStyle}>Facoltative:</span> Il controllo è a scelta dell'utente</li>
               </ul>
             </li>
             <li style={listItemStyle}>
               <span style={strongStyle}>Modalità di acquisizione:</span>
               <ul style={{paddingLeft: '2rem'}}>
                 <li style={listItemStyle}><span style={strongStyle}>Acquisizione sommaria:</span> I risultati dei controlli vengono registrati in modo globale per l'intero campione</li>
                 <li style={listItemStyle}><span style={strongStyle}>Acquisizione dei singoli risultati:</span> I risultati vengono registrati per ogni singola unità del campione</li>
               </ul>
             </li>
           </ul>
           
           <h3 style={subSectionTitleStyle}>6.4 Procedure di Campionatura</h3>
           <p style={{marginBottom: '1rem'}}>
             Le Procedure di campionatura definiscono le regole con le quali viene calcolata la dimensione del campione da analizzare.
           </p>
           <ul style={listStyle}>
             <li style={listItemStyle}><span style={strongStyle}>Volume fisso:</span> La dimensione del campione non dipende dalla quantità del lotto di controllo</li>
             <li style={listItemStyle}><span style={strongStyle}>Percentuale:</span> La dimensione del campione è calcolata in percentuale rispetto alla quantità del lotto</li>
             <li style={listItemStyle}><span style={strongStyle}>Con piano di campionatura:</span> La dimensione del campione è definita in base al piano di campionatura</li>
             <li style={listItemStyle}><span style={strongStyle}>Controllo al 100%:</span> Tutta la quantità del lotto viene sottoposta ad ispezione</li>
           </ul>
           
           <h3 style={subSectionTitleStyle}>6.5 Vista Quality Management in Anagrafica Materiale</h3>
           <p style={{marginBottom: '1rem'}}>
             In anagrafica Materiale, vista Quality Management, sono contenuti i principali parametri di controllo per l'attivazione delle ispezioni di qualità lungo tutta la supply chain.
           </p>
           <ul style={listStyle}>
             <li style={listItemStyle}>Attivazione del tipo di ispezione (gli eventi scatenanti per le ispezioni di qualità)</li>
             <li style={listItemStyle}>Lo stato delle scorte all'atto dell'apertura del lotto di controllo ("utilizzo libero" o "stock CQ")</li>
             <li style={listItemStyle}>Ispezione con o senza piano di controllo</li>
           </ul>
         </div>
       )}
     </div>
     
     {/* Sezione 7: Strategie di Produzione */}
     <div style={sectionStyle}>
       <div 
         style={sectionHeaderStyle}
         onClick={() => toggleSection('section7')}
       >
         <h2 style={sectionTitleStyle}>7. Strategie di Produzione</h2>
         <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section7' ? '▼' : '▶'}</span>
       </div>
       
       {activeSection === 'section7' && (
         <div style={sectionContentStyle}>
           <h3 style={subSectionTitleStyle}>7.1 Make to Stock (MTS)</h3>
           <ul style={listStyle}>
             <li style={listItemStyle}>Produzione basata su previsioni di vendita</li>
             <li style={listItemStyle}>I prodotti finiti vengono stoccati a magazzino</li>
             <li style={listItemStyle}>Adatto per prodotti standard con domanda prevedibile</li>
             <li style={listItemStyle}>Consente consegne immediate ai clienti</li>
           </ul>
           
           <h3 style={subSectionTitleStyle}>7.2 Assembly to Order (ATO)</h3>
           <ul style={listStyle}>
             <li style={listItemStyle}>Strategia produttiva che assembla prodotti solo dopo ricezione dell'ordine cliente</li>
             <li style={listItemStyle}>I componenti e i semilavorati sono tenuti a stock</li>
             <li style={listItemStyle}>L'assemblaggio finale avviene solo a fronte di un ordine cliente</li>
             <li style={listItemStyle}>Permette personalizzazione con tempi di consegna ridotti</li>
           </ul>
           
           <h3 style={subSectionTitleStyle}>7.3 Make to Order (MTO)</h3>
           <ul style={listStyle}>
             <li style={listItemStyle}>Strategia produttiva che avvia la produzione solo dopo ricezione dell'ordine specifico</li>
             <li style={listItemStyle}>Le materie prime possono essere stoccate, ma la produzione inizia solo dopo l'ordine</li>
             <li style={listItemStyle}>Ideale per prodotti personalizzati o con elevata variabilità</li>
             <li style={listItemStyle}>Riduce i costi di stoccaggio prodotti finiti</li>
           </ul>
           
           <h3 style={subSectionTitleStyle}>7.4 Engineering to Order (ETO)</h3>
           <ul style={listStyle}>
             <li style={listItemStyle}>Approccio che prevede progettazione e produzione su specifica completamente personalizzata del cliente</li>
             <li style={listItemStyle}>Ogni fase - dalla progettazione alla produzione - inizia solo dopo l'ordine cliente</li>
             <li style={listItemStyle}>Utilizzato per prodotti altamente specifici e complessi</li>
             <li style={listItemStyle}>Richiede stretta collaborazione con il cliente</li>
           </ul>
           
           <h3 style={subSectionTitleStyle}>7.5 Special Procurement</h3>
           <ul style={listStyle}>
             <li style={listItemStyle}>Modalità speciali di approvvigionamento per casi non standard o critici</li>
             <li style={listItemStyle}>Include processi come il conto lavoro, produzione esterna, ecc.</li>
             <li style={listItemStyle}>Gestisce situazioni particolari non coperte dai modelli standard</li>
           </ul>
         </div>
       )}
     </div>
     
     {/* Sezione 8: Capacity Planning */}
     <div style={sectionStyle}>
       <div 
         style={sectionHeaderStyle}
         onClick={() => toggleSection('section8')}
       >
         <h2 style={sectionTitleStyle}>8. Capacity Planning</h2>
         <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section8' ? '▼' : '▶'}</span>
       </div>
       
       {activeSection === 'section8' && (
         <div style={sectionContentStyle}>
           <h3 style={subSectionTitleStyle}>8.1 Definizione</h3>
           <p style={{marginBottom: '1rem'}}>
             Processo di pianificazione e ottimizzazione delle risorse produttive disponibili per soddisfare la domanda prevista.
           </p>
           
           <h3 style={subSectionTitleStyle}>8.2 Capacity Workload</h3>
           <ul style={listStyle}>
             <li style={listItemStyle}>Valutazione del carico di lavoro rispetto alle capacità produttive disponibili</li>
             <li style={listItemStyle}>Analisi della saturazione dei centri di lavoro</li>
             <li style={listItemStyle}>Identificazione di colli di bottiglia e sovraccarichi</li>
           </ul>
           
           <h3 style={subSectionTitleStyle}>8.3 Finite Scheduling</h3>
           <ul style={listStyle}>
             <li style={listItemStyle}>Tecnica di programmazione che considera limiti e vincoli delle risorse produttive</li>
             <li style={listItemStyle}>Alloca le risorse tenendo conto della capacità effettiva disponibile</li>
             <li style={listItemStyle}>Ottimizza la sequenza delle operazioni per massimizzare l'efficienza</li>
           </ul>
           
           <h3 style={subSectionTitleStyle}>8.4 Livellamento del Carico</h3>
           <ul style={listStyle}>
             <li style={listItemStyle}>Redistribuzione del carico di lavoro per evitare picchi e valli</li>
             <li style={listItemStyle}>Bilanciamento delle attività tra diversi centri di lavoro</li>
             <li style={listItemStyle}>Ottimizzazione dell'utilizzo complessivo delle risorse</li>
           </ul>
         </div>
       )}
     </div>
     
     {/* Sezione 9: Batch Management */}
     <div style={sectionStyle}>
       <div 
         style={sectionHeaderStyle}
         onClick={() => toggleSection('section9')}
       >
         <h2 style={sectionTitleStyle}>9. Batch Management e Serial Number</h2>
         <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section9' ? '▼' : '▶'}</span>
       </div>
       
       {activeSection === 'section9' && (
         <div style={sectionContentStyle}>
           <h3 style={subSectionTitleStyle}>9.1 Batch Management</h3>
           <ul style={listStyle}>
             <li style={listItemStyle}>Gestione di lotti di produzione con tracciabilità e controlli specifici</li>
             <li style={listItemStyle}>Permette di tracciare gruppi di materiali prodotti nelle stesse condizioni</li>
             <li style={listItemStyle}>Facilita la gestione di materiali con date di scadenza o caratteristiche simili</li>
             <li style={listItemStyle}>Supporta i processi di richiamo e conformità normativa</li>
           </ul>
           
           <h3 style={subSectionTitleStyle}>9.2 Serial Number</h3>
           <ul style={listStyle}>
             <li style={listItemStyle}>Sistema di identificazione univoca per singoli prodotti o componenti</li>
             <li style={listItemStyle}>Consente la tracciabilità individuale degli articoli</li>
             <li style={listItemStyle}>Fondamentale per prodotti ad alto valore o soggetti a garanzia</li>
             <li style={listItemStyle}>Supporta processi di assistenza post-vendita e manutenzione</li>
           </ul>
           
           <h3 style={subSectionTitleStyle}>9.3 Integrazione nella Produzione</h3>
           <ul style={listStyle}>
             <li style={listItemStyle}>Creazione automatica di numeri di lotto durante la produzione</li>
             <li style={listItemStyle}>Assegnazione di numeri seriali in specifiche fasi del processo produttivo</li>
             <li style={listItemStyle}>Registrazione della genealogia dei prodotti (quali componenti sono stati utilizzati)</li>
             <li style={listItemStyle}>Tracciamento completo dal fornitore al cliente finale</li>
           </ul>
         </div>
       )}
     </div>
     
     {/* Sezione 10: Insights e Reportistica */}
     <div style={sectionStyle}>
       <div 
         style={sectionHeaderStyle}
         onClick={() => toggleSection('section10')}
       >
         <h2 style={sectionTitleStyle}>10. Insights e Reportistica</h2>
         <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section10' ? '▼' : '▶'}</span>
       </div>
       
       {activeSection === 'section10' && (
         <div style={sectionContentStyle}>
           <h3 style={subSectionTitleStyle}>10.1 Analisi della Produzione</h3>
           <ul style={listStyle}>
             <li style={listItemStyle}>Monitoraggio dell'avanzamento degli ordini di produzione</li>
             <li style={listItemStyle}>Analisi dei tempi di produzione effettivi rispetto a quelli pianificati</li>
             <li style={listItemStyle}>Valutazione dell'efficienza delle risorse produttive</li>
             <li style={listItemStyle}>Identificazione di colli di bottiglia e aree di miglioramento</li>
           </ul>
           
           <h3 style={subSectionTitleStyle}>10.2 KPI di Produzione</h3>
           <ul style={listStyle}>
             <li style={listItemStyle}>OEE (Overall Equipment Effectiveness)</li>
             <li style={listItemStyle}>Tempi di setup e cambio produzione</li>
             <li style={listItemStyle}>Scarti e rilavorazioni</li>
             <li style={listItemStyle}>Aderenza al piano di produzione</li>
             <li style={listItemStyle}>Costi di produzione effettivi vs. pianificati</li>
           </ul>
           
           <h3 style={subSectionTitleStyle}>10.3 Documentazione Tecnica (DMS)</h3>
           <ul style={listStyle}>
             <li style={listItemStyle}>Sistema di gestione e condivisione della documentazione tecnica di prodotto</li>
             <li style={listItemStyle}>Archiviazione di disegni, specifiche e istruzioni di lavoro</li>
             <li style={listItemStyle}>Controllo delle versioni dei documenti</li>
             <li style={listItemStyle}>Integrazione con i processi produttivi</li>
           </ul>
           
           <h3 style={subSectionTitleStyle}>10.4 Analisi Strategiche</h3>
           <ul style={listStyle}>
             <li style={listItemStyle}>Insights che generano comprensione strategica dei dati aziendali</li>
             <li style={listItemStyle}>Analisi predittive per anticipare problemi di produzione</li>
             <li style={listItemStyle}>Ottimizzazione dei processi basata sui dati storici</li>
             <li style={listItemStyle}>Supporto alle decisioni di investimento e pianificazione capacitiva</li>
           </ul>
         </div>
       )}
     </div>
     
     {/* Indice rapido */}
     <div style={{...sectionStyle, marginTop: '3rem'}}>
       <div 
         style={{...sectionHeaderStyle, backgroundColor: darkMode ? '#444444' : '#f0f7ff'}}
         onClick={() => toggleSection('indice')}
       >
         <h2 style={sectionTitleStyle}>Indice Rapido</h2>
         <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'indice' ? '▼' : '▶'}</span>
       </div>
       
       {activeSection === 'indice' && (
         <div style={sectionContentStyle}>
           <div style={{display: 'flex', flexWrap: 'wrap', gap: '1rem'}}>
             {[...Array(10)].map((_, i) => (
               <button 
                 key={i}
                 onClick={() => toggleSection(`section${i+1}`)}
                 style={{
                   padding: '0.5rem 1rem',
                   backgroundColor: darkMode ? '#333333' : '#e6f2ff',
                   color: darkMode ? '#ffffff' : '#0056b3',
                   border: 'none',
                   borderRadius: '4px',
                   cursor: 'pointer',
                   fontWeight: 'bold',
                   minWidth: '120px',
                   textAlign: 'center'
                 }}
               >
                 {i+1}. {getShortTitle(i+1)}
               </button>
             ))}
           </div>
         </div>
       )}
     </div>
     
     <div style={{marginTop: '2rem', textAlign: 'center', padding: '1rem', borderTop: `1px solid ${sectionBorderColor}`}}>
       <p>© {new Date().getFullYear()} SAP ERP Documentation - Modulo PP</p>
       <button 
         style={{...buttonStyle, marginTop: '1rem'}}
         onClick={() => {
           window.scrollTo({top: 0, behavior: 'smooth'});
         }}
       >
         Torna all'inizio
       </button>
     </div>
   </div>
 );
};

// Funzione di utilità per ottenere titoli brevi per l'indice
function getShortTitle(index) {
 const titles = [
   'Concetti',
   'Master Data',
   'Demand',
   'MRP',
   'Shop Floor',
   'Quality',
   'Strategie',
   'Capacity',
   'Batch',
   'Insights'
 ];
 return titles[index-1] || `Sezione ${index}`;
}

export default PPDocumentation;