var hbs = require('hbs');

//helpers HBS
hbs.registerHelper("getAnio", () => {
    return new Date().getFullYear();
})

hbs.registerHelper("capitalize", (text) => {
    var txt_cap = text.split(" ");

    txt_cap.forEach((element, i) => {
        txt_cap[i] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
    });

    return txt_cap.join(" ");

})