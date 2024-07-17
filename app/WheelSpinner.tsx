import React, { Component, CSSProperties } from "react";
import "./WheelSpinner.module.css";

interface WheelProps {
  items: string[];
  onSelectItem?: (selectedItem: number) => void;
}

interface WheelState {
  selectedItem: number | null;
}

class Wheel extends Component<WheelProps, WheelState> {
  static defaultProps = {
    items: [],
  };

  constructor(props: WheelProps) {
    super(props);
    this.state = {
      selectedItem: null,
    };
    this.selectItem = this.selectItem.bind(this);
  }

  selectItem() {
    const { items } = this.props;
    if (items.length === 0) return; // Prevent spinning if there are no items
    if (this.state.selectedItem === null) {
      const selectedItem = Math.floor(Math.random() * items.length);
      if (this.props.onSelectItem) {
        this.props.onSelectItem(selectedItem);
      }
      this.setState({ selectedItem });
    } else {
      this.setState({ selectedItem: null });
      setTimeout(this.selectItem, 500);
    }
  }

  render() {
    const { selectedItem } = this.state;
    const { items } = this.props;

    const wheelVars: CSSProperties = {
      "--nb-item": items.length,
      "--selected-item": selectedItem,
    } as CSSProperties;
    const spinning = selectedItem !== null ? "spinning" : "";

    return (
      <div className="wheel-container">
        <div
          className={`wheel ${spinning}`}
          style={wheelVars}
          onClick={this.selectItem}
        >
          {items.map((item, index) => (
            <div
              className="wheel-item"
              key={index}
              style={{ "--item-nb": index } as CSSProperties}
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Wheel;
