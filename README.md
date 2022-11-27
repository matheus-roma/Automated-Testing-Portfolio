# Automated-Testing-Portfolio
### Portfolio repository to show test skills

## Test Plan

For this exercise I'll create test scenarios and test cases for this [form webpage](https://bit.ly/formwebpage).

| Test Case ID  | Test Scenario | Test Case | Pre-setup |Test Steps|Expected Results|
| ------------- |:-------------:| -----:| -----:|-----:| -----:|
| TC_001|Test submition of empty fields|Test submition with all fields empty|1. Refresh the page|1. Click on submit without fill any field|Shows "This field is required." in red bellow all the fields that weren't filled and also do not submit the form.|
| TC_002|Test submition of empty fields|Test submition with only the first field empty|1. Refresh the page|1. Click on the second field and fill it with "11102002" 2. Click on the third field and fill it with "Because it was my dream since I was a child." 3. Click on submit without fill any other field|Shows "This field is required." in red bellow all the fields that weren't filled and also do not submit the form.|
| TC_003|Test submition of empty fields|Test submition with only the second field empty|1. Refresh the page|1. Click on the first field and fill it with "Socrates" 2. Click on the third field and fill it with "Because it was my dream since I was a child." 3. Click on submit without fill any other field|Shows "This field is required." in red bellow all the fields that weren't filled and also do not submit the form.
