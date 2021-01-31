import React from 'react'; 
import './App.css';
import Plot from 'react-plotly.js';

class GMEPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gmeXVal: [],
            gmeYVal: [],
            gmeYVolumeVal: []
        }
    } 

    componentDidMount() {
        this.fetchGMEData();
    }

    fetchGMEData() {
        const pointerToValData= this;
        console.log(pointerToValData); 
        let apiCallINTRA = 'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=GME&interval=1min&outputsize=compact&apikey=WP6G67LDTDIKOKJJ';
        let gmeXValFunction = []; 
        let gmeYValFunction = [];
        let gmeYVolumeValFunction = [];  

        fetch(apiCallINTRA)
            .then(
                function(response) {
                    return response.json();
                }
            )
            .then(
                function(data) {
                    console.log(data); 

                    for (var key in data['Time Series (1min)']) {
                        gmeXValFunction.push(key);
                        gmeYValFunction.push(data['Time Series (1min)'][key]['1. open']);
                        gmeYVolumeValFunction.push(data['Time Series (1min)'][key]['5. volume']);
                    }

                    pointerToValData.setState({
                        gmeXVal: gmeXValFunction,
                        gmeYVal: gmeYValFunction,
                        gmeYVolumeVal: gmeYVolumeValFunction
                    });
                }
            )
    }

    fetch() {

    }

    render() {
        return(
            <div>
                <Plot className = 'graph1'
                    data={[
                        {
                            x: this.state.gmeXVal,
                            y: this.state.gmeYVal,
                            type: 'scatter',
                            mode: 'lines+markers',
                            marker: {color: 'red'},
                        }
                        ]}
                        layout={ {width: 720, height: 440, title: 'GME Intraday Stock Price'} }
                    />
                <Plot className = 'graph2'
                    data = {[ 
                        {
                            type: 'bar', 
                            x: this.state.gmeXVal, 
                            y: this.state.gmeYVolumeVal,
                        }
                        ]} 
                        layout = {{width: 720, height: 440, title: 'GME Intraday Volume'}}/>    
            </div>
        )
           
    }
}
 
export default GMEPage;
