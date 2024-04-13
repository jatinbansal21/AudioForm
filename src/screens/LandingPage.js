import React, { useState } from 'react';
import AudioPlayer from './AudioPlayer';
import {
  FormContainer,
  FormTitle,
  FormField,
  FormLabel,
  FormInput,
  SubmitButton,
  TableContainer,
  Table,
  TableHeader,
  TableData,
} from './styles';

const LandingPage = () => {
    const [formData, setFormData] = useState({
        doctorName: '',
        patientName: '',
        patientAge: '',
        recordingDate: '',
        audioFile: null,
      });
      const [submittedData, setSubmittedData] = useState([]);
      const [errorMessage, setErrorMessage] = useState(''); // State for error message
    
      const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value });
        setErrorMessage(''); // Clear error message on input change
      };
    
      const handleFileChange = (event) => {
        setFormData({ ...formData, audioFile: event.target.files[0] });
        setErrorMessage(''); // Clear error message on input change
      };
    
      const handleSubmit = (event) => {
        event.preventDefault();
        const { doctorName, patientName, patientAge, recordingDate, audioFile } = formData;
    
        if (doctorName && patientName && patientAge && recordingDate && audioFile) {
          setSubmittedData([...submittedData, formData]);
          setFormData({
            doctorName: '',
            patientName: '',
            patientAge: '',
            recordingDate: '',
            audioFile: null,
          });
          setErrorMessage(''); // Clear error message on successful submission
        } else {
          setErrorMessage('Please fill out all fields!');
        }
      };
    
      return (
        <FormContainer>
          <FormTitle>Audio Upload Form</FormTitle>
          <form onSubmit={handleSubmit}>
            <FormField>
              <FormLabel htmlFor="doctorName">Doctor's Name:</FormLabel>
              <FormInput type="text" name="doctorName" id="doctorName" value={formData.doctorName} onChange={handleChange} required />
            </FormField>
    
            <FormField>
              <FormLabel htmlFor="patientName">Patient's Name:</FormLabel>
              <FormInput type="text" name="patientName" id="patientName" value={formData.patientName} onChange={handleChange} required />
            </FormField>
    
            <FormField>
              <FormLabel htmlFor="patientAge">Patient's Age:</FormLabel>
              <FormInput type="number" name="patientAge" id="patientAge" value={formData.patientAge} onChange={handleChange} required />
            </FormField>
    
            <FormField>
              <FormLabel htmlFor="recordingDate">Date of Recording:</FormLabel>
              <FormInput type="date" name="recordingDate" id="recordingDate" value={formData.recordingDate} onChange={handleChange} required />
            </FormField>
    
            <FormField>
              <FormLabel htmlFor="audioFile">Upload Audio File:</FormLabel>
              <FormInput type="file" name="audioFile" id="audioFile" accept="audio/*" onChange={handleFileChange} required />
            </FormField>
    
            {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>} {/* Display error message if present */}
    
            <SubmitButton type="submit">Submit</SubmitButton>
          </form>
    
          {submittedData.length > 0 && (
            <TableContainer>
              <h2>Submitted Recordings</h2>
              <Table>
                <thead>
                  <tr>
                    <TableHeader>Doctor's Name</TableHeader>
                    <TableHeader>Patient's Name</TableHeader>
                    <TableHeader>Patient's Age</TableHeader>
                    <TableHeader>Recording Date</TableHeader>
                    <TableHeader>Audio</TableHeader>
                  </tr>
                </thead>
                <tbody>
                  {submittedData.map((data, index) => (
                    <tr key={index}>
                      <TableData>{data.doctorName}</TableData>
                      <TableData>{data.patientName}</TableData>
                      <TableData>{data.patientAge}</TableData>
                      <TableData>{data.recordingDate}</TableData>
                      <TableData>
                        <AudioPlayer audioUrl={URL.createObjectURL(data.audioFile)} />
                      </TableData>
                    </tr>
                  ))}
                </tbody>
              </Table>
            </TableContainer>
          )};
          
        </FormContainer>
      );
}

export default LandingPage
