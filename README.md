# Patient Enrollment Form

As a submission for the [Parsley Health coding challenge](https://github.com/parsleyhealth/engineering-recruiting-tests/blob/master/front-end-tests/patient-enrollment-form/multi-screen.md), this is a multi-step patient enrollment form that gathers standard personal, demographic, health, and medical data, and then outputs the collected data to the console upon form submission.

**FYI**: I spent much more than 4-6 hours on this. About 16. It wasn't where I wanted it to be after 6 (not that it is now, either), so I figured I might as well keep learning by working on it.

## Libraries Used

This repo was built using `create-react-app --template typescript`. In addition to the libraries that are built in with using `create-react-app`, this repo uses:

-   [Prettier](https://prettier.io/): code formatter
-   [Formik](https://formik.org/): open source form library for React and react native
-   [Yup](https://github.com/jquense/yup): JavaScript schema builder for value parsing and validation
-   [Ant Design](https://ant.design/docs/react/use-with-create-react-app): UI component library

## Running Locally

In the repo directory, you can run the following to start running the app in development mode.

```
yarn install
yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

## Testing

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the documentation on [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Test Outline

I didn't get around to writing tests, but here's the start of a test outline:

-   `<PatientEnrollmentForm />`

    -   renders correct first screen of form
    -   renders progress bar with correct step ordering
    -   renders progress bar with first step active and all other steps show not completed
    -   progresses through all steps on valid field inputs when user clicks Next button
    -   goes to previous step when user clicks Previous button
    -   shows previously inputted values when user goes to Previous steps
    -   at each step, marks only all previous steps completed in progress bar
    -   shows not-yet-completed status for progress bar step when user goes to previous step
    -   shows Previous button on all steps except the first
    -   shows Next button on all steps except the last
    -   only shows Submit button on last step
    -   does not call submit function when terms checkbox unchecked and Submit button clicked
    -   shows Required validation on terms checkbox when terms not accepted and Submit button clicked
    -   calls submit function when terms checkbox checked and Submit button clicked
    -   shows confirmation content when terms checkbox checked and Submit button clicked
    -   shows all steps completed in progress bar when terms checkbox checked and Submit button clicked

-   `<GeneralInfo />`
    -   renders all demographic inputs
    -   shows Required validation message when field has focus and then loses focus (for each required input)
    -   shows Required validation message when user starts typing in required field and then deletes text (for each required input)
    -   validation message goes away when user inputs valid input into field with previously invalid input (for each field with validation)
    -   shows correct validation message when going from one invalid input to another (for each field's validation check(s))
    -   tabs through fields in correct order
-   `<HealthConditions />`
    -   renders title and health conditions select field
    -   adds selected values to list when clicked and not previously selected
    -   removes selected values from list when clicked and previously selected
    -   clears all values from list when icon to clear input clicked
-   `<MedicalHistory />`
    -   renders all medical questions and input fields
    -   updates value when user selects an option from dropdown (for each select field)
    -   updates value when user inputs text (for each textarea field)
    -   tabs through fields in correct order
-   `<ReviewInfo />`
    -   renders all form fields except acceptedTerms in review section
    -   renders all form field values except acceptedTerms in review section
    -   renders terms and conditions and checkbox to accept
    -   terms checkbox shows checked when clicked and previously unchecked
    -   terms checkbox shows unchecked with Required validation message when clicked and previously checked
