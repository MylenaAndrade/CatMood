function catmood(){
    let gif = document.getElementById("gif_cat")
    let title = document.getElementById("title_cat")

    let input=`https://cataas.com/cat/says/${title.value}?fontSize=50&fontColor=red`
    
    gif.src=input
}