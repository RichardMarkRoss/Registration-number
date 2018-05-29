describe('the registration function basic test', function(){
    it('should display one reg number', function(){

        var nameHolder = RegNumber('CA 123');

        assert.equal(nameHolder.getting(),['CA 123']);
    });

});
