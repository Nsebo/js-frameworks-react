import styled from "styled-components";

const StyledInput = styled.input `

  padding: 0.5rem;
  height: 48px;
  border: 1px solid ${(props) => props.theme.borderColour};
  border-radius: 8px;
  margin-bottom: 8px;
  border-color: ${(props) => props.bcolour};  
`

const Input = (props) => {
    console.log(props)
    return (
        <StyledInput
        placeholder={props.placeholder}
        bcolour={props.bcolour}
        />
    )
}

export default Input