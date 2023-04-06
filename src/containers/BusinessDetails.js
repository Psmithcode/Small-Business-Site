import { connect } from "react-redux";
import BusinessDetails from "../components/BusinessDetails";

const mapStateToProps = (state) => {
  console.log("state:", state);
  return {
    businesses: state.businesses,
  };
};

export default connect(mapStateToProps)(BusinessDetails);
