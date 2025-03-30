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