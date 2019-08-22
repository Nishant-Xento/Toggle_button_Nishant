import React from "react";
import { StyledYesNo, StyledYesNoSpan, StyledSquare } from "./atoms";

class SwitchButton extends React.Component {
  constructor() {
    super();
    this.state = {
      toggleValue: false
    };
  }

  handleSwitch = () => {
    this.setState(prevState => ({
      toggleValue: !prevState.toggleValue
    }));
  };

  render() {
    const { toggleValue } = this.state;
    return (
      <React.Fragment>
        <StyledYesNo
          bgColor={toggleValue ? "#389f01" : "#b3b3b3"}
          onClick={this.handleSwitch}
        >
          <StyledSquare left={toggleValue ? "35px" : "2px"} />
          <StyledYesNoSpan textAlign={toggleValue ? "left" : "right"}>
            {toggleValue ? "Yes" : "No"}
          </StyledYesNoSpan>
          <input type="hidden" name="inputSwitch" value={toggleValue} />
        </StyledYesNo>
      </React.Fragment>
    );
  }
}

export default SwitchButton;
