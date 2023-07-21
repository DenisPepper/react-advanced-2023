import {buildNames} from './build-names';

const expected = 'some class name';

describe('build-css-class-names', () => {
    it('should return true', () => {
        expect(buildNames(['some', 'class', 'name'])).toBe(expected);
    });
});
