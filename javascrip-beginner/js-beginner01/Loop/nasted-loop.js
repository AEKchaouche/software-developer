let cars = ["BMW", "Mercedes", "Honda"];
let models = [2020, 2021, 2022];
let colors= ["Black", "Red", "Green"]


for (let i = 0; i < cars.length; i++) {
    console.log(`Cars : ${cars[i]}`);
    for (let j = 0 ; j < models.length; j++)
     {
        console.log(`Models: ${models[j]}`);
    }
    for (let y = 0; y < colors.length; y++)
    {
        console.log(`Colors: ${colors[y]}`);
    }

    console.log('______________________')
    
}

