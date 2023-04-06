import { connect } from "react-redux";
import AddListing from "../components/addListing";
import { addBusiness } from "../redux/actions";

const mapDispatchToProps = (dispatch) => {
  return {
    addBusiness: (business) => dispatch(addBusiness(business)),
  };
};

export default connect(null, mapDispatchToProps)(AddListing);
