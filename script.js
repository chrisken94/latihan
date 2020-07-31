function funcTog() {
    let x = document.getElementById("myNav");
    if (x.className === "navbar") {
        x.className += " responsive";
    } else {
        x.className = "navbar";
    }
}

// // not a good result
// $(document).ready(function() {
//     $('#tog').click(function() {
//         $('.nav-item').toggle(500);
//         $('#nav-prof').text('Profile');
//         $('#nav-prod').text('Products');
//         $('#nav-serv').text('Services');
//         $('#nav-cont').text('Contacts');
//         $('#nav-team').text('Teams');
//     })
// })