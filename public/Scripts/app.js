// IIFE --> Immediately invoked function expression

(function(){
    function Start()
    {
        console.log("App Started");
        let retireButton = document.querySelectorAll('.retireConfirm');
        for(button of retireButton)
        {
            button.addEventListener('click',(event)=>{
                if(!confirm("Retire this asset?"))
                {
                    event.preventDefault();
                    window.location.assign('/asset-list');
                    
                }
            });
        }
    }
    window.addEventListener("load", Start);


})();