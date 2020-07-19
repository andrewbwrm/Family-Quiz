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
           
           console.log(animalSpoorScore);

           document.getElementById("animalSpoorScore").innerHTML = "Score: " + animalSpoorScore + "/14";

        });

        

        $("#ameVCSelectExportLocation").click(function () {

            csInterface.evalScript('ameVCSelectExportLocation()', function(result){
                document.getElementById("ameVCExportPath").innerHTML= result;
            });


        });

        $("#ameVCSelectVideoFiles").click(function () {

            var address = document.getElementById("ameVCAddress").value;
            var myAddress = ('var myAddress = "' + address + '";');

            var copyCreate = document.getElementById("ameVCCopyCreateProxyDD").value;
            var myCopyCreate = ('var myCopyCreate = "' + copyCreate + '";');

            csInterface.evalScript(myAddress + myCopyCreate + 'ameVCSelectVideoFiles()', function(result) {
            });
        });


        $("#ameVCHelpButton").click(function () {
            csInterface.openURLInDefaultBrowser("http://help.bwrm.com/en/articles/3988041-remote-video-editing-proxy-workflow");
        });

        }        
        
    init();

}());




