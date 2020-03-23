/*
 * 主线程的 Worker 业务
 */

import { IAlloyWorkerOptions } from '../type';
import Controller from './controller';
import WorkerAbilityTest from './worker-ability-test';

/**
 * 主线程的 Alloy Worker Class
 *
 * @class MainThreadWorker
 */
export default class MainThreadWorker {
    /**
     * 主线程通信控制器
     */
    private controller: Controller;
    workerAbilityTest: WorkerAbilityTest;

    constructor(options: IAlloyWorkerOptions) {
        this.controller = new Controller(options);

        this.workerAbilityTest = new WorkerAbilityTest(this.controller);
    }
}
