import { Controller } from "@hotwired/stimulus"
import { highlightAll } from "actiontext-lexical"

export default class extends Controller {
  static targets = ["log"]

  // Actions
  log(event){
    const span = document.createElement("div")
    span.textContent = event.type
    span.dataset.event = event.type
    this.logTarget.appendChild(span)
  }
}
