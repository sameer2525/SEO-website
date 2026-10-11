
(() => {
  "use strict";

  const root = document.querySelector(".sk-contact");

  if (!root || root.dataset.contactInitialised === "true") {
    return;
  }

  root.dataset.contactInitialised = "true";

  const form = root.querySelector("#sk-contact-form");
  const nameInput = root.querySelector("#sk-contact-name");
  const emailInput = root.querySelector("#sk-contact-email");
  const companyInput = root.querySelector("#sk-contact-company");
  const serviceInput = root.querySelector("#sk-contact-service");
  const messageInput = root.querySelector("#sk-contact-message");
  const consentInput = root.querySelector("#sk-contact-consent");
  const charCount = root.querySelector("#sk-contact-char-count");
  const status = root.querySelector("#sk-contact-form-status");

  if (!form) return;

  const errorFields = {
    name: root.querySelector("#sk-error-name"),
    email: root.querySelector("#sk-error-email"),
    service: root.querySelector("#sk-error-service"),
    message: root.querySelector("#sk-error-message"),
    consent: root.querySelector("#sk-error-consent")
  };

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  function showFieldError(field, message) {
    const errorElement = errorFields[field];

    if (errorElement) {
      errorElement.textContent = message;
    }

    const inputMap = {
      name: nameInput,
      email: emailInput,
      service: serviceInput,
      message: messageInput,
      consent: consentInput
    };

    const input = inputMap[field];

    if (input) {
      input.setAttribute("aria-invalid", message ? "true" : "false");
    }
  }

  function clearErrors() {
    Object.keys(errorFields).forEach((field) => {
      showFieldError(field, "");
    });

    if (status) {
      status.textContent = "";
      status.className = "sk-contact-form-status";
    }
  }

  function showStatus(message, type) {
    if (!status) return;

    status.textContent = message;
    status.className = `sk-contact-form-status is-visible is-${type}`;
  }

  function validateForm() {
    clearErrors();

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const service = serviceInput.value;
    const message = messageInput.value.trim();

    let valid = true;
    let firstInvalid = null;

    function invalidate(field, input, messageText) {
      showFieldError(field, messageText);
      valid = false;

      if (!firstInvalid) {
        firstInvalid = input;
      }
    }

    if (name.length < 2) {
      invalidate("name", nameInput, "Please enter your name (at least 2 characters).");
    }

    if (!emailPattern.test(email)) {
      invalidate("email", emailInput, "Please enter a valid email address.");
    }

    if (!service) {
      invalidate("service", serviceInput, "Please select a service or choose “Not Sure Yet”.");
    }

    if (message.length < 15) {
      invalidate("message", messageInput, "Please add a little more detail (at least 15 characters).");
    } else if (message.length > 3000) {
      invalidate("message", messageInput, "Please keep your message under 3,000 characters.");
    }

    if (!consentInput.checked) {
      invalidate("consent", consentInput, "Please confirm that your details may be used to respond.");
    }

    if (!valid && firstInvalid) {
      firstInvalid.focus();
    }

    return valid;
  }

  function updateCharacterCount() {
    if (!messageInput || !charCount) return;

    charCount.textContent = `${messageInput.value.length} / 3000`;
  }

  messageInput.addEventListener("input", updateCharacterCount);

  const fieldsToWatch = [
    ["name", nameInput],
    ["email", emailInput],
    ["service", serviceInput],
    ["message", messageInput]
  ];

  fieldsToWatch.forEach(([field, input]) => {
    input.addEventListener("input", () => {
      if (input.getAttribute("aria-invalid") === "true") {
        showFieldError(field, "");
      }
    });

    input.addEventListener("change", () => {
      if (input.getAttribute("aria-invalid") === "true") {
        showFieldError(field, "");
      }
    });
  });

  consentInput.addEventListener("change", () => {
    if (consentInput.checked) {
      showFieldError("consent", "");
    }
  });

  // Choosing a service card fills the enquiry form.
  root.querySelectorAll("[data-service-choice]").forEach((card) => {
    card.addEventListener("click", () => {
      const chosenService = card.dataset.serviceChoice;

      if (!chosenService) return;

      serviceInput.value = chosenService;

      serviceInput.dispatchEvent(
        new Event("change", { bubbles: true })
      );
    });
  });

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (!validateForm()) {
      showStatus(
        "Please check the highlighted fields and try again.",
        "error"
      );
      return;
    }

    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const company = companyInput.value.trim();
    const service = serviceInput.value;
    const message = messageInput.value.trim();

    const selectedBudget = form.querySelector(
      'input[name="budget"]:checked'
    );

    const budget = selectedBudget
      ? selectedBudget.value
      : "Not specified";

    const subject = `Project enquiry — ${service}`;

    const emailBody = [
      "Hi Sameer,",
      "",
      "I'd like to discuss a project with you.",
      "",
      "CONTACT DETAILS",
      `Name: ${name}`,
      `Email: ${email}`,
      `Company / Brand: ${company || "Not specified"}`,
      "",
      "PROJECT DETAILS",
      `Service: ${service}`,
      `Estimated Budget: ${budget}`,
      "",
      "MESSAGE",
      message,
      "",
      "I have agreed to have my details used to respond to this enquiry."
    ].join("\n");

    const mailtoUrl =
      `mailto:sameerkerekar37@gmail.com` +
      `?subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(emailBody)}`;

    showStatus(
      "Your enquiry is ready. Your default email app should open with the details filled in. Review the message and press Send in your email app to send it.",
      "success"
    );

    // Open the visitor's email application with a prepared draft.
    window.location.href = mailtoUrl;
  });

  updateCharacterCount();
})();
