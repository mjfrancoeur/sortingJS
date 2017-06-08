describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect( bubbleSort([])).toEqual([]);
  });

  it('sorts an array', function() {
    expect( bubbleSort([5,2,8,12, 6]).toEqual([2, 5, 6, 8, 12]);
    expect(bubbleSort([12, 8, 6, 5, 4]).toEqual([4, 5, 6, 8, 12]);
  }

});


