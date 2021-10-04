class GroceryListItemItem extends React.Component {
  constructor(props) {
    super(props);

    // this.state = {
    //   done: false
    // };
  }

  // onListItemClick() {
  //   this.setState({
  //     done: !this.state.done
  //   });
  // }

  render() {
    // var style = {
    //   textDecoration: this.state.done ? 'line-through' : 'none'
    // };

    return (
      //<li style={style} onClick={this.onListItemClick.bind(this)}>{this.props.groceryItems}</li>
      <li>{this.props.groceryItems}</li>
    )
  }
}

var GroceryListItem = (props) => (

  // var onListItemClick = (event) => {
  //   console.log('I got clicked');
  // };

  //return (
    <ul>
      {props.groceryItems.map(groceryItems =>
      <GroceryListItemItem groceryItems={groceryItems} />
      )}
    </ul>
 // );
)

var GroceryList = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryListItem groceryItems={['Milk', 'Eggs']}/>
  </div>
)

ReactDOM.render(<GroceryList />, document.getElementById("app"));