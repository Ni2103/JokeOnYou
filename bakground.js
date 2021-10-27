// change backgroud
let colors =['red','blue','green','orange', 'purple','black'];
// change background of tag body has id "cover" when button is clicked
let button = document.getElementById('background');

button.addEventListener('click', function(){
    // select a random nuber between 0 and 5
    let index =parseInt((Math.random()*colors.length)+1);
     // grab the cover
     let cover =document.getElementById('cover');
     cover.style.background= `${colors[index]}`
})

// message from window
alert('Rất vui được làm quen với bạn <3333')
//    heading 
function textEffective() {
    document.getElementById('demo').innerHTML='hii!!!!...Rất vui được làm quen bạn mới'
    document.getElementById('age').innerHTML='Tôi có thể giúp gì cho bạn!!'
    
}

// 
function hateMe(){
    document.getElementById('text_1').style.display='none'
   let x= document.getElementById('text_2');
   x.innerHTML='Bạn ghét tôi ư <i class="fas fa-sad-tear"></i>';
   x.style.color='red';

}
 
function finished(){
 document.write('Được lắm!! Bạn nhớ đấy! Chào không gặp lại luôn nha :(((')
}
