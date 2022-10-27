import { Chart, registerables } from 'chart.js';
import { useEffect, useState } from 'react';
import styles from '../styles/About.module.css';

const AboutPage = () => {
  const [chart, setChart] = useState(null);
  const data = {
    labels: [
      'Eating',
      'Drinking',
      'Sleeping',
      'Designing',
      'Coding',
      'Cycling',
      'Running'
    ],
    datasets: [{
      label: 'Skills',
      data: [65, 59, 90, 81, 56, 55, 40],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
      label: 'Interest',
      data: [28, 48, 40, 19, 96, 27, 100],
      fill: true,
      backgroundColor: 'rgba(54, 162, 235, 0.2)',
      borderColor: 'rgb(54, 162, 235)',
      pointBackgroundColor: 'rgb(54, 162, 235)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(54, 162, 235)'
    }]
  };

  const config = {
    type: 'radar',
    data: data,
      options: {
        legend: {
          labels: {
              fontColor: "white",
              fontSize: 18
          }
      },
      elements: {
        line: {
          borderWidth: 3
        }
      }
    },
  };

  useEffect(() => {
    Chart.register(...registerables);
    const ctx = document.getElementById('myChart').getContext('2d');
    const myChart = new Chart(ctx, config);
    setChart(myChart);
  }, []);

  return (
    <>
      <h3>A Little Bit About Me</h3>
      {/* chart */}
      <div className={styles.flexAroundLg}>
        <div style={{padding: '24px 24px 24px 0' }}>Hello, my name is Asif Biswas.</div>
        <div style={{maxWidth: '500px', margin: 'auto'}}>
          <canvas id="myChart" width="400" height="400"></canvas>
        </div>
      </div>
    </>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
