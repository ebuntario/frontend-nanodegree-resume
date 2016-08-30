/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var name = "Ethan Buntario";
 var formattedName = HTMLheaderName.replace("%data%", name);

 var role = "UI Designer";
 var formattedRole = HTMLheaderRole.replace("%data%", role);
 
 $("#header").append(formattedRole);
 $("#header").prepend(formattedName);