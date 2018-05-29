Answers to Technical Questions
1.	How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

	This test took me 1 hour and 15 minutes to complete.

	Areas where I can improve on my solution are:
		- Improve variable typings to adhere to TypeScript standards
		- Check user-input from City input text box.
			- Front-end validation to check input prior to check for invalid characters, empty fields, null/empty characters, etc.
			- Back-end validation to clean input, check for injection attacking, scripts, overflow-attacks, etc.
		- Validate and check data received from OpenTableAPI request before updating the view
		- Include pagination in the event of large data-sets received during the OpenTableAPI
		- Include a response in the event of a non-city input value
		- Include responses to user-interactions: notifications for successful queries/input, updates on process of retrieving data from the OpenTableAPI
		- Cascading-Style Sheets

2.	What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

	Angular 6.0 uses TypeScript 2.7 as a dependency, which in turn allows for string representation inside enumerables.
	This allows for the modification of text - bound to the view-component - to be easily altered.  

	For example, in my application, I implemented an enumerable to model the set of states during an Http request:
		1. Unsent (initial)
		2. Sent and received successfully
		3. Error (likely a 400 BAD REQUEST as a result of invalid data-input)

	inside the component exists an enum 'State' that maps each state value to text, that will be displayed in the view  

	```
		enum State {
			off = "Enter a city to find restaurants in the area",
			on = "Found the following restaurants",
			error = "Could not find any restaurants. Please try again."
		}
	```
	Inside the view, displaying the current state is as easy as interpolating the 'State' variable
	```
		<h5>{{state}}</h5>
	```

3.	How would you track down a performance issue in production? Have you ever had to do this?

	To track down performance issues we would first need to assess the failure points in the code.
	The most identifiable source of failure is due to an overload of requests to the  


4.	How would you improve the API that you just used?

5.	Please describe yourself using JSON.
