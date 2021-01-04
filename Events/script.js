/*  
    Event Lists
    * click
    * dblckick
    * mouse
        - over
        - enter
        - leave
        - move
    * key
        - up
        - down
*/

console.log("This is event");
 document.getElementById("header").addEventListener("click",HeadSelector);

function HeadSelector(e)
{
    console.log(e.target.innerText);
    console.log(e.clientX);
}

document.querySelector("body").addEventListener("mousemove", (event)=>
{
    document.body.style.backgroundColor = `rgb(${event.offsetX},${event.offsetY}, 50)`;
});