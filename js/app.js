function changeImg(id) {
    let img = document.getElementById("img" + id);
    if (img.src.match("funny-cat1_part" + id)) {
        img.src = 'monkey_part' + id + 'x1.jpg';
        img.alt = "monkey";
    } else if (img.src.match('monkey_part' + id)) {
        img.src = 'panda_swap_part' + id + 'x1.jpg';
        img.alt = "panda";
    } else {
        img.src = 'funny-cat1_part' + id + 'x1.jpg';
        img.alt = "cat";
    }
    checkImg();
}

function checkImg() {
    let imgAlt1 = document.getElementById("img1");
    let imgAlt2 = document.getElementById("img2");
    let imgAlt3 = document.getElementById("img3");
    let imgAlt4 = document.getElementById("img4");
    let imgAlt5 = document.getElementById("img5");
    if ((imgAlt1.alt === imgAlt2.alt) && (imgAlt2.alt === imgAlt3.alt) && (imgAlt3.alt === imgAlt4.alt) && (imgAlt4.alt === imgAlt5.alt)) {
        console.log("winner winner chicken dinner");
    }
}