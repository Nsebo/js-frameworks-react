import styled from "styled-components";

const PageHeading = styled.h2`
  color: ${function (props){
      return props.theme.secondaryColor
  }};

`

export default PageHeading;