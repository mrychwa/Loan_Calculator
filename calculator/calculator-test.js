
it('should calculate the monthly rate correctly', function () {
  const values = { 
    amount: 18000, 
    years: 15, 
    rate: 10 
  };
  // function calculateMonthlyPayment(values);
  expect(calculateMonthlyPayment(values)).toEqual("193.43");
});


it("should return a result with 2 decimal places", function() {
  const values = {
    amount: 10043,
    years: 8,
    rate: 5.8
  };
  expect(calculateMonthlyPayment(values)).toEqual('131.00');
});

