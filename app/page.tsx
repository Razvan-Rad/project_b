import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="mx-auto max-w-3xl">
      <div className="flex items-center justify-center mb-8"> 
        <img src="/intro_page/picture_of_me.png" alt="Picture of me" className="rounded-full w-24 h-24 object-cover" /> 
        {/* Replace with your actual image path */}
      </div> 
      <h1 className="text-3xl font-bold mb-4">Hi! I'm Razvan.</h1> 
      <p className="text-lg mb-6">
        This is where I make stuff on the web.
      </p>
      <p className="text-lg mb-4">
        Even though AI can code, it will never replace our drive and creativity
      </p>

      <h2 className="text-2xl font-semibold mb-4">Featured Projects</h2> 
        <Link href="/hashpass">
            <div className="relative">
              <Image 
                src="/intro_page/picture1.png" 
                alt="HashPass+" 
                layout="responsive" 
                width={100} 
                height={100} 
                objectFit="cover" 
                className="rounded-lg" 
              />
              <p className="absolute bottom-0 left-0 right-0 p-2 bg-gray-800 bg-opacity-30 text-white text-center rounded-[10px]">
              HashPass+: The Best Password Manager
              </p>
            </div>
        </Link>
        <br/>
        <Link href="/project/2">
            <div className="relative">
              <Image 
                src="/intro_page/picture2.png" 
                alt="Project 2" 
                layout="responsive" 
                width={100} 
                height={100} 
                objectFit="cover" 
                className="rounded-lg" 
              />
              <p className="absolute bottom-0 left-0 right-0 p-2 bg-gray-800 bg-opacity-30 text-white text-center rounded-[10px]">
                Project 2 Description
              </p>
            </div>
        </Link>
        <br/>
        <Link href="/project/blender">
            <div className="relative">
              <Image 
                src="/intro_page/picture3.png" 
                alt="Project 3" 
                layout="responsive" 
                width={100} 
                height={100} 
                objectFit="cover" 
                className="rounded-lg" 
              />
              <p className="absolute bottom-0 left-0 right-0 p-2 bg-gray-800 bg-opacity-30 text-white text-center rounded-[10px]">
                Project 3 Description
              </p>
            </div>
        </Link>
    </main>
  );
}