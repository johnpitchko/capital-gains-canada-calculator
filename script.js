// Tax rates
//
// 2018 Taxable income              Marginal rate   Capital rate
// first $46,605	                  15.0%	          7.50%
// over $46,605 up to $93,208	      20.5%	          10.25%
// over $93,208 up to $144,489	    26.0%	          13.00%
// over $144,489 up to $205,842	    29.0%	          14.50%
// over $205,842	                  33.0%	          16.50%

$( document ).ready(function() {

  $( "button" ).click(function( event ) {
    event.preventDefault();

    // Define the standard currency format
    var currencyFormat = new Intl.NumberFormat('en-CA',
                        { style: 'currency', currency: 'CAD',
                          minimumFractionDigits: 2 });

    var percentFormat = new Intl.NumberFormat('en-CA', { style: 'percent', minimumFractionDigits: 2 });



    var annualIncome = parseInt( $( "#annualIncome" ).val() );
    var capitalRate = 0.075;

    if (annualIncome > 46605 && annualIncome <= 93208) {
      capitalRate = 0.1025;
    }
    else if (annualIncome > 93208 && annualIncome <= 144489) {
      capitalRate = 0.13;
    }
    else if (annualIncome > 144489 && annualIncome <= 205842) {
      capitalRate = 0.145;
    }
    else if (annualIncome > 205842) {
      capitalRate = 0.165;
    }



    // Calculate the rates
    var sellPrice = parseInt( $( "#sellPrice" ).val() );
    var purchasePrice = parseInt( $( "#purchasePrice" ).val() );

    var capitalGain = sellPrice - purchasePrice;

    var taxableGain = capitalGain * 0.5;

    var taxOwing = taxableGain * capitalRate;

    var actualGain = capitalGain - taxOwing;


    // Display the rates
    $( "#capitalRate" ).val(percentFormat.format(capitalRate));
    $( "#capitalGain" ).val(currencyFormat.format(capitalGain));
    $( "#taxableGain" ).val(currencyFormat.format(taxableGain));
    $( "#taxOwing" ).val(currencyFormat.format(taxOwing));
    $( "#actualGain" ).val( currencyFormat.format(actualGain) );
  });

});
