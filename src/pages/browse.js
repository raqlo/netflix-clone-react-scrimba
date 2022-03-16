import React from "react";
import { BrowseContainer } from "../containers/browse";
import useContent from "../hooks/use-content";
import { selectionMap } from "../utils";
import { useAuthListener } from "../hooks";

export default function Browse() {
  const { series } = useContent("series");
  const { films } = useContent("films");
  const { user } = useAuthListener();
  const slides = selectionMap({ series, films });

  console.log(user);

  return <BrowseContainer slides={slides} user={user} />;
}
