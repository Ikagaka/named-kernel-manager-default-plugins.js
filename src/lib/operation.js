import {NamedKernelManagerRoutings, NamedKernelManagerControllers, NamedKernelManagerController} from 'named-kernel-manager';

export class OperationRouting {
  setup(routes) {
    routes.controller('OperationController', (routes) => {
      routes.from('NamedKernelManager', (routes) => {
        routes.event('start', 'boot_all');
        routes.event('boot_named');
        routes.event('close_named');
        routes.event('change_named');
        routes.event('close');
        routes.event('halt');
        routes.event('kernel_unregistered');
      });
    });
  }
}

// TODO 分け方がざっくりしている
export class OperationController extends NamedKernelManagerController {
  constructor(manager) {
    super(manager);
    this.closeComplete = {};
  }

  async boot_all() {
    const profile = await this.manager.profile();
    const ghosts = profile.ghosts && profile.ghosts.length ? profile.ghosts : ['js']; // TODO: 無ゴースト起動
    // TODO: 他形式対応
    ghosts.map((ghostname) => this.boot_named(ghostname));
  }

  async boot_named(namedId) {
    // TODO change / call / vanish
    const kernel = await this.manager.loadGhost(namedId);
    kernel.start();
  }

  close_named(namedId) {
    // TODO change
    return new Promise((resolve) => {
      const kernel = this.manager.kernel(namedId);
      this.closeComplete[namedId] = async () => {
        delete this.closeComplete[namedId];
        resolve();
      };
      kernel.close();
    });
  }

  async change_named(namedId, fromNamedId) {
    // TODO
    await this.close_named(fromNamedId);
    await this.boot_named(namedId);
  }

  async close() {
    const profile = await this.manager.profile();
    profile.ghosts = this.manager.namedIds();
    await this.manager.profile(profile);
    await Promise.all(this.manager.namedIds().map((namedId) => this.close_named(namedId)));
    this.manager.halt();
  }

  halt() {
    // TODO
  }

  kernel_unregistered(namedId) {
    if (this.closeComplete[namedId]) this.closeComplete[namedId]();
  }
}

NamedKernelManagerControllers.OperationController = OperationController;
NamedKernelManagerRoutings.push(OperationRouting);
