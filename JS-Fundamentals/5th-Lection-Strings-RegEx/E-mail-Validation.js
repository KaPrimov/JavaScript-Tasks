function validateEmail([email]) {
   let pattern = /^[a-zA-Z0-9]+@[a-z]+(\.[a-z]{2,})+$/gm;
    let result = pattern.test(email);
    if (result) {
        console.log("Valid");
    } else {
        console.log("Invalid");
    }
}

validateEmail(['bai.ivan@mail.sf.net']);
//^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$