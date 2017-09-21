import React from 'react';
import Highcharts from 'highcharts';

import config from './Chart.config.js';
import Style from './Chart.style.scss';

class Chart extends React.Component {
  componentWillMount() {
    Style.use();
  }

  componentDidMount() {
    this.drow(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.chart.destroy();
    this.drow(nextProps);
  }

  shouldComponentUpdate() {
    return false;
  }

  componentWillUnmount() {
    this.chart.destroy();
    Style.unuse();
  }

  drow() {
    this.chart = Highcharts.chart(this.container, config);
  }

  render() {
    return (
      <div
        className="chart"
        ref={(ref) => { this.container = ref; }}
      />
    );
  }
}

export default Chart;
