import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("mvc otp service does not log raw OTP values", async () => {
  const source = await readFile(
    new URL("./otp.service.ts", import.meta.url),
    "utf8"
  );

  assert.match(source, /logger\.info\(\{ email \}, "OTP generated successfully"\)/);
  assert.doesNotMatch(source, /OTP generated successfully: \$\{/);
  assert.doesNotMatch(source, /logger\.(info|warn|error|debug|trace)\([^)]*(newOtp\.code|code \? code)/);
});

test("mvc otp verification increments failures before lockout evaluation", async () => {
  const source = await readFile(
    new URL("./otp.service.ts", import.meta.url),
    "utf8"
  );

  assert.match(source, /const newFailed = failedAttempts \+ 1;/);
  assert.match(
    source,
    /await redis\.set\(failedAttemptsKey, newFailed, \{\s*EX: OTP_EXPIRES_IN \/ 1000\s*\}\);/
  );
  assert.match(source, /if \(newFailed >= OTP_MAX_ATTEMPTS\) {/);
  assert.match(
    source,
    /Incorrect OTP\. \$\{OTP_MAX_ATTEMPTS - newFailed\} attempts left\./
  );
});
