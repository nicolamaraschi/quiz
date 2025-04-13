import React, { useState, useEffect } from 'react';

const MMDocumentation = () => {
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
  // Aggiungi questa definizione dopo listItemStyle
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
              const sections = Array.from({length: 11}, (_, i) => `section${i+1}`);
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

      <h1 style={titleStyle}>Documentazione SAP - Modulo Material Management (MM)</h1>
      
      {/* Sezione 1: Panoramica Generale */}
      <div style={sectionStyle}>
        <div 
          style={sectionHeaderStyle}
          onClick={() => toggleSection('section1')}
        >
          <h2 style={sectionTitleStyle}>1. Panoramica Generale</h2>
          <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section1' ? '▼' : '▶'}</span>
        </div>
        
        {activeSection === 'section1' && (
          <div style={sectionContentStyle}>
            <h3 style={subSectionTitleStyle}>Cosa è il Modulo MM?</h3>
            <p style={{marginBottom: '1rem'}}>
              Il modulo Material Management (MM) è il sistema integrato di SAP per la gestione completa 
              dei materiali e degli approvvigionamenti. Copre l'intero ciclo di vita dei materiali, 
              dall'acquisto alla gestione del magazzino, interfacciandosi con numerosi altri moduli SAP.
            </p>
          </div>
        )}
      </div>
      
      {/* Sezione 2: Struttura Organizzativa */}
      <div style={sectionStyle}>
        <div 
          style={sectionHeaderStyle}
          onClick={() => toggleSection('section2')}
        >
          <h2 style={sectionTitleStyle}>2. Struttura Organizzativa e Concetti Chiave</h2>
          <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section2' ? '▼' : '▶'}</span>
        </div>
        
        {activeSection === 'section2' && (
          <div style={sectionContentStyle}>
            <h3 style={subSectionTitleStyle}>2.1 Componenti Organizzativi</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>Società</span>: Unità legale principale</li>
              <li style={listItemStyle}><span style={strongStyle}>Divisione</span>: Unità logistica (stabilimento, ufficio vendite)</li>
              <li style={listItemStyle}><span style={strongStyle}>Magazzini</span>: Ubicazioni logiche per stoccaggio</li>
              <li style={listItemStyle}><span style={strongStyle}>Organizzazione Acquisti</span>: Gestione processi di approvvigionamento</li>
              <li style={listItemStyle}><span style={strongStyle}>Gruppo Acquisti</span>: Addetto a specifiche categorie di acquisto</li>
            </ul>
            
            <h3 style={subSectionTitleStyle}>2.2 Lotto e Numero Seriale</h3>
            <div style={{marginBottom: '1rem'}}>
              <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Lotto:</p>
              <ul style={listStyle}>
                <li style={listItemStyle}>Insieme di prodotti con caratteristiche omogenee</li>
                <li style={listItemStyle}>Data di entrata comune</li>
                <li style={listItemStyle}>Numero identificativo di una partita</li>
                <li style={listItemStyle}>Scopo: Tracciamento e rintracciabilità</li>
                <li style={listItemStyle}>Esempio: Se una barra di acciaio è difettosa, si può risalire all'intero lotto</li>
              </ul>
              
              <p style={{fontWeight: 'bold', marginBottom: '0.5rem', marginTop: '1rem'}}>Numero Seriale:</p>
              <ul style={listStyle}>
                <li style={listItemStyle}>Identificativo del singolo pezzo</li>
                <li style={listItemStyle}>Permette la tracciabilità individuale</li>
                <li style={listItemStyle}>Utile per prodotti che richiedono identificazione precisa</li>
              </ul>
            </div>
            
            <h3 style={subSectionTitleStyle}>2.3 Workflow e Autorizzazioni</h3>
            <div style={{marginBottom: '1rem'}}>
              <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Workflow Approvativi:</p>
              <ul style={listStyle}>
                <li style={listItemStyle}>Percorsi di approvazione predefiniti</li>
                <li style={listItemStyle}>Definiscono chi può approvare cosa</li>
                <li style={listItemStyle}>Gestiscono l'iter autorizzativo dei documenti</li>
              </ul>
              
              <p style={{fontWeight: 'bold', marginBottom: '0.5rem', marginTop: '1rem'}}>Ruoli e Autorizzazioni:</p>
              <ul style={listStyle}>
                <li style={listItemStyle}>Definiscono chi può:</li>
                <ul style={{paddingLeft: '2rem'}}>
                  <li style={listItemStyle}>Creare richieste d'acquisto</li>
                  <li style={listItemStyle}>Approvare ordini</li>
                  <li style={listItemStyle}>Modificare anagrafiche</li>
                  <li style={listItemStyle}>Eseguire specifiche transazioni</li>
                </ul>
              </ul>
            </div>
          </div>
        )}
      </div>
      
      {/* Sezione 3: Anagrafica Materiali */}
      <div style={sectionStyle}>
        <div 
          style={sectionHeaderStyle}
          onClick={() => toggleSection('section3')}
        >
          <h2 style={sectionTitleStyle}>3. Anagrafica Materiali</h2>
          <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section3' ? '▼' : '▶'}</span>
        </div>
        
        {activeSection === 'section3' && (
          <div style={sectionContentStyle}>
            <h3 style={subSectionTitleStyle}>3.1 Tipologie di Materiale</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Tipi standard SAP:
                <ul style={{paddingLeft: '2rem'}}>
                  <li style={listItemStyle}><span style={strongStyle}>NLAG</span>: Materiali non gestiti a sistema</li>
                  <li style={listItemStyle}><span style={strongStyle}>DIEN</span>: Prestazioni di servizi</li>
                </ul>
              </li>
              <li style={listItemStyle}>Possibilità di personalizzazione (tipi custom con Z o Y)</li>
            </ul>
            
            <h3 style={subSectionTitleStyle}>3.2 Parametri Chiave</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Tipo Materiale</li>
              <li style={listItemStyle}>Unità di misura</li>
              <li style={listItemStyle}>Gestione a quantità/valore</li>
              <li style={listItemStyle}>Tipo di approvvigionamento</li>
              <li style={listItemStyle}>Pianificazione MRP</li>
            </ul>
          </div>
        )}
      </div>
      
      {/* Sezione 4: Ciclo Passivo */}
      <div style={sectionStyle}>
        <div 
          style={sectionHeaderStyle}
          onClick={() => toggleSection('section4')}
        >
          <h2 style={sectionTitleStyle}>4. Ciclo Passivo (Processo di Acquisto)</h2>
          <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section4' ? '▼' : '▶'}</span>
        </div>
        
        {activeSection === 'section4' && (
          <div style={sectionContentStyle}>
            <h3 style={subSectionTitleStyle}>4.1 Richiesta d'Acquisto (RDA)</h3>
            <div style={{marginBottom: '1rem'}}>
              <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Modalità di Generazione:</p>
              <ul style={listStyle}>
                <li style={listItemStyle}>Processo di pianificazione MRP</li>
                <li style={listItemStyle}>Richieste manuali</li>
                <li style={listItemStyle}>Processo di conto lavoro</li>
              </ul>
              
              <p style={{fontWeight: 'bold', marginBottom: '0.5rem', marginTop: '1rem'}}>Tipologie:</p>
              <ul style={listStyle}>
                <li style={listItemStyle}>Acquisti diretti (da MRP)</li>
                <li style={listItemStyle}>Acquisti indiretti (servizi, materiali non rilevanti)</li>
              </ul>
            </div>
            
            <h3 style={subSectionTitleStyle}>4.2 Richiesta di Offerta</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Raccolta preventivi dai fornitori</li>
              <li style={listItemStyle}>Confronto delle offerte</li>
              <li style={listItemStyle}>Selezione del fornitore migliore</li>
            </ul>
            
            <h3 style={subSectionTitleStyle}>4.3 Ordine d'Acquisto</h3>
            <div style={{marginBottom: '1rem'}}>
              <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Caratteristiche:</p>
              <ul style={listStyle}>
                <li style={listItemStyle}>Documento ufficiale di acquisto</li>
                <li style={listItemStyle}>Contiene:
                  <ul style={{paddingLeft: '2rem'}}>
                    <li style={listItemStyle}>Dati fornitore</li>
                    <li style={listItemStyle}>Condizioni di pagamento</li>
                    <li style={listItemStyle}>Specifiche per ogni posizione</li>
                  </ul>
                </li>
              </ul>
            </div>
            
            <h3 style={subSectionTitleStyle}>4.4 Entrata Merci</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Accettazione fisica dei materiali</li>
              <li style={listItemStyle}>Controllo quantità e qualità</li>
              <li style={listItemStyle}>Registrazione a sistema</li>
              <li style={listItemStyle}>Aggiornamento immediato delle scorte</li>
            </ul>
            
            <h3 style={subSectionTitleStyle}>4.5 Fatturazione</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Verifica corrispondenza con ordine</li>
              <li style={listItemStyle}>Gestione scostamenti</li>
              <li style={listItemStyle}>Registrazione contabile</li>
            </ul>
          </div>
        )}
      </div>
      
      {/* Sezione 5: Contratti e Piani di Consegna */}
      <div style={sectionStyle}>
        <div 
          style={sectionHeaderStyle}
          onClick={() => toggleSection('section5')}
        >
          <h2 style={sectionTitleStyle}>5. Contratti e Piani di Consegna</h2>
          <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section5' ? '▼' : '▶'}</span>
        </div>
        
        {activeSection === 'section5' && (
          <div style={sectionContentStyle}>
            <h3 style={subSectionTitleStyle}>5.1 Contratti</h3>
            <div style={{marginBottom: '1rem'}}>
              <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Tipologie:</p>
              <ul style={listStyle}>
                <li style={listItemStyle}>Contratti a valore</li>
                <li style={listItemStyle}>Contratti a quantità</li>
              </ul>
              
              <p style={{fontWeight: 'bold', marginBottom: '0.5rem', marginTop: '1rem'}}>Caratteristiche:</p>
              <ul style={listStyle}>
                <li style={listItemStyle}>Periodo di validità definito</li>
                <li style={listItemStyle}>Possono generare ordini d'acquisto</li>
                <li style={listItemStyle}>Definiscono condizioni specifiche</li>
              </ul>
            </div>
            
            <h3 style={subSectionTitleStyle}>5.2 Piani di Consegna</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Simili ai contratti ma con differenze chiave</li>
              <li style={listItemStyle}>Non generano automaticamente ordini</li>
              <li style={listItemStyle}>Dettaglio di consegne periodiche</li>
              <li style={listItemStyle}>Flessibilità nella pianificazione</li>
            </ul>
          </div>
        )}
      </div>
      
      {/* Continua con le altre sezioni... */}
      
      {/* Sezione 6: Gestione Magazzino */}
      <div style={sectionStyle}>
        <div 
          style={sectionHeaderStyle}
          onClick={() => toggleSection('section6')}
        >
          <h2 style={sectionTitleStyle}>6. Gestione Magazzino</h2>
          <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section6' ? '▼' : '▶'}</span>
        </div>
        
        {activeSection === 'section6' && (
          <div style={sectionContentStyle}>
            <h3 style={subSectionTitleStyle}>6.1 Tipologie di Stock</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Stock Libero</li>
              <li style={listItemStyle}>Stock Bloccato</li>
              <li style={listItemStyle}>Stock in Controllo Qualità</li>
              <li style={listItemStyle}>Stock Speciale (progetto, conto deposito)</li>
            </ul>
            
            <h3 style={subSectionTitleStyle}>6.2 Movimentazioni</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Entrate merci</li>
              <li style={listItemStyle}>Uscite merci</li>
              <li style={listItemStyle}>Trasferimenti tra magazzini</li>
              <li style={listItemStyle}>Rottamazioni</li>
              <li style={listItemStyle}>Inventario</li>
            </ul>
            
            <h3 style={subSectionTitleStyle}>6.3 Tipi di Movimento</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>101</span>: Entrata merci</li>
              <li style={listItemStyle}><span style={strongStyle}>102</span>: Storno entrata merci</li>
              <li style={listItemStyle}><span style={strongStyle}>201</span>: Consumo a centro di costo</li>
              <li style={listItemStyle}><span style={strongStyle}>221</span>: Consumo per progetto</li>
              <li style={listItemStyle}><span style={strongStyle}>261</span>: Consumo per ordine</li>
              <li style={listItemStyle}><span style={strongStyle}>551</span>: Rottamazione</li>
            </ul>
          </div>
        )}
      </div>
      
      {/* Sezione 7: Intrastat */}
      <div style={sectionStyle}>
        <div 
          style={sectionHeaderStyle}
          onClick={() => toggleSection('section7')}
        >
          <h2 style={sectionTitleStyle}>7. Intrastat</h2>
          <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section7' ? '▼' : '▶'}</span>
        </div>
        
        {activeSection === 'section7' && (
          <div style={sectionContentStyle}>
            <ul style={listStyle}>
              <li style={listItemStyle}>Gestione movimentazioni internazionali</li>
              <li style={listItemStyle}>Registrazione e reportistica per trasferimenti transfrontalieri</li>
            </ul>
          </div>
        )}
      </div>
      
      {/* Sezione 8: Verticalizzazioni */}
      <div style={sectionStyle}>
        <div 
          style={sectionHeaderStyle}
          onClick={() => toggleSection('section8')}
        >
          <h2 style={sectionTitleStyle}>8. Verticalizzazioni</h2>
          <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section8' ? '▼' : '▶'}</span>
        </div>
        
        {activeSection === 'section8' && (
          <div style={sectionContentStyle}>
            <p style={{marginBottom: '1rem'}}><span style={strongStyle}>Definizione</span>: Personalizzazioni per settori specifici</p>
            
            <p style={{fontWeight: 'bold', marginBottom: '0.5rem', marginTop: '1rem'}}>Esempi:</p>
            <ul style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>IS-OIL</span>: Gestione settore petrolifero (densità, temperature)</li>
              <li style={listItemStyle}><span style={strongStyle}>Settore farmaceutico</span>: Gestione dettagliata di materiali specifici</li>
            </ul>
            
            <p style={{fontWeight: 'bold', marginBottom: '0.5rem', marginTop: '1rem'}}>Scopo:</p>
            <ul style={listStyle}>
              <li style={listItemStyle}>Aggiungere campi e funzionalità specifiche</li>
              <li style={listItemStyle}>Adattare SAP a esigenze settoriali particolari</li>
            </ul>
          </div>
        )}
      </div>
      
      {/* Sezione 9: Modulo EWM */}
      <div style={sectionStyle}>
        <div 
          style={sectionHeaderStyle}
          onClick={() => toggleSection('section9')}
        >
          <h2 style={sectionTitleStyle}>9. Modulo EWM (Extended Warehouse Management)</h2>
          <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section9' ? '▼' : '▶'}</span>
        </div>
        
        {activeSection === 'section9' && (
          <div style={sectionContentStyle}>
            <h3 style={subSectionTitleStyle}>9.1 Caratteristiche</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Gestione avanzata del magazzino</li>
              <li style={listItemStyle}>Flessibile e adattabile</li>
              <li style={listItemStyle}>Processi ottimizzati:
                <ul style={{paddingLeft: '2rem'}}>
                  <li style={listItemStyle}>Entrata merci</li>
                  <li style={listItemStyle}>Produzione</li>
                  <li style={listItemStyle}>Movimentazioni interne</li>
                  <li style={listItemStyle}>Uscita merci</li>
                </ul>
              </li>
            </ul>
            
            <h3 style={subSectionTitleStyle}>9.2 Funzionalità Chiave</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Ubicazione automatica</li>
              <li style={listItemStyle}>Strategie di prelievo</li>
              <li style={listItemStyle}>Gestione unità di movimentazione</li>
              <li style={listItemStyle}>Yard management</li>
              <li style={listItemStyle}>Inventario fisico</li>
            </ul>
          </div>
        )}
      </div>
      
      {/* Sezione 10: Strategie di Rilascio */}
      <div style={sectionStyle}>
        <div 
          style={sectionHeaderStyle}
          onClick={() => toggleSection('section10')}
        >
          <h2 style={sectionTitleStyle}>10. Strategie di Rilascio</h2>
          <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section10' ? '▼' : '▶'}</span>
        </div>
        
        {activeSection === 'section10' && (
          <div style={sectionContentStyle}>
            <h3 style={subSectionTitleStyle}>10.1 Processo Approvativo</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Possibilità di bloccare ordini</li>
              <li style={listItemStyle}>Definizione di livelli di autorizzazione</li>
              <li style={listItemStyle}>Meccanismi di sblocco controllati</li>
            </ul>
            
            <p style={{fontWeight: 'bold', marginBottom: '0.5rem', marginTop: '1rem'}}>Transazioni Principali:</p>
            <ul style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>ME29N</span>: Definizione procedure di rilascio</li>
              <li style={listItemStyle}>Gestione stati: Bloccato (B), Rilasciato (G)</li>
            </ul>
          </div>
        )}
      </div>
      
      {/* Sezione 11: Transazioni Principali */}
      <div style={sectionStyle}>
        <div 
          style={sectionHeaderStyle}
          onClick={() => toggleSection('section11')}
        >
          <h2 style={sectionTitleStyle}>11. Transazioni Principali</h2>
          <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section11' ? '▼' : '▶'}</span>
        </div>
        
        {activeSection === 'section11' && (
          <div style={sectionContentStyle}>
            <h3 style={subSectionTitleStyle}>11.1 Anagrafica Materiali</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>MM01/02/03</span>: Creazione/Modifica/Visualizzazione</li>
            </ul>
            
            <h3 style={subSectionTitleStyle}>11.2 Richieste d'Acquisto</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>ME51N</span>: Creazione</li>
              <li style={listItemStyle}><span style={strongStyle}>ME52N</span>: Modifica</li>
              <li style={listItemStyle}><span style={strongStyle}>ME53N</span>: Visualizzazione</li>
              <li style={listItemStyle}><span style={strongStyle}>ME5A</span>: Lista Richieste</li>
            </ul>
            
            <h3 style={subSectionTitleStyle}>11.3 Offerte</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>ME41/42/43</span>: Creazione/Modifica/Visualizzazione</li>
              <li style={listItemStyle}><span style={strongStyle}>ME47</span>: Aggiornamento offerte</li>
              <li style={listItemStyle}><span style={strongStyle}>ME49</span>: Confronto offerte</li>
            </ul>
            
            <h3 style={subSectionTitleStyle}>11.4 Ordini d'Acquisto</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>ME21N/22N/23N</span>: Creazione/Modifica/Visualizzazione</li>
              <li style={listItemStyle}><span style={strongStyle}>ME2L/M/N</span>: Liste Ordini</li>
            </ul>
            
            <h3 style={subSectionTitleStyle}>11.5 Contratti</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>ME31K/32K/33K</span>: Contratti di Acquisto</li>
              <li style={listItemStyle}><span style={strongStyle}>ME31L/32L/33L</span>: Piani di Consegna</li>
            </ul>
          </div>
        )}
      </div>

      {/* Sezione: Gestione Entrata Fattura */}
<div style={sectionStyle}>
  <div 
    style={sectionHeaderStyle}
    onClick={() => toggleSection('sectionEntryFattura')}
  >
    <h2 style={sectionTitleStyle}>Gestione Entrata Fattura</h2>
    <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'sectionEntryFattura' ? '▼' : '▶'}</span>
  </div>
  
  {activeSection === 'sectionEntryFattura' && (
    <div style={sectionContentStyle}>
      <h3 style={subSectionTitleStyle}>Processo di Verifica Fattura</h3>
      <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Concetti generali:</p>
      <ul style={listStyle}>
        <li style={listItemStyle}>Il processo di controllo fatture completa il ciclo di approvvigionamento</li>
        <li style={listItemStyle}>Verifica la corrispondenza tra ordine d'acquisto, entrata merce e fattura (logica a tre vie)</li>
        <li style={listItemStyle}>Gestisce le tolleranze di prezzo e quantità configurabili</li>
      </ul>

      <h3 style={subSectionTitleStyle}>Transazione MIRO</h3>
      <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Struttura principale:</p>
      <ul style={listStyle}>
        <li style={listItemStyle}><span style={strongStyle}>Testata</span>
          <ul style={nestedListStyle}>
            <li style={listItemStyle}>Data fattura (data del documento fornitore)</li>
            <li style={listItemStyle}>Riferimento (numero della fattura fornitore)</li>
            <li style={listItemStyle}>Importo totale</li>
            <li style={listItemStyle}>Calcolo imposte (flag per determinare il calcolo automatico dell'IVA)</li>
          </ul>
        </li>
        <li style={listItemStyle}><span style={strongStyle}>Tab disponibili</span>
          <ul style={nestedListStyle}>
            <li style={listItemStyle}>Dati di base: informazioni generali</li>
            <li style={listItemStyle}>Dati pagamento: data base, modalità di pagamento</li>
            <li style={listItemStyle}>Dettagli: tipo documento (fattura fornitori)</li>
            <li style={listItemStyle}>Imposte: informazioni relative all'IVA</li>
          </ul>
        </li>
        <li style={listItemStyle}><span style={strongStyle}>Riferimenti per ricerca</span>
          <ul style={nestedListStyle}>
            <li style={listItemStyle}>Ordine d'acquisto (numero ordine)</li>
            <li style={listItemStyle}>Bolla di consegna (fornita dal fornitore)</li>
            <li style={listItemStyle}>Lettera di vettura</li>
            <li style={listItemStyle}>Fornitore</li>
          </ul>
        </li>
      </ul>

      <h3 style={subSectionTitleStyle}>Gestione Differenze</h3>
      <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Scenari gestiti:</p>
      <ul style={listStyle}>
        <li style={listItemStyle}><span style={strongStyle}>Differenze di prezzo</span>
          <ul style={nestedListStyle}>
            <li style={listItemStyle}>Movimenta conti come "acquisti di materie prime" e "perdita da scostamento prezzo"</li>
            <li style={listItemStyle}>Tolleranze configurabili per controllare gli scostamenti</li>
            <li style={listItemStyle}>Blocchi automatici oltre determinate soglie</li>
          </ul>
        </li>
        <li style={listItemStyle}><span style={strongStyle}>Fatturazione parziale</span>
          <ul style={nestedListStyle}>
            <li style={listItemStyle}>Possibilità di fatturare solo parte delle entrate merci</li>
            <li style={listItemStyle}>Tracciamento delle quantità già fatturate</li>
          </ul>
        </li>
        <li style={listItemStyle}><span style={strongStyle}>Flag importanti</span>
          <ul style={nestedListStyle}>
            <li style={listItemStyle}>"Ver. fatt. dopo mov. merc." (GR-Based IV): vincola la registrazione della fattura all'avvenuta entrata merci</li>
            <li style={listItemStyle}>"Controllo fattura riferimento in entrata merce": meccanismo di doppio controllo</li>
          </ul>
        </li>
      </ul>

      <h3 style={subSectionTitleStyle}>Fornitore di Servizi di Trasporto</h3>
      <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Funzionalità speciale:</p>
      <ul style={listStyle}>
        <li style={listItemStyle}>Permette di registrare fatture per costi di trasporto emesse da un fornitore diverso da quello principale dell'ordine</li>
        <li style={listItemStyle}>Importanza di registrare i costi di trasporto in riferimento all'ordine d'acquisto per una corretta valorizzazione del magazzino</li>
        <li style={listItemStyle}>Consente di attribuire i costi di trasporto al costo del materiale invece di registrarli direttamente su un conto COGE</li>
      </ul>
    </div>
  )}
</div>

{/* Sezione: Gestione Magazzino Logico (MM-IM) */}
<div style={sectionStyle}>
  <div 
    style={sectionHeaderStyle}
    onClick={() => toggleSection('sectionMagazzinoLogico')}
  >
    <h2 style={sectionTitleStyle}>Gestione Magazzino Logico (MM-IM)</h2>
    <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'sectionMagazzinoLogico' ? '▼' : '▶'}</span>
  </div>
  
  {activeSection === 'sectionMagazzinoLogico' && (
    <div style={sectionContentStyle}>
      <h3 style={subSectionTitleStyle}>Reportistica di Magazzino</h3>
      <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Transazioni principali:</p>
      <ul style={listStyle}>
        <li style={listItemStyle}><span style={strongStyle}>MB51 - Lista documenti materiale</span>
          <ul style={nestedListStyle}>
            <li style={listItemStyle}>Visualizza tutti i movimenti di materiale in un intervallo di date</li>
            <li style={listItemStyle}>Filtrabile per tipo movimento, magazzino, materiale</li>
            <li style={listItemStyle}>Personalizzazione layout per informazioni aggiuntive (utente, bolla, OdA)</li>
          </ul>
        </li>
        <li style={listItemStyle}><span style={strongStyle}>MB52 - Lista stock magazzino</span>
          <ul style={nestedListStyle}>
            <li style={listItemStyle}>Riepilogo giacenze attuali per materiali e magazzini</li>
            <li style={listItemStyle}>Opzioni di filtro multiple (materiale, divisione, magazzino, partita)</li>
            <li style={listItemStyle}>Flag per visualizzare/nascondere stock zero, partite, valori, stock speciali</li>
          </ul>
        </li>
        <li style={listItemStyle}><span style={strongStyle}>MMBE - Riepilogo stock per singolo materiale</span>
          <ul style={nestedListStyle}>
            <li style={listItemStyle}>Giacenza dettagliata per un singolo materiale a tutti i livelli</li>
            <li style={listItemStyle}>Visualizzazione di società, plant, magazzino, partite, stock speciale</li>
            <li style={listItemStyle}>Possibilità di cambiare l'unità di misura</li>
          </ul>
        </li>
        <li style={listItemStyle}><span style={strongStyle}>MB5B - Stock a data di registrazione</span>
          <ul style={nestedListStyle}>
            <li style={listItemStyle}>Visualizza lo stock in una data specifica nel passato</li>
          </ul>
        </li>
        <li style={listItemStyle}><span style={strongStyle}>MBLB - Stock presso fornitore</span>
          <ul style={nestedListStyle}>
            <li style={listItemStyle}>Mostra lo stock giacente presso il fornitore</li>
          </ul>
        </li>
      </ul>

      <h3 style={subSectionTitleStyle}>Tipi di Stock e Stock Speciali</h3>
      <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Classificazioni importanti:</p>
      <ul style={listStyle}>
        <li style={listItemStyle}><span style={strongStyle}>Tipi Stock</span>
          <ul style={nestedListStyle}>
            <li style={listItemStyle}>Utilizzabile liberamente: stock disponibile per tutti gli scopi</li>
            <li style={listItemStyle}>Bloccato: stock non disponibile in attesa di decisioni</li>
            <li style={listItemStyle}>Controllo qualità: stock in attesa di ispezione</li>
          </ul>
        </li>
        <li style={listItemStyle}><span style={strongStyle}>Stock Speciali</span>
          <ul style={nestedListStyle}>
            <li style={listItemStyle}>Conto deposito cliente/fornitore: materiale di terzi in nostro possesso</li>
            <li style={listItemStyle}>Progetto: stock assegnato a progetto specifico</li>
            <li style={listItemStyle}>Ordine cliente: stock riservato per cliente (Make to Order)</li>
            <li style={listItemStyle}>Lavorazione esterna: materiale presso fornitore per lavorazione</li>
            <li style={listItemStyle}>Stock in transito: materiale in trasferimento tra sedi</li>
          </ul>
        </li>
      </ul>

      <h3 style={subSectionTitleStyle}>Movimentazioni in MIGO</h3>
      <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Operazioni principali:</p>
      <ul style={listStyle}>
        <li style={listItemStyle}><span style={strongStyle}>Consumi (uscite merci)</span>
          <ul style={nestedListStyle}>
            <li style={listItemStyle}>201: Consumo a centro di costo</li>
            <li style={listItemStyle}>221: Consumo per progetto</li>
            <li style={listItemStyle}>261: Consumo per ordine</li>
            <li style={listItemStyle}>551: Rottamazione</li>
          </ul>
        </li>
        <li style={listItemStyle}><span style={strongStyle}>Trasferimenti</span>
          <ul style={nestedListStyle}>
            <li style={listItemStyle}>311: Trasferimento nella divisione (tra magazzini dello stesso plant)</li>
            <li style={listItemStyle}>301: Trasferimento tra plant diversi</li>
            <li style={listItemStyle}>313: Prelievo per trasferimento</li>
            <li style={listItemStyle}>315: Immagazzinamento per trasferimento</li>
            <li style={listItemStyle}>321: Trasferimento da qualità a utilizzabile liberamente</li>
            <li style={listItemStyle}>322: Trasferimento da utilizzabile liberamente a controllo qualità</li>
          </ul>
        </li>
        <li style={listItemStyle}><span style={strongStyle}>Inventario</span>
          <ul style={nestedListStyle}>
            <li style={listItemStyle}>561: Entrata per inventario (carico iniziale)</li>
            <li style={listItemStyle}>701: Entrata merci per inventario (incremento)</li>
            <li style={listItemStyle}>702: Uscita merci per inventario (decremento)</li>
          </ul>
        </li>
      </ul>

      <h3 style={subSectionTitleStyle}>Funzionalità Aggiuntive MIGO</h3>
      <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Opzioni utili:</p>
      <ul style={listStyle}>
        <li style={listItemStyle}><span style={strongStyle}>Parcheggiare</span>
          <ul style={nestedListStyle}>
            <li style={listItemStyle}>Permette di salvare una movimentazione senza registrarla</li>
            <li style={listItemStyle}>I documenti parcheggiati possono essere richiamati successivamente</li>
            <li style={listItemStyle}>Richiede riesecuzione del salvataggio dopo riapertura</li>
          </ul>
        </li>
        <li style={listItemStyle}><span style={strongStyle}>Registrazione retroattiva</span>
          <ul style={nestedListStyle}>
            <li style={listItemStyle}>Possibilità di registrare movimenti con data nel passato</li>
            <li style={listItemStyle}>Rispetta i periodi contabili aperti</li>
          </ul>
        </li>
      </ul>
    </div>
  )}
</div>

{/* Sezione: Inventario Fisico */}
<div style={sectionStyle}>
  <div 
    style={sectionHeaderStyle}
    onClick={() => toggleSection('sectionInventario')}
  >
    <h2 style={sectionTitleStyle}>Inventario Fisico</h2>
    <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'sectionInventario' ? '▼' : '▶'}</span>
  </div>
  
  {activeSection === 'sectionInventario' && (
    <div style={sectionContentStyle}>
      <h3 style={subSectionTitleStyle}>Tipologie di Inventario</h3>
      <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Modalità principali:</p>
      <ul style={listStyle}>
        <li style={listItemStyle}><span style={strongStyle}>Inventario Periodico</span>
          <ul style={nestedListStyle}>
            <li style={listItemStyle}>Conteggio completo a intervalli definiti (spesso annuale)</li>
            <li style={listItemStyle}>Tipicamente eseguito a fine esercizio</li>
          </ul>
        </li>
        <li style={listItemStyle}><span style={strongStyle}>Inventario Rotativo</span>
          <ul style={nestedListStyle}>
            <li style={listItemStyle}>Conteggio di una parte del magazzino a intervalli regolari</li>
            <li style={listItemStyle}>Distribuzione dell'attività durante l'anno</li>
            <li style={listItemStyle}>Possibilità di focus su articoli ad alto valore o alta rotazione</li>
          </ul>
        </li>
      </ul>

      <h3 style={subSectionTitleStyle}>Processo di Inventario</h3>
      <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Fasi principali:</p>
      <ul style={listStyle}>
        <li style={listItemStyle}><span style={strongStyle}>Preparazione</span>
          <ul style={nestedListStyle}>
            <li style={listItemStyle}>Creazione documento di inventario</li>
            <li style={listItemStyle}>Stampa documenti di conteggio</li>
            <li style={listItemStyle}>Organizzazione attività di conteggio "cieco" (senza visualizzare la quantità a sistema)</li>
          </ul>
        </li>
        <li style={listItemStyle}><span style={strongStyle}>Esecuzione</span>
          <ul style={nestedListStyle}>
            <li style={listItemStyle}>Conteggio fisico delle giacenze</li>
            <li style={listItemStyle}>Registrazione risultati (possibile tramite transazione MI10)</li>
          </ul>
        </li>
        <li style={listItemStyle}><span style={strongStyle}>Analisi differenze</span>
          <ul style={nestedListStyle}>
            <li style={listItemStyle}>Controlli sulle differenze inventariali basati su parametri di customizing</li>
            <li style={listItemStyle}>Possibilità di riconteggio per differenze significative</li>
          </ul>
        </li>
        <li style={listItemStyle}><span style={strongStyle}>Registrazione</span>
          <ul style={nestedListStyle}>
            <li style={listItemStyle}>Creazione documenti materiale per rettificare le giacenze</li>
            <li style={listItemStyle}>Utilizzo tipi movimento 701 (incremento) e 702 (decremento)</li>
            <li style={listItemStyle}>Impatto contabile delle differenze inventariali</li>
          </ul>
        </li>
      </ul>

      <h3 style={subSectionTitleStyle}>Carico Iniziale Giacenze</h3>
      <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>In sistema nuovo:</p>
      <ul style={listStyle}>
        <li style={listItemStyle}>Utilizzo tipo movimento 561 (Entrata per inventario)</li>
        <li style={listItemStyle}>Conti contabili diversi rispetto alle rettifiche inventariali standard</li>
        <li style={listItemStyle}>Parte cruciale della fase di migrazione dati in un nuovo sistema</li>
      </ul>
    </div>
  )}
</div>

{/* Sezione: Extended Warehouse Management (EWM) */}
<div style={sectionStyle}>
  <div 
    style={sectionHeaderStyle}
    onClick={() => toggleSection('sectionEWM')}
  >
    <h2 style={sectionTitleStyle}>Extended Warehouse Management (EWM)</h2>
    <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'sectionEWM' ? '▼' : '▶'}</span>
  </div>
  
  {activeSection === 'sectionEWM' && (
    <div style={sectionContentStyle}>
      <h3 style={subSectionTitleStyle}>Introduzione a SAP EWM</h3>
      <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Concetti chiave:</p>
      <ul style={listStyle}>
        <li style={listItemStyle}>Modulo principale di SAP per la gestione dei magazzini fisici</li>
        <li style={listItemStyle}>Soluzione su cui SAP sta investendo maggiormente dal punto di vista commerciale</li>
        <li style={listItemStyle}>Disponibile in diverse licenze (Basic ed Extended)</li>
      </ul>

      <h3 style={subSectionTitleStyle}>Implementazioni</h3>
      <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Modalità di implementazione:</p>
      <ul style={listStyle}>
        <li style={listItemStyle}><span style={strongStyle}>Decentralizzata</span>
          <ul style={nestedListStyle}>
            <li style={listItemStyle}>EWM installato su sistema separato (database diverso) da SAP S/4HANA</li>
            <li style={listItemStyle}>Adatta per aziende di grandi dimensioni con elevati volumi di dati</li>
            <li style={listItemStyle}>Richiede configurazione dell'interfacciamento tra sistemi</li>
          </ul>
        </li>
        <li style={listItemStyle}><span style={strongStyle}>Embedded</span>
          <ul style={nestedListStyle}>
            <li style={listItemStyle}>EWM integrato direttamente in SAP S/4HANA (stesso database)</li>
            <li style={listItemStyle}>Soluzione più comune per aziende italiane di medie dimensioni</li>
            <li style={listItemStyle}>Anagrafiche materiali condivise tra MM ed EWM</li>
          </ul>
        </li>
      </ul>

      <h3 style={subSectionTitleStyle}>Struttura del Magazzino</h3>
      <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Gerarchia organizzativa:</p>
      <ul style={listStyle}>
        <li style={listItemStyle}><span style={strongStyle}>Numero di Magazzino (Warehouse Number)</span>
          <ul style={nestedListStyle}>
            <li style={listItemStyle}>Rappresenta un perimetro fisico (es. stabilimento)</li>
            <li style={listItemStyle}>Si collega ai magazzini logici definiti in MM</li>
          </ul>
        </li>
        <li style={listItemStyle}><span style={strongStyle}>Tipo Magazzino (Storage Type)</span>
          <ul style={nestedListStyle}>
            <li style={listItemStyle}>Raggruppa sezioni con comportamenti simili</li>
            <li style={listItemStyle}>Esempi: scaffali, stoccaggio a blocchi (pile di pallet)</li>
          </ul>
        </li>
        <li style={listItemStyle}><span style={strongStyle}>Area Magazzino (Storage Section)</span>
          <ul style={nestedListStyle}>
            <li style={listItemStyle}>Suddivisione di un tipo magazzino</li>
            <li style={listItemStyle}>Esempio: aree in base all'altezza (A, B, C) per gestire rotazione merce</li>
          </ul>
        </li>
        <li style={listItemStyle}><span style={strongStyle}>Ubicazione (Storage Bin)</span>
          <ul style={nestedListStyle}>
            <li style={listItemStyle}>Unità più piccola di stoccaggio</li>
            <li style={listItemStyle}>Posizione specifica dove viene stoccato un prodotto</li>
          </ul>
        </li>
      </ul>

      <h3 style={subSectionTitleStyle}>Elementi Cross-Process</h3>
      <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Concetti fondamentali:</p>
      <ul style={listStyle}>
        <li style={listItemStyle}><span style={strongStyle}>Richiesta di Magazzino (Warehouse Request)</span>
          <ul style={nestedListStyle}>
            <li style={listItemStyle}>Documento che abilita l'elaborazione delle attività di magazzino</li>
            <li style={listItemStyle}>Può derivare da ordini di acquisto o vendita</li>
          </ul>
        </li>
        <li style={listItemStyle}><span style={strongStyle}>Unità di Movimentazione (Handling Unit - HU)</span>
          <ul style={nestedListStyle}>
            <li style={listItemStyle}>Rappresenta fisicamente un pallet o contenitore con merce</li>
            <li style={listItemStyle}>Ogni HU ha un codice univoco in SAP</li>
            <li style={listItemStyle}>Facilita le movimentazioni logistiche</li>
          </ul>
        </li>
        <li style={listItemStyle}><span style={strongStyle}>Task di Magazzino (Warehouse Task)</span>
          <ul style={nestedListStyle}>
            <li style={listItemStyle}>Istruzione specifica per un operatore</li>
            <li style={listItemStyle}>Elemento base utilizzato nei terminali a radiofrequenza</li>
          </ul>
        </li>
        <li style={listItemStyle}><span style={strongStyle}>Ordine di Magazzino (Warehouse Order)</span>
          <ul style={nestedListStyle}>
            <li style={listItemStyle}>Raggruppa più task con caratteristiche simili</li>
            <li style={listItemStyle}>Facilita l'assegnazione e l'esecuzione delle attività</li>
          </ul>
        </li>
      </ul>

      <h3 style={subSectionTitleStyle}>Processi Principali</h3>
      <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Flussi operativi:</p>
      <ul style={listStyle}>
        <li style={listItemStyle}><span style={strongStyle}>Entrata Merci (Inbound)</span>
          <ul style={nestedListStyle}>
            <li style={listItemStyle}>Fornitura (Inbound Delivery) come punto di connessione tra MM ed EWM</li>
            <li style={listItemStyle}>Strategie di Immagazzinamento (Putaway Strategies) per determinare ubicazioni ottimali</li>
            <li style={listItemStyle}>Accettazione merce, controllo qualità, reimballaggio, stoccaggio</li>
          </ul>
        </li>
        <li style={listItemStyle}><span style={strongStyle}>Uscita Merci (Outbound)</span>
          <ul style={nestedListStyle}>
            <li style={listItemStyle}>Ordine di Consegna in Uscita (Outbound Delivery Order) come connessione con SD</li>
            <li style={listItemStyle}>Strategie di Prelievo (Stock Removal Strategies) come FIFO, LIFO, FEFO</li>
            <li style={listItemStyle}>Picking, packing, staging, loading e spedizione</li>
          </ul>
        </li>
        <li style={listItemStyle}><span style={strongStyle}>Processi Interni</span>
          <ul style={nestedListStyle}>
            <li style={listItemStyle}>Replenishment (Rifornimento) per mantenere livelli minimi di scorta</li>
            <li style={listItemStyle}>Movimenti Ad Hoc per riorganizzare il magazzino</li>
            <li style={listItemStyle}>Registrazioni di Modifica per cambiare caratteristiche dello stock</li>
          </ul>
        </li>
        <li style={listItemStyle}><span style={strongStyle}>Integrazione con Produzione</span>
          <ul style={nestedListStyle}>
            <li style={listItemStyle}>Approntamento Produzione (Production Staging)</li>
            <li style={listItemStyle}>Area Approntamento Produzione (PSA) come zona temporanea</li>
            <li style={listItemStyle}>Metodi di Approntamento per gestire flussi di materiali verso produzione</li>
          </ul>
        </li>
      </ul>

      <h3 style={subSectionTitleStyle}>Strumenti Operativi</h3>
      <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Interfacce principali:</p>
      <ul style={listStyle}>
        <li style={listItemStyle}><span style={strongStyle}>Monitor di Magazzino</span>
          <ul style={nestedListStyle}>
            <li style={listItemStyle}>Transazione /SCWM/MON per monitorare attività di magazzino</li>
            <li style={listItemStyle}>Visualizzazione forniture, ordini, task e stock</li>
          </ul>
        </li>
        <li style={listItemStyle}><span style={strongStyle}>Terminali a Radiofrequenza</span>
          <ul style={nestedListStyle}>
            <li style={listItemStyle}>Simulazione con transazione /SCWM/RFUI</li>
            <li style={listItemStyle}>Utilizzo di scanner per codici a barre di HU e ubicazioni</li>
          </ul>
        </li>
        <li style={listItemStyle}><span style={strongStyle}>SAP Fiori per EWM</span>
          <ul style={nestedListStyle}>
            <li style={listItemStyle}>App "Warehouse KPIs - Operations" per monitoraggio KPI</li>
            <li style={listItemStyle}>App dedicate per outbound e spedizioni</li>
          </ul>
        </li>
      </ul>

      <h3 style={subSectionTitleStyle}>Yard Management</h3>
      <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Gestione piazzali:</p>
      <ul style={listStyle}>
        <li style={listItemStyle}>Gestione dei piazzali e parcheggi camion</li>
        <li style={listItemStyle}>Possibile integrazione con sistemi di prenotazione online</li>
        <li style={listItemStyle}>Monitoraggio tempi di carico/scarico</li>
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
              {[...Array(11)].map((_, i) => (
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
        <p>© {new Date().getFullYear()} SAP ERP Documentation - Modulo MM</p>
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
    'Panoramica',
    'Struttura',
    'Anagrafica',
    'Ciclo Passivo',
    'Contratti',
    'Magazzino',
    'Intrastat',
    'Vertical.',
    'EWM',
    'Rilascio',
    'Transazioni'
  ];
  return titles[index-1] || `Sezione ${index}`;
}

export default MMDocumentation;