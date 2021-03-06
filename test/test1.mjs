import fs from 'fs';

import { MTRK_TestSequence, MTRK_RenderSequence } from '../public/mtrk/mtrk_parser.mjs';
import { MTRK_LOG, MTRK_SetLogToConsole, MTRK_GetLogOutput } from '../public/mtrk/mtrk_common.mjs';


var sequence = {};
var file = './seq/miniflash.mtrk';

MTRK_LOG("");
MTRK_LOG("Test 1: Testing reading and validating sequences");
MTRK_LOG("");

MTRK_SetLogToConsole(false);

try {
    const data = fs.readFileSync(file, 'utf8');
    sequence = JSON.parse(data);
} catch (err) {
    console.error(err)
}

var testResult=MTRK_TestSequence(sequence);
if (testResult=="") {
    testResult="OK";
}
var render=MTRK_RenderSequence(sequence);

MTRK_SetLogToConsole(true);
MTRK_LOG("Result: " + testResult); 
MTRK_LOG("Output from sequence run:");
MTRK_LOG("");

var output=MTRK_GetLogOutput();
for (var line in output) {
    console.log(output[line]);
}

MTRK_LOG("");
