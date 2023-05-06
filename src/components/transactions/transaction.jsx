import { TableStyle, THeadStyle} from './transaction.styled';
import css from './transactions.module.css';
import PropTypes from 'prop-types';

export const TransactionHistory = ({ items }) => {
  return (
    <TableStyle>
      <THeadStyle>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </THeadStyle>
      {items.map(({ id, type, amount, currency }) => (
        <tbody key={id} className={css.trstyle}>
        {/* // <tbody key={id}> */}
          {/* <TrStyle> */}
            <td>{type}</td>
            <td>{amount}</td>
            <td>{currency}</td>
          {/* </TrStyle> */}
        </tbody>
      ))}
    </TableStyle>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
