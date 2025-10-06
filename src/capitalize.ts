export function capitalize(string: string) {
  return string.at(0)?.toUpperCase().concat(string.substring(1));
}
