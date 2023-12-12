import React from "react";

import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import {
  collection,
  query,
  orderBy,
  onSnapshot,
  where,
} from "firebase/firestore";

const useFetchDocument = () => {
  return <div>useFetchDocument</div>;
};

export default useFetchDocument;
