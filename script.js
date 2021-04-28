// Manipuler les styles CSS --> méthode css()

//$(document).ready(function(){
    // On récupère la police
    let police = $("#text").css("font-family");
    // ... et on l'affiche
    $("#police").text(police);

    // Au clic...
    $("#changeThePolice").click(function(){
        // On change la police
        $("#text").css("font-family", "Courier");
        // Puis on met à jour la valeur du span
        police = $("#text").css("font-family");
        $("#police").text(police);
    });
//});



// En JS vanilla, on aurait :
