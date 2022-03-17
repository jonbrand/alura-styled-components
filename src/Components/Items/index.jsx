import React from "react";
import { ItemContainer } from "../Item";
import { Items } from "./styles";
import { ImageFilter } from "../ImageFilter";

export const ItemsContainer = (props) => {
  return(
    <Items>
      {ImageFilter(props.type)}
      <ItemContainer {...props} />
      <span>{props.date}</span>
    </Items>
  )
}