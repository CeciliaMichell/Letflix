let flag = false
function toggleHumberger(){
    let toggle = document.getElementById('navbar')
    if(flag == false){
        toggle.style.display = 'flex'
        flag = true
        }
    else{
        toggle.style.display = 'none'
        flag = false
    }
}
const mediaQuery = '(max-width:900px)'
const mediaQueryChange = window.matchMedia(mediaQuery)
mediaQueryChange.addEventListener('change', function(a){
    if(a.target.matches == false){
        document.getElementById('navbar').style.display = 'flex'
    }
})