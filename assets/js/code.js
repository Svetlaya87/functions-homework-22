


let bodyMassIndex;

function imt() {



    massBody = +massInput.value;
    heightBody = +heightInput.value;

    if (heightBody >2.72) {
        heightBody = heightBody /100;
    }

    bodyMassIndex = ( Math.round( (massBody/heightBody**2)*100 ) )/100;
    //return bodyMassIndex;
    // console.log(`Индекс массы тела ${bodyMassIndex}`);





    if ( bodyMassIndex < 16.5 ) {
        
        resultPlace.style.color= "green";
        resultPlace.innerHTML = `Индекс массы тела ${bodyMassIndex}. Он означает: выраженный дефицит массы тела`;
        //console.log(`Индекс массы тела ${bodyMassIndex}. Это меньше 16.5. Выраженный дефицит массы тела `);
    }


    if ( bodyMassIndex >= 16.5 && bodyMassIndex <= 18.49) {

        resultPlace.style.color= "green";
        resultPlace.innerHTML = `Индекс массы тела ${bodyMassIndex}. Он означает: масса тела недостаточная. `;
        //console.log(`Индекс массы тела 16.5 <= ${bodyMassIndex} <= 18.49. Масса тела недостаточная. `);
    }


    if ( bodyMassIndex >= 18.5 && bodyMassIndex <= 24.99) {

        resultPlace.style.color= "blue";

        resultPlace.innerHTML = `Индекс массы тела ${bodyMassIndex}. Он означает: масса тела нормальная. `;
        //console.log(`Индекс массы тела ${bodyMassIndex}. Это больше 18,5 и меньше 24.99. Масса тела нормальная. `);
    }



    if ( bodyMassIndex >= 25 && bodyMassIndex <= 29.99) {

        resultPlace.style.color= "rgb(250,202,118)";

        resultPlace.innerHTML = `Индекс массы тела ${bodyMassIndex}. Он означает: масса тела избыточная. Стадия предожирения `;
        // console.log(`Индекс массы тела ${bodyMassIndex}. Это больше 25 и меньше 29.99. Масса тела избыточная. Стадия предожирения `);
    }


    if ( bodyMassIndex >= 30 && bodyMassIndex <= 34.99) {


        resultPlace.style.color= "rgb(244,218,4)";

        resultPlace.innerHTML = `Ваш индекс массы тела ${bodyMassIndex}. Он означает: ожирение I степени. `;
        //console.log(`Ваш индекс массы тела ${bodyMassIndex}. Это больше 30  и меньше 34.99. Ожирение I степени. `);
    }

    if ( bodyMassIndex >= 35 && bodyMassIndex <= 39.99) {

        resultPlace.style.color= "rgb(208,143,84)";

        resultPlace.innerHTML = `Индекс массы тела ${bodyMassIndex}. Он означает: ожирение II степени. `;
        // console.log(`Индекс массы тела ${bodyMassIndex}. Это больше 35 и меньше 39.99. Ожирение II степени. `);
    }


    if ( bodyMassIndex >= 40 ) {

        resultPlace.style.color= "rgb(247,35,0)";

        resultPlace.innerHTML = `Индекс массы тела ${bodyMassIndex}. Он означает: ожирение III степени. Морбидное`;
        // console.log(`Индекс массы тела ${bodyMassIndex}. Это больше 40. Ожирение III степени. Морбидное`);
    }

}

