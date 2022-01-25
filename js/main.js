import axios from "axios";
import VanillaTilt from "vanilla-tilt";
import renderLoader from "./renderLoader";
import "regenerator-runtime/runtime";
import renderContent from "./renderContent";

("use-strict");

// general value

export const profileContainerEl = document.querySelector(".profile-container");

// initiate tilt effect

VanillaTilt.init(document.querySelector(".profile-picture"), {
  max: 25,
  speed: 400,
});

const loadUserData = async () => {
  try {
    renderLoader();

    const res = await axios({
      method: "get",
      url: "https://randomuser.me/api/",
      responseType: "json",
    });

    const { results } = res.data;

    const data = results[0];

    const dataValue = {
      picture: data.picture.large,
      firstName: data.name.first,
      lastName: data.name.last,
      username: data.login.username,
      age: data.dob.age,
      phone: data.phone,
      gender: data.gender,
      email: data.email,
      city: data.location.city,
      state: data.location.state,
      country: data.location.country,
    };

    renderContent(dataValue);
  } catch (err) {
    profileContainerEl.innerHTML = `<p>${err.message}</p>`;
  }
};

loadUserData();
