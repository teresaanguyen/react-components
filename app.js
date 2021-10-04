var GroceryListItem = (props) => {

  var onListItemClick = (event) => {
    console.log('I got clicked');
  };

  return (
    <ul>
      <li onClick={onListItemClick}>{props.groceryItems[0]}</li>
      <li>{props.groceryItems[1]}</li>
    </ul>
  );
}

var GroceryList = () => (
  <div>
    <h2>Grocery List</h2>
    <GroceryListItem groceryItems={['Milk', 'Eggs']}/>
  </div>
)



ReactDOM.render(<GroceryList />, document.getElementById("app"));