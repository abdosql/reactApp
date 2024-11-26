import styled from "styled-components";

export const TabsContainer = styled.div`
  display: flex;
  border-bottom: 1px solid #ccc;
  gap:50px;
`;

export const TabButton = styled.button`
  
  padding: 10px 5px;
  text-align: center;
  background: none;
  border: none;
  font-size: 16px;
  color: ${({ active }) => (active ? "#6c63ff" : "#666")};
  border-bottom: ${({ active }) => (active ? "2px solid #6c63ff" : "none")};
  cursor: pointer;

  &:hover {
    color: #6c63ff;
  }
`;

export const ContentContainer = styled.div`
  padding: 1rem;
  background : rgb(253,253,253);
  margin : 30px 20px;
  border-radius:5px;
  border: 1px solid rgb(226,226,226) ;
`;

