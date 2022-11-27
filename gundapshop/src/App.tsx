import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import {useRoutes} from "react-router-dom";
import {routes} from './routes'
import {getClient} from "./queryClient";
import {ReactQueryDevtools} from 'react-query/devtools'
import { QueryClientProvider } from 'react-query';
import Nav from './components/Nav';

function App() {
  const elem = useRoutes(routes)
  const queryClient = getClient()

  return      <QueryClientProvider client={queryClient}>
    <Nav/>
      {elem}
    <ReactQueryDevtools initialIsOpen={false} />
  </QueryClientProvider>
}

export default App
