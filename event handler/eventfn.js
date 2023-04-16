function large(a)
{
  a.style.height = "100px";
  a.style.width = "60px";
}

function orignalsize(a)
{
  a.style.height = "50px";
  a.style.width = "30px";
}
function scenter(a)
{
document.getElementById('image').src='hyderabad.jpg';
a.style.height = "200px";
a.style.width = "100px";
}
function right(a)
{
document.getElementById('image').src='mumbai.jpg';
a.style.height = "300px";
a.style.width = "100px";
}
function current()
{
document.getElementById('tt').innerHTML ="date and time of submission of form    : "+ Date();
}
function adv()
{
document.getElementById('tt').innerHTML = "Before Submiting application make sure all details are provided";
}
function remadv()
{
document.getElementById('tt').innerHTML = "     ";
}