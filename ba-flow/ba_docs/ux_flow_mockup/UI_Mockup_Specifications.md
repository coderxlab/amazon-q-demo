# UI Mockup Specifications
## USDA Calorie Counter Web Application

**Document Version:** 1.0  
**Date:** June 30, 2025  
**Project:** USDA Calorie Counter Application  
**Document Type:** Detailed UI Mockup Specifications  

---

## Design System Foundation

### Color Palette
- **Primary Blue:** #1976D2 (Material Design Blue 700)
- **Primary Blue Light:** #42A5F5 (Material Design Blue 400)
- **Secondary Green:** #388E3C (Material Design Green 700)
- **Error Red:** #D32F2F (Material Design Red 700)
- **Warning Orange:** #F57C00 (Material Design Orange 700)
- **Background Gray:** #FAFAFA (Material Design Gray 50)
- **Surface White:** #FFFFFF
- **Text Primary:** #212121 (Material Design Gray 900)
- **Text Secondary:** #757575 (Material Design Gray 600)

### Typography
- **Primary Font:** Roboto (Material Design standard)
- **Heading 1:** 32px, Medium weight
- **Heading 2:** 24px, Medium weight
- **Body Text:** 16px, Regular weight
- **Button Text:** 14px, Medium weight
- **Caption Text:** 12px, Regular weight

### Spacing System
- **Base Unit:** 8px
- **Small:** 8px
- **Medium:** 16px
- **Large:** 24px
- **XL:** 32px
- **XXL:** 48px

---

## Screen 1: Main Search Interface

### Layout Structure
- **Header:** Fixed top navigation (64px height)
- **Main Content:** Centered container (max-width: 800px)
- **Footer:** Minimal footer with app info (48px height)

### UI Components

#### Header Section
- **App Logo/Title:** "USDA Calorie Counter"
  - Position: Top-left of header
  - Font: Roboto Medium, 20px
  - Color: Primary Blue (#1976D2)
  - Icon: Small USDA leaf icon (24px) next to text

#### Main Content Area
- **Container:** Centered card with subtle shadow
  - Background: Surface White (#FFFFFF)
  - Border-radius: 8px
  - Box-shadow: 0 2px 8px rgba(0,0,0,0.1)
  - Padding: 32px
  - Margin: 48px auto

- **Page Title:** "Find Food Calorie Information"
  - Font: Roboto Medium, 32px
  - Color: Text Primary (#212121)
  - Margin-bottom: 24px
  - Text-align: center

- **Search Input Field:**
  - Width: 100% (max 600px)
  - Height: 56px
  - Border: 2px solid #E0E0E0
  - Border-radius: 4px
  - Padding: 16px
  - Font: Roboto Regular, 16px
  - Placeholder: "Enter food name (e.g., apple, chicken breast)"
  - Focus state: Border color changes to Primary Blue
  - Label: "Food Name" (floating label style)

- **Button Container:** Flexbox row, gap 16px, margin-top 24px
  - **Search Button:**
    - Background: Primary Blue (#1976D2)
    - Color: White
    - Height: 48px
    - Padding: 0 32px
    - Border-radius: 4px
    - Font: Roboto Medium, 14px
    - Text: "SEARCH"
    - Hover: Background darkens to #1565C0
    - Icon: Search icon (20px) to the left of text

  - **Clear Button:**
    - Background: Transparent
    - Border: 2px solid #E0E0E0
    - Color: Text Secondary (#757575)
    - Height: 48px
    - Padding: 0 24px
    - Border-radius: 4px
    - Font: Roboto Medium, 14px
    - Text: "CLEAR"
    - Hover: Background #F5F5F5

- **Results Area Placeholder:**
  - Height: 200px (minimum)
  - Background: Background Gray (#FAFAFA)
  - Border: 1px dashed #E0E0E0
  - Border-radius: 4px
  - Margin-top: 32px
  - Center-aligned text: "Search results will appear here"
  - Color: Text Secondary (#757575)
  - Font: Roboto Regular, 16px

### Responsive Behavior
- **Desktop (>1024px):** Full layout as described
- **Tablet (768-1024px):** Container width adjusts, maintains padding
- **Mobile (<768px):** 
  - Header title may stack or truncate
  - Container padding reduces to 16px
  - Buttons stack vertically with full width

---

## Screen 2: Search Results Display

### Layout Structure
- **Header:** Same as Screen 1
- **Main Content:** Expanded container for results
- **Results Panel:** Scrollable area with individual result cards

### UI Components

#### Search Section (Persistent)
- **Search Input:** Same as Screen 1, populated with search terms
- **Button Container:** Same layout and styling
- **Results Counter:** 
  - Text: "Showing X results for 'search term'"
  - Font: Roboto Regular, 14px
  - Color: Text Secondary (#757575)
  - Margin: 16px 0

#### Results Panel
- **Container:**
  - Background: Surface White
  - Border-radius: 8px
  - Max-height: 600px
  - Overflow-y: auto
  - Box-shadow: 0 2px 4px rgba(0,0,0,0.1)

- **Individual Result Items:**
  - **Layout:** Horizontal card layout
  - **Height:** 72px per item
  - **Padding:** 16px
  - **Border-bottom:** 1px solid #E0E0E0 (except last item)
  - **Hover state:** Background #F5F5F5

  - **Food Name:**
    - Font: Roboto Medium, 16px
    - Color: Text Primary (#212121)
    - Line-height: 1.2

  - **Portion Size:**
    - Font: Roboto Regular, 14px
    - Color: Text Secondary (#757575)
    - Margin-top: 4px

  - **Calorie Information:**
    - Position: Right-aligned
    - Font: Roboto Medium, 18px
    - Color: Secondary Green (#388E3C)
    - Format: "XXX cal"

- **Scrollbar Styling:**
  - Width: 8px
  - Track: #F0F0F0
  - Thumb: #C0C0C0
  - Thumb hover: #A0A0A0

#### Load More Section (if applicable)
- **Load More Button:**
  - Width: 100%
  - Height: 48px
  - Background: Transparent
  - Border: 2px solid Primary Blue
  - Color: Primary Blue
  - Font: Roboto Medium, 14px
  - Text: "LOAD MORE RESULTS"
  - Margin-top: 16px
  - Hover: Background Primary Blue Light (#E3F2FD)

### Responsive Behavior
- **Mobile:** Result items stack with adjusted typography sizes
- **Tablet:** Maintains desktop layout with responsive container

---

## Screen 3: No Results Found

### Layout Structure
- **Header:** Same as previous screens
- **Main Content:** Centered empty state with guidance

### UI Components

#### Search Section
- **Same as Screen 2:** Search field populated with failed search terms
- **Buttons remain active:** User can immediately retry

#### Empty State Panel
- **Container:**
  - Background: Surface White
  - Border-radius: 8px
  - Padding: 48px 32px
  - Text-align: center
  - Box-shadow: 0 2px 4px rgba(0,0,0,0.1)

- **Empty State Icon:**
  - Icon: Search with "X" overlay (64px)
  - Color: Text Secondary (#757575)
  - Margin-bottom: 24px

- **Primary Message:**
  - Text: "No foods found matching '[search terms]'"
  - Font: Roboto Medium, 20px
  - Color: Text Primary (#212121)
  - Margin-bottom: 16px

- **Helpful Suggestions:**
  - **Subheading:** "Try these suggestions:"
    - Font: Roboto Medium, 16px
    - Color: Text Primary (#212121)
    - Margin-bottom: 12px

  - **Suggestion List:**
    - Unordered list with custom bullet points
    - Font: Roboto Regular, 14px
    - Color: Text Secondary (#757575)
    - Line-height: 1.6
    - Items:
      - "Use shorter, simpler terms"
      - "Check your spelling"
      - "Try common food names"
      - "Use generic terms (e.g., 'apple' instead of 'Granny Smith apple')"

- **Quick Action Buttons:**
  - **Clear Search Button:**
    - Background: Primary Blue
    - Color: White
    - Height: 40px
    - Padding: 0 24px
    - Border-radius: 4px
    - Font: Roboto Medium, 14px
    - Text: "START NEW SEARCH"
    - Margin-top: 24px

### Responsive Behavior
- **Mobile:** Padding reduces, icon size adjusts to 48px

---

## Screen 4: Error State Handling

### Layout Structure
- **Header:** Same as previous screens
- **Main Content:** Search interface with error overlay/banner

### UI Components

#### Error Banner
- **Container:**
  - Background: Error Red (#D32F2F)
  - Color: White
  - Padding: 16px 24px
  - Border-radius: 4px
  - Margin-bottom: 24px
  - Display: flex, align-items: center

- **Error Icon:**
  - Icon: Warning triangle (24px)
  - Color: White
  - Margin-right: 12px

- **Error Message:**
  - Font: Roboto Medium, 16px
  - Color: White
  - Flex: 1

- **Dismiss Button:**
  - Background: Transparent
  - Border: 1px solid White
  - Color: White
  - Height: 32px
  - Padding: 0 16px
  - Border-radius: 4px
  - Font: Roboto Medium, 12px
  - Text: "DISMISS"

#### Search Interface
- **Same as Screen 1:** All functionality remains available
- **Focus Management:** After error dismissal, focus returns to search input

#### Specific Error Messages
- **Empty Search Error:**
  - Message: "Please enter a food name to search"
  - Icon: Info icon instead of warning

- **System Error:**
  - Message: "Unable to search at this time. Please try again."
  - Additional action button: "RETRY" next to dismiss

- **Network Error:**
  - Message: "Connection problem. Check your internet and try again."
  - Background: Warning Orange (#F57C00)

### Responsive Behavior
- **Mobile:** Error banner text may wrap, buttons stack if needed

---

## Screen 5: Advanced Search Interface (Optional)

### Layout Structure
- **Header:** Same as previous screens
- **Main Content:** Enhanced search form with additional options

### UI Components

#### Enhanced Search Form
- **Primary Search Field:** Same as basic version

- **Advanced Options Toggle:**
  - **Toggle Button:**
    - Text: "Advanced Search Options"
    - Font: Roboto Medium, 14px
    - Color: Primary Blue
    - Background: Transparent
    - Icon: Expand/collapse chevron
    - Margin-top: 16px

- **Advanced Options Panel (Collapsible):**
  - **Background:** Background Gray (#FAFAFA)
  - **Padding:** 24px
  - **Border-radius:** 4px
  - **Margin-top:** 16px

  - **Wildcard Search Hint:**
    - **Label:** "Use wildcards for flexible searching"
    - **Font:** Roboto Medium, 14px
    - **Color:** Text Primary
    - **Margin-bottom:** 8px

  - **Example Text:**
    - **Content:** "Use * for partial matches (e.g., 'chick*' finds chicken, chickpeas)"
    - **Font:** Roboto Regular, 12px
    - **Color:** Text Secondary
    - **Background:** White
    - **Padding:** 12px
    - **Border-radius:** 4px
    - **Border:** 1px solid #E0E0E0

#### Search Results Enhancement
- **Pattern Matching Indicator:**
  - Small badge showing "Pattern: [search term]" when wildcards used
  - Background: Primary Blue Light
  - Color: White
  - Font: Roboto Medium, 12px
  - Padding: 4px 8px
  - Border-radius: 12px

### Responsive Behavior
- **Mobile:** Advanced options panel full width, examples may wrap

---

## Screen 6: Paginated Results Interface (Optional)

### Layout Structure
- **Header:** Same as previous screens
- **Main Content:** Results with pagination controls

### UI Components

#### Results Display
- **Same as Screen 2:** First 25 results shown initially

#### Pagination Controls
- **Container:**
  - **Background:** Surface White
  - **Padding:** 16px
  - **Border-top:** 1px solid #E0E0E0
  - **Display:** flex, justify-content: space-between, align-items: center

- **Results Info:**
  - **Text:** "Showing 1-25 of 150 results"
  - **Font:** Roboto Regular, 14px
  - **Color:** Text Secondary

- **Load More Button:**
  - **Background:** Primary Blue
  - **Color:** White
  - **Height:** 40px
  - **Padding:** 0 24px
  - **Border-radius:** 4px
  - **Font:** Roboto Medium, 14px
  - **Text:** "LOAD MORE (25)"
  - **Loading state:** Shows spinner, text changes to "LOADING..."

#### Alternative: Traditional Pagination
- **Page Numbers:**
  - **Container:** Horizontal list
  - **Current Page:** Background Primary Blue, Color White
  - **Other Pages:** Background Transparent, Color Primary Blue
  - **Size:** 40px x 40px squares
  - **Border-radius:** 4px
  - **Font:** Roboto Medium, 14px

- **Navigation Arrows:**
  - **Previous/Next:** Arrow icons with "Previous"/"Next" text
  - **Disabled state:** Gray color, not clickable

### Responsive Behavior
- **Mobile:** Pagination controls stack vertically, page numbers may be limited to show fewer options

---

## Accessibility Features

### Focus Management
- **Visible Focus Indicators:** 2px solid Primary Blue outline
- **Logical Tab Order:** Search field → Search button → Clear button → Results
- **Skip Links:** "Skip to results" link for screen readers

### Screen Reader Support
- **ARIA Labels:** All interactive elements properly labeled
- **Live Regions:** Results area announced when updated
- **Role Attributes:** Proper semantic roles for all components

### Keyboard Navigation
- **Enter Key:** Activates search from input field
- **Escape Key:** Dismisses error messages and modals
- **Arrow Keys:** Navigate through result items when focused

### Color and Contrast
- **WCAG AA Compliance:** All text meets 4.5:1 contrast ratio
- **Color Independence:** No information conveyed by color alone
- **High Contrast Mode:** Compatible with system high contrast settings

---

## Animation and Transitions

### Micro-Interactions
- **Button Hover:** 200ms ease transition for background color
- **Input Focus:** 150ms ease transition for border color
- **Results Loading:** Subtle fade-in animation (300ms)
- **Error Messages:** Slide-down animation (250ms ease-out)

### Loading States
- **Search Processing:** Subtle spinner in search button
- **Results Loading:** Skeleton loading cards before content appears
- **Load More:** Button shows loading spinner during fetch

### Performance Considerations
- **Animations:** Use CSS transforms for better performance
- **Reduced Motion:** Respect user's motion preferences
- **Progressive Enhancement:** Core functionality works without animations