# CITY MATCHER

# Getting Started

- npm install --> will install all depnecies (BE & FE)
- npm run start --> inside FE: will run the FE in new browser (port 4200)
- node api/index.js --> inside BE: will run the local host
- Please make sure that redux chrome extension is installed or else reduxDev
  variable will fire an error

# Naming Conventions

- An issue we had with react is different names that developers come up with
  randomly. it happens sometimes that names can coflict, for example: getEntity
  => may refer to a selector, api service, or action!! For this reason I came up
  with a new naming convention and implemented it in this test. Use: Do ->
  Actions GET -> Get services Load -> Updating store with new entity Select ->
  Select from current state

# What has been done

- Eventhough I often like to design UI from scratch, but for time sake, and
  productivity I used UIKit ( a neat UI framework), I like it for its contrast
  and clarity


# What could have been done better

- All Optional requirements
- Using react router for pagination
- Better Design, and UI
- Handling ASYC action with visuals (like loading spinners)

# Exceptional cases

- It can happen that user search for a query and it takes long (assumption) and
  then user starts using another input, this assumption is very far from
  happening in our case (localhost) so I did not find it necessary to be handled

# Clean Up

- Removed Unnecessary connections (redux connect):No Problem with passing
  actions down (2 or 3 levels) without need to connect dumb components, and even
  without need to use Provider
- Added Do to all actions to avoid naming conflict between class method and
  action itself
- Added More components to reduce bulk of files
- Added Trailing Tag for each Component (there should be Component, Container,
  Screen .. etc)
- Added some missing typings
- Moved Header to Common Components
- All styles are seperated from component view files
- Added Jest
- Aded Enzyme
- Integrated Testing (Samples)
- Saga Test (In Progress)
