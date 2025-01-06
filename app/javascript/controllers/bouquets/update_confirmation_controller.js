import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["name", "description", "photos", "modal"];

  validateAndOpenModal(event) {
    event.preventDefault();

    let valid = true;

    if (this.nameTarget.value.trim() === "") {
      this.showError(this.nameTarget, "Name is required");
      valid = false;
    } else {
      this.clearError(this.nameTarget);
    }

    if (this.descriptionTarget.value.trim().length < 10) {
      this.showError(this.descriptionTarget, "Description must be at least 10 characters");
      valid = false;
    } else {
      this.clearError(this.descriptionTarget);
    }

    // if (this.photosTarget.files.length === 0) {
    //   this.showError(this.photosTarget, "At least one photo must be uploaded");
    //   valid = false;
    // } else {
    //   this.clearError(this.photosTarget);
    // }

    if (valid) {
      this.modalTarget.classList.remove("hidden");
    }
  }

  showError(field, message) {
    let errorElement = field.nextElementSibling;
    if (errorElement) {
      errorElement.textContent = message;
      errorElement.classList.remove("hidden");
      field.classList.add("border-pink-700");
    }
  }

  clearError(field) {
    let errorElement = field.nextElementSibling;
    if (errorElement) {
      errorElement.textContent = "";
      errorElement.classList.add("hidden");
      field.classList.remove("border-pink-700");
    }
  }

  closeModal() {
    this.modalTarget.classList.add("hidden");
  }
}
