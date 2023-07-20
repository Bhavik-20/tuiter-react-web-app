import AddRemoveDataArray from "./adding-and-removing-data-to-from-arrays";
import ArrayIndexLength from "./array-index-and-length";
import FilterFunction from "./filter-function";
import FindIndex from "./find-index";
import ForLoops from "./for-loops";
import JsonStringify from "./json-stringify";
import MapFunction from "./map-function";
import TemplateLiterals from "./template-literals";

function WorkingWithArrays() {
    var functionScoped = 2;
    let blockScoped = 5;
    const constant1 = functionScoped - blockScoped;
    let numberArray1 = [1, 2, 3, 4, 5];
    let stringArray1 = ['string1', 'string2'];

    let variableArray1 = [
    functionScoped,   blockScoped,
    constant1,        numberArray1,   stringArray1
    ];

    return (
        <div>
            <h2>Working With Arrays</h2>
            numberArray1 = {numberArray1}<br />
            stringArray1 = {stringArray1}<br />
            variableArray1 = {variableArray1}<br />
            <ArrayIndexLength />
            <AddRemoveDataArray />
            <ForLoops />
            <MapFunction />
            <JsonStringify />
            <FindIndex  />
            <FilterFunction />
            <TemplateLiterals />
        </div>
    );
}

export default WorkingWithArrays;