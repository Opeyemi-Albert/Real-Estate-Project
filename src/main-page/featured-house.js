import House from "../house";
import PropTypes from 'prop-types';

const FeaturedHouse = ({ house }) => {
    if(house)
        return (
            <div>
                <div className="row featuredHouse">
                    <h3 className="col-md-12 text-center">Featured house</h3>
                </div>
                <House />
            </div>
        );
    return <div>No featured house at this time</div>; 
}

House.prototype = {
    house: PropTypes.object.isRequired,
}
 
export default FeaturedHouse;