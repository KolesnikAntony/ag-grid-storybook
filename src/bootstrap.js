import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

class Communicator {
  constructor() {
    this.externalProps = undefined;
    this.refreshListAction = () => console.log('refreshListAction is not set');
  }

  setProps(props) {
    this.externalProps = props;
  }

  setRefreshListAction(action) {
    this.refreshListAction = action;
  }

  refreshList() {
    this.refreshListAction();
  }

  renderDev() {
    const devRoot = document.querySelector('#root');
    console.log('dev render');

    if (devRoot) {
      this.externalProps = {
        idPatient: 23246,
        idMedicalEstablishment: 1,
        language: 'fr',
        idConsultations: 999,
      };
      this.render(devRoot);
    }
  }

  // renderProd() {
  //   console.log('prod render');
  //   if (this.rendered === true) return
  //   this.rendered = true

  //   if (window.TreatmentCommunicatorParent) {
  //     window.TreatmentCommunicatorParent.setCommunicator(this);
  //   }
  // }

  render(container) {
    ReactDOM.render(<App {...this.externalProps} communicator={this} />, container);
  }
}

const communicator = new Communicator();
communicator.renderDev();
