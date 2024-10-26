bool check_three_and_two(List<String> arr) {
  Map<String, int> counts = {};

  for (String char in arr) {
    counts[char] = (counts[char] ?? 0) + 1;
  }

  List<int> values = counts.values.toList();
  return values.contains(3) && values.contains(2);
}
