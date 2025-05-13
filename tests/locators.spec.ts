// Locators - To identify the element on the page is known as locating an element.

// 1. css selector 
// 2. xpath
// 3. Playwright specific locators method - (getBy Locators)

// 1. css selectors

// DOM - Document object model - <label class="sdfdf">Email</lable>

/**
 *  CSS SELECTOR
 * 
 * 1. if "id" is present we can use the below css selestor for locators:
 * Syntax: - 
 * 
 * tagname#idvalue or #idvalue or [id='value']
 * 
 * Ex: - if tagname is input and id is username
 * input#username OR #username
 * 
 * 2. if "class" attribute is present we can use the below selectors:
 * 
 * tagname.classname or .classname or [class='classvalue'] // .classname.classname2.classname3
 * //.mr-sm-2.form-control
 * 
 * 
 * Ex: - if tagname is input and classname is user
 * input.user OR .user
 * 
 * 3. Write css based on any attribute:
 * 
 * [attribute = 'value'] - Ex: - [type='username'] // [value="Login"]
 * 
 * tagname[attribute = 'value'] [id='value]
 *  
 * 
 * 4. Write css traversing from parent to child:
 * 
 * parenttagename >> childtagname or parentLocator childLocator
 * 
 * Ex: - input >> div (OR) input div (by just provide a space between parent and child)
 * #userEmail-wrapper input
 * 
 * #form #username
 * 
 * 5. By writing the locators based on the text:
 * 
 * Ex: - ("text= Add to cart") // ("text= Email")
 * 
 * <h5>Email</h5> - ('text= Email')
 * 
 */

/*
// 2. xpath

//  / - Absolute xpath - /html/body/div/div/section/section/h2
// // - Relative xpath - //*[@id='login']/h2

// In xpath the index will starts from 1 

//tagname or *[@attribute = 'value']

1.// (//*[@attribute='value'])[1]

//*[@id='userEmail']

2. (//tagname[@attribute='value'])[1]

//input[@id='userEmail']

3. // Parent to child

//div[@class='form-group']/input[@id='userEmail']

4. //label[@for='email']/following-sibling::input[@id='userEmail']
  //label[@for='username']/following-sibling::input

  //h1[@class='text-center']/following-sibling::h5[1]

5. //input[@id='userEmail']/preceding-sibling::label

// <label for="username">Username</label> - precedingsibling to input tag
// <input type="text" name="username" id="username"> - followingsibling to label tag



// 6. //h2[text() = 'Test login']  -  //h5[text() = 'Student Registration Form']
// 7. //h2[contains(text(), 'Test')]

//Syntcx:
// * or tagName[contains(text(), 'Registration')]


*/

// 3. Playwright special methods for locators

// GetBy Locators in Playwright

/*

These are the recommended built-in locators.

page.getByRole() to locate by explicit and implicit accessibility attributes.

page.getByText('Student Registration Form', {exact: true}) to locate by text content.

page.getByLabel() to locate a form control by associated label's text.

page.getByPlaceholder('First Name')  - to locate an input by placeholder as an attribute.

page.getByAltText() to locate an element, usually image, by its text alternative.(alt as an attribute)

page.getByTitle() to locate an element by its title attribute.

page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured).


*/


//await expect(page.getByRole('heading', { name: 'Sign up', exact :true })).toBeVisible();

//await page.getByRole('checkbox', { name: 'Subscribe' }).check();

// await page.getByRole('button', { name: /submit/i }).click();