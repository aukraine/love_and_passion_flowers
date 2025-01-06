import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["fileInput", "preview"];

  preview() {
    const files = this.fileInputTarget.files;
    this.previewTarget.innerHTML = "";

    Array.from(files).forEach((file) => {
      const reader = new FileReader();

      reader.onload = (event) => {
        const img = document.createElement("img");
        img.src = event.target.result;
        img.classList.add("w-full", "h-auto", "object-cover", "rounded-lg", "shadow-md", "mb-4");
        this.previewTarget.appendChild(img);
      };

      reader.readAsDataURL(file);
    });
  }
}
