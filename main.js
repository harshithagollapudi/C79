name_of_the_student_array=[];
function Submit()
{
    var name1=document.getElementById("name_of_the_student1").value;
    var name2=document.getElementById("name_of_the_student2").value;
    var name3=document.getElementById("name_of_the_student3").value;
    var name4=document.getElementById("name_of_the_student4").value;
name_of_the_student_array.push(name1);
name_of_the_student_array.push(name2);
name_of_the_student_array.push(name3);
name_of_the_student_array.push(name4);
console.log(name_of_the_student_array);
document.getElementById("display__name").innerHTML=name_of_the_student_array;
document.getElementById("Submit_button").style.display="none";
document.getElementById("Sort_button").style.display="inline-block";
}
function Sort()
{
name_of_the_student_array.sort();
console.log(name_of_the_student_array);
document.getElementById("display__name").innerHTML=name_of_the_student_array;
}