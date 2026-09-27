const prompts = [
  "Build a tiny page that changes its colors when the sun goes down.",
  "Make a button that leaves a trail of little stars wherever it goes.",
  "Create a one-screen garden that grows a new shape with every click.",
  "Design a playful loading screen for an app that does absolutely nothing.",
  "Make a mini mood board using only three colors and five shapes."
];

export function initCreativePrompt() {
  const output = document.querySelector("#build-prompt");
  const next = document.querySelector("#next-prompt");
  const motionToggle = document.querySelector("#motion-toggle");

  if (output && next) {
    let current = 0;
    next.addEventListener("click", () => {
      current = (current + 1) % prompts.length;
      output.textContent = prompts[current];
    });
  }

  motionToggle?.addEventListener("click", () => {
    const paused = document.documentElement.dataset.motionPaused !== "true";
    document.documentElement.dataset.motionPaused = String(paused);
    motionToggle.setAttribute("aria-pressed", String(paused));
    motionToggle.textContent = paused ? "Resume decorative motion" : "Pause decorative motion";
  });
}
