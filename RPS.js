function RPS(){
    const choices = ["gu","choki","pa","muteki"];
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
    choices.forEach(choice => {
        let option = document.createElement("option");
        option.value = choice;
        option.textContent = choice;
        select.appendChild(option);
    });
    gameContainer.appendChild(select);

    let image = document.createElement("img");
    image,alt = "Choice";
    image.style.width = "600px";
    image.style.height = "400px";
    image.src = "https://tsukatte.com/wp-content/uploads/2019/03/janken_gu-940x940.png"

    gameContainer.appendChild(image);

    //forEach 配列など複数のデータがあるもの使える。全部やる関数。
    //配列.forEach(配列に中身 => (命令))
}