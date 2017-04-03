class Card extends React.Component {
  constructor(props){
    super(props);
    this.state = {};
  }
  render(){
    return (
      <div style={{margin: 10}}>
        <img width='100' src={this.props.avatar_url} />
        <div>
          <div style={{fontSize: '1.25em', fontWeight: 'bold'}}>
            {this.props.name}
          </div>
          <div>{this.props.company}</div>
        </div>
      </div>
    )
  }
}

const CardList = (props) => {
  return (
    <div>
      {props.cards.map(card => <Card key={card.id} {...card}/> ) }
    </div>
  )
};

class Form extends React.Component {
  state = {userName: ''};

  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state.userName);
    axios.get('https://api.github.com/users/' + this.state.userName)
      .then(resp => {this.props.onSubmit(resp.data)})
    this.setState({userName: ''})
  };
  
  handleChange = (event) => {
    this.setState({userName: event.target.value})
  };

  render(){
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          value={this.state.userName}
          onChange={this.handleChange}
          placeholder="Github username"/>
        <input type='submit' value="Add card"/>
      </form>
    )
  }
}

class App extends React.Component {
  state = {
    data : []
  };
  addNewCard = (cardInfo) => {
    this.setState(prevState => ({data: prevState.data.concat(cardInfo)}))
  };
  render(){
    return(
      <div>
        <CardList cards={this.state.data} />
        <Form onSubmit={this.addNewCard}/>
      </div>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
