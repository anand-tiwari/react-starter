import React,{PropTypes} from 'react';

class ProductTable extends React.Component {

  render() {
    return (
      <div>
        {this.props.inStockOnly && <div>checked</div>}
        {this.props.filterText} ProductTable Component
      </div>
    );
  }
}

ProductTable.propTypes = {
  inStockOnly : PropTypes.bool.isRequired,
  filterText: PropTypes.string.isRequired
};

export default ProductTable;
