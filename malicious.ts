// Example with OWASP Top 10 Violations (XSS and SQL Injection)

// Vulnerability 1: Cross-Site Scripting (XSS)
const userInput = "<script>alert('XSS Attack!');</script>";
document.getElementById("output").innerHTML = userInput; // This is vulnerable to XSS

// Vulnerability 2: SQL Injection
const userId = "1";
const maliciousInput = `1'; DROP TABLE Users; --`; // SQL Injection attempt
const query = `SELECT * FROM Users WHERE id = ${userId}`; // Vulnerable to SQL Injection
