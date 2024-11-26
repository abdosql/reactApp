import styled from 'styled-components';
export const StyledNumberInputWrapper = styled.div`
  display: flex;
  align-items: center;
 
  
  overflow: hidden;

  input {
    text-align: right;
    width: 80px; /* Adjust input width */
    border: 1px solid rgb(199,199,199);
    border-radius:10%;
    outline: none;
    font-size: 1rem;
    padding: 0.5rem 15px;
    color:rgb(77,77,77);
    height:39px;
  }

  button {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 100%;
    border: 1px solid rgb(199,199,199);
    border-radius:10%;
    padding:9px;
    background-color: white;
    cursor: pointer;
    font-weight:bold;
    font-size:1rem;
    color:rgb(87,87,87);
    &:hover {
      background-color: #f5f5f5;
    }

    &:active {
      background-color: #e5e5e5;
    }

    svg {
      width: 16px;
      height: 16px;
    }
  }

  .minus-btn {
  margin-right:4px;   
  border-right: 1px solid #dcdcdc; /* Divider between button and input */
  }

  .plus-btn {
  margin-left:4px; 
  border-left: 1px solid #dcdcdc; /* Divider between button and input */
  }
`;