describe('Bubble Sort', function() {
  beforeEach(function(){
  	spyOn(window, 'swap').and.callThrough();
  });
  it('handles an empty array', function() {
    expect( bubbleSort([])).toEqual([]);
    expect(swap.calls.count()).toEqual(0);
  });

  it('sorts an array', function() {
    expect(bubbleSort([5, 2, 8, 12, 6])).toEqual([2, 5, 6, 8, 12]);
    expect(swap.calls.count()).toEqual(3);
  });
  it('sorts a reverse sorted array', function() {
    expect( bubbleSort([12, 8, 6, 5, 4])).toEqual([4, 5, 6, 8, 12] );
    expect(swap.calls.count()).toEqual(10);
  });

});
