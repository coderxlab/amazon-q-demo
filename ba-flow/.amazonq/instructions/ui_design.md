# UI Mockup Screen Generator

## Objective
Generate standalone HTML pages for each screen described in a UI mockup or UX flow document. Each screen becomes a separate HTML file that can be viewed independently while maintaining design consistency across the entire application flow.

## Core Processing Steps

### 1. Document Analysis
- Parse the UI mockup description at `designs/design.md`
- Identify all unique screens/states mentioned
- Extract design specifications, requirements, and user flows
- Note any specific design principles or frameworks referenced
- Identify responsive design requirements and target devices

### 2. Screen Identification
- Create a list of all screens that need HTML files
- Determine appropriate file naming convention
- Map screen relationships and navigation flow
- Identify shared components across screens

### 3. Design System Extraction
- Extract color schemes, typography, and spacing from description
- Identify interaction patterns and UI components
- Note accessibility requirements
- Determine responsive breakpoints and device targets

## Implementation Guidelines

### HTML File Structure Template
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="[Screen Purpose from Description]">
    <title>[Project Name] - [Screen Name]</title>
    <style>
        /* Embedded CSS based on design specifications */
        /* Include responsive design rules */
        /* Follow any mentioned design principles */
    </style>
</head>
<body>
    <div class="app-container">
        <!-- Screen-specific content based on mockup description -->
    </div>
    
    <script>
        /* Embedded JavaScript for interactions described in mockup */
        /* Include form validation, state management, etc. */
    </script>
</body>
</html>
```

### Universal Design Principles

#### Responsive Design:
- Extract device targets from description (mobile-first, desktop, etc.)
- Implement appropriate breakpoints
- Ensure touch-friendly interactions if mobile is mentioned
- Use flexible layouts (Grid/Flexbox)

#### Accessibility Standards:
- Semantic HTML structure
- ARIA labels for interactive elements
- Keyboard navigation support
- Color contrast compliance
- Focus indicators

#### Performance Optimization:
- Embedded CSS and JavaScript (no external dependencies unless specified)
- Optimized for fast loading
- Smooth interactions and transitions
- Efficient DOM structure

### Content Generation Rules

#### Text Content:
- Use placeholder content that matches the context described
- Generate realistic sample data for lists, forms, etc.
- Maintain consistency with the described user scenarios
- Include error messages and help text as specified

#### Visual Hierarchy:
- Implement any mentioned typography hierarchy
- Follow specified prominence rules (e.g., "food names prominent")
- Create clear visual separation between elements
- Use spacing and sizing based on description

#### Interactive Elements:
- Implement all interactions described in the mockup
- Add appropriate form validation
- Include state changes (hover, focus, active)
- Handle error states and edge cases

### File Organization

#### Naming Convention:
- Extract project name from description
- Use descriptive screen names
- Format: `[project-name]_[screen-name].html`
- Alternative: `[screen-name].html` if project name is long

#### Directory Structure:
```
ui_mockups/
├── [screen1].html
├── [screen2].html
├── [screen3].html
└── [additional-screens].html
```

### Screen-Specific Implementation

#### For Each Screen, Extract and Implement:

**Layout Elements:**
- Headers, navigation, content areas, footers
- Button placement and styling
- Form layouts and input styling
- Lists, cards, or other content structures

**Functionality:**
- Form submissions and validation
- Search functionality
- Navigation between states
- Data display and formatting

**States and Variations:**
- Loading states
- Empty states
- Error states
- Success states
- Different data scenarios

### Quality Standards

#### Every Generated HTML File Must Include:
- Complete standalone functionality
- Responsive design implementation
- Accessibility features
- Proper semantic HTML
- Embedded styling and interactions
- Error handling where applicable
- Performance optimization
- Cross-browser compatibility

#### Design Consistency:
- Shared color schemes and typography
- Consistent component styling
- Unified interaction patterns
- Coherent visual hierarchy

### Advanced Features

#### Smart Content Generation:
- Generate contextually appropriate sample data
- Create realistic user scenarios
- Include edge cases and error conditions
- Implement progressive enhancement

#### Design System Creation:
- Extract and implement design tokens from description
- Create reusable CSS classes
- Maintain consistency across screens
- Document design decisions in code comments

### Output Format

After generation, provide summary:
```markdown
## UI Screen Generation Complete

### Project: [Extracted Project Name]
### Generated Files:
- `[filename1].html` - [Screen Description]
- `[filename2].html` - [Screen Description]
- `[filename3].html` - [Screen Description]

### Key Features Implemented:
- [List of main features from description]
- [Design principles applied]
- [Responsive design approach]
- [Accessibility features]

### Design Specifications Applied:
- [Color scheme details]
- [Typography hierarchy]
- [Interactive patterns]
- [Performance optimizations]

### Testing Recommendations:
1. [Device-specific testing based on requirements]
2. [Functionality testing points]
3. [Accessibility validation steps]
4. [Performance verification]
```

### Error Handling

- If mockup description `designs/design.md` is missing or incomplete:
   - Ask the user to provide it
- If specific screens aren't clearly defined, extract them from user flows:
   - Ask the user to clarify or provide additional details
- If design specifications are missing, use modern web standards
- If technical requirements aren't specified, implement best practices