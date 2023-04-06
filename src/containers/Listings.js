import { connect } from "react-redux";
import Listings from "../components/Listings";
import { addBusiness, removeBusiness } from "../redux/actions";

const mapStateToProps = (state) => {
  console.log("state:", state);
  return {
    businesses: state.businesses,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addBusiness: (business) => dispatch(addBusiness(business)),
    removeBusiness: (index) => dispatch(removeBusiness(index)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Listings);
