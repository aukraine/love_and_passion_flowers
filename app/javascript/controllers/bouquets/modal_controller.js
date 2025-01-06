import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["modal", "imagePreview"];
  static values = { imageUrl: String };

  open(event) {
    const imageUrl = event.target.dataset['bouquets-ModalImageUrlValue'];
    this.imagePreviewTarget.src = imageUrl;
    this.modalTarget.classList.remove("hidden");
  }

  close() {
    this.modalTarget.classList.add("hidden");
    this.imagePreviewTarget.src = "";
  }
}
