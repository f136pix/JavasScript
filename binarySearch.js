

function BinarySearch(arr, left, right, searching){
    const pivot = math.floor((left + right) /2)
    const current = arr[pivot]

    if(left > right) {
        return -1
    }

    if(searching === current) {
        return current
    }

    if(searching < current) {
        return busca(arr, left, pivot-1, searching)
    }

    if(searching > current) {
        return busca(arr, pivot+1, right, searching)
    }
}