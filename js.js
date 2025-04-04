document.addEventListener('DOMContentLoaded', function(){
    const data = document.getElementById("data");
    const i_date = document.getElementById("i_date");
    const i_time = document.getElementById("i_time");
    const i_patient = document.getElementById("i_patient");
    const i_clinika = document.getElementById("i_clinika");
    const i_vrach = document.getElementById("i_vrach");
    const i_technik = document.getElementById("i_technik");

    let block = document.getElementById("egg1");
    const initialHeight = block.offsetHeight;

    const btn = document.getElementById("add_btn");

    btn.addEventListener('click', function(){
        if (data.value === "" || i_date.value === "" || i_time.value === "" || i_patient.value === "" || i_clinika.value === "" || i_vrach.value === "" || i_technik.value === "") {
            alert("Пожалуйста, заполните все поля и выберите элемент из списка");
            return;
        }

        if(data.value === "ПОНЕДЕЛЬНИК"){
            block = document.getElementById("egg1");
        } else if (data.value === "ВТОРНИК"){
            block = document.getElementById("egg2");
        } else if (data.value === "СРЕДА"){
            block = document.getElementById("egg3");
        } else if(data.value === "ЧЕТВЕРГ"){
            block = document.getElementById("egg4");
        } else if(data.value === "ПЯТНИЦА"){
            block = document.getElementById("egg5");
        } else if (data.value === "СУББОТА"){
            block = document.getElementById("egg6");
        } else if (data.value === "ВОСКРЕСЕНЬЕ"){
            block = document.getElementById("egg7");
        } else if (data.value === "ЛИШНИЙ"){
            block = document.getElementById("egg8");
        }
        const polblock = block.querySelector('.polegg');
    
        const date = polblock.querySelector('#date');
        const time = polblock.querySelector('#time');
        const patient = polblock.querySelector('#patient');
        const clinika = polblock.querySelector('#clinika');
        const vrach = polblock.querySelector('#vrach');
        const technik = polblock.querySelector('#technik');

        function add_info(divElement, text){
            const newH3 = document.createElement('h3');
            newH3.textContent = text;
            divElement.appendChild(newH3); 
        }

        
        add_info(date, i_date.value);
        add_info(time, i_time.value);
        add_info(patient, i_patient.value);
        add_info(clinika, i_clinika.value);
        add_info(vrach, i_vrach.value);
        add_info(technik, i_technik.value);

        updateHeight();
        alert("Dada");
    });

    function updateHeight(){
        let totalHeght = 0;
        for(let i = 0; i < block.children.length; i++){
            totalHeght += block.children[i].offsetHeight;
        }
        if (totalHeght > initialHeight){
            block.style.height = totalHeght + 'px';
        }
    }

    updateHeight();
});