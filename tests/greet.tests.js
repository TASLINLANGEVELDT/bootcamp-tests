describe('the greet function' , function(){

    it('should greet Lucky', function(){
        assert.equal('Hello, Lucky',greet('Lucky'),true);

    });

  it('should greet Sam', function(){
        assert.equal('Hello, Sam',greet('Sam'),false);
      });
});
