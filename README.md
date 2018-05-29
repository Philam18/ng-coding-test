# Answers to Technical Questions
## 1.	How long did you spend on the coding test? What would you add to your solution if you had more time? If you didn't spend much time on the coding test then use this as an opportunity to explain what you would add.

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

## 2.	What was the most useful feature that was added to the latest version of your chosen language? Please include a snippet of code that shows how you've used it.

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

## 3.	How would you track down a performance issue in production? Have you ever had to do this?

	To track down performance issues we would first need to assess the possible failure points in the application.
	In this case, the most probably source of failure is due to an overload of requests to the OpenTable API server.
	Because the application always makes a request to the API, even when user-input is invalid, this accumulates to a lot stress.

	We can mitigate much of this burden on the API server by implementing form-input data validation/processing before sending to the API,
	and because Angular (in this case) sits at the client-side, this balances that load onto the client.

	Another performance issue would be too many requests to OpenTable's API server (barring any considerations for invalid resource requests).
	In this case, we would need to implement a maximum number of requests to the server performable per X amount of time
	(E.g. the application can only make 1 request to the API every 10 minutes).

## 4.	How would you improve the API that you just used?

	The Open Table API at https://platform.opentable.com/documentation/ was used in this application to. Although JSON is lightweight and versatile,
	XML and other data formats should be an option as well.

	API content compression is performed with LZ4, which sacrifices decreased compression size for faster compression (thus transfer-speeds).
	There should be alternatives (like gZip for more balanced approaches) for clients running on low-end connections.

## 5.	Please describe yourself using JSON.
```
{
	"firstName" : "Philip",
	"lastName" : "Lam",
	"address" : {
		"city" : "Markham",
		"province" : "Ontario",
		"country" : "Canada"
	},
	"phone" : "647-878-7763",
	"email" : "philiplam818@gmail.com",
	"skills" : {
		"languages" : [
			"JavaScript", "TypeScript", "PHP", "Java", "HTML5 & CSS3", "SQL", "NoSQL"
		],
		"frameworks" : [
			"Angular", "NodeJS", "Bootstrap4", "Slim", "Twig"
		],
		"tools" : [
			"git", "TravisCI", "Selenium", "Karma", "Jasmine", "PivotalTracker", "ZenHub"
		]
	},
	"traits" : [
		"Critically and Analytically Minded", "Forward Thinking", "Curious and Enthusiastic at Learning", "Quick Learner", "Dependable and Reliable"
	],
	"interests" : [
		{
			"title" : "Computer Science",
			"description" : "As a graduate of the Computer Sciences, I love diving into the newest and latest developments in technology - hardware and software. I also
			enjoy taking on challenges for complicated programming tasks, as I tend to see them more as a learning experience, and it is these opportunities that allow
			me to grow."
		},
		{
			"title" : "Blockchain, Cryptocurrencies, and IoT",
			"description" : "As of late, I have invested most of my time researching blockchain, and more specifically Smart Contracts. I am currently developing
			an application/platform that allows users to trade and invest stock options through ERC 20 Smart Contracts ran off the Ehtereum blockchain, thereby
			removing the need for an intermediary, and introducing a trustless and decentralized financial trading system.
			My intention is to develop a deeper understanding of blockchain and smart contracts, and then proceed to research solutions for the emerging IoT industry".
		},
		{
			"title" : "Board Games",
			"description" : "I enjoy collecting and playing board games, ideally cooperative games, promoting working cooperatively with a team towards common goals."
		},
		{
			"title" : "Exercise",
			"description": "I wake up every morning at 4AM to exercise - my philosophy is that a strong mind coheres with a strong body"
		}
	]
}


```
