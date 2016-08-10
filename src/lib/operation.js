import {NamedKernelManagerRoutings, NamedKernelManagerControllers, NamedKernelManagerController} from 'named-kernel-manager';

export class OperationRouting {
  setup(routes) {
    routes.controller('OperationController', (routes) => {
      routes.from('NamedKernelManager', (routes) => {
        routes.event('start', 'boot_all');
        routes.event('boot');
        routes.event('close');
        routes.event('halt');
      });
    });
  }
}

// TODO 分け方がざっくりしている
export class OperationController extends NamedKernelManagerController {
  constructor(manager) {
    super(manager);
  }

  async boot_all() {
    const profile = await this.manager.profile();
    const ghosts = profile.ghosts && profile.ghosts.length ? profile.ghosts : ['js']; // TODO: 無ゴースト起動
    // TODO: 他形式対応
    ghosts.map((ghostname) => this.manager.loadGhost(ghostname).then((kernel) => kernel.start()));
  }
}

NamedKernelManagerControllers.OperationController = OperationController;
NamedKernelManagerRoutings.push(OperationRouting);
