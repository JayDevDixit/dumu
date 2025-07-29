let s = document.getElementById('switch');
let btn = document.getElementById('btn')
checked=false;
// prop={
//     true:{},
//     false:{},
// }
btn.addEventListener('click',()=>{
    if(checked){
        btn.style.backgroundColor = 'var(--false)';
        s.style.justifyContent = 'left'
    }
    else{
        btn.style.backgroundColor = 'var(--true)';
        s.style.justifyContent = 'right'
    }
  checked = !checked;  
  console.log("hello");
})