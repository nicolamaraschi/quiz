// src/pages/FIDocumentationPage.jsx
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// Componente styled per ContentBox
const ContentBox = styled.div`
  background-color: ${props => props.darkMode ? '#2d2d2d' : '#f8f9fa'};
  padding: 1rem;
  border-radius: 6px;
  margin-bottom: 1.5rem;
  border: 1px solid ${props => props.darkMode ? '#444' : '#dee2e6'};
`;

const FIDocumentationPage = () => {
  // Definizione delle sezioni disponibili
  const allSections = [
    'section1', 'section2', 'section3', 'section4', 'section5', 
    'section6', 'section7', 'section8', 'section9', 'section10',
    'section11', 'section12', 'section13', 'section14', 'section15'
  ];

  const [activeSection, setActiveSection] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const [fontSize, setFontSize] = useState(16);
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredSections, setFilteredSections] = useState([]);

  // Inizialmente apri la prima sezione e mostra tutte le sezioni
  useEffect(() => {
    setActiveSection('section1');
    setFilteredSections(allSections);
  }, []);

  // Filtro delle sezioni in base al termine di ricerca
  useEffect(() => {
    if (!searchTerm.trim()) {
      setFilteredSections(allSections);
      return;
    }

    const sectionText = {
      section1: 'S/4 HANA Universal Journal ACDOCA',
      section2: 'Moduli Finance FI TR AA FSCM',
      section3: 'Strutture Organizzative AFC Mandante Società',
      section4: 'Localizzazioni IVA Split Payment',
      section5: 'Piano dei Conti Chart of Accounts',
      section6: 'Contabilità Generale COGE',
      section7: 'Gestione IVA Registri',
      section8: 'Business Partner Clienti Fornitori',
      section9: 'Contabilità Clienti Fornitori',
      section10: 'Tesoreria Cash Flow Analyzer',
      section11: 'Cespiti Asset Accounting',
      section12: 'Agenti Provvigioni',
      section13: 'Transazioni SAP Quotidiane',
      section14: 'Customizing e Configurazione',
      section15: 'Reportistica Avanzata'
    };

    const filtered = allSections.filter(section => 
      sectionText[section].toLowerCase().includes(searchTerm.toLowerCase())
    );
    
    setFilteredSections(filtered);
  }, [searchTerm]);

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
  const tableBorderColor = darkMode ? '#444' : '#dee2e6';
  const tableHeaderBg = darkMode ? '#333' : '#e9ecef';
  const tableRowHoverBg = darkMode ? '#333' : '#f2f2f2';

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

  const tableStyle = {
    width: '100%',
    borderCollapse: 'collapse',
    marginBottom: '1.5rem',
    fontSize: `${fontSize - 1}px`
  };

  const thStyle = {
    backgroundColor: tableHeaderBg,
    color: textColor,
    padding: '0.75rem',
    textAlign: 'left',
    border: `1px solid ${tableBorderColor}`
  };

  const tdStyle = {
    padding: '0.75rem',
    border: `1px solid ${tableBorderColor}`
  };

  const noteBoxStyle = {
    backgroundColor: darkMode ? '#003366' : '#e6f3ff',
    color: darkMode ? '#e0e0e0' : '#0056b3',
    padding: '1rem',
    marginBottom: '1.5rem',
    borderRadius: '4px',
    border: `1px solid ${darkMode ? '#004080' : '#b8daff'}`
  };

  const tipBoxStyle = {
    backgroundColor: darkMode ? '#2d3b2d' : '#d4edda',
    color: darkMode ? '#e0e0e0' : '#155724',
    padding: '1rem',
    marginBottom: '1.5rem',
    borderRadius: '4px',
    border: `1px solid ${darkMode ? '#3d5a3d' : '#c3e6cb'}`
  };

  const warningBoxStyle = {
    backgroundColor: darkMode ? '#3b3124' : '#fff3cd',
    color: darkMode ? '#e0e0e0' : '#856404',
    padding: '1rem',
    marginBottom: '1.5rem',
    borderRadius: '4px',
    border: `1px solid ${darkMode ? '#5a4a36' : '#ffeeba'}`
  };

  const nestedListStyle = {
    paddingLeft: '2rem',
    marginTop: '0.5rem'
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

      <h1 style={titleStyle}>Documentazione SAP S/4 HANA - Amministrazione e Finanza</h1>
      
      {/* Sezione 1: Caratteristiche generali */}
      <div style={sectionStyle}>
        <div 
          style={sectionHeaderStyle}
          onClick={() => toggleSection('section1')}
        >
          <h2 style={sectionTitleStyle}>1. Caratteristiche Generali di SAP S/4 HANA</h2>
          <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section1' ? '▼' : '▶'}</span>
        </div>
        
        {activeSection === 'section1' && (
          <div style={sectionContentStyle}>
            <p style={{marginBottom: '1rem'}}>
              SAP S/4 HANA è la nuova soluzione gestionale SAP basata sulla piattaforma HANA che offre numerosi vantaggi:
            </p>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                <span style={strongStyle}>Maggiore capacità di calcolo</span>: velocità di accesso ai dati moltiplicata per 2 ordini di grandezza.
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: La transazione FS10N (bilancino di verifica) che prima impiegava 3 minuti per elaborare 1 milione di registrazioni, ora impiega solo 5 secondi.
                </p>
              </li>
              <li style={listItemStyle}>
                <span style={strongStyle}>Accesso ai dati In-Memory</span>: elaborazione dati nella memoria principale anziché su disco.
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: L'analisi del cash flow con la transazione F.08 ora può analizzare 5 anni di dati in tempo reale senza necessità di pre-aggregazioni.
                </p>
              </li>
              <li style={listItemStyle}>
                <span style={strongStyle}>Database colonnare</span>: struttura semplificata rispetto ai database tradizionali.
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: Le ricerche di partite aperte clienti (FBL5N) con filtri su più colonne sono immediate grazie all'organizzazione colonnare dei dati.
                </p>
              </li>
              <li style={listItemStyle}>
                <span style={strongStyle}>Gestione efficiente di Big Data</span>: capacità di elaborare grandi volumi di dati.
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: Report consolidato di gruppo con 50 società e 10 anni di dati elaborato in pochi minuti invece di ore.
                </p>
              </li>
              <li style={listItemStyle}>
                <span style={strongStyle}>Real-Time Embedded Analytics</span>: analisi dei dati in tempo reale.
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: Dashboard finanziaria che mostra DSO (Days Sales Outstanding) calcolato istantaneamente su tutte le partite aperte, senza attendere l'elaborazione notturna.
                </p>
              </li>
              <li style={listItemStyle}>
                <span style={strongStyle}>Interfaccia SAP Fiori</span>: accesso via web con interfaccia moderna e intuitiva.
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: App "Analisi Scadenze Fornitori" che permette all'utente di visualizzare e pianificare i pagamenti con grafici interattivi e drag-and-drop per la pianificazione dei pagamenti.
                </p>
              </li>
              <li style={listItemStyle}>
                <span style={strongStyle}>Accesso mobile</span>: utilizzo da dispositivi mobili.
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: Approvazione fatture fornitori tramite notifica sullo smartphone che mostra tutti i dettagli della fattura e permette l'approvazione con un tap.
                </p>
              </li>
              <li style={listItemStyle}>
                <span style={strongStyle}>Deployment flessibile</span>: disponibile in cloud e on-premise.
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: La stessa configurazione finanziaria può essere eseguita sia su cloud AWS che nel datacenter aziendale, con sincronizzazione automatica dei dati.
                </p>
              </li>
            </ul>
            
            <h3 style={subSectionTitleStyle}>ACDOCA: Universal Journal</h3>
            <p style={{marginBottom: '1rem'}}>
              Il concetto di Universal Journal (tabella ACDOCA) rappresenta una delle innovazioni più importanti:
            </p>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                Tutti i flussi di valore sono memorizzati in un'unica fonte.
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: Un movimento di acquisto materiale genera una singola registrazione in ACDOCA invece di scritture separate in FI, CO, MM e ML come avveniva in ECC.
                </p>
              </li>
              <li style={listItemStyle}>
                Elimina la necessità di riconciliazione dei dati.
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: Il saldo del conto fornitori in FI è sempre identico a quello del Controlling senza necessità di riconciliazioni manuali o processi di allineamento.
                </p>
              </li>
              <li style={listItemStyle}>
                Supporta contabilità multidimensionale.
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: Puoi analizzare simultaneamente un costo di 10.000€ per divisione (Nord Italia), centro di costo (Marketing), progetto (Lancio Prodotto X) e segmento di business (B2B).
                </p>
              </li>
              <li style={listItemStyle}>
                Permette l'utilizzo di ledger paralleli per diverse normative contabili.
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: La stessa fattura di acquisto cespite può essere contabilizzata con ammortamento lineare nel ledger OIC (Italian GAAP) e con ammortamento a quote decrescenti nel ledger IFRS.
                </p>
              </li>
              <li style={listItemStyle}>
                Consente di definire campi addizionali personalizzati.
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: Puoi aggiungere un campo "Tipologia Cliente" e usarlo per analisi finanziarie che mostrano la redditività per tipologia (Platinum, Gold, Silver, ecc.).
                </p>
              </li>
              <li style={listItemStyle}>
                Supporta fino a 999.999 righe per documento.
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: Una fattura complessa di un grande fornitore di servizi con centinaia di voci può essere registrata in un unico documento senza dover suddividerla.
                </p>
              </li>
              <li style={listItemStyle}>
                Unifica la gestione delle valute.
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: Una fattura di 10.000 USD viene automaticamente registrata anche in EUR (8.500) e nella valuta di gruppo CHF (9.200), consentendo report consolidati immediati senza elaborazioni.
                </p>
              </li>
            </ul>
          </div>
        )}
      </div>
      
      {/* Sezione 2: Moduli Finance e altri moduli SAP */}
      <div style={sectionStyle}>
        <div 
          style={sectionHeaderStyle}
          onClick={() => toggleSection('section2')}
        >
          <h2 style={sectionTitleStyle}>2. Moduli Finance e Altri Moduli SAP</h2>
          <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section2' ? '▼' : '▶'}</span>
        </div>
        
        {activeSection === 'section2' && (
          <div style={sectionContentStyle}>
            <h3 style={subSectionTitleStyle}>Principali Moduli dell'Area Finance</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                <span style={strongStyle}>FI (Finance)</span>: Contabilità generale, clienti e fornitori
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: La registrazione di una fattura cliente con transazione FB70 genera automaticamente movimenti contabili (Dare: Cliente / Avere: Ricavi e IVA) e aggiorna il partitario del cliente.
                </p>
              </li>
              <li style={listItemStyle}>
                <span style={strongStyle}>TR (Treasury)</span>: Tesoreria
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: Tramite la transazione FF67 è possibile importare estratti conto bancari elettronici, automatizzando la riconciliazione di 250 pagamenti ricevuti con le rispettive partite clienti aperte.
                </p>
              </li>
              <li style={listItemStyle}>
                <span style={strongStyle}>AA (Asset Accounting)</span>: Gestione cespiti e investimenti
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: Con la transazione ABAVN, l'azienda può calcolare automaticamente ammortamenti mensili per 1.500 cespiti, generando le relative scritture contabili (Dare: Ammortamenti / Avere: Fondo Ammortamento).
                </p>
              </li>
              <li style={listItemStyle}>
                <span style={strongStyle}>FSCM (Financial Supply Chain Management)</span>: Controllo credito, controversie, gestione incassi
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: Il sistema blocca automaticamente un ordine di vendita da 15.000€ perché il cliente ha già raggiunto il limite di fido di 50.000€, richiedendo l'approvazione del credit manager.
                </p>
              </li>
              <li style={listItemStyle}>
                <span style={strongStyle}>AGENTI+</span>: Gestione agenti (add-on HORSA)
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: A fine mese, il sistema calcola automaticamente provvigioni del 3% sulle vendite dell'agente Mario Rossi per un totale di 4.500€, generando una prefattura con ritenuta d'acconto del 23%.
                </p>
              </li>
              <li style={listItemStyle}>
                <span style={strongStyle}>VIM (Vendor Invoice Management)</span>: Automazione registrazione fatture fornitori
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: Una fattura fornitore arriva via email, viene acquisita dal sistema che tramite OCR estrae automaticamente i dati, li verifica contro l'ordine d'acquisto e propone la registrazione contabile completa.
                </p>
              </li>
            </ul>
            
            <h3 style={subSectionTitleStyle}>Altri Moduli Collegati</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                <span style={strongStyle}>CO (Controlling)</span>: Controllo di gestione
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: Una fattura di consulenza di 20.000€ viene registrata in FI e automaticamente attribuita al centro di costo Marketing (10.000€) e R&D (10.000€) in base alla chiave di ripartizione definita.
                </p>
              </li>
              <li style={listItemStyle}>
                <span style={strongStyle}>PS (Project System)</span>: Pianificazione progetti
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: L'acquisto di un servizio per 30.000€ viene contabilizzato in FI ma imputato alla commessa "Nuovo Stabilimento" con riflessi sul budget e sull'avanzamento del progetto.
                </p>
              </li>
              <li style={listItemStyle}>
                <span style={strongStyle}>SD (Sales and Distribution)</span>: Vendite e distribuzione
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: L'evasione di un ordine cliente tramite la transazione VL01N genera automaticamente la registrazione contabile (Dare: Crediti vs Clienti / Avere: Ricavi e IVA) in FI.
                </p>
              </li>
              <li style={listItemStyle}>
                <span style={strongStyle}>MM (Material Management)</span>: Magazzino e acquisti
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: L'entrata merce di 100 unità con valore 5.000€ genera automaticamente la scrittura contabile (Dare: Giacenze / Avere: GR/IR - conto transito) in attesa della fattura fornitore.
                </p>
              </li>
              <li style={listItemStyle}>
                <span style={strongStyle}>WM (Warehouse Management)</span>: Gestione magazzino fisico
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: L'inventario fisico di fine anno identifica una differenza di -200€ che viene automaticamente contabilizzata come perdita inventariale (Dare: Costi inventariali / Avere: Giacenze).
                </p>
              </li>
              <li style={listItemStyle}>
                <span style={strongStyle}>PM (Plant Management)</span>: Manutenzione impianti
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: Un intervento di manutenzione straordinaria sull'impianto di produzione per 15.000€ viene capitalizzato e incrementa il valore del cespite in AA con relativa scrittura contabile.
                </p>
              </li>
              <li style={listItemStyle}>
                <span style={strongStyle}>HCM (Human Capital Management)</span>: Gestione personale
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: L'elaborazione mensile degli stipendi genera in FI una scrittura contabile con il costo totale (Dare: Costo del Personale / Avere: Debiti vs dipendenti e Enti previdenziali).
                </p>
              </li>
            </ul>
          </div>
        )}
      </div>
      
      {/* Sezione 3: Strutture organizzative AFC */}
      <div style={sectionStyle}>
        <div 
          style={sectionHeaderStyle}
          onClick={() => toggleSection('section3')}
        >
          <h2 style={sectionTitleStyle}>3. Strutture Organizzative AFC</h2>
          <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section3' ? '▼' : '▶'}</span>
        </div>
        
        {activeSection === 'section3' && (
          <div style={sectionContentStyle}>
            <h3 style={subSectionTitleStyle}>Strutture Organizzative Fondamentali</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                <span style={strongStyle}>Mandante</span>: Livello più alto della gerarchia, contiene le società
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: Il mandante 100 contiene tutte le società del Gruppo Rossi. Nel passaggio tra ambienti (Sviluppo, Test, Produzione), il mandante viene clonato per mantenere tutte le configurazioni.
                </p>
              </li>
              <li style={listItemStyle}>
                <span style={strongStyle}>Società</span>: Unità civilistica/fiscale di base per la contabilità, redige il bilancio e gestisce adempimenti
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: La società 1000 "Rossi Italia S.p.A." ha un proprio bilancio civilistico, presenta dichiarazioni fiscali indipendenti e tutte le registrazioni contabili riportano sempre questo codice società.
                </p>
              </li>
              <li style={listItemStyle}>
                <span style={strongStyle}>Business Area</span>: Divisioni dell'azienda per reporting specifico
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: All'interno della società Rossi Italia, esistono due Business Area: BA1000 "Divisione Industriale" e BA2000 "Divisione Consumer", ciascuna con proprio conto economico separato.
                </p>
              </li>
              <li style={listItemStyle}>
                <span style={strongStyle}>Controlling Area</span>: Area per la gestione del controllo di gestione
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: La Controlling Area 1000 contiene tutti i centri di costo, oggetti di controllo e ordini interni delle società italiane, mentre la 2000 quelli delle società estere.
                </p>
              </li>
              <li style={listItemStyle}>
                <span style={strongStyle}>Piano dei conti</span>: Struttura contabile per la registrazione delle transazioni
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: Il piano dei conti "INT" è utilizzato da tutte le società del gruppo. Il conto 2100001 rappresenta "Debiti verso fornitori" in tutte le società, facilitando il consolidamento.
                </p>
              </li>
            </ul>
            
            <h3 style={subSectionTitleStyle}>Ledger e Principi Contabili</h3>
            <p style={{marginBottom: '1rem'}}>
              SAP S/4 HANA consente di gestire più ledger (partizioni del database per registrazioni contabili):
            </p>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                Permettono di produrre bilanci secondo diversi principi contabili
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: L'ammortamento di un macchinario di 100.000€ viene calcolato con aliquota 10% (10.000€) nel ledger 0L (Italian GAAP) e con aliquota 8% (8.000€) nel ledger 2L (IFRS).
                </p>
              </li>
              <li style={listItemStyle}>
                Consentono la gestione parallela di registrazioni contabili (es. bilancio locale e bilancio per capogruppo)
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: Un accantonamento per rischi di 50.000€ viene registrato nel ledger 0L (bilancio civilistico italiano), ma non viene considerato nel ledger 2L utilizzato per il reporting alla capogruppo americana.
                </p>
              </li>
              <li style={listItemStyle}>
                Supportano l'integrazione tra dati contabili e gestionali
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: Nel ledger 3L (gestionale), i ricavi vengono suddivisi per canale di vendita (B2B/B2C) e area geografica, informazioni non richieste nei bilanci ufficiali ma fondamentali per l'analisi interna.
                </p>
              </li>
            </ul>
          </div>
        )}
      </div>
      
      {/* Sezione 4: Localizzazioni */}
      <div style={sectionStyle}>
        <div 
          style={sectionHeaderStyle}
          onClick={() => toggleSection('section4')}
        >
          <h2 style={sectionTitleStyle}>4. Localizzazioni</h2>
          <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section4' ? '▼' : '▶'}</span>
        </div>
        
        {activeSection === 'section4' && (
          <div style={sectionContentStyle}>
            <p style={{marginBottom: '1rem'}}>
              Le localizzazioni sono funzioni specifiche per gestire esigenze normative richieste nelle diverse nazioni:
            </p>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                <span style={strongStyle}>Per l'Italia</span>: gestione IVA, split payment, liquidazione periodica, dichiarazioni fiscali
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: Una fattura fornitore di 10.000€ + IVA 22% (2.200€) emessa da un professionista genera automaticamente il calcolo della ritenuta d'acconto del 20% (2.000€) con relativa registrazione contabile e gestione nel modello 770.
                </p>
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico split payment: Una fattura attiva di 10.000€ + IVA 22% emessa verso un ente pubblico viene registrata con IVA che non genera un credito verso il cliente ma un debito diretto verso l'erario (Dare: Cliente 10.000€ / Avere: Ricavi 10.000€, IVA Split Payment 2.200€).
                </p>
              </li>
              <li style={listItemStyle}>
                Schema imposte paese specifico per ciascuna nazione
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: In Germania, una transazione intercompany viene automaticamente elaborata con reverse charge, mentre in Svizzera la stessa transazione applicherebbe l'IVA standard con relativo calcolo dell'imposta sul valore aggiunto.
                </p>
              </li>
              <li style={listItemStyle}>
                Supporto per adempimenti locali e reporting normativo
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: Per l'Italia, il sistema genera automaticamente il file XML per la comunicazione trimestrale delle liquidazioni IVA e produce il file per l'invio telematico dello Spesometro con tutti i dati delle fatture attive e passive del periodo.
                </p>
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: Per la Spagna, il sistema supporta la generazione del SII (Suministro Inmediato de Información) per l'invio telematico delle fatture entro 4 giorni dall'emissione/ricezione.
                </p>
              </li>
            </ul>
          </div>
        )}
      </div>
      
     {/* Sezione 5: Piano dei conti */}
      <div style={sectionStyle}>
        <div 
          style={sectionHeaderStyle}
          onClick={() => toggleSection('section5')}
        >
          <h2 style={sectionTitleStyle}>5. Piano dei Conti</h2>
          <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section5' ? '▼' : '▶'}</span>
        </div>
        
        {activeSection === 'section5' && (
          <div style={sectionContentStyle}>
            <h3 style={subSectionTitleStyle}>Tipologie di Piano dei Conti</h3>
            <p style={{marginBottom: '1rem'}}>
              In SAP S/4 HANA esistono tre tipologie di piano dei conti:
            </p>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                <span style={strongStyle}>Piano dei conti operativo</span>: Utilizzato da tutte le società per le registrazioni contabili
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: Il piano dei conti "INT" è utilizzato da tutte le società del gruppo. Il conto 1100001 rappresenta "Cassa" per le società italiane, francesi e tedesche, garantendo uniformità nelle registrazioni quotidiane.
                </p>
              </li>
              <li style={listItemStyle}>
                <span style={strongStyle}>Piano dei conti locale</span>: Legato a specifiche società per esigenze normative locali
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: Per la società italiana viene definito anche il piano dei conti "IT" che include conti specifici come "2120035 - Debiti per IVA in sospensione", necessario per la normativa italiana ma non utilizzato da altre società.
                </p>
              </li>
              <li style={listItemStyle}>
                <span style={strongStyle}>Piano dei conti gruppo</span>: Per riclassificare i conti in base alle esigenze del bilancio consolidato
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: Il piano dei conti "CONS" associa tutti i conti di ricavo delle varie società a una struttura semplificata di 10 conti (es. "R1000 - Ricavi Prodotti Core", "R2000 - Ricavi Accessori", ecc.) utile per il reporting consolidato.
                </p>
              </li>
            </ul>
            <p style={{marginBottom: '1rem'}}>
              L'anagrafica del conto contabile in S/4 HANA integra sia informazioni civilistiche che gestionali grazie alla nuova architettura ACDOCA.
            </p>
            
            <h3 style={subSectionTitleStyle}>Gruppo Conti e Gruppo Stato Campo</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                <span style={strongStyle}>Gruppo conti</span>: Classifica i conti contabili in gruppi omogenei, controlla il range di numerazione
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: Il gruppo conti "BANK" include tutti i conti bancari con numerazione da 1150000 a 1159999. Quando si crea un nuovo conto corrente, il sistema propone automaticamente il prossimo numero disponibile in questo range.
                </p>
              </li>
              <li style={listItemStyle}>
                <span style={strongStyle}>Gruppo stato campo</span>: Definisce i campi obbligatori/facoltativi/nascosti durante la registrazione
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: Per i conti di costo, lo stato campo "COST" rende obbligatorio l'inserimento del centro di costo, mentre per i conti patrimoniali questi campi sono nascosti. Tentando di registrare un costo senza centro di costo, il sistema bloccherà l'operazione.
                </p>
              </li>
            </ul>
            
            <h3 style={subSectionTitleStyle}>Conti Civilistici e Gestionali</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                <span style={strongStyle}>Conti civilistici</span>: Rappresentano movimenti con terze parti (clienti, fornitori, banche, stato)
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: Il conto "1140000 - Banca BPM c/c 123456" registra tutti i movimenti reali di denaro con la banca. Ogni versamento o prelievo modifica il saldo di questo conto e la posizione finanziaria dell'azienda.
                </p>
              </li>
              <li style={listItemStyle}>
                <span style={strongStyle}>Conti gestionali</span>: Rappresentano movimenti interni (materie prime, processo produttivo)
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: Il conto "6100100 - Costi materiali di consumo" registra il consumo interno di materiali. Quando l'operaio preleva materiale dal magazzino per la manutenzione, viene addebitato questo conto e non c'è movimento di denaro con l'esterno.
                </p>
              </li>
            </ul>
          </div>
        )}
      </div>
      
      {/* Sezione 6: Contabilità generale */}
      <div style={sectionStyle}>
        <div 
          style={sectionHeaderStyle}
          onClick={() => toggleSection('section6')}
        >
          <h2 style={sectionTitleStyle}>6. Contabilità Generale</h2>
          <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section6' ? '▼' : '▶'}</span>
        </div>
        
        {activeSection === 'section6' && (
          <div style={sectionContentStyle}>
            <p style={{marginBottom: '1rem'}}>
              La contabilità generale gestisce:
            </p>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                <span style={strongStyle}>Registrazioni di prima nota</span>: Rappresentazione dei movimenti economici/finanziari
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: Con la transazione FB50, il contabile registra una spesa per consulenza di 5.000€ + IVA 22%, inserendo la scrittura: Dare "Costi per consulenze" 5.000€ e "IVA a credito" 1.100€ / Avere "Debiti verso fornitori" 6.100€.
                </p>
              </li>
              <li style={listItemStyle}>
                <span style={strongStyle}>Tipi documento e range di numerazione</span>: Raggruppamento delle registrazioni per tipologia
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: I documenti tipo "KR" (fatture fornitori) hanno numerazione automatica dal 4500000000 al 4599999999, mentre i documenti "KZ" (pagamenti fornitori) hanno range dal 4600000000 al 4699999999. Questo permette di identificare immediatamente la tipologia di una registrazione dal numero documento.
                </p>
              </li>
              <li style={listItemStyle}>
                <span style={strongStyle}>Periodi contabili</span>: Definiscono i periodi in cui è possibile effettuare registrazioni
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: Dopo la chiusura del mese di marzo, i periodi 1-3 vengono bloccati per la registrazione standard. Se è necessario registrare una fattura di febbraio arrivata in ritardo, il responsabile finanziario deve utilizzare un periodo speciale e indicare una motivazione.
                </p>
              </li>
              <li style={listItemStyle}>
                <span style={strongStyle}>Chiavi contabili</span>: Definiscono segno (Dare/Avere), tipo conto, campi disponibili
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: La chiave contabile "40" identifica un conto costi in Dare. Quando l'utente seleziona questa chiave durante la registrazione, il sistema propone automaticamente il segno corretto e attiva i campi necessari per un costo (centro di costo, ecc.).
                </p>
              </li>
              <li style={listItemStyle}>
                <span style={strongStyle}>Reporting</span>: Analisi saldi, analisi conto, ricerca registrazioni, cruscotti analitici
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: Con la transazione FS10N, il CFO genera un report di tutti i saldi dei conti di ricavo degli ultimi 3 mesi, confrontandoli con lo stesso periodo dell'anno precedente e identificando un aumento del 12% per i ricavi export.
                </p>
              </li>
              <li style={listItemStyle}>
                <span style={strongStyle}>Bilanci riclassificati</span>: Indipendenti dalla codifica dei conti, con confronto tra periodi
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: Lo schema di bilancio "IFRS-PL" raggruppa tutti i conti di costo e ricavo secondo lo standard internazionale, indipendentemente dalla codifica locale. Questo permette di visualizzare il conto economico secondo lo standard IFRS anche se i conti sono strutturati secondo le esigenze italiane.
                </p>
              </li>
            </ul>
          </div>
        )}
      </div>
      
      {/* Sezione 7: Gestione IVA */}
      <div style={sectionStyle}>
        <div 
          style={sectionHeaderStyle}
          onClick={() => toggleSection('section7')}
        >
          <h2 style={sectionTitleStyle}>7. Gestione IVA</h2>
          <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section7' ? '▼' : '▶'}</span>
        </div>
        
        {activeSection === 'section7' && (
          <div style={sectionContentStyle}>
            <p style={{marginBottom: '1rem'}}>
              La gestione IVA in Italia richiede particolare attenzione:
            </p>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                <span style={strongStyle}>Codici IVA</span>: Elemento base che definisce tipo di imposta, aliquota, conto contabile
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: Il codice IVA "A4" identifica l'IVA acquisti 22% detraibile. Quando si registra una fattura fornitore con questo codice, il sistema calcola automaticamente l'imposta, utilizza il conto "1170000 - IVA a credito" e inserisce la transazione nel registro acquisti.
                </p>
              </li>
              <li style={listItemStyle}>
                <span style={strongStyle}>Registri IVA</span>: Raggruppamento fatture dello stesso tipo secondo normativa
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: L'azienda ha configurato 3 registri IVA: "AC" per gli acquisti, "VE" per le vendite e "CO" per i corrispettivi. La fattura del fornitore Bianchi viene automaticamente inserita nel registro "AC" con progressivo 245 del 2025, facilitando le stampe fiscali e la liquidazione periodica.
                </p>
              </li>
              <li style={listItemStyle}>
                <span style={strongStyle}>Liquidazione periodica</span>: Produzione file XML trimestrale per l'amministrazione fiscale
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: A fine aprile, l'azienda utilizza la transazione F.17 per calcolare la liquidazione IVA del primo trimestre: l'IVA a debito sulle vendite (75.000€) viene compensata con l'IVA a credito sugli acquisti (45.000€), determinando un debito verso l'erario di 30.000€. Il sistema genera automaticamente sia la registrazione contabile che il file XML da inviare all'Agenzia delle Entrate.
                </p>
              </li>
              <li style={listItemStyle}>
                <span style={strongStyle}>Validazioni</span>: Controlli sui codici IVA vs tipo documento
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: Quando un utente tenta di utilizzare il codice IVA "V1" (vendite nazionali) su una fattura verso un cliente tedesco, il sistema blocca l'operazione e suggerisce il codice "V7" (cessioni intracomunitarie non imponibili) per rispettare la normativa.
                </p>
              </li>
              <li style={listItemStyle}>
                <span style={strongStyle}>Report di conformità ampliata</span>: Gestione end-to-end della rendicontazione delle imposte
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: Con la transazione RTFI, il responsabile fiscale può generare automaticamente i report per l'esterometro, includendo tutte le fatture da/verso soggetti esteri del trimestre, con dettaglio di natura, importo e paese della controparte.
                </p>
              </li>
            </ul>
            
            <h3 style={subSectionTitleStyle}>Validazioni</h3>
            <p style={{marginBottom: '1rem'}}>
              Le validazioni consentono di impostare controlli di merito sulle registrazioni:
            </p>
            <ul style={listStyle}>
              <li style={listItemStyle}>
                Controlli sui dati di testata (es. data registrazione)
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: Se un utente tenta di registrare una fattura con data 15/02/2025 quando il periodo contabile di febbraio è già chiuso, il sistema genera un errore e impedisce la registrazione, richiedendo una data valida o l'intervento di un utente con autorizzazioni speciali.
                </p>
              </li>
              <li style={listItemStyle}>
                Controlli sui dati di posizione (es. codice IVA vs tipo documento)
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: Durante la registrazione di una nota di credito, se l'utente seleziona un codice IVA standard invece di uno specifico per le rettifiche, il sistema avvisa e impedisce di proseguire, garantendo la corretta classificazione fiscale del documento.
                </p>
              </li>
              <li style={listItemStyle}>
                Controlli sul documento completo (es. conti gestionali vs civilistici)
                <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: Un utente tenta di registrare un documento dove abbina un conto patrimoniale (1200000 - Crediti) con un oggetto di CO (centro di costo Marketing). Il sistema riconosce l'incongruenza e blocca la registrazione, poiché i conti patrimoniali non possono essere associati a oggetti di controlling.
                </p>
              </li>
            </ul>
          </div>
        )}
      </div>
      
     {/* Sezione 8: Business Partner */}
{/* Sezione 8: Business Partner */}
<div style={sectionStyle}>
  <div 
    style={sectionHeaderStyle}
    onClick={() => toggleSection('section8')}
  >
    <h2 style={sectionTitleStyle}>8. Business Partner</h2>
    <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section8' ? '▼' : '▶'}</span>
  </div>
  
  {activeSection === 'section8' && (
    <div style={sectionContentStyle}>
      <p style={{marginBottom: '1rem'}}>
        Il concetto di Business Partner è fondamentale in SAP S/4 HANA e rappresenta un'entità centralizzata per gestire tutti i dati anagrafici di clienti, fornitori e altri partner commerciali.
      </p>
      
      <h3 style={subSectionTitleStyle}>Struttura dei Business Partner</h3>
      <ul style={listStyle}>
        <li style={listItemStyle}>
          <span style={strongStyle}>Ruoli</span>: I dati anagrafici sono organizzati tramite differenti ruoli in base ai processi da gestire
          <ul style={{paddingLeft: '2rem', marginTop: '0.5rem'}}>
            <li style={listItemStyle}>
              <span style={strongStyle}>Ruolo Partner in generale</span>: Contiene dati comuni a tutti i tipi di partner
              <ul style={{paddingLeft: '2rem', marginTop: '0.5rem'}}>
                <li style={listItemStyle}>
                  Dati generali (ragione sociale, indirizzo, comunicazione)
                  <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                    Esempio pratico: L'azienda "TechSolutions S.r.l." viene registrata come BP con codice 1000000123, indirizzo Via Roma 25, Milano e contatti generali (email: info@techsolutions.it, telefono: 02.12345678) accessibili da qualsiasi processo aziendale.
                  </p>
                </li>
                <li style={listItemStyle}>
                  Appoggi bancari (IBAN)
                  <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                    Esempio pratico: Per TechSolutions viene registrato l'IBAN IT60X0542811101000000123456 presso UniCredit, che sarà utilizzabile sia per pagamenti (se è fornitore) che per incassi (se è cliente).
                  </p>
                </li>
                <li style={listItemStyle}>
                  Informazioni fiscali (Partita IVA, Codice fiscale, Codice SDI)
                  <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                    Esempio pratico: L'anagrafica centrale di TechSolutions include Partita IVA (IT01234567890), Codice Fiscale (01234567890) e codice SDI per fatturazione elettronica (ABCDEF1), utilizzati automaticamente per ogni documento fiscale.
                  </p>
                </li>
              </ul>
            </li>
            <li style={listItemStyle}>
              <span style={strongStyle}>Ruolo Cliente</span>: Dati specifici per il ruolo cliente
              <ul style={{paddingLeft: '2rem', marginTop: '0.5rem'}}>
                <li style={listItemStyle}>
                  Dati società (conto riconciliazione, metodo pagamento, condizioni pagamento)
                  <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                    Esempio pratico: A TechSolutions, quando agisce come cliente, viene associato il conto riconciliazione 1200150 (Crediti vs clienti nazionali), metodo pagamento RB (ricevuta bancaria) e condizioni ZC01 (30gg data fattura fine mese). Queste informazioni vengono proposte automaticamente quando si crea una fattura di vendita.
                  </p>
                </li>
                <li style={listItemStyle}>
                  Solleciti (procedura sollecito, dati ultimo sollecito)
                  <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                    Esempio pratico: Per TechSolutions è configurata la procedura solleciti "IT01" con 3 livelli (avviso gentile dopo 10gg, sollecito dopo 30gg, diffida dopo 60gg). La transazione F150 mostra che l'ultimo sollecito inviato è stato di livello 1 in data 15/03/2025 per la fattura 212345.
                  </p>
                </li>
              </ul>
            </li>
            <li style={listItemStyle}>
              <span style={strongStyle}>Ruolo Fornitore</span>: Dati specifici per il ruolo fornitore
              <ul style={{paddingLeft: '2rem', marginTop: '0.5rem'}}>
                <li style={listItemStyle}>
                  Dati società (conto riconciliazione, metodo pagamento, condizioni pagamento)
                  <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                    Esempio pratico: Quando TechSolutions opera come fornitore, è associato al conto 2200100 (Debiti vs fornitori nazionali), metodo pagamento B (bonifico) e condizioni Z001 (60gg data fattura). Queste informazioni vengono proposte automaticamente durante la registrazione di una fattura fornitore.
                  </p>
                </li>
                <li style={listItemStyle}>
                  Ritenute d'acconto (tipo ritenuta, codice ritenuta)
                  <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                    Esempio pratico: TechSolutions, essendo una società di consulenza IT, ha configurato la ritenuta d'acconto tipo "A" con codice "RT20" (20% su 100% dell'imponibile). Quando si registra una sua fattura, il sistema calcola automaticamente la ritenuta, riduce l'importo del pagamento e gestisce il versamento all'erario.
                  </p>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
      
      <h3 style={subSectionTitleStyle}>Configurazione Business Partner</h3>
      <p style={{marginBottom: '1rem'}}>
        Gli step principali della configurazione riguardano:
      </p>
      <ol style={listStyle}>
        <li style={listItemStyle}>
          Definizione dei ruoli e relativi campi obbligatori/facoltativi
          <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
            Esempio pratico: Per il ruolo BP "Agente", sono stati configurati come obbligatori i campi "Area di vendita" e "Categoria agente" (mono/plurimandatario), mentre per il ruolo BP "Dipendente" sono obbligatori "Reparto" e "Inquadramento contrattuale".
          </p>
        </li>
        <li style={listItemStyle}>
          Legame raggruppamento/range numerazione/gruppo conti clienti o fornitori
          <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
            Esempio pratico: I business partner con raggruppamento "ZCLI" (clienti nazionali) ricevono automaticamente numerazione nel range 1000000000-1999999999 e vengono associati al gruppo conti "01" che definisce i conti di riconciliazione standard per clienti nazionali.
          </p>
        </li>
        <li style={listItemStyle}>
          Ruolo BP: Definisce le caratteristiche generali del Business Partner
          <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
            Esempio pratico: Il ruolo "FLCU00" (Cliente) attiva automaticamente le viste per dati di vendita, spedizione e fatturazione quando viene assegnato a un BP, mentre il ruolo "FLVN00" (Fornitore) attiva le viste per acquisti e pagamenti.
          </p>
        </li>
        <li style={listItemStyle}>
          Raggruppamento: Permette di categorizzare i Business Partner
          <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
            Esempio pratico: I fornitori sono suddivisi in raggruppamenti "ZFOR1" (materiali), "ZFOR2" (servizi) e "ZFOR3" (consulenti). Quando si crea un nuovo fornitore di servizi logistici, selezionando il raggruppamento "ZFOR2" vengono predisposti automaticamente i campi specifici per questa categoria.
          </p>
        </li>
        <li style={listItemStyle}>
          Gruppo conti Clienti/Fornitori: Definisce le impostazioni contabili
          <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
            Esempio pratico: Il gruppo conti fornitori "ESTE" (fornitori esteri) imposta automaticamente il conto di riconciliazione 2200200 (Debiti verso fornitori esteri), il conto IVA intracomunitaria 1170300 e blocca i codici IVA nazionali durante la registrazione fatture.
          </p>
        </li>
      </ol>
    </div>
  )}
</div>
      
      {/* Sezione 9: Contabilità Clienti e Fornitori */}
<div style={sectionStyle}>
  <div 
    style={sectionHeaderStyle}
    onClick={() => toggleSection('section9')}
  >
    <h2 style={sectionTitleStyle}>9. Contabilità Clienti e Fornitori</h2>
    <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section9' ? '▼' : '▶'}</span>
  </div>
  
  {activeSection === 'section9' && (
    <div style={sectionContentStyle}>
      <h3 style={subSectionTitleStyle}>9.1 Contabilità Clienti</h3>
      <p style={{fontWeight: 'bold', marginBottom: '0.5rem', marginTop: '1rem'}}>Struttura bancaria</p>
      <ul style={listStyle}>
        <li style={listItemStyle}>
          Banche esterne: Anagrafica di tutti gli sportelli bancari con codici ABI/CAB
          <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
            Esempio pratico: Nel sistema sono registrate tutte le filiali di Intesa Sanpaolo con i rispettivi ABI (03069) e CAB (01234 per Milano Centro, 09123 per Roma EUR). Quando si registra una RiBa, selezionando questi codici il sistema compila automaticamente nome banca, indirizzo e riferimenti SWIFT.
          </p>
        </li>
        <li style={listItemStyle}>
          Banche interne: Conti bancari utilizzati dall'azienda
          <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
            Esempio pratico: L'azienda ha configurato 3 banche interne: "BMPS" (c/c ordinario Monte Paschi IT601234...), "INORD" (c/c Intesa dedicato agli incassi export) e "UNICR" (c/c anticipi Unicredit). Ogni conto è collegato al rispettivo conto contabile in CO.GE.
          </p>
        </li>
        <li style={listItemStyle}>
          Gerarchie: Raggruppamenti di banche per reporting (es. per nazione, per gruppo bancario)
          <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
            Esempio pratico: È stata creata la gerarchia "BANKS" con sottogruppi "ITALY", "EUROPE" e "OTHER". Sotto "ITALY" ci sono ulteriori raggruppamenti per tipo ("ORDINARY", "EXPORT", "ADVANCES"). Questo permette di generare report aggregati che mostrano la posizione liquida complessiva per area geografica.
          </p>
        </li>
      </ul>
      
      <h4 style={{...subSectionTitleStyle, fontSize: `${fontSize + 1}px`, marginTop: '1.5rem'}}>Strumenti avanzati di tesoreria</h4>
      <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Cash Flow Analyzer</p>
      <p style={{marginBottom: '1rem'}}>
        Strumento potente che integra:
      </p>
      <ul style={listStyle}>
        <li style={listItemStyle}>
          Saldi bancari attuali
          <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
            Esempio pratico: Il Cash Flow Analyzer mostra che al 5/4/2025 il saldo attuale del c/c MPS è di 283.450€, quello di Intesa è di 156.780€ e quello di Unicredit è di 52.340€, per una liquidità immediata totale di 492.570€.
          </p>
        </li>
        <li style={listItemStyle}>
          Scadenze clienti e fornitori
          <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
            Esempio pratico: Nella settimana 7-13 aprile 2025, lo strumento mostra incassi previsti da clienti per 215.600€ (di cui 85.000€ da RiBa già presentate) e pagamenti a fornitori per 196.300€ (di cui 150.000€ già programmati con F110), con un delta positivo di 19.300€.
          </p>
        </li>
        <li style={listItemStyle}>
          Ordini di acquisto e vendita
          <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
            Esempio pratico: Il sistema rileva che ci sono ordini cliente confermati ma non ancora evasi per 450.000€ che, considerando le condizioni di pagamento (media 45gg), genereranno incassi per circa 300.000€ a fine maggio e 150.000€ a metà giugno.
          </p>
        </li>
        <li style={listItemStyle}>
          Movimenti previsionali (stipendi, tasse, ecc.)
          <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
            Esempio pratico: Il Cash Flow evidenzia che il 27 aprile ci sarà l'addebito degli stipendi per 175.600€ e il 16 maggio il pagamento trimestrale IVA per 92.340€, permettendo di pianificare con anticipo la liquidità necessaria per questi importanti esborsi.
          </p>
        </li>
      </ul>
      <p style={{marginBottom: '1rem'}}>
        Permette analisi con diversi orizzonti temporali (giorni, settimane, mesi) e consente di verificare i dettagli di ogni importo aggregato.
      </p>
      
      <p style={{fontWeight: 'bold', marginBottom: '0.5rem', marginTop: '1rem'}}>Previsioni di liquidità</p>
      <p style={{marginBottom: '1rem'}}>
        Proiezione dell'andamento della liquidità nei successivi 90 giorni, utilizzando gli stessi dati del Cash Flow Analyzer ma con visualizzazione orientata alla previsione.
        <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
          Esempio pratico: La previsione mostra che la liquidità attuale di 492.570€ scenderà a 390.000€ a fine aprile (dopo pagamento stipendi), risalirà a 610.000€ a fine maggio (grazie agli incassi dai grandi clienti retail) per poi scendere nuovamente a 450.000€ a metà giugno (per pagamento imposte e dividendi). Il tesoriere può così pianificare investimenti a breve termine nei periodi di eccesso di liquidità.
        </p>
      </p>
      
      <p style={{fontWeight: 'bold', marginBottom: '0.5rem', marginTop: '1rem'}}>Movimenti previsionali</p>
      <p style={{marginBottom: '1rem'}}>
        Sistema per inserire manualmente costi o ricavi attesi non derivanti da documenti esistenti:
      </p>
      <ul style={listStyle}>
        <li style={listItemStyle}>
          Stipendi
          <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
            Esempio pratico: Il responsabile finanziario inserisce il movimento previsionale "STIP-04-25" per 175.600€ in data 27/04/2025 con addebito sul conto MPS. Questo movimento, pur non derivando da documenti contabili registrati, influenzerà la previsione di liquidità e verrà considerato in tutti i report di tesoreria.
          </p>
        </li>
        <li style={listItemStyle}>
          Pagamenti fiscali (F24)
          <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
            Esempio pratico: Viene inserito il movimento previsionale "F24-05-25" per 92.340€ in data 16/05/2025, corrispondente alla liquidazione IVA del 1° trimestre. Anche se la liquidazione esatta sarà calcolata solo ad aprile inoltrato, questa stima permette di riservare la liquidità necessaria.
          </p>
        </li>
        <li style={listItemStyle}>
          Acquisti non ancora formalizzati con ordini
          <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
            Esempio pratico: Il direttore produzione ha comunicato la necessità di acquistare un impianto di condizionamento per 65.000€ con pagamento previsto entro giugno. Questo viene inserito come movimento previsionale "COND-06-25" anche se la richiesta d'acquisto ufficiale non è ancora stata creata.
          </p>
        </li>
        <li style={listItemStyle}>
          Altri costi/ricavi pianificati
          <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
            Esempio pratico: L'ufficio commerciale ha informato che è in fase di finalizzazione una commessa importante con un anticipo di 200.000€ previsto per fine maggio. Questo viene registrato come movimento previsionale "ANT-PROJ23" per avere una visione completa della liquidità futura.
          </p>
        </li>
      </ul>
      
      <h3 style={subSectionTitleStyle}>9.2 Gestione Cespiti</h3>
      <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Processo integrato di gestione cespiti</p>
      <p style={{marginBottom: '1rem'}}>
        Il modulo cespiti (FI-AA - Asset Accounting) gestisce l'intero ciclo di vita dei beni ammortizzabili:
      </p>
      
      <h4 style={{...subSectionTitleStyle, fontSize: `${fontSize + 1}px`, marginTop: '1.5rem'}}>Fase di acquisizione</h4>
      <ol style={listStyle}>
        <li style={listItemStyle}>
          Controlling: Creazione di una commessa di investimento per tracciare i costi
          <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
            Esempio pratico: Per l'acquisto di una nuova linea di confezionamento viene creata la commessa di investimento "I-2025-042" con budget approvato di 420.000€. Tutti i costi relativi (macchinario principale, nastri trasportatori, formazione, ecc.) verranno imputati a questa commessa per un controllo puntuale del budget.
          </p>
        </li>
        <li style={listItemStyle}>
          Acquisti: Gestione delle richieste d'acquisto e ordini
          <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
            Esempio pratico: Tramite la transazione ME21N viene emesso l'ordine d'acquisto 4500125678 al fornitore PackSystems per 320.000€ relativo al macchinario principale, assegnandolo alla commessa I-2025-042 e specificando data di consegna, condizioni di collaudo e garanzia.
          </p>
        </li>
        <li style={listItemStyle}>
          Logistica: Registrazione dell'entrata merce
          <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
            Esempio pratico: All'arrivo del macchinario, il magazziniere utilizza la transazione MIGO per registrare l'entrata merce, generando il documento materiale 5000987654. Contestualmente, il sistema valorizza il macchinario a 320.000€ e crea una partita fornitore in attesa di fattura.
          </p>
        </li>
        <li style={listItemStyle}>
          Contabilità: Controllo e registrazione fatture
          <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
            Esempio pratico: Quando arriva la fattura da PackSystems, l'ufficio contabilità usa la transazione MIRO per registrarla. Il sistema verifica automaticamente la corrispondenza tra fattura (320.000€ + IVA 22% = 390.400€), ordine e entrata merce (three-way matching) e genera il documento contabile 5105784321.
          </p>
        </li>
        <li style={listItemStyle}>
          Cespiti: Creazione del cespite in costruzione e successiva capitalizzazione
          <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
            Esempio pratico: Durante l'installazione, il sistema mantiene il valore nella commessa e nel cespite in costruzione 40000789 "Nuova linea confezionamento". Dopo il collaudo positivo, usando la transazione AIAB, il cespite viene capitalizzato trasformandolo in cespite definitivo 30000456 con valore totale 405.000€ (inclusi 85.000€ di costi accessori) e inizia l'ammortamento mensile di 3.375€ (vita utile 10 anni).
          </p>
        </li>
      </ol>
      
      <h4 style={{...subSectionTitleStyle, fontSize: `${fontSize + 1}px`, marginTop: '1.5rem'}}>Fase di gestione</h4>
      <ol style={listStyle}>
        <li style={listItemStyle}>
          Contabilizzazione: Registrazione nel libro cespiti
          <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
            Esempio pratico: Il cespite 30000456 "Linea confezionamento" viene registrato nel libro cespiti con valore iniziale 405.000€, data capitalizzazione 15/04/2025, centro di costo "PROD-001", ubicazione "Stabilimento 1, Reparto 3" e responsabile "Mario Rossi".
          </p>
        </li>
        <li style={listItemStyle}>
          Ammortamenti: Calcolo e contabilizzazione degli ammortamenti periodici
          <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
            Esempio pratico: A fine aprile, l'ufficio contabilità avvia la transazione AFAB per calcolare gli ammortamenti mensili. Per la linea di confezionamento, il sistema calcola 3.375€ (405.000€ / 120 mesi) e genera automaticamente la scrittura: Dare "Ammortamenti impianti" 3.375€ / Avere "Fondo ammortamento impianti" 3.375€.
          </p>
        </li>
        <li style={listItemStyle}>
          Reporting: Produzione di report civilistici e fiscali
          <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
            Esempio pratico: Con la transazione AR01, il responsabile amministrativo genera il "Registro Beni Ammortizzabili" che mostra che la linea di confezionamento ha un valore originario di 405.000€, ammortamento dell'anno corrente di 30.375€ (9 mesi), fondo ammortamento totale di 30.375€ e valore residuo di 374.625€.
          </p>
        </li>
        <li style={listItemStyle}>
          Analisi: Allocazione costi su centri di costo e oggetti di controllo
          <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
            Esempio pratico: L'ammortamento mensile di 3.375€ viene automaticamente assegnato al centro di costo "PROD-001" (Reparto Confezionamento) permettendo analisi di controlling che mostrano l'impatto del nuovo investimento sulla redditività del reparto e sui costi unitari di produzione.
          </p>
        </li>
      </ol>
      
      <h4 style={{...subSectionTitleStyle, fontSize: `${fontSize + 1}px`, marginTop: '1.5rem'}}>Fase di dismissione</h4>
      <ol style={listStyle}>
        <li style={listItemStyle}>
          Vendita/Rottamazione: Registrazione dell'uscita del bene
          <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
            Esempio pratico: Dopo 8 anni di utilizzo, la vecchia linea confezionamento (cespite 30000123) viene venduta a un'azienda estera per 50.000€. Attraverso la transazione ABAVN, viene registrata la vendita del cespite che ha un valore residuo contabile di 30.000€.
          </p>
        </li>
        <li style={listItemStyle}>
          Calcolo plus/minusvalenze: Determinazione del risultato economico
          <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
            Esempio pratico: Il sistema calcola automaticamente la plusvalenza di 20.000€ (prezzo vendita 50.000€ - valore residuo 30.000€) generando il documento contabile che registra questo componente positivo di reddito nel conto "Plusvalenze da alienazione cespiti".
          </p>
        </li>
        <li style={listItemStyle}>
          Contabilizzazione: Registrazione finale in contabilità
          <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
            Esempio pratico: Il sistema genera automaticamente la scrittura completa: Dare "Banca c/c Intesa" 50.000€, Dare "Fondo ammortamento impianti" 270.000€ / Avere "Impianti e macchinari" 300.000€, Avere "Plusvalenze alienazione cespiti" 20.000€. Il cespite viene marcato come dismesso e non genererà più ammortamenti.
          </p>
        </li>
      </ol>
      
      <h4 style={{...subSectionTitleStyle, fontSize: `${fontSize + 1}px`, marginTop: '1.5rem'}}>Configurazione del sistema cespiti</h4>
      <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Piano di valutazione</p>
      <p style={{marginBottom: '1rem'}}>
        Struttura di base che organizza le diverse tipologie di ammortamento. Tipicamente si configura un piano per nazione per rispettare i requisiti normativi locali.
        <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
          Esempio pratico: Per l'Italia è configurato il piano di valutazione "01" che include tutte le regole specifiche per la normativa italiana, mentre per la Germania è configurato il piano "02" con le relative specificità fiscali tedesche. Un'azienda multinazionale può così gestire correttamente i cespiti in ogni paese.
        </p>
      </p>
      
      <p style={{fontWeight: 'bold', marginBottom: '0.5rem', marginTop: '1rem'}}>Aree di valutazione</p>
      <p style={{marginBottom: '1rem'}}>
        All'interno del piano, le aree rappresentano diverse finalità di calcolo:
      </p>
      <ul style={listStyle}>
        <li style={listItemStyle}>
          <span style={strongStyle}>Area 01 (Civilistica)</span>: Registra ammortamenti secondo le regole del codice civile
          <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
            Esempio pratico: Un macchinario del valore di 100.000€ viene ammortizzato nell'area 01 con aliquota del 10% annuo (10.000€), seguendo le regole civilistiche che prevedono quote costanti in base alla vita utile effettiva del bene (10 anni).
          </p>
        </li>
        <li style={listItemStyle}>
          <span style={strongStyle}>Area 02 (Fiscale)</span>: Calcola ammortamenti secondo regole fiscali (spesso con percentuali diverse)
          <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
            Esempio pratico: Lo stesso macchinario nell'area 02 viene ammortizzato con aliquota fiscale del 20% (20.000€ all'anno), in base alla tabella ministeriale che per quella categoria di beni permette una deduzione fiscale accelerata rispetto all'ammortamento civilistico.
          </p>
        </li>
        <li style={listItemStyle}>
          <span style={strongStyle}>Area 03 (Differenze)</span>: Evidenzia differenze tra civilistico e fiscale per la gestione della fiscalità differita
          <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
            Esempio pratico: L'area 03 calcola automaticamente la differenza tra area 01 e 02 pari a 10.000€ (20.000€ - 10.000€). Questa differenza genera imposte differite pari a 2.400€ (10.000€ x 24% IRES) che vengono registrate in contabilità come "Fondo imposte differite".
          </p>
        </li>
        <li style={listItemStyle}>
          <span style={strongStyle}>Area 20 (Gestionale)</span>: Per analisi interne, senza impatto contabile
          <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
            Esempio pratico: Nell'area 20, lo stesso macchinario viene ammortizzato in base all'effettivo utilizzo: con produzione al 70% della capacità, l'ammortamento sarà di 7.000€ (10% x 100.000€ x 70%). Questo valore viene utilizzato solo per analisi interne di redditività e non genera scritture contabili.
          </p>
        </li>
      </ul>
      
      <p style={{fontWeight: 'bold', marginBottom: '0.5rem', marginTop: '1rem'}}>Classi cespite</p>
      <p style={{marginBottom: '1rem'}}>
        Categorizzazioni che raggruppano beni simili e definiscono:
      </p>
      <ul style={listStyle}>
        <li style={listItemStyle}>
          Conti contabili per automatizzare le registrazioni
          <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
            Esempio pratico: Per la classe cespite "MACH" (Macchinari), il sistema utilizza automaticamente il conto "1240000" per il valore del bene, "2740000" per il fondo ammortamento e "6350000" per l'ammortamento dell'esercizio, senza che l'utente debba inserirli manualmente.
          </p>
        </li>
        <li style={listItemStyle}>
          Regole di ammortamento predefinite
          <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
            Esempio pratico: Quando si crea un nuovo cespite nella classe "IT" (Information Technology), il sistema propone automaticamente l'ammortamento a 3 anni civilistico e a 5 anni fiscale, con inizio ammortamento dal mese di entrata in funzione.
          </p>
        </li>
        <li style={listItemStyle}>
          Vita utile standard
          <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
            Esempio pratico: Per i cespiti della classe "BUILD" (Edifici), il sistema propone automaticamente una vita utile di 33 anni civilistica e 10 anni fiscale, che l'utente può eventualmente modificare in casi particolari (es. leasing).
          </p>
        </li>
        <li style={listItemStyle}>
          Formato di visualizzazione e campi rilevanti
          <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
            Esempio pratico: Per la classe "VEIC" (Veicoli), sono attivi campi specifici come "Numero telaio", "Targa", "Data immatricolazione" e "Potenza KW" che non appaiono per altre classi. Inoltre, la numerazione segue il formato "V-XXXXX" (es. V-00123).
          </p>
        </li>
        <li style={listItemStyle}>
          Numerazione automatica
          <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
            Esempio pratico: La classe "LAND" (Terreni) ha un range di numerazione riservato dal 10000 al 19999. Quando si crea un nuovo terreno, il sistema assegna automaticamente il prossimo numero disponibile (es. 10045). Questo permette di identificare immediatamente la tipologia di un cespite dal suo codice.
          </p>
        </li>
      </ul>
      <p style={{marginBottom: '1rem'}}>
        Esempi di classi: Terreni, Edifici, Macchinari, Attrezzature, Mobili, Automezzi, Hardware.
      </p>
      
      <h4 style={{...subSectionTitleStyle, fontSize: `${fontSize + 1}px`, marginTop: '1.5rem'}}>Anagrafica cespiti</h4>
      <p style={{marginBottom: '1rem'}}>
          L'anagrafica di un cespite contiene numerose informazioni organizzate in blocchi:
      </p>
      <ul style={listStyle}>
          <li style={listItemStyle}>
              Dati generali: Descrizione, quantità, numero inventario
              <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: Cespite 30000789 "Pressa idraulica 200t marca XYZ mod. PH-2000", quantità 1, numero inventario fisico INV/2025/042, numero serie produttore SN-456789XYZ, categoria merceologica "Macchine operatrici".
              </p>
          </li>
          <li style={listItemStyle}>
              Informazioni di registrazione: Date di acquisizione, capitalizzazione
              <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: Data acquisizione 15/03/2025, data entrata in funzione 10/04/2025 (dopo installazione e collaudo), data inizio ammortamento 01/04/2025 (primo giorno del mese di entrata in funzione), documento acquisizione 5105234567.
              </p>
          </li>
          <li style={listItemStyle}>
              Dati temporali: Centro di costo, ubicazione fisica
              <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: Centro di costo PROD002 (Reparto Stampaggio), ubicazione fisica "Stabilimento Torino, Capannone B, Area 3", responsabile tecnico Ing. Mario Bianchi, reparto manutenzione assegnato MAINT-01.
              </p>
          </li>
          <li style={listItemStyle}>
              Attribuzioni: Classificazioni aggiuntive per reporting
              <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: Classificazione investimento "Ampliamento capacità produttiva", piano investimenti "Piano 2025-27", progetto strategico "Industria 4.0", business line "Automotive", classe tecnologica "Avanzata".
              </p>
          </li>
          <li style={listItemStyle}>
              Dati di origine: Fornitore, produttore, riferimenti documenti
              <p style={{marginTop: '0.5rem', marginBottom: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                  Esempio pratico: Fornitore HydroPress GmbH (BP 1000005431), fattura 2025-1587 del 20/03/2025, ordine 4500234567 del 15/03/2025
              </p>
              <p>Dettagli aggiuntivi:</p>
              <ul style={listStyle}>
                  <li style={listItemStyle}>Valutazione: Parametri di ammortamento per ogni area</li>
                  <li style={listItemStyle}>Valori: Costo storico, rivalutazioni, ammortamenti</li>
              </ul>
          </li>
      </ul>

      <h4 style={{...subSectionTitleStyle, fontSize: `${fontSize + 1}px`, marginTop: '1.5rem'}}>Ammortamenti</h4>
      <p style={{marginBottom: '1rem'}}>
          Il sistema calcola automaticamente gli ammortamenti secondo le chiavi configurate:
      </p>
      <ul style={listStyle}>
          <li style={listItemStyle}>Ammortamento a quote costanti (percentuale fissa)</li>
          <li style={listItemStyle}>Ammortamento a quote decrescenti</li>
          <li style={listItemStyle}>Ammortamento per utilizzo</li>
          <li style={listItemStyle}>Altre metodologie specifiche</li>
      </ul>

      <p style={{marginBottom: '1rem'}}>
          Le registrazioni possono essere:
      </p>
      <ul style={listStyle}>
          <li style={listItemStyle}>Simulate (per verifica)</li>
          <li style={listItemStyle}>Contabilizzate (con impatto contabile)</li>
          <li style={listItemStyle}>Pianificate (per previsioni future)</li>
      </ul>
            
            <h4 style={{...subSectionTitleStyle, fontSize: `${fontSize + 1}px`, marginTop: '1.5rem'}}>Reporting cespiti</h4>
            <p style={{marginBottom: '1rem'}}>
              Il sistema offre vari report per esigenze diverse:
            </p>
            <ul style={listStyle}>
              <li style={listItemStyle}>Libro cespiti: Elenco analitico dei beni</li>
              <li style={listItemStyle}>Liste ammortamenti: Dettaglio degli ammortamenti calcolati</li>
              <li style={listItemStyle}>Confronto aree: Analisi delle differenze tra civilistico e fiscale</li>
              <li style={listItemStyle}>Registro beni ammortizzabili: Report fiscale obbligatorio</li>
              <li style={listItemStyle}>Movimenti cespite: Storico delle transazioni per ogni bene</li>
              <li style={listItemStyle}>Liste analitiche: Report personalizzabili per ubicazione, centro di costo, ecc.</li>
            </ul>
          </div>
        )}
      </div>
      
   {/* Sezione 10: Tesoreria */}
{filteredSections.includes('section10') && (
  <div style={sectionStyle}>
    <div 
      style={sectionHeaderStyle}
      onClick={() => toggleSection('section10')}
    >
      <h2 style={sectionTitleStyle}>10. Tesoreria</h2>
      <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section10' ? '▼' : '▶'}</span>
    </div>
    
    {activeSection === 'section10' && (
      <div style={sectionContentStyle}>
        <p style={{marginBottom: '1rem'}}>
          In SAP, la gestione della tesoreria è principalmente sotto il modulo FSCM (Financial Supply Chain Management), con una tesoreria avanzata per operazioni finanziarie complesse e una tesoreria base più collegata alla contabilità.
        </p>
        
        <h3 style={subSectionTitleStyle}>10.1 Funzionalità della Tesoreria Base</h3>
        <p style={{marginBottom: '1rem'}}>
          La tesoreria base si occupa delle attività quotidiane di:
        </p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            Pagamenti e incassi
            <p style={{marginTop: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
              Esempio: Ferrari gestisce incassi da concessionari esteri (es. 500.000€ da Ferrari North America) e pagamenti a fornitori di componentistica (es. 250.000€ a Brembo per pinze freno).
            </p>
          </li>
          <li style={listItemStyle}>
            Gestione effetti (ricevute bancarie)
            <p style={{marginTop: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
              Esempio: Barilla gestisce RiBa da clienti GDO con scadenze a 90 giorni, come un lotto da 300.000€ con Coop Italia.
            </p>
          </li>
          <li style={listItemStyle}>
            Importazione di estratti conto elettronici
            <p style={{marginTop: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
              Esempio: Generali Insurance importa estratti conto da Intesa Sanpaolo per riconciliare automaticamente incassi premi assicurativi.
            </p>
          </li>
          <li style={listItemStyle}>
            Reportistica di previsione finanziaria
            <p style={{marginTop: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
              Esempio: ENI utilizza report per prevedere flussi di cassa trimestrali, considerando incassi da vendita petrolio e pagamenti per attività estrattive.
            </p>
          </li>
        </ul>
              
        <h3 style={subSectionTitleStyle}>10.2 Struttura Bancaria</h3>
        <div style={{marginBottom: '1rem'}}>
          <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Banche esterne:</p>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              Anagrafiche delle banche dei fornitori e clienti
              <p style={{marginTop: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                Esempio: Luxottica registra banche di 42 paesi con dettagli completi per trasferimenti internazionali di occhiali.
              </p>
            </li>
            <li style={listItemStyle}>
              Includono paese, chiave banca (BIC/SWIFT), nome e città
              <p style={{marginTop: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                Esempio: Per un fornitore tedesco, si registra: BIC DEUTDEFF, Deutsche Bank, Francoforte, per acquisti di componentistica.
              </p>
            </li>
            <li style={listItemStyle}>
              SAP contiene un elenco precaricato di quasi tutte le piazze di pagamento italiane
              <p style={{marginTop: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                Esempio: Automaticamente presenti tutti i codici ABI/CAB di Intesa Sanpaolo, UniCredit e Banco BPM.
              </p>
            </li>
          </ul>
                
                <p style={{fontWeight: 'bold', marginBottom: '0.5rem', marginTop: '1rem'}}>Banche interne:</p>
                <ul style={listStyle}>
                  <li style={listItemStyle}>Conti correnti utilizzati dall'azienda per operazioni bancarie</li>
                  <li style={listItemStyle}>Collegate a conti contabili specifici</li>
                  <li style={listItemStyle}>Possono essere organizzate in gerarchie per reporting</li>
                </ul>
              </div>
              
              <h3 style={subSectionTitleStyle}>10.3 Condizioni e Metodi di Pagamento</h3>
        <div style={{marginBottom: '1rem'}}>
          <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Condizioni di pagamento:</p>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              Definiscono i termini di scadenza di un incasso o pagamento
              <p style={{marginTop: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                Esempio: Mapei applica condizioni 60 giorni fine mese per clienti edili, con possibilità di sconto del 2% per pagamento anticipato.
              </p>
            </li>
            <li style={listItemStyle}>
              Possono includere sconti per pagamenti anticipati o rateizzazioni
              <p style={{marginTop: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                Esempio: Piaggio offre rateizzazione in 3 tranche per forniture superiori a 100.000€ ai concessionari.
              </p>
            </li>
            <li style={listItemStyle}>
              La scadenza netta visualizzata nei documenti viene calcolata in base alla condizione
              <p style={{marginTop: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                Esempio: Per una fattura emessa il 15/03, con condizione 60gg fine mese, la scadenza risulterà il 30/05.
              </p>
            </li>
          </ul>
          
          <p style={{fontWeight: 'bold', marginBottom: '0.5rem', marginTop: '1rem'}}>Metodi di pagamento:</p>
          <ul style={listStyle}>
            <li style={listItemStyle}>
              Definiscono il mezzo di pagamento (bonifico, ricevuta bancaria, assegno)
              <p style={{marginTop: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                Esempio: Diesel Fashion Group utilizza prevalentemente bonifici SEPA per fornitori europei.
              </p>
            </li>
            <li style={listItemStyle}>
              Sono collegati ai conti contabili su cui effettuare le registrazioni
              <p style={{marginTop: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                Esempio: RiBa collegate al conto "Crediti commerciali Italia".
              </p>
            </li>
            <li style={listItemStyle}>
              Possono generare file telematici per le banche
              <p style={{marginTop: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                Esempio: Generazione file CBI per Intesa Sanpaolo con elenco bonifici mensili.
              </p>
            </li>
            <li style={listItemStyle}>
              Sono validi a livello di nazione e attivati per singola società
              <p style={{marginTop: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
                Esempio: Metodo RiBa attivo per società italiane del gruppo Zara.
              </p>
            </li>
          </ul>
        </div>
              
        <h3 style={subSectionTitleStyle}>10.4 Conti Transitori Banca</h3>
        <p style={{marginBottom: '1rem'}}>
          I conti transitori banca sono utilizzati per registrare i pagamenti quando l'azienda dà l'ordine alla banca, ma l'effettiva uscita di denaro non è ancora avvenuta:
        </p>
        <ul style={listStyle}>
          <li style={listItemStyle}>
            Permettono di chiudere la partita contabile del fornitore ("fornitore" in Dare, "banca in pagamento" in Avere)
            <p style={{marginTop: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
              Esempio: Pirelli chiude la partita con un fornitore di pneumatici da 250.000€ prima dell'effettivo trasferimento bancario.
            </p>
          </li>
          <li style={listItemStyle}>
            Quando la banca conferma il pagamento, si storna il conto transitorio e si movimenta il conto corrente effettivo
            <p style={{marginTop: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
              Esempio: Una volta confermato il bonifico da Intesa Sanpaolo, il sistema aggiorna il saldo del conto corrente.
            </p>
          </li>
          <li style={listItemStyle}>
            Sono utili con sistemi di tesoreria esterni integrati con SAP (come Piteco)
            <p style={{marginTop: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
              Esempio: Generali utilizza l'integrazione tra SAP e Piteco per monitorare i flussi di pagamento.
            </p>
          </li>
          <li style={listItemStyle}>
            Riflettono il flusso di cassa reale
            <p style={{marginTop: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
              Esempio: ENI traccia i movimenti finanziari reali dei pagamenti verso fornitori di attrezzature petrolifere.
            </p>
          </li>
        </ul>

              
        <h3 style={subSectionTitleStyle}>10.5 Strumenti Avanzati di Tesoreria</h3>
<div style={{marginBottom: '1rem'}}>
  <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Cash Flow Analyzer:</p>
  <p style={{marginBottom: '1rem'}}>
    Strumento potente che integra diverse fonti di informazione per analizzare e prevedere i flussi di cassa:
  </p>
  <ul style={listStyle}>
    <li style={listItemStyle}>
      Saldi bancari attuali
      <p style={{marginTop: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
        Esempio: Ferrari monitora istantaneamente i saldi dei conti in 15 paesi, totalizzando 8.5 milioni di euro.
      </p>
    </li>
    <li style={listItemStyle}>
      Scadenze clienti e fornitori
      <p style={{marginTop: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
        Esempio: Luxottica prevede incassi da 42 concessionari esteri per 3.2 milioni di euro nel trimestre.
      </p>
    </li>
    <li style={listItemStyle}>
      Ordini di acquisto e vendita
      <p style={{marginTop: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
        Esempio: Barilla traccia ordini in corso per 5.6 milioni di euro, con previsione di incasso a 60 giorni.
      </p>
    </li>
    <li style={listItemStyle}>
      Movimenti previsionali
      <p style={{marginTop: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
        Esempio: Unicredit stima pagamenti stipendi e contributi per 12 milioni di euro nel prossimo trimestre.
      </p>
    </li>
  </ul>
  <p style={{marginBottom: '1rem'}}>
    Permette analisi con diversi orizzonti temporali (giorni, settimane, mesi) e consente di verificare i dettagli di ogni importo aggregato.
  </p>
  
  <p style={{fontWeight: 'bold', marginBottom: '0.5rem', marginTop: '1rem'}}>Previsioni di liquidità:</p>
  <p style={{marginBottom: '1rem'}}>
    Proiezione dell'andamento della liquidità nei successivi 90 giorni, utilizzando gli stessi dati del Cash Flow Analyzer ma con visualizzazione orientata alla previsione.
    <p style={{marginTop: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
      Esempio: Moncler prevede che la liquidità di 4.3 milioni salirà a 5.7 milioni a fine maggio per incassi da collezione estiva, scendendo poi a 4.1 milioni a metà giugno per pagamenti fornitori.
    </p>
  </p>
  
  <p style={{fontWeight: 'bold', marginBottom: '0.5rem', marginTop: '1rem'}}>Movimenti previsionali:</p>
  <p style={{marginBottom: '1rem'}}>
    Sistema per inserire manualmente costi o ricavi attesi non derivanti da documenti esistenti:
  </p>
  <ul style={listStyle}>
    <li style={listItemStyle}>
      Stipendi
      <p style={{marginTop: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
        Esempio: Pirelli inserisce movimento previsionale stipendi di 3.5 milioni per personale dirigente e operativo.
      </p>
    </li>
    <li style={listItemStyle}>
      Pagamenti fiscali (F24)
      <p style={{marginTop: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
        Esempio: Generali prevede pagamento IVA trimestrale di 1.2 milioni di euro.
      </p>
    </li>
    <li style={listItemStyle}>
      Acquisti non ancora formalizzati con ordini
      <p style={{marginTop: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
        Esempio: Ferrari stima acquisto nuovi macchinari per reparto corse del valore di 750.000 euro.
      </p>
    </li>
    <li style={listItemStyle}>
      Altri costi/ricavi pianificati
      <p style={{marginTop: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
        Esempio: Luxottica prevede anticipo su commessa export di 2.3 milioni di euro.
      </p>
    </li>
  </ul>
</div>
              
<h3 style={subSectionTitleStyle}>10.6 Funzionalità per i Pagamenti Automatici</h3>
<p style={{marginBottom: '1rem'}}>
  La transazione F110 viene utilizzata per eseguire i pagamenti automatici ai fornitori. Il processo prevede diversi step:
</p>
<ol style={listStyle}>
  <li style={listItemStyle}>
    <span style={strongStyle}>Inserimento parametri</span>: criteri di selezione (società, fornitore, metodo di pagamento, data)
    <p style={{marginTop: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
      Esempio: Moncler seleziona tutti i fornitori di tessuti con scadenza entro il 30/04/2025, importo superiore a 5.000€.
    </p>
  </li>
  <li style={listItemStyle}>
    <span style={strongStyle}>Creazione proposta</span>: lista delle partite da pagare (non genera scritture contabili)
    <p style={{marginTop: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
      Esempio: Il sistema propone 42 fatture per un totale di 672.350€ da pagare a fornitori di filati e accessori.
    </p>
  </li>
  <li style={listItemStyle}>
    <span style={strongStyle}>Verifica ed eventuale modifica</span>: controllo e correzioni
    <p style={{marginTop: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
      Esempio: Il responsabile amministrativo esclude 2 fatture con importi non corrispondenti, riducendo il totale a 612.500€.
    </p>
  </li>
  <li style={listItemStyle}>
    <span style={strongStyle}>Esecuzione del pagamento</span>: scritture contabili e file per la banca
    <p style={{marginTop: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
      Esempio: Viene generato un file SEPA per Unicredit con i pagamenti e registrate le relative scritture contabili.
    </p>
  </li>
</ol>

<h3 style={subSectionTitleStyle}>10.7 Estratto Conto Elettronico</h3>
<p style={{marginBottom: '1rem'}}>
  L'estratto conto elettronico è una funzionalità che permette di importare file forniti dalla banca contenenti le operazioni bancarie:
</p>
<ul style={listStyle}>
  <li style={listItemStyle}>
    Automatizza la riconciliazione bancaria
    <p style={{marginTop: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
      Esempio: Lavazza importa estratti conto da Intesa, riconciliando automaticamente 350 movimenti mensili.
    </p>
  </li>
  <li style={listItemStyle}>
    Propone registrazioni contabili da verificare
    <p style={{marginTop: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
      Esempio: Il sistema suggerisce la registrazione di un bonifico da cliente estero di 95.000€ per vendita caffè.
    </p>
  </li>
  <li style={listItemStyle}>
    Richiede mapping tra causali bancarie e conti contabili
    <p style={{marginTop: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
      Esempio: Configura la causale "Incasso export" sul conto "Ricavi Internazionali".
    </p>
  </li>
  <li style={listItemStyle}>
    Funziona tramite import di file dal remote banking
    <p style={{marginTop: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
      Esempio: Importazione mensile di file MT940 da home banking di Unicredit.
    </p>
  </li>
</ul>
              
<ContentBox darkMode={darkMode}>
  <h4 style={{fontSize: `${fontSize + 1}px`, color: headingColor, marginBottom: '0.5rem'}}>App di Tesoreria in Fiori</h4>
  <p>SAP S/4HANA offre diverse app Fiori per la tesoreria:</p>
  <ul style={listStyle}>
    <li style={listItemStyle}>
      <span style={strongStyle}>Stato di Cassa Giornaliero</span>: analisi della posizione di cassa
      <p style={{marginTop: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
        Esempio: Ferrero visualizza saldo giornaliero di tutti i conti, con dettaglio movimenti in tempo reale.
      </p>
    </li>
    <li style={listItemStyle}>
      <span style={strongStyle}>Riepilogo Relazioni con la Banca</span>: cruscotto con pagamenti/incassi, banche attive, monitoraggio spese
      <p style={{marginTop: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
        Esempio: Generali Insurance monitora transazioni con 15 istituti bancari internazionali.
      </p>
    </li>
    <li style={listItemStyle}>
      <span style={strongStyle}>Flusso di Cassa Effettivo</span>: panoramica dei flussi nei 90 giorni antecedenti
      <p style={{marginTop: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
        Esempio: Luxottica analizza trend di incassi e pagamenti nei mercati europei ed extraeuropei.
      </p>
    </li>
    <li style={listItemStyle}>
      <span style={strongStyle}>Gerarchie Banche</span>: costruzione gerarchie per reporting (per nazione, società, istituto)
      <p style={{marginTop: '0.5rem', fontStyle: 'italic', fontSize: `${fontSize - 1}px`}}>
        Esempio: UniCredit classifica conti per macro-aree: Italia, Europa, Resto del Mondo.
      </p>
    </li>
  </ul>
</ContentBox>
            </div>
          )}
        </div>
      )}
      
      {/* Sezione 11: Cespiti */}
      {filteredSections.includes('section11') && (
        <div style={sectionStyle}>
          <div 
            style={sectionHeaderStyle}
            onClick={() => toggleSection('section11')}
          >
            <h2 style={sectionTitleStyle}>11. Gestione Cespiti</h2>
            <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section11' ? '▼' : '▶'}</span>
          </div>
          
          {activeSection === 'section11' && (
            <div style={sectionContentStyle}>
              <p style={{marginBottom: '1rem'}}>
                Il modulo cespiti (FI-AA - Asset Accounting) gestisce l'intero ciclo di vita dei beni ammortizzabili.
              </p>
              
              <h3 style={subSectionTitleStyle}>11.1 Processo Integrato di Gestione Cespiti</h3>
              <h4 style={{fontSize: `${fontSize + 1}px`, color: headingColor, marginBottom: '0.5rem'}}>Fase di acquisizione</h4>
              <ol style={listStyle}>
                <li style={listItemStyle}>Controlling: Creazione di una commessa di investimento per tracciare i costi</li>
                <li style={listItemStyle}>Acquisti: Gestione delle richieste d'acquisto e ordini</li>
                <li style={listItemStyle}>Logistica: Registrazione dell'entrata merce</li>
                <li style={listItemStyle}>Contabilità: Controllo e registrazione fatture</li>
                <li style={listItemStyle}>Cespiti: Creazione del cespite in costruzione e successiva capitalizzazione</li>
              </ol>
              
              <h4 style={{fontSize: `${fontSize + 1}px`, color: headingColor, marginBottom: '0.5rem'}}>Fase di gestione</h4>
              <ol style={listStyle}>
                <li style={listItemStyle}>Contabilizzazione: Registrazione nel libro cespiti</li>
                <li style={listItemStyle}>Ammortamenti: Calcolo e contabilizzazione degli ammortamenti periodici</li>
                <li style={listItemStyle}>Reporting: Produzione di report civilistici e fiscali</li>
                <li style={listItemStyle}>Analisi: Allocazione costi su centri di costo e oggetti di controllo</li>
              </ol>
              
              <h4 style={{fontSize: `${fontSize + 1}px`, color: headingColor, marginBottom: '0.5rem'}}>Fase di dismissione</h4>
              <ol style={listStyle}>
                <li style={listItemStyle}>Vendita/Rottamazione: Registrazione dell'uscita del bene</li>
                <li style={listItemStyle}>Calcolo plus/minusvalenze: Determinazione del risultato economico</li>
                <li style={listItemStyle}>Contabilizzazione: Registrazione finale in contabilità</li>
              </ol>
              
              <h3 style={subSectionTitleStyle}>11.2 Configurazione del Sistema Cespiti</h3>
              <div style={{marginBottom: '1rem'}}>
                <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Piano di valutazione:</p>
                <p style={{marginBottom: '1rem'}}>
                  Struttura di base che organizza le diverse tipologie di ammortamento. Tipicamente si configura un piano per nazione per rispettare i requisiti normativi locali.
                </p>
                
                <p style={{fontWeight: 'bold', marginBottom: '0.5rem', marginTop: '1rem'}}>Aree di valutazione:</p>
                <p style={{marginBottom: '1rem'}}>
                  All'interno del piano, le aree rappresentano diverse finalità di calcolo:
                </p>
                <ul style={listStyle}>
                  <li style={listItemStyle}><span style={strongStyle}>Area 01 (Civilistica)</span>: Registra ammortamenti secondo le regole del codice civile</li>
                  <li style={listItemStyle}><span style={strongStyle}>Area 02 (Fiscale)</span>: Calcola ammortamenti secondo regole fiscali (spesso con percentuali diverse)</li>
                  <li style={listItemStyle}><span style={strongStyle}>Area 03 (Differenze)</span>: Evidenzia differenze tra civilistico e fiscale per la gestione della fiscalità differita</li>
                  <li style={listItemStyle}><span style={strongStyle}>Area 20 (Gestionale)</span>: Per analisi interne, senza impatto contabile</li>
                </ul>
                
                <p style={{fontWeight: 'bold', marginBottom: '0.5rem', marginTop: '1rem'}}>Classi cespite:</p>
                <p style={{marginBottom: '1rem'}}>
                  Categorizzazioni che raggruppano beni simili e definiscono:
                </p>
                <ul style={listStyle}>
                  <li style={listItemStyle}>Conti contabili per automatizzare le registrazioni</li>
                  <li style={listItemStyle}>Regole di ammortamento predefinite</li>
                  <li style={listItemStyle}>Vita utile standard</li>
                  <li style={listItemStyle}>Formato di visualizzazione e campi rilevanti</li>
                  <li style={listItemStyle}>Numerazione automatica</li>
                </ul>
              </div>
              
              <h3 style={subSectionTitleStyle}>11.3 Anagrafica Cespiti</h3>
              <p style={{marginBottom: '1rem'}}>
                L'anagrafica di un cespite contiene numerose informazioni organizzate in blocchi:
              </p>
              <ul style={listStyle}>
                <li style={listItemStyle}>Dati generali: Descrizione, quantità, numero inventario</li>
                <li style={listItemStyle}>Informazioni di registrazione: Date di acquisizione, capitalizzazione</li>
                <li style={listItemStyle}>Dati temporali: Centro di costo, ubicazione fisica</li>
                <li style={listItemStyle}>Attribuzioni: Classificazioni aggiuntive per reporting</li>
                <li style={listItemStyle}>Dati di origine: Fornitore, produttore, riferimenti documenti</li>
                <li style={listItemStyle}>Valutazione: Parametri di ammortamento per ogni area</li>
                <li style={listItemStyle}>Valori: Costo storico, rivalutazioni, ammortamenti</li>
              </ul>
              
              <h3 style={subSectionTitleStyle}>11.4 Ammortamenti</h3>
              <p style={{marginBottom: '1rem'}}>
                Il sistema calcola automaticamente gli ammortamenti secondo le chiavi configurate:
              </p>
              <ul style={listStyle}>
                <li style={listItemStyle}>Ammortamento a quote costanti (percentuale fissa)</li>
                <li style={listItemStyle}>Ammortamento a quote decrescenti</li>
                <li style={listItemStyle}>Ammortamento per utilizzo</li>
                <li style={listItemStyle}>Altre metodologie specifiche</li>
              </ul>
              
              <p style={{marginBottom: '1rem'}}>
                La chiave di ammortamento è l'oggetto SAP che calcola l'ammortamento in base alle regole normative/gestionali.
              </p>
              
              <div style={{overflow: 'auto', marginBottom: '1.5rem'}}>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Tipo</th>
                      <th style={thStyle}>Descrizione</th>
                      <th style={thStyle}>Impatto</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={tdStyle}><strong>Simulazione</strong></td>
                      <td style={tdStyle}>Calcolo di prova</td>
                      <td style={tdStyle}>Nessun impatto contabile</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}><strong>Contabilizzazione</strong></td>
                      <td style={tdStyle}>Registrazione effettiva</td>
                      <td style={tdStyle}>Genera scritture contabili</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}><strong>Pianificazione</strong></td>
                      <td style={tdStyle}>Previsione futura</td>
                      <td style={tdStyle}>Per budget e planning</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h3 style={subSectionTitleStyle}>11.5 Cespiti in Costruzione</h3>
              <p style={{marginBottom: '1rem'}}>
                I cespiti in costruzione sono utilizzati per la raccolta dei costi di costruzione/realizzazione fino alla capitalizzazione:
              </p>
              <ul style={listStyle}>
                <li style={listItemStyle}>Non vengono ammortizzati finché non sono capitalizzati</li>
                <li style={listItemStyle}>Una volta completati, vengono trasferiti in un cespite definitivo</li>
                <li style={listItemStyle}>Possono raccogliere costi per lungo tempo prima della capitalizzazione</li>
              </ul>
              
              <h3 style={subSectionTitleStyle}>11.6 Reporting Cespiti</h3>
              <p style={{marginBottom: '1rem'}}>
                SAP offre vari report per esigenze diverse:
              </p>
              <ul style={listStyle}>
                <li style={listItemStyle}><span style={strongStyle}>Libro cespiti</span>: Elenco analitico dei beni</li>
                <li style={listItemStyle}><span style={strongStyle}>Liste ammortamenti</span>: Dettaglio degli ammortamenti calcolati</li>
                <li style={listItemStyle}><span style={strongStyle}>Confronto aree</span>: Analisi delle differenze tra civilistico e fiscale</li>
                <li style={listItemStyle}><span style={strongStyle}>Registro beni ammortizzabili</span>: Report fiscale obbligatorio</li>
                <li style={listItemStyle}><span style={strongStyle}>Movimenti cespite</span>: Storico delle transazioni per ogni bene</li>
              </ul>
              
              <div style={tipBoxStyle}>
                <strong>Suggerimento:</strong> Per le aziende italiane, il Registro dei Beni Ammortizzabili è un report fiscale obbligatorio che evidenzia tutti i beni materiali e immateriali, valori, anni di formazione e regole di ammortamento. SAP offre un report standard che può essere adattato alle esigenze specifiche.
              </div>
            </div>
          )}
        </div>
      )}
      
      {/* Sezione 12: Agenti e Provvigioni */}
      {filteredSections.includes('section12') && (
        <div style={sectionStyle}>
          <div 
            style={sectionHeaderStyle}
            onClick={() => toggleSection('section12')}
          >
            <h2 style={sectionTitleStyle}>12. Agenti e Provvigioni</h2>
            <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section12' ? '▼' : '▶'}</span>
          </div>
          
          {activeSection === 'section12' && (
            <div style={sectionContentStyle}>
              <p style={{marginBottom: '1rem'}}>
                Le società commerciali spesso utilizzano una rete di agenti o rappresentanti per vendere i propri prodotti. SAP offre soluzioni per gestire questo importante aspetto.
              </p>
              
              <h3 style={subSectionTitleStyle}>12.1 Gestione Agenti</h3>
              <p style={{marginBottom: '1rem'}}>
                Inizialmente, SAP non offriva funzionalità sofisticate per il calcolo delle provvigioni, limitandosi a statistiche di vendita di base. Diverse società di consulenza, tra cui Horsa, hanno sviluppato soluzioni integrate come "Agenti+" per gestire le provvigioni.
              </p>
              
              <h3 style={subSectionTitleStyle}>12.2 Tipologie di Provvigioni</h3>
              <div style={{marginBottom: '1rem'}}>
                <ul style={listStyle}>
                  <li style={listItemStyle}><span style={strongStyle}>Sull'ordinato</span>: basata sugli ordini piazzati (rischiosa per l'azienda)</li>
                  <li style={listItemStyle}><span style={strongStyle}>Sul fatturato</span>: basata sulle fatture emesse</li>
                  <li style={listItemStyle}><span style={strongStyle}>Sull'incassato</span>: legata all'effettivo pagamento del cliente (meno rischiosa)</li>
                </ul>
              </div>
              
              <h3 style={subSectionTitleStyle}>12.3 Aspetti Fiscali e Contabili</h3>
              <div style={{marginBottom: '1rem'}}>
                <ul style={listStyle}>
                  <li style={listItemStyle}>L'agente è generalmente un soggetto con partita IVA</li>
                  <li style={listItemStyle}>La fattura dell'agente è soggetta a ritenuta d'acconto</li>
                  <li style={listItemStyle}>L'azienda opera come sostituto d'imposta</li>
                  <li style={listItemStyle}>L'aliquota varia a seconda che l'agente operi con/senza collaboratori</li>
                </ul>
              </div>
              
              <h3 style={subSectionTitleStyle}>12.4 FIRR e Altri Adempimenti</h3>
              <div style={{marginBottom: '1rem'}}>
                <p style={{marginBottom: '1rem'}}>
                  Oltre alla provvigione, l'azienda gestisce:
                </p>
                <ul style={listStyle}>
                  <li style={listItemStyle}><span style={strongStyle}>FIRR</span> (Fondo Indennità Risoluzione Rapporto): una sorta di TFR per gli agenti</li>
                  <li style={listItemStyle}><span style={strongStyle}>Enasarco</span>: contributi previdenziali</li>
                  <li style={listItemStyle}><span style={strongStyle}>Indennità suppletiva clientela</span>: indennità aggiuntiva in caso di cessazione del rapporto</li>
                </ul>
              </div>
              
              <h3 style={subSectionTitleStyle}>12.5 Configurazione in SAP</h3>
              <div style={{marginBottom: '1rem'}}>
                <ul style={listStyle}>
                  <li style={listItemStyle}>Gli agenti vengono codificati come fornitori (business partner con ruolo fornitore)</li>
                  <li style={listItemStyle}>Nel modulo agenti vengono gestite informazioni aggiuntive specifiche:
                    <ul style={{paddingLeft: '2rem'}}>
                      <li style={listItemStyle}>Data inizio/fine contratto</li>
                      <li style={listItemStyle}>Mono/plurimandatario</li>
                      <li style={listItemStyle}>Tipologia di collaboratore</li>
                    </ul>
                  </li>
                </ul>
              </div>
              
              <h3 style={subSectionTitleStyle}>12.6 Processo di Liquidazione Provvigioni</h3>
              <div style={{marginBottom: '1rem'}}>
                <ol style={listStyle}>
                  <li style={listItemStyle}>A fine mese, calcolo delle provvigioni maturate</li>
                  <li style={listItemStyle}>Emissione di una prefattura all'agente</li>
                  <li style={listItemStyle}>Verifica da parte dell'agente</li>
                  <li style={listItemStyle}>Emissione della fattura definitiva da parte dell'agente</li>
                  <li style={listItemStyle}>Pagamento tramite le procedure di pagamento automatico di SAP</li>
                </ol>
              </div>
              
              <h3 style={subSectionTitleStyle}>12.7 Reportistica</h3>
              <div style={{marginBottom: '1rem'}}>
                <p style={{marginBottom: '1rem'}}>
                  I principali report disponibili:
                </p>
                <ul style={listStyle}>
                  <li style={listItemStyle}><span style={strongStyle}>Estratto conto provvigioni</span>: riepilogo delle provvigioni maturate e liquidabili</li>
                  <li style={listItemStyle}><span style={strongStyle}>Analisi vendite per agente</span>: performance di vendita</li>
                  <li style={listItemStyle}><span style={strongStyle}>Riepilogo adempimenti fiscali</span>: contributi e ritenute</li>
                </ul>
              </div>
              
              <ContentBox darkMode={darkMode}>
                <h4 style={{fontSize: `${fontSize + 1}px`, color: headingColor, marginBottom: '0.5rem'}}>PV maturate vs PV liquidabili</h4>
                <p>Nel processo Agenti+, si distingue tra:</p>
                <ul style={listStyle}>
                  <li style={listItemStyle}><span style={strongStyle}>PV maturate</span>: Le provvigioni maturate in base al fatturato</li>
                  <li style={listItemStyle}><span style={strongStyle}>PV liquidabili</span>: Le provvigioni che possono essere pagate all'agente dopo la verifica degli incassi (nel caso di provvigioni sull'incassato)</li>
                </ul>
                <p>Questa distinzione è fondamentale per la corretta gestione del processo e la reportistica.</p>
              </ContentBox>
            </div>
          )}
        </div>
      )}

      {/* Sezione 13: Transazioni SAP Comuni */}
      {filteredSections.includes('section13') && (
        <div style={sectionStyle}>
          <div 
            style={sectionHeaderStyle}
            onClick={() => toggleSection('section13')}
          >
            <h2 style={sectionTitleStyle}>13. Transazioni SAP Comuni</h2>
            <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section13' ? '▼' : '▶'}</span>
          </div>
          
          {activeSection === 'section13' && (
            <div style={sectionContentStyle}>
              <p style={{marginBottom: '1rem'}}>
                Le transazioni sono comandi che vengono eseguiti nel sistema SAP per avviare specifiche funzionalità. Possono essere lanciate inserendo il codice della transazione o navigando attraverso il menu.
              </p>
              
              <h3 style={subSectionTitleStyle}>13.1 Transazioni Contabilità Generale</h3>
              <div style={{overflow: 'auto', marginBottom: '1.5rem'}}>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Transazione</th>
                      <th style={thStyle}>Descrizione</th>
                      <th style={thStyle}>Uso</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={tdStyle}><strong>FB50</strong></td>
                      <td style={tdStyle}>Registrazione prima nota</td>
                      <td style={tdStyle}>Registrazione manuale documenti contabili</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}><strong>FB03</strong></td>
                      <td style={tdStyle}>Visualizzazione documenti contabili</td>
                      <td style={tdStyle}>Consultazione movimenti contabili</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}><strong>FS10N</strong></td>
                      <td style={tdStyle}>Bilancino di verifica</td>
                      <td style={tdStyle}>Report saldi e movimenti per conto</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}><strong>F.01</strong></td>
                      <td style={tdStyle}>Libro giornale</td>
                      <td style={tdStyle}>Visualizzazione in ordine cronologico</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}><strong>FS00</strong></td>
                      <td style={tdStyle}>Creazione conto Co.Ge.</td>
                      <td style={tdStyle}>Anagrafica conti contabili</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}><strong>FAGL_FC_VAL</strong></td>
                      <td style={tdStyle}>Chiusura di periodo</td>
                      <td style={tdStyle}>Processo di chiusura contabile</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h3 style={subSectionTitleStyle}>13.2 Transazioni Contabilità Clienti/Fornitori</h3>
              <div style={{overflow: 'auto', marginBottom: '1.5rem'}}>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Transazione</th>
                      <th style={thStyle}>Descrizione</th>
                      <th style={thStyle}>Uso</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={tdStyle}><strong>FBL5N</strong></td>
                      <td style={tdStyle}>Partitario clienti</td>
                      <td style={tdStyle}>Lista partite aperte/pareggiate clienti</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}><strong>FBL1N</strong></td>
                      <td style={tdStyle}>Partitario fornitori</td>
                      <td style={tdStyle}>Lista partite aperte/pareggiate fornitori</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}><strong>F-44</strong></td>
                      <td style={tdStyle}>Immissione solleciti</td>
                      <td style={tdStyle}>Gestione procedure sollecito</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}><strong>F-32</strong></td>
                      <td style={tdStyle}>Storni e altri tipi di ripresa</td>
                      <td style={tdStyle}>Gestione partite e compensazioni</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}><strong>F-28</strong></td>
                      <td style={tdStyle}>Evidenza partite</td>
                      <td style={tdStyle}>Selezione partite aperte</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h3 style={subSectionTitleStyle}>13.3 Transazioni Tesoreria e Pagamenti</h3>
              <div style={{overflow: 'auto', marginBottom: '1.5rem'}}>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Transazione</th>
                      <th style={thStyle}>Descrizione</th>
                      <th style={thStyle}>Uso</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={tdStyle}><strong>F110</strong></td>
                      <td style={tdStyle}>Pagamenti automatici</td>
                      <td style={tdStyle}>Elaborazione proposte pagamento</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}><strong>FBZP</strong></td>
                      <td style={tdStyle}>Modificare metodi di pagamento</td>
                      <td style={tdStyle}>Configurazione metodi di pagamento</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}><strong>OBB8</strong></td>
                      <td style={tdStyle}>Condizioni di pagamento</td>
                      <td style={tdStyle}>Definizione termini di pagamento</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}><strong>FF67</strong></td>
                      <td style={tdStyle}>Elaborazione estratto conto</td>
                      <td style={tdStyle}>Importazione movimenti bancari</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}><strong>F-54</strong></td>
                      <td style={tdStyle}>Blocchi al pagamento</td>
                      <td style={tdStyle}>Gestione blocchi e sblocchi</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h3 style={subSectionTitleStyle}>13.4 Transazioni Cespiti</h3>
              <div style={{overflow: 'auto', marginBottom: '1.5rem'}}>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Transazione</th>
                      <th style={thStyle}>Descrizione</th>
                      <th style={thStyle}>Uso</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={tdStyle}><strong>AS01</strong></td>
                      <td style={tdStyle}>Creazione cespite</td>
                      <td style={tdStyle}>Anagrafica nuovo cespite</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}><strong>AS02</strong></td>
                      <td style={tdStyle}>Modifica cespite</td>
                      <td style={tdStyle}>Aggiornamento dati cespite</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}><strong>AS03</strong></td>
                      <td style={tdStyle}>Visualizzazione cespite</td>
                      <td style={tdStyle}>Consultazione anagrafica cespiti</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}><strong>ABAVN</strong></td>
                      <td style={tdStyle}>Ammortamenti</td>
                      <td style={tdStyle}>Calcolo e registrazione ammortamenti</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}><strong>AW01N</strong></td>
                      <td style={tdStyle}>Registrazione acquisizione</td>
                      <td style={tdStyle}>Acquisto nuovo cespite</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}><strong>ABST</strong></td>
                      <td style={tdStyle}>Libro cespiti</td>
                      <td style={tdStyle}>Report analitico dei beni</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}><strong>AUN1</strong></td>
                      <td style={tdStyle}>Dismissione cespite</td>
                      <td style={tdStyle}>Cessione o dismissione</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h3 style={subSectionTitleStyle}>13.5 Transazioni IVA e Fiscali</h3>
              <div style={{overflow: 'auto', marginBottom: '1.5rem'}}>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Transazione</th>
                      <th style={thStyle}>Descrizione</th>
                      <th style={thStyle}>Uso</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={tdStyle}><strong>F.16</strong></td>
                      <td style={tdStyle}>Registri IVA</td>
                      <td style={tdStyle}>Report IVA acquisti/vendite</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}><strong>F.17</strong></td>
                      <td style={tdStyle}>Dichiarazione periodica IVA</td>
                      <td style={tdStyle}>Liquidazione IVA periodica</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}><strong>OBCL</strong></td>
                      <td style={tdStyle}>Definizione classi contabili</td>
                      <td style={tdStyle}>Configurazione calcolo imposte</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}><strong>J1ID</strong></td>
                      <td style={tdStyle}>Dichiarazioni d'intento</td>
                      <td style={tdStyle}>Gestione dichiarazioni esportatori</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <h3 style={subSectionTitleStyle}>13.6 Transazioni di Configurazione</h3>
              <div style={{overflow: 'auto', marginBottom: '1.5rem'}}>
                <table style={tableStyle}>
                  <thead>
                    <tr>
                      <th style={thStyle}>Transazione</th>
                      <th style={thStyle}>Descrizione</th>
                      <th style={thStyle}>Uso</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td style={tdStyle}><strong>SPRO</strong></td>
                      <td style={tdStyle}>Customizing SAP</td>
                      <td style={tdStyle}>Configurazione generale del sistema</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}><strong>OB29</strong></td>
                      <td style={tdStyle}>Periodi contabili</td>
                      <td style={tdStyle}>Definizione varianti periodi</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}><strong>OBA7</strong></td>
                      <td style={tdStyle}>Varianti di esercizio</td>
                      <td style={tdStyle}>Configurazione anno fiscale</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}><strong>OBD4</strong></td>
                      <td style={tdStyle}>Definizione società</td>
                      <td style={tdStyle}>Configurazione dati società</td>
                    </tr>
                    <tr>
                      <td style={tdStyle}><strong>SU01</strong></td>
                      <td style={tdStyle}>Gestione utenti</td>
                      <td style={tdStyle}>Manutenzione utenti e autorizzazioni</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              
              <div style={noteBoxStyle}>
                <strong>Nota sulle transazioni:</strong> In SAP, gli utenti spesso memorizzano le transazioni utilizzate più frequentemente, semplificando la navigazione nel sistema. È possibile anche creare transazioni personalizzate con codici che iniziano con "Y" o "Z".
              </div>
              
              <ContentBox darkMode={darkMode}>
                <h4 style={{fontSize: `${fontSize + 1}px`, color: headingColor, marginBottom: '0.5rem'}}>Scorciatoie utili in SAP GUI</h4>
                <ul style={listStyle}>
                  <li style={listItemStyle}><span style={strongStyle}>Ctrl+/</span>: Apre il campo per inserire direttamente il codice transazione</li>
                  <li style={listItemStyle}><span style={strongStyle}>F1</span>: Aiuto contestuale</li>
                  <li style={listItemStyle}><span style={strongStyle}>F3</span>: Torna indietro</li>
                  <li style={listItemStyle}><span style={strongStyle}>F8</span>: Esegue (equivalente al pulsante di esecuzione)</li>
                  <li style={listItemStyle}><span style={strongStyle}>Ctrl+F7</span>: Operazioni su selezioni (area dati)</li>
                  <li style={listItemStyle}><span style={strongStyle}>Ctrl+S</span>: Salva</li>
                </ul>
                <p style={{marginTop: '0.5rem'}}>L'utilizzo efficiente di queste scorciatoie può incrementare notevolmente la produttività quando si lavora con SAP.</p>
              </ContentBox>
            </div>
          )}
        </div>
      )}
      
      {/* Sezione: Business Partner in S/4HANA */}
      <div style={sectionStyle}>
        <div 
          style={sectionHeaderStyle}
          onClick={() => toggleSection('sectionBusinessPartner')}
        >
          <h2 style={sectionTitleStyle}>Business Partner in S/4HANA</h2>
          <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'sectionBusinessPartner' ? '▼' : '▶'}</span>
        </div>
        
        {activeSection === 'sectionBusinessPartner' && (
          <div style={sectionContentStyle}>
            <h3 style={subSectionTitleStyle}>Concetto Unificato</h3>
            <p>Nelle versioni precedenti di SAP, le anagrafiche clienti e fornitori erano completamente separate. Con S/4HANA, il concetto di Business Partner unifica queste entità, permettendo una gestione centralizzata delle informazioni.</p>
            
            <h3 style={subSectionTitleStyle}>Struttura e Ruoli</h3>
            <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Organizzazione dei dati:</p>
            <ul style={listStyle}>
              <li style={listItemStyle}>Dati generali comuni a tutti i ruoli (nome, ragione sociale, partita IVA, indirizzi)</li>
              <li style={listItemStyle}>Dati specifici per ruolo:
                <ul style={listStyle}>
                  <li style={listItemStyle}>Cliente dati società (conto riconciliazione, condizioni pagamento)</li>
                  <li style={listItemStyle}>Cliente dati vendite (canale distribuzione, condizioni spedizione)</li>
                  <li style={listItemStyle}>Fornitore dati società (conto riconciliazione, ritenuta d'acconto)</li>
                  <li style={listItemStyle}>Fornitore dati acquisti (organizzazione acquisti, valuta ordine)</li>
                </ul>
              </li>
            </ul>

            <h3 style={subSectionTitleStyle}>Vantaggi</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Eliminazione di duplicazioni per soggetti che sono sia clienti che fornitori</li>
              <li style={listItemStyle}>Gestione coerente dei dati comuni (indirizzi, contatti, dati fiscali)</li>
              <li style={listItemStyle}>Possibilità di aggiungere ruoli progressivamente in base alle necessità</li>
              <li style={listItemStyle}>Miglior controllo dell'esposizione complessiva verso soggetti terzi</li>
            </ul>

            <h3 style={subSectionTitleStyle}>Configurazione</h3>
            <p>La configurazione del Business Partner riguarda la definizione dei ruoli, i relativi campi obbligatori/facoltativi e il legame con raggruppamenti, range di numerazione e gruppi conti clienti o fornitori.</p>
          </div>
        )}
      </div>

      {/* Sezione: ACDOCA - Universal Journal */}
      <div style={sectionStyle}>
        <div 
          style={sectionHeaderStyle}
          onClick={() => toggleSection('sectionACDOCA')}
        >
          <h2 style={sectionTitleStyle}>ACDOCA - Universal Journal</h2>
          <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'sectionACDOCA' ? '▼' : '▶'}</span>
        </div>
        
        {activeSection === 'sectionACDOCA' && (
          <div style={sectionContentStyle}>
            <h3 style={subSectionTitleStyle}>Centralizzazione dei Dati Contabili</h3>
            <p>Una differenza tecnica significativa tra SAP ECC e S/4HANA riguarda la gestione dei dati contabili. In S/4HANA, è presente una singola tabella semplificata chiamata ACDOCA (Universal Journal) che centralizza tutte le informazioni contabili precedentemente distribuite su numerose tabelle.</p>
            
            <h3 style={subSectionTitleStyle}>Aree Integrate</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Contabilità generale (FI)</li>
              <li style={listItemStyle}>Controllo di gestione e profitability management (CO)</li>
              <li style={listItemStyle}>Contabilità cespiti (Asset Accounting)</li>
              <li style={listItemStyle}>Valorizzazione del materiale (Material Costing)</li>
            </ul>

            <h3 style={subSectionTitleStyle}>Vantaggi</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Eliminazione delle discrepanze tra contabilità civilistica e gestionale</li>
              <li style={listItemStyle}>Coerenza garantita tra diverse viste contabili</li>
              <li style={listItemStyle}>Reporting integrato e in tempo reale</li>
              <li style={listItemStyle}>Analisi multidimensionali più potenti (es. conto economico per cliente)</li>
              <li style={listItemStyle}>Semplificazione della struttura del database e migliori performance</li>
            </ul>

            <h3 style={subSectionTitleStyle}>Implicazioni Operative</h3>
            <p>Chi crea un conto contabile di costo deve specificare esplicitamente se è rilevante anche per il controllo di gestione, garantendo la corretta integrazione tra le diverse aree.</p>
          </div>
        )}
      </div>

      {/* Sezione: Tipologie di Conti Economici */}
      <div style={sectionStyle}>
        <div 
          style={sectionHeaderStyle}
          onClick={() => toggleSection('sectionTipiConti')}
        >
          <h2 style={sectionTitleStyle}>Tipologie di Conti Economici</h2>
          <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'sectionTipiConti' ? '▼' : '▶'}</span>
        </div>
        
        {activeSection === 'sectionTipiConti' && (
          <div style={sectionContentStyle}>
            <h3 style={subSectionTitleStyle}>Classificazione per Controllo di Gestione</h3>
            <p>Per i conti economici, è necessario specificare la rilevanza per il controllo di gestione attraverso specifiche tipologie:</p>
            
            <ul style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>Conto economico non rilevante (tipo N)</span>
                <ul style={listStyle}>
                  <li style={listItemStyle}>Conti necessari per la contabilità generale ma non per il controllo di gestione</li>
                  <li style={listItemStyle}>Non richiedono informazioni aggiuntive in fase di registrazione</li>
                  <li style={listItemStyle}>Esempio: imposte, interessi bancari</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Costi primari e ricavi (tipo P)</span>
                <ul style={listStyle}>
                  <li style={listItemStyle}>Conti rilevanti per il controllo di gestione</li>
                  <li style={listItemStyle}>Richiedono oggetti di imputazione (centro di costo, ordine interno, WBS, ecc.)</li>
                  <li style={listItemStyle}>Registrati direttamente verso l'esterno</li>
                  <li style={listItemStyle}>Esempio: costi di consulenza, materiali, stipendi</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Costi secondari (tipo S)</span>
                <ul style={listStyle}>
                  <li style={listItemStyle}>Utilizzati unicamente all'interno del controllo di gestione</li>
                  <li style={listItemStyle}>Servono per calcoli interni e allocazioni</li>
                  <li style={listItemStyle}>Non utilizzati per registrazioni dirette verso l'esterno</li>
                  <li style={listItemStyle}>Esempio: ribaltamento costi, allocazioni interne</li>
                </ul>
              </li>
            </ul>

            <h3 style={subSectionTitleStyle}>Ripartizione dei Costi</h3>
            <p>Un esempio tipico di utilizzo dei conti di tipo S è la ripartizione della fattura dell'energia elettrica, inizialmente registrata su un centro di costo primario e successivamente distribuita su diversi centri di costo attraverso procedure automatizzate basate su regole predefinite.</p>
          </div>
        )}
      </div>

      {/* Sezione: Gestione degli Effetti Attivi (RIBA) */}
      <div style={sectionStyle}>
        <div 
          style={sectionHeaderStyle}
          onClick={() => toggleSection('sectionRIBA')}
        >
          <h2 style={sectionTitleStyle}>Gestione degli Effetti Attivi (RI.BA.)</h2>
          <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'sectionRIBA' ? '▼' : '▶'}</span>
        </div>
        
        {activeSection === 'sectionRIBA' && (
          <div style={sectionContentStyle}>
            <h3 style={subSectionTitleStyle}>Ricevute Bancarie in SAP</h3>
            <p>SAP gestisce il processo completo delle ricevute bancarie (RI.BA.), una specificità italiana e spagnola. A differenza di sistemi non SAP, dove la creazione di una RI.BA. chiude semplicemente la partita del cliente, in SAP il processo è più articolato per mantenere il dettaglio informativo fino alla scadenza.</p>
            
            <h3 style={subSectionTitleStyle}>Processo Completo</h3>
            <ol style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>Emissione RI.BA.</span>
                <ul style={listStyle}>
                  <li style={listItemStyle}>Riclassificazione del credito da "crediti verso clienti" a "portafoglio effetti attivi"</li>
                  <li style={listItemStyle}>Utilizzo di un mastro speciale (es. codice W) per la gestione contabile</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Presentazione alla banca</span>
                <ul style={listStyle}>
                  <li style={listItemStyle}>Movimentazione contabile provvisoria</li>
                  <li style={listItemStyle}>Generazione del file per l'invio alla banca</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Gestione scadenza</span>
                <ul style={listStyle}>
                  <li style={listItemStyle}>Procedura massiva di aggiornamento/maturazione/scadenza effetti</li>
                  <li style={listItemStyle}>Registrazione dell'incasso o dell'insoluto</li>
                  <li style={listItemStyle}>In caso di insoluto, riapertura della posizione del cliente</li>
                </ul>
              </li>
            </ol>

            <h3 style={subSectionTitleStyle}>Vantaggi</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Tracciabilità completa del ciclo di vita dell'effetto</li>
              <li style={listItemStyle}>Mantenimento del dettaglio informativo sul cliente</li>
              <li style={listItemStyle}>Gestione automatizzata delle scadenze</li>
              <li style={listItemStyle}>Reportistica dettagliata sugli effetti</li>
            </ul>

            <h3 style={subSectionTitleStyle}>Customizing</h3>
            <p>La configurazione per la gestione degli effetti attivi rientra nel customizing dei pagamenti ed è una componente importante nei progetti SAP in Italia.</p>
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
        <p>© {new Date().getFullYear()} SAP ERP Documentation - Modulo Finance (FI)</p>
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
    'Caratteristiche',
    'Moduli',
    'Struttura',
    'Localizzazioni',
    'Piano Conti',
    'Contabilità',
    'Gestione IVA',
    'Business Partner',
    'Conti Cl/Fo',
    'Agenti/Tesoreria'
  ];
  return titles[index-1] || `Sezione ${index}`;
}

export default FIDocumentationPage;