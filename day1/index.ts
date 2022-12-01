const text = await Deno.readTextFile("i.txt");

const x =
text.split(/\r?\n/).map(Number).reduce<number[][]>((acc, cur) => {
    if(cur === 0) {
        acc.push([])
    return acc
    }

    acc[acc.length -1].push(cur)

    return acc
}, [[]]).map(x => x.reduce((acc, cur) => acc + cur, 0))

const max1 = x.reduce((a, b) => Math.max(a, b), -Infinity)
const max3 = x.sort((a,b) =>b-a).slice(0,3).reduce((acc, cur) => acc + cur, 0)
console.log(max3)
