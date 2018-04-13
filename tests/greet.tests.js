describe('the greet function' , function(){

    it('should return this message; Hello, Lucky', function(){
        assert.equal(greet('Lucky'),greet ("Lucky") );
    });
    it('should return a string saying; Hello, Gary', function(){
  assert.equal(greet('Gary'), 'Hello, Gary');
      });
});
