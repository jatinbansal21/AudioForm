import styled from 'styled-components';

export const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  border-radius: 5px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  margin: 2rem auto;
  max-width: 500px;
`;

export const FormTitle = styled.h2`
  text-align: center;
  margin-bottom: 1rem;
`;

export const FormField = styled.div`
  display: flex;
  margin-bottom: 1rem;
  align-items: center;
`;

export const FormLabel = styled.label`
  width: 120px;
  margin-right: 1rem;
`;

export const FormInput = styled.input`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  &:focus {
    outline: none;
    border: 1px solid #999;
  }
`;

export const SubmitButton = styled.button`
  background-color: #4CAF50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
  margin-top: 1rem;
`;

export const TableContainer = styled.div`
  margin-top: 2rem;
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  border: 1px solid #ddd;
`;

export const TableHeader = styled.th`
  padding: 1rem;
  text-align: left;
  background-color: #f2f2f2;
  border: 1px solid #ddd;
`;

export const TableData = styled.td`
  padding: 1rem;
  border: 1px solid #ddd;
`;
