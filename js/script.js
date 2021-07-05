const main = document.querySelector('main');

team.forEach((person, index) => {
  const innerHTML = `
          <img class="profile__photo" 
            src="./images/photo${index + 1}.png" alt="photo${index + 1}" />
          <h3 class="profile__name">${person.name}</h3>
          <h4 class="profile__job">${person.job}</h4>
      `;
  const div = document.createElement('div');
  div.classList.add('profile');
  div.classList.add(`profile${index + 1}`);
  div.innerHTML = innerHTML;
  main.appendChild(div);
});
