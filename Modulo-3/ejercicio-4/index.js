function checkLikes(arrayLikes){
    let i = 0;
    switch (arrayLikes.length) {
        case 0:
            console.log("Nadie ha dado like");
            break;
        case 1: 
            console.log(arrayLikes[0] + " ha dado like");
            break;
        case 2:
            console.log(arrayLikes[0] + " y " + arrayLikes[1] + " han dado like");
            break;
        case 3: 
            console.log(arrayLikes[0] + ", " + arrayLikes[1] + " y " + arrayLikes[2] + " han dado like");
            break;
        default:
            console.log(arrayLikes[0] + ", " + arrayLikes[1] + " y " +  (arrayLikes.length-2) + " más han dado like");
            break;
    }
}

//const likes = [];
//const likes = ['Juan'];
//const likes = ['Juan', 'María'];
//const likes = ['Juan', 'María', 'Pedro'];
//const likes = ['Juan', 'María', 'Pedro', 'Pablo', 'Laura'];
checkLikes([]);
checkLikes(['Juan']);
checkLikes(['Juan', 'María']);
checkLikes(['Juan', 'María', 'Pedro']);
checkLikes(['Juan', 'María', 'Pedro', 'Pablo', 'Laura']);