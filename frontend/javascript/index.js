import CableReady from "cable_ready"
import { CableReadyOperationElement } from "cable_ready/javascript/custom_elements"
import "index.scss"

// Import all javascript files from src/_components
const componentsContext = require.context("bridgetownComponents", true, /.js$/)
componentsContext.keys().forEach(componentsContext)

console.info("Bridgetown is loaded!")
