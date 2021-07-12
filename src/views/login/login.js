
    function toggle() {
        var reg = document.querySelector(".register");
        const up = document.querySelector(".up");
        const down = document.querySelector(".down");
        up.addEventListener('click', function() {
            reg.style.transform = "translate("+0+"px,"+-301+"px)";
        })
        down.addEventListener('click', function() {
    
        reg.style.transform = "translate("+0+"px," + 0 + "px)";
        })
    }

    

        