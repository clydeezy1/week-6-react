function AboutMe() {
    const name = 'Clydie';
    const city = 'San Angelo';
    const favoriteFoods = ['Mac & Cheese', 'Her Love', 'Cheese and Chilli stuffed Chitterlings'];
return (
    <section>
        <h2> About Me</h2>
        <p>My name is {name}, and  I am best by far at the pitch and the bar.</p>
        <p>I am from {city}.</p>
        <p>Oh how I do love {favoriteFoods.join(', ')}.</p>
    </section>
);

}

export default AboutMe;