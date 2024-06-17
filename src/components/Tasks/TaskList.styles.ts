import { css, styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
`

interface TaskContainerProps {
  prioridade: string
}

export const TaskContainer = styled.div<TaskContainerProps>`
  ${({ prioridade }) => css`
    background-color: ${prioridade === 'Alta' ? 'red' : prioridade === 'Média' ? 'orange' : 'green'};
    display: flex;
    border: 2px solid white;
    justify-content: space-between;
    padding: 8px;
    max-height: 90px;
  `}
`

export const TitleContainer = styled.div`
  h4 {
    margin-top: 0px;
  }

  p {
    margin-bottom: 0px;
  }
`

export const ButtonsContainer = styled.div`
  display: flex;
  width: 80px;
  justify-content: space-around;
  align-items: center;
  
`