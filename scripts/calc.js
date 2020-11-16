function whatCanIDrink(age) {
if(age<=0) {
    return "Sorry. I can't tell what drink because that age is incorrect!";
}
else if (age<14) {
    return "Drink toddy";
}
else if (age<18 && age >=14) {
    return "Drink coke";
}
else if (age<21 && age >=18) {
    return "Drink beer";
}
else if (age<130) {
return "Drink whiskey";
}
else {
    return "Sorry, I can't tell what to drink because that age is incorrect!";
}

}
