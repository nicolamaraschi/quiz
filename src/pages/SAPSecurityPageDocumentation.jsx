import React, { useState, useEffect } from 'react';

const SAPSecurityDocumentation = () => {
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
              const sections = Array.from({length: 4}, (_, i) => `section${i+1}`);
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

      <h1 style={titleStyle}>Documentazione SAP - Security (AGLEA)</h1>
      
      {/* Sezione 1: Gestione delle Utenze in SAP */}
      <div style={sectionStyle}>
        <div 
          style={sectionHeaderStyle}
          onClick={() => toggleSection('section1')}
        >
          <h2 style={sectionTitleStyle}>1. Gestione delle Utenze in SAP</h2>
          <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section1' ? '▼' : '▶'}</span>
        </div>
        
        {activeSection === 'section1' && (
          <div style={sectionContentStyle}>
            <p style={{marginBottom: '1rem'}}>
              La gestione delle utenze in SAP si riferisce a come vengono creati, modificati e cancellati gli utenti che accedono al sistema SAP. È fondamentale per garantire che solo gli utenti autorizzati possano accedere al sistema e svolgere determinate operazioni.
            </p>
            
            <h3 style={subSectionTitleStyle}>1.1 Elementi fondamentali</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>SU01:</span> Transazione principale per la gestione degli utenti</li>
              <li style={listItemStyle}><span style={strongStyle}>Business User e Business Partner:</span> Concetti che definiscono le persone o le organizzazioni che interagiscono con il sistema</li>
              <li style={listItemStyle}><span style={strongStyle}>Record Master Utente:</span> Contiene le informazioni relative a un utente, come dati personali, ruolo, ecc.</li>
              <li style={listItemStyle}><span style={strongStyle}>Ruoli e Profili:</span> Definiscono le autorizzazioni che un utente ha nel sistema</li>
              <li style={listItemStyle}><span style={strongStyle}>SAP GUI e Fiori:</span> Interfacce attraverso cui gli utenti accedono a SAP</li>
            </ul>
            
            <h3 style={subSectionTitleStyle}>1.2 Processo di gestione utenti</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>Creazione:</span> Definizione dei dati base dell'utente, assegnazione di ruoli e profili</li>
              <li style={listItemStyle}><span style={strongStyle}>Modifica:</span> Aggiornamento delle informazioni e dei permessi dell'utente</li>
              <li style={listItemStyle}><span style={strongStyle}>Blocco/Sblocco:</span> Disattivazione temporanea o riattivazione di un utente</li>
              <li style={listItemStyle}><span style={strongStyle}>Eliminazione:</span> Rimozione dell'utente dal sistema (raramente eseguita per motivi di audit)</li>
            </ul>
            
            <h3 style={subSectionTitleStyle}>1.3 Best practices</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}>Applicare il principio del minimo privilegio: dare agli utenti solo le autorizzazioni strettamente necessarie</li>
              <li style={listItemStyle}>Rivedere periodicamente le utenze e le relative autorizzazioni</li>
              <li style={listItemStyle}>Implementare procedure robuste per la gestione delle password</li>
              <li style={listItemStyle}>Bloccare automaticamente gli utenti inattivi per un determinato periodo</li>
              <li style={listItemStyle}>Documentare adeguatamente le assegnazioni dei ruoli</li>
            </ul>
          </div>
        )}
      </div>
      
      {/* Sezione 2: Authority Check */}
      <div style={sectionStyle}>
        <div 
          style={sectionHeaderStyle}
          onClick={() => toggleSection('section2')}
        >
          <h2 style={sectionTitleStyle}>2. Authority Check</h2>
          <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section2' ? '▼' : '▶'}</span>
        </div>
        
        {activeSection === 'section2' && (
          <div style={sectionContentStyle}>
            <p style={{marginBottom: '1rem'}}>
              Gli "Authority Check" sono controlli di autorizzazione inseriti nel codice ABAP (il linguaggio di programmazione di SAP). Rappresentano il meccanismo principale attraverso cui SAP verifica se un utente ha il permesso di eseguire una determinata azione.
            </p>
            
            <h3 style={subSectionTitleStyle}>2.1 Funzionamento</h3>
            <p style={{marginBottom: '1rem'}}>
              Quando un utente esegue una transazione o un programma, il codice ABAP contiene istruzioni "AUTHORITY-CHECK" che verificano se l'utente ha le autorizzazioni necessarie. Se l'utente non dispone delle autorizzazioni richieste, il sistema nega l'accesso o l'esecuzione dell'operazione.
            </p>
            
            <h3 style={subSectionTitleStyle}>2.2 Oggetti di autorizzazione</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>Definizione:</span> Un oggetto di autorizzazione è un contenitore di campi di autorizzazione a cui vengono assegnati valori per determinare i permessi</li>
              <li style={listItemStyle}><span style={strongStyle}>Struttura:</span> Gli oggetti di autorizzazione sono identificati da un nome (es. S_TCODE) e contengono fino a 10 campi</li>
              <li style={listItemStyle}><span style={strongStyle}>Esempi comuni:</span>
                <ul style={{paddingLeft: '2rem'}}>
                  <li style={listItemStyle}>S_TCODE: autorizzazione per le transazioni</li>
                  <li style={listItemStyle}>S_PROGRAM: autorizzazione per i programmi ABAP</li>
                  <li style={listItemStyle}>S_USER_GRP: autorizzazione per i gruppi utente</li>
                </ul>
              </li>
            </ul>
            
            <h3 style={subSectionTitleStyle}>2.3 Monitoraggio e debug</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>SU53:</span> Transazione per visualizzare l'ultimo authority check fallito</li>
              <li style={listItemStyle}><span style={strongStyle}>ST01:</span> Trace di sistema che può essere usato per monitorare i controlli di autorizzazione</li>
              <li style={listItemStyle}><span style={strongStyle}>SUIM:</span> Strumento per l'analisi e il reporting delle autorizzazioni</li>
              <li style={listItemStyle}><span style={strongStyle}>Punti di controllo:</span> Tecniche di debug per identificare dove avvengono i controlli di autorizzazione in programmi complessi</li>
            </ul>
          </div>
        )}
      </div>
      
      {/* Sezione 3: Gestione dei Ruoli */}
      <div style={sectionStyle}>
        <div 
          style={sectionHeaderStyle}
          onClick={() => toggleSection('section3')}
        >
          <h2 style={sectionTitleStyle}>3. Gestione dei Ruoli attraverso il Profile Generator</h2>
          <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section3' ? '▼' : '▶'}</span>
        </div>
        
        {activeSection === 'section3' && (
          <div style={sectionContentStyle}>
            <p style={{marginBottom: '1rem'}}>
              I ruoli in SAP definiscono un insieme di attività che un utente può svolgere nel sistema. Il Profile Generator è lo strumento principale per creare e gestire questi ruoli.
            </p>
            
            <h3 style={subSectionTitleStyle}>3.1 Tipi di ruoli</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>Ruoli Singoli:</span> Per utenti con compiti specifici</li>
              <li style={listItemStyle}><span style={strongStyle}>Ruoli Derivati:</span> Creati a partire da ruoli esistenti per semplificare la gestione</li>
              <li style={listItemStyle}><span style={strongStyle}>Ruoli Collettivi:</span> Per gruppi di utenti con responsabilità simili</li>
              <li style={listItemStyle}><span style={strongStyle}>Ruoli Eccezione:</span> Per gestire casi particolari di autorizzazione</li>
            </ul>
            
            <h3 style={subSectionTitleStyle}>3.2 Profile Generator (PFCG)</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>Funzionalità:</span> Permette di definire i ruoli attraverso l'assegnazione di attività e autorizzazioni</li>
              <li style={listItemStyle}><span style={strongStyle}>Approccio basato sulle attività:</span> I ruoli vengono definiti in base alle attività che l'utente deve svolgere (es. visualizzare ordini, creare fatture, ecc.)</li>
              <li style={listItemStyle}><span style={strongStyle}>Generazione profili:</span> Il sistema genera automaticamente i profili di autorizzazione a partire dai ruoli definiti</li>
              <li style={listItemStyle}><span style={strongStyle}>Manutenzione centralizzata:</span> Permette di modificare più ruoli contemporaneamente e gestire le assegnazioni agli utenti</li>
            </ul>
            
            <h3 style={subSectionTitleStyle}>3.3 SU24 e template di autorizzazione</h3>
            <p style={{marginBottom: '1rem'}}>
              La transazione SU24 aiuta a definire quali controlli di autorizzazione devono essere inclusi nei ruoli, fornendo template di autorizzazione predefiniti per le transazioni standard SAP.
            </p>
            <ul style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>Proposta di valori:</span> Suggerisce valori appropriati per i campi di autorizzazione</li>
              <li style={listItemStyle}><span style={strongStyle}>Derivazione:</span> Permette di derivare automaticamente autorizzazioni da transazioni correlate</li>
              <li style={listItemStyle}><span style={strongStyle}>Manutenzione personalizzata:</span> Consente di modificare le proposte standard per adattarle alle esigenze aziendali</li>
            </ul>
            
            <h3 style={subSectionTitleStyle}>3.4 Segregation of Duties (SOD)</h3>
            <p style={{marginBottom: '1rem'}}>
              La Segregation of Duties (Segregazione dei Compiti) è un principio di sicurezza fondamentale che prevede la separazione dei ruoli critici per prevenire frodi e errori.
            </p>
            <ul style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>Principio:</span> Nessun utente dovrebbe avere sia la capacità di commettere frodi sia quella di nasconderle</li>
              <li style={listItemStyle}><span style={strongStyle}>Esempi:</span> Separazione tra chi crea un ordine e chi lo approva, chi registra un pagamento e chi lo autorizza</li>
              <li style={listItemStyle}><span style={strongStyle}>Implementazione:</span> Attraverso una matrice di conflitti che identifica le combinazioni di autorizzazioni problematiche</li>
              <li style={listItemStyle}><span style={strongStyle}>Tools:</span> SAP GRC (Governance, Risk and Compliance) per il monitoraggio automatico dei conflitti SOD</li>
            </ul>
          </div>
        )}
      </div>
      
      {/* Sezione 4: Progetto S/4HANA e Aggiornamento Autorizzazioni */}
      <div style={sectionStyle}>
        <div 
          style={sectionHeaderStyle}
          onClick={() => toggleSection('section4')}
        >
          <h2 style={sectionTitleStyle}>4. Progetto S/4HANA e Aggiornamento Autorizzazioni</h2>
          <span style={{fontSize: `${fontSize + 4}px`}}>{activeSection === 'section4' ? '▼' : '▶'}</span>
        </div>
        
        {activeSection === 'section4' && (
          <div style={sectionContentStyle}>
            <h3 style={subSectionTitleStyle}>4.1 Sfide della sicurezza in S/4HANA</h3>
            <p style={{marginBottom: '1rem'}}>
              S/4HANA è la nuova generazione di SAP, che introduce cambiamenti significativi nella gestione della sicurezza.
            </p>
            <ul style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>Nuove transazioni:</span> S/4HANA introduce nuove transazioni e modifica quelle esistenti, richiedendo una revisione delle autorizzazioni</li>
              <li style={listItemStyle}><span style={strongStyle}>Architettura semplificata:</span> Il modello dati semplificato cambia il modo in cui alcune autorizzazioni vengono applicate</li>
              <li style={listItemStyle}><span style={strongStyle}>Interfacce Fiori:</span> L'adozione delle interfacce Fiori richiede un approccio diverso alla sicurezza rispetto a SAP GUI</li>
              <li style={listItemStyle}><span style={strongStyle}>Embedded Analytics:</span> Le funzionalità analitiche integrate richiedono autorizzazioni specifiche</li>
            </ul>
            
            <h3 style={subSectionTitleStyle}>4.2 Fattori da considerare</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>Numero di utenti e loro ruoli:</span> La complessità aumenta con il numero di utenti e la varietà dei loro ruoli</li>
              <li style={listItemStyle}><span style={strongStyle}>Segregazione dei compiti (SOD):</span> I requisiti di separazione delle responsabilità devono essere mantenuti o rafforzati</li>
              <li style={listItemStyle}><span style={strongStyle}>Specifiche del settore:</span> Requisiti normativi specifici (es. farmaceutico, finanziario) possono influenzare la sicurezza</li>
              <li style={listItemStyle}><span style={strongStyle}>Complessità dell'organizzazione:</span> Strutture multinazionali o multi-società richiedono modelli di sicurezza più articolati</li>
            </ul>
            
            <h3 style={subSectionTitleStyle}>4.3 Approcci all'aggiornamento</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>Brownfield:</span> Migrazione da un sistema SAP esistente, mantenendo dati e personalizzazioni
                <ul style={{paddingLeft: '2rem'}}>
                  <li style={listItemStyle}>Pro: Conserva investimenti e personalizzazioni esistenti</li>
                  <li style={listItemStyle}>Contro: Può perpetuare problemi di sicurezza e complessità esistenti</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Greenfield:</span> Implementazione completamente nuova, partendo da zero
                <ul style={{paddingLeft: '2rem'}}>
                  <li style={listItemStyle}>Pro: Opportunità di riprogettare completamente la sicurezza in modo ottimale</li>
                  <li style={listItemStyle}>Contro: Richiede più tempo, risorse e può comportare la perdita di personalizzazioni</li>
                </ul>
              </li>
              <li style={listItemStyle}><span style={strongStyle}>Selective Data Transition:</span> Approccio ibrido che combina elementi di entrambi
                <ul style={{paddingLeft: '2rem'}}>
                  <li style={listItemStyle}>Pro: Flessibilità nel decidere cosa mantenere e cosa rinnovare</li>
                  <li style={listItemStyle}>Contro: Complessità nell'esecuzione e nella pianificazione</li>
                </ul>
              </li>
            </ul>
            
            <h3 style={subSectionTitleStyle}>4.4 Metodologia di aggiornamento autorizzazioni</h3>
            <ul style={listStyle}>
              <li style={listItemStyle}><span style={strongStyle}>Analisi dei ruoli esistenti:</span> Identificare gli attuali ruoli, profili e utenti</li>
              <li style={listItemStyle}><span style={strongStyle}>Mappatura verso S/4HANA:</span> Identificare le equivalenze tra transazioni vecchie e nuove</li>
              <li style={listItemStyle}><span style={strongStyle}>Identificazione gap:</span> Determinare quali autorizzazioni mancano o non sono più necessarie</li>
              <li style={listItemStyle}><span style={strongStyle}>Test e simulazione:</span> Verificare le nuove autorizzazioni in ambiente di test</li>
              <li style={listItemStyle}><span style={strongStyle}>Documentazione:</span> Mantenere una documentazione dettagliata per audit e riferimento futuro</li>
              <li style={listItemStyle}><span style={strongStyle}>Formazione:</span> Educare gli utenti sui cambiamenti e le nuove procedure di sicurezza</li>
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
              {[...Array(4)].map((_, i) => (
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
        <p>© {new Date().getFullYear()} SAP ERP Documentation - Security (AGLEA)</p>
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
    'Utenze',
    'Authority',
    'Ruoli',
    'S/4HANA'
  ];
  return titles[index-1] || `Sezione ${index}`;
}

export default SAPSecurityDocumentation;