var React = require('react');
var ReactDOM = require('react-dom');
var _ = require('lodash');

var AptList = require('./AptList');

var MainInterface = React.createClass({
    getInitialState: function() {
        return {
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
                <ul className="item-list media-list">{filteredApts}</ul>
            </div>
        )
    }
});

ReactDOM.render(<MainInterface />, document.getElementById('petAppointments'));