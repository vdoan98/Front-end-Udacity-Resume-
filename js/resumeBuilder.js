/*
This is empty on purpose! Your code to build the resume will go here.
 */
 var bio = {
   "name": "Vy Doan",
   "age": 18,
   "role": "Web Developer",
   "contact": {
     "phone": "402-613-5540",
     "email": "vdoan98@gmail.com",
     "location": "600N 15th St, Lincoln, Nebraska",
     "twitter": "vdoan98",
     "github": "vdoan98"
   },
   "welcomemessage": "hello",
   "skills": ["coding", "drawing", "reading"],
   "profile": "images/fry.jpg"
 };

var work = {
  "jobs": [
    {
      "title": "Student",
      "employer": "University of Nebraska-Lincoln",
      "dates": 2016,
      "location": "Lincoln, NE, USA",
      "description": "Computer Science and Philosophy double major"
    },
    {
      "title": "Web Developer",
      "employer": "Self-Employed",
      "dates": 2017,
      "location": "Lincoln, NE, USA",
      "description": "Web design and development"
    }
  ]
}

var projects = {
  "projects": [
    {
      "title": "Portfolio Site",
      "dates": 2017,
      "description": "Website show case my other projects",
      "img": ["images/fry.jpg", "images/fry.jpg"]
    },
    {
      "title": "Resume Website",
      "dates": 2017,
      "description": "Website of my resume",
      "img": ["images/fry.jpg", "images/fry.jpg"]
    }
  ]
}

var education = {
  "schools": [
    {
      "name": "University of Nebraska-Lincoln",
      "major": ["Comp Sci", "Philosophy"],
      "degree": "B.S.",
      "minor": "Mathematics",
      "dates": 2016,
      "location": "Lincoln, NE, USA"
    }
  ],
  "onlineCourses": [
    {
      "title": "Front-End Web Development",
      "school": "Udacity",
      "dates": 2017,
      "url": "https://classroom.udacity.com/nanodegrees/nd001/syllabus?activePartKey=0011345406#"
    }
  ]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedNameRole = formattedName + formattedRole;
var formattedPosition = HTMLworkTitle.replace("%data%", work["position"]);
var formattedEducation = HTMLschoolName.replace("%data%", education.name);
var formattedMobile = HTMLmobile.replace("%data%", bio.contact.phone);
var formattedEmail = HTMLemail.replace("%data%", bio.contact.email);
var formattedTwitter = HTMLtwitter.replace("%data%", bio.contact.twitter);
var formattedGithub = HTMLgithub.replace("%data%", bio.contact.github);
var formattedLocation = HTMLlocation.replace("%data%", bio.contact.location);
var formattedBio = HTMLbioPic.replace("%data%", bio.profile);
var formattedWelcome = HTMLwelcomeMsg.replace("%data%", bio.welcomemessage)
// $("#header").prepend(formattedName);
// $("#header").prepend(formattedRole);
$("#header").prepend(formattedNameRole);
$("#header").append(formattedMobile);
$("#header").append(formattedEmail);
$("#header").append(formattedTwitter);
$("#header").append(formattedPosition);
$("#header").append(formattedLocation);
$("#header").append(formattedGithub);
$("#header").append(formattedWelcome);
$("#header").append(formattedBio);
$("#header").append(formattedEducation);


function inName(name){
  var nameArray = name.split(" ");
  var firstName = nameArray[0].slice(0,1).toUpperCase() + nameArray[0].slice(1).toLowerCase();
  var lastName = nameArray[1].toUpperCase();
  return firstName + " " + lastName;
}

$("#main").append(internationalizeButton);

if(bio.skills.length > 0){
  $("#header").append(HTMLskillsStart);
  var formattedSkills = HTMLskills.replace("%data%", bio.skills[0]);
  $("#skills").append(formattedSkills);
  formattedSkills = HTMLskills.replace("%data%", bio.skills[1]);
  $("#skills").append(formattedSkills);
  formattedSkills = HTMLskills.replace("%data%", bio.skills[2]);
  $("#skills").append(formattedSkills);

}

for(job in work.jobs){
  $("#workExperience").append(HTMLworkStart);
  var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
  $(".work-entry:last").append(formattedDates);
  var formattedJob = HTMLworkTitle.replace("%data%", work.jobs[job].title);
  var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
  var formattedEmployerTitle = formattedJob + formattedEmployer;
  $(".work-entry:last").append(formattedEmployerTitle);
  var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
  $(".work-entry:last").append(formattedDescription);
  var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
  $(".work-entry:last").append(formattedLocation);

}


projects.display = function(){
  for (project in projects.projects){
    $("#projects").append(HTMLprojectStart);
    var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[project].title);
    $(".project-entry:last").append(formattedTitle);
    var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[project].dates);
    $(".project-entry:last").append(formattedDates);
    var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[project].description);
    $(".project-entry:last").append(formattedDescription);
    if(projects.projects[project].img.length > 0){
      for(image in projects.projects[project].img){
        var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[project].img[image]);
        $(".project-entry:last").append(formattedImage);
      }
    }
  }
}

for (school in education.schools){
  $("#education").append(HTMLschoolStart);
  var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
  $(".education-entry:last").append(formattedTitle);
  var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
  $(".education-entry:last").append(formattedMajor);
  var formattedDates = HTMLprojectDates.replace("%data%", education.schools[school].dates);
  $(".education-entry:last").append(formattedDates);
  var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
  $(".education-entry:last").append(formattedLocation);
  var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
  $(".education-entry:last").append(formattedDegree);
  $("#education").append(HTMLonlineClasses);
}

for (school in education.onlineCourses){
  $("#education").append(HTMLschoolStart);
  var formattedTitle = HTMLonlineTitle.replace("%data%", education.onlineCourses[school].title);
  $(".education-entry:last").append(formattedTitle);
  var formattedName = HTMLonlineSchool.replace("%data%", education.onlineCourses[school].school);
  $(".education-entry:last").append(formattedName);
  var formattedDates = HTMLonlineDates.replace("%data%", education.onlineCourses[school].dates);
  $(".education-entry:last").append(formattedDates);
  var formattedUrl = HTMLonlineURL.replace("%data%", education.schools[school].url);
  $(".education-entry:last").append(formattedUrl);
}


$("#mapDiv").append(googleMap);

projects.display();
