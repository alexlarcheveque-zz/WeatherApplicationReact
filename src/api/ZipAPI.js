import axios from "axios";

export default axios.create({
  baseURL:
    "http://api.openweathermap.org/data/2.5/weather?zip=91765,us&appid=190acf3d31b8f906e273577c4112969a"
});
