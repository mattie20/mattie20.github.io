

window.onload = function(){
    document.getElementById("bunny").addEventListener("mouseover", ah, true);
    document.getElementById("bunny_container").addEventListener("click", happy, false);
    document.getElementById("bunny_container").addEventListener("mouseover", anxious, true);
    document.getElementById("page").addEventListener("mouseover", sad, true);
}


function ah(){
    document.getElementById("bunny").innerHTML = "<h1>(\\/)</h1><h1>( ><)</h1><h1>c(\")(\")</h1>"
}


function sad(){
    document.getElementById("bunny").innerHTML = "<h1>(\\/)</h1><h1>( ..)</h1><h1>c(\")(\")</h1>"
}


function anxious(){
    document.getElementById("bunny").innerHTML = "<h1>(\\/)</h1><h1>( oO)</h1><h1>c(\")(\")</h1>"
}

function happy(){
    document.getElementById("bunny").removeEventListener("mouseover", ah, true);
    document.getElementById("bunny_container").removeEventListener("click", happy, false);
    document.getElementById("bunny_container").removeEventListener("mouseover", anxious, true);
    document.getElementById("page").removeEventListener("mouseover", sad, true);
    document.getElementById("bunny").innerHTML = "<h1>(\\/)</h1><h1>( ^^)</h1><h1>c(\")(\")</h1></div>"
}

function animate(){
    document.getElementById("run_bun_"i).hidden = false
// <h1>`(\(\</h1>
// <h1>  ( ^^)</h1>
// <h1> ~ (  )</h1>
// <h1> ~()  (")</h1>
// 
// <h1> (\(\</h1>
// <h1>  ( ^^)</h1>
// <h1> ~ (  )</h1>
// <h1> ~() (")</h1>
// 
// <h1> (\(\</h1>
// <h1>  ( ^^)</h1>
// <h1> ~ (  )</h1>
// <h1> ~("))</h1>
// 
// <h1> (\(\</h1>
// <h1>  ( ^^)</h1>
// <h1> ~ (  )</h1>
// <h1> ~()  (")</h1>
}
