import React, { Component } from 'react';
 class InformationArea extends Component {
    constructor(props) {
    super(props);
    this.handleOpenEverything = this.handleOpenEverything.bind(this);
    this.state = {
      flag: false
    }

   }

  handleOpenEverything() {
    this.setState({
      flag: !this.state.flag
    })
  }

  render() {
    const { phone, mail, name, account } = this.props.props;
    return (
      <div>
        <p>Phone: <a href={`tel:${phone}`}>{phone}</a></p>
        <p>Mail: <a href={`mailTo:${mail}`}>{mail}</a></p>
        <button onClick={this.handleOpenEverything}>
          さらに詳しい情報を見てみる
        </button>
        <div style={{display: this.state.flag ? "block":"none"}}>
          <p>所属:<a href={name}>{name}</a></p>
          <p>SNSアカウント：<a href={account}>{account}</a></p>
        </div>
      </div>
    );
  }
}

export default InformationArea;