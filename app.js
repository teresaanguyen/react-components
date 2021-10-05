class GroceryListItemItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      done: false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  onListItemMouseover() {
    this.setState({
      done: !this.state.done
    })
  }

  render() {
    var style = {
      textDecoration: this.state.done ? 'line-through' : 'none'
    };
    var bold = {
      fontWeight: this.state.done ?  'bold' : 'normal'
    };

    return (
      <div>
      <li style={bold} onMouseOver={this.onListItemMouseover.bind(this)} onMouseOut={this.onListItemMouseover.bind(this)}>{this.props.groceryItems}</li>
      {/* <li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.groceryItems}</li> */}
      </div>
    )
  }
}

var GroceryListItem = (props) => (
    <ul>
      {props.groceryItems.map(groceryItems =>
      <GroceryListItemItem groceryItems={groceryItems} />
      )}
    </ul>

)

var GroceryList = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryListItem groceryItems={['Milk', 'Eggs']}/>
  </div>
)

ReactDOM.render(<GroceryList />, document.getElementById("app"));