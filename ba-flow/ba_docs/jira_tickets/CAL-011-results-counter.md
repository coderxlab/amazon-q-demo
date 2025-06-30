# 🔖 [Feature] Search Results Counter Display
> CAL-011: Show count of matching results adjacent to results panel

---

## 🎯 Summary
As a user, I want to see how many food items match my search so that I understand the scope of results and can adjust my search if needed.

---

## 🧩 Background / Context
Providing a results count helps users understand whether their search was too broad or too narrow, enabling them to refine their search strategy.

---

## ✅ Acceptance Criteria (Definition of Done)

- [ ] Counter shows total number of matches found
- [ ] Counter updates with each new search
- [ ] Counter is positioned adjacent to results panel
- [ ] Counter displays "0 results" when no matches found
- [ ] Counter shows actual total, not just displayed count (e.g., "150 results" even if only 25 shown)
- [ ] Counter is accessible to screen readers

**Given** I search for "chicken" and get 45 matches  
**When** results are displayed  
**Then** I should see "45 results found" near the results panel

**Given** I search for "xyz" and get no matches  
**When** the no results message appears  
**Then** I should see "0 results found"

---

## 📱 UI/UX Design
- Small, unobtrusive text near results panel
- Consistent typography with other UI elements
- Clear visual association with results area
- Proper spacing and alignment

---

## 🧪 Technical Notes / Implementation Plan
- Calculate total matches before applying 25-result limit
- Update counter text with each search operation
- Handle singular/plural text appropriately ("1 result" vs "2 results")
- Position counter using CSS near results panel
- Ensure counter is announced by screen readers

---

## 🔗 Dependencies
- CAL-004 (Results Display)
- CAL-005 (Text Search)

---

## 📅 Timeline / Priority
- **Priority**: Should Have
- **Sprint**: Sprint 2
- **Story Points**: 1

---

## 🧷 Related Tickets / Epic
- **Epic**: Enhanced Features
- **Related**: CAL-009 (Results limitation)
- **Functional Requirement**: FR-011

---

## ✅ Best Practices Checklist
- [x] Title is concise and follows naming convention
- [x] Acceptance Criteria is testable and clear
- [x] Includes accessibility considerations
- [x] Uses proper priority classification