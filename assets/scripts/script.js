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

 const zucchina1 =
{
    varietà: `zucchino romanesco`,
    peso: 500,
    lunghezza: 17,
}

const zucchina2 =
{
    varietà: `zucchino fiorentino`,
    peso: 350,
    lunghezza: 12,
}

const zucchina3 =
{
    varietà: `zucchina napoletana`,
    peso: 450,
    lunghezza: 15,
}

const zucchina4 =
{
    varietà: `zucchine tonde`,
    peso: 450,
    lunghezza: 12,
}

const zucchina5 =
{
    varietà: `zucchine cubiche`,
    peso: 350,
    lunghezza: 18,
}

const zucchina6 =
{
    varietà: `zucchine non euclidee`,
    peso: 1,
    lunghezza: 1,
}

const zucchina7 =
{
    varietà: `zucchine zuccherate`,
    peso: 600,
    lunghezza: 14,
}

const zucchina8 =
{
    varietà: `zucchine salate`,
    peso: 500,
    lunghezza: 10,
}

const zucchina9 =
{
    varietà: `zucchine senza sapore`,
    peso: 350,
    lunghezza: 15,
}

const zucchina10 =
{
    varietà: `zucchine mastodontiche`,
    peso: 10000,
    lunghezza: 100,
}

const arrayOver15 = [];
const arrayUnder15 = [];



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

