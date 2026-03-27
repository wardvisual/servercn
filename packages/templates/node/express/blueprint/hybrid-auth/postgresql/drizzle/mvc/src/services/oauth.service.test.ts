import assert from "node:assert/strict";
import { readFile } from "node:fs/promises";
import test from "node:test";

test("oauth service blocks auto-linking when the provider email is not verified", async () => {
  const source = await readFile(
    new URL("./oauth.service.ts", import.meta.url),
    "utf8"
  );

  assert.match(
    source,
    /if \(!user\.isEmailVerified\) {\s*throw ApiError\.forbidden\("Email not verified - require linking flow\."\);/
  );
});

test("oauth service only auto-links providers for verified users or same-provider sign-ins", async () => {
  const source = await readFile(
    new URL("./oauth.service.ts", import.meta.url),
    "utf8"
  );

  assert.match(
    source,
    /const canAutoLinkProvider =\s*user\.isEmailVerified \|\| existingUser\.provider === user\.provider;/
  );
  assert.match(
    source,
    /isEmailVerified: existingUser\.isEmailVerified \|\| user\.isEmailVerified,/
  );
  assert.match(
    source,
    /await db\.insert\(users\)\.values\(\{[\s\S]*isEmailVerified: user\.isEmailVerified,/
  );
});
