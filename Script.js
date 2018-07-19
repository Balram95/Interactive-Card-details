function show_header_one(){
    var front=document.getElementById("front");
    var h3=document.getElementsByTagName('h3');
    for(var i=0;i<h3.length;i++)
        h3[i].style.display="none";
    front.style.display="block";
    back.style.display= 'none';
    front.style.opacity="1";
    
//    console.log(image);
//    front.style.display= "block";
    front.children[1].style.display='block';
    
}

function show_header_two(){
    var front=document.getElementById("front");
    var h3=document.getElementsByTagName('h3');
    for(var i=0;i<h3.length;i++)
        h3[i].style.display="none";
    front.style.display="block";
    back.style.display= 'none';
    
//    console.log(image);
//    front.style.display= "block";
    front.style.opacity="1";
    front.children[2].style.display='block';
    
}

function show_header_three(){
    var front=document.getElementById("front");
    var h3=document.getElementsByTagName('h3');
    for(var i=0;i<h3.length;i++)
        h3[i].style.display="none";
    front.style.display="block";
    back.style.display= 'none';
    front.style.opacity="1";
    
//    console.log(image);
//    front.style.display= "block";
    
    front.children[3].style.display='block';
    
}
function show_header_four(){
   var front=document.getElementById("front");
    var back=document.getElementById("back");
    
    front.style.display="none";
    back.style.display= 'block';
    back.style.opacity="1";
    var h3=document.getElementsByTagName('h3');
    for(var i=0;i<h3.length;i++)
        h3[i].style.display="none";
    
//    console.log(image);
//    front.style.display= "block";
    
    setTimeout(()=>{
        back.children[1].style.display='block';
    },100);
    
}