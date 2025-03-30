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
                <li style={listItemStyle}>Pagamenti e incassi</li>
                <li style={listItemStyle}>Gestione effetti (ricevute bancarie)</li>
                <li style={listItemStyle}>Importazione di estratti conto elettronici</li>
                <li style={listItemStyle}>Reportistica di previsione finanziaria</li>
              </ul>
              
              <h3 style={subSectionTitleStyle}>10.2 Struttura Bancaria</h3>
              <div style={{marginBottom: '1rem'}}>
                <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Banche esterne:</p>
                <ul style={listStyle}>
                  <li style={listItemStyle}>Anagrafiche delle banche dei fornitori e clienti</li>
                  <li style={listItemStyle}>Includono paese, chiave banca (BIC/SWIFT), nome e città</li>
                  <li style={listItemStyle}>SAP contiene un elenco precaricato di quasi tutte le piazze di pagamento italiane</li>
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
                  <li style={listItemStyle}>Definiscono i termini di scadenza di un incasso o pagamento</li>
                  <li style={listItemStyle}>Possono includere sconti per pagamenti anticipati o rateizzazioni</li>
                  <li style={listItemStyle}>La scadenza netta visualizzata nei documenti viene calcolata in base alla condizione</li>
                </ul>
                
                <p style={{fontWeight: 'bold', marginBottom: '0.5rem', marginTop: '1rem'}}>Metodi di pagamento:</p>
                <ul style={listStyle}>
                  <li style={listItemStyle}>Definiscono il mezzo di pagamento (bonifico, ricevuta bancaria, assegno)</li>
                  <li style={listItemStyle}>Sono collegati ai conti contabili su cui effettuare le registrazioni</li>
                  <li style={listItemStyle}>Possono generare file telematici per le banche</li>
                  <li style={listItemStyle}>Sono validi a livello di nazione e attivati per singola società</li>
                </ul>
              </div>
              
              <h3 style={subSectionTitleStyle}>10.4 Conti Transitori Banca</h3>
              <p style={{marginBottom: '1rem'}}>
                I conti transitori banca sono utilizzati per registrare i pagamenti quando l'azienda dà l'ordine alla banca, ma l'effettiva uscita di denaro non è ancora avvenuta:
              </p>
              <ul style={listStyle}>
                <li style={listItemStyle}>Permettono di chiudere la partita contabile del fornitore ("fornitore" in Dare, "banca in pagamento" in Avere)</li>
                <li style={listItemStyle}>Quando la banca conferma il pagamento, si storna il conto transitorio e si movimenta il conto corrente effettivo</li>
                <li style={listItemStyle}>Sono utili con sistemi di tesoreria esterni integrati con SAP (come Piteco)</li>
                <li style={listItemStyle}>Riflettono il flusso di cassa reale</li>
              </ul>
              
              <h3 style={subSectionTitleStyle}>10.5 Strumenti Avanzati di Tesoreria</h3>
              <div style={{marginBottom: '1rem'}}>
                <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Cash Flow Analyzer:</p>
                <p style={{marginBottom: '1rem'}}>
                  Strumento potente che integra diverse fonti di informazione per analizzare e prevedere i flussi di cassa:
                </p>
                <ul style={listStyle}>
                  <li style={listItemStyle}>Saldi bancari attuali</li>
                  <li style={listItemStyle}>Scadenze clienti e fornitori</li>
                  <li style={listItemStyle}>Ordini di acquisto e vendita</li>
                  <li style={listItemStyle}>Movimenti previsionali</li>
                </ul>
                <p style={{marginBottom: '1rem'}}>
                  Permette analisi con diversi orizzonti temporali (giorni, settimane, mesi) e consente di verificare i dettagli di ogni importo aggregato.
                </p>
                
                <p style={{fontWeight: 'bold', marginBottom: '0.5rem', marginTop: '1rem'}}>Previsioni di liquidità:</p>
                <p style={{marginBottom: '1rem'}}>
                  Proiezione dell'andamento della liquidità nei successivi 90 giorni, utilizzando gli stessi dati del Cash Flow Analyzer ma con visualizzazione orientata alla previsione.
                </p>
                
                <p style={{fontWeight: 'bold', marginBottom: '0.5rem', marginTop: '1rem'}}>Movimenti previsionali:</p>
                <p style={{marginBottom: '1rem'}}>
                  Sistema per inserire manualmente costi o ricavi attesi non derivanti da documenti esistenti:
                </p>
                <ul style={listStyle}>
                  <li style={listItemStyle}>Stipendi</li>
                  <li style={listItemStyle}>Pagamenti fiscali (F24)</li>
                  <li style={listItemStyle}>Acquisti non ancora formalizzati con ordini</li>
                  <li style={listItemStyle}>Altri costi/ricavi pianificati</li>
                </ul>
              </div>
              
              <h3 style={subSectionTitleStyle}>10.6 Funzionalità per i Pagamenti Automatici</h3>
              <p style={{marginBottom: '1rem'}}>
                La transazione F110 viene utilizzata per eseguire i pagamenti automatici ai fornitori. Il processo prevede diversi step:
              </p>
              <ol style={listStyle}>
                <li style={listItemStyle}><span style={strongStyle}>Inserimento parametri</span>: criteri di selezione (società, fornitore, metodo di pagamento, data)</li>
                <li style={listItemStyle}><span style={strongStyle}>Creazione proposta</span>: lista delle partite da pagare (non genera scritture contabili)</li>
                <li style={listItemStyle}><span style={strongStyle}>Verifica ed eventuale modifica</span>: controllo e correzioni</li>
                <li style={listItemStyle}><span style={strongStyle}>Esecuzione del pagamento</span>: scritture contabili e file per la banca</li>
              </ol>
              
              <h3 style={subSectionTitleStyle}>10.7 Estratto Conto Elettronico</h3>
              <p style={{marginBottom: '1rem'}}>
                L'estratto conto elettronico è una funzionalità che permette di importare file forniti dalla banca contenenti le operazioni bancarie:
              </p>
              <ul style={listStyle}>
                <li style={listItemStyle}>Automatizza la riconciliazione bancaria</li>
                <li style={listItemStyle}>Propone registrazioni contabili da verificare</li>
                <li style={listItemStyle}>Richiede mapping tra causali bancarie e conti contabili</li>
                <li style={listItemStyle}>Funziona tramite import di file dal remote banking</li>
              </ul>
              
              <ContentBox darkMode={darkMode}>
                <h4 style={{fontSize: `${fontSize + 1}px`, color: headingColor, marginBottom: '0.5rem'}}>App di Tesoreria in Fiori</h4>
                <p>SAP S/4HANA offre diverse app Fiori per la tesoreria:</p>
                <ul style={listStyle}>
                  <li style={listItemStyle}><span style={strongStyle}>Stato di Cassa Giornaliero</span>: analisi della posizione di cassa</li>
                  <li style={listItemStyle}><span style={strongStyle}>Riepilogo Relazioni con la Banca</span>: cruscotto con pagamenti/incassi, banche attive, monitoraggio spese</li>
                  <li style={listItemStyle}><span style={strongStyle}>Flusso di Cassa Effettivo</span>: panoramica dei flussi nei 90 giorni antecedenti</li>
                  <li style={listItemStyle}><span style={strongStyle}>Gerarchie Banche</span>: costruzione gerarchie per reporting (per nazione, società, istituto)</li>
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