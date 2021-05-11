REFERENCES:

https://www.digitalocean.com/community/tutorials/react-fancy-forms-reactstrap

https://gist.github.com/Thomas-Smyth/006fd507a7295f17a8473451938f9935

https://reactstrap.github.io/components/

https://www.cluemediator.com/react-select-async-dropdown-using-search-api


ISSUES I"VE RUN INTO:

https://github.com/reactstrap/reactstrap/issues/298
Resolved through adding tag={Link}
wasted ~5hrs before googling... fixed in 5 minutes. 

Utilised API call from weather app, adjusted for usage getting rankings....

a lot of difficulties converting the method in the lecture and tutorial work into the assignment wiht the fetch call... probably a simple fix but found axios a better approach

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