import React from "react";
import SelectPOS from "../../components/select-pos/selectPOS.component";
const PROMPT_DATA = {
  blanks: [
    `${SelectPOS("noun")} in the library`,
    `${SelectPOS("noun")} in the forest`,
    `${SelectPOS("noun")} in the attic`,
    `${SelectPOS("noun")} in the fog`,
    `${SelectPOS("noun")} in the water`,
    `${SelectPOS("anthro")} as a princess`,
    `${SelectPOS("anthro")} as a prince`,
    `${SelectPOS("anthro")} as a nonbinary heir to the throne`,
    `Inside ${SelectPOS("inNoun")}`,
    `${SelectPOS("noun")} inside ${SelectPOS("inNoun")}`,
    `${SelectPOS("witch")} witch`,
  ],
};
export default PROMPT_DATA;
