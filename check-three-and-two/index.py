def check_three_and_two(arr):
    counts = {}
    for char in arr:
        counts[char] = counts.get(char, 0) + 1

    values = list(counts.values())
    return 3 in values and 2 in values