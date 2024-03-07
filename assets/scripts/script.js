/* JSnack 1 */

const zucchine = [
    {
        varietà: `zucchino romanesco`,
        peso: 500,
        lunghezza: 17,
    },
    {
        varietà: `zucchino fiorentino`,
        peso: 350,
        lunghezza: 12,
    },
    {
        varietà: `zucchina napoletana`,
        peso: 450,
        lunghezza: 15,
    },
    {
        varietà: `zucchine tonde`,
        peso: 450,
        lunghezza: 12,
    },
    {
        varietà: `zucchine cubiche`,
        peso: 350,
        lunghezza: 18,
    },
    {
        varietà: `zucchine non euclidee`,
        peso: 1,
        lunghezza: 1,
    },
    {
        varietà: `zucchine zuccherate`,
        peso: 600,
        lunghezza: 14,
    },
    {
        varietà: `zucchine salate`,
        peso: 500,
        lunghezza: 10,
    },
    {
        varietà: `zucchine senza sapore`,
        peso: 350,
        lunghezza: 15,
    },
    {
        varietà: `zucchine mastodontiche`,
        peso: 10000,
        lunghezza: 100,
    }
]

let pesoZucchine = 0;

function sommaZucchine()
{
zucchine.forEach(zucchina => {
    pesoZucchine += zucchina.peso;
    console.log(`peso zucchine =` + pesoZucchine);
});
}

sommaZucchine();


/*******************************************/

/* JSnack 2 */

const zucchine2 = [
    {
        varietà: `zucchino romanesco`,
        peso: 500,
        lunghezza: 17,
    },
    {
        varietà: `zucchino fiorentino`,
        peso: 350,
        lunghezza: 12,
    },
    {
        varietà: `zucchina napoletana`,
        peso: 450,
        lunghezza: 15,
    },
    {
        varietà: `zucchine tonde`,
        peso: 450,
        lunghezza: 12,
    },
    {
        varietà: `zucchine cubiche`,
        peso: 350,
        lunghezza: 18,
    },
    {
        varietà: `zucchine non euclidee`,
        peso: 1,
        lunghezza: 1,
    },
    {
        varietà: `zucchine zuccherate`,
        peso: 600,
        lunghezza: 14,
    },
    {
        varietà: `zucchine salate`,
        peso: 500,
        lunghezza: 10,
    },
    {
        varietà: `zucchine senza sapore`,
        peso: 350,
        lunghezza: 15,
    },
    {
        varietà: `zucchine mastodontiche`,
        peso: 10000,
        lunghezza: 100,
    }
]


const ages = [32, 33, 16, 40];
const result = ages.filter(checkAdult);

function checkAdult(age) {
  return age >= 18;
}



/***************************/

/* Snack 3 */

const stringToInvert = prompt(`inserire stringa da invertire:`);

function stringInverter1 () 
{
    let reversedString = stringToInvert.split('').reverse().join('');
    console.log(reversedString);
}

function stringInverter2 ()
{
    let reversedString = [...stringToInvert].reverse().join('');
    console.log(reversedString);
}

function stringInverter3 ()
{
    let reversedString = " ";
    for (let i = stringToInvert.length - 1; i >= 0; i--) {
        reversedString += stringToInvert[i];
    }
    console.log(reversedString);
}

stringInverter1();
stringInverter2();
stringInverter3();


/********************************/

/* Snack 4 */

let arraY1 = [`word1`, `word2`, `word3`, `word4`, `word5`];
let arraY2 = [`word6`, `word7`, `word8`, `word9`, `word10`];
let array3 = [];

function mergeArrays(element1, element2, element3) 
{
    if(element1.length == element2.length) 
    {
        for(i = 0; i < element1.length; i++) 
        {
            arrayElement1 = element1[i];
            arrayElement2 = element2[i];

            element3.push(arrayElement1);
            element3.push(arrayElement2);
        }
        console.log(element3);
        return element3;
    } else 
    {
        console.log(`merge non applicabile con funzioni di diversa lunghezza`);
    }
}

mergeArrays(arraY1, arraY2, array3);



