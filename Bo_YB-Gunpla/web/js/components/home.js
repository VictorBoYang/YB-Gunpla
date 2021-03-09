function home() {

    // ` this is a "back tick". Use it to define multi-line strings in JavaScript.
    var content = `
    <h1>YB-Gunpla Home page</h1>
    <p>Welcome to YB-Gunpla! YB-Gunpla will show many excellent Gunpla.
       I hope more people will discover the charm of Gunpla and like 
       it. The models on display will all be Bandai products. 
       <a href="http://p-bandai.com/us/search?character=03-001">
            Bandai official website
        </a>
    </p>
    <img src='pics/Freedom_Shanghai_1.png' alt="rouge_gundam">
    `;

    var ele = document.createElement("div");
    ele.innerHTML = content;
    return ele;
}

