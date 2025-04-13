// src/pages/SDDocumentationPage.jsx
import React, { useState, useEffect } from 'react';

const SDDocumentationPage = () => {
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
              const sections = Array.from({length: 18}, (_, i) => `section${i+1}`);
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

      <h1 style={titleStyle}>Documentazione SAP S/4HANA - Modulo Sales & Distribution (SD)</h1>
      
      {/* Sezione 1: Architettura Organizzativa SAP */}
      <div style={sectionStyle}>
        <div 
          style={sectionHeaderStyle}
          onClick={() => toggleSection('section1')}
        >
          <h2 style={sectionTitleStyle}>1. Architettura Organizzativa SAP</h2>
          <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section1' ? '▼' : '▶'}</span>
        </div>
        
        {activeSection === 'section1' && (
          <div style={sectionContentStyle}>
            <h3 style={subSectionTitleStyle}>12.1 Determinazione Prezzi</h3>
            <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Architettura Complessa:</p>
            <ul style={listStyle}>
              <li style={listItemStyle}>Calcolo progressivo</li>
              <li style={listItemStyle}>Stratificazione condizioni</li>
              <li style={listItemStyle}>Personalizzazione spinta</li>
            </ul>

            <h3 style={subSectionTitleStyle}>12.2 Sequenze Accesso Avanzate</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Criteri gerarchici</li>
              <li style={listItemStyle}>Ricerca multi-livello</li>
              <li style={listItemStyle}>Prioritizzazione condizioni</li>
            </ul>

            <h3 style={subSectionTitleStyle}>12.3 Configurazioni Specifiche</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Prezzi per cliente</li>
              <li style={listItemStyle}>Sconti volume</li>
              <li style={listItemStyle}>Maggiorazioni</li>
              <li style={listItemStyle}>Condizioni temporanee</li>
            </ul>
          </div>
        )}
      </div>

    
      
      {/* Sezione 2: Anagrafica Clienti (Business Partner) */}
      <div style={sectionStyle}>
        <div 
          style={sectionHeaderStyle}
          onClick={() => toggleSection('section2')}
        >
          <h2 style={sectionTitleStyle}>2. Anagrafica Clienti (Business Partner)</h2>
          <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section2' ? '▼' : '▶'}</span>
        </div>
        
        {activeSection === 'section2' && (
          <div style={sectionContentStyle}>
            <h3 style={subSectionTitleStyle}>2.1 Modello Concettuale</h3>
            <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Principi Architetturali:</p>
            <ul style={listStyle}>
              <li style={listItemStyle}>Punto unico gestione dati</li>
              <li style={listItemStyle}>Superamento logiche frammentate</li>
              <li style={listItemStyle}>Integrazione multidimensionale</li>
            </ul>

            <h3 style={subSectionTitleStyle}>2.2 Tipologie Ruoli</h3>
            <ol style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>Ruolo Base (000000)</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Dati anagrafici generali</li>
                  <li style={listItemStyle}>Informazioni identificative</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Ruolo Societario (FLCU00)</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Gestione rapporti finanziari</li>
                  <li style={listItemStyle}>Definizione limite fido</li>
                  <li style={listItemStyle}>Condizioni pagamento</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Ruolo Vendite (FLCU01)</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Parametri commerciali specifici</li>
                  <li style={listItemStyle}>Condizioni di vendita personalizzate</li>
                  <li style={listItemStyle}>Gestione dettagliata delle politiche di vendita
                    <ul style={{paddingLeft: '2rem'}}>
                      <li style={listItemStyle}>Definizione Incoterms</li>
                      <li style={listItemStyle}>Condizioni di spedizione</li>
                      <li style={listItemStyle}>Divisione di spedizione</li>
                      <li style={listItemStyle}>Gestione listini dedicati</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Ruolo Credito (UKM000)</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Valutazione rischio</li>
                  <li style={listItemStyle}>Monitoraggio esposizione</li>
                  <li style={listItemStyle}>Classificazione affidabilità creditizia
                    <ul style={{paddingLeft: '2rem'}}>
                      <li style={listItemStyle}>Definizione classe di rischio</li>
                      <li style={listItemStyle}>Impostazione limite di credito</li>
                      <li style={listItemStyle}>Controllo affidabilità cliente</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ol>

            <h3 style={subSectionTitleStyle}>2.3 Attributi Gestibili</h3>
            <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Dimensioni Anagrafiche Principali:</p>
            <ul style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>Dati identificativi generali</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Ragione sociale</li>
                  <li style={listItemStyle}>Sede legale</li>
                  <li style={listItemStyle}>Partita IVA/Codice Fiscale</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Recapiti e Contatti</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Indirizzo</li>
                  <li style={listItemStyle}>Numeri di telefono</li>
                  <li style={listItemStyle}>Indirizzi email</li>
                  <li style={listItemStyle}>Referenti aziendali</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Coordinate Bancarie</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Istituto di credito</li>
                  <li style={listItemStyle}>Coordinate IBAN</li>
                  <li style={listItemStyle}>Modalità di pagamento</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Classificazioni Interne</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Categoria cliente</li>
                  <li style={listItemStyle}>Gruppo statistico</li>
                  <li style={listItemStyle}>Profilo commerciale</li>
                </ul>
              </li>
            </ul>

            <p style={{fontWeight: 'bold', marginBottom: '0.5rem', marginTop: '1rem'}}>Ambiti Gestionali Dettagliati:</p>
            <ol style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>Fatturazione</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Definizione modalità fatturazione</li>
                  <li style={listItemStyle}>Impostazione gruppo contabile</li>
                  <li style={listItemStyle}>Gestione valuta fatturazione</li>
                  <li style={listItemStyle}>Definizione termini di pagamento</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Spedizione</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Configurazione indirizzo di consegna</li>
                  <li style={listItemStyle}>Selezione vettori</li>
                  <li style={listItemStyle}>Definizione condizioni di spedizione</li>
                  <li style={listItemStyle}>Gestione Incoterms</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Condizioni di Pagamento</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Termini di pagamento</li>
                  <li style={listItemStyle}>Scontistica</li>
                  <li style={listItemStyle}>Gestione anticipi/dilazioni</li>
                  <li style={listItemStyle}>Definizione metodi di pagamento</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Qualifica Fornitore/Cliente</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Classificazione strategica</li>
                  <li style={listItemStyle}>Valutazione performance</li>
                  <li style={listItemStyle}>Definizione status commerciale</li>
                  <li style={listItemStyle}>Gestione contratti quadro</li>
                </ul>
              </li>
            </ol>
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
            <h3 style={subSectionTitleStyle}>3.1 Material Master</h3>
            <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Architettura Multivista:</p>
            <ul style={listStyle}>
              <li style={listItemStyle}>Aggregazione centralizzata informazioni</li>
              <li style={listItemStyle}>Viste specializzate per funzione</li>
              <li style={listItemStyle}>Codice univoco per ogni materiale</li>
            </ul>

            <p style={{fontWeight: 'bold', marginBottom: '0.5rem', marginTop: '1rem'}}>Viste Principali:</p>
            <ol style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>Vista Base</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Descrizione generale del materiale</li>
                  <li style={listItemStyle}>Classificazione merceologica</li>
                  <li style={listItemStyle}>Dati identificativi univoci</li>
                  <li style={listItemStyle}>Unità di misura base</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Vista Acquisti</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Informazioni sui fornitori</li>
                  <li style={listItemStyle}>Condizioni di approvvigionamento</li>
                  <li style={listItemStyle}>Prezzi di acquisto</li>
                  <li style={listItemStyle}>Parametri di ordinazione</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Vista Vendite</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Parametri commerciali specifici</li>
                  <li style={listItemStyle}>Listini e condizioni di vendita</li>
                  <li style={listItemStyle}>Vincoli distributivi</li>
                  <li style={listItemStyle}>Informazioni per organizzazione commerciale</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Vista Contabile</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Valorizzazioni economiche</li>
                  <li style={listItemStyle}>Centri di costo associati</li>
                  <li style={listItemStyle}>Classificazioni contabili</li>
                  <li style={listItemStyle}>Parametri di registrazione</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Vista Logistica</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Gestione giacenze</li>
                  <li style={listItemStyle}>Parametri di stoccaggio</li>
                  <li style={listItemStyle}>Informazioni su magazzino</li>
                  <li style={listItemStyle}>Controllo disponibilità</li>
                </ul>
              </li>
            </ol>

            <h3 style={subSectionTitleStyle}>3.2 Parametri Vendita Materiali</h3>
            <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Configurazioni Specifiche:</p>
            <ul style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>Unità di Misura</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}><b>Unità Base</b>: standard di riferimento del materiale</li>
                  <li style={listItemStyle}><b>Unità Alternative</b>: conversioni dinamiche
                    <ul style={{paddingLeft: '2rem'}}>
                      <li style={listItemStyle}>Esempi:
                        <ul style={{paddingLeft: '1rem'}}>
                          <li style={listItemStyle}>Vendita in colli</li>
                          <li style={listItemStyle}>Stoccaggio in kg</li>
                          <li style={listItemStyle}>Fatturazione in pezzi</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li style={listItemStyle}><b>Modalità Operative</b>:
                    <ul style={{paddingLeft: '2rem'}}>
                      <li style={listItemStyle}>Conversioni automatiche</li>
                      <li style={listItemStyle}>Controlli di congruenza</li>
                      <li style={listItemStyle}>Arrotondamenti configurabili</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Gruppo Merceologico</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}><b>Criteri di Raggruppamento</b>:
                    <ul style={{paddingLeft: '2rem'}}>
                      <li style={listItemStyle}>Tipologia prodotto</li>
                      <li style={listItemStyle}>Origine merceologica</li>
                      <li style={listItemStyle}>Destinazione commerciale</li>
                    </ul>
                  </li>
                  <li style={listItemStyle}><b>Funzioni Gestionali</b>:
                    <ul style={{paddingLeft: '2rem'}}>
                      <li style={listItemStyle}>Determinazione automatica prezzi</li>
                      <li style={listItemStyle}>Applicazione scontistiche</li>
                      <li style={listItemStyle}>Reportistica strategica</li>
                    </ul>
                  </li>
                  <li style={listItemStyle}><b>Parametri di Configurazione</b>:
                    <ul style={{paddingLeft: '2rem'}}>
                      <li style={listItemStyle}>Codifica gerarchica</li>
                      <li style={listItemStyle}>Associazione policy commerciali</li>
                      <li style={listItemStyle}>Gestione tassonomica</li>
                    </ul>
                  </li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Classificazioni Fiscali</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}><b>Tipologie di Inquadramento</b>:
                    <ul style={{paddingLeft: '2rem'}}>
                      <li style={listItemStyle}><b>Classificazione IVA</b>
                        <ul style={{paddingLeft: '1rem'}}>
                          <li style={listItemStyle}>Codici esenzione</li>
                          <li style={listItemStyle}>Regimi speciali</li>
                          <li style={listItemStyle}>Gestione transazioni intracomunitarie</li>
                        </ul>
                      </li>
                      <li style={listItemStyle}><b>Codici Tariffari</b>
                        <ul style={{paddingLeft: '1rem'}}>
                          <li style={listItemStyle}>Classificazione doganale</li>
                          <li style={listItemStyle}>Gestione import/export</li>
                          <li style={listItemStyle}>Determinazione dazi</li>
                        </ul>
                      </li>
                    </ul>
                  </li>
                  <li style={listItemStyle}><b>Meccanismi Operativi</b>:
                    <ul style={{paddingLeft: '2rem'}}>
                      <li style={listItemStyle}>Associazione automatica</li>
                      <li style={listItemStyle}>Controlli di compliance</li>
                      <li style={listItemStyle}>Reportistica fiscale</li>
                    </ul>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Sezione 4: Info-Record Cliente/Materiale */}
      <div style={sectionStyle}>
        <div 
          style={sectionHeaderStyle}
          onClick={() => toggleSection('section4')}
        >
          <h2 style={sectionTitleStyle}>4. Info-Record Cliente/Materiale</h2>
          <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section4' ? '▼' : '▶'}</span>
        </div>
        
        {activeSection === 'section4' && (
          <div style={sectionContentStyle}>
            <h3 style={subSectionTitleStyle}>4.1 Architettura Funzionale</h3>
            <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Concetto di Collegamento Specifico:</p>
            <ul style={listStyle}>
              <li style={listItemStyle}>Connessione dedicata tra:
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Cliente specifico</li>
                  <li style={listItemStyle}>Materiale specifico</li>
                </ul>
              </li>
            </ul>

            <p style={{fontWeight: 'bold', marginBottom: '0.5rem', marginTop: '1rem'}}>Componenti Gestionali:</p>
            <ul style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>Codice Articolo Cliente</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Riferimento esterno</li>
                  <li style={listItemStyle}>Personalizzazione denominazione</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Priorità Consegna</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Parametrizzazione urgenza</li>
                  <li style={listItemStyle}>Logiche di schedulazione</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Testi Specifici</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Note personalizzate</li>
                  <li style={listItemStyle}>Comunicazioni dedicate</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Modifiche Posizione Documento</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Personalizzazione workflow</li>
                  <li style={listItemStyle}>Configurazioni speciali</li>
                </ul>
              </li>
            </ul>

            <h3 style={subSectionTitleStyle}>4.2 Modalità Operative</h3>
            <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Meccanismi di Inserimento:</p>
            <ul style={listStyle}>
              <li style={listItemStyle}>Creazione manuale</li>
              <li style={listItemStyle}>Importazione massiva</li>
              <li style={listItemStyle}>Generazione automatica</li>
            </ul>

            <p style={{fontWeight: 'bold', marginBottom: '0.5rem', marginTop: '1rem'}}>Vincoli e Controlli:</p>
            <ul style={listStyle}>
              <li style={listItemStyle}>Unicità record</li>
              <li style={listItemStyle}>Coerenza informativa</li>
              <li style={listItemStyle}>Storicizzazione modifiche</li>
            </ul>
          </div>
        )}
      </div>

      {/* Sezione 5: Pricing Avanzato */}
      <div style={sectionStyle}>
        <div 
          style={sectionHeaderStyle}
          onClick={() => toggleSection('section5')}
        >
          <h2 style={sectionTitleStyle}>5. Pricing Avanzato</h2>
          <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section5' ? '▼' : '▶'}</span>
        </div>
        
        {activeSection === 'section5' && (
          <div style={sectionContentStyle}>
            <h3 style={subSectionTitleStyle}>5.1 Architettura Schema Prezzi</h3>
            <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Logica Compositiva:</p>
            <ul style={listStyle}>
              <li style={listItemStyle}>Sequenza Condizioni
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Gerarchia algoritmica</li>
                  <li style={listItemStyle}>Calcolo progressivo</li>
                </ul>
              </li>
            </ul>

            <p style={{fontWeight: 'bold', marginBottom: '0.5rem', marginTop: '1rem'}}>Tipologie Condizioni:</p>
            <ol style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>Prezzo Base (TC01)</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Valore iniziale</li>
                  <li style={listItemStyle}>Punto di partenza calcoli</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Sconti (TC02)</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Riduzioni percentuali</li>
                  <li style={listItemStyle}>Sconti a valore</li>
                  <li style={listItemStyle}>Stratificazione scontistica</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Maggiorazioni (TC03)</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Incrementi</li>
                  <li style={listItemStyle}>Costi aggiuntivi</li>
                  <li style={listItemStyle}>Personalizzazioni</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Trasporti (TC04)</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Costi spedizione</li>
                  <li style={listItemStyle}>Logiche di calcolo</li>
                  <li style={listItemStyle}>Differenziazione vettori</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Altri Costi (TC05)</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Voci accessorie</li>
                  <li style={listItemStyle}>Personalizzazioni gestionali</li>
                </ul>
              </li>
            </ol>

            <h3 style={subSectionTitleStyle}>5.2 Sequenze di Accesso</h3>
            <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Strategia di Ricerca:</p>
            <ul style={listStyle}>
              <li style={listItemStyle}>Gerarchia di Recupero
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Dal più specifico</li>
                  <li style={listItemStyle}>Al più generico</li>
                  <li style={listItemStyle}>Criteri di prioritizzazione</li>
                </ul>
              </li>
            </ul>

            <p style={{fontWeight: 'bold', marginBottom: '0.5rem', marginTop: '1rem'}}>Logiche di Calcolo:</p>
            <ul style={listStyle}>
              <li style={listItemStyle}>Ricerca esclusiva</li>
              <li style={listItemStyle}>Ricerca cumulativa</li>
              <li style={listItemStyle}>Parametrizzazione dinamica</li>
            </ul>

            <h3 style={subSectionTitleStyle}>5.3 Parametri Configurazione</h3>
            <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Criteri di Determinazione:</p>
            <ul style={listStyle}>
              <li style={listItemStyle}>Dimensioni Ricerca
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Cliente</li>
                  <li style={listItemStyle}>Materiale</li>
                  <li style={listItemStyle}>Organizzazione</li>
                  <li style={listItemStyle}>Date validità</li>
                </ul>
              </li>
            </ul>

            <p style={{fontWeight: 'bold', marginBottom: '0.5rem', marginTop: '1rem'}}>Meccanismi Avanzati:</p>
            <ul style={listStyle}>
              <li style={listItemStyle}>Scaglionamenti</li>
              <li style={listItemStyle}>Condizioni temporanee</li>
              <li style={listItemStyle}>Personalizzazioni complesse</li>
            </ul>
          </div>
        )}
      </div>

      {/* Sezione 6: Ordini di Vendita Evoluti */}
      <div style={sectionStyle}>
        <div 
          style={sectionHeaderStyle}
          onClick={() => toggleSection('section6')}
        >
          <h2 style={sectionTitleStyle}>6. Ordini di Vendita Evoluti</h2>
          <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section6' ? '▼' : '▶'}</span>
        </div>
        
        {activeSection === 'section6' && (
          <div style={sectionContentStyle}>
            <h3 style={subSectionTitleStyle}>6.1 Architettura Documento</h3>
            <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Componenti Strutturali:</p>
            <ul style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>Testata</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Riferimenti generali</li>
                  <li style={listItemStyle}>Condizioni commerciali</li>
                  <li style={listItemStyle}>Parametri spedizione</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Posizioni</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Dettaglio prodotti</li>
                  <li style={listItemStyle}>Configurazioni specifiche</li>
                  <li style={listItemStyle}>Vincoli tecnici</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Schedulazione</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Date consegna</li>
                  <li style={listItemStyle}>Quantità</li>
                  <li style={listItemStyle}>Logiche di pianificazione</li>
                </ul>
              </li>
            </ul>

            <h3 style={subSectionTitleStyle}>6.2 Tipologie Documento</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Ordine Standard</li>
              <li style={listItemStyle}>Ordine Quadro</li>
              <li style={listItemStyle}>Ordine Programmato</li>
              <li style={listItemStyle}>Ordine Spot</li>
              <li style={listItemStyle}>Ordine Campionatura</li>
            </ul>

            <h3 style={subSectionTitleStyle}>6.3 Controlli e Validazioni</h3>
            <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Meccanismi di Verifica:</p>
            <ul style={listStyle}>
              <li style={listItemStyle}>Completezza informativa</li>
              <li style={listItemStyle}>Disponibilità materiali</li>
              <li style={listItemStyle}>Limiti di credito</li>
              <li style={listItemStyle}>Coerenza tecnica</li>
            </ul>

            <p style={{fontWeight: 'bold', marginBottom: '0.5rem', marginTop: '1rem'}}>Gestione Incompletezze:</p>
            <ul style={listStyle}>
              <li style={listItemStyle}>Log diagnostici</li>
              <li style={listItemStyle}>Segnalazione campi mancanti</li>
              <li style={listItemStyle}>Workflow di completamento</li>
            </ul>
          </div>
        )}
      </div>

      {/* Sezione 7: Personalizzazione Avanzata */}
      <div style={sectionStyle}>
        <div 
          style={sectionHeaderStyle}
          onClick={() => toggleSection('section7')}
        >
          <h2 style={sectionTitleStyle}>7. Personalizzazione Avanzata</h2>
          <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section7' ? '▼' : '▶'}</span>
        </div>
        
        {activeSection === 'section7' && (
          <div style={sectionContentStyle}>
            <h3 style={subSectionTitleStyle}>7.1 Customizing</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Definizione Tipi Documento</li>
              <li style={listItemStyle}>Categorie Posizione</li>
              <li style={listItemStyle}>Schemi Prezzi Dedicati</li>
              <li style={listItemStyle}>Workflow Personalizzati</li>
              <li style={listItemStyle}>Controlli Validazione Specializzati</li>
            </ul>

            <h3 style={subSectionTitleStyle}>7.2 Strumenti</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>GUI Tradizionale SAP</li>
              <li style={listItemStyle}>APP Fiori</li>
              <li style={listItemStyle}>Transazioni Specializzate</li>
              <li style={listItemStyle}>Ambienti di Sviluppo ABAP</li>
            </ul>
          </div>
        )}
      </div>

      {/* Sezione 8: Funzioni Partner Approfondite */}
      <div style={sectionStyle}>
        <div 
          style={sectionHeaderStyle}
          onClick={() => toggleSection('section8')}
        >
          <h2 style={sectionTitleStyle}>8. Funzioni Partner Approfondite</h2>
          <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section8' ? '▼' : '▶'}</span>
        </div>
        
        {activeSection === 'section8' && (
          <div style={sectionContentStyle}>
            <h3 style={subSectionTitleStyle}>8.1 Concetto di Funzione Partner</h3>
            <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Definizione Strategica:</p>
            <ul style={listStyle}>
              <li style={listItemStyle}>Identificazione ruoli specifici nel processo commerciale</li>
              <li style={listItemStyle}>Mapping completo delle responsabilità</li>
            </ul>

            <h3 style={subSectionTitleStyle}>8.2 Tipologie di Partner</h3>
            <ol style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>Committente (AG)</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Soggetto che origina l'ordine</li>
                  <li style={listItemStyle}>Responsabile contrattuale primario</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Destinatario Merce (WE)</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Soggetto che riceve fisicamente la merce</li>
                  <li style={listItemStyle}>Può differire dal committente</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Destinatario Fattura (RG)</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Soggetto intestatario della fattura</li>
                  <li style={listItemStyle}>Responsabile pagamento</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Agente (ZA)</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Rappresentante commerciale</li>
                  <li style={listItemStyle}>Gestione relazione cliente</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Pagatore (BP)</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Soggetto che effettua il pagamento</li>
                  <li style={listItemStyle}>Può essere differente dal committente</li>
                </ul>
              </li>
            </ol>

            <h3 style={subSectionTitleStyle}>8.3 Meccanismi di Determinazione</h3>
            <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Logiche di Assegnazione:</p>
            <ul style={listStyle}>
              <li style={listItemStyle}>Automatica da anagrafica</li>
              <li style={listItemStyle}>Manuale in fase di documento</li>
              <li style={listItemStyle}>Configurazioni predefinite</li>
            </ul>

            <p style={{fontWeight: 'bold', marginBottom: '0.5rem', marginTop: '1rem'}}>Vincoli e Controlli:</p>
            <ul style={listStyle}>
              <li style={listItemStyle}>Coerenza ruoli</li>
              <li style={listItemStyle}>Validazione anagrafica</li>
              <li style={listItemStyle}>Tracciabilità assegnazioni</li>
            </ul>
          </div>
        )}
      </div>

      {/* Sezione 9: Gestione Testi nei Documenti */}
      <div style={sectionStyle}>
        <div 
          style={sectionHeaderStyle}
          onClick={() => toggleSection('section9')}
        >
          <h2 style={sectionTitleStyle}>9. Gestione Testi nei Documenti</h2>
          <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section9' ? '▼' : '▶'}</span>
        </div>
        
        {activeSection === 'section9' && (
          <div style={sectionContentStyle}>
            <h3 style={subSectionTitleStyle}>9.1 Tipologie Testi</h3>
            <ol style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>Testi Intestazione</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Informazioni generali documento</li>
                  <li style={listItemStyle}>Note introduttive</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Testi Posizione</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Dettagli specifici articolo</li>
                  <li style={listItemStyle}>Descrizioni tecniche</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Testi Stampa</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Contenuti per documentazione</li>
                  <li style={listItemStyle}>Informazioni cliente</li>
                </ul>
              </li>
            </ol>

            <h3 style={subSectionTitleStyle}>9.2 Modalità Inserimento</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Manuale</li>
              <li style={listItemStyle}>Automatico da anagrafica</li>
              <li style={listItemStyle}>Template predefiniti</li>
              <li style={listItemStyle}>Personalizzazione libera</li>
            </ul>

            <h3 style={subSectionTitleStyle}>9.3 Classificazione Testi</h3>
            <ol style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>Interno</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Note operative</li>
                  <li style={listItemStyle}>Informazioni interne</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Esterno</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Comunicazioni cliente</li>
                  <li style={listItemStyle}>Documenti commerciali</li>
                </ul>
              </li>
            </ol>
          </div>
        )}
      </div>

      {/* Sezione 10: Log Dati Incompleti */}
      <div style={sectionStyle}>
        <div 
          style={sectionHeaderStyle}
          onClick={() => toggleSection('section10')}
        >
          <h2 style={sectionTitleStyle}>10. Log Dati Incompleti</h2>
          <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section10' ? '▼' : '▶'}</span>
        </div>
        
        {activeSection === 'section10' && (
          <div style={sectionContentStyle}>
            <h3 style={subSectionTitleStyle}>10.1 Architettura di Controllo</h3>
            <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Meccanismi di Rilevazione:</p>
            <ul style={listStyle}>
              <li style={listItemStyle}>Verifica campi obbligatori</li>
              <li style={listItemStyle}>Segnalazione incompletezze</li>
              <li style={listItemStyle}>Blocco salvataggio</li>
            </ul>

            <h3 style={subSectionTitleStyle}>10.2 Tipologie Incompletezze</h3>
            <ol style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>Testata Documento</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Dati anagrafici mancanti</li>
                  <li style={listItemStyle}>Condizioni commerciali incomplete</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Posizioni Documento</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Dettagli articolo non compilati</li>
                  <li style={listItemStyle}>Quantità/prezzi non definiti</li>
                </ul>
              </li>
            </ol>

            <h3 style={subSectionTitleStyle}>10.3 Gestione Workflow</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Tracciamento errori</li>
              <li style={listItemStyle}>Procedura completamento</li>
              <li style={listItemStyle}>Storicizzazione tentativi</li>
            </ul>
          </div>
        )}
      </div>

      {/* Sezione 11: Schedulazione Avanzata */}
      <div style={sectionStyle}>
        <div 
          style={sectionHeaderStyle}
          onClick={() => toggleSection('section11')}
        >
          <h2 style={sectionTitleStyle}>11. Schedulazione Avanzata</h2>
          <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section11' ? '▼' : '▶'}</span>
        </div>
        
        {activeSection === 'section11' && (
          <div style={sectionContentStyle}>
            <h3 style={subSectionTitleStyle}>11.1 Tipologie Schedulazione</h3>
            <ol style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>Backward Scheduling</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Calcolo a ritroso dalla data consegna</li>
                  <li style={listItemStyle}>Definizione tempi produzione/preparazione</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Forward Scheduling</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Calcolo in avanti dalla data ordine</li>
                  <li style={listItemStyle}>Individuazione prima data disponibile</li>
                </ul>
              </li>
            </ol>

            <h3 style={subSectionTitleStyle}>11.2 Parametri Temporali</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Tempo transito</li>
              <li style={listItemStyle}>Tempo caricamento</li>
              <li style={listItemStyle}>Tempo prelievo/imballaggio</li>
              <li style={listItemStyle}>Lead time trasporto</li>
            </ul>

            <h3 style={subSectionTitleStyle}>11.3 Tipi Fabbisogno</h3>
            <ol style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>Fabbisogno Diretto</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Collegato a ordine specifico</li>
                  <li style={listItemStyle}>Immediata programmazione</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Fabbisogno Indiretto</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Previsionale</li>
                  <li style={listItemStyle}>Pianificazione aggregata</li>
                </ul>
              </li>
            </ol>
          </div>
        )}
        </div>

{/* Sezione 12: Pricing Dettagliato */}
<div style={sectionStyle}>
  <div 
    style={sectionHeaderStyle}
    onClick={() => toggleSection('section12')}
  >
    <h2 style={sectionTitleStyle}>12. Pricing Dettagliato</h2>
    <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section12' ? '▼' : '▶'}</span>
  </div>
  
  {activeSection === 'section12' && (
    <div style={sectionContentStyle}>
      <h3 style={subSectionTitleStyle}>12.1 Determinazione Prezzi</h3>
      <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Architettura Complessa:</p>
      <ul style={listStyle}>
        <li style={listItemStyle}>Calcolo progressivo</li>
        <li style={listItemStyle}>Stratificazione condizioni</li>
        <li style={listItemStyle}>Personalizzazione spinta</li>
      </ul>

      <h3 style={subSectionTitleStyle}>12.2 Sequenze Accesso Avanzate</h3>
      <ul style={listStyle}>
        <li style={listItemStyle}>Criteri gerarchici</li>
        <li style={listItemStyle}>Ricerca multi-livello</li>
        <li style={listItemStyle}>Prioritizzazione condizioni</li>
      </ul>

      <h3 style={subSectionTitleStyle}>12.3 Configurazioni Specifiche</h3>
      <ul style={listStyle}>
        <li style={listItemStyle}>Prezzi per cliente</li>
        <li style={listItemStyle}>Sconti volume</li>
        <li style={listItemStyle}>Maggiorazioni</li>
        <li style={listItemStyle}>Condizioni temporanee</li>
      </ul>
    </div>
  )}
</div>

{/* Sezione 13: Esercitazioni Pratiche */}
<div style={sectionStyle}>
<div 
  style={sectionHeaderStyle}
  onClick={() => toggleSection('section13')}
>
  <h2 style={sectionTitleStyle}>13. Esercitazioni Pratiche</h2>
  <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section13' ? '▼' : '▶'}</span>
</div>

{activeSection === 'section13' && (
  <div style={sectionContentStyle}>
    <h3 style={subSectionTitleStyle}>13.1 Scenari Operativi</h3>
    <ol style={listStyle}>
      <li style={listItemStyle}><span style={strongStyle}>Creazione Business Partner</span>
        <ul style={nestedListStyle}>
          <li style={listItemStyle}>Inserimento anagrafica</li>
          <li style={listItemStyle}>Configurazione ruoli</li>
          <li style={listItemStyle}>Definizione attributi</li>
        </ul>
      </li>
      <li style={listItemStyle}><span style={strongStyle}>Definizione Materiali</span>
        <ul style={nestedListStyle}>
          <li style={listItemStyle}>Classificazione</li>
          <li style={listItemStyle}>Parametrizzazione vendita</li>
          <li style={listItemStyle}>Listini associati</li>
        </ul>
      </li>
      <li style={listItemStyle}><span style={strongStyle}>Costruzione Ordine Completo</span>
        <ul style={nestedListStyle}>
          <li style={listItemStyle}>Selezione cliente</li>
          <li style={listItemStyle}>Inserimento posizioni</li>
          <li style={listItemStyle}>Applicazione condizioni prezzo</li>
          <li style={listItemStyle}>Schedulazione consegne</li>
        </ul>
      </li>
    </ol>

    <h3 style={subSectionTitleStyle}>13.2 Casi Studio</h3>
    <ul style={listStyle}>
      <li style={listItemStyle}>Gestione ordini complessi</li>
      <li style={listItemStyle}>Personalizzazioni specifiche</li>
      <li style={listItemStyle}>Ottimizzazione processi</li>
    </ul>
  </div>
)}
</div>


      {/* Sezione 14: Best Practices Implementative */}
      <div style={sectionStyle}>
        <div 
          style={sectionHeaderStyle}
          onClick={() => toggleSection('section14')}
        >
          <h2 style={sectionTitleStyle}>14. Best Practices Implementative</h2>
          <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section14' ? '▼' : '▶'}</span>
        </div>
        
        {activeSection === 'section14' && (
          <div style={sectionContentStyle}>
            <h3 style={subSectionTitleStyle}>14.1 Strategie di Configurazione</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Minimizzazione personalizzazioni</li>
              <li style={listItemStyle}>Standard SAP come riferimento</li>
              <li style={listItemStyle}>Allineamento best practice</li>
            </ul>

            <h3 style={subSectionTitleStyle}>14.2 Performance Optimization</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Ottimizzazione query</li>
              <li style={listItemStyle}>Gestione indici</li>
              <li style={listItemStyle}>Manutenzione periodica</li>
            </ul>
          </div>
        )}
      </div>

      {/* Sezione 15: Evoluzione Tecnologica */}
      <div style={sectionStyle}>
        <div 
          style={sectionHeaderStyle}
          onClick={() => toggleSection('section15')}
        >
          <h2 style={sectionTitleStyle}>15. Evoluzione Tecnologica</h2>
          <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section15' ? '▼' : '▶'}</span>
        </div>
        
        {activeSection === 'section15' && (
          <div style={sectionContentStyle}>
            <h3 style={subSectionTitleStyle}>15.1 S/4 HANA Roadmap</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Architettura in-memory</li>
              <li style={listItemStyle}>Semplificazione modelli</li>
              <li style={listItemStyle}>Real-time analytics</li>
            </ul>

            <h3 style={subSectionTitleStyle}>15.2 Trend Futuri</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Intelligenza Artificiale</li>
              <li style={listItemStyle}>Machine Learning</li>
              <li style={listItemStyle}>Predictive Sales</li>
            </ul>
          </div>
        )}
      </div>

      {/* Sezione 16: Offerta Commerciale */}
      <div style={sectionStyle}>
        <div 
          style={sectionHeaderStyle}
          onClick={() => toggleSection('section16')}
        >
          <h2 style={sectionTitleStyle}>16. Offerta Commerciale</h2>
          <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section16' ? '▼' : '▶'}</span>
        </div>
        
        {activeSection === 'section16' && (
          <div style={sectionContentStyle}>
            <h3 style={subSectionTitleStyle}>16.1 Definizione Concettuale</h3>
            <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Natura Giuridica:</p>
            <ul style={listStyle}>
              <li style={listItemStyle}>Proposta vincolante verso il cliente</li>
              <li style={listItemStyle}>Definizione specifica di:
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Prodotti/servizi</li>
                  <li style={listItemStyle}>Prezzi</li>
                  <li style={listItemStyle}>Condizioni temporali</li>
                </ul>
              </li>
            </ul>

            <h3 style={subSectionTitleStyle}>16.2 Elementi Minimi Richiesti</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>Committente</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Identificazione cliente</li>
                  <li style={listItemStyle}>Riferimenti anagrafici</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Materiale</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Dettaglio prodotti</li>
                  <li style={listItemStyle}>Specifiche tecniche</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Quantità</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Definizione volumi</li>
                  <li style={listItemStyle}>Unità di misura</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Data Validità</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Periodo proposta</li>
                  <li style={listItemStyle}>Termine accettazione</li>
                </ul>
              </li>
            </ul>

            <h3 style={subSectionTitleStyle}>16.3 Workflow Gestionale</h3>
            <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Ciclo di Vita Offerta:</p>
            <ol style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>Creazione</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Inserimento dati</li>
                  <li style={listItemStyle}>Configurazione condizioni</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Accettazione</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Conversione in ordine</li>
                  <li style={listItemStyle}>Conferma cliente</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Rifiuto</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Chiusura documento</li>
                  <li style={listItemStyle}>Registrazione motivazione</li>
                </ul>
              </li>
            </ol>

            <h3 style={subSectionTitleStyle}>16.4 Strumenti Operativi</h3>
            <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Interfacce:</p>
            <ul style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>APP Fiori</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Gestione offerte</li>
                  <li style={listItemStyle}>Visualizzazione</li>
                  <li style={listItemStyle}>Modifica</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Transazioni GUI</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>VA21: Creazione</li>
                  <li style={listItemStyle}>VA22: Modifica</li>
                  <li style={listItemStyle}>VA23: Visualizzazione</li>
                </ul>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Sezione 17: Consegna e Spedizione */}
      <div style={sectionStyle}>
        <div 
          style={sectionHeaderStyle}
          onClick={() => toggleSection('section17')}
        >
          <h2 style={sectionTitleStyle}>17. Consegna e Spedizione</h2>
          <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section17' ? '▼' : '▶'}</span>
        </div>
        
        {activeSection === 'section17' && (
          <div style={sectionContentStyle}>
            <h3 style={subSectionTitleStyle}>17.1 Documento di Consegna</h3>
            <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Ruolo Strategico:</p>
            <ul style={listStyle}>
              <li style={listItemStyle}>Successivo all'ordine di vendita</li>
              <li style={listItemStyle}>Gestione operativa spedizione</li>
            </ul>

            <h3 style={subSectionTitleStyle}>17.2 Fasi Operative</h3>
            <ol style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>Creazione Consegna</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Derivazione da ordine</li>
                  <li style={listItemStyle}>Controllo disponibilità</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Prelievo Merce</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Selezione magazzino</li>
                  <li style={listItemStyle}>Picking automatico</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Preparazione</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Imballaggio</li>
                  <li style={listItemStyle}>Controllo qualità</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Spedizione</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Emissione documenti</li>
                  <li style={listItemStyle}>Registrazione uscita merce</li>
                </ul>
              </li>
            </ol>

            <h3 style={subSectionTitleStyle}>17.3 Struttura Documento</h3>
            <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Componenti:</p>
            <ul style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>Testata</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Destinatario</li>
                  <li style={listItemStyle}>Itinerario</li>
                  <li style={listItemStyle}>Luogo spedizione</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Posizioni</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Dettaglio materiali</li>
                  <li style={listItemStyle}>Quantità</li>
                  <li style={listItemStyle}>Riferimenti ordine</li>
                </ul>
              </li>
            </ul>

            <h3 style={subSectionTitleStyle}>17.4 Gestione Partite e Serie</h3>
            <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Meccanismi Avanzati:</p>
            <ul style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>Gestione Partite</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Assegnazione multipla</li>
                  <li style={listItemStyle}>Tracciabilità lotti</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Numeri di Serie</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Identificazione univoca</li>
                  <li style={listItemStyle}>Controllo serializzazione</li>
                </ul>
              </li>
            </ul>

            <h3 style={subSectionTitleStyle}>17.5 Uscita Merce</h3>
            <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Impatti Gestionali:</p>
            <ul style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>Magazzino</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Riduzione stock</li>
                  <li style={listItemStyle}>Aggiornamento giacenze</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Contabilità</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Registrazione costi</li>
                  <li style={listItemStyle}>Valorizzazione venduto</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Produzione</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Cancellazione fabbisogni</li>
                  <li style={listItemStyle}>Aggiornamento pianificazione</li>
                </ul>
              </li>
            </ul>

            <h3 style={subSectionTitleStyle}>17.6 Strumenti Operativi</h3>
            <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Interfacce:</p>
            <ul style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>APP Fiori</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Crea consegna</li>
                  <li style={listItemStyle}>Modifica consegna</li>
                  <li style={listItemStyle}>Monitor consegne</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Transazioni GUI</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>VL01N: Creazione</li>
                  <li style={listItemStyle}>VL02N: Modifica</li>
                  <li style={listItemStyle}>VL03N: Visualizzazione</li>
                  <li style={listItemStyle}>VL10C: Elaborazione</li>
                  <li style={listItemStyle}>VL06O: Monitor</li>
                </ul>
              </li>
            </ul>
          </div>
        )}
      </div>

      {/* Sezione 18: Esercitazione Pratica: Flusso Completo */}
      <div style={sectionStyle}>
        <div 
          style={sectionHeaderStyle}
          onClick={() => toggleSection('section18')}
        >
          <h2 style={sectionTitleStyle}>18. Esercitazione Pratica: Flusso Completo</h2>
          <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section18' ? '▼' : '▶'}</span>
        </div>
        
        {activeSection === 'section18' && (
          <div style={sectionContentStyle}>
            <h3 style={subSectionTitleStyle}>18.1 Scenario Operativo</h3>
            <ol style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>Creazione Tipo Consegna</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Configurazione parametri</li>
                  <li style={listItemStyle}>Associazione tipo ordine</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Generazione Offerta</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Inserimento dati cliente</li>
                  <li style={listItemStyle}>Definizione condizioni</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Conversione Ordine</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Accettazione offerta</li>
                  <li style={listItemStyle}>Trasformazione documento</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Processo Consegna</span>
                <ul style={nestedListStyle}>
                  <li style={listItemStyle}>Prelievo merce</li>
                  <li style={listItemStyle}>Registrazione uscita</li>
                  <li style={listItemStyle}>Emissione documenti</li>
                </ul>
              </li>
            </ol>

            <h3 style={subSectionTitleStyle}>18.2 Obiettivi Formativi</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Padronanza flusso documentale</li>
              <li style={listItemStyle}>Comprensione interconnessioni</li>
              <li style={listItemStyle}>Ottimizzazione processi</li>
            </ul>
          </div>
        )}
      </div>

        {/* Sezione 19: Fatturazione in SAP SD */}
        <div style={sectionStyle}>
          <div 
            style={sectionHeaderStyle}
            onClick={() => toggleSection('section19')}
          >
            <h2 style={sectionTitleStyle}>19. Fatturazione in SAP SD</h2>
            <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section19' ? '▼' : '▶'}</span>
          </div>
          
          {activeSection === 'section19' && (
            <div style={sectionContentStyle}>
              <h3 style={subSectionTitleStyle}>19.1 Tipi di Fatturazione</h3>
              <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Modalità Operative:</p>
              <ul style={listStyle}>
                <li style={listItemStyle}><span style={strongStyle}>Fattura Unica</span>
                  <ul style={nestedListStyle}>
                    <li style={listItemStyle}>Emessa per singola consegna</li>
                    <li style={listItemStyle}>Relazione uno a uno con documento di consegna</li>
                  </ul>
                </li>
                <li style={listItemStyle}><span style={strongStyle}>Fattura Riepilogativa</span>
                  <ul style={nestedListStyle}>
                    <li style={listItemStyle}>Raggruppa più consegne</li>
                    <li style={listItemStyle}>Stesso cliente, destinatario merce, termini di pagamento e consegna</li>
                    <li style={listItemStyle}>Ottimizzazione ciclo amministrativo</li>
                  </ul>
                </li>
                <li style={listItemStyle}><span style={strongStyle}>Fattura Parziale</span>
                  <ul style={nestedListStyle}>
                    <li style={listItemStyle}>Creata per parte di una consegna</li>
                    <li style={listItemStyle}>Gestione consegne frazionate</li>
                  </ul>
                </li>
              </ul>

              <h3 style={subSectionTitleStyle}>19.2 Strumenti per la Fatturazione</h3>
              <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Interfacce Operative:</p>
              <ul style={listStyle}>
                <li style={listItemStyle}><span style={strongStyle}>App Fiori</span>
                  <ul style={nestedListStyle}>
                    <li style={listItemStyle}>Crea documenti di fatturazione</li>
                    <li style={listItemStyle}>Gestisci documenti di fatturazione</li>
                    <li style={listItemStyle}>Visualizza documenti di fatturazione</li>
                    <li style={listItemStyle}>Modifica documenti di fatturazione</li>
                  </ul>
                </li>
                <li style={listItemStyle}><span style={strongStyle}>Transazioni GUI</span>
                  <ul style={nestedListStyle}>
                    <li style={listItemStyle}>VF01: Creazione fattura</li>
                    <li style={listItemStyle}>VF02: Modifica fattura</li>
                    <li style={listItemStyle}>VF03: Visualizzazione fattura</li>
                    <li style={listItemStyle}>VF04: Annullamento fattura</li>
                  </ul>
                </li>
              </ul>

              <h3 style={subSectionTitleStyle}>19.3 Processo di Rilascio in Contabilità</h3>
              <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Flusso Operativo:</p>
              <ol style={listStyle}>
                <li style={listItemStyle}><span style={strongStyle}>Creazione Fattura Logistica</span>
                  <ul style={nestedListStyle}>
                    <li style={listItemStyle}>Raccolta dati dai documenti di vendita precedenti</li>
                    <li style={listItemStyle}>Assegnazione numero univoco</li>
                    <li style={listItemStyle}>Gestione parametri fiscali</li>
                  </ul>
                </li>
                <li style={listItemStyle}><span style={strongStyle}>Creazione Documento Contabile</span>
                  <ul style={nestedListStyle}>
                    <li style={listItemStyle}>Registrazione dei ricavi</li>
                    <li style={listItemStyle}>Gestione rettifiche</li>
                    <li style={listItemStyle}>Assegnazione conti appropriati</li>
                  </ul>
                </li>
                <li style={listItemStyle}><span style={strongStyle}>Numerazione Finale</span>
                  <ul style={nestedListStyle}>
                    <li style={listItemStyle}>Il numero stampato sulla fattura finale è il numero del documento contabile</li>
                    <li style={listItemStyle}>Tracciabilità amministrativa completa</li>
                  </ul>
                </li>
              </ol>

              <h3 style={subSectionTitleStyle}>19.4 Customizing della Fatturazione</h3>
              <ul style={listStyle}>
                <li style={listItemStyle}>Definizione dei tipi di documento tramite transazione VKOA</li>
                <li style={listItemStyle}>Attribuzione dei conti di ricavo</li>
                <li style={listItemStyle}>Configurazione delle determinazioni automatiche</li>
              </ul>

              <h3 style={subSectionTitleStyle}>19.5 Note Credito e Debito</h3>
              <p style={{fontWeight: 'bold', marginBottom: '0.5rem'}}>Processo di Emissione:</p>
              <ul style={listStyle}>
                <li style={listItemStyle}><span style={strongStyle}>Richiesta di Accredito/Addebito</span>
                  <ul style={nestedListStyle}>
                    <li style={listItemStyle}>Documento di vendita specifico</li>
                    <li style={listItemStyle}>Richiede motivo ordine</li>
                    <li style={listItemStyle}>Nasce bloccata alla fatturazione</li>
                  </ul>
                </li>
                <li style={listItemStyle}><span style={strongStyle}>Modalità di Creazione</span>
                  <ul style={nestedListStyle}>
                    <li style={listItemStyle}>Senza riferimento a documenti precedenti</li>
                    <li style={listItemStyle}>In riferimento a una fattura emessa in precedenza</li>
                    <li style={listItemStyle}>In riferimento solo ad alcune posizioni di una fattura precedente</li>
                  </ul>
                </li>
                <li style={listItemStyle}><span style={strongStyle}>Strumenti Operativi</span>
                  <ul style={nestedListStyle}>
                    <li style={listItemStyle}>App Fiori: Gestisci richieste di accredito/addebito</li>
                    <li style={listItemStyle}>Transazioni GUI: VA01 (richieste), VF01 (note)</li>
                  </ul>
                </li>
              </ul>

              <h3 style={subSectionTitleStyle}>19.6 Flusso di Processo</h3>
              <ol style={listStyle}>
                <li style={listItemStyle}>Creazione della richiesta di accredito/addebito</li>
                <li style={listItemStyle}>Inserimento motivo e riferimento (se applicabile)</li>
                <li style={listItemStyle}>Sblocco della richiesta</li>
                <li style={listItemStyle}>Creazione nota di credito/debito</li>
                <li style={listItemStyle}>Rilascio in contabilità</li>
              </ol>
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
      {[...Array(18)].map((_, i) => (
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
<p>© {new Date().getFullYear()} SAP ERP Documentation - Modulo Sales & Distribution (SD)</p>
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
'Architettura',
'Anagrafica',
'Materiali',
'Info-Record',
'Pricing',
'Ordini',
'Personalizz.',
'Funzioni Partner',
'Testi',
'Log Dati',
'Schedulazione',
'Pricing Det.',
'Esercitazioni',
'Best Practices',
'Tecnologia',
'Offerta',
'Consegna',
'Flusso Completo'
];
return titles[index-1] || `Sezione ${index}`;
}

export default SDDocumentationPage;