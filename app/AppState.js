import { EventEmitter } from './utils/EventEmitter.js'
import { createObservableProxy } from './utils/ObservableProxy.js'
import { Question } from './models/Trivia.js'

class ObservableAppState extends EventEmitter {

  /**@type {Question[]} */
  questions = []
}

export const AppState = createObservableProxy(new ObservableAppState())