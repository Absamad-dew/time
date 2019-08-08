window.onload = function() {
    let mainButton = document.querySelectorAll('.main-grid-button'),
        time = 0,
        newTime = 0,
        sec = 0,
        interval = 0,
        todayOne = document.querySelector('#today-one'),
        schet = 0,
        today = 0;
        // учеба
        let practisOne = document.querySelector('#today-two'),
            practis = 0;
        // развлечения
        let entertaimentOne =  document.querySelector('#today-three'),
            entertaiment = 0;
        // планы
        let plans = document.querySelectorAll('.planse-input__one'),
            divPlans = document.createElement('input'),
            planseComplite = document.createElement('input'),
            planseTime = document.createElement('input'),
            planseItemOne = document.querySelector('.planse-item__one'),
            planseItemTwo = document.querySelector('.planse-item__two'),
            planseItemThree = document.querySelector('.planse-item__three');


    mainButton[0].addEventListener('click', function(){
        schet+=1;
        console.log(schet % 2);
       if((schet % 2) == 1){
        
            time = new Date();
        for(let i = 0; i < 100; i++){
            function timer(){
                newTime = new Date();
                sec = time - newTime;
                console.log(sec);
            }  
        } ;
        // for
        let setTime = setInterval(() => {
            interval+=1;
            if((schet % 2) == 0){
                clearInterval(setTime);
            };
            timer();
            todayOne.value = Math.round((sec / 100)*(-1));
        }, 100);
        
       }else{
            today+=sec;
            function todayOut(){
                todayOne.value = Math.round((today / 100)*(-1));
            };
            console.log(today);
            setTimeout(todayOut,100);
        
       };
        
    });
    // mainButton[0]

    mainButton[1].addEventListener('click', function(){
        schet+=1;
        console.log(schet % 2);
       if((schet % 2) == 1){
        
            time = new Date();
        for(let i = 0; i < 100; i++){
            function timer(){
                newTime = new Date();
                sec = time - newTime;
                console.log(sec);
            }  ;
        } ;
        // for
        let setTime = setInterval(() => {
            interval+=1;
            if((schet % 2) == 0){
                clearInterval(setTime);
            };
            timer();
            practisOne.value = Math.round((sec / 100)*(-1));
        }, 100);
        
       }else{
            practis+=sec;
            function practisOut(){
                practisOne.value = Math.round((practis/ 100)*(-1));
            };
            console.log(practisOne);
            setTimeout(practisOut,100);
        
       };
        
    });
    // mainButton[1]

    mainButton[2].addEventListener('click', function(){
        schet+=1;
        console.log(schet % 2);
       if((schet % 2) == 1){
        
            time = new Date();
        for(let i = 0; i < 100; i++){
            function timer(){
                newTime = new Date();
                sec = time - newTime;
                console.log(sec);
            };  
        } ;
        // for
        let setTime = setInterval(() => {
            interval+=1;
            if((schet % 2) == 0){
                clearInterval(setTime);
            };
            timer();
            entertaimentOne.value = Math.round((sec / 100)*(-1));
        }, 100);
        
       }else{
            entertaiment+=sec;
            function entertaimentOut(){
                entertaimentOne.value = Math.round((entertaiment/ 100)*(-1));
            };
            // console.log(entertaimentOne);
            setTimeout(entertaimentOut,100);
            plans();
       };

    //    Логика планов
    function plans(){
        divPlans.className = "planse-item planse-input__one";
        planseComplite.className = "planse-item planse-input__two";
        planseTime.className = "planse-item planse-input__three";

        planseItemOne.appendChild(divPlans);
        planseItemTwo.appendChild(planseComplite);
        planseItemThree.appendChild(planseTime);


    };
        
    });
    // mainButton[2]

};