def bs(arr, x):
    l = 0
    r = len(arr)

    while l < r:
        mid = (l + r) // 2
        if arr[mid] == x:
            return mid
        elif arr[mid] < x:
            l = mid+1
        else:
            r = mid

    return -1
