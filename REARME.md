# Meet App

The Meet app is a progressive web application with a serverless backend, offering offline access to upcoming events in specific cities. Its responsive design ensures seamless display across devices, delivering a superior user experience. Powered by Test-Driven Development, it prioritizes code quality and test coverage for optimal performance.

## User Stories

1. **Filter Events by City**: As a user, I want to filter events by city so that I can easily see a list of events taking place in a specific city.

2. **Show/Hide Event Details**: As a user, I want to have control over the amount of information displayed for each event, allowing me to show or hide event details as needed.

3. **Specify Number of Events**: As a user, I want to be able to specify the number of events I want to see, enabling me to quickly find and browse through a manageable list of events without feeling overwhelmed.

4. **Offline Access**: As a user, I want to be able to use the app when offline so that I can access the events list and related information at all times, even without an internet connection.

5. **Add Shortcut to Home Screen**: As a user, I want to be able to add a shortcut to the app on my device's home screen for easy access, enhancing convenience and usability.

6. **Visualize Event Details with Charts**: As a user, I want to see visual representations (charts) of event details so that I can better understand the data associated with events and make informed decisions.

7. **expands event details for more information**: As a user, I want to expand event details,So that I can access additional information such as event description, location, and time.

## Filter Events by City

### Scenario 1: When user hasn’t searched for a specific city, show upcoming events from all cities.

```gherkin
Given user hasn’t searched for any city;
When the user opens the app;
Then the user should see a list of upcoming events.
```

### Scenario 2: User should see a list of suggestions when they search for a city.

```gherkin
Given the main page is open;
When user starts typing in the city textbox;
Then the user should receive a list of cities (suggestions) that match what they’ve typed.
```

### Scenario 3: User can select a city from the suggested list.

```gherkin
Given user was typing “Berlin” in the city textbox AND the list of suggested cities is showing;
When the user selects a city (e.g., “Berlin, Germany”) from the list;
Then their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.
```

## Show/Hide Event Details

As a user, I should be able to show and hide event details, so that that I can get more details on an event only when needed.

### Scenario 1: When the details of an event are hidden by default.

```gherkin
Given the main page is open;
When the app displays a list of event;
Then the event details are hidden by default.
```

### Scenario 2: User clicks to show event details

```gherkin
Given the main page is open;
When the app displays a list of event;
Then the event details are hidden by default.
```

### Scenario 3: User clicks to hide event details

```gherkin
Given there is an event with displayed details;
When the user clicks on the event to hide details again;
Then the app should hide the details of the event.
```

## Specify Number of Events

As a user, I should be able to specify the number of events displayed, so that I can decide how many I want to see at once.

### Scenario 1: When the user hasn’t specified a number, 32 events are shown by default.

```gherkin
Given a user has not specified the number of events;
When the user views the events section;
Then 32 events are shown by default.
```

### Scenario 2: When the user specifies the number of events.

```gherkin
Given a user has specified the number of events;
When the user views the events section;
Then the app displays exactly as many events as the user specified.
```

```gherkin
Given user was typing “Berlin” in the city textbox AND the list of suggested cities is showing;
When  the user selects a city (e.g., “Berlin, Germany”) from the list;
Then their city should be changed to that city (i.e., “Berlin, Germany”) AND the user should receive a list of upcoming events in that city.
```

## Show/Hide Event Details

### Scenario 2: As a user, I should be able to show and hide event details, so that that I can get more details on an event only when needed.

```gherkin
Given the user is viewing the event list
When the user clicks on a particular event
Then the event details should be displayed

```

## Show/Hide Event Details

### Scenario 3: User toggles event details visibility

```gherkin
Given the user is viewing event details
When the user clicks on the toggle details button
Then the visibility of event details should change accordingly

```

### Scenario 4: User navigates back to event list

```gherkin
Given the user is viewing event details
When the user clicks on the back button
Then the user should be redirected to the event list

```

### Scenario 5: User views event details on mobile device

```gherkin
Given the user is viewing event details on a mobile device
When the user taps on a particular event
Then the event details should be displayed below the event list

```

### Scenario 6: User views event details on desktop device

```gherkin
Given the user is viewing event details on a desktop device
When the user clicks on a particular event
Then the event details should be displayed adjacent to the event list

```

### Scenario 7: User expands event details for more information

```gherkin
Given the user is viewing the event details
When the user wants to access additional information about the event
Then the user should be able to expand the event details

```

### The use of Serverless Functions

Serverless functions are utilized in the Meet app to handle backend operations without the need for maintaining server infrastructure. For example, when users request information about upcoming events or perform actions like filtering events by city, serverless functions respond to these requests by retrieving and processing data from the database. By leveraging serverless architecture, the app ensures scalability, cost-effectiveness, and efficient resource utilization, allowing seamless access to event information regardless of the user's location or network connectivity.
