import React from "react";
import "./App.css";

class HealthCheck extends React.Component {
  state = { server: "INIT" };

  componentDidMount() {
    this.checkServerHealth();
    setInterval(() => this.checkServerHealth(), 10000);
  }

  checkServerHealth = async () => {
    fetch("http://localhost:8080/api/health")
      .then(res => res.json())
      .then(
        result => {
          this.setState({ server: "UP" });
        },
        error => {
          this.setState({
            server: "DOWN"
          });
        }
      );
  };

  render() {
    return (
      <div className="main">
        <div className="ui card">
          <div className="content">
            <h3>Server Status</h3>
          </div>
          <div className={this.state.color}>
            Server is {this.state.server}
            <br />
          </div>
        </div>
      </div>
    );
  }
}
export default HealthCheck;
