// const json = require('./datas.json')
//     document.addEventListener("DOMContentLoader", function(){        
//     fetch('./datas.json')
//     .then(response => {
//         if (!response.ok){
//         throw new Error ('Erreur lors du chargement du fichier')
//     } return response.json();
//     })
//     .then(data => {
//         console.log("Catégorie", data.category);
//     })
//     .catch(error =>{
//         console.error('Erreur', error);
//     });
// });

// $(document).ready(function() {
//     $.getJSON("datas.json")
//     .done(function (data){
//         const container = $("#restaurants");
//         const restaurants = data.restaurants;

//         restaurants.forEach(resto => {
//             const restoHTML = `
//         <div class="divcarte">
//         <div class="carte">
//         <h3 class="nomcarte">${resto.name}</h3>
//         </div>`;
//         })
//         container.append(restoHTML)
//     });
// });

$(document).ready(function() {
    $.getJSON("datas.json")
    .done(function (data){
        const container = $(".divcarte");
        const listOfCategory = data.categoryEvenements;

        listOfCategory.forEach(category => {
            const catHTML = `
        <div class="divcarte">
        <div class="carte">
        <h3 class="nomcarte">${category.musique}, ${category.convention}, ${category.tatouage}</h3>
        </div>
        </div>`;
        
        container.append(catHTML)
    })
    });
});


$(function () {
    $("#target").text("Morgane");
});

$(function () {
    $(".cache").click(function () {
        $("#target").toggle();
    })
})

$(function () {
    $(".h2").click(function () {
        $(".ptest1").fadeToggle("fast");
        $(".ptest2").fadeToggle("slow");
        if ($(".ptest3").css('opacity') == 1) {
            $(".ptest3").fadeTo("fast", 0.20);
        } else { $(".ptest3").fadeTo("fast", 1) }
    });
})

$(function () {
    $("#prenom").click(function () {
        $("#target").slideToggle();
    });
})

$(function () {
    $(".weeebtn").click(function () {
        $(".container").animate({ width: 'toggle' })
    })
})

// $(function() {

//     $.ajax({
//         url: 'https://jsonplaceholder.typicode.com/posts',
//         method: 'GET',
//         success: function (data) {
//             console.log('Données AJAX:', data);
//         },
//         error: function (err) {
//             console.error('Erreur AJAX:', err);
//         }
//     })
// })