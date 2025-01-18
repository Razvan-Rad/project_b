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
        .then(() => alert("Password copied to clipboard!"))
        .catch(() => alert("Failed to copy to clipboard. Please try again."));
    alert("Password copied to clipboard!");
  };

  return (
    
    <div className="flex h-full flex-col ">
    <div 
              className="flex justify-center" >
        <Image
              priority
              src="/hashpass/logo.svg" 
              alt="HashPass+" 
              width={300} 
              height={300}
            />
    </div>

      <p className=" text-center" > 
           One password for all your favorite websites!
      </p>
      <br></br>
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
          
          </div>
          
        )}
      </form>
        <div className="flex-grow"/>
      {/* bottom section */}

        <p className=" text-center p-2 ">
          HashPass+ generates consistent, strong, and unique passwords server-side data storage. Just input a master password and the site name. Using the SHA-256 hashing algorithm, it creates a site-specific password.
        </p>
      
    </div>
      
  );
}
