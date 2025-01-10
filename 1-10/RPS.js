function RPS(){
    const choices = ["gu","choki","pa"];
    

    //この書き方は、配列です。C言語参照
    // let select = document.createElement("select");
    // let opcion1 = document.createElement("opcion");
    // let opcion2 = document.createElement("opcion");
    // let opcion3 = document.createElement("opcion");
    // const gu ="gu";
    // opcion1.value = gu;
    // opcion1.textContent = gu;
    // select.appendChild(opcion);
    // opcion2.value = "choki";
    // opcion2.textContent = "choki";
    // select.appendChild(opcion);
    // opcion3.value = "pa";
    // opcion3.textContent = "pa";
    // select.appendChild(opcion);
    // gameContainer.appendChild(select);

    let select = document.createElement("select");
    select.id = "choices"
    choices.forEach(choice => {
        let option = document.createElement("option");
        option.value = choice;
        option.textContent = choice;
        option.id = choice;
        select.appendChild(option);
    });
    gameContainer.appendChild(select);

    let choiceButton = document.createElement("button")
    choiceButton.textContent = "決定"

    gameContainer.appendChild(choiceButton)

    let image = document.createElement("img");
    image,alt = "handImage";
    image.style.width = "200px";
    image.style.height = "200px";

    let enemyImage = document.createElement("img");
    enemyImage.alt  = "choice";
    enemyImage.style.width  = "200px";
    enemyImage.style.height = "200px";

choiceButton.addEventListener("click",function(){
    switch(select.value){
        case "gu":
            image.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiusq_ptNOOC9XkVvWTa88nhB6I7n12fsf95zdnS-n269HpN9dVRd0JCCV0iL2u_tWrDU5XySM8-i9u38-tXp0Wgu6qRF4p-5A1djjVskwkB0SQFxULDss8Uj1o7CYfbMNRpT-kfn3cG4E/s800/janken_gu.png";
            break;
        case "choki":
            image.src = "https://4.bp.blogspot.com/-__yEIXe5SxU/Uab3zO7BB2I/AAAAAAAAUVI/MYg6TVeiv-Y/s800/janken_choki.png";
            break;
        case "pa":
            image.src = "https://th.bing.com/th/id/OIP.Temv4KRwA_MFOD-JpKqItAAAAA?rs=1&pid=ImgDetMain";
            break;
        default:
            break;   
    }
    let enemyhand = choices[Math.floor(Math.random() * choices.length)];

    switch(enemyhand){
        case "gu":
            enemyImage.src = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiusq_ptNOOC9XkVvWTa88nhB6I7n12fsf95zdnS-n269HpN9dVRd0JCCV0iL2u_tWrDU5XySM8-i9u38-tXp0Wgu6qRF4p-5A1djjVskwkB0SQFxULDss8Uj1o7CYfbMNRpT-kfn3cG4E/s800/janken_gu.png";
            break;
        case "choki":
            enemyImage.src = "https://4.bp.blogspot.com/-__yEIXe5SxU/Uab3zO7BB2I/AAAAAAAAUVI/MYg6TVeiv-Y/s800/janken_choki.png";
            break;
        case "pa":
            enemyImage.src = "https://th.bing.com/th/id/OIP.Temv4KRwA_MFOD-JpKqItAAAAA?rs=1&pid=ImgDetMain";
            break;
        default:
            break;   
    }
})
    gameContainer.appendChild(image);
    gameContainer.appendChild(enemyImage);

    //forEach 配列など複数のデータがあるもの使える。全部やる関数。
    //配列.forEach(配列に中身 => (命令))
}