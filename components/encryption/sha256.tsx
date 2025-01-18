import crypto from "crypto";

export function generateHashedPassword(password: string, siteName: string) {
    const key = `${password}@@${siteName}`;
    const hash = crypto.createHash("sha256").update(key).digest("hex");
    return hash;
  }