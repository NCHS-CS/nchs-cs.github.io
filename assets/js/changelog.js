document.addEventListener("DOMContentLoaded", function() {
  const commitPrefix = "PUB:"; // Adjust this prefix to match your tagging format
  fetch("https://api.github.com/repos/NCHS-CS/nchs-cs.github.io/commits")
    .then(response => response.json())
    .then(data => {
      let changelog = document.getElementById("changelog");
      let filteredCommits = data.filter(commit => commit.commit.message.startsWith(commitPrefix));
      
      if (filteredCommits.length === 0) {
        changelog.innerHTML = "<li>No relevant commits found.</li>";
        return;
      }
      
      filteredCommits.forEach(commit => {
        let entry = document.createElement("li");
        entry.innerHTML = `
          <strong>${commit.commit.author.date}</strong>:<nbsp>
          ${commit.commit.message.replace(commitPrefix, "").trim()} - <a href="${commit.html_url}" target="_blank">View Commit</a>
        `;
        changelog.appendChild(entry);
      });
    })
    .catch(error => {
      console.error("Error fetching commit data:", error);
      document.getElementById("changelog").innerHTML = "<li>Error loading changelog.</li>";
    });
});
