import React from "react";
import { Link } from "react-router-dom";

const ModelCard = ({ resources, slug }) => (
  <div className="bg-yellow-100 h-32 rounded-md p-6 shadow-lg text-darkbrown">
    <Link to={"/" + slug}>
      <div className="mt-1 text-xl font-semibold uppercase leading-tight">
        {slug.toUpperCase()}
      </div>
    </Link>
    <p>
      Total {slug}: {resources.length}
    </p>
  </div>
);
export default ModelCard;
