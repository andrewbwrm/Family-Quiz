(function () {
    'use strict';

    var csInterface = new CSInterface();
    
    function init() {

        // Find the extension's own path
        var extensionRoot = csInterface.getSystemPath(SystemPath.EXTENSION) + "/jsx/";
        console.log("The JSX path is: " + extensionRoot);

        csInterface.evalScript('evalFiles("' + extensionRoot + '")', function(res) {
            console.log(res)
        });  

        var includeFile = csInterface.getSystemPath(SystemPath.EXTENSION) + "/jsx/json2.js";
        csInterface.evalScript('evalFile("' + includeFile + '")', function(res) {
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




