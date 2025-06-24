let username = "DM2005";
let apiUrl = `https://api.github.com/users/${username}/repos`;

let outputDiv = document.getElementById("output");

fetch(apiUrl)
  .then(function(response) {
    return response.json();
  })
  .then(function(repos) {
    if (!Array.isArray(repos)) {
      outputDiv.innerHTML = "<p>Something went wrong!</p>";
      return;
    }

    let total = repos.length;

    let htmlRepos = repos.filter(function(repo) {
      return repo.language === "HTML";
    }).length;

    let jsRepos = repos.filter(function(repo) {
      return repo.language === "JavaScript";
    }).length;

    let pythonRepos = repos.filter(function(repo) {
      return repo.language === "Python";
    }).length;

    let djangoRepos = repos.filter(function(repo) {
      if (repo.name && repo.name.toLowerCase().includes("django")) {
        return true;
      }
      if (repo.description && repo.description.toLowerCase().includes("django")) {
        return true;
      }
      return false;
    }).length;

    // Filter repos created in 2024
    let createdIn2024 = repos.filter(function(repo) {
      let date = new Date(repo.created_at);
      return date.getFullYear() === 2024;
    }).length;

    // Filter repos created in 2025
    let createdIn2025 = repos.filter(function(repo) {
      let date = new Date(repo.created_at);
      return date.getFullYear() === 2025;
    }).length;

    let dates = repos.map(function(repo) {
      let dateObj = new Date(repo.created_at);
      return repo.name + " — Created on " + dateObj.toDateString();
    });

    let html = "";
    html += "<p><strong>Total Repositories:</strong> " + total + "</p>";
    html += "<p><strong>HTML Repositories:</strong> " + htmlRepos + "</p>";
    html += "<p><strong>JavaScript Repositories:</strong> " + jsRepos + "</p>";
    html += "<p><strong>Python Repositories:</strong> " + pythonRepos + "</p>";
    html += "<p><strong>Django Repositories:</strong> " + djangoRepos + "</p>";
    html += "<p><strong>Repos Created in 2024:</strong> " + createdIn2024 + "</p>";
    html += "<p><strong>Repos Created in 2025:</strong> " + createdIn2025 + "</p>";

    html += "<h3>Created Dates:</h3>";
    html += "<ul>";
    for (let i = 0; i < dates.length; i++) {
      html += "<li>" + dates[i] + "</li>";
    }
    html += "</ul>";

    outputDiv.innerHTML = html;
  })
  .catch(function(error) {
    outputDiv.innerHTML = "<p>Could not fetch data.</p>";
    console.log(error);
  });
