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