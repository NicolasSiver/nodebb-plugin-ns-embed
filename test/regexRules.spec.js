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
        let regex;
        const regular           = 'https://www.youtube.com/watch?v=Dwrm0X7RL0c',
              regularNoProtocol = 'www.youtube.com/watch?v=Dwrm0X7RL0c',
              regularNoZone     = 'https://youtube.com/watch?v=Dwrm0X7RL0c',
              profileUrl        = 'https://www.youtube.com/user/machinima',
              channelUrl        = 'https://www.youtube.com/channel/UC0fDG3byEcMtbOqPMymDNbw',
              regularId         = 'Dwrm0X7RL0c';

        const short           = 'https://youtu.be/opgt8ZVqP_g',
              shortNoProtocol = 'youtu.be/opgt8ZVqP_g',
              shortId         = 'opgt8ZVqP_g';

        beforeEach(() => {
            regex = new RegExp(findRule('youtube').regex, 'g');
        });

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
        });

        it('ignores channel urls', () => {
            expect(channelUrl.replace(regex, repl)).to.be.equal(channelUrl);
        });
    });

    describe('Twitch', () => {
        let regexLive, regexVod;

        const video          = 'https://www.twitch.tv/chess/v/114095976',
              channel        = 'https://www.twitch.tv/chess',
              videoAnchorTag = '<a href="https://www.twitch.tv/astreamer/v/888" target="_blank" rel="nofollow">Some Text</a>',
              liveAnchorTag  = '<a href="https://www.twitch.tv/astreamer" target="_blank" rel="nofollow">Watch Live</a>',
              emptyAnchorTag = '<a href="https://www.twitch.tv/astreamer" target="_blank" rel="nofollow"></a>';

        beforeEach(() => {
            regexLive = new RegExp(findRule('twitch-live').regex, 'g');
            regexVod = new RegExp(findRule('twitch-vod').regex, 'g');
        });

        it('parses live url', () => {
            expect(channel.replace(regexLive, repl)).to.be.equal(repl);
        });

        it('ignores video url for a live rule', () => {
            expect(video.replace(regexLive, repl)).to.be.equal(video);
        });

        it('ignores video url in anchor tag', () => {
            expect(videoAnchorTag.replace(regexLive, repl)).to.be.equal(videoAnchorTag);
        });

        it('parses live anchor tag', () => {
            expect(liveAnchorTag.replace(regexLive, repl)).to.be.equal(repl);
        });

        it('parses empty live anchor tag', () => {
            expect(emptyAnchorTag.replace(regexLive, repl)).to.be.equal(repl);
        });

        it('parses video url', () => {
            expect(video.replace(regexVod, repl)).to.be.equal(repl);
        });

        it('ignores live url for a vod rule', () => {
            expect(channel.replace(regexVod, repl)).to.be.equal(channel);
        });

        it('ignores live url in anchor tag', () => {
            expect(liveAnchorTag.replace(regexVod, repl)).to.be.equal(liveAnchorTag);
        });

        it('parses vod anchor tag', () => {
            expect(videoAnchorTag.replace(regexVod, repl)).to.be.equal(repl);
        });

        it('extracts channel name as a first group', () => {
            expect(regexLive.exec(channel)[1]).to.be.equal('chess');
        });

        it('extracts video id as a first group', () => {
            expect(regexVod.exec(video)[1]).to.be.equal('114095976');
        });

    });

});
