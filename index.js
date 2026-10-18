const progressBar = document.querySelector("#scroll-progress-bar");
const progressValue = document.querySelector("#scroll-progress-value");
const sectionLabel = document.querySelector("#scroll-section-label");

const progressSections = [
    ...document.querySelectorAll("[data-progress-label]")
];

function updateScrollProgress() {
    const scrollTop = window.scrollY;
    const scrollHeight =
        document.documentElement.scrollHeight - window.innerHeight;

    const progress = scrollHeight > 0
        ? Math.round((scrollTop / scrollHeight) * 100)
        : 0;

    progressBar.style.width = `${progress}%`;
    progressValue.textContent = `${progress}%`;

    const marker = window.innerHeight * 0.35;
    let currentSection = progressSections[0];

    for (const section of progressSections) {
        if (section.getBoundingClientRect().top <= marker) {
            currentSection = section;
        } else {
            break;
        }
    }

    if (scrollTop + window.innerHeight >=
        document.documentElement.scrollHeight - 2) {
        currentSection = progressSections[progressSections.length - 1];
    }

    if (currentSection) {
        sectionLabel.textContent =
            currentSection.dataset.progressLabel;
    }
}

window.addEventListener("scroll", updateScrollProgress, {
    passive: true
});

window.addEventListener("resize", updateScrollProgress);

updateScrollProgress();


const blueprintCursor = document.querySelector(".blueprint-cursor");
const cursorCoordinates = document.querySelector("#cursor-coordinates");

window.addEventListener("mousemove", (event) => {
    blueprintCursor.style.transform =
        `translate(${event.clientX}px, ${event.clientY}px)`;

    cursorCoordinates.textContent =
        `X: ${String(event.clientX).padStart(3, "0")} ` +
        `Y: ${String(event.clientY).padStart(3, "0")}`;

    blueprintCursor.classList.add("is-visible");
});

document.addEventListener("mouseleave", () => {
    blueprintCursor.classList.remove("is-visible");
});

document.addEventListener("mouseenter", () => {
    blueprintCursor.classList.add("is-visible");
});
