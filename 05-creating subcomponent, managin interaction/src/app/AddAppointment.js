var React = require('react');

var AddAppointment = React.createClass({
    toggleAptDisplay: function() {
        this.props.handleToggle();
    },

    render: function() {
        var displayAptBody = {
            display: this.props.bodyVisible ? 'block' : 'none'
        };

        return (
            <div className="panel panel-primary">
                <div className="panel-heading apt-addheading" onClick={this.toggleAptDisplay}>
                    <span className="glyphicon glyphicon-plus"></span> Add appointment
                </div>
                <div className="panel-body" style={displayAptBody}>
                    <form className="add-appointment form-horizontal">
                        <div className="form-group">
                            <label className="col-sm-2 control-label" htmlFor="petName">Pet Name</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="petName" ref="inputPetName" placeholder="Pet's name" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-2 control-label" htmlFor="petOwner">Pet Owner</label>
                            <div className="col-sm-10">
                                <input type="text" className="form-control" id="petOwner" ref="inputPetOwner" placeholder="Owner's name" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-2 control-label" htmlFor="aptDate">Date</label>
                            <div className="col-sm-4">
                                <input type="date" className="form-control" id="aptDate" ref="inputAptDate" />
                            </div>
                            <label className="col-sm-2 control-label" htmlFor="aptTime">Time</label>
                            <div className="col-sm-4">
                                <input type="time" className="form-control" id="aptTime" ref="inputAptTime" />
                            </div>
                        </div>
                        <div className="form-group">
                            <label className="col-sm-2 control-label" htmlFor="aptNotes">Apt. Notes</label>
                            <div className="col-sm-10">
                                <textarea className="form-control" rows="4" cols="50" id="aptNotes" ref="inputAptNotes" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-2-offset col-sm-10">
                                <button type="submit" className="btn btn-primary pull-right">Add appointment</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
});

module.exports = AddAppointment;
