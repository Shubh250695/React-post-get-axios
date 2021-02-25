import React from "react";
import axios from "axios";
import "./styles.css";
import AddStudent from "./AddStudent";

class App extends React.Component {
  state = {
    responseData: []
  };

  componentDidMount() {
    const getResponse = async () => {
      try {
        return await axios.get("https://jsonplaceholder.typicode.com/users");
      } catch (error) {
        console.log(error);
      }
    };

    const getData = async () => {
      const res = await getResponse();

      if (res) {
        this.setState({
          responseData: res.data
        });
      }
    };

    getData();
  }

  render() {
    const { responseData } = this.state;
    const responseDataList = responseData.length ? (
      responseData.map((user) => {
        return (
          <div key={user.id}>
            <p id="list">{user.name}</p>
          </div>
        );
      })
    ) : (
      <div>No User Data Recieved Yet</div>
    );
    return (
      <div className="App">
        <h1>Digikull</h1>
        <h3>Students' Data</h3>
        <AddStudent />
        {responseDataList}
      </div>
    );
  }
}

export default App;
