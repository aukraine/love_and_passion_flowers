import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["email", "message"];

  validateAndSubmit(event) {
    event.preventDefault();

    let valid = true;

    if (this.emailTarget.value.trim() === "") {
      this.showError(this.emailTarget, "Email is required");
      valid = false;
    } else if (!this.isValidEmail(this.emailTarget.value)) {
      this.showError(this.emailTarget, "Please enter a valid email address");
      valid = false;
    } else {
      this.clearError(this.emailTarget);
    }

    if (this.messageTarget.value.trim().length < 10) {
      this.showError(this.messageTarget, "Message must be at least 10 characters");
      valid = false;
    } else {
      this.clearError(this.messageTarget);
    }

    if (valid) {
      this.submitForm();
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

  isValidEmail(email) {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  submitForm() {
    const form = this.element;
    form.submit();
  }
}
