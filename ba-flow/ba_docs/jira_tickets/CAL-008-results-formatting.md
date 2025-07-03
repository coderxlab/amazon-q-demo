# 🔖 [Feature] Individual Result Entry Formatting
> CAL-008: Display each food-portion combination as separate result

---

## 🎯 Summary
As a user, I want to see each food item with its different portion sizes as separate entries so that I can easily compare calorie values for different serving sizes.

---

## 🧩 Background / Context
Food items often have multiple portion size options. Each combination should be displayed as a separate, clearly formatted entry for easy comparison and selection.

---

## ✅ Acceptance Criteria (Definition of Done)

- [ ] Each portion size displays as a separate result entry
- [ ] Format follows pattern: "Food Name - Portion Size - Calorie Count"
- [ ] Consistent formatting across all result entries
- [ ] Clear visual separation between entries
- [ ] Calorie values are properly formatted (e.g., "120 calories")
- [ ] Long food names are handled gracefully (truncation or wrapping)

**Given** "Apple" has portions "1 medium" and "1 cup sliced"  
**When** I search for "apple"  
**Then** I should see separate entries:
- "Apple - 1 medium - 95 calories"
- "Apple - 1 cup sliced - 57 calories"

---

## 📱 UI/UX Design
- Consistent typography and spacing
- Clear visual hierarchy (food name prominent)
- Proper alignment of calorie information
- Readable font sizes and colors

---

## 🧪 Technical Notes / Implementation Plan
- Create result item template with consistent structure
- Handle data mapping from JSON to display format
- Implement text truncation for long names
- Ensure proper spacing and alignment
- Consider responsive design for mobile devices

---

## 🔗 Dependencies
- CAL-004 (Results Display)
- CAL-005 (Text Search)

---

## 📅 Timeline / Priority
- **Priority**: Must Have
- **Sprint**: Sprint 1
- **Story Points**: 2

---

## 🧷 Related Tickets / Epic
- **Epic**: User Interface
- **Related**: CAL-009 (Results limitation)
- **Functional Requirement**: FR-008

---

## ✅ Best Practices Checklist
- [x] Title is concise and follows naming convention
- [x] Acceptance Criteria is testable and clear
- [x] Includes formatting specifications
- [x] Uses proper priority classification