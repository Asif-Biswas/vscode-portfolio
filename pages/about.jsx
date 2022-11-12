import { Chart, registerables } from 'chart.js';
import { useEffect, useState } from 'react';
import styles from '../styles/About.module.css';

const AboutPage = () => {
  const [chart, setChart] = useState(null);
  const data = {
    labels: [
      'Machine Learning',
      'Frontend',
      'Backend',
      'Database',
      'Web scraping',
      'E2e testing',
      'Running'
    ],
    datasets: [{
      label: 'Skills',
      data: [25, 80, 75, 50, 70, 40, 40],
      fill: true,
      backgroundColor: 'rgba(255, 99, 132, 0.2)',
      borderColor: 'rgb(255, 99, 132)',
      pointBackgroundColor: 'rgb(255, 99, 132)',
      pointBorderColor: '#fff',
      pointHoverBackgroundColor: '#fff',
      pointHoverBorderColor: 'rgb(255, 99, 132)'
    }, {
      label: 'Interest',
      data: [95, 65, 80, 60, 85, 30, 100],
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
      <div className={styles.flexAroundLg} style={{alignItems:"center"}}>
        <div style={{padding: '24px 24px 24px 0' }}>
          Hello, my name is Asif Biswas. I am a <b>Software Developer</b> with a passion for building web applications. I have experience working with Python, Django, JavaScript, React, PostgreSQL and E2E automation testing using Cypress. I am currently working as a Software Developer at a startup named <a style={{color:"lightgreen"}} href="https://automationservicesbd.com/" target="_blank">Automation Services Ltd</a>.
          <br/>
          <br/>
          I am a self-taught developer and I have a passion for learning new technologies and I love to solve problems. I am always looking for new opportunities to learn and grow. I am currently learning <b>Next.js</b> and <b>Machine Learning</b>. I am highly interested in <b>Web scraping</b>, <b>Data Science</b> and <b>Artificial Intelligence</b>.
          

        </div>
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
