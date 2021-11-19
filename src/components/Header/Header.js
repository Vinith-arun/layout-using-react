var bv=true
function tb(){
bv ? false:true;
console.log(bv)
}
function Header(){
    return(
        <header>Header<button onClick={tb} id="but"></button> </header>
    )
}
export default Header;