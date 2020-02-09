//creates variables for inputted information
var firstName = prompt(`What is your first name?`)
var userState = prompt(`What is your state abbreviation?`)
var userTempature = Number(prompt(`What is the tempature in degrees Farenheit?`))

//string method for capitalization
var stateCapital = userState.toUpperCase()
var nameCapital = firstName.charAt(0).toUpperCase() + firstName.slice(1)

//creates an array holding all messages
var userInfo = [`${nameCapital}`,`${stateCapital}`,`${userTempature}`]
console.log(`${userInfo}`)

//outputs a specific message based on state and tempature recieved from user
switch(true) {
    case(stateCapital == 'NE' && userTempature < 32):
     NSB.MsgBox(`${nameCapital}, wear a warm coat, hat, scarf and gloves.`)
     break
    case(stateCapital == 'NE' && userTempature < 50 && userTempature > 32):
       NSB.MsgBox(`${nameCapital}, wear a warm coat but you wont need a hat, scarf or gloves. `)
      break
    case(stateCapital == 'FL' && userTempature < 50 && userTempature > 32):
       NSB.MsgBox(`${nameCapital}, wear your warmest coat, a warm hat, a scarf, and warm gloves. `)
      break
    case(stateCapital == 'FL' && userTempature < 70  && userTempature > 50):
       NSB.MsgBox(`${nameCapital}, wear a warm coat, hat and gloves. Maybe a scarf too. `)
      break
}