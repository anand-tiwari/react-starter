import React,{PropTypes} from 'react';
import ProductRow from './ProductRow';
import ProductCategoryRow from './ProductCategoryRow';

class ProductTable extends React.Component {

  render() {
    const rows = [];
    let lastCategory = null;

    this.props.products.forEach((product) => {
      if (product.name.toUpperCase().indexOf(this.props.filterText.toUpperCase()) === -1) {
        return;
      }
      if (this.props.inStockOnly && !product.stocked) {
        return;
      }
      if (product.category !== lastCategory) {
        rows.push(
          <ProductCategoryRow
            category={product.category}
            key={product.category} />
        );
      }
      rows.push(
        <ProductRow
          product={product}
          key={product.name}
        />
      );
      lastCategory = product.category;
    });

    return (
      <table>
        <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
        </thead>
        <tbody>{rows}</tbody>
      </table>
    );
  }
}

ProductTable.propTypes = {
  inStockOnly : PropTypes.bool.isRequired,
  filterText: PropTypes.string.isRequired,
  products: PropTypes.array
};

export default ProductTable;
