import React,{ PropTypes } from 'react';
import TextInput from '../common/TextInput';
import ProductTable from './ProductTable';
import {connect} from 'react-redux';


class Product extends React.Component {

  constructor(props, context) {
    super(props, context);
    this.state = {
      errors: "",
      filterText: '',
      inStockOnly: false
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(event) {
    this.setState({
      filterText :event.target.value
    });
  }
  handleInStockChange(event){
    /*this.setState((prevState) => ({
      inStockOnly: !prevState.inStockOnly
    }));*/
    this.setState({
      inStockOnly: event.target.checked
    });
    /* both are correct in case of checkbox in first method we are updating with opposite to the previous state value */
  }

  render() {
    return (
      <div>
        <TextInput
          name="title"
          label="Title"
          value={this.state.filterText}
          onChange={this.handleFilterTextChange}
          error={this.state.errors}/>
        <input
          type="checkbox"
          value={this.state.inStockOnly}
          onChange={this.handleInStockChange}/> &nbsp;&nbsp;<span>Only show Product in Stock</span>
        <ProductTable products={this.props.products} filterText={this.state.filterText} inStockOnly={this.state.inStockOnly}/>
      </div>
    );
  }
}

Product.propTypes = {
  products : PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
  return {
    products: state.products
  };
}

export default connect(mapStateToProps)(Product);

