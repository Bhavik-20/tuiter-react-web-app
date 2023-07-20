import WorkingWithArrays from "./arrays";
import BooleanVariables from "./boolean-variables";
import Destructing from "./destructing";
import FunctionDestructing from "./function-destructing";
import WorkingWithFunctions from "./functions";
import House from "./house";
import IfElse from "./if-else";
import Spread from "./spread";
import TernaryOperators from "./ternary-operators";
import VariablesAndConstants from "./variable-and-constants";
import VariableTypes from "./variable-types";

function JavaScript() {
   console.log('Hello World!');    
   return(
      <div>
         <h1>JavaScript</h1>
         <VariablesAndConstants/>
         <VariableTypes/>
         <BooleanVariables/>
         <IfElse/>
         <TernaryOperators/>
         <WorkingWithFunctions/>
         <WorkingWithArrays/>
         <House/>
         <Spread/>
         <Destructing/>
         <FunctionDestructing/>
      </div>
   );
}
export default JavaScript