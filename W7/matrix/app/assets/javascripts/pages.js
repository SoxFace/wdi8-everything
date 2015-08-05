var numbers = [];

$('document').ready(function() {

    var addBox = function(n) {
        var $box = $('<div/>').addClass('box');
        $box.text(n);
        $box.prependTo('#boxes');
    };

    // STEP 3. SHOW NUMBERS ON PAGE
    var showNumbers = function() {
        $('#boxes').empty();
        // _(numbers).each(function(n) {
        //     addBox(n);
        // });
        _(numbers).each(addBox);
    };

    // STEP 1. ADD NUMBERS TO PAGE
    var addNumber = function() {
        var n = $('#number').val();
        n = parseInt(n);

        numbers.push(n);

        addBox(n);

        $('#number').val('').focus();
    };

    // $('#add_number').click(addNumber);
    $('#add_number').on('click', addNumber);

    // STEP 2. SQUARE NUMBERS ON THE PAGE
    var squareNumbers = function() {
        numbers = _(numbers).map(function(n) {
            return n * n;
        });
        showNumbers();
    };

    $('#square').on('click', squareNumbers);

    // STEP 4. CUSTOM FUNCTION BUTTON
    var customFunction = function() {
        numbers = _(numbers).map(calc);
        showNumbers();
    };

    var calc = function(i) {
        var equation = $('#number').val();
        return eval(equation);
    };

    // STEP 5. SET TIMER & CLEAR TIMER
    var timer = null;
    $('#function').on('click', customFunction);

    $('#start').on('click', function() {
        clearInterval(timer);
        timer = setInterval(addRandom, 500);
    });

    $('#stop').on('click', function() {
        clearInterval(timer);
    });

    var addRandom = function() {
        var n = _.random(10000);
        numbers.push(n);
        addBox(n);
    };


});