import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import './cartStyles.css';

function CartWidget({ number, handleSection }) {
  return (
    <div className="containerCart">
      <ShoppingCartIcon
        className="cartIcon"
        onClick={() => handleSection('Carrito')}
      />
      <span className="cartNumber">{number}</span>
    </div>
  );
}

export default CartWidget;
