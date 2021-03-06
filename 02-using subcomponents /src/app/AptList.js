var React = require('react');

var AptList = React.createClass({
    render: function() {
        return (
            <li className="pet-item media">
                <div className="pet-info media-body">
                    <div className="pet-head">
                        <span className="pet-name">{this.props.singleItem.petName}</span>
                        <span className="apt-date pull-right">{this.props.singleItem.aptDate}</span>
                    </div>
                    <div className="owner-name">
                        <span className="label-item">Owner: {this.props.singleItem.ownerName}</span>
                    </div>
                    <div className="apt-notes">{this.props.singleItem.aptNotes}</div>
                </div>
            </li>
        )
    }
});

module.exports = AptList;