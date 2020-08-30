import React, { useState } from "react";
import "./Search.css";

import "react-date-range/dist/styles.css"; //Main style file from the npm date range
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import PeopleIcon from "@material-ui/icons/People";
import { Button } from "@material-ui/core";

function Search() {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  }; //This is a must have if you're going to use react-date-range

  function handleSelect(ranges) {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  }

  //Date range picker is a component install by npm

  return (
    <div>
      <div className="search">
        <DateRangePicker ranges={[selectionRange]} onChange={handleSelect} />
        <h2>
          Number of guests <PeopleIcon />
        </h2>
        <input min={0} defaultValue={2} type="number" />
        <Button>Search Airbnb</Button>
      </div>
    </div>
  );
}

export default Search;
