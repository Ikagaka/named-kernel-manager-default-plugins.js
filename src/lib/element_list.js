import {NamedKernelManagerRoutings, NamedKernelManagerControllers, NamedKernelManagerController} from 'named-kernel-manager';

export class ElementList {
  constructor(manager, interval = 1000) {
    this.manager = manager;
    this.getList();
    this.timer = setInterval(this.getList.bind(this), interval);
    this.list = [];
  }
}

export class GhostList extends ElementList {
  async getList() {
    const nanikaStorage = this.manager.components.NanikaStorage;
    const ghosts = await nanikaStorage.ghosts();
    this.list = await Promise.all(ghosts.map((dirpath) => nanikaStorage.ghost_name(dirpath).then((name) => [name, dirpath])));
  }
}

export class BalloonList extends ElementList {
  async getList() {
    const nanikaStorage = this.manager.components.NanikaStorage;
    const balloons = await nanikaStorage.balloons();
    this.list = await Promise.all(balloons.map((dirpath) => nanikaStorage.balloon_name(dirpath).then((name) => [name, dirpath])));
  }
}

export class ShellList extends ElementList {
  constructor(manager) {
    super(manager);
    this.list = {};
  }

  async getList() {
    const nanikaStorage = this.manager.components.NanikaStorage;
    const ghosts = await nanikaStorage.ghosts();
    const shells = await Promise.all(ghosts.map((dirpath) => this.getShellList(dirpath)));
    const list = {};
    ghosts.forEach((_, index) => { this.list[ghosts[index]] = shells[index] });
    this.list = list;
  }

  async getShellList(ghostpath) {
    const nanikaStorage = this.manager.components.NanikaStorage;
    const shells = await nanikaStorage.shells(ghostpath);
    return await Promise.all(shells.map((dirpath) => nanikaStorage.shell_name(ghostpath, dirpath).then((name) => [name, dirpath])));
  }
}

export class ElementListRouting {
  setup(routes) {
    routes.controller('ElementListController', (routes) => {
      routes.from('NamedKernelManager', (routes) => {
        routes.event('start');
      });
    });
  }
}

// ゴースト等のリストをメニューから同期的に参照できるように
export class ElementListController extends NamedKernelManagerController {
  constructor(manager) {
    super(manager);
  }

  start() {
    this.manager.registerComponent('GhostList', new GhostList());
    this.manager.registerComponent('BalloonList', new BalloonList());
    this.manager.registerComponent('ShellList', new ShellList());
  }
}

NamedKernelManagerControllers.ElementListController = ElementListController;
NamedKernelManagerRoutings.push(ElementListRouting);
