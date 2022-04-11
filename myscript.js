let more_likes = 0;
let already_likes = 203;

function like() {
    more_likes++;
    if (more_likes % 2 == 0) {
        document.getElementById('like').style.color = "black";
        already_likes--;
    } else {
        document.getElementById('like').style.color = "red";
        already_likes++;
    }
    document.getElementById('counts').innerHTML = `${already_likes} likes`;
}