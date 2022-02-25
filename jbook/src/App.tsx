import React, { useEffect, useRef, useState } from 'react';
import * as esbuild from 'esbuild-wasm'
import { unpkgPathPlugin } from './plugins/unpkg-path-plugin'
import { fetchPlugin } from './plugins/fetch-plugin'

function App() {
  const [input, setInput] = useState('')
  const [output, setOutput] = useState('')
  const ref = useRef<any>()

  const startService = async () => {
    ref.current = await esbuild.startService({
      worker: true,
      wasmURL: 'https://unpkg.com/esbuild-wasm@0.8.27/esbuild.wasm'
    })
  }

  useEffect(() => {
    startService()
  }, [])

  const onClick = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    if (!ref.current) {
      return
    }

    // const result = await ref.current.transform(input, {
    //   loader: 'jsx',
    //   target: 'es2015'
    // })

    const result = await ref.current.build({
      entryPoints: ['index.js'],
      bundle: true,
      write: false,
      plugins: [
        unpkgPathPlugin(),
        fetchPlugin(input)
      ]
    })

    setOutput(result.outputFiles[0].text)

    try {
      eval(result.outputFiles[0].text)
    } catch(error) {
      console.error(error)
    }
  }

  return (
    <div>
      <h1>JBook</h1>

      <form>
        <textarea
          onChange={e => setInput(e.target.value)}
          value={input}></textarea>
        <button onClick={onClick}>Submit</button>
      </form>

      <pre>{output}</pre>
    </div>
  );
}

export default App;
