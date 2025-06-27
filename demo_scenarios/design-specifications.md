# Income Tracking Feature - Design Specification

## Single Page Implementation
The income tracking feature should be fully integrated into the existing dashboard page, not as a separate page. All income tracking functionality will be accessible through the main dashboard interface using tabs, modals, and expandable sections to maintain a cohesive user experience.

## Visual Design Elements

### Color Scheme
- Income category: Green gradient (`bg-gradient-to-r from-emerald-400 to-emerald-600`)
- Income card: Positive gradient (`bg-gradient-to-r from-green-400 to-green-600`)
- Net savings (positive): Green gradient (`bg-gradient-to-r from-green-400 to-green-600`)
- Net savings (negative): Red gradient (`bg-gradient-to-r from-red-400 to-red-600 animate-pulse`)
- Button hover states: Use the same hover gradient pattern (`hover:from-emerald-500 hover:to-emerald-700`)

### Typography
- Card titles: `text-sm font-medium text-gray-500 dark:text-gray-400`
- Card values: `text-3xl font-bold bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent`
- Form labels: Use the existing Label component
- Category text: `font-medium` with appropriate text color

### UI Components
- Cards with rounded corners, shadows, and hover effects
- Form inputs with consistent styling
- Buttons with rounded design
- Tabs for switching between income and expense views
- Popover calendar for date selection
- Select dropdown for categories

### Income Category Icons
- Salary: BriefcaseIcon
- Freelance: LaptopIcon
- Investments: TrendingUpIcon
- Gifts: GiftIcon
- Other: MoreHorizontalIcon

### Income Category Colors
```typescript
const INCOME_CATEGORY_CONFIG = {
  Salary: {
    color: "#10B981",
    gradient: "bg-gradient-to-r from-emerald-400 to-emerald-600",
    hoverGradient: "hover:from-emerald-500 hover:to-emerald-700",
    textColor: "text-white",
    icon: BriefcaseIcon,
  },
  Freelance: {
    color: "#06B6D4",
    gradient: "bg-gradient-to-r from-cyan-400 to-cyan-600",
    hoverGradient: "hover:from-cyan-500 hover:to-cyan-700",
    textColor: "text-white",
    icon: LaptopIcon,
  },
  Investments: {
    color: "#6366F1",
    gradient: "bg-gradient-to-r from-indigo-400 to-indigo-600",
    hoverGradient: "hover:from-indigo-500 hover:to-indigo-700",
    textColor: "text-white",
    icon: TrendingUpIcon,
  },
  Gifts: {
    color: "#EC4899",
    gradient: "bg-gradient-to-r from-pink-400 to-pink-600",
    hoverGradient: "hover:from-pink-500 hover:to-pink-700",
    textColor: "text-white",
    icon: GiftIcon,
  },
  Other: {
    color: "#6B7280",
    gradient: "bg-gradient-to-r from-gray-400 to-gray-600",
    hoverGradient: "hover:from-gray-500 hover:to-gray-700",
    textColor: "text-white",
    icon: MoreHorizontalIcon,
  },
};
```

## UI Components

### Dashboard Integration
- Extend the existing dashboard with income tracking functionality
- Use tabs to toggle between expense and income views within the same page
- Add "Add Income" button next to the existing "Add Expense" button in the header

### Dashboard Cards
- New "Income" card in the dashboard summary section
- "Net Savings" card (Income minus Expenses)
- Use backdrop blur, shadow, and hover effects matching existing cards

### Income Entry Modal
- Use the same modal pattern as expense entry
- Match the existing expense entry form layout
- Add recurring options section with frequency selector
- Use consistent input styling and button design

### Income vs. Expense Chart
- Enhance the existing chart component to show both income and expenses
- Green bars for income, blue bars for expenses
- Toggle option to view expenses, income, or both
- Matching tooltip design and axis styling

### Income List View
- Implement as a tab within the existing list view section
- Same grid layout as expense list
- Category badges with appropriate icons
- Consistent date and amount formatting
- Small indicator for recurring income

## Responsive Design
- Mobile-first approach
- Stack cards vertically on small screens
- Responsive grid layouts
- Touch-friendly input elements

## Dark Mode Support
- Use `dark:` variants for all color classes
- Maintain the same contrast ratios
- Test all components in both light and dark modes

## Accessibility
- Proper ARIA labels
- Sufficient color contrast
- Keyboard navigation support
- Screen reader compatibility