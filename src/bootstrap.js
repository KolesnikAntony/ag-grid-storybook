import React from 'react';
import { createRoot } from 'react-dom/client';
import AppContainer from './AppContainer';

class Communicator {
  constructor() {
    this.externalProps = undefined;
    this.root = (container) => createRoot(container);
  }

  setProps(props) {
    this.externalProps = props;
  }

  renderDev() {
    const container = document.getElementById('root');
    if (container) {
      this.externalProps = {
        idPatient: 23246,
        idMedicalEstablishment: 1,
        language: 'fr',
        idConsultations: 999,
      };
      this.render(container);
    }
  }

  renderProd() {
    if (window.TreatmentCommunicatorParent) {
      window.TreatmentCommunicatorParent.setCommunicator(this);
    } else {
      this.renderDev();
    }
  }

  render(container) {
    this.root(container).render(<AppContainer {...this.externalProps} />);
  }
}

const communicator = new Communicator();
communicator.renderProd();
