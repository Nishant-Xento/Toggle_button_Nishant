import styled from "@emotion/styled";

export const StyledYesNo = styled("div")`
  height: 18px;
  width: 50px;
  border: 0 none;
  border-radius: 3px;
  position: relative;
  cursor: pointer;
  vertical-align: top;
  background-color: ${props => props.bgColor};
`;

export const StyledYesNoSpan = styled("span")`
  font-size: 15px;
  display: block;
  color: #fff;
  margin: 0 3px;
  text-align: ${props => props.textAlign};
`;

export const StyledSquare = styled("b")`
  height: 14px;
  width: 14px;
  position: absolute;
  border-radius: 3px;
  background: #f7f7f7;
  top: 2px;
  left: ${props => props.left};
  -webkit-transition: left 0.3s;
  transition: left 0.3s;
`;
