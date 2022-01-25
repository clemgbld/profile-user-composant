import { profileContainerEl } from "./main";

const renderLoader = () => {
  profileContainerEl.innerHTML = '<div class="loader"></div>';
};

export default renderLoader;
