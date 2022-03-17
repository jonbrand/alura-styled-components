import React from "react";

import { Box, Button } from "../../UI";
import { listStatement } from "../../info";
import { ItemsContainer } from "../Items";

export const Statement = () => {

  return (
    <Box>
      {listStatement.updates.map(({ id, type, from, value, date }) => {
        return (
          <ItemsContainer key={id} type={type} from={from} value={value} date={date} />
        )
      })}
      <Button>Ver Mais</Button>
    </Box>
  )
}