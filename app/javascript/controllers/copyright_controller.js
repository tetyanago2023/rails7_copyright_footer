import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="copyright"
export default class extends Controller {
  connect() {
    const currentYear = new Date().getFullYear();
    this.element.innerHTML = `© ${currentYear}`;
  }
}
