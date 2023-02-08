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

let result = findMaxMin(Deno.args.map(Number))
if (result[0] && result[1]) {
    console.log(result)
} else {
    console.log('Invalid input. Ensure all arguments are numbers.')
}