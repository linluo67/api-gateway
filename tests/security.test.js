const { checkVulnerabilities } = require('@security/scanner');

test('should have no critical vulnerabilities', () => {
  const report = checkVulnerabilities();
  expect(report.critical).toBe(0);
});
