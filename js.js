document.addEventListener('DOMContentLoaded', function(){
    const data = document.getElementById("data");
    const i_date = document.getElementById("i_date");
    const i_time = document.getElementById("i_time");
    const i_patient = document.getElementById("i_patient");
    const i_clinika = document.getElementById("i_clinika");
    const i_vrach = document.getElementById("i_vrach");
    const i_technik = document.getElementById("i_technik");


    const date = document.getElementById("date1");
    const time = document.getElementById("time1");
    const patient = document.getElementById("patient1");
    const clinika = document.getElementById("clinika1");
    const vrach = document.getElementById("vrach1");
    const technik = document.getElementById("technik1");

    const block = document.getElementById("egg1");
    const initialHeight = block.offsetHeight;

    const btn = document.getElementById("add_btn");

    btn.addEventListener('click', function(){
        if (data.value === "" || i_date.value === "" || i_time.value === "" || i_patient.value === "" || i_clinika.value === "" || i_vrach.value === "" || i_technik.value === "") {
            alert("Пожалуйста, заполните все поля и выберите элемент из списка");
            return;
        }

        function add_info(divElement, text){
            const newH3 = document.createElement('h3');
            newH3.textContent = text;
            divElement.appendChild(newH3); 
        }

        add_info(date, i_date.value)
        add_info(time, i_time.value);
        add_info(patient, i_patient.value);
        add_info(clinika, i_clinika.value);
        add_info(vrach, i_vrach.value);
        add_info(technik, i_technik.value);

        updateHeight();
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