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
   git clone <repository-url>
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
├── components/          # React components
│   ├── BatteryChart/
│   ├── BatteryStatus/
│   ├── ChartTypeSelector/
│   ├── ErrorMessage/
│   └── LoadingSpinner/
├── hooks/              # Custom React hooks
├── utils/              # Utility functions
├── types/              # TypeScript types
└── data/              # Mock data
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
