import React from 'react';
import './MedicalRecordsPage.css';

const MedicalRecordsPage = () => {
    const prescriptions = [
        { date: '2025-02-15', doctor: 'Dr. Smith', medicine: 'Atorvastatin', dosage: '10mg', duration: '30 days' },
        { date: '2025-03-05', doctor: 'Dr. Lee', medicine: 'Metformin', dosage: '500mg', duration: '60 days' },
        { date: '2025-01-10', doctor: 'Dr. Allen', medicine: 'Lisinopril', dosage: '20mg', duration: '45 days' },
        { date: '2025-01-20', doctor: 'Dr. Clark', medicine: 'Amlodipine', dosage: '5mg', duration: '90 days' },
        { date: '2025-02-01', doctor: 'Dr. Baker', medicine: 'Levothyroxine', dosage: '75mcg', duration: '30 days' },
        { date: '2025-02-10', doctor: 'Dr. Singh', medicine: 'Omeprazole', dosage: '20mg', duration: '14 days' },
        { date: '2025-02-25', doctor: 'Dr. Hill', medicine: 'Ibuprofen', dosage: '400mg', duration: '10 days' },
        { date: '2025-03-01', doctor: 'Dr. White', medicine: 'Amoxicillin', dosage: '500mg', duration: '7 days' },
        { date: '2025-03-10', doctor: 'Dr. Green', medicine: 'Sertraline', dosage: '50mg', duration: '30 days' },
        { date: '2025-03-15', doctor: 'Dr. Evans', medicine: 'Vitamin D', dosage: '1000 IU', duration: '60 days' },
        { date: '2025-03-28', doctor: 'Dr. Lee', medicine: 'Metoprolol', dosage: '25mg', duration: '30 days' }
      ];
      
      const reports = [
        { date: '2025-01-10', type: 'Blood Test', summary: 'Slightly elevated cholesterol', file: 'blood_test_2025_01_10.pdf' },
        { date: '2025-03-20', type: 'X-Ray', summary: 'No abnormalities detected', file: 'xray_2025_03_20.pdf' },
        { date: '2025-01-25', type: 'ECG', summary: 'Normal rhythm', file: 'ecg_2025_01_25.pdf' },
        { date: '2025-02-05', type: 'MRI Scan', summary: 'No structural issues found', file: 'mri_2025_02_05.pdf' },
        { date: '2025-02-18', type: 'Urine Test', summary: 'Normal parameters', file: 'urine_2025_02_18.pdf' },
        { date: '2025-02-28', type: 'Blood Pressure Check', summary: 'Mild hypertension noted', file: 'bp_2025_02_28.pdf' },
        { date: '2025-03-02', type: 'CT Scan', summary: 'No masses or cysts', file: 'ctscan_2025_03_02.pdf' },
        { date: '2025-03-08', type: 'Thyroid Panel', summary: 'T3 and T4 within range', file: 'thyroid_2025_03_08.pdf' },
        { date: '2025-03-12', type: 'HbA1c', summary: 'Slightly elevated, prediabetic', file: 'hba1c_2025_03_12.pdf' },
        { date: '2025-03-25', type: 'Vision Test', summary: 'Slight myopia detected', file: 'vision_2025_03_25.pdf' }
      ];
      
      const bills = [
        { date: '2025-01-12', hospital: 'Greenwood Hospital', amount: '$150', service: 'Blood Test' },
        { date: '2025-03-22', hospital: 'Central Diagnostics', amount: '$200', service: 'X-Ray Scan' },
        { date: '2025-01-15', hospital: 'City Medical Center', amount: '$180', service: 'ECG' },
        { date: '2025-02-07', hospital: 'Greenwood Hospital', amount: '$400', service: 'MRI Scan' },
        { date: '2025-02-19', hospital: 'Central Diagnostics', amount: '$75', service: 'Urine Test' },
        { date: '2025-02-28', hospital: 'Wellness Clinic', amount: '$90', service: 'Blood Pressure Check' },
        { date: '2025-03-03', hospital: 'Sunrise Medical', amount: '$300', service: 'CT Scan' },
        { date: '2025-03-09', hospital: 'City Medical Center', amount: '$130', service: 'Thyroid Panel' },
        { date: '2025-03-13', hospital: 'Greenwood Hospital', amount: '$95', service: 'HbA1c Test' },
        { date: '2025-03-26', hospital: 'Vision Plus', amount: '$60', service: 'Eye Checkup' },
        { date: '2025-03-30', hospital: 'Sunrise Medical', amount: '$250', service: 'Follow-up Consultation' },
        { date: '2025-04-01', hospital: 'Central Diagnostics', amount: '$180', service: 'Ultrasound' }
      ];
      

  return (
    <div className="medical-records-page">
      <h1>Medical Records</h1>

      <section className="records-section">
        <h2>Doctor Prescriptions</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Doctor</th>
              <th>Medicine</th>
              <th>Dosage</th>
              <th>Duration</th>
            </tr>
          </thead>
          <tbody>
            {prescriptions.map((presc, index) => (
              <tr key={index}>
                <td>{presc.date}</td>
                <td>{presc.doctor}</td>
                <td>{presc.medicine}</td>
                <td>{presc.dosage}</td>
                <td>{presc.duration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="records-section">
        <h2>Lab Reports</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Summary</th>
              <th>File</th>
            </tr>
          </thead>
          <tbody>
            {reports.map((report, index) => (
              <tr key={index}>
                <td>{report.date}</td>
                <td>{report.type}</td>
                <td>{report.summary}</td>
                <td><a href="#">{report.file}</a></td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>

      <section className="records-section">
        <h2>Hospital Bills</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Hospital</th>
              <th>Service</th>
              <th>Amount</th>
            </tr>
          </thead>
          <tbody>
            {bills.map((bill, index) => (
              <tr key={index}>
                <td>{bill.date}</td>
                <td>{bill.hospital}</td>
                <td>{bill.service}</td>
                <td>{bill.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
};

export default MedicalRecordsPage;
