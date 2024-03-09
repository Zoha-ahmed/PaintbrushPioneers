document.addEventListener("DOMContentLoaded", function () {
  // Fetch the JSON file
  fetch("activities.json")
    .then(response => response.json())
    .then(data => {
      // Call a function to display activities
      displayActivities(data.activities);

      // Show the footer
      const footer = document.querySelector('footer');
      footer.classList.add('show');
    })
    .catch(error => console.error('Error fetching activities:', error));
});


function displayActivities(activities) {
  // Get the main container where activities will be displayed
  const mainContainer = document.querySelector('main');

  // Create a row container to hold the columns
  let rowContainer;

  // Loop through activities and create HTML elements for each
  activities.forEach((activity, index) => {
    // Create a new row container for every four activities
    if (index % 4 === 0) {
      rowContainer = document.createElement('div');
      rowContainer.className = 'row';
    }

    const activityDiv = document.createElement('div');
    activityDiv.className = 'column';
    activityDiv.innerHTML = `
      <div class="content">
        <a href="${activity.link}">
          <img class="activity-thumbnail" src="${activity.image}" alt="${activity.title} Thumbnail" style="width:100%">
          <h3>${activity.title}</h3>
          <p>${activity.description}</p>
        </a>
      </div>
    `;

    // Append the activity div to the current row container
    rowContainer.appendChild(activityDiv);

    // separates activities with <hr> tag
    if ((index + 1) === 12) {
      const hrTag = document.createElement('hr');
      mainContainer.appendChild(rowContainer);
      mainContainer.appendChild(hrTag);

      // Add <h3> tag after the <hr> tag
      const h3Tag = document.createElement('h3');
      h3Tag.style.marginBottom = '0';
      h3Tag.id = 'online';
      h3Tag.innerText = 'Online Activities';
      mainContainer.appendChild(h3Tag);
    }

    // If we've reached four activities or it's the last activity, append the row container to the main container
    if ((index + 1) % 4 === 0 || (index + 1) === activities.length) {
      mainContainer.appendChild(rowContainer);
    }
  });
}







