describe('the greetings function basic test', function(){
    it('greetings function test greeting in English', function(){

        var nameHolder = RegNumber('CA 1234');

        assert.equal(nameHolder.logic(),"CA 1234");
    });
});