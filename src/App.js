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
      currentAmount: 0,
      totalAmount: 1000,
      compatible: true,
    };
    this.smartContractUrl =
      "http://use-util.cloud.milkomeda.com:4000/address/0x7ae28c580DccA503c7412CE94e844db6f75BE585/transactions";
  }

  render() {
    if (this.state.compatible)
      return (
        <div className={styles.bg}>
          <div className={styles.card} style={{ width: "50%", height: "50%" }}>
            <h1>Crowdfunding </h1>
            <h3 style={{ marginTop: -8 }}>Milkomeda</h3>
            <div className={styles.container}>
              <div style={{ width: "60%", flex: 3, marginLeft: "20px" }}>
                <h3>
                  {this.state.currentAmount.toLocaleString()} ADA raised of{" "}
                  {this.state.totalAmount.toLocaleString()} ADA
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
                  onChange={(event) =>
                    this.setState({ amount: event.target.value })
                  }
                  value={this.state.amount}
                  placeholder="Ada amount"
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
            <h5>
              <a
                href={this.smartContractUrl}
                rel="noopener noreferrer"
                target="_blank"
              >
                View smart contract
              </a>
            </h5>
          </div>
        </div>
      );
    else return <NotCompatible />;
  }
  async getAmount() {
    let current = await Contract.current();
    let total = await Contract.total();
    console.log(current);
    console.log(total);
    this.setState({
      ratio: (current / total) * 100,
      currentAmount: parseFloat(current),
      totalAmount: parseFloat(total),
    });
    console.log(this.state.ratio);
  }

  componentDidMount() {
    //check browser compatibility
    Contract.checkCompatible().then((res) => {
      if (res) {
        this.getAmount();
        setInterval(() => {
          this.getAmount();
        }, 2000);
      } else this.setState({ compatible: false });
    });
  }
}

const NotCompatible = () => {
  return (
    <div
      className={styles.bg}
      style={{
        flexDirection: "column",
        textAlign: "center",
      }}
    >
      <h1>Your browser is not Dapps compatible</h1>
      <a href="https://metamask.io">
        <div style={{ margin: "0 20px" }}>
          <img
            src="http://airdrop-review.com/wp-content/uploads/2018/05/metamask.png"
            width="100%"
          ></img>
        </div>
      </a>
    </div>
  );
};

export default App;
