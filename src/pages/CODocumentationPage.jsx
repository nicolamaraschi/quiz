import React from 'react';
import '../styles/coDocumentation.css'; 

const CODocumentationPage = () => {
  return (
    <div className="container">
      <h1>HORSA ACADEMY SAP Modulo CO Aprile 2025</h1>
      <div className="section">
        <h2>Agenda Modulo CO – Parte I</h2>
        <ul>
          <li>Introduzione Corso</li>
          <li>Il Controller ed il Consulente</li>
          <li>Il Controllo di Gestione in SAP</li>
          <li>Strutture Organizzative</li>
          <li>Voci di costo</li>
          <li>Oggetti di costo</li>
        </ul>
      </div>
      <div className="section">
        <h2>Introduzione Corso</h2>
        <p><strong>Docenti:</strong> Angelina Mastrogiacomo, Angelo Casati</p>
        <p><strong>Obiettivi Corso:</strong></p>
        <ul>
          <li>Concetti di base del Controllo di Gestione</li>
          <li>Contenuti tecnici legati al modulo Controllo di Gestione</li>
          <li>Capire il ruolo del Consulente CO all’interno dei progetti</li>
          <li>Individuare gli obiettivi del cliente per la costruzione di un modello efficiente</li>
        </ul>
      </div>
      <div className="section">
        <h2>Il Controllo di Gestione</h2>
        <blockquote>
          “Controlling is the measurement and correction of performance in order to make sure that enterprise objectives and the plans devised to attain them are accomplished.” - Harold Koontz
        </blockquote>
        <p>Il controllo di gestione può essere visto come un processo di raccolta, analisi e diffusione di informazioni utili per dirigere al meglio un’azienda.</p>
        <p>Potenzialità del controllo di gestione:</p>
        <ul>
          <li>Determinare il costo di produzione di beni e servizi</li>
          <li>Individuare i settori in perdita nel risultato complessivo</li>
          <li>Motivare i responsabili con poteri decisionali attraverso il confronto tra budget e consuntivo</li>
          <li>Informare per scegliere fra incremento della capacità produttiva interna e il ricorso a risorse esterne</li>
        </ul>
      </div>
      <div className="section">
        <h2>Il Controller</h2>
        <p><strong>Compiti e Obiettivi:</strong></p>
        <ul>
          <li>Coordinare le attività di controllo di gestione</li>
          <li>Analizzare i processi e definire le procedure del controllo di gestione</li>
          <li>Misurare le prestazioni e valutare l’efficienza di contabilità, rendicontazione e del sistema di controlling interno</li>
          <li>Garantire la conformità delle operazioni ai principi contabili</li>
          <li>Collaborare alla definizione del budget di spesa</li>
          <li>Redazione di forecast</li>
          <li>Monitorare e valutare business performance e cost controlling delle diverse aree aziendali</li>
          <li>Analizzare gli scostamenti delle voci di bilancio rispetto agli obiettivi finanziari ed economici programmati</li>
          <li>Elaborare la reportistica periodica</li>
          <li>Supportare il CFO nelle attività di pianificazione strategica</li>
          <li>Elaborare proposte di sviluppo dell'area contabile e amministrativa</li>
          <li>Fornire consulenza alla direzione su temi contabili, finanziari e fiscali</li>
        </ul>
      </div>
      <div className="section">
        <h2>Il Consulente</h2>
        <p><strong>Compiti e Obiettivi:</strong></p>
        <ul>
          <li>Fare una analisi funzionale dei requisiti richiesti dai cliente in merito alla realizzazione del Modello di Controllo</li>
          <li>Analizzare i processi aziendali per sviluppare il modello di controllo</li>
          <li>Configurare il sistema sulla base delle specifiche del cliente</li>
          <li>Verificare le integrazioni con gli altri moduli</li>
          <li>Definire la reportistica e gli strumenti di controllo necessari</li>
        </ul>
      </div>
      <div className="section">
        <h2>Contabilità analitica vs. Contabilità generale</h2>
        <p><strong>Contabilità Generale:</strong></p>
        <ul>
          <li>Pratica obbligatoria per tenuta delle scritture contabili</li>
          <li>Centro di interesse: attività e performance passate</li>
        </ul>
        <p><strong>Contabilità Analitica:</strong></p>
        <ul>
          <li>Sistema di monitoraggio interno dei costi e dei ricavi</li>
          <li>Non obbligatoria per legge, ma indispensabile in mercati competitivi</li>
          <li>Alimenta il controllo di gestione</li>
        </ul>
      </div>
      <div className="section">
        <h2>Attività tipiche del controllo di gestione</h2>
        <ul>
          <li>Analisi dei costi generali</li>
          <li>Analisi del valore di magazzino</li>
          <li>Analisi del costo del prodotto</li>
          <li>Analisi del venduto</li>
          <li>Analisi/gestione investimenti</li>
          <li>Redazione ed analisi conto economico</li>
        </ul>
      </div>
      <div className="section">
        <h2>Il Controllo di Gestione in SAP</h2>
        <p>Il modulo CO in SAP é suddiviso nelle seguenti aree:</p>
        <ul>
          <li>Contabilità per voci di costo</li>
          <li>Contabilità per centri di costo</li>
          <li>Contabilità per centri di profitto</li>
          <li>Activity based costing</li>
          <li>Ordini interni</li>
          <li>Controlling del costo del prodotto</li>
          <li>Analisi di profittabilità</li>
        </ul>
        <p>Integrazioni in tempo reale con altri moduli SAP:</p>
        <ul>
          <li>PP: Production and planning</li>
          <li>SD: Sales and distribution</li>
          <li>MM: Materials management</li>
          <li>FI: Financial accounting</li>
          <li>PM: Plant maintenance</li>
          <li>QM: Quality management</li>
          <li>PS: Project system</li>
          <li>HCM: Human resources management</li>
        </ul>
      </div>
      <div className="section">
        <h2>Strutture Organizzative SAP</h2>
        <ul>
          <li>Area di risultato: unità organizzativa per gestire l’analisi della profittabilità</li>
          <li>Controlling Area: unità organizzativa dove vengono effettuate le analisi gestionali</li>
          <li>Società: entità legale per la compilazione del bilancio</li>
          <li>Plant: unità organizzativa per la gestione logistica e dei materiali</li>
          <li>Organizzazione Acquisti: unità organizzativa per il modulo acquisti</li>
          <li>Organizzazione vendite: unità organizzativa per il modulo SD</li>
        </ul>
      </div>
      <div className="section">
        <h2>Voci di Costo</h2>
        <p><strong>Primarie:</strong></p>
        <ul>
          <li>Tipo 1: Costi</li>
          <li>Tipo 11/12: Ricavi/Rettifica ricavi</li>
          <li>Tipo 22: Scarico costi</li>
          <li>Tipo 90: Conti patrimoniali (Statistici)</li>
        </ul>
        <p><strong>Secondarie:</strong></p>
        <ul>
          <li>Tipo 43: Comp.prestazioni</li>
          <li>Tipo 41: Quote OVH</li>
          <li>Tipo 21: Scarico costi</li>
          <li>Tipo 31: Analisi di risultato</li>
        </ul>
      </div>
      <div className="section">
        <h2>Anagrafiche CO – Oggetti di costo</h2>
        <ul>
          <li>Centro di Costo</li>
          <li>Ordini Interni</li>
          <li>Progetti</li>
          <li>Analisi della Profittabilità</li>
          <li>Profit Center</li>
        </ul>
      </div>
      <div className="section">
        <h2>Struttura centri di costo</h2>
        <p>Tipi di centri di costo:</p>
        <ul>
          <li>Centri di costo di struttura</li>
          <li>Centri di costo commerciali</li>
          <li>Centri di costo ausiliari</li>
          <li>Centri di costo diretti</li>
        </ul>
        <p>Obiettivi della contabilità per centri di costo:</p>
        <ul>
          <li>Gestire i costi all’interno di un’organizzazione</li>
          <li>Analizzare i costi di ogni area funzionale</li>
          <li>Rispondere alla domanda: dove si è generato il costo?</li>
          <li>Monitorare le variazioni rispetto ai costi pianificati</li>
          <li>Allocare i costi ai prodotti/servizi</li>
        </ul>
      </div>
      <div className="section">
        <h2>Contabilizzazioni sui centri di costo</h2>
      </div>
      <div className="section">
        <h2>Centri di costo/Tipi di attività</h2>
        <p>Centri di costo come erogatori di servizi/attività:</p>
        <ul>
          <li>Manutenzione</li>
          <li>Qualità</li>
          <li>Ricerca e Sviluppo</li>
        </ul>
      </div>
      <div className="section">
        <h2>Contabilità per ordini interni</h2>
        <p>Utilizzazioni degli ordini interni:</p>
        <ul>
          <li>Codifica</li>
          <li>Categoria ordine interno</li>
          <li>Profilo di scarico costi</li>
          <li>Area funzionale</li>
          <li>Ordine campione</li>
        </ul>
        <p>Ciclo di vita degli ordini interni:</p>
        <ul>
          <li>Apertura</li>
          <li>Rilascio</li>
          <li>Chiusura Tecnica</li>
          <li>Chiusura</li>
        </ul>
      </div>
      <div className="section">
        <h2>Ordini interni e Centri di costo: differenze</h2>
        <table>
          <thead>
            <tr>
              <th>Caratteristica</th>
              <th>Centro di Costo</th>
              <th>Ordine Interno</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Unità organizzativa</td>
              <td>Sì</td>
              <td>No</td>
            </tr>
            <tr>
              <td>Ciclo di vita</td>
              <td>Lungo</td>
              <td>Limited</td>
            </tr>
            <tr>
              <td>Scarico costi</td>
              <td>No</td>
              <td>Sì</td>
            </tr>
            <tr>
              <td>Contabilizzazione</td>
              <td>Solo costi</td>
              <td>Costi e ricavi</td>
            </tr>
            <tr>
              <td>Allocazione</td>
              <td>Prima del scarico</td>
              <td>Dopo il scarico</td>
            </tr>
            <tr>
              <td>Statistico</td>
              <td>Sì</td>
              <td>Sì</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="section">
        <h2>Ordini interni e Centri di costo: gestione parallela</h2>
      </div>
      <div className="section">
        <h2>Investimenti in corso</h2>
        <p>Utilizzo degli ordini interni per la gestione degli investimenti in corso:</p>
        <ul>
          <li>Con il profilo di investimento</li>
          <li>Senza profilo di investimento</li>
          <li>Ordine interno statistico</li>
        </ul>
      </div>
      <div className="section">
        <h2>Gestione Progetti con SAP PS</h2>
        <p>Elementi principali della Struttura PS:</p>
        <ul>
          <li>WBS (Work Breakdown Structure)</li>
          <li>Network</li>
          <li>Milestone</li>
        </ul>
      </div>
      <div className="section">
        <h2>Chiusure di Periodo: Capitalizzazione Cespiti in Costruzione</h2>
      </div>
      <div className="section">
        <h2>Contabilità per Profit center</h2>
        <p>Struttura del Profit center:</p>
        <ul>
          <li>Business unit</li>
          <li>Brand</li>
          <li>Unità organizzative</li>
        </ul>
      </div>
      <div className="section">
        <h2>Profit center - Overview</h2>
      </div>
      <div className="section">
        <h2>Profit center: Contabilizzazioni conti economici</h2>
      </div>
      <div className="section">
        <h2>Profit center: Contabilizzazioni conti patrimoniali</h2>
      </div>
      <div className="section">
        <h2>Anagrafiche CO – Altre anagrafiche</h2>
        <p><strong>Tipo di attività:</strong> servizio erogato da un centro di costo</p>
        <p><strong>Indicatori statistici:</strong> quantità misurabili per ribaltamenti di costo</p>
      </div>
      <div className="section">
        <h2>Agenda Modulo CO – Parte II</h2>
        <ul>
          <li>Processo di pianificazione</li>
          <li>Calcolo del costo del prodotto</li>
          <li>Ordini di produzione</li>
          <li>Contabilità industriale</li>
        </ul>
      </div>
      <div className="section">
        <h2>Processo di pianificazione</h2>
        <p>Il budget d’esercizio è il documento di previsione riguardante l’esercizio futuro.</p>
        <p>Piani operativi:</p>
        <ul>
          <li>Piano commerciale</li>
          <li>Piano della produzione</li>
          <li>Piano degli investimenti</li>
        </ul>
        <p>SAP fornisce strumenti per la redazione del budget annuale.</p>
      </div>
      <div className="section">
        <h2>Processo di pianificazione costi</h2>
        <ul>
          <li>Pianificazione costi primari</li>
          <li>Allocazione costi</li>
          <li>Pianificazione attività</li>
          <li>Splitting</li>
          <li>Calcolo delle tariffe</li>
        </ul>
        <p>Strumenti di pianificazione:</p>
        <ul>
          <li>Transazioni CO (KP06/KP26/KSS2/KSII)</li>
          <li>Embedded analytics</li>
          <li>Sap Analytics Cloud</li>
        </ul>
      </div>
      <div className="section">
        <h2>Pianificazione Ricavi</h2>
        <p>Utilizzazioni:</p>
        <ul>
          <li>COPA</li>
          <li>Profit center</li>
        </ul>
        <p>Strumenti di pianificazione:</p>
        <ul>
          <li>Transazioni CO (KEPM)</li>
          <li>Embedded analytics</li>
          <li>Sap Analytics Cloud</li>
        </ul>
        </div>
      <div className="section">
        <h2>Pianificazione Ricavi</h2>
        <p>Utilizzazioni:</p>
        <ul>
          <li>COPA</li>
          <li>Profit center</li>
        </ul>
        <p>Strumenti di pianificazione:</p>
        <ul>
          <li>Transazioni CO (KEPM)</li>
          <li>Embedded analytics</li>
          <li>Sap Analytics Cloud</li>
</ul>
</div>
<div className="section">
<h2>Budgeting SAP</h2>
<p>Il budget rappresenta un limite di spesa.</p>
<p>Differenze tra pianificazione e budgeting:</p>
<table>
<thead>
<tr>
<th>Caratteristica</th>
<th>Pianificazione</th>
<th>Budgeting</th>
</tr>
</thead>
<tbody>
<tr>
<td>Processo</td>
<td>Bottom-up</td>
<td>Top-down</td>
</tr>
<tr>
<td>Dettaglio</td>
<td>Voce di Costo</td>
<td>Oggetto (CdC, Ordine, WBS, ...)</td>
</tr>
<tr>
<td>Utilizzo</td>
<td>Calcolo tariffe attività, Analisi scostamenti, Determinazione Target</td>
<td>Controllo autorizzazione spesa</td>
</tr>
</tbody>
</table>
</div>
<div className="section">
<h2>Agenda Modulo CO – Parte II</h2>
<ul>
<li>Processo di pianificazione</li>
<li>Calcolo del costo del prodotto</li>
<li>Ordini di produzione</li>
<li>Contabilità industriale</li>
</ul>
</div>
<div className="section">
<h2>Costo del prodotto</h2>
<p>Funzionalità:</p>
<ul>
<li>Definire la configurazione di costo</li>
<li>Definire diverse strategie di valorizzazione</li>
<li>Calcolare il costo standard</li>
<li>Analizzare gli scostamenti tra teorico ed effettivo</li>
<li>Supporto per decisioni di make or buy</li>
<li>Utile per la valorizzazione puntuale o periodica del magazzino</li>
</ul>
<p>Valorizzazione dei materiali:</p>
<ul>
<li>Costo Standard</li>
<li>Media mobile</li>
</ul>
</div>
<div className="section">
<h2>Valorizzazione materiali: anagrafiche</h2>
</div>
<div className="section">
<h2>Costo del prodotto: Schema generale</h2>
</div>
<div className="section">
<h2>Ciclo di lavoro</h2>
</div>
<div className="section">
<h2>Costo del prodotto: overview</h2>
</div>
<div className="section">
<h2>Step del calcolo costi standard</h2>
<p>Il calcolo costi è un’operazione che viene eseguita prima di tutto in fase di budget.</p>
</div>
<div className="section">
<h2>Tempistiche calcolo costi</h2>
</div>
<div className="section">
<h2>Sequenza calcolo costi</h2>
<p>Diverse tipologie di calcolo costi possono essere utilizzate nei diversi momenti di pianificazione della produzione.</p>
</div>
<div className="section">
<h2>Agenda Modulo CO – Parte II</h2>
<ul>
<li>Processo di pianificazione</li>
<li>Calcolo del costo del prodotto</li>
<li>Ordini di produzione</li>
<li>Contabilità industriale</li>
</ul>
</div>
<div className="section">
<h2>Consuntivazione</h2>
<p>L’oggetto sul quale viene eseguita la realizzazione dei prodotti su SAP è l’ordine di produzione.</p>
<p>Tipi di ordine di produzione:</p>
<ul>
<li>Ordini di produzione</li>
<li>Ordini di processo</li>
<li>Collettori di Costo</li>
</ul>
</div>
<div className="section">
<h2>Integrazioni – Modulo Production Planning</h2>
<p>L’ordine di produzione è utilizzato per definire il codice materiale da produrre.</p>
<p>Costi gestiti sull’ordine di produzione:</p>
<ul>
<li>Costo Teorico</li>
<li>Costo Pianificato</li>
<li>Costo Effettivo</li>
</ul>
</div>
<div className="section">
<h2>Integrazioni – Modulo Production Planning</h2>
<p>Tipi di costo gestiti sull’ordine di produzione:</p>
<ul>
<li>Consumi di Componenti</li>
<li>Conferme di Ore di Lavorazione</li>
<li>Entrate Merci da Produzione</li>
<li>Allocazione di Costi Generali</li>
<li>Calcolo WIP</li>
<li>Calcolo Varianze di Produzione</li>
</ul>
</div>
<div className="section">
<h2>Agenda Modulo CO – Parte II</h2>
<ul>
<li>Processo di pianificazione</li>
<li>Calcolo del costo del prodotto</li>
<li>Ordini di produzione</li>
<li>Contabilità industriale</li>
</ul>
</div>
<div className="section">
<h2>Imputazione indiretta attività</h2>
<p>L’imputazione delle attività può essere indiretta.</p>
<p>Quantità possono essere ricavate in diversi modi:</p>
<ul>
<li>Allocazione delle attività indirette</li>
<li>Utilizzo di cicli di allocazione</li>
</ul>
</div>
<div className="section">
<h2>Allocazioni</h2>
<p>Attraverso cicli di allocazione è possibile allocare i costi da centri di costo a vari destinatari.</p>
<p>Driver e oggetti di costo:</p>
<ul>
<li>Driver</li>
<li>Centri di costo e voci di costo mittenti</li>
<li>Oggetti di costo destinatari</li>
</ul>
</div>
<div className="section">
<h2>Splitting e determinazione tariffa</h2>
<p>Splitting: distribuzione dei costi per voce di costo ai tipi di attività.</p>
<p>Determinazione Tariffa: calcolo delle tariffe basato sui costi splittati.</p>
</div>
<div className="section">
<h2>Agenda Modulo CO – Parte III</h2>
<ul>
<li>Contabilità industriale</li>
<li>Valutazione del magazzino (Material Ledger)</li>
<li>COPA: analisi di marginalità</li>
<li>Reporting</li>
</ul>
</div>
<div className="section">
<h2>Chiusure di periodo</h2>
<p>Processo di chiusura contabile degli ordini di produzione:</p>
<ul>
<li>Imputazione Overhead</li>
<li>Rivalutazione tariffe effettive</li>
<li>Calcolo WIP</li>
<li>Calcolo scostamenti</li>
<li>Scarico costi</li>
</ul>
</div>
<div className="section">
<h2>Calcolo degli scostamenti: scostamenti di INPUT</h2>
</div>
<div className="section">
<h2>Calcolo degli scostamenti: scostamenti di OUTPUT</h2>
</div>
<div className="section">
<h2>Chiusure di periodo – Step</h2>
<table>
<thead>
<tr>
<th>ID</th>
<th>Macro-Processo</th>
<th>Azione</th>
<th>Sistema</th>
<th>Transazione SAP</th>
<th>Modulo SAP</th>
<th>Area Aziendale Responsabile</th>
</tr>
      </thead>
      <tbody>
        <tr>
          <td>1.1</td>
          <td>Chiusura Fatturazione Attiva/Passiva</td>
          <td>Registrazione fatture passive</td>
          <td>SAP</td>
          <td>MIRO</td>
          <td>MM</td>
          <td>Amministrazione</td>
        </tr>
        <tr>
          <td>1.2</td>
          <td>Chiusura Fatturazione Attiva/Passiva</td>
          <td>Rilascio fatture bloccate per il pagamento</td>
          <td>SAP</td>
          <td>MRBR</td>
          <td>MM</td>
          <td>Amministrazione</td>
        </tr>
        <tr>
          <td>1.3</td>
          <td>Chiusura Fatturazione Attiva/Passiva</td>
          <td>Completamento movimenti di uscita merci</td>
          <td>SAP</td>
          <td>VL10C</td>
          <td>SD</td>
          <td>Vendite</td>
        </tr>
        <tr>
          <td>1.4</td>
          <td>Chiusura Fatturazione Attiva/Passiva</td>
          <td>Consegne create senza uscite merci</td>
          <td>SAP</td>
          <td>VL06G</td>
          <td>SD</td>
          <td>Vendite</td>
        </tr>
        <tr>
          <td>1.5</td>
          <td>Chiusura Fatturazione Attiva/Passiva</td>
          <td>Lista documenti di fatturazione (consegne non fatturate)</td>
          <td>SAP</td>
          <td>VF04</td>
          <td>SD</td>
          <td>Vendite</td>
        </tr>
        <tr>
          <td>1.6</td>
          <td>Chiusura Fatturazione Attiva/Passiva</td>
          <td>Rilascio fatture in contabilità</td>
          <td>SAP</td>
          <td>VFX3</td>
          <td>SD</td>
          <td>Amministrazione</td>
        </tr>
        <tr>
          <td>1.7</td>
          <td>Chiusura Fatturazione Attiva/Passiva</td>
          <td>Fatturazione Elettronica</td>
          <td>SAP</td>
          <td>Edoc</td>
          <td></td>
          <td>Amministrazione</td>
        </tr>
        <tr>
          <td>2.1</td>
          <td>Chiusure attività di Produzione</td>
          <td>Verifica movimenti materiale in errore</td>
          <td>SAP</td>
          <td>COGI</td>
          <td>PP</td>
          <td>Produzione</td>
        </tr>
        <tr>
          <td>2.2</td>
          <td>Chiusure attività di Produzione</td>
          <td>Verifica Conferme di Produzione</td>
          <td>SAP</td>
          <td>CO1P</td>
          <td></td>
          <td>Produzione</td>
        </tr>
        <tr>
          <td>3.1</td>
          <td>Verifiche Stato Patrimoniale e Conto Economico</td>
          <td>Analisi Conto Economico</td>
          <td>SAP</td>
          <td>F.01</td>
          <td>FI</td>
          <td>Amministrazione</td>
        </tr>
        <tr>
          <td>3.2</td>
          <td>Verifiche Stato Patrimoniale e Conto Economico</td>
          <td>Verifica conti transitori</td>
          <td>SAP</td>
          <td>FBL3N / FAGLB03</td>
          <td>FI</td>
          <td>Amministrazione</td>
        </tr>
        <tr>
          <td>3.3</td>
          <td>Verifiche Stato Patrimoniale e Conto Economico</td>
          <td>Partite aperte fornitori</td>
          <td>SAP</td>
          <td>FBL1N</td>
          <td>FI</td>
          <td>Amministrazione</td>
        </tr>
        <tr>
          <td>3.4</td>
          <td>Verifiche Stato Patrimoniale e Conto Economico</td>
          <td>Partite aperte clienti</td>
          <td>SAP</td>
          <td>FBL5N</td>
          <td>FI</td>
          <td>Amministrazione</td>
        </tr>
        <tr>
          <td>3.5</td>
          <td>Verifiche Stato Patrimoniale e Conto Economico</td>
          <td>Pareggio transitori banca (riconciliazione)</td>
          <td>SAP</td>
          <td>F-03</td>
          <td>FI</td>
          <td>Amministrazione</td>
        </tr>
        <tr>
          <td>3.6</td>
          <td>Verifiche Stato Patrimoniale e Conto Economico</td>
          <td>Verifica fatture da ricevere</td>
          <td>SAP</td>
          <td>FBL3N / FAGLB03</td>
          <td>FI</td>
          <td>Amministrazione</td>
        </tr>
        <tr>
          <td>4.1</td>
          <td>Apertura Periodi Contabili e di Magazzino</td>
          <td>Apertura periodi di Magazzino</td>
          <td>SAP</td>
          <td>MMPV</td>
          <td>MM</td>
          <td>IT</td>
        </tr>
        <tr>
          <td>4.2</td>
          <td>Apertura Periodi Contabili e di Magazzino</td>
          <td>Apertura periodi Contabili</td>
          <td>SAP</td>
          <td>OB52</td>
          <td>FI</td>
          <td>Amministrazione</td>
        </tr>
        <tr>
          <td>5.1</td>
          <td>Chiusure Contabili e Controllo di Gestione</td>
          <td>Registrazione Paghe</td>
          <td>SAP</td>
          <td>ZFI_PAGHE_G020</td>
          <td>FI</td>
          <td>Amministrazione</td>
        </tr>
        <tr>
          <td>5.2</td>
          <td>Chiusure Contabili e Controllo di Gestione</td>
          <td>Contabilizzazione Note Spesa</td>
          <td>SAP</td>
          <td>ZTR_IMP_REG</td>
          <td>FI</td>
          <td>Amministrazione</td>
        </tr>
        <tr>
          <td>5.3</td>
          <td>Chiusure Contabili e Controllo di Gestione</td>
          <td>Scrittura ledger 0L (accruals)</td>
          <td>SAP</td>
          <td>ZFI_EXCEL_UPLOAD</td>
          <td>FI</td>
          <td>Amministrazione</td>
        </tr>
        <tr>
          <td>5.4</td>
          <td>Chiusure Contabili e Controllo di Gestione</td>
          <td>Procedura scrittura ledger civilistico Z1</td>
          <td>SAP</td>
          <td>ZFI_EXCEL_UPLOAD - FB80</td>
          <td>FI</td>
          <td>Controllo di Gestione</td>
        </tr>
        <tr>
          <td>6.1</td>
          <td>Chiusure Cespiti</td>
          <td>Scarico Progetti Macchine a Cespite</td>
          <td>SAP</td>
          <td>CJ8G</td>
          <td>FI-AA</td>
          <td>Controllo di Gestione</td>
        </tr>
        <tr>
          <td>6.2</td>
          <td>Chiusure Cespiti</td>
<td>Scarico Costi Ordini di Investimento</td>
<td>SAP</td>
<td>KO88</td>
<td>CO</td>
<td>Controllo di Gestione</td>
</tr>
<tr>
<td>6.3</td>
<td>Chiusure Cespiti</td>
<td>Bilancio Cespiti in Costruzione</td>
<td>SAP</td>
<td>AR01</td>
<td>FI-AA</td>
<td>Amministrazione / Controllo di Gestione</td>
</tr>
<tr>
<td>6.4</td>
<td>Chiusure Cespiti</td>
<td>Analisi Libro Cespiti</td>
<td>SAP</td>
<td>AR02</td>
<td>FI-AA</td>
<td>Controllo di Gestione</td>
</tr>
<tr>
<td>6.5</td>
<td>Chiusure Cespiti</td>
<td>Calcolo ammortamenti</td>
<td>SAP</td>
<td>AFAB</td>
<td>FI-AA</td>
<td>Amministrazione</td>
</tr>
<tr>
<td>6.6</td>
<td>Chiusure Cespiti</td>
<td>Log Ammortamenti</td>
<td>SAP</td>
<td>AFBP</td>
<td>FI-AA</td>
<td>Amministrazione</td>
</tr>
<tr>
<td>7.1</td>
<td>Chiusure Ordini di Produzione/Progetti e Costo Effettivo</td>
<td>Chiusura Progetti</td>
<td>SAP</td>
<td>CJ20N</td>
<td>CO</td>
<td>Controllo di Gestione</td>
</tr>
<tr>
<td>7.2</td>
<td>Chiusure Ordini di Produzione/Progetti e Costo Effettivo</td>
<td>WIP Progettazione - Installazione</td>
<td>SAP</td>
<td>CJ8G</td>
<td>CO</td>
<td>Controllo di Gestione</td>
</tr>
<tr>
<td>7.3</td>
<td>Chiusure Ordini di Produzione/Progetti e Costo Effettivo</td>
<td>Calcolo WIP Ordini di Produzione</td>
<td>SAP</td>
<td>KKAO</td>
<td>CO</td>
<td>Controllo di Gestione</td>
</tr>
<tr>
<td>7.4</td>
<td>Chiusure Ordini di Produzione/Progetti e Costo Effettivo</td>
<td>Calcolo Varianze Ordini di Produzione</td>
<td>SAP</td>
<td>KKS1</td>
<td>CO</td>
<td>Controllo di Gestione</td>
</tr>
<tr>
<td>7.5</td>
<td>Chiusure Ordini di Produzione/Progetti e Costo Effettivo</td>
<td>Scarico costi Ordini di Produzione</td>
<td>SAP</td>
<td>CO88</td>
<td>CO</td>
<td>Controllo di Gestione</td>
</tr>
<tr>
<td>7.6</td>
<td>Chiusure Ordini di Produzione/Progetti e Costo Effettivo</td>
<td>Chiusura Ordini di Produzione</td>
<td>SAP</td>
<td>COOIS</td>
<td>PP</td>
<td>Controllo di Gestione</td>
</tr>
<tr>
<td>8.1</td>
<td>Allocazioni Periodiche e Calcolo Costi Actual</td>
<td>Ripartizione costi - Centri di Costo</td>
<td>SAP</td>
<td>KSV5</td>
<td>CO</td>
<td>Controllo di Gestione</td>
</tr>
<tr>
<td>8.2</td>
<td>Allocazioni Periodiche e Calcolo Costi Actual</td>
<td>Distribuzione Costi - Profit Center</td>
<td>SAP</td>
<td>FAGLGA15</td>
<td>CO</td>
<td>Controllo di Gestione</td>
</tr>
<tr>
<td>8.3</td>
<td>Allocazioni Periodiche e Calcolo Costi Actual</td>
<td>Splitting Tariffe Produzione</td>
<td>SAP</td>
<td>KSS4</td>
<td>CO</td>
<td>Controllo di Gestione</td>
</tr>
<tr>
<td>8.4</td>
<td>Allocazioni Periodiche e Calcolo Costi Actual</td>
<td>Calcolo Tariffe Effettive</td>
<td>SAP</td>
<td>KSPI</td>
<td>CO</td>
<td>Controllo di Gestione</td>
</tr>
<tr>
<td>8.5</td>
<td>Allocazioni Periodiche e Calcolo Costi Actual</td>
<td>Calcolo Costi Actual</td>
<td>SAP</td>
<td>CKMLCP</td>
<td>CO</td>
<td>Controllo di Gestione</td>
</tr>
<tr>
<td>9.1</td>
<td>Analisi Rimanenze</td>
<td>Valutazione Stock</td>
<td>SAP</td>
<td>J3RFLVMOBVEDH</td>
<td>FI/CO/MM</td>
<td>Controllo di Gestione</td>
</tr>
<tr>
<td>9.2</td>
<td>Analisi Rimanenze</td>
<td>Valutazione WIP</td>
<td>SAP</td>
<td>FAGLL03H</td>
<td>FI/CO</td>
<td>Controllo di Gestione</td>
</tr>
<tr>
<td>10.1</td>
<td>Reporting - Controllo di Gestione</td>
<td>Reporting Produzione/Progetto</td>
<td>SAP</td>
<td>Report BW</td>
<td>PS</td>
<td>Controllo di Gestione</td>
</tr>
<tr>
<td>10.2</td>
<td>Reporting - Controllo di Gestione</td>
<td>Reporting Produzione Laminates/Pouches</td>
<td>SAP</td>
<td>Report BW</td>
<td>PS</td>
<td>Controllo di Gestione</td>
</tr>
<tr>
<td>10.3</td>
<td>Reporting - Controllo di Gestione</td>
<td>Conto economico gestionale - Plant</td>
<td>SAP</td>
<td>Report BW</td>
<td>CO</td>
<td>Controllo di Gestione</td>
</tr>
<tr>
<td>10.4</td>
<td>Reporting - Controllo di Gestione</td>
<td>Conto Economico gestionale - BU</td>
<td>SAP</td>
<td>Report BW</td>
<td>CO</td>
<td>Controllo di Gestione</td>
</tr>
<tr>
<td>11.1</td>
<td>Reporting - Contabilità</td>
<td>Struttura di Bilancio Civilistica</td>
<td>SAP</td>
<td>F.01</td>
<td>FI</td>
<td>Amministrazione</td>
</tr>
<tr>
<td>12.1</td>
<td>Verifiche VIM</td>
<td>Gestione VIM</td>
<td>SAP - VIM</td>
<td>VIM</td>
<td></td>
<td>Amministrazione</td>
</tr>
<tr>
<td>13.1</td>
<td>Caricamento Tagetik</td>
<td>Caricamento dati Consolidato</td>
<td>SAP - BPC</td>
<td>Report Consolidamento</td>
<td></td>
<td>Amministrazione / Controllo di Gestione</td>
</tr>
<tr>
<td>14.1</td>
<td>Chiusure periodi SAP</td>
<td>Chiusura Periodi Contabili</td>
<td>SAP</td>
<td>OB52</td>
<td>FI</td>
<td>Controllo di Gestione</td>
</tr>
</tbody>
</table>
</div>
<div className="section">
<h2>Agenda Modulo CO – Parte III</h2>
<ul>
<li>Contabilità industriale</li>
<li>Valutazione del magazzino (Material Ledger)</li>
<li>COPA: analisi di marginalità</li>
<li>Reporting</li>
</ul>
</div>
<div className="section">
<h2>Material Ledger</h2>
<p>Il Material Ledger è un sotto-modulo dell’area Controlling che consente di gestire le seguenti funzionalità sui costi dei materiali:</p>
<ul>
<li>Valutazione dello stock in più divise</li>
<li>Calcolo dei Costi Effettivi</li>
<li>Valutazione Parallela dei Materiali</li>
</ul>
<p>Il Material Ledger combina i vantaggi del costo a media mobile e del costo standard.</p>
</div>
<div className="section">
<h2>Material Ledger</h2>
<p>Il Material Ledger prevede un cockpit a supporto delle chiusure e reportistica per analizzare l’allocazione delle varianze.</p>
</div>
<div className="section">
<h2>Analisi della profittabilità</h2>
<p>L’analisi della profittabilità, detta anche CO-PA, è l’area di CO dedicata all’analisi della marginalità delle vendite.</p>
<p>Esistono due tipologie di COPA:</p>
<ul>
<li>Basata sul calcolo costi</li>
<li>Contabile</li>
</ul>
<p>Con l’introduzione di S/4Hana è stata resa obbligatoria la COPA contabile.</p>
</div>
<div className="section">
<h2>Obiettivi COPA</h2>
</div>
<div className="section">
<h2>COPA basata sul CCST</h2>
</div>
<div className="section">
<h2>Caratteristiche e Campi Valore</h2>
</div>
<div className="section">
<h2>Agenda Modulo CO – Parte III</h2>
<ul>
<li>Contabilità industriale</li>
<li>Valutazione del magazzino (Material Ledger)</li>
<li>COPA: analisi di marginalità</li>
<li>Reporting</li>
</ul>
</div>
<div className="section">
<h2>Reporting</h2>
<p>SAP offre un’ampia selezione di report per l’area di controlling:</p>
<ul>
<li>Centro di costo</li>
<li>Profit center</li>
<li>Costo del prodotto</li>
<li>COPA</li>
<li>Progetti</li>
<li>Ordini interni</li>
</ul>
<p>È possibile crearne di personalizzati attraverso diverse modalità:</p>
<ul>
<li>Query personalizzate</li>
<li>Report sviluppati con codice ABAP</li>
</ul>
</div>
</div>
);
};
export default CODocumentationPage;