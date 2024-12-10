# Battery Charging Visualization

A modern, responsive React application for visualizing battery charging states over the last 24 hours. Built with performance and accessibility in mind.

## Features

- Real-time battery level visualization
- Interactive charging state graph with multiple view options
- Detailed analytics of charging patterns
- Responsive design for all screen sizes
- Comprehensive accessibility support
- Performance optimized with React.memo and useCallback
- Robust error handling and loading states

## Tech Stack

- React 18 with TypeScript
- Recharts for data visualization
- Tailwind CSS for styling
- Font Awesome icons
- Jest & React Testing Library for testing
- Day.js for date handling

## Getting Started

1. Clone the repository:
   ```bash
   git clone https://github.com/mohamedabdelhamid7895/Battery-Charging
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Run tests:
   ```bash
   npm test
   ```

## Project Structure

```
src/
├── __mocks__/                    # Jest mock files
│   └── batteryApi.ts            # Battery API mocks
├── __tests__/                   # Test files
│   ├── App.test.tsx
│   └── dateUtils.test.ts
├── api/                         # API related files
│   └── batteryApi.ts
├── components/                  # React components
│   ├── BatteryAnalytics/
│   ├── ErrorBoundary/
│   └── common/                  # Shared components
├── config/                      # Configuration files
├── data/                        # Data files and mock data
├── hooks/                       # Custom React hooks
├── services/                    # Service layer
├── types/                       # TypeScript type definitions
├── utils/                       # Utility functions
├── App.tsx                      # Main App component
├── main.tsx                     # Entry point
├── index.css                    # Global styles
├── setupTests.ts               # Test setup configuration
└── vite-env.d.ts              # Vite environment types

Configuration Files:
```

## Testing

The project includes comprehensive unit tests for all components and utilities. Run tests with:

```bash
npm test                # Run tests
npm run test:watch     # Run tests in watch mode
npm run test:coverage  # Generate coverage report
```

## Performance Optimizations

- Memoized components with React.memo
- Optimized callback functions with useCallback
- Efficient date handling with Day.js
- Lazy loading for larger components
- Minimized re-renders with proper state management

## Accessibility

- ARIA labels and roles
- Keyboard navigation support
- Screen reader friendly
- Color contrast compliance
- Focus management

## License

MIT"# Battery-Charging" 
