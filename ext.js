(function () {
    'use strict';


    
    function init() {

         $("#animalSpoorSubmit").click(function () {

            var animalSpoorScore = 0;

            if(document.getElementById("animalSpoorSelect1").value === "African Elephant"){
                $("#animalSpoorImg1").toggleClass("correctAnswer");
                animalSpoorScore += 1;
            }else{
                $("#animalSpoorImg1").toggleClass("incorrectAnswer");
            }

            if(document.getElementById("animalSpoorSelect2").value === "Cassowary"){
                $("#animalSpoorImg2").toggleClass("correctAnswer");
                animalSpoorScore += 1;
            }else{
                $("#animalSpoorImg2").toggleClass("incorrectAnswer");
            }

            if(document.getElementById("animalSpoorSelect3").value === "Wombat"){
                $("#animalSpoorImg3").toggleClass("correctAnswer");
                animalSpoorScore += 1;
            }else{
                $("#animalSpoorImg3").toggleClass("incorrectAnswer");
            }

            if(document.getElementById("animalSpoorSelect4").value === "Red Fox"){
                $("#animalSpoorImg4").toggleClass("correctAnswer");
                animalSpoorScore += 1;
            }else{
                $("#animalSpoorImg4").toggleClass("incorrectAnswer");
            }

            if(document.getElementById("animalSpoorSelect5").value === "Rhino"){
                $("#animalSpoorImg5").toggleClass("correctAnswer");
                animalSpoorScore += 1;
            }else{
                $("#animalSpoorImg5").toggleClass("incorrectAnswer");
            }

            if(document.getElementById("animalSpoorSelect6").value === "Kangaroo"){
                $("#animalSpoorImg6").toggleClass("correctAnswer");
                animalSpoorScore += 1;
            }else{
                $("#animalSpoorImg6").toggleClass("incorrectAnswer");
            }

            if(document.getElementById("animalSpoorSelect7").value === "Hedgehog"){
                $("#animalSpoorImg7").toggleClass("correctAnswer");
                animalSpoorScore += 1;
            }else{
                $("#animalSpoorImg7").toggleClass("incorrectAnswer");
            }

            if(document.getElementById("animalSpoorSelect8").value === "Hippo"){
                $("#animalSpoorImg8").toggleClass("correctAnswer");
                animalSpoorScore += 1;
            }else{
                $("#animalSpoorImg8").toggleClass("incorrectAnswer");
            }

            if(document.getElementById("animalSpoorSelect9").value === "Cassowary"){
                $("#animalSpoorImg9").toggleClass("correctAnswer");
                animalSpoorScore += 1;
            }else{
                $("#animalSpoorImg9").toggleClass("incorrectAnswer");
            }

            if(document.getElementById("animalSpoorSelect10").value === "African Lion"){
                $("#animalSpoorImg10").toggleClass("correctAnswer");
                animalSpoorScore += 1;
            }else{
                $("#animalSpoorImg10").toggleClass("incorrectAnswer");
            }

            if(document.getElementById("animalSpoorSelect11").value === "European Badger"){
                $("#animalSpoorImg11").toggleClass("correctAnswer");
                animalSpoorScore += 1;
            }else{
                $("#animalSpoorImg11").toggleClass("incorrectAnswer");
            }

            if(document.getElementById("animalSpoorSelect12").value === "Crocodile"){
                $("#animalSpoorImg12").toggleClass("correctAnswer");
                animalSpoorScore += 1;
            }else{
                $("#animalSpoorImg12").toggleClass("incorrectAnswer");
            }

            if(document.getElementById("animalSpoorSelect13").value === "Owl"){
                $("#animalSpoorImg13").toggleClass("correctAnswer");
                animalSpoorScore += 1;
            }else{
                $("#animalSpoorImg13").toggleClass("incorrectAnswer");
            }

            if(document.getElementById("animalSpoorSelect14").value === "African Elephant"){
                $("#animalSpoorImg14").toggleClass("correctAnswer");
                animalSpoorScore += 1;
            }else{
                $("#animalSpoorImg14").toggleClass("incorrectAnswer");
            }
           
           //console.log(animalSpoorScore);

           document.getElementById("animalSpoorScore").innerHTML = "Score: " + animalSpoorScore + "/14";

        });

    $("#pantoneColourSubmit").click(function () {

        var pantoneColourScore = 0;

            if(document.getElementById("pantoneColourSelect1").value === "Fuzzy Wuzzy Brown"){
                $("#pantoneColour1").toggleClass("correctAnswer");
                pantoneColourScore += 1;
            }else{
                $("#pantoneColour1").toggleClass("incorrectAnswer");
            }

            if(document.getElementById("pantoneColourSelect2").value === "Beaver"){
                $("#pantoneColour2").toggleClass("correctAnswer");
                pantoneColourScore += 1;
            }else{
                $("#pantoneColour2").toggleClass("incorrectAnswer");
            }

            if(document.getElementById("pantoneColourSelect3").value === "Green Yellow"){
                $("#pantoneColour3").toggleClass("correctAnswer");
                pantoneColourScore += 1;
            }else{
                $("#pantoneColour3").toggleClass("incorrectAnswer");
            }

            if(document.getElementById("pantoneColourSelect4").value === "Granny Smith Apple"){
                $("#pantoneColour4").toggleClass("correctAnswer");
                pantoneColourScore += 1;
            }else{
                $("#pantoneColour4").toggleClass("incorrectAnswer");
            }

            if(document.getElementById("pantoneColourSelect5").value === "Green"){
                $("#pantoneColour5").toggleClass("correctAnswer");
                pantoneColourScore += 1;
            }else{
                $("#pantoneColour5").toggleClass("incorrectAnswer");
            }    

            if(document.getElementById("pantoneColourSelect6").value === "Blue Green"){
                $("#pantoneColour6").toggleClass("correctAnswer");
                pantoneColourScore += 1;
            }else{
                $("#pantoneColour6").toggleClass("incorrectAnswer");
            }    

            if(document.getElementById("pantoneColourSelect7").value === "Wild Blue Yonder"){
                $("#pantoneColour7").toggleClass("correctAnswer");
                pantoneColourScore += 1;
            }else{
                $("#pantoneColour7").toggleClass("incorrectAnswer");
            }    

            if(document.getElementById("pantoneColourSelect8").value === "Violet"){
                $("#pantoneColour8").toggleClass("correctAnswer");
                pantoneColourScore += 1;
            }else{
                $("#pantoneColour8").toggleClass("incorrectAnswer");
            }    

            if(document.getElementById("pantoneColourSelect9").value === "Hot Magenta"){
                $("#pantoneColour9").toggleClass("correctAnswer");
                pantoneColourScore += 1;
            }else{
                $("#pantoneColour9").toggleClass("incorrectAnswer");
            }    

            if(document.getElementById("pantoneColourSelect10").value === "Wild Watermelon"){
                $("#pantoneColour10").toggleClass("correctAnswer");
                pantoneColourScore += 1;
            }else{
                $("#pantoneColour10").toggleClass("incorrectAnswer");
            }  

            //console.log(pantoneColourScore);

            document.getElementById("pantoneColourScore").innerHTML = "Score: " + pantoneColourScore + "/10";  

    });


    $("#aerialCitiesSubmit").click(function () {

        var aerialCitiesScore = 0;

            if(document.getElementById("aerialCitiesSelect1").value === "London, UK"){
                $("#aerialCities1").toggleClass("correctAnswer");
                aerialCitiesScore += 1;
            }else{
                $("#aerialCities1").toggleClass("incorrectAnswer");
            }

            if(document.getElementById("aerialCitiesSelect2").value === "Melbourne, Australia"){
                $("#aerialCities2").toggleClass("correctAnswer");
                aerialCitiesScore += 1;
            }else{
                $("#aerialCities2").toggleClass("incorrectAnswer");
            }

            if(document.getElementById("aerialCitiesSelect3").value === "Paris, France"){
                $("#aerialCities3").toggleClass("correctAnswer");
                aerialCitiesScore += 1;
            }else{
                $("#aerialCities3").toggleClass("incorrectAnswer");
            }

            if(document.getElementById("aerialCitiesSelect4").value === "Newcastle, UK"){
                $("#aerialCities4").toggleClass("correctAnswer");
                aerialCitiesScore += 1;
            }else{
                $("#aerialCities4").toggleClass("incorrectAnswer");
            }

            if(document.getElementById("aerialCitiesSelect5").value === "New York City, USA"){
                $("#aerialCities5").toggleClass("correctAnswer");
                aerialCitiesScore += 1;
            }else{
                $("#aerialCities5").toggleClass("incorrectAnswer");
            }

            if(document.getElementById("aerialCitiesSelect6").value === "Cape Town, SA"){
                $("#aerialCities6").toggleClass("correctAnswer");
                aerialCitiesScore += 1;
            }else{
                $("#aerialCities6").toggleClass("incorrectAnswer");
            }

            if(document.getElementById("aerialCitiesSelect7").value === "Port Moresby, PNG"){
                $("#aerialCities7").toggleClass("correctAnswer");
                aerialCitiesScore += 1;
            }else{
                $("#aerialCities7").toggleClass("incorrectAnswer");
            }

            if(document.getElementById("aerialCitiesSelect8").value === "Milford Sound, NZ"){
                $("#aerialCities8").toggleClass("correctAnswer");
                aerialCitiesScore += 1;
            }else{
                $("#aerialCities8").toggleClass("incorrectAnswer");
            }

            if(document.getElementById("aerialCitiesSelect9").value === "Le Morne, Mauritius"){
                $("#aerialCities9").toggleClass("correctAnswer");
                aerialCitiesScore += 1;
            }else{
                $("#aerialCities9").toggleClass("incorrectAnswer");
            }

            if(document.getElementById("aerialCitiesSelect10").value === "Sydney, Australia"){
                $("#aerialCities10").toggleClass("correctAnswer");
                aerialCitiesScore += 1;
            }else{
                $("#aerialCities10").toggleClass("incorrectAnswer");
            }

            if(document.getElementById("aerialCitiesSelect11").value === "Cardiff, Wales"){
                $("#aerialCities11").toggleClass("correctAnswer");
                aerialCitiesScore += 1;
            }else{
                $("#aerialCities11").toggleClass("incorrectAnswer");
            }

            //console.log(aerialCitiesScore);

            document.getElementById("aerialCitiesScore").innerHTML = "Score: " + aerialCitiesScore + "/11";  


    });

        


        

        }        
        
    init();

}());




