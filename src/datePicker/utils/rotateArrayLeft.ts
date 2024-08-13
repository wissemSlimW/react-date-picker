export const rotateArrayLeft = (array: any[], shiftCount: number= 0 ) => {
    let subArray = array.splice(0, shiftCount,)
    return (
        [...array, ...subArray]
    )
}