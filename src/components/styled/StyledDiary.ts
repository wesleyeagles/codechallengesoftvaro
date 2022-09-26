import styled from 'styled-components'

export const StyledDiary = styled.section`
   display: flex;
   margin-top: 60px;
   justify-content: space-between;
   padding-inline: 80px;

   @media screen and (max-width: 1280px) {
    padding-inline: 0px;
   }

   @media screen and (max-width: 768px) {
     overflow: auto;
     padding-bottom: 30px;

     &::-webkit-scrollbar {
        height: 3px;
     }

     &::-webkit-scrollbar-track {
        background: #60606020;
     }

     &::-webkit-scrollbar-thumb {
        background-color: #5e20a4;
        border-radius: 20px; 
        border: 3px solid #5e20a4; 
    }
   }
`