// src/pages/AboutPage.jsx
import React from 'react';
import styled from 'styled-components';

const AboutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
`;

const Title = styled.h1`
  font-size: 2rem;
  margin-bottom: 1.5rem;
  color: #0056b3;
`;

const Section = styled.section`
  margin-bottom: 2.5rem;
`;

const SectionTitle = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 1rem;
  color: #333;
`;

const Text = styled.p`
  font-size: 1.1rem;
  line-height: 1.6;
  margin-bottom: 1rem;
  color: #444;
`;

const ModuleList = styled.ul`
  margin-left: 1.5rem;
  margin-bottom: 1.5rem;
`;

const ModuleItem = styled.li`
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
`;

const AboutPage = () => {
  return (
    <AboutContainer>
      <Title>Informazioni su SAP ERP Quiz</Title>
      
      <Section>
        <SectionTitle>Cosa è SAP ERP?</SectionTitle>
        <Text>
          SAP ERP (Enterprise Resource Planning) è una suite di applicazioni integrate che permette alle aziende 
          di gestire tutte le operazioni di business in un unico sistema. SAP è uno dei sistemi ERP più utilizzati 
          al mondo e offre moduli specializzati per diverse aree funzionali dell'azienda.
        </Text>
      </Section>
      
      <Section>
        <SectionTitle>Moduli SAP ERP Inclusi nel Quiz</SectionTitle>
        <ModuleList>
          <ModuleItem>
            <strong>Finance (FI)</strong> - Gestione della contabilità generale, contabilità clienti, contabilità 
            fornitori, cespiti e reportistica finanziaria.
          </ModuleItem>
          <ModuleItem>
            <strong>Materials Management (MM)</strong> - Gestione degli acquisti, valutazione fornitori, 
            gestione scorte, verifica fatture e gestione inventario.
          </ModuleItem>
          <ModuleItem>
            <strong>Sales and Distribution (SD)</strong> - Gestione vendite, gestione ordini clienti, 
            spedizioni, fatturazione e gestione prezzi.
          </ModuleItem>
          <ModuleItem>
            <strong>Controlling (CO)</strong> - Contabilità centri di costo, contabilità commesse, 
            calcolo profittabilità e controlling aziendale.
          </ModuleItem>
          <ModuleItem>
            <strong>Production Planning (PP)</strong> - Pianificazione della produzione, MRP (Material Requirements Planning), 
            schedulazione della produzione e gestione degli ordini di produzione.
          </ModuleItem>
        </ModuleList>
      </Section>
      
      <Section>
        <SectionTitle>Come Utilizzare il Quiz</SectionTitle>
        <Text>
          Questo quiz è progettato per aiutarti a testare e migliorare le tue conoscenze sui vari moduli SAP ERP.
          Ogni modulo contiene una serie di domande con risposte multiple. Seleziona la risposta che ritieni 
          corretta e al termine del quiz potrai vedere il tuo punteggio e rivedere le domande con le risposte corrette.
        </Text>
        <Text>
          Puoi scegliere di fare il quiz su un modulo specifico in base alle tue esigenze o interessi. 
          Usa questo strumento come supporto all'apprendimento o per prepararti a certificazioni SAP.
        </Text>
      </Section>
      
      <Section>
        <SectionTitle>Informazioni Tecniche</SectionTitle>
        <Text>
          Questa applicazione è stata sviluppata utilizzando React.js e include funzionalità come:
        </Text>
        <ModuleList>
          <ModuleItem>Navigazione tra diversi moduli SAP</ModuleItem>
          <ModuleItem>Sistema di quiz con domande a risposta multipla</ModuleItem>
          <ModuleItem>Calcolo automatico del punteggio</ModuleItem>
          <ModuleItem>Revisione delle risposte con indicazione delle risposte corrette</ModuleItem>
          <ModuleItem>Interfaccia utente intuitiva e responsive</ModuleItem>
        </ModuleList>
      </Section>
    </AboutContainer>
  );
};

export default AboutPage;