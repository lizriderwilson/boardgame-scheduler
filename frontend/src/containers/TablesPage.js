import React from "react";

import Tables from "../components/tables/Tables";

const TablesPage = () => {
  return (
    <div className="container mx-auto">
      <div className="mt-8">
        <h1 className="font-bold text-4xl text-darkbrown uppercase">Tables</h1>
        <p className="mt-2 w-2/3">
          Below you will find all the tables reserved for gaming. To schedule a
          play session, please click an empty timeslot to reserve a spot.
        </p>
      </div>
      <Tables />
    </div>
  );
};

export default TablesPage;
