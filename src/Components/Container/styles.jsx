import styled from "styled-components";

export const MainContainer = styled.div`
  background-color: ${ ({ theme }) => theme.body };
  min-height: 90vh;
  padding: 0px 15vw;
`;

export const Content = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: ${ ({ theme }) => theme.text };

  @media (max-width: 800px) {
    flex-direction: column;
  }
}
`;