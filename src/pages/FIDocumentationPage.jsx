// src/pages/FIDocumentationPage.jsx
import React, { useState, useEffect } from 'react';

const FIDocumentationPage = () => {
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
              <li style={listItemStyle}><span style={strongStyle}>Maggiore capacità di calcolo</span>: velocità di accesso ai dati moltiplicata per 2 ordini di grandezza</li>
              <li style={listItemStyle}><span style={strongStyle}>Accesso ai dati In-Memory</span>: elaborazione dati nella memoria principale anziché su disco</li>
              <li style={listItemStyle}><span style={strongStyle}>Database colonnare</span>: struttura semplificata rispetto ai database tradizionali</li>
              <li style={listItemStyle}><span style={strongStyle}>Gestione efficiente di Big Data</span>: capacità di elaborare grandi volumi di dati</li>
              <li style={listItemStyle}><span style={strongStyle}>Real-Time Embedded Analytics</span>: analisi dei dati in tempo reale</li>
              <li style={listItemStyle}><span style={strongStyle}>Interfaccia SAP Fiori</span>: accesso via web con interfaccia moderna e intuitiva</li>
              <li style={listItemStyle}><span style={strongStyle}>Accesso mobile</span>: utilizzo da dispositivi mobili</li>
              <li style={listItemStyle}><span style={strongStyle}>Deployment flessibile</span>: disponibile in cloud e on-premise</li>
            </ul>
            
            <h3 style={subSectionTitleStyle}>ACDOCA: Universal Journal</h3>
            <p style={{marginBottom: '1rem'}}>
              Il concetto di Universal Journal (tabella ACDOCA) rappresenta una delle innovazioni più importanti:
            </p>
            <ul style={listStyle}>
              <li style={listItemStyle}>Tutti i flussi di valore sono memorizzati in un'unica fonte</li>
              <li style={listItemStyle}>Elimina la necessità di riconciliazione dei dati</li>
              <li style={listItemStyle}>Supporta contabilità multidimensionale</li>
              <li style={listItemStyle}>Permette l'utilizzo di ledger paralleli per diverse normative contabili</li>
              <li style={listItemStyle}>Consente di definire campi addizionali personalizzati</li>
              <li style={listItemStyle}>Supporta fino a 999.999 righe per documento</li>
              <li style={listItemStyle}>Unifica la gestione delle valute</li>
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
              <li style={listItemStyle}><span style={strongStyle}>FI (Finance)</span>: Contabilità generale, clienti e fornitori</li>
              <li style={listItemStyle}><span style={strongStyle}>TR (Treasury)</span>: Tesoreria</li>
              <li style={listItemStyle}><span style={strongStyle}>AA (Asset Accounting)</span>: Gestione cespiti e investimenti</li>
              <li style={listItemStyle}><span style={strongStyle}>FSCM (Financial Supply Chain Management)</span>: Controllo credito, controversie, gestione incassi</li>
              <li style={listItemStyle}><span style={strongStyle}>AGENTI+</span>: Gestione agenti (add-on HORSA)</li>
              <li style={listItemStyle}><span style={strongStyle}>VIM (Vendor Invoice Management)</span>: Automazione registrazione fatture fornitori</li>
            </ul>
            
            <h3 style={subSectionTitleStyle}>Altri Moduli Collegati</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>CO (Controlling)</span>: Controllo di gestione</li>
              <li style={listItemStyle}><span style={strongStyle}>PS (Project System)</span>: Pianificazione progetti</li>
              <li style={listItemStyle}><span style={strongStyle}>SD (Sales and Distribution)</span>: Vendite e distribuzione</li>
              <li style={listItemStyle}><span style={strongStyle}>MM (Material Management)</span>: Magazzino e acquisti</li>
              <li style={listItemStyle}><span style={strongStyle}>WM (Warehouse Management)</span>: Gestione magazzino fisico</li>
              <li style={listItemStyle}><span style={strongStyle}>PM (Plant Management)</span>: Manutenzione impianti</li>
              <li style={listItemStyle}><span style={strongStyle}>HCM (Human Capital Management)</span>: Gestione personale</li>
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
              <li style={listItemStyle}><span style={strongStyle}>Mandante</span>: Livello più alto della gerarchia, contiene le società</li>
              <li style={listItemStyle}><span style={strongStyle}>Società</span>: Unità civilistica/fiscale di base per la contabilità, redige il bilancio e gestisce adempimenti</li>
              <li style={listItemStyle}><span style={strongStyle}>Business Area</span>: Divisioni dell'azienda per reporting specifico</li>
              <li style={listItemStyle}><span style={strongStyle}>Controlling Area</span>: Area per la gestione del controllo di gestione</li>
              <li style={listItemStyle}><span style={strongStyle}>Piano dei conti</span>: Struttura contabile per la registrazione delle transazioni</li>
            </ul>
            
            <h3 style={subSectionTitleStyle}>Ledger e Principi Contabili</h3>
            <p style={{marginBottom: '1rem'}}>
              SAP S/4 HANA consente di gestire più ledger (partizioni del database per registrazioni contabili):
            </p>
            <ul style={listStyle}>
              <li style={listItemStyle}>Permettono di produrre bilanci secondo diversi principi contabili</li>
              <li style={listItemStyle}>Consentono la gestione parallela di registrazioni contabili (es. bilancio locale e bilancio per capogruppo)</li>
              <li style={listItemStyle}>Supportano l'integrazione tra dati contabili e gestionali</li>
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
              <li style={listItemStyle}><span style={strongStyle}>Per l'Italia</span>: gestione IVA, split payment, liquidazione periodica, dichiarazioni fiscali</li>
              <li style={listItemStyle}>Schema imposte paese specifico per ciascuna nazione</li>
              <li style={listItemStyle}>Supporto per adempimenti locali e reporting normativo</li>
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
              <li style={listItemStyle}><span style={strongStyle}>Piano dei conti operativo</span>: Utilizzato da tutte le società per le registrazioni contabili</li>
              <li style={listItemStyle}><span style={strongStyle}>Piano dei conti locale</span>: Legato a specifiche società per esigenze normative locali</li>
              <li style={listItemStyle}><span style={strongStyle}>Piano dei conti gruppo</span>: Per riclassificare i conti in base alle esigenze del bilancio consolidato</li>
            </ul>
            <p style={{marginBottom: '1rem'}}>
              L'anagrafica del conto contabile in S/4 HANA integra sia informazioni civilistiche che gestionali grazie alla nuova architettura ACDOCA.
            </p>
            
            <h3 style={subSectionTitleStyle}>Gruppo Conti e Gruppo Stato Campo</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>Gruppo conti</span>: Classifica i conti contabili in gruppi omogenei, controlla il range di numerazione</li>
              <li style={listItemStyle}><span style={strongStyle}>Gruppo stato campo</span>: Definisce i campi obbligatori/facoltativi/nascosti durante la registrazione</li>
            </ul>
            
            <h3 style={subSectionTitleStyle}>Conti Civilistici e Gestionali</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>Conti civilistici</span>: Rappresentano movimenti con terze parti (clienti, fornitori, banche, stato)</li>
              <li style={listItemStyle}><span style={strongStyle}>Conti gestionali</span>: Rappresentano movimenti interni (materie prime, processo produttivo)</li>
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
              <li style={listItemStyle}><span style={strongStyle}>Registrazioni di prima nota</span>: Rappresentazione dei movimenti economici/finanziari</li>
              <li style={listItemStyle}><span style={strongStyle}>Tipi documento e range di numerazione</span>: Raggruppamento delle registrazioni per tipologia</li>
              <li style={listItemStyle}><span style={strongStyle}>Periodi contabili</span>: Definiscono i periodi in cui è possibile effettuare registrazioni</li>
              <li style={listItemStyle}><span style={strongStyle}>Chiavi contabili</span>: Definiscono segno (Dare/Avere), tipo conto, campi disponibili</li>
              <li style={listItemStyle}><span style={strongStyle}>Reporting</span>: Analisi saldi, analisi conto, ricerca registrazioni, cruscotti analitici</li>
              <li style={listItemStyle}><span style={strongStyle}>Bilanci riclassificati</span>: Indipendenti dalla codifica dei conti, con confronto tra periodi</li>
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
              <li style={listItemStyle}><span style={strongStyle}>Codici IVA</span>: Elemento base che definisce tipo di imposta, aliquota, conto contabile</li>
              <li style={listItemStyle}><span style={strongStyle}>Registri IVA</span>: Raggruppamento fatture dello stesso tipo secondo normativa</li>
              <li style={listItemStyle}><span style={strongStyle}>Liquidazione periodica</span>: Produzione file XML trimestrale per l'amministrazione fiscale</li>
              <li style={listItemStyle}><span style={strongStyle}>Validazioni</span>: Controlli sui codici IVA vs tipo documento</li>
              <li style={listItemStyle}><span style={strongStyle}>Report di conformità ampliata</span>: Gestione end-to-end della rendicontazione delle imposte</li>
            </ul>
            
            <h3 style={subSectionTitleStyle}>Validazioni</h3>
            <p style={{marginBottom: '1rem'}}>
              Le validazioni consentono di impostare controlli di merito sulle registrazioni:
            </p>
            <ul style={listStyle}>
              <li style={listItemStyle}>Controlli sui dati di testata (es. data registrazione)</li>
              <li style={listItemStyle}>Controlli sui dati di posizione (es. codice IVA vs tipo documento)</li>
              <li style={listItemStyle}>Controlli sul documento completo (es. conti gestionali vs civilistici)</li>
            </ul>
          </div>
        )}
      </div>
      
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
              <li style={listItemStyle}><span style={strongStyle}>Ruoli</span>: I dati anagrafici sono organizzati tramite differenti ruoli in base ai processi da gestire
                <ul style={{paddingLeft: '2rem', marginTop: '0.5rem'}}>
                  <li style={listItemStyle}><span style={strongStyle}>Ruolo Partner in generale</span>: Contiene dati comuni a tutti i tipi di partner
                    <ul style={{paddingLeft: '2rem', marginTop: '0.5rem'}}>
                      <li style={listItemStyle}>Dati generali (ragione sociale, indirizzo, comunicazione)</li>
                      <li style={listItemStyle}>Appoggi bancari (IBAN)</li>
                      <li style={listItemStyle}>Informazioni fiscali (Partita IVA, Codice fiscale, Codice SDI)</li>
                    </ul>
                  </li>
                  <li style={listItemStyle}><span style={strongStyle}>Ruolo Cliente</span>: Dati specifici per il ruolo cliente
                    <ul style={{paddingLeft: '2rem', marginTop: '0.5rem'}}>
                      <li style={listItemStyle}>Dati società (conto riconciliazione, metodo pagamento, condizioni pagamento)</li>
                      <li style={listItemStyle}>Solleciti (procedura sollecito, dati ultimo sollecito)</li>
                    </ul>
                  </li>
                  <li style={listItemStyle}><span style={strongStyle}>Ruolo Fornitore</span>: Dati specifici per il ruolo fornitore
                    <ul style={{paddingLeft: '2rem', marginTop: '0.5rem'}}>
                      <li style={listItemStyle}>Dati società (conto riconciliazione, metodo pagamento, condizioni pagamento)</li>
                      <li style={listItemStyle}>Ritenute d'acconto (tipo ritenuta, codice ritenuta)</li>
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
              <li style={listItemStyle}>Definizione dei ruoli e relativi campi obbligatori/facoltativi</li>
              <li style={listItemStyle}>Legame raggruppamento/range numerazione/gruppo conti clienti o fornitori</li>
              <li style={listItemStyle}>Ruolo BP: Definisce le caratteristiche generali del Business Partner</li>
              <li style={listItemStyle}>Raggruppamento: Permette di categorizzare i Business Partner</li>
              <li style={listItemStyle}>Gruppo conti Clienti/Fornitori: Definisce le impostazioni contabili</li>
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
              <li style={listItemStyle}>Banche esterne: Anagrafica di tutti gli sportelli bancari con codici ABI/CAB</li>
              <li style={listItemStyle}>Banche interne: Conti bancari utilizzati dall'azienda</li>
              <li style={listItemStyle}>Gerarchie: Raggruppamenti di banche per reporting (es. per nazione, per gruppo bancario)</li>
            </ul>
            
            <h4 style={{...subSectionTitleStyle, fontSize: `${fontSize + 1}px`, marginTop: '1.5rem'}}>Strumenti avanzati di tesoreria</h4>
            <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Cash Flow Analyzer</p>
            <p style={{marginBottom: '1rem'}}>
              Strumento potente che integra:
            </p>
            <ul style={listStyle}>
              <li style={listItemStyle}>Saldi bancari attuali</li>
              <li style={listItemStyle}>Scadenze clienti e fornitori</li>
              <li style={listItemStyle}>Ordini di acquisto e vendita</li>
              <li style={listItemStyle}>Movimenti previsionali (stipendi, tasse, ecc.)</li>
            </ul>
            <p style={{marginBottom: '1rem'}}>
              Permette analisi con diversi orizzonti temporali (giorni, settimane, mesi) e consente di verificare i dettagli di ogni importo aggregato.
            </p>
            
            <p style={{fontWeight: 'bold', marginBottom: '0.5rem', marginTop: '1rem'}}>Previsioni di liquidità</p>
            <p style={{marginBottom: '1rem'}}>
              Proiezione dell'andamento della liquidità nei successivi 90 giorni, utilizzando gli stessi dati del Cash Flow Analyzer ma con visualizzazione orientata alla previsione.
            </p>
            
            <p style={{fontWeight: 'bold', marginBottom: '0.5rem', marginTop: '1rem'}}>Movimenti previsionali</p>
            <p style={{marginBottom: '1rem'}}>
              Sistema per inserire manualmente costi o ricavi attesi non derivanti da documenti esistenti:
            </p>
            <ul style={listStyle}>
              <li style={listItemStyle}>Stipendi</li>
              <li style={listItemStyle}>Pagamenti fiscali (F24)</li>
              <li style={listItemStyle}>Acquisti non ancora formalizzati con ordini</li>
              <li style={listItemStyle}>Altri costi/ricavi pianificati</li>
            </ul>
            
            <h3 style={subSectionTitleStyle}>10.3 Gestione Cespiti</h3>
            <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Processo integrato di gestione cespiti</p>
            <p style={{marginBottom: '1rem'}}>
              Il modulo cespiti (FI-AA - Asset Accounting) gestisce l'intero ciclo di vita dei beni ammortizzabili:
            </p>
            
            <h4 style={{...subSectionTitleStyle, fontSize: `${fontSize + 1}px`, marginTop: '1.5rem'}}>Fase di acquisizione</h4>
            <ol style={listStyle}>
              <li style={listItemStyle}>Controlling: Creazione di una commessa di investimento per tracciare i costi</li>
              <li style={listItemStyle}>Acquisti: Gestione delle richieste d'acquisto e ordini</li>
              <li style={listItemStyle}>Logistica: Registrazione dell'entrata merce</li>
              <li style={listItemStyle}>Contabilità: Controllo e registrazione fatture</li>
              <li style={listItemStyle}>Cespiti: Creazione del cespite in costruzione e successiva capitalizzazione</li>
            </ol>
            
            <h4 style={{...subSectionTitleStyle, fontSize: `${fontSize + 1}px`, marginTop: '1.5rem'}}>Fase di gestione</h4>
            <ol style={listStyle}>
              <li style={listItemStyle}>Contabilizzazione: Registrazione nel libro cespiti</li>
              <li style={listItemStyle}>Ammortamenti: Calcolo e contabilizzazione degli ammortamenti periodici</li>
              <li style={listItemStyle}>Reporting: Produzione di report civilistici e fiscali</li>
              <li style={listItemStyle}>Analisi: Allocazione costi su centri di costo e oggetti di controllo</li>
            </ol>
            
            <h4 style={{...subSectionTitleStyle, fontSize: `${fontSize + 1}px`, marginTop: '1.5rem'}}>Fase di dismissione</h4>
            <ol style={listStyle}>
              <li style={listItemStyle}>Vendita/Rottamazione: Registrazione dell'uscita del bene</li>
              <li style={listItemStyle}>Calcolo plus/minusvalenze: Determinazione del risultato economico</li>
              <li style={listItemStyle}>Contabilizzazione: Registrazione finale in contabilità</li>
            </ol>
            
            <h4 style={{...subSectionTitleStyle, fontSize: `${fontSize + 1}px`, marginTop: '1.5rem'}}>Configurazione del sistema cespiti</h4>
            <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Piano di valutazione</p>
            <p style={{marginBottom: '1rem'}}>
              Struttura di base che organizza le diverse tipologie di ammortamento. Tipicamente si configura un piano per nazione per rispettare i requisiti normativi locali.
            </p>
            
            <p style={{fontWeight: 'bold', marginBottom: '0.5rem', marginTop: '1rem'}}>Aree di valutazione</p>
            <p style={{marginBottom: '1rem'}}>
              All'interno del piano, le aree rappresentano diverse finalità di calcolo:
            </p>
            <ul style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>Area 01 (Civilistica)</span>: Registra ammortamenti secondo le regole del codice civile</li>
              <li style={listItemStyle}><span style={strongStyle}>Area 02 (Fiscale)</span>: Calcola ammortamenti secondo regole fiscali (spesso con percentuali diverse)</li>
              <li style={listItemStyle}><span style={strongStyle}>Area 03 (Differenze)</span>: Evidenzia differenze tra civilistico e fiscale per la gestione della fiscalità differita</li>
              <li style={listItemStyle}><span style={strongStyle}>Area 20 (Gestionale)</span>: Per analisi interne, senza impatto contabile</li>
            </ul>
            
            <p style={{fontWeight: 'bold', marginBottom: '0.5rem', marginTop: '1rem'}}>Classi cespite</p>
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
            <p style={{marginBottom: '1rem'}}>
              Esempi di classi: Terreni, Edifici, Macchinari, Attrezzature, Mobili, Automezzi, Hardware.
            </p>
            
            <h4 style={{...subSectionTitleStyle, fontSize: `${fontSize + 1}px`, marginTop: '1.5rem'}}>Anagrafica cespiti</h4>
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