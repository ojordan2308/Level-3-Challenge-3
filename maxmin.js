const findMaxMin = arr => {
    let max = arr[0]
    let min = arr[0]
    for (let i=1; i<arr.length; i++) {
        if (arr[i]>max) {
            max = arr[i]
        }
        if (arr[i]<min) {
            min = arr[i]
        }
    }
    return [min, max]
}

console.log(findMaxMin(Deno.args.map(Number)))