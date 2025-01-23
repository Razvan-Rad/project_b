import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import Image from 'next/image';

export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white pt-8 pb-10 ">
        <div className=" flex justify-center  sm:ml-8 sm:mb-8" >
          <Image
            priority
            src="/hashpass/logo.svg"
            alt="HashPass+"
            width={180}
            height={180}
          />
        </div>
        <div className="container mx-auto flex flex-row  justify-center  "> 
          
          <div className="flex flex-col space-y-2 sm:ml-8"> 
            <Link href="/" className="hover:text-gray-200 sm:ml-8 sm:mr-8">Home</Link>
          </div>
          
          <div className="flex flex-col space-y-2"> 
            <Link href="/privacy" className="hover:text-gray-200 sm:ml-8 sm:mr-8">User Privacy</Link>
            <Link href="/terms" className="hover:text-gray-200 sm:ml-8 sm:mr-8">Terms and Conditions</Link>
            <Link href="/report" className="hover:text-gray-200 sm:ml-8 sm:mr-8">Report an Issue</Link> 
          </div>
          
          <div className="flex flex-col space-y-2"> 
          {/* <p className="sm:mr-8">© 2025 Razvan</p>  */}
          </div>

          <div className="flex flex-col space-y-2 "> 
            <p className="sm:ml-8 sm:mr-8">Contact me</p> 
            <div className="flex flex-row sm:ml-8 sm:mb-8" >
              <Link href="https://www.linkedin.com/in/razvan-rad/" target="_blank" rel="noopener noreferrer">
                  <Image
                    priority
                    src="/linkedin.svg"
                    alt="linkedin: radrazvan"
                    width={48}
                    height={48}
                  />
              </Link>
                  <Link href="mailto:rad.razvan.daniel@gmail.com">
                    <Image
                      priority
                      src="/gmail.svg"
                      alt="linkedin: radrazvan"
                      width={48}
                      height={48}
                    />
                  </Link>
                </div>
          </div>
        </div>
      </footer>
    );
  }
  