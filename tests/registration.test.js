describe('the registration function basic test', function () {
    it('should display one reg number', function () {

        var nameHolder = RegNumber('CA 123');

        assert.equal(nameHolder.logic(), 'CA 123');
    });

});
describe("the registration function more basic", function () {

    it('should display multiple values in an object', function () {

        var nameHolder = RegNumber();

        nameHolder.store('CA 123');
        nameHolder.store('CY 123');

        assert.deepEqual({
            'CA 123': 0,
            'CY 123': 0
        }, nameHolder.return());

    });
    it('should display three different values in an object', function () {

        var nameHolder = RegNumber();

        nameHolder.store('CA 123');
        nameHolder.store('CY 123');
        nameHolder.store('CL 123');

        assert.deepEqual({
            'CA 123': 0,
            'CY 123': 0,
            'CL 123': 0
        }, nameHolder.return());

    });

});
describe('the registration number  filter test', function () {
    it('should display one reg number', function () {

        var nameHolder = RegNumber();

        nameHolder.store("CA 123");
        nameHolder.store("CA 123");

        assert.deepEqual(nameHolder.return(), {
            'CA 123': 0
        });
    });
    it('should only display reg number that starts with CA', function () {

        var nameHolder = RegNumber();

        nameHolder.store("CA 123");
        nameHolder.store("CA 123");
        nameHolder.store('CZ 123');

        assert.deepEqual(nameHolder.return(), {
            'CA 123': 0
        });
    });
    it('should not display reg number that are not found selected regions', function () {

        var nameHolder = RegNumber();

        nameHolder.store("CA 123");
        nameHolder.store("CY 123");
        nameHolder.store('CZ 123');
        nameHolder.store('CK 123');
        nameHolder.store('CH 123');
        nameHolder.store('CJ 123');

        assert.deepEqual(nameHolder.return(), {
            'CA 123': 0,
            'CY 123': 0,
            'CJ 123': 0
        });
    });

});
describe('the registration function selected plates test', function () {
    it('should display the selected plates from CA', function () {

        var nameHolder = RegNumber();

        nameHolder.store("CA 123");
        nameHolder.store("CY 123");
        nameHolder.store('CZ 123');
        nameHolder.store('CA 231');
        nameHolder.store('CH 123');
        nameHolder.store('CJ 123');

        assert.deepEqual(nameHolder.split('CA'), ['CA 123', 'CA 231']);
    });
    it('when all selected it should only display the registered plates', function () {

        var nameHolder = RegNumber();

        nameHolder.store("CA 123"); 
        nameHolder.store("CY 123"); 
        nameHolder.store('CZ 123'); 
        nameHolder.store('CA 231'); 
        nameHolder.store('CH 123'); 
        nameHolder.store('CJ 123'); 


        assert.deepEqual(nameHolder.split('All'), ['CA 123', 'CY 123', 'CA 231', 'CJ 123',]);
    });
});
describe('the registration function clearing the storage test', function () {
    it('should clear the reg numbers from the display and localStorage', function () {

        var nameHolder = RegNumber();

        nameHolder.store("CA 123"); 
        nameHolder.store("CY 123"); 
        nameHolder.store('CZ 123'); 
        nameHolder.store('CA 231'); 
        nameHolder.store('CH 123'); 
        nameHolder.store('CJ 123');
        
        nameHolder.clear();

        assert.deepEqual(nameHolder.logic(), {});
    });

});