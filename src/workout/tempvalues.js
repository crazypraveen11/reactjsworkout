 
 let Details = [
    {
        name: "Praveen",
        age: 21,
        gender: "Male" ,
        email: "praveen11@gmail.com",
        place: "Namakkal",
        phonenumber: 6379873794
    },

    {
        name: "Priya",
        age: 18,
        gender: "Female" ,
        email: "priya@gmail.com",
        place: "Salem",
        phonenumber: 6232423794
    },

    {
        name: "Ashwin",
        age: 20,
        gender: "Male" ,
        email: "ash@gmail.com",
        place: "Tiruchengode",
        phonenumber: 9587589655
    }  
 ];

export let Create = (get) => {
    Details.push(get);
}

export let Showall = () => {
    return Details;
}

export let Read = (get) => {
    return Details[get];
}


