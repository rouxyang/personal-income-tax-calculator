import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import CalYearTax from '../component/CalYearTax';
import { computeWithCb, switchTypeWithCb } from '../store/result';

const mapStateToProps = state => ({
  cityIdx: state.cityIdx
});

const mapDispatchToProps = {
  compute: computeWithCb,
  switchType: switchTypeWithCb
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(CalYearTax)
);
