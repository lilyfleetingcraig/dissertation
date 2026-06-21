import { describe, expect, it } from 'vitest';

describe('dummyFunction', () => {
    it('is a dummy function', () => {
        const element = {
            innerHTML: 'Demo element',
        } as unknown as HTMLElement;

        expect(element.innerHTML).toBe('Demo element');
    });
});
