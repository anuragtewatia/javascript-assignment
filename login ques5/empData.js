var i=0;
var employ = [
    {image:"images\\emp1.jpg",
     name: "Lana",
     designation: "Associate Engineer",
     project: "carrier",
     Experience: "6 years"
    },
    {image:"images\\emp2.jpg",
    name: "Sara",
    designation: "Associate Engineer",
    project: "carrier",
    Experience: "1 year"
   },
   {image:"images\\emp3.jpg",
   name: "Anurag",
   designation: "Associate Engineer",
   project: "carrier",
   Experience: "7 years"
  },
  {image:"images\\emp4.jpg",
  name: "Bobby",
  designation: "Seniour Associate Engineer",
  project: "carrier",
  Experience: "29 years"
 }]
 var len = employ.length;
 
function Nextemp() {
    if(i<len){
        document.getElementById('image').src= employ[i].image;
        document.getElementById("d1").innerHTML = "Name:  " + employ[i].name;
        document.getElementById("d2").innerHTML = "Dedignation: " + employ[i].designation;
        document.getElementById("d4").innerHTML = "Project:  "+ employ[i].project;
        document.getElementById("d3").innerHTML = "Experience:  "+ employ[i].Experience;
        i=i+1;
    }
    }
	
    function Prevemp() {
        if(i>0){
            i=i-1;
            document.getElementById('image').src= employ[i].image;
            document.getElementById("d1").innerHTML = "Name:  " + employ[i].name;
            document.getElementById("d2").innerHTML = "Dedignation: " + employ[i].designation;
            document.getElementById("d4").innerHTML = "Project:  "+ employ[i].project;
            document.getElementById("d3").innerHTML = "Experience:  "+ employ[i].Experience;
        }
            
			

}	