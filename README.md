REFERENCES:

https://www.digitalocean.com/community/tutorials/react-fancy-forms-reactstrap

https://gist.github.com/Thomas-Smyth/006fd507a7295f17a8473451938f9935

https://reactstrap.github.io/components/

https://www.cluemediator.com/react-select-async-dropdown-using-search-api

https://www.telerik.com/blogs/how-to-build-custom-forms-react-hooks


ISSUES I"VE RUN INTO:

https://github.com/reactstrap/reactstrap/issues/298
Resolved through adding tag={Link}
wasted ~5hrs before googling... fixed in 5 minutes. 

Utilised API call from weather app, adjusted for usage getting rankings....

a lot of difficulties converting the method in the lecture and tutorial work into the assignment wiht the fetch call... played around with it but wasn't totally confident with continuing to use it throughout the application, wanted to keep the fetch approach consistent across the app

while coding the registration page, i started to notice the ill-effects of non-modularised code. the body of code started to become much harder to track compared to pages that had already been split into individual components (eg - the navbar), but due to some difficulties with a weird importing issue I was having early on, continued to develop it as one file with the goal of modularising after the fact

For the register and login route, there's something I read up on about properly destructuring the components so that the URL parameters can be displayed properly (https://www.digitalocean.com/community/tutorials/how-to-handle-routing-in-react-apps-with-react-router)

//     useEffect(() => {
//         const url = `http://131.181.190.87:3000/rankings`;
//         fetch(url)
//             .then(res => res.json())
//             .then(data => data.rankings)
//   (Never recognised rankings...)          .then(rankings =>
//                 rankings.map(ranklist => {
//                     return {
//                         rank: ranklist.rank,
//                         country: ranklist.country,
//                         score: ranklist.score,
//                         year: ranklist.year
//                     };
//                 })
//             )
//             .then(ranklist => setRowData(ranklist));
//     })
// }



questions:
NEW: 

functional
-clear error message after display? or on close of element holding the error message?
update to error message always one submit behind what's actually happening due to previous message not being cleared (state not being empty) first..
- 

Aesthetic Questions:
- conditional display of elements while keeping the login modal open to display a login error. 
- 2sec success timer to delay the login modal
- conditional message display to acknowledge user is logged in, first plain 'you're logged in' msg, then upgrade to display the logged in email via decoding the JWT.
- conditional display of Login (if not logged in) and Logout (if logged in) buttons in the nav bar.



General:
- can i apply styling via bootstrap on index.html?
- how would one go about getting the bg colour to cover the whole background otherwise in reactstrap?
- is it camel case for basic functions and uppercase for components or class level?
- i've had a lot of difficulties with properly importing into files... any tips or things to look out for? The import requests have looked 
exactly the same and the files have their export statements declared..

LOGIN:

- is it a case of adding a POST request to the submit button and hold the confirmed login state globablly somehow? 
- any resources to read up on on that one? 

REGISTER:
- how hard would it be to convert this to a functional based display?

nation.js/api.js/home.jsx:
- why isn't the tutorial example working? where is it breaking down? 

search.js + rankings:
- why is the drop down menu white?
- its loading and selecting different countries but just no text....

Rankings: 
- make the grid display responsive to the number of queries >>> eg - 5 - 15 - 30 depending on the volume of results? 