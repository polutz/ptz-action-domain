import { ok } from 'ptz-assert';
import {
    ActionExecution,
    ActionStore
} from './index';

describe('ptz-action-domain', () => {
    describe('exports', () => {
        it('ActionExecution', () => ok(ActionExecution));
        it('ActionStore', () => ok(ActionStore));
    });
});
