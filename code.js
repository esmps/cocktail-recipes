let i = 2;

$(document).ready(() => {
    //load first drink
    loadDrink(i);
    
    $("#arrow-right").click(() => {
        if (i < cocktails.length - 1){
            i++;
            loadDrink(i);
        }
        else{
            i = 0;
            loadDrink(i);
        }
    });
    $("#arrow-left").click(() => {
        if (i > 0){
            i--;
            loadDrink(i);
        }
        else{
            i = cocktails.length - 1;
            loadDrink(i);
        }
    });
});


function loadDrink(i){
    $("#image").attr("src", `img/drink-${i}.jpg`);
    $("#text-title").text(cocktails[i].name);
    $("#background").text(cocktails[i].background);
    $("div.ingredient-list").replaceWith(cocktails[i].ingredients);
    $("div.steps-list").replaceWith(cocktails[i].steps);
}