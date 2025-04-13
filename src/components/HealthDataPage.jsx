import React from 'react';
import './HealthDataPage.css'; // Make sure the path is correct
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const HealthDataPage = () => {
    const dummyData = {
            monthlyData: [
              // March
              { date: '2025-03-01', steps: 8000, heartRate: 72, calories: 220, sleep: 7.5, glucose: 90, spo2: 98 },
              { date: '2025-03-02', steps: 9500, heartRate: 74, calories: 250, sleep: 6.8, glucose: 92, spo2: 97 },
              { date: '2025-03-03', steps: 10200, heartRate: 70, calories: 260, sleep: 8.0, glucose: 88, spo2: 99 },
              { date: '2025-03-04', steps: 11000, heartRate: 76, calories: 280, sleep: 6.5, glucose: 95, spo2: 97 },
              { date: '2025-03-05', steps: 9800, heartRate: 73, calories: 240, sleep: 7.2, glucose: 91, spo2: 98 },
              { date: '2025-03-06', steps: 8700, heartRate: 71, calories: 230, sleep: 7.8, glucose: 89, spo2: 97 },
              { date: '2025-03-07', steps: 10500, heartRate: 75, calories: 270, sleep: 7.0, glucose: 93, spo2: 99 },
              { date: '2025-03-08', steps: 9200, heartRate: 73, calories: 245, sleep: 7.1, glucose: 90, spo2: 98 },
              { date: '2025-03-09', steps: 9700, heartRate: 72, calories: 255, sleep: 6.9, glucose: 92, spo2: 97 },
              { date: '2025-03-10', steps: 10800, heartRate: 74, calories: 275, sleep: 7.6, glucose: 89, spo2: 98 },
              { date: '2025-03-11', steps: 8800, heartRate: 70, calories: 240, sleep: 7.3, glucose: 87, spo2: 97 },
              { date: '2025-03-12', steps: 10100, heartRate: 75, calories: 265, sleep: 6.7, glucose: 94, spo2: 98 },
              { date: '2025-03-13', steps: 9600, heartRate: 71, calories: 250, sleep: 7.4, glucose: 90, spo2: 97 },
              { date: '2025-03-14', steps: 10000, heartRate: 72, calories: 260, sleep: 7.9, glucose: 88, spo2: 99 },
              { date: '2025-03-15', steps: 9300, heartRate: 73, calories: 240, sleep: 7.2, glucose: 91, spo2: 97 },
              { date: '2025-03-16', steps: 8900, heartRate: 70, calories: 230, sleep: 6.8, glucose: 93, spo2: 96 },
              { date: '2025-03-17', steps: 10600, heartRate: 76, calories: 280, sleep: 7.5, glucose: 95, spo2: 98 },
              { date: '2025-03-18', steps: 8700, heartRate: 72, calories: 220, sleep: 7.0, glucose: 90, spo2: 97 },
              { date: '2025-03-19', steps: 9400, heartRate: 71, calories: 245, sleep: 7.6, glucose: 91, spo2: 98 },
              { date: '2025-03-20', steps: 9800, heartRate: 74, calories: 250, sleep: 7.8, glucose: 89, spo2: 99 },
              { date: '2025-03-21', steps: 9900, heartRate: 70, calories: 255, sleep: 7.3, glucose: 92, spo2: 97 },
              { date: '2025-03-22', steps: 9600, heartRate: 73, calories: 240, sleep: 7.2, glucose: 93, spo2: 98 },
              { date: '2025-03-23', steps: 10300, heartRate: 75, calories: 270, sleep: 7.0, glucose: 94, spo2: 98 },
              { date: '2025-03-24', steps: 8700, heartRate: 71, calories: 230, sleep: 7.4, glucose: 91, spo2: 96 },
              { date: '2025-03-25', steps: 9500, heartRate: 72, calories: 260, sleep: 7.1, glucose: 90, spo2: 97 },
              { date: '2025-03-26', steps: 9100, heartRate: 74, calories: 250, sleep: 6.9, glucose: 92, spo2: 98 },
              { date: '2025-03-27', steps: 10400, heartRate: 76, calories: 280, sleep: 7.6, glucose: 95, spo2: 97 },
              { date: '2025-03-28', steps: 8800, heartRate: 70, calories: 240, sleep: 6.8, glucose: 89, spo2: 98 },
              { date: '2025-03-29', steps: 9900, heartRate: 73, calories: 260, sleep: 7.2, glucose: 90, spo2: 99 },
              { date: '2025-03-30', steps: 10200, heartRate: 75, calories: 270, sleep: 7.5, glucose: 94, spo2: 97 },
              
              // April
              { date: '2025-04-01', steps: 9700, heartRate: 72, calories: 250, sleep: 7.0, glucose: 92, spo2: 98 },
              { date: '2025-04-02', steps: 9400, heartRate: 71, calories: 240, sleep: 7.3, glucose: 90, spo2: 97 },
              { date: '2025-04-03', steps: 10500, heartRate: 74, calories: 265, sleep: 7.8, glucose: 89, spo2: 98 },
              { date: '2025-04-04', steps: 9200, heartRate: 70, calories: 230, sleep: 6.7, glucose: 91, spo2: 97 },
              { date: '2025-04-05', steps: 9600, heartRate: 73, calories: 250, sleep: 7.5, glucose: 94, spo2: 96 },
              { date: '2025-04-06', steps: 9900, heartRate: 75, calories: 270, sleep: 7.1, glucose: 92, spo2: 97 },
              { date: '2025-04-07', steps: 8800, heartRate: 71, calories: 240, sleep: 6.9, glucose: 90, spo2: 98 },
              { date: '2025-04-08', steps: 10700, heartRate: 76, calories: 285, sleep: 7.4, glucose: 95, spo2: 99 },
              { date: '2025-04-09', steps: 9100, heartRate: 70, calories: 235, sleep: 7.6, glucose: 89, spo2: 96 },
              { date: '2025-04-10', steps: 9400, heartRate: 72, calories: 250, sleep: 7.2, glucose: 93, spo2: 97 }
            ]
          };

  const labels = dummyData.monthlyData.map(item => item.date);
  const createChartData = (label, data, color) => ({
    labels,
    datasets: [{
      label,
      data,
      fill: false,
      borderColor: color,
      backgroundColor: `${color}33`,
      tension: 0.3
    }]
  });

  const steps = dummyData.monthlyData.map(item => item.steps);
  const heartRate = dummyData.monthlyData.map(item => item.heartRate);
  const calories = dummyData.monthlyData.map(item => item.calories);
  const sleep = dummyData.monthlyData.map(item => item.sleep);
  const glucose = dummyData.monthlyData.map(item => item.glucose);
  const spo2 = dummyData.monthlyData.map(item => item.spo2);

  return (
    <div className="health-data-page">
      <h1>Monthly Health Data Overview</h1>

      <div className="charts-grid">
        <MetricChart title="Steps" chartData={createChartData("Steps", steps, 'rgba(54, 162, 235, 1)')} />
        <MetricChart title="Heart Rate (BPM)" chartData={createChartData("Heart Rate", heartRate, 'rgba(75,192,192,1)')} />
        <MetricChart title="Calories Burned" chartData={createChartData("Calories", calories, 'rgba(255, 159, 64, 1)')} />
        <MetricChart title="Sleep Hours" chartData={createChartData("Sleep", sleep, 'rgba(153, 102, 255, 1)')} />
        <MetricChart title="Blood Glucose" chartData={createChartData("Glucose", glucose, 'rgba(255, 99, 132, 1)')} />
        <MetricChart title="Oxygen Levels (SpO₂)" chartData={createChartData("SpO2", spo2, 'rgba(0, 206, 86, 1)')} />
      </div>

      <div className="health-records-table">
        <h2>Daily Health Records</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Steps</th>
              <th>Heart Rate</th>
              <th>Calories</th>
              <th>Sleep (hrs)</th>
              <th>Glucose</th>
              <th>SpO₂</th>
            </tr>
          </thead>
          <tbody>
            {dummyData.monthlyData.map((item, index) => (
              <tr key={index}>
                <td>{item.date}</td>
                <td>{item.steps}</td>
                <td>{item.heartRate}</td>
                <td>{item.calories}</td>
                <td>{item.sleep}</td>
                <td>{item.glucose}</td>
                <td>{item.spo2}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

const MetricChart = ({ title, chartData }) => (
  <div className="metric-chart">
    <h2>{title}</h2>
    <Line data={chartData} />
  </div>
);

export default HealthDataPage;

