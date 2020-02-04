import React from "react";
import ZipAPI from "../api/ZipAPI";
import "./SearchZip.css";

class SearchZip extends React.Component {
  state = { zipCode: "", errors: "" };

  handleSubmit = async event => {
    event.preventDefault();
    console.log(this.state.zipCode, this.state.errors);

    if (this.validateZip(this.state.zipCode)) {
      await ZipAPI.get("").then(res => {
        console.log(res.data);
        console.log("Main Temp:", res.data.main.temp);
        console.log("Feels Like:", res.data.main.feels_like);
        console.log("Weather:", res.data.weather[0].description);
        // console.log()
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
      <div>
        <form onSubmit={this.handleSubmit}>
          <label> Enter a zip code: </label>
          <input
            onChange={event => this.setState({ zipCode: event.target.value })}
            type="text"
            name="userZipCode"
            required
          />
          <input type="submit" />
        </form>

        <p className="error-message"> {this.state.errors} </p>
      </div>
    );
  }
}

export default SearchZip;
