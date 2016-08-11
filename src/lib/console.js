import {NamedKernelManagerRoutings, NamedKernelManagerControllers, NamedKernelManagerController} from 'named-kernel-manager';

export class ConsoleRouting {
  setup(routes) {
    routes.controller('ConsoleController', (routes) => {
      routes.from('NamedKernelManager', (routes) => {
        routes.event('start');
      });
    });
  }
}

export class ConsoleController extends NamedKernelManagerController {
  constructor(manager) {
    super(manager);
    const namedManager = this.manager.components.NamedManager;
    // shortcuts
    this.manager.log = (message) => namedManager.console.log(message);
    this.manager.warn = (message) => namedManager.console.warn(message);
    this.manager.error = (message) => namedManager.console.error(message);
    this.manager.info = (message) => namedManager.console.info(message);
  }

  start() {
  }
}

NamedKernelManagerControllers.ConsoleController = ConsoleController;
NamedKernelManagerRoutings.push(ConsoleRouting);
