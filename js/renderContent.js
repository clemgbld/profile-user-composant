import { profileContainerEl } from "./main";

const renderContent = (data) => {
  profileContainerEl.innerHTML = `<div class="profile-picture"><img src="${data.picture}" alt="user profil picture"/></div>
    <h2>${data.firstName} ${data.lastName}</h2>
    <p class="biographie">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Officia,
        adipisci. Atque vitae consectetur nam, quam minus esse aliquid at
        labore voluptates sed, inventore optio. Esse possimus debitis veniam
        eveniet necessitatibus. Lorem ipsum dolor sit, amet consectetur adipisicing elit.labore voluptates sed, inventore optio. Esse possimus debitis veniam.
      </p>
    <ul>
    
      <li class="username"><ion-icon class="icon" name="person-circle-outline"></ion-icon> ${data.username}</li>
      <li class="age"><ion-icon class="icon" name="accessibility-outline"></ion-icon> ${data.age} years old</li>
      
      <li class="phone"><ion-icon class="icon" name="call-outline"></ion-icon> ${data.phone}</li>
      <li><ion-icon class="icon" name="finger-print-outline"></ion-icon> ${data.gender}</li>
      <li class="email"><ion-icon class="icon" name="mail-outline"></ion-icon> ${data.email}</li>
      <li class="location"><ion-icon class="icon" name="location-outline"></ion-icon> ${data.city}, ${data.state}, ${data.country}</li>
      
    </ul>`;
};

export default renderContent;
