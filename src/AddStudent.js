import React from "react";
import axios from "axios";
import "./styles.css";

const requestOptionsSimulate = {
  method: "POST",
  headers: { "Content-Type": "application/json" },
  body: {
    segment_file_name: "segment_B_2.csv",
    focus_field: "transactions",
    camp1: 0,
    camp2: 0,
    camp3: 0
  }
};

class AddStudent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  updateName = (e) => {
    this.setState({
      name: e.target.value
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);

    const obj = {
      name: ""
    };

    obj.name = this.state.name;

    const request = async () => {
      try {
        return await axios.post(
          "http://10.9.9.14:5000/simulate",
          requestOptionsSimulate.body
        );
      } catch (error) {
        console.log("Error occured", error);
      }
    };

    const response = async () => {
      const res = await request();

      if (res) {
        console.log(res);
      }
    };

    response();
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            {" "}
            <input
              type="text"
              placeholder="Enter student's name here"
              value={this.state.name}
              onChange={this.updateName}
            />
          </label>
          <input type="submit" id="button" value="Add" />
        </form>
      </div>
    );
  }
}

export default AddStudent;
