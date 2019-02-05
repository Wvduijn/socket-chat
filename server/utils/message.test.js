var expect = require('expect');
var {generateMessage} = require('./message');


describe('generate Message', () => {

    it('should genereate correct message Object', () => {
        // store res in variable
        var from = 'Jen';
        var text = 'Some message';
        var message = generateMessage(from, text);
        
        expect(message.createdAt).toBeA('number');
        expect(message).toInclude({from,text})

    })


})