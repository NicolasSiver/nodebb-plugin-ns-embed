import {expect} from 'chai';
import Rules from '../data/default-rules.json';

const findRule = (name) => {
    for (let rule of Rules.rules) {
        if (rule.name === name) {
            return rule;
        }
    }
}, repl        = '---';

describe('RegExp Rules', () => {
    describe('Youtube', () => {
        let regex = new RegExp(findRule('youtube').regex, 'g');
        const regular           = 'https://www.youtube.com/watch?v=Dwrm0X7RL0c',
              regularNoProtocol = 'www.youtube.com/watch?v=Dwrm0X7RL0c',
              regularNoZone     = 'https://youtube.com/watch?v=Dwrm0X7RL0c',
              profileUrl        = 'https://www.youtube.com/user/machinima',
              regularId         = 'Dwrm0X7RL0c';

        const short           = 'https://youtu.be/opgt8ZVqP_g',
              shortNoProtocol = 'youtu.be/opgt8ZVqP_g',
              shortId         = 'opgt8ZVqP_g';

        it('parses general urls', () => {
            expect(regular.replace(regex, repl)).to.equal(repl);
            expect(regularNoProtocol.replace(regex, repl)).to.equal(repl);
            expect(regularNoZone.replace(regex, repl)).to.equal(repl);
        });

        it('parses short urls', () => {
            expect(short.replace(regex, repl)).to.equal(repl);
            expect(shortNoProtocol.replace(regex, repl)).to.equal(repl);
        });

        it('extracts video id from regular urls', () => {
            const group = '$1';
            expect(regular.replace(regex, group)).to.equal(regularId);
            expect(regularNoProtocol.replace(regex, group)).to.equal(regularId);
            expect(regularNoZone.replace(regex, group)).to.equal(regularId);
        });

        it('extracts video id from short urls', () => {
            const group = '$1';
            expect(short.replace(regex, group)).to.equal(shortId);
            expect(shortNoProtocol.replace(regex, group)).to.equal(shortId);
        });

        it('ignores profile urls', () => {
            expect(profileUrl.replace(regex, repl)).to.equal(profileUrl);
        })
    });
});
