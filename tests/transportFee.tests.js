describe('transportFee', function(){
    it('should return the fee that should be paid for the morning shift' , function(){
        assert.equal(transportFee('nightshift'), 'free');

    });
    it('should return the incorrect fee for the (afternoon) shift' , function(){
        assert.equal(transportFee('afternoon'), 'R10');

    });
});
