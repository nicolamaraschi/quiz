// ABAPDocumentation.js
import React from 'react';
import '../styles/abapDocumentation.css';

const ABAPDocumentationPage = () => {
    return (
        <div className="abap-documentation">
            <h1>Introduzione alla programmazione ABAP</h1>
            <p>Data: 09/04/2025</p>
            <p>Autori: Alessio Lion / Manuela Annuzzi</p>

            <section className="agenda">
                <h2>Agenda</h2>
                <ul>
                    <li>ABAP</li>
                    <li>Architettura SAP</li>
                    <li>Istanza / Mandante</li>
                    <li>System Landscape</li>
                    <li>Gestione Trasporti</li>
                    <li>Livelli di Modifica</li>
                    <li>Principali transazioni di sviluppo</li>
                    <li>Dictionary</li>
                    <li>Istruzioni base</li>
                    <li>Ampliamenti</li>
                    <li>Utilities (schedulazione Job, mail)</li>
                    <li>Debug</li>
                </ul>
            </section>

            <section className="abap-definition">
                <h2>Cosa significa il termine ABAP</h2>
                <p>Advanced Business Application Programming</p>
                <p>ABAP è il linguaggio di codifica proprietario per SAP per sviluppare oggetti RICEFW.</p>
                <p>RICEFW sta per:</p>
                <ul>
                    <li>R = Reports</li>
                    <li>I = Interface</li>
                    <li>C = Conversion</li>
                    <li>E = Enhancements</li>
                    <li>F = Forms</li>
                    <li>W = Workflow</li>
                </ul>
            </section>

            <section className="developer">
                <h2>Sviluppatore ABAP</h2>
                <p>È una figura tecnica che traduce le esigenze del cliente, rilevate dal consulente funzionale, in software.</p>
            </section>

            <section className="instance">
                <h2>Istanza</h2>
                <p>Un'istanza SAP è un'installazione di un sistema SAP che esegue un insieme specifico di funzioni e servizi.</p>
                <p>Ogni istanza può gestire un database e può essere configurata per eseguire applicazioni diverse.</p>
                <p>Le istanze possono essere distribuite su più server per migliorare le prestazioni e la disponibilità.</p>
                <p>In sostanza, un'istanza SAP rappresenta un ambiente operativo autonomo all'interno dell'ecosistema SAP, dove gli utenti possono accedere e gestire i dati e le applicazioni.</p>
            </section>

            <section className="client">
                <h2>Mandante</h2>
                <p>In SAP, un "mandante" (o "client" in inglese) è un'unità indipendente all'interno di un'istanza SAP che consente di gestire dati e configurazioni in modo separato.</p>
                <p>Ogni mandante ha il proprio set di dati, configurazioni e utenti, il che significa che le informazioni e le personalizzazioni in un mandante non influenzano gli altri mandanti presenti nello stesso sistema.</p>
            </section>

            <section className="architecture">
                <h2>Architettura SAP</h2>
                <p>Ambienti on premise</p>
                <p>Ambienti Private / Public Cloud</p>
            </section>

            <section className="modification-levels">
                <h2>Livelli di Modifica</h2>
                {/* Aggiungi dettagli se necessario */}
            </section>

            <section className="transport-management">
                <h2>Gestione Trasporti</h2>
                <p>Ambiente di Sviluppo</p>
                <ul>
                    <li>Creazione/Modifica oggetto</li>
                    <li>Associazione alla Transport Request (TR)</li>
                    <li>Rilascio della TR (SE10)</li>
                    <li>Trasporto nel Sistema di Quality (STMS)</li>
                </ul>
                <p>Ambiente di Quality</p>
                <ul>
                    <li>Test e approvazione</li>
                    <li>Trasporto nel Sistema di Produzione (STMS)</li>
                </ul>
                <p>Sistema di Produzione</p>
                <ul>
                    <li>Modifiche applicate</li>
                </ul>
            </section>

            <section className="main-transactions">
                <h2>Principali Transazioni</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Tipo</th>
                            <th>Transazione</th>
                            <th>Descrizione</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Dictionary</td>
                            <td>SE11</td>
                            <td>Aggiornamento ABAP Dictionary</td>
                        </tr>
                        <tr>
                            <td>Dictionary</td>
                            <td>SE16</td>
                            <td>Data Browser</td>
                        </tr>
                        <tr>
                            <td>Dictionary</td>
                            <td>SE16N</td>
                            <td>Visualizzazione tabelle generale</td>
                        </tr>
                        <tr>
                            <td>Dictionary</td>
                            <td>SM30</td>
                            <td>Chiamata aggiornamento view</td>
                        </tr>
                        <tr>
                            <td>Workbench</td>
                            <td>SA38</td>
                            <td>ABAP Reporting</td>
                        </tr>
                        <tr>
                            <td>Workbench</td>
                            <td>SE38</td>
                            <td>ABAP Editor</td>
                        </tr>
                        <tr>
                            <td>Workbench</td>
                            <td>SE37</td>
                            <td>Function Modules ABAP</td>
                        </tr>
                        <tr>
                            <td>Workbench</td>
                            <td>SE80</td>
                            <td>Object Navigator</td>
                        </tr>
                        <tr>
                            <td>Workbench</td>
                            <td>SE93</td>
                            <td>Aggiornamento codici transazione</td>
                        </tr>
                        <tr>
                            <td>Workbench</td>
                            <td>SE63</td>
                            <td>Editor di traduzione</td>
                        </tr>
                        <tr>
                            <td>Transport</td>
                            <td>SE01</td>
                            <td>Transport Organizer (view ampliata)</td>
                        </tr>
                        <tr>
                            <td>Transport</td>
                            <td>SE10</td>
                            <td>Transport Organizer</td>
                        </tr>
                        <tr>
                            <td>Transport</td>
                            <td>STMS</td>
                            <td>Transport Management System</td>
                        </tr>
                        <tr>
                            <td>Enhancement</td>
                            <td>CMOD</td>
                            <td>Ampliamenti</td>
                        </tr>
                        <tr>
                            <td>Enhancement</td>
                            <td>SE18</td>
                            <td>BAdI Builder - definizioni</td>
                        </tr>
                        <tr>
                            <td>Enhancement</td>
                            <td>SE19</td>
                            <td>BAdI Builder - implementazioni</td>
                        </tr>
                        <tr>
                            <td>Enhancement</td>
                            <td>SMOD</td>
                            <td>Gestione ampliamenti SAP</td>
                        </tr>
                        <tr>
                            <td>OSS Note</td>
                            <td>SNOTE</td>
                            <td>Assistente nota</td>
                        </tr>
                        <tr>
                            <td>Forms</td>
                            <td>SE71</td>
                            <td>Modulo SAPscript</td>
                        </tr>
                        <tr>
                            <td>Forms</td>
                            <td>SFP</td>
                            <td>Adobe Form</td>
                        </tr>
                        <tr>
                            <td>Forms</td>
                            <td>SMARTFORMS</td>
                            <td>SAP Smart Forms</td>
                        </tr>
                    </tbody>
                </table>
            </section>

            <section className="data-dictionary">
                <h2>Data Dictionary</h2>
                <p>Livelli di Astrazione</p>
                <p>Dominio: Il dominio viene utilizzato per la definizione tecnica di un campo della tabella come il tipo e la lunghezza del campo.</p>
                <p>Il dominio determina:</p>
                <ul>
                    <li>Segno</li>
                    <li>Minuscolo/Maiuscolo</li>
                    <li>Routine di conversione</li>
                    <li>Valori fissi</li>
                    <li>Tabella dei valori</li>
                </ul>
                <p>Transazione SE11</p>
                <p>Elemento Dati: L'elemento è un oggetto che determina le informazioni sui campi come la descrizione del campo, le etichette dei campi (campo corto, campo medio, campo lungo e campo intestazione).</p>
                <p>L'elemento dati è una combinazione di descrizione, tipo di dati e lunghezza.</p>
                <p>Elemento dati = Descrizione + Dominio (Tipo di dati + Lunghezza)</p>
                <p>Transazione SE11</p>
                <p>Struttura : è un tipo di dato complesso che può contenere più campi, ciascuno dei quali può essere di tipo diverso (come numeri interi, stringhe, date, ecc.).</p>
                <p>Le strutture sono utilizzate per rappresentare un insieme di informazioni correlate.</p>
                <p>Transazione per visualizzare SE11:</p>
                <p>Tabella : La tabella è un oggetto dictionary che permette di memorizzare le informazioni nel database.</p>
                <p>Le tabelle contengono:</p>
                <ul>
                    <li>Campi con un nome di campo e un tipo di dati</li>
                    <li>Le chiavi esterne descrivono le relazioni tra altre tabelle</li>
                    <li>Le impostazioni tecniche descrivono come viene creata la tabella nel database</li>
                </ul>
                <p>Transazione SE11:</p>
                <p>Consegna e Aggiornamento:</p>
                <p>Parametrizzazione Tecnica:</p>
            </section>

            <section className="syntax">
                <h2>Sintassi ABAP</h2>
                <p>Statement: Ogni statement comincia con una parola chiave e termina con un punto.</p>
                <p>Non ci sono particolari restrizioni:</p>
                <ul>
                    <li>uno statement per linea</li>
                    <li>Più statement nella stessa linea</li>
                    <li>Uno statement su più linee</li>
                </ul>
                <p>Commenti</p>
                <ul>
                    <li>Intera linea di testo (* )</li>
                    <li>Parte di una linea di testo (" )</li>
                </ul>
                <p>Tipi elementari: sono i tipi di dati di base che possono essere utilizzati per definire le variabili. I più comuni sono :</p>
                <table>
                    <thead>
                        <tr>
                            <th>TIPOLOGIA</th>
                            <th>TIPO DATI</th>
                            <th>DESCRIZIONE</th>
                            <th>Valore Iniziale</th>
                            <th>Lunghezza default</th>
                            <th>Lunghezza Permessa</th>
                            <th>Intervallo</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>CARATTERI</td>
                            <td>C</td>
                            <td>Caratteri alfanumerici</td>
                            <td>Blanks</td>
                            <td></td>
                            <td>1 - max</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>NUMERI</td>
                            <td>N</td>
                            <td>Caratteri numerici</td>
                            <td>00…0</td>
                            <td></td>
                            <td>1 - max</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>I</td>
                            <td>Numeri in formato integer</td>
                            <td>0</td>
                            <td>4</td>
                            <td></td>
                            <td>-2.147.483.648 to +2.147.483.647</td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>P</td>
                            <td>Numeri in formato packed</td>
                            <td>0</td>
                            <td>8</td>
                            <td>1 - 16</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td></td>
                            <td>F</td>
                            <td>Numeri in formato Floating point</td>
                            <td>0.000</td>
                            <td>8</td>
                            <td></td>
                            <td>1e-307 - 1e+307</td>
                        </tr>
                        <tr>
                            <td>DATA</td>
                            <td>D</td>
                            <td>Data nel formato aaammgg</td>
                            <td>0000000</td>
                            <td>8</td>
                            <td>8</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>ORA</td>
                            <td>T</td>
                            <td>Ora nel formato hhmmss</td>
                            <td>000000</td>
                            <td>6</td>
                            <td>6</td>
                            <td></td>
                        </tr>
                        <tr>
                            <td>ESADECIMALE</td>
                            <td>X</td>
                            <td>Numeri esadecimali</td>
                            <td>X'00'</td>
                            <td></td>
                            <td>1 - max</td>
                            <td></td>
                        </tr>
                    </tbody>
                </table>
                <p>Dichiarazioni</p>
                <p>Data object predefiniti: Non devono essere dichiarati. Sono sempre disponibili a tempo di esecuzione.</p>
                <p>SY struttura di tipo SYST definita a livello di Data Dictionary</p>
                <p>SY-CPROG Contains Program Name</p>
                <p>SY-DATUM System Date</p>
                <p>SY-DBCNT Number of entries read by DB Operation</p>
                <p>SY-DYNNR Number of Current Screen</p>
                <p>SY-INDEX Number Of Loop passes</p>
                <p>SY-LANGU SAP Log on Language Key</p>
                <p>SY-MANDT Client Number For SAP Log On</p>
                <p>SY-MSGID Message ID</p>
                <p>SY-MSGTY Message Type</p>
                <p>SY-MSGNO Message Number</p>
                <p>SY-MSGV1 Message Variable1</p>
                <p>SY-MSGV2 Message Variable2</p>
                <p>SY-MSGV3 Message Variable3</p>
                <p>SY-MSGV4 Message Variable4</p>
                <p>SY-REPID Report Name in ABAP</p>
                <p>SY-SUBRC Return Value after specific ABAP Statement</p>
                <p>SY-TABIX Current line of Internal Table</p>
                <p>SY-TCODE Current Transaction Code</p>
                <p>SY-TIMLO Local Time Of User</p>
                <p>SY-UZEIT System Time</p>
                <p>Statement di Assegnamento - MOVE:</p>
                <p>MOVE {`<f1>`} TO {`<f2>`}.</p>
                <p>equivalente a</p>
                <p>{`<f2>`} = {`<f1>`}.</p>
                <p>Si può assegnare:</p>
                <ul>
                    <li>una variabile</li>
                    <li>una costante</li>
                    <li>un valore fisso</li>
                    <li>un simbolo di testo</li>
                </ul>
                <p>Statement di Assegnamento – MOVE-CORRESPONDING:</p>
                <p>MOVE-CORRESPONDING {`<struct1>`} TO {`<struct2>`}.</p>
                <p>La corrispondenza avviene attraverso i nomi dei campi all'interno delle strutture.</p>
                <p>Statement di inizializzazione – CLEAR:</p>
                <p>CLEAR {`<f>`}.</p>
                <p>Assegna alla variabile {`<f>`} il valore iniziale opportuno a seconda del tipo.</p>
                <p>CLEAR {`<struct>`}</p>
                <p>Assegna ad ogni campo della struttura il valore iniziale opportuno a seconda del tipo.</p>
                <p>Espressioni Logiche:</p>
                <p>Operazioni Aritmetiche:</p>
                <p>Operatori Logici: AND, OR, NOT</p>
                <p>Le espressioni logiche vengono processate da sinistra verso destra</p>
                <p>Operatori Di Relazione:</p>
                <p>Strutture di controllo:</p>
                <p>CASE {`<f>`}.</p>
                <p>WHEN {`<f11>`} [OR {`<f12>`} OR ...].</p>
                <p>{`<Statement block>`}</p>
                <p>WHEN {`<f21>`}.[OR {`<f22>`} OR ...]</p>
                <p>{`<Statement block>`}</p>
                <p>WHEN {`<f31>`} [OR {`<f32>`} OR ...].</p>
                <p>{`<statement block>`}</p>
                <p>WHEN ...</p>
                <p>.....</p>
                <p>WHEN OTHERS.</p>
                <p>{`<statement block>`}</p>
                <p>ENDCASE.</p>
                <p>IF {`<condition1>`}.</p>
                <p>{`<statement block>`}</p>
                <p>ELSEIF {`<condition2>`}</p>
                <p>{`<statement block>`}.</p>
                <p>ELSEIF {`<condition3>`}.</p>
                <p>{`<statement block>`}</p>
                <p>...</p>
                <p>ELSE.</p>
                <p>{`<statement block>`}</p>
                <p>ENDIF.</p>
                <p>Cicli:</p>
                <p>Per cicli su tabelle interne</p>
                <p>LOOP {`<Tables>`} INTO {`<Structure>`}</p>
                <p>{`<statement block>`}</p>
                <p>ENDLOOP.</p>
                <p>EXIT Forza l'uscita dal ciclo</p>
                <p>CONTINUE Interrompe il ciclo corrente e passa al ciclo successivo</p>
                <p>WRITE:/ {`<Var1>`}, {`<Var2>`}.</p>
                <p>Scrive il contenuto di una variabile in un certo formato a seconda del tipo di dato.</p>
                <p>SKIP.</p>
                <p>Scrive una linea vuota</p>
                <p>ULINE.</p>
                <p>Scrive linea tratteggiata</p>
                <p>Tabelle Interne: Append, Collect, Modify</p>
                <p>Tabelle Interne: Read / Delete Table</p>
                <p>READ TABLE {`<itab>`} WITH TABLE KEY {`<k1>`} = {`<f1>`} ... {`<kn>`} = {`<fn>`} INTO {`<wa>`}</p>
                <p>SY-SUBRC = 0 - linea trovata</p>
                <p>SY-SUBRC = 4 - linea non trovata</p>
                <p>DELETE TABLE {`<itab>`} FROM {`<wa>`}.</p>
                <p>SY-SUBRC = 0 - linea trovata e contenuto dei campi NON chiave copiati</p>
                <p>SY-SUBRC = 4 - linea non trovata</p>
                <p>Operazioni su tabelle: Select con dichiarazione di variabile</p>
                <p>Selezioni di 1 o più record</p>
                <p>Selezione di 1 Record</p>
                <p>SELECT SINGLE {`<fields>`} FROM {`<table>`} INTO {`<structure>`} WHERE {`<condition>`}</p>
                <p>Esempio:</p>
                <p>DATA: ls_mara TYPE mara.</p>
                <p>SELECT SINGLE * FROM mara INTO ls_mara WHERE matnr = 'ABC'.</p>
                <p>SELECT {`<fields>`} FROM {`<table>`} INTO TABLE {`<InternalTable>`} WHERE {`<condition>`}</p>
                <p>Esempio:</p>
                <p>DATA: lt_mara TYPE TABLE OF mara.</p>
                <p>SELECT * FROM mara INTO TABLE LT_MARA WHERE mtart = 'FERT' AND mkatl IN S_MKATL. (Range)</p>
                <p>Gestione risultato query</p>
                <p>SY-SUBRC = 0 - Records trovati</p>
                <p>SY-SUBRC = 4 – Nessun record non trovato</p>
                <p>Operazioni su tabelle: Select con dichiarazione in line</p>
                <p>Selezioni di 1 o più record</p>
                <p>Selezione di 1 Record</p>
                <p>SELECT SINGLE {`<fields>`} FROM {`<table>`} INTO @DATA({`<structure>`}) WHERE {`<condition>`}</p>
                <p>Esempio:</p>
                <p>SELECT SINGLE * FROM mara INTO @DATA(ls_mara) WHERE matnr = 'ABC'.</p>
                <p>SELECT {`<fields>`} FROM {`<table>`} INTO TABLE @DATA({`<InternalTable>`}) WHERE {`<condition>`}</p>
                <p>Esempio:</p>
                <p>SELECT * FROM mara INTO TABLE @DATA(LT_MARA) WHERE mtart = 'FERT' AND mkatl IN @S_MKATL. (Range)</p>
                <p>Gestione risultato query</p>
                <p>SY-SUBRC = 0 - Records trovati</p>
                <p>SY-SUBRC = 4 – Nessun record non trovato</p>
                <p>Operazioni su tabelle: Aggiornamento</p>
                <p>Esiste un insieme di statement per modificare il contenuto delle tabelle di database.</p>
                <p>ATTENZIONE:</p>
                <p>Questi statement NON eseguono verifiche di consistenza di dati né controllo di autorizzazioni.</p>
                <p>Qualunque modifica alle tabelle standard di database va fatta mediante le tecniche che si basano sul concetto di transazione (vedi batch-input) o BAPI</p>
                <p>UPDATE, INSERT, DELETE sulle tabelle standard NON è CONSENTITO</p>
                <p>Operazioni su tabelle: Inserimento / Modifica</p>
                <p>INSERT</p>
                <p>MODIFY</p>
                <p>MODIFY {`<dbtab>`} FROM {`<wa>`}.</p>
                <p>Se il record con il valore di chiave primaria specificato viene trovato il record viene complemente sovrascritto con il contenuto dell'area di lavoro.</p>
                <p>Se il record non viene trovato allora viene inserito</p>
                <p>INSERT {`<dbtab>`} FROM {`<wa>`}.</p>
                <p>L'area di appoggio è {`<wa>`}</p>
                <p>Gestione risultato modifica</p>
                <p>SY-SUBRC = 0 - Modifica avvenuta</p>
                <p>SY-SUBRC = 4 – Errore in aggiornamento tabella</p>
                <p>Operazioni su tabelle: Modifica / Cancellazione</p>
                <p>UPDATE</p>
                <p>DELETE</p>
                <p>DELETE {`<dbtab>`} FROM {`<wa>`}.</p>
                <p>DELETE {`<dbtab>`} WHERE {`<CONDITION>`}</p>
                <p>Se il record con il valore di chiave primaria specificato viene trovato il record viene cancellato</p>
                <p>UPDATE {`<dbtab>`} FROM {`<wa>`}.</p>
                <p>UPDATE {`<dbtab>`} SET col1 = 'XX' col2 = 'YY' … WHERE {`<CONDITION>`}</p>
                <p>Gestione risultato modifica</p>
                <p>SY-SUBRC = 0 - Modifica avvenuta</p>
                <p>SY-SUBRC = 4 – Errore in aggiornamento tabella</p>
            </section>

            <section className="modularization">
                <h2>Modularizzazione</h2>
                <p>Una sequenza di statement viene inserita in un modulo anziché all'interno del sorgente principale. Gli statement vengono comunque eseguiti come se facessero parte del programma principale</p>
                <p>Tipi di Modularizzazione:</p>
                <ul>
                    <li>Subroutines: Possono essere definite in qualunque programma ABAP. Solitamente vengono utilizzate per implementare funzioni utilizzate più volte all'interno del programma. Di solito vengono richiamate dal programma nel quale sono definite.</li>
                    <li>Function Modules: Possono essere richiamate da qualunque programma ABAP</li>
                    <li>Metodi: programmazione ad oggetti</li>
                </ul>
                <p>Subroutines</p>
                <p>Le subroutine possono accedere ai dati definiti a livello di programma principale ("dati globali"), i dati possono essere passati con utilizzo di parametri:</p>
                <p>USING e CHANGING che seguono lo statement FORM definiscono i parametri formali della subroutine</p>
                <p>USING e CHANGING che seguono lo statement PERFORM definiscono i parametri attuali della subroutine</p>
                <p>La sequenza dei parametri è fissata in fase di definizione</p>
                <p>Function Module:</p>
                <p>Sono procedure definite all'interno di Function Group.</p>
                <p>Un gruppo funzione è un tipo particolare di programma che contiene la definizione di più Function Module logicamente correlate fra loro.</p>
                <p>I Function Module fanno parte di una libreria centrale e per questo possono essere richiamate da qualsiasi programma ABAP.</p>
                <p>Vengono implementate mediante Function Builder (transazione SE37).</p>
                <p>Parametri:</p>
                <p>IMPORT sono i parametri che devono essere forniti in input al Function Module dal programma chiamante a meno che non siano esplicitamente dichiarati come "opzionali"; sono sempre passati per valore e non possono essere modificati all'interno del Function Module</p>
                <p>EXPORT sono i parametri che il Function Module restituisce al programma chiamante, sono sempre opzionali.</p>
                <p>CHANGING devono essere forniti in input al Function Module dal programma chiamante a meno che non siano dichiarati opzionali; possono essere modificati all'interno del Function Module</p>
                <p>TABLES sono parametri di tipo tabella interna che vengono gestiti come i parametri dichiarati nella sezione CHANGING</p>
                <p>ECCEZIONI situazioni di errore prevista nell'implementazione del Function Module, gestita dall'istruzione RAISE {`<except>`}, dove {`<except>`} è il nome dell'eccezione previsto nella definizione del Function Module (al momento della chiamata viene valorizzata opportunamente la variabile di sistema sy-subrc</p>
            </section>

            <section className="enhancement">
                <h2>Enhancement</h2>
                {/* Aggiungi dettagli se necessario */}
            </section>

            <section className="oss-notes">
                <h2>NOTE OSS (Online Service System)</h2>
                <p>Sono documenti ufficiali forniti da SAP che contengono informazioni importanti su correzioni, aggiornamenti e miglioramenti per i prodotti SAP.</p>
                <p>Queste note possono includere soluzioni a problemi noti, suggerimenti per l'implementazione e dettagli su nuove funzionalità.</p>
    <p>Per la consultazione è possibile accedere al link: <a href="https://me.sap.com/home" target="_blank" rel="noopener noreferrer">https://me.sap.com/home</a></p>
  </section>

  <section className="user-exit">
    <h2>USER-EXIT SD</h2>
    <p>Le User-Exit sono un tipo di ampliamenti SAP originariamente sviluppate per il modulo SD.</p>
    <p>Concepite con lo scopo di non dover modificare i programmi standard, contengono una serie di subroutine che vengono richiamate nei vari punti di elaborazione.</p>
    <p>Transazione SE80 classe di sviluppo VMOD</p>
  </section>

  <section className="user-exit-other-modules">
    <h2>USER-EXIT ALTRI MODULI</h2>
    <p>Per ricercare se esistono delle User Exit su una determinata transazione (es. ME22N mod. ODA) bisogna ricercare il Function Module MODX_FUNCTION_ACTIVE_CHECK.</p>
    <p>Andare alla transazione SE37</p>
    <p>Visualizzare la function MODX_FUNCTION_ACTIVE_CHECK</p>
    <p>Mettere un break-point sulla linea: endfunction.</p>
    <p>Testare il campo “l_funcname” che conterrà il nome della user exit chiamata.</p>
    <p>Per trovare l’ampliamento del quale fa parte la User-Exit trovata, andare alla transazione SMOD</p>
  </section>

  <section className="badi">
    <h2>BADI (Business Add-In)</h2>
    <p>E’ una tecnologia utilizzata per estendere le funzionalità standard di SAP senza modificare il codice sorgente originale.</p>
    <p>Le BADI sono basate su un'architettura di programmazione orientata agli oggetti e consentono di implementare logiche personalizzate in punti specifici di un'applicazione SAP.</p>
    <p>La transazione per visualizzare una BADI è la SE18.</p>
    <p>Come trovo le BADI: Transazione SE24 CLASSE CL_EXITHANDLER METODO GET_INSTANCE</p>
  </section>

  <section className="job-scheduling">
    <h2>Schedulazione JOB</h2>
    <p>La schedulazione dei job in SAP è un processo fondamentale per automatizzare l'esecuzione di attività ripetitive, come report, aggiornamenti di dati o processi di estrazione.</p>
    <p>Usare la transazione SM36 per creare e gestire i job.</p>
    <p>Ecco alcuni passaggi base per schedulare un job:</p>
    {/* Aggiungi passaggi se necessario */}
  </section>

  <section className="job-monitoring">
    <h2>Monitoring JOB</h2>
    <p>In SAP, si può utilizzare la transazione SM37 per visualizzare e monitorare i job in background.</p>
    <p>Si possono filtrare i job in base a vari criteri, come lo stato, l'utente che ha avviato il job, e le date.</p>
  </section>

  <section className="mail">
    <h2>Visualizza MAIL</h2>
    <p>In SAP, si può utilizzare la transazione SOST per monitorare e gestire i messaggi di posta elettronica inviati dal sistema.</p>
    <p>Permette di visualizzare lo stato dei messaggi, controllare eventuali errori e gestire le code di invio.</p>
  </section>

  <section className="utilities">
    <h2>Utility – Comandi veloci</h2>
    <ul>
      <li>/nse80 - Richiama la transazione nella stessa sessione</li>
      <li>/*se80 - Richiama la transazione nella stessa sessione e salta la schermata iniziale</li>
      <li>/ose80 - Richiama la transazione in una nuova sessione, mantenendo anche quella iniziale</li>
      <li>/n - Termina la sessione corrente (Attenzione: tutte le modifiche non vengono salvate)</li>
      <li>/i - Cancella la sessione corrente</li>
      <li>/o - Apre una nuova sessione</li>
      <li>/ns000 - Termina la transazione corrente e riparte dal menu iniziale</li>
      <li>/nend - Logs off SAP</li>
      <li>/nex - Log off SAP senza nessuna conferma (Attenzione: tutte le modifiche non vengono salvate)</li>
      <li>/h - Inizia il Debugger</li>
    </ul>
  </section>

  <section className="debugger">
    <h2>Debugger</h2>
    <p>È lo strumento principale per individuare ed eliminare errori nel codice ABAP.</p>
    <p>Permette di eseguire programmi ABAP step-by-step e di esaminare l’elaborazione degli statemens del programma</p>
    <p>Come attivare il Debugger</p>
    <ul>
      <li>Inserendo un Break-Point nella riga che vogliamo esaminare</li>
      <li>Inserendo il comando /h nell’input delle transazioni prima di eseguire un programma</li>
      <li>Tramite lo statement BREAK-POINT direttamente all’interno del nostro programma. Attenzione, in questo modo tutte le utenze che eseguiranno il report, attiveranno il debug.</li>
      <li>Si può usare una variante dello statement per limitare il debug ad una sola utenza: BREAK &lt;utente&gt;</li>
    </ul>
    <p>Overview</p>
    <p>Variabili (Visualizza/Modifica)</p>
<p>Principali funzionalità</p>
<ul>
<li>Passo Singolo (F5) - il controllo debugger si sposta alla riga di codice successiva nel debug. Se la riga successiva è una chiamata a un altro programma, (ad esempio, il modulo funzione), il controllo passa a quel programma.</li>
<li>Esegui (F6) - il controllo debugger si sposta solo sulla riga di codice successiva nello stesso programma, senza entrare nel codice della funzione o del programma chiamato nella riga sucessiva.</li>
<li>Ritorno (F7) - il controllo del debugger torna al programma chiamante. Utile quando ci si trova in un loop o all'interno di un modulo funzione richiamato dal programma principale e si desidera tornare al programma principale.</li>
<li>Esegui (F8) - il controllo del debugger si sposta al successivo set di punti di interruzione, se presente. In caso contrario, il debug viene disattivato e il programma viene eseguito completamente.</li>
</ul>
<p>Watchpoints</p>
<p>Consentono di interrompere l’esecuzione di un programma quando una variabile assume un certo valore</p>
<p>Altre funzionalità</p>
<p>Creare punto di interruzione</p>
</section>
</div>
);
};

export default ABAPDocumentationPage;