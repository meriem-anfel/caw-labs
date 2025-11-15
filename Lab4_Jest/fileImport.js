const notation = require('./notation');


function getAverages(notesArrays) {
    return notesArrays.map(arr => notation.mean(arr));
}


module.exports = { getAverages };

