const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(n){

    const bodyResult = document.getElementById('body');

    const divResult = document.createElement("div");

    const newResult = document.createTextNode(n);

    divResult.appendChild(newResult);

    bodyResult.appendChild(divResult);

}

// implemente o código do kata 1 aqui
function kata1() {

    let r = [1]

    for (let i = 2; i <= 25; i++){

        r = r + ", " + i

        }   

    showResults(r)

    return r
}

kata1()

    // implemente o código do kata 2 aqui
function kata2() {

    let r = [25]

    for (let i = 24; i>=1; i--){

        r = r + ", " + i

    }

    showResults(r)

    return r

}

kata2()

    // implemente o código do kata 3 aqui
function kata3() {

    let r = [-1]

    for (let i = -2; i >= -25; i--){

        r = r + ', ' + i
    }

    showResults(r)

    return r

}

kata3()

    // implemente o código do kata 4 aqui
function kata4() {

    let r = [-25]

    for (let i = -24; i <= -1; i++) {

        r = r + ', ' + i

    }

    showResults(r)

    return r 

}

kata4()

    // implemente o código do kata 5 aqui
function kata5() {

    let r = [25]

    for (let i = 25; i >= -25; i--){

        r = r + ', ' + i

    }

    showResults(r)

    return r

}

kata5()

    // implemente o código do kata 6 aqui
function kata6() {

    let r = [3]

    for (let i = 6; i <= 100; i = i + 3){

        r = r + ', ' + i

    }

    showResults(r)

    return r

}

kata6()

    // implemente o código do kata 7 aqui
function kata7() {

    let r = [7]

    for ( let i = 14; i <= 100; i = i + 7 ){

        r = r + ', ' + i

    }

    showResults(r)
    
    return r

}

kata7()

    // implemente o código do kata 8 aqui
function kata8() {

    let r = [99];

    for (let i = 98; i > 0; i-- ){
        
    if ((i % 7 === 0) || ((i % 3 === 0))){

        r = r + ', ' + i

        }

    }
       
    showResults(r)

    return r

}

kata8()

    // implemente o código do kata 9 aqui
function kata9() {

    let r = [5]

    for (let i = 10; i <= 95; i = i + 5){
        
        if(i % 2!==0){

        r = r + ', ' + i

        }

    }

    showResults(r)

    return r

}

kata9()

    // implemente o código do kata 10 aqui
function kata10() {

    showResults(sampleArray)

    return sampleArray

}

kata10()

    // implemente o código do kata 11 aqui
function kata11() {

    let r = []

    for(let i = 0; i < sampleArray.length; i++){

        if (sampleArray[i] % 2 === 0){

            r.push(" " + sampleArray[i])

        }

    }

    showResults(r)

    return r

}

kata11()

    // implemente o código do kata 12 aqui
function kata12() {

    let r = []

    for(let i = 0; i<sampleArray.length; i++){

        if (sampleArray[i]%2!==0){

            r.push(" " + sampleArray[i])
        }

    }

    showResults(r)

    return r

}

kata12()

    // implemente o código do kata 13 aqui
function kata13() {

    let r = []

    for(let i = 0; i<sampleArray.length; i++){

        if (sampleArray[i]%8===0){

            r.push(" " + sampleArray[i])

        }

    }

    showResults(r)

    return r

}

kata13()

    // implemente o código do kata 14 aqui
function kata14() {

    let r = []

    for (let i = 0; i<sampleArray.length; i++){

        put=sampleArray[i]**2

        r.push(" " + put)

    }

    showResults(r)

    return r

}

kata14()

    // implemente o código do kata 15 aqui
function kata15() {

    let r = 0 

    for (let i = 0; i <= 20; i++){

        r += i;

    }

    showResults(r)

    return r

}

kata15()

    // implemente o código do kata 16 aqui
function kata16() {

    let r = 0 

    for(let i = 0; i < sampleArray.length; i++){

        r += sampleArray[i];

    }

    showResults(r)

    return r

}

kata16()

    // implemente o código do kata 17 aqui
function kata17() {

    let r = sampleArray[0]

    for (let i = 0; i < sampleArray.length; i++) {

        if (sampleArray[i] < r){

            r = sampleArray[i]

        }

    }

    showResults(r)
    
    return r

}

kata17()

    // implemente o código do kata 18 aqui
function kata18() {

    let r = sampleArray[0]

    for (let i = 0; i < sampleArray.length; i++) {

        if (sampleArray[i] > r ){

            r = sampleArray[i]

        }

    }

    showResults(r)

    return r

}

kata18()


/**
 * Daqui em diante são os bônus, por sua conta e risco
 */
    // implemente o código do kata bonus 1 aqui
function kataBonus1() {

const bodyResult= document.getElementById('body');

    for (let i = 0; i<20; i++){

        let blocks = document.createElement("div")

        blocks.className= "blocks"

        bodyResult.appendChild(blocks)

        blocks.style.width= 100 +"px"

        blocks.style.height=20 +"px"

        blocks.style.background = "gray"

        blocks.style.margin="1px"

    }

    return

}

kataBonus1()

    // implemente o código do kata bonus 2 aqui
function kataBonus2() {

    const bodyResult= document.getElementById('body');

    for (let i = 0; i<20; i++){

        let blocks = document.createElement("div")

        blocks.className= "blocks"

        bodyResult.appendChild(blocks)

        blocks.style.width= 105 + 5*i +"px"

        blocks.style.height=20 +"px"

        blocks.style.background = "gray"

        blocks.style.margin="1px"

    }

    return

}

kataBonus2()

    // implemente o código do kata bonus 3 aqui
function kataBonus3() {

const bodyResult= document.getElementById('body');

    for (let i = 0; i<20; i++){

        let blocks = document.createElement("div")

        blocks.className= "blocks"

        bodyResult.appendChild(blocks)

        blocks.style.width= sampleArray[i] +"px"

        blocks.style.height=20 +"px"

        blocks.style.background = "gray"

        blocks.style.margin="1px"

    }

    return

}

kataBonus3()

    // implemente o código do kata bonus 4 aqui
function kataBonus4() {

const bodyResult= document.getElementById('body');

    for (let i = 0; i<20; i++){

        let blocks = document.createElement("div")

        blocks.className= "blocks"

        bodyResult.appendChild(blocks)

        blocks.style.width= sampleArray[i] +"px"

        blocks.style.height=20 +"px"

        blocks.style.background = "gray"

        blocks.style.margin="1px"

        if(i%2===0){

            blocks.style.background = "red"

        }

    }

    return

}

kataBonus4()

    // implemente o código do kata bonus 5 aqui
function kataBonus5() {

const bodyResult= document.getElementById('body');

    for (let i = 0; i<20; i++){

        let blocks = document.createElement("div")

        blocks.className= "blocks"

        bodyResult.appendChild(blocks)

        blocks.style.width= sampleArray[i] +"px"

        blocks.style.height=20 +"px"

        blocks.style.background = "gray"

        blocks.style.margin="1px"

        if(i%2===0){

            blocks.style.background = "red"

        }

    }

    return

}

kataBonus5()