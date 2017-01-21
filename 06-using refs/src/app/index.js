var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');

var AptList = require('./AptList');
var AddAppointment = require('./AddAppointment');

var MainInterface = React.createClass({
    getInitialState: function() {
        return {
            aptBodyVisible: false,
            myAppointments: []
        }
    },

    componentDidMount: function() {
      this.serverRequest = $.get('./app/data.json', function(result) {
            var tempApts = result;
            this.setState({
                myAppointments: tempApts
            });
        }.bind(this));
    },

    componentWillUnmount: function() {
        this.serverRequest.abort();
    },

    deleteMessage: function(item) {
        var allApts = this.state.myAppointments;
        var newApts = _.without(allApts, item);
        this.setState({
            myAppointments: newApts
        });
    },

    toggleAddDisplay: function() {
        var tempVisibility = !this.state.aptBodyVisible;
        this.setState({
            aptBodyVisible: tempVisibility
        });
    },

    addItem: function(tempItem) {
        var tempApts = this.state.myAppointments;
        tempApts.push(tempItem);
        this.setState({
            myAppointments: tempApts
        });
    },

    render: function() {
        var filteredApts = this.state.myAppointments;
        
        filteredApts = filteredApts.map(function(item, index) {
            return (
                <AptList
                    key={index}
                    singleItem={item}
                    whichItem={item}
                    onDelete={this.deleteMessage} />
            )
        }.bind(this));

        return (
            <div className="interface">
                <AddAppointment
                    bodyVisible={this.state.aptBodyVisible}
                    handleToggle={this.toggleAddDisplay}
                    addApt = {this.addItem}
                />
                <ul className="item-list media-list">{filteredApts}</ul>
            </div>
        )
    }
});

ReactDOM.render(<MainInterface />, document.getElementById('petAppointments'));