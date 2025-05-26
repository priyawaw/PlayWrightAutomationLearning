import {test , expect} from "@playwright/test"

/*test ('UI login page validation' , async function ({page}){

    // Launching url

    await page.goto("https://crmdev.lenorasoft.net/#/auth/login")

    // identify locators and passing values into input fields

    await page.getByPlaceholder("Enter your Email").fill('priyawaw@gmail.com')
    await expect(page.getByPlaceholder("Enter your Email")).toHaveValue('priyawaw@gmail.com')

    // pressSequentially used to enter value character by character

    await page.getByPlaceholder('Enter your Password').pressSequentially('Priya@8990')
    await expect(page.getByPlaceholder('Enter your Password')).toHaveValue('Priya@8990')

    await page.getByTitle('Sign in').click
 
})*/

test("UI Basics validation", async function({page}){
// goto("url") - This will help us in launching the url on the browser
    await page.waitForEvent
    await page.goto("https://demoqa.com/automation-practice-form")
    await page.waitForEvent
    // fill(string) - Set a value to the input field.
    const firstName = page.getByPlaceholder("First Name")
    await firstName.fill("Testing")
    await assertValue(firstName, "Testing")

    await page.getByPlaceholder("Last Name").fill("Playwright")
    await expect(page.getByPlaceholder("Last Name")).toHaveValue("Playwright")

    // pressSequentially(string) - Enter the text value inside the textbox character by character
    await page.getByPlaceholder("name@example.com").pressSequentially("email@example.com")
    await expect(page.getByPlaceholder("name@example.com")).toHaveValue("email@example.com")

    // check() - Will check the radio button or checkbox

})

async function assertValue(locator, message){
    await expect(locator).toHaveValue(message)
}