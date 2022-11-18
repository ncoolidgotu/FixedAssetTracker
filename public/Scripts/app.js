// IIFE --> Immediately invoked function expression

(function(){
    function Start()
    {
        console.log("App Started");
        let retireButton = document.querySelectorAll('.retireConfirm'); //look for button with retireConfirm class (retire button)
        for(button of retireButton)
        {
            button.addEventListener('click',(event)=>{ //Listen for the user to click this button
                if(!confirm("Retire this asset?")) //Prompt the user to confirm they want to retire the asset
                {
                    event.preventDefault(); //Wait for the user to handle the action
                    window.location.assign('/asset-list');
                }
            });
        }
    }
    window.addEventListener("load", Start); //Start the event listener


})();