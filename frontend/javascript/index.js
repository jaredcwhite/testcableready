import CableReady from "cable_ready"
import { CableReadyOperationElement } from "cable_ready/javascript/custom_elements"

CableReady.operations.confetti = operation => {
  confetti({
    particleCount: operation.particles,
    spread: 70,
    origin: { y: 0.4 }
  })
}

CableReadyOperationElement.define()

import "index.scss"

// Import all javascript files from src/_components
const componentsContext = require.context("bridgetownComponents", true, /.js$/)
componentsContext.keys().forEach(componentsContext)

console.info("Bridgetown is loaded!")
