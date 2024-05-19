export function formatString(template: string, values: object) {
  return template.replace(/{(\w+)}/g, function (match, key) {
    return typeof values[key] !== 'undefined' ? values[key] : match;
  });
}
