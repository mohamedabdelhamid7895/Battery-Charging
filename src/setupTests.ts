import "@testing-library/jest-dom";

// Mock ResizeObserver for jsdom
class ResizeObserver {
  observe() {}
  unobserve() {}
  disconnect() {}
}

window.ResizeObserver = ResizeObserver;

// Mock `import.meta.env` indirectly by mocking modules that use it
// Avoid trying to globally mock `import.meta.env` as it's read-only and not directly mockable
