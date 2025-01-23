"use client";

import { useState } from "react";
import { useRouter } from "next/router";
import { generateHashedPassword } from "@/components/encryption/sha256";

import Image from 'next/image';
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'

export default function Components() {
  const [password, setPassword] = useState("");
  const [siteName, setSiteName] = useState("");
  const [copyToClipboard, setCopyToClipboard] = useState("");
  const [hashedPassword, setHashedPassword] = useState("");
  const [error, setError] = useState({ password: "", siteName: "" });

  const handleGeneratePassword = (e) => {
    e.preventDefault();

    let errors = { password: "", siteName: "" };

    if (!password) {
      errors.password = "Password is required.";
    }

    if (!siteName) {
      errors.siteName = "Site name is required.";
    }

    setError(errors);

    if (errors.password || errors.siteName) {
      return;
    }

    const hash = generateHashedPassword(password, siteName); // Use the imported function
    setHashedPassword(hash);
    setError({ password: "", siteName: "" });
  };

  const handleCopyToClipboard = () => {
    navigator.clipboard.writeText(hashedPassword)
      .then(() => setCopyToClipboard("Password copied to clipboard!"))
      .catch(() => setCopyToClipboard("Failed to copy to clipboard. Please try again."));
  };

  return (

    <div className="flex h-full flex-col  justify-center lg:max-w-[500px] mx-auto">
        <div className="flex justify-center" >
          <Image
            priority
            src="/hashpass/logo.svg"
            alt="HashPass+"
            width={300}
            height={300}
          />
        </div>
        <p className=" text-center pb-10" >
          One password for all your favorite websites!
        </p>
        
        <form onSubmit={handleGeneratePassword} autoComplete="off">
          <div>
            <label htmlFor="siteName">Site Name:</label>
            <Input
              type="text"
              id="siteName"
              placeholder="Enter site name..."
              value={siteName}
              onChange={(e) => setSiteName(e.target.value)}
            />
            {error.siteName && <p style={{ color: "red" }}>{error.siteName}</p>}
          </div>
          <br></br>
          <div>
            <label htmlFor="password">Password:</label>
            <Input
              type="password"
              id="password"
              placeholder="Write password..."
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            {error.password && <p style={{ color: "red" }}>{error.password}</p>}
          </div>

          <br></br>
          <Button type="submit">Generate Password</Button>
          {hashedPassword && (
            <div>
              <p>Your generated password:</p>
              <p>{hashedPassword}</p>
              <Button type="button" onClick={handleCopyToClipboard}>
                Copy to Clipboard
              </Button>
              {copyToClipboard && <p style={{ color: "green" }}>{copyToClipboard}</p>}

            </div>

          )}
        </form>
        <div className="flex-grow" />
        {/* bottom section */}
        <div className="p-4 bg-gray-100 rounded-lg shadow-md">
          <h2 className="text-lg font-bold mb-4">Effortless Password Generation</h2>
          <ul className="list-disc list-inside">
            <li>Simply enter the website name and your master password.</li>
            <li>HashPass+ generates a consistent, complex and unique password specifically for that site.</li>
            <li>No need to remember countless individual passwords.</li>
            <li>Your master password is the only one you need to keep secure.</li>
            <li>Our website does not store any information</li>
            <li>SHA-256 is used, so the password is impossible to guess</li>
          </ul>
        </div>
      </div>

  );
}
