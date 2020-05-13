import React from "react";
import DATA from "../../Data/data";

import { CardList } from "../CardComponent/CardList";

class Table extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "all",
    };
  }

  render() {
    return (
      <div className="table">
        {DATA.map((item) => (
          <div>
            <CardList obj={item} search={this.props.search} />
          </div>
        ))}
      </div>
    );
  }
}

export default Table;
