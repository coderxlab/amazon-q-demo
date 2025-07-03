# Client Requirements - Calorie Counter

## Project Overview

Getting and staying healthy requires a combination of mental balance, exercise, and nutrition. The goal of the Calorie Counter app is to help the user address nutritional needs by counting calories for various foods.

This app provides the number of calories based on the result of a user search for a type of food. The U.S. Department of Agriculture MyPyramid Food Raw Data will be searched to determine the calorie values.

Calorie Counter also provides you, the developer, with experience in transforming raw data into a format that will make it easier to search. In this case, the MyPyramid Food Raw Data file, which is an MS Excel spreadsheet, must be downloaded and transformed into a JSON file that will be easier to load and search at runtime (hint: take a look at the CSV file format).

## User Stories

### Core Features

**1. Data Preparation**
Developer will create a JSON file containing the food items to be searched. This will be loaded when the app is started.

**2. User Interface Panel**
User can see a panel containing a food description input text box, a 'Search' button, and a 'Clear' button.

**3. Search Input**
User can enter search terms into the food description input text box.

**4. Search Functionality**
User can click on the 'Search' button to search for the matching food.

**5. Empty Search Validation**
User can see a warning message if no search terms were entered.

**6. No Results Handling**
User can see a warning message if no matches were found.

**7. Results Display**
User can see a list of the matching food items, portion sizes, and calories in a scrollable results panel that is limited to 25 entries.

**8. Clear Functionality**
User can click on the 'Clear' button to clear the search terms and results list.

### Bonus Features

**9. Results Counter**
User can see the count of the number of matching food items adjacent to the results list.

**10. Wildcard Search**
User can use a wildcard character in search terms.

**11. Pagination/Load More**
User can see more than 25 entries from a search by clicking a Down icon button to add more matching food items to the search results list.

**12. Performance Optimization**
Developer will implement load the MyPyramid data into a database or a data structure other than an array for faster searching.

## Useful Links and Resources

- [MyPyramid Food Raw Data](https://catalog.data.gov/dataset/mypyramid-food-raw-data)

## Example Projects

- [Food Calculator](https://www.webmd.com/diet/healthtool-food-calorie-counter)

---

*Document Source: Confluence - Client Requirements - Calorie Counter*  
*Page ID: 688129*  
*Space: amazon-q-demo*