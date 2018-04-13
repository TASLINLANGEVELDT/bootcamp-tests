describe('totalPhoneBill' , function(){
    it('should show total amount for the phoneBill' , function(){
        assert.equal(totalPhoneBill('call, sms, call'), 'R6.15');
    });
    it('should return the correct cost for the phoneBill' , function(){
        assert.equal(totalPhoneBill('call, sms, call, data, call'), 'R8.90');
    });
});
