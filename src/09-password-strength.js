/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {

    // non-string or empty string
    if (typeof password !== "string" || password === "") {
      return "weak";
    }

    let criteriaMet = 0;

    // 1. At least 8 characters
    if (password.length >= 8) {
      criteriaMet++;
    }

    let hasUppercase = false;
    let hasLowercase = false;
    let hasNumber = false;
    let hasSpecial = false;

    const specialChars = "!@#$%^&*()_+-=[]{}|;:,.<>?";

    for (let i = 0; i < password.length; i++) {
      const code = password.charCodeAt(i);

      // Uppercase A–Z
      if (code >= 65 && code <= 90) {
        hasUppercase = true;
      }
      // Lowercase a–z
      else if (code >= 97 && code <= 122) {
        hasLowercase = true;
      }
      // Number 0–9
      else if (code >= 48 && code <= 57) {
        hasNumber = true;
      }
      // Special character
      else if (specialChars.includes(password[i])) {
        hasSpecial = true;
      }
    }

    if (hasUppercase) 
      criteriaMet++;

    if (hasLowercase) 
      criteriaMet++;

    if (hasNumber) 
      criteriaMet++;

    if (hasSpecial) 
      criteriaMet++;

    // Strength decision
    if (criteriaMet <= 1) {
      return "weak";
    } 
    else if (criteriaMet <= 3) {
      return "medium";
    } 
    else if (criteriaMet === 4) {
      return "strong";
    } 
    else {
      return "very strong";
    }
}
