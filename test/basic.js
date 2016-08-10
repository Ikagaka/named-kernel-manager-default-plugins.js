import {plugins} from '../src/lib/named-kernel-manager-default-plugins';
import {NamedKernelManager} from 'named-kernel-manager';

import assert from 'power-assert';

/** @test {NamedKernelManager} */
describe('NamedKernelManager', function() {
  lazy('instance', function() { return new NamedKernelManager({a: 1}) });
  /** @test {NamedKernelManager#constructor} */
  context('constructor', function() {
    it('basic', function() { assert(this.instance instanceof NamedKernelManager) });
  });
});
