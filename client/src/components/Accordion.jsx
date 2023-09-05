import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import Dialog from "./Dialog";

export default function BasicAccordion({
  dayNum,
  exerciseData,
  sendExerciseInfo,
}) {
  return (
    <div className="px-4 py-1">
      <Accordion sx={{ backgroundColor: "white" }}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography sx={{ fontSize: 18, fontWeight: 700, color: "black" }}>
            day {dayNum}
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          {exerciseData ? <div> 
            {exerciseData.map((e,i)=>{
              return <div key={i} className="border-2 flex justify-between p-2 my-2 rounded font-bold border-black">
                  <p>{e.muscle}</p>
                  <p>{e.exercise}</p>
                  <p>{e.set} sets</p>
                  <p>{e.rep} reps</p>
                  <p>{e.rest}</p>
              </div>
            })}

          </div> : <div> There is no data yet</div>}
          <div className="flex justify-end">
            <Dialog
              sendExerciseInfo={(info) => sendExerciseInfo(dayNum, info)}
            />
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
