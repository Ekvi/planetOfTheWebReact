var React = require('react');
var ReactDOM = require('react-dom');

var AptList = require('./AptList');

var MainInterface = React.createClass({
    getInitialState: function() {
        return {
           /* title: 'Appointments',
            show: true*/
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

    render: function() {
        var filteredApts = this.state.myAppointments;
        
        filteredApts = filteredApts.map(function(item, index) {
            return (
                <AptList key={index} singleItem={item} />
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