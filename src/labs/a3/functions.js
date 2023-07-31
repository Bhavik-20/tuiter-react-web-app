import ArrowFunctions from "./arrow-functions";
import Es5 from "./es5-functions";
import PAP from "./function-parenthesis-and-parameters";
import ImpliedReturns from "./implied-returns";

function WorkingWithFunctions() {
    return (
        <div>
            <h1>Working With Functions</h1>
            <Es5/>
            <ArrowFunctions/>
            <ImpliedReturns/>
            <PAP/>
        </div>
    );
}

export default WorkingWithFunctions;