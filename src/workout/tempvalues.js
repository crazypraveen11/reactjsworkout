 
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
    },
    
    {
        name: "AjithKumar",
        age: 21,
        gender: "Male" ,
        email: "smiley@gmail.com",
        place: "Tiruchengode",
        phonenumber: 6985741236
    },

    {
        name: "Kumar",
        age: 21,
        gender: "Male" ,
        email: "kumar@gmail.com",
        place: "Trichy",
        phonenumber: 6321459875  
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

export let Erase = (index) => {
     Details = Details.filter (
        (data,pos) => {
            return pos !== index;
        }
     )
    return Details;
}


export let  Fetchexact = (name) =>{
    var temp = Details.filter(
        (data,index) => {
            return data.name === name;
        }
    )
    return temp[0];
}

export let Reedit = (data,pos) => {
    Details[pos] = data;

}
