  
let pronoun = ['the', 'our', 'mine', 'us', 'his'];
let adj = ['great', 'big', 'small','most','creative'];
let noun = ['jogger', 'racoon','agency','yoda','developer'];
let extention = ['.com', '.net', '.us', '.io','ml'];



    pronoun.forEach(item1 => {
        adj.forEach(item2 => {
            noun.forEach(item3 => {
                extention.forEach(item4 =>{
                     console.log(item1.concat(item2.concat(item3.concat(item4))));
                }) 
            });            
        });
    });
