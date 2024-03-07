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

zucchine.forEach(zucchina => {
    pesoZucchine += zucchina.peso;
    console.log(`peso zucchine =` + pesoZucchine);
});



/*******************************************/

/* JSnack 2 */