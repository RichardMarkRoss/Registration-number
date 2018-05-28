describe('the greetings function basic test', function () {
    it('greetings function test greeting in English', function () {

        var factory = RegNumber({
            'CA 1234': 0
        });

        assert.equal(factory.split('CA'), ["CA 1234"]);
    });
});