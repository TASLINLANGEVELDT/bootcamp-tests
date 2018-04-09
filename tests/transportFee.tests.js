describe('transportFee', function(){
    it('should return the fee that should be paid for the morning shift' , function(){
        assert.equal(transportFee('nightshift'), 'free');

    });
    it('should return the incorrect fee or an error' , function(){
        assert.notEqual(transportFee('nightshift'), 'R20');

    });
});
