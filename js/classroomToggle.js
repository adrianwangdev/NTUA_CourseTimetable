var classroomIndex = 0
function moveClassroom(num) {
  var titleItem = document.querySelectorAll(".titleItem");
  var softwareItem = document.querySelectorAll(".softwareItem");
  var courseItem = document.querySelectorAll(".courseItem");

  classroomIndex += num;
  if (classroomIndex > titleItem.length - 1) {
    classroomIndex = 0;
  }
  if (classroomIndex < 0) {
    classroomIndex = titleItem.length - 1;
  }
  for (var i = 0; i < titleItem.length; i++) {
    titleItem[i].classList.remove("mobileShow")
    softwareItem[i].classList.remove("mobileShow")
    courseItem[i].classList.remove("mobileShow")
  }
  
  titleItem[classroomIndex].classList.add("mobileShow")
  softwareItem[classroomIndex].classList.add("mobileShow")
  courseItem[classroomIndex].classList.add("mobileShow")
  console.log(classroomIndex)
}