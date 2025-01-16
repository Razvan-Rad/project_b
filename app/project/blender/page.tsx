import { Metadata } from 'next'
import Image from 'next/image';

export const metadata: Metadata = {
  title: 'Project 3 | Blender',
  description: 'A showcase of my journey learning Blender',
}

export default function ApiReference() {
  return (
    <main className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-6">3 Hours </h1>
      <p className="text-xl mb-4">
        This section provides some artwork I created in my spare time while learning Blender.
      </p>
      <h2 className="text-2xl font-semibold mt-8 mb-4">Forgotten Church</h2>
      <Image
        src="/blender/cathedral.png"
        alt="Image of a fictional church"
        width={7100}
        height={500}
      />
      <p className="mb-4">I sit at the computer and start a timer. After finding an interesting idea, I take 3 hours to work towards a visual representation of it.
        While this is one of my earliest renders, I still feel proud for it</p>

      <h3 className="text-xl font-semibold mt-6 mb-2">title</h3>
      <pre className="bg-muted p-4 rounded-md mb-4">
        <code>{`new Client(config: ClientConfig)`}</code>
      </pre>
      <p className="mb-4">Creates a new instance of the Client class.</p>

      <h4 className="text-lg font-semibold mt-4 mb-2">title</h4>
      <ul className="list-disc list-inside mb-4">
        <li>
          <code>config</code>: An object containing the client configuration
        </li>
      </ul>
      <h3 className="text-xl font-semibold mt-6 mb-2">title</h3>
      <h4 className="text-lg font-semibold mt-4 mb-2">small title</h4>
      <pre className="bg-muted p-4 rounded-md mb-4">
        <code>{`async doSomething(): Promise<Result>`}</code>
      </pre>
      <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus temporibus</p>

      <h4 className="text-lg font-semibold mt-4 mb-2">small title</h4>
      <p className="mb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus temporibus</p>

      <h2 className="text-2xl font-semibold mt-8 mb-4">title</h2>
      <h3 className="text-xl font-semibold mt-6 mb-2">small title</h3>
      <pre className="bg-muted p-4 rounded-md mb-4">
        <code>{`interface ClientConfig {
  apiKey: string;
  environment: 'production' | 'development';
}`}</code>
      </pre>
      <h3 className="text-xl font-semibold mt-6 mb-2">Title</h3>
      <pre className="bg-muted p-4 rounded-md mb-4">
        <code>{`interface Result {
  id: string;
  data: any;
  timestamp: number;
}`}</code>
      </pre>
      <p className="mt-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus temporibus, doloremque tempore maxime sapiente eveniet cum aut voluptatem eum numquam sequi ea dolore exercitationem! Quibusdam dolor expedita dolores minima temporibus!
      </p>
    </main>
  )
}

