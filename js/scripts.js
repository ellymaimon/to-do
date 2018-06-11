function Project(name, idName, dueDate, description) {

  this.name = name.toUpperCase();
  this.idName = idName;
  this.dueDate = dueDate;
  this.description = description;

}

$("#button" + this.idName).click(function() {
  $("#div" + this.idName).hide();
  this.finish();
});

Project.prototype.addProject = function() {
  $(".to-do").hide().fadeIn(1000);
  $(".project-output").show();
  $(".row").append("<div class='col card' id='div" + this.idName + "'><h4>" + this.name + "</h4><p>Due date is " + this.dueDate +
  "</p>" + "<p>Description: " + this.description + "</p>" + "<ul id='" + this.idName +
  "'></ul><button type='button' class='btn btn-danger' id='button" + this.idName + "'>Delete Project</button></div>");
  $("#project").attr("disabled", true);
  $("#dueDate").attr("disabled", true);
  $("#description").attr("disabled", true);
  $("#add-project").attr("disabled", true);
}

Project.prototype.addTask = function() {
  var taskName = $("#task").val();
  $("#task").val("");
  $("#" + this.idName).append("<li>" + taskName + "</li>");
  $("li").last().click(function() {
    $(this).toggleClass("strike");
  });
}

Project.prototype.finish = function() {
  $("#project").attr("disabled", false);
  $("#dueDate").attr("disabled", false);
  $("#description").attr("disabled", false);
  $("#add-project").attr("disabled", false);
  $("#project").val("");
  $("#dueDate").val("");
  $("#description").val("");
  $(".to-do").fadeOut(1000);
}


$(document).ready(function() {
  var taskObject = {};

  $("#entryForm").submit(function(event) {
    event.preventDefault();
    var originalName = $("#project").val();
    var idName = originalName.replace(/[\s\W]/gi, "");
    var userDate = $("#dueDate").val();
    var userDescription = $("#description").val();
    taskObject = new Project(originalName, idName, userDate, userDescription);
    taskObject.addProject();
  });

  $("#taskForm").submit(function(event){
    event.preventDefault();
    taskObject.addTask();
  });

  $("button#finish").click(function() {
    taskObject.finish();
  });

});
