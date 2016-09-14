var $ = require('jquery');

// Webpack magic
require('../css/app.css');

var categories = [
    'hats',
    'space',
    'funny',
    'ties',
    'kittens',
    'sinks',
    'clothes'
];

var baseCatUrl = 'http://thecatapi.com/api/images/get?',
    picSizeParam = 'size=small';

$.each(categories, function(index, category) {
    // Add a section for this category to the page
    var $category = $('<section>');
    $category.appendTo('.categories');
    $category.append('<header><h1>' + category + '</h1></header>');

    var i = 0;
    while(i < 5) {
        var src = baseCatUrl + '&category=' + category + '&rand=' + Math.floor(Math.random() * 500);
        var $img = $('<img>').attr('src', src).appendTo($category);
        i++;
    }
});

