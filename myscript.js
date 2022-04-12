let more_likes = 1;
let already_likes = 203;

function like() {
    if (more_likes % 2 == 0) {
        document.getElementById('like').style.color = "black";
        already_likes--;
    } else {
        document.getElementById('like').style.cssText = "animation-name: heart-pop; animation-duration: 1s; animation-timing-function: ease-out; animation-iteration-count: 1; color:red;"
        already_likes++;
    }
    document.getElementById('counts').innerHTML = `${already_likes} likes`;
    more_likes++;
}