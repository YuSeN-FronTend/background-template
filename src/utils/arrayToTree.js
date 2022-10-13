
function arrayToTree(array = [], fPath = null) {
    let arr = []
    for (let i = 0; i < array.length; i++) {
        const each = array[i];
        if (each.mate.fPath === fPath) {
            arr.push({ ...each, children: arrayToTree(array, each.path)})
        }
        
    }
    return arr
}

export default arrayToTree