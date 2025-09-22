// PART 1: Event Handling
document.getElementById("toggleMessageBtn").addEventListener("click", () => {
  const message = document.getElementById("message");
  message.style.display = message.style.display === "none" ? "block" : "none";
});

// PART 2A: Light/Dark Mode
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});

// PART 2B: Counter
let count = 0;
document.getElementById("incrementBtn").addEventListener("click", () => {
  count++;
  document.getElementById("counter").textContent = count;
});

// PART 2C: FAQ Toggle
document.querySelectorAll(".faq-question").forEach((q) => {
  q.addEventListener("click", () => {
    const answer = q.nextElementSibling;
    answer.style.display = answer.style.display === "none" ? "block" : "none";
  });
});

// PART 3: Form Validation
document.getElementById("signupForm").addEventListener("submit", (e) => {
  e.preventDefault(); // stop form submit until validated

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();
  const feedback = document.getElementById("formFeedback");

  if (name === "" || email === "" || password === "") {
    feedback.textContent = "⚠️ All fields are required.";
    feedback.style.color = "red";
    return;
  }

  // Simple email regex check
  const emailRegex = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailRegex.test(email)) {
    feedback.textContent = "❌ Please enter a valid email.";
    feedback.style.color = "red";
    return;
  }

  if (password.length < 6) {
    feedback.textContent = "🔒 Password must be at least 6 characters.";
    feedback.style.color = "red";
    return;
  }

  feedback.textContent = "✅ Form submitted successfully!";
  feedback.style.color = "green";
});
