import React from "react";
import ZipAPI from "../api/ZipAPI";
import Weather from "../routes/Weather";
import "./SearchZip.css";

class SearchZip extends React.Component {
  state = {
    zipCode: "",
    errors: "",
    mainTemp: "",
    feelsLike: "",
    weather: "",
    city: "",
    showResults: false
  };

  handleSubmit = async event => {
    event.preventDefault();
    console.log(this.state.zipCode, this.state.errors);

    if (this.validateZip(this.state.zipCode)) {
      const APIKey = "190acf3d31b8f906e273577c4112969a";

      await ZipAPI.get("/weather", {
        params: {
          zip: this.state.zipCode,
          appid: APIKey
        }
      }).then(res => {
        this.setState({ mainTemp: res.data.main.temp });
        this.setState({ feelsLike: res.data.main.feels_like });
        this.setState({ weather: res.data.weather[0].description });
        this.setState({ city: res.data.name });
        this.setState({ showResults: true });
      });
    } else {
      this.setState({ errors: "Please enter a 5-digit valid zip code." });
    }
  };

  validateZip = zipCode => {
    let regex = new RegExp("^[0-9]+$");

    if (regex.exec(zipCode) && zipCode.length === 5) {
      return true;
    } else {
      return false;
    }
  };

  render() {
    return (
      <div className="center">
        <form onSubmit={this.handleSubmit}>
          <input
            className="form-control"
            placeholder="Enter Zip Code"
            onChange={event => this.setState({ zipCode: event.target.value })}
            type="text"
            name="userZipCode"
            aria-describedby="basic-addon1"
            required
          />
        </form>
        <p className="error-message"> {this.state.errors} </p>
        <span id="weather">
          {this.state.showResults ? (
            <Weather
              mainTemp={this.state.mainTemp}
              feelsLike={this.state.feelsLike}
              weather={this.state.weather}
              city={this.state.city}
            />
          ) : null}
        </span>
      </div>
    );
  }
}

export default SearchZip;
