import React from 'react'
import {render} from 'react-dom'
import { hydrate } from 'react-dom';
import App from './App'

hydrate(<App/>, document.getElementById('root'))