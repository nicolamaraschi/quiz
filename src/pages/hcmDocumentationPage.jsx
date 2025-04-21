import React from 'react';
import '../styles/hcmDocumentation.css';

const HorsaAcademy = () => {
  return (
    <div className="horsa-academy">
      <header className="header">
        <h1>Academy Horsa Run 2025</h1>
        <p>LoB Human Capital Management</p>
        <p>14-15 aprile Fabrizio Ciccone</p>
      </header>

      <section className="agenda">
        <h2>Agenda</h2>
        <ul>
          <li>Highlight Horsa</li>
          <li>La nostra Value Proposition</li>
          <li>Add-on Lob HCM</li>
          <li>SAP SFSF</li>
          <li>SAP Resources and Channels</li>
          <li>SAP SuccessFactors Employee Central</li>
        </ul>
      </section>

      <section className="horsa-at-a-glance">
        <h2>Horsa at a Glance</h2>
        <div className="competencies">
          <p>Aree di Competenza</p>
          <ul>
            <li>ERP PPM</li>
            <li>BA DMS</li>
            <li>CRM</li>
            <li>CLOUD</li>
            <li>TM</li>
            <li>HRM</li>
            <li>MES</li>
            <li>PLM</li>
          </ul>
        </div>
        <div className="industries">
          <p>Settori</p>
          <ul>
            <li>MANUFACTURING</li>
            <li>CONSUMER PRODUCT</li>
            <li>PACKAGING</li>
          </ul>
        </div>
        <div className="platform">
          <p>Cloud and Technology Enterprise Digital Platform</p>
        </div>
        <div className="customer-engagement">
          <p>Customer Engagement</p>
        </div>
        <div className="people-management">
          <p>People Management</p>
        </div>
        <div className="planning-analytics">
          <p>Planning and Analytics</p>
        </div>
        <div className="awards">
          <p>OUR AWARDS</p>
          <ul>
            <li>SAP Security</li>
            <li>CONTINUOUS GROWING</li>
            <li>SAP Gold Partner</li>
            <li>+500 PEOPLE</li>
            <li>+60M€ REVENUE</li>
            <li>+350 CUSTOMERS</li>
            <li>+80 INTERNATIONAL PROJECTS</li>
            <li>SAP Certified Solution</li>
            <li>SAP Partner of the Year and Cloud Digital Transformation Champion 2024</li>
          </ul>
        </div>
      </section>

      <section className="lob-hcm">
        <h2>LoB Human Capital Management</h2>
        <div className="strategy">
          <p>Qual è la tua HR Digital Transformation Strategy?</p>
          <ul>
            <li>Processes</li>
            <li>Technology</li>
            <li>Adoption</li>
          </ul>
        </div>
        <div className="process-technology">
          <p>Processes</p>
          <ul>
            <li>Fit-to-Standard Process</li>
            <li>Solution Realization</li>
            <li>Key Roles</li>
          </ul>
        </div>
        <div className="as-is-to-be">
          <p>AS-IS Process Inputs:</p>
          <p>TO-BE Process Outputs:</p>
        </div>
        <div className="process-mapping">
          <p>AS-IS Process Mapping</p>
          <p>TO-BE Process Design & Maps</p>
        </div>
        <div className="technology">
          <p>Technology</p>
          <p>Fast Run Scope requirements predefinito</p>
          <p>Features basate su Best Practice e possibilità di estensione su esigenze del cliente</p>
        </div>
        <div className="implementation">
          <p>Implementazione Fit-To-Standard SAP</p>
          <p>Project Workshop mirati sul disegno della soluzione</p>
          <p>Roadmap snella</p>
          <p>Capacity cliente ridotta</p>
          <p>Investimento modulare</p>
          <p>SAP Activate + Horsa Gold Setup</p>
        </div>
        <div className="gold-setup">
          <p>Gold Setup</p>
          <p>Workshop in modalità ready to go</p>
          <p>Acceleratore su tempi ed impegno del cliente</p>
          <p>Investimento ridotto</p>
          <p>Condividiamo con il cliente le best practice SAP SuccessFactors arricchite dall’esperienza Horsa</p>
        </div>
        <div className="integration">
          <p>Integrazione SAP SF vs Zucchetti Powered by Horsa</p>
          <p>Core HR</p>
          <ul>
            <li>Allineamento giornaliero delle anagrafiche</li>
            <li>Inserimento dei nuovi assunti</li>
            <li>Storicizzazione delle informazioni oggetto di variazione</li>
            <li>Aggiornamento cessazione rapporto di lavoro</li>
          </ul>
          <p>Pillars</p>
          <ul>
            <li>DATI: sincronizzazione dei campi Best Practice SAP SuccessFactors per popolare le tabelle soggetto e rapporto di lavoro Zucchetti</li>
            <li>TIMING: schedulazione giornaliera e/o on demand</li>
            <li>TECNOLOGIA: lettura via API SAP SuccessFactors, trasformazione via SAP BTP, scrittura su Zucchetti via Web Services o flat file su SFTP</li>
          </ul>
        </div>
      </section>

      <section className="adoption">
        <h2>Adoption</h2>
        <div className="communication">
          <p>Mail di Lancio</p>
          <p>Comunicazione via email del live progettuale, credenziali di accesso al sistema e istruzioni di base per il setup</p>
        </div>
        <div className="video-tutorial">
          <p>Video Tutorial</p>
          <p>Video tutorial per esaltare l’employee experience</p>
        </div>
        <div className="user-manual">
          <p>User Manual</p>
          <p>Manuali dettagliati a supporto dell’utilizzo del sistema da parte dei diversi key user</p>
        </div>
        <div className="online-event">
          <p>Evento on-line</p>
          <p>Sessione on-line a supporto del live con introduzione, experience ed overview dei processi in scope</p>
        </div>
        <div className="quick-guide">
          <p>Quick Guide</p>
          <p>Guide rapide infografiche illustrative di singole funzionalità di processo</p>
        </div>
      </section>

      <section className="employee-experience">
        <h2>L’esperienza dei dipendenti al centro del workplace digitale</h2>
        <div className="hr-needs">
          <p>HR Needs</p>
          <p>DIGITALIZZARE ED ARMONIZZARE I PROCESSI HR «From Hire to Retire»</p>
        </div>
        <div className="employee-journey">
          <p>My Candidate Experience</p>
          <p>My Employee / Manager Experience</p>
          <p>My HR Admin Experience</p>
        </div>
        <div className="ai-assisted">
          <p>AI Assisted Writing across the Suite</p>
          <p>Compensation Insights</p>
          <p>Promote via Joule</p>
          <p>Assisted Insights into Performance Management</p>
          <p>Position Creation via Joule</p>
          <p>Enhanced Job Descriptions</p>
          <p>Candidate Skill Extraction & Matching</p>
          <p>AI-Assisted Applicant Screening</p>
          <p>Interview Question Generation</p>
          <p>AI-assisted Interview Summarization</p>
        </div>
      </section>

      <section className="ai-employee-journey">
        <h2>AI within the Employee Journey</h2>
        <div className="hr-admin">
          <p>HR Admin</p>
          <p>Resume Skills inference</p>
          <p>Enhance job description</p>
          <p>Interview Questions</p>
          <p>Candidate skills matching</p>
          <p>Create a position with Joule</p>
          </div>
    <div className="manager">
      <p>Manager</p>
      <p>AI-assisted Goal Insights</p>
      <p>AI-assisted Summaries for Detailed 360 Reports</p>
    </div>
    <div className="candidate">
      <p>Candidate</p>
      <p>Deep Learning AI</p>
      <p>Conversational AI</p>
      <p>Generative AI</p>
    </div>
  </section>

  <section className="methodology-governance">
    <h2>Metodologia e Governance</h2>
    <div className="project-plan">
      <p>Project Plan</p>
      <p>Metodologia Agile Classica</p>
      <p>Metodologia Agile + Gold Setup</p>
    </div>
    <div className="project-committee">
      <p>Project Committee</p>
      <p>HORSA Project Manager</p>
      <p>CUSTOMER Project Manager</p>
    </div>
    <div className="steering-committee">
      <p>Steering Committee</p>
      <p>Project Committee</p>
      <p>HORSA Project Manager</p>
      <p>CUSTOMER Project Manager</p>
      <p>HORSA Quality Assurer</p>
      <p>CUSTOMER Project Sponsor</p>
    </div>
  </section>

  <section className="sap-resources">
    <h2>SAP Channels, Resources & Tools</h2>
    <div className="resources">
      <p>SAP Partner Portal</p>
      <p>SAP Help Portal</p>
      <p>SAP Learning HUB</p>
      <p>Knowledge Base Articles</p>
      <p>SAP SuccessFactors Community</p>
      <p>Implementation Design Principles for SAP SuccessFactors Solutions</p>
      <p>SAP SuccessFactors Product Release & Road Map Information</p>
      <p>SAP Customer Influence Portal</p>
    </div>
  </section>

  <section className="employee-central">
    <h2>SAP SuccessFactors Employee Central</h2>
    <div className="foundation-objects">
      <p>Foundation Objects</p>
      <p>Job Structure</p>
      <p>Pay Structure</p>
      <p>Organization Structure</p>
      <p>Location Structure</p>
    </div>
    <div className="propagation">
      <p>Propagation Rules</p>
      <p>Data Flow from Job – Position – Employee using Propagation</p>
    </div>
    <div className="employee-profile">
      <p>Employee Profile</p>
      <p>Me</p>
      <p>Employment</p>
      <p>Compensation</p>
    </div>
  </section>

  <section className="employee-experience-management">
    <h2>Employee Experience Management</h2>
    <div className="org-chart">
      <p>Org Chart Employee Profile Self Service</p>
    </div>
    <div className="integrations">
      <p>Integrations</p>
    </div>
  </section>

  <section className="software-releases">
    <h2>Software Releases</h2>
    <div className="release-updates">
      <p>SuccessFactors releases a first half and second half software update each year</p>
<p>Preview environment</p>
<p>Productive environment</p>
</div>
<div className="deprecation">
<p>Deprecation Milestone Definition</p>
<p>End of Development</p>
<p>End of Maintenance</p>
<p>Deleted</p>
</div>
</section>
<section className="tenants-provisioning">
  <h2>SAP SuccessFactors Tenants and Provisioning</h2>
  <div className="data-center">
    <p>Data Center</p>
  </div>
  <div className="environment">
    <p>Environment</p>
  </div>
  <div className="instance">
    <p>Instance (Tenant)</p>
  </div>
  <div className="provisioning">
    <p>Provisioning</p>
  </div>
  <div className="instance-strategy">
    <p>Instance Strategy Considerations</p>
  </div>
</section>

<section className="user-permission">
  <h2>User and Permission</h2>
  <div className="user-access">
    <p>SAP HCM: user created in SAP HCM to access the system</p>
    <p>SAP SUCCESSFACTORS: user generated by the system</p>
  </div>
  <div className="single-sign-on">
    <p>Single Sign On</p>
  </div>
  <div className="role-based-permission">
    <p>Role-Based Permissions</p>
    <p>Permission roles</p>
    <p>Permissions</p>
    <p>Role assignment</p>
    <p>Access population (granted group)</p>
    <p>Target population</p>
  </div>
  <div className="permission-groups">
    <p>Permission Groups</p>
  </div>
</section>

<section className="performance-goals">
  <h2>Performance & Goals</h2>
  <div className="goal-plan">
    <p>Goal Plan</p>
  </div>
  <div className="continuous-performance">
    <p>Continuous Performance Management</p>
  </div>
  <div className="performance-review">
    <p>Performance Review</p>
  </div>
  <div className="calibration">
    <p>Calibration</p>
  </div>
</section>
</div>
);
}
export default HorsaAcademy;
