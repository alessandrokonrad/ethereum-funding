import React from "react";
import styles from "./App.module.css";
import UniqeButton from "./components/Button/UniqeButton";
import UniqeInput from "./components/Input/UniqeInput";
import Contract from "./contract/contract";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      ratio: 0,
      amount: "",
      name: "",
      currentAmount: 0,
      totalAmount: 1
    };
  }

  render() {
    return (
      <div className={styles.bg}>
        <div className={styles.card} style={{ width: "50%", height: "50%" }}>
          <h1>Crowd funding</h1>
          <div className={styles.container}>
            <div style={{ width: "60%", flex: 3, marginLeft: "20px" }}>
              <h3>
                {this.state.currentAmount.toLocaleString("de-DE")} ETH raised of{" "}
                {this.state.totalAmount.toLocaleString("de-DE")} ETH
              </h3>
              <div className={styles.back}>
                <div
                  className={styles.front}
                  style={{ width: `${this.state.ratio}%` }}
                ></div>
              </div>
            </div>
            <div style={{ flex: 1 }}></div>
            <div style={{ marginTop: "40px", flex: 2 }}>
              <UniqeInput
                onChange={event =>
                  this.setState({ amount: event.target.value })
                }
                value={this.state.amount}
                placeholder="Amount"
                height="30px"
                width="150px"
              />
              <div style={{ marginTop: "15px" }}></div>
              <UniqeInput
                onChange={event => this.setState({ name: event.target.value })}
                value={this.state.name}
                placeholder="Name (optional)"
                height="30px"
                width="150px"
              />
              <div style={{ marginTop: "20px" }}></div>
              <UniqeButton
                onClick={() => {
                  if (
                    !isNaN(Number(this.state.amount)) &&
                    this.state.amount !== ""
                  ) {
                    Contract.fund(this.state.amount);
                  }
                }}
              >
                Fund
              </UniqeButton>
            </div>
          </div>
        </div>
      </div>
    );
  }
  async getAmount() {
    let current = await Contract.current();
    let total = await Contract.total();
    console.log(current);
    console.log(total);
    this.setState({
      ratio: (current / total) * 100,
      currentAmount: current,
      totalAmount: total
    });
    console.log(this.state.ratio);
  }

  componentDidMount() {
    /* Check if browser is Dapps compatible */
    Contract.checkMetaMask();
    this.getAmount();
  }
}

export default App;
