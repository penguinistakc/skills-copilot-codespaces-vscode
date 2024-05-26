function skillsMember() {
  // Get the member's skills
  var member = new Member();
  var skills = member.skills;
  // Display the skills
  skills.forEach(skill => {
    console.log(skill);
  });
}