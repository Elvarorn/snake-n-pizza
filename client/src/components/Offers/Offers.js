import React from 'react';
import { connect } from 'react-redux';
import { getAllOffers } from '../../actions/offerActions';


class Offers extends React.Component {
    componentDidMount() {
        const { getAllOffers } = this.props;
        getAllOffers();
    }
    render() {
        const { offer} = this.props;
        return (
            <div className="offer-container">
                <p className="offertitle"> Offers </p>
                {offer.map((m, i) => ( <div className="offersbox" key={i}>{m.offer +' Price: ' +m.price + ' Valid for: ' + m.validFor}</div> ))}

            </div>
        )
    }
};

const mapStateToProps = ({ offer }) => {
    return { offer }
}

export default connect(mapStateToProps, { getAllOffers })(Offers);
