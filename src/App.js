// import { useEffect, useState } from 'react';
// import './App.css';
// import data from "./data.json";

// function App() {
//   const [first, setfirst] = useState([]);
//   const ConditionsFormat = {
//     psfRange: "Currency",
//     populationRange: "Number",
//     rentalPerStoreRange: "Percentage",
//     medianHouseHoldRange: "Currency",
//     medianPropertyValuePerStoreRange: "Currency",
//     averageRentalCostPerStoreRange: "Currency",
//     storeMarket: "Number",
//     reits: "Percentage",
//     sqftCapita: "Decimal",
//     markScoreCard: "Number",
//   };

//   const formatValue = (value, valueType) => {
//     // let type = valueType ?? excelData.valueType;
//     if (valueType === 'Number') return new Intl.NumberFormat().format(value);
//     else if (valueType === 'Decimal') return new Intl.NumberFormat().format(value.toFixed(2));
//     else if (valueType === 'Percentage') return value.toString().concat("%");
//     else if (valueType === 'Currency') return (new Intl.NumberFormat().format(value.toFixed(2)));
//   }


//   useEffect(() => {
//     let filterData = data.filter((dtd) => {
//       let filData = {};
//       let ftDup = { ...dtd };
//       Object.keys(ftDup).map((a, b, c) => {
//         if (!Object.keys(filData).includes(a.replace(/From|To/g, ''))) {
//           let ft = c.filter(val => val.replace(/From|To/g, '') === a.replace(/From|To/g, ''));
//           // console.log(ft);
//           if (ftDup[ft[0]] && ftDup[ft[1]]) {
//             let dtName = ft[0].replace(/From|To/g, '');
//             let minValue = formatValue(Number(ftDup[ft[0]]), ConditionsFormat[dtName]);
//             let maxValue = formatValue(Number(ftDup[ft[1]]), ConditionsFormat[dtName]);
//             let dtVal = minValue === maxValue ? dtName + ":" + minValue : dtName + ': Between ' + (ft[0].endsWith('From') ? (minValue + ' to ' + maxValue) : (maxValue + ' to ' + minValue));
//             filData[dtName] = dtVal;
//             // console.log(filData[dtName]);
//           }
//           else if (ft[0].endsWith("From") || ft[0].endsWith("To")) {
//             let dtName = ft[0].replace(/From|To/g, '');
//             let indx = ftDup[ft[0]] ? 0 : 1;
//             // // console.log(indx);
//             // console.log(ft[indx].endsWith('From'))
//             // console.log(ftDup[ft[0]]);
//             // console.log(ft[0].endsWith("From"));
//             // console.log(ft[0]);
//             // // console.log(Number(ftDup[ft[indx]]));
//             let curValue = formatValue(Number(ftDup[ft[indx]]), ConditionsFormat[dtName]);
//             // let minValue = formatValue(Number(ftDup[ft[0]]), ConditionsFormat[dtName]);
//             // let maxValue = formatValue(Number(ftDup[ft[1]]), ConditionsFormat[dtName]);
//             // let dtVal = ft[indx].endsWith('From') ? ('Greater than ' + curValue) : ('Less than ' + curValue);
//             let dtVal = ft[0].endsWith('From') ? (dtName + ': Greater than ' + curValue) : (dtName + ': Less than ' + curValue);
//             filData[dtName] = dtVal;
//             // console.log(dtVal);
//           }
//           if (ft[1]) delete ftDup[ft[1]];
//           // console.log(ft.concat(filData));
//           // console.log(data);
//           // console.log(ftDup);
//           // console.log(dtd);
//         }
//         setfirst(filData);
//       });
//     })
//   }, [])


//   // setfirst(data.concat(filData));
//   // console.log(first);
//   // console.log(data.concat(filData));
//   //   if (data) {
//   //     let ftDup = { ...data };
//   //     let filData = {};
//   //     Object.keys(ftDup).map((a, b, c) => {
//   //         if (!Object.keys(filData).includes(a.replace(/From|To/g, ''))) {
//   //           let ft = c.filter(val => val.replace(/From|To/g, '') === a.replace(/From|To/g, ''));
//   //           console.log(ft);
//   //             if (ftDup[ft[0]] && ftDup[ft[1]]) {
//   //                 let dtName = ft[0].replace(/From|To/g, '');
//   //                 let minValue = formatValue(Number(ftDup[ft[0]]), ConditionsFormat[dtName]);
//   //                 let maxValue = formatValue(Number(ftDup[ft[1]]), ConditionsFormat[dtName]);
//   //                 let dtVal = minValue === maxValue ? minValue : 'Between ' + (ft[0].endsWith('From') ? (minValue + ' to ' + maxValue) : (maxValue + ' to ' + minValue));
//   //                 filData[dtName] = dtVal;
//   //             }
//   //             else if (ftDup[ft[0]] || ftDup[ft[1]]) {
//   //                 let dtName = ft[0].replace(/From|To/g, '');
//   //                 let indx = ftDup[ft[0]] ? 0 : 1;
//   //                 let curValue = formatValue(Number(ftDup[ft[indx]]), ConditionsFormat[dtName]);
//   //                 let dtVal = ft[indx].endsWith('From') ? ('Greater than ' + curValue) : ('Less than ' + curValue);
//   //                 filData[dtName] = dtVal;
//   //             }
//   //             if (ft[1]) delete ftDup[ft[1]];
//   //         }
//   //     });
//   // } 

//   // let filterData = data.filter((dtd) => {
//   //   let fr = Object.keys(dtd);
//   //   console.log(dtd.psfRangeFrom);
//   //   fr.forEach((key, index) => {
//   //     // console.log(`${key}: ${dtd[key]}`);
//   //     // if(key.endsWith("From"||"To")){
//   //       // if(dtd[key.endsWith("From"||"To")]){
//   //         // if(dtd[key.endsWith("From")] === dtd[key.endsWith("To")]){
//   //           let dtName1 = key.endsWith("From") ? key.replace(/From/g, '') : null;
//   //           let dtName2 = key.endsWith("To") ? key.replace(/To/g, '') : null;
//   //           let minValue = formatValue(Number(dtd[key]), ConditionsFormat[dtName1]);
//   //           let maxValue = formatValue(Number(dtd[key]), ConditionsFormat[dtName2]);
//   //           // console.log(dtName2);
//   //           // console.log(key.endsWith("To"));
//   //           // console.log(dtName2);
//   //           // console.log(maxValue);
//   //           // let minMaxValue = formatValue(Number(dtd[key]), ConditionsFormat[key.endsWith("From")]);
//   //           // let minValue = formatValue(Number(ftDup[ft[0]]), ConditionsFormat[dtName]);
//   //           // let maxValue = formatValue(Number(ftDup[ft[1]]), ConditionsFormat[dtName]);
//   //           // let equalNum = `${key}: ${dtd[key]}`
//   //           // console.log(dtName);
//   //           let dtVal1 = minValue === maxValue ? minValue : 'Between ' + (key.endsWith('From') ? (minValue + ' to ' + maxValue) : (maxValue + ' to ' + minValue));
//   //           // filData[dtName] = dtVal;
//   //         // console.log(dtVal1);
//   //         // console.log(dtName);
//   //       // }
//   //       // let conNum = parseFloat(dtd[key]);
//   //       // console.log(conNum);
//   //       // console.log(typeof(conNum));
//   //     // }
//   //   });
//   //   // if(fr.en)

//   //   // console.log(typeof(dtd));
//   // })
//   // console.log(filterData);
//   let CONFIGRegion_Id = "Regions.UK";
//   let CONFIGCurrency_Symbol = "$";
//   return (
//     <div className="App">
//       <table>
//         <tr>
//           <th>Name</th>
//           <th>Age</th>
//           <th>Gender</th>
//         </tr>
//         {data.map((strdata, key) => {
//           return (
//             <tr key={key}>
//               <td>{strdata.createdDate ? (strdata.createdDate) : null}</td>
//               <td>{parseFloat(strdata.searchTypeID) === 1 ? "Market Conditions" : parseFloat(strdata.searchTypeID) === 2 ? "Market Rank" : ""}</td>
//               <td>{strdata.searchName ? strdata.searchName : null}</td>
//               <td>{strdata.resultsCount ? strdata.resultsCount : null}</td>
//               {parseFloat(strdata.searchTypeID) === 1 || 0 ?
//                 <td>
//                   {strdata.stateFullName ? <span style={{ display: "block" }}>State/Region: {strdata.stateFullName}</span> : strdata.countryName ? <span style={{ display: "block" }}>{CONFIGRegion_Id !== "Regions.UK" ? "State/Region" : "Country"}: {strdata.countryName}</span> : null}
//                   {/* {console.log(typeof(first))} */}
//                   {first.length > 0 && first.map((dtd, k) => {
//                     return(
//                       <span>
//                         <p>hello</p>
//                       {console.log("dtd")}
//                       </span>
//                     )
//                   })}
//                   {/* {(!Number.isNaN(Number.parseFloat(strdata.psfRangeFrom))) && (!Number.isNaN(Number.parseFloat(strdata.psfRangeTo))) && parseFloat(strdata.psfRangeFrom) === parseFloat(strdata.psfRangeTo) ? <span style={{ display: "block" }}>Price per Square Foot: {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.psfRangeTo).toFixed(2))}</span> : (!Number.isNaN(Number.parseFloat(strdata.psfRangeFrom))) && (!Number.isNaN(Number.parseFloat(strdata.psfRangeTo))) ? <span style={{ display: "block" }}>Price per Square Foot: Between {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.psfRangeFrom).toFixed(2))} to {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.psfRangeTo).toFixed(2))}</span> : (!Number.isNaN(Number.parseFloat(strdata.psfRangeFrom))) ? <span style={{ display: "block" }}>Price per Square Foot: Greater than {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.psfRangeFrom).toFixed(2))}</span> : (!Number.isNaN(Number.parseFloat(strdata.psfRangeTo))) ? <span style={{ display: "block" }}>Price per Square Foot: Less than {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.psfRangeTo).toFixed(2))}</span> : null}
//                   {(!Number.isNaN(Number.parseFloat(strdata.populationRangeFrom))) && (!Number.isNaN(Number.parseFloat(strdata.populationRangeTo))) && parseFloat(strdata.populationRangeFrom) === parseFloat(strdata.populationRangeTo) ? <span style={{ display: "block" }}>Population: {strdata.populationRangeFrom}</span> : (!Number.isNaN(Number.parseFloat(strdata.populationRangeFrom))) && (!Number.isNaN(Number.parseFloat(strdata.populationRangeTo))) ? <span style={{ display: "block" }}>Population: Between {strdata.populationRangeFrom} to {strdata.populationRangeTo}</span> : (!Number.isNaN(Number.parseFloat(strdata.populationRangeFrom))) ? <span style={{ display: "block" }}>Population: Greater than {strdata.populationRangeFrom}</span> : (!Number.isNaN(Number.parseFloat(strdata.populationRangeTo))) ? <span style={{ display: "block" }}>Population: Less than {strdata.populationRangeTo}</span> : null}
//                   {(!Number.isNaN(Number.parseFloat(strdata.rentalPerStoreRangeFrom))) && (!Number.isNaN(Number.parseFloat(strdata.rentalPerStoreRangeTo))) && parseFloat(strdata.rentalPerStoreRangeFrom) === parseFloat(strdata.rentalPerStoreRangeTo) ? <span style={{ display: "block" }}>Rental Properties: {strdata.rentalPerStoreRangeFrom}%</span> : (!Number.isNaN(Number.parseFloat(strdata.rentalPerStoreRangeFrom))) && (!Number.isNaN(Number.parseFloat(strdata.rentalPerStoreRangeTo))) ? <span style={{ display: "block" }}>Rental Properties: Between {strdata.rentalPerStoreRangeFrom}% to {strdata.rentalPerStoreRangeTo}%</span> : (!Number.isNaN(Number.parseFloat(strdata.rentalPerStoreRangeFrom))) ? <span style={{ display: "block" }}>Rental Properties: Greater than {strdata.rentalPerStoreRangeFrom}%</span> : (!Number.isNaN(Number.parseFloat(strdata.rentalPerStoreRangeTo))) ? <span style={{ display: "block" }}>Rental Properties: Less than {strdata.rentalPerStoreRangeTo}%</span> : null}
//                   {(!Number.isNaN(Number.parseFloat(strdata.medianHouseHoldRangeFrom))) && (!Number.isNaN(Number.parseFloat(strdata.medianHouseHoldRangeTo))) && parseFloat(strdata.medianHouseHoldRangeFrom) === parseFloat(strdata.medianHouseHoldRangeTo) ? <span style={{ display: "block" }}>Median Household Income: {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.medianHouseHoldRangeFrom).toFixed(2))}</span> : (!Number.isNaN(Number.parseFloat(strdata.medianHouseHoldRangeFrom))) && (!Number.isNaN(Number.parseFloat(strdata.medianHouseHoldRangeTo))) ? <span style={{ display: "block" }}>Median Household Income: Between {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.medianHouseHoldRangeFrom).toFixed(2))} to {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.medianHouseHoldRangeTo).toFixed(2))}</span> : (!Number.isNaN(Number.parseFloat(strdata.medianHouseHoldRangeFrom))) ? <span style={{ display: "block" }}>Median Household Income: Greater than {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.medianHouseHoldRangeFrom).toFixed(2))}</span> : (!Number.isNaN(Number.parseFloat(strdata.medianHouseHoldRangeTo))) ? <span style={{ display: "block" }}>Median Household Income: Less than {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.medianHouseHoldRangeTo).toFixed(2))}</span> : null}
//                   {(!Number.isNaN(Number.parseFloat(strdata.medianPropertyValuePerStoreRangeFrom))) && (!Number.isNaN(Number.parseFloat(strdata.medianPropertyValuePerStoreRangeTo))) && parseFloat(strdata.medianPropertyValuePerStoreRangeFrom) === parseFloat(strdata.medianPropertyValuePerStoreRangeTo) ? <span style={{ display: "block" }}>Median Property Value: {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.medianPropertyValuePerStoreRangeFrom).toFixed(2))}</span> : (!Number.isNaN(Number.parseFloat(strdata.medianPropertyValuePerStoreRangeFrom))) && (!Number.isNaN(Number.parseFloat(strdata.medianPropertyValuePerStoreRangeTo))) ? <span style={{ display: "block" }}>Median Property Value: Between {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.medianPropertyValuePerStoreRangeFrom).toFixed(2))} to {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.medianPropertyValuePerStoreRangeTo).toFixed(2))}</span> : (!Number.isNaN(Number.parseFloat(strdata.medianPropertyValuePerStoreRangeFrom))) ? <span style={{ display: "block" }}>Median Property Value: Greater than {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.medianPropertyValuePerStoreRangeFrom).toFixed(2))}</span> : (!Number.isNaN(Number.parseFloat(strdata.medianPropertyValuePerStoreRangeTo))) ? <span style={{ display: "block" }}>Median Property Value: Less than {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.medianPropertyValuePerStoreRangeTo).toFixed(2))}</span> : null}
//                   {(!Number.isNaN(Number.parseFloat(strdata.averageRentalCostPerStoreRangeFrom))) && (!Number.isNaN(Number.parseFloat(strdata.averageRentalCostPerStoreRangeTo))) && parseFloat(strdata.averageRentalCostPerStoreRangeFrom) === parseFloat(strdata.averageRentalCostPerStoreRangeTo) ? <span style={{ display: "block" }}>Average Rental Cost: {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.averageRentalCostPerStoreRangeFrom).toFixed(2))}</span> : (!Number.isNaN(Number.parseFloat(strdata.averageRentalCostPerStoreRangeFrom))) && (!Number.isNaN(Number.parseFloat(strdata.averageRentalCostPerStoreRangeTo))) ? <span style={{ display: "block" }}>Average Rental Cost: Between {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.averageRentalCostPerStoreRangeFrom).toFixed(2))} to {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.averageRentalCostPerStoreRangeTo).toFixed(2))}</span> : (!Number.isNaN(Number.parseFloat(strdata.averageRentalCostPerStoreRangeFrom))) ? <span style={{ display: "block" }}>Average Rental Cost: Greater than {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.averageRentalCostPerStoreRangeFrom).toFixed(2))}</span> : (!Number.isNaN(Number.parseFloat(strdata.averageRentalCostPerStoreRangeTo))) ? <span style={{ display: "block" }}>Average Rental Cost: Less than {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.averageRentalCostPerStoreRangeTo).toFixed(2))}</span> : null}
//                   {(!Number.isNaN(Number.parseFloat(strdata.storeMarketFrom))) && (!Number.isNaN(Number.parseFloat(strdata.storeMarketTo))) && parseFloat(strdata.storeMarketFrom) === parseFloat(strdata.storeMarketTo) ? <span style={{ display: "block" }}>Stores in market: {strdata.storeMarketFrom}</span> : (!Number.isNaN(Number.parseFloat(strdata.storeMarketFrom))) && (!Number.isNaN(Number.parseFloat(strdata.storeMarketTo))) ? <span style={{ display: "block" }}>Stores in market: Between {strdata.storeMarketFrom} to {strdata.storeMarketTo}</span> : (!Number.isNaN(Number.parseFloat(strdata.storeMarketFrom))) ? <span style={{ display: "block" }}>Stores in market: Greater than {strdata.storeMarketFrom}</span> : (!Number.isNaN(Number.parseFloat(strdata.storeMarketTo))) ? <span style={{ display: "block" }}>Stores in market: Less than {strdata.storeMarketTo}</span> : null}
//                   {(!Number.isNaN(Number.parseFloat(strdata.reitsFrom))) && (!Number.isNaN(Number.parseFloat(strdata.reitsTo))) && parseFloat(strdata.reitsFrom) === parseFloat(strdata.reitsTo) ? <span style={{ display: "block" }}>REITS: {strdata.reitsFrom}%</span> : (!Number.isNaN(Number.parseFloat(strdata.reitsFrom))) && (!Number.isNaN(Number.parseFloat(strdata.reitsTo))) ? <span style={{ display: "block" }}>REITS: Between {strdata.reitsFrom}% to {strdata.reitsTo}%</span> : (!Number.isNaN(Number.parseFloat(strdata.reitsFrom))) ? <span style={{ display: "block" }}>REITS: Greater than {strdata.reitsFrom}%</span> : (!Number.isNaN(Number.parseFloat(strdata.reitsTo))) ? <span style={{ display: "block" }}>REITS: Less than {strdata.reitsTo}%</span> : null}
//                   {(!Number.isNaN(Number.parseFloat(strdata.sqftCapitaFrom))) && (!Number.isNaN(Number.parseFloat(strdata.sqftCapitaTo))) && parseFloat(strdata.sqftCapitaFrom) === parseFloat(strdata.sqftCapitaTo) ? <span style={{ display: "block" }}>Sq Ft per Capita: {new Intl.NumberFormat().format(parseFloat(strdata.sqftCapitaFrom).toFixed(2))}</span> : (!Number.isNaN(Number.parseFloat(strdata.sqftCapitaFrom))) && (!Number.isNaN(Number.parseFloat(strdata.sqftCapitaTo))) ? <span style={{ display: "block" }}>Sq Ft per Capita: Between {new Intl.NumberFormat().format(parseFloat(strdata.sqftCapitaFrom).toFixed(2))} to {new Intl.NumberFormat().format(parseFloat(strdata.sqftCapitaTo).toFixed(2))}</span> : (!Number.isNaN(Number.parseFloat(strdata.sqftCapitaFrom))) ? <span style={{ display: "block" }}>Sq Ft per Capita: Greater than {new Intl.NumberFormat().format(parseFloat(strdata.sqftCapitaFrom).toFixed(2))}</span> : (!Number.isNaN(Number.parseFloat(strdata.sqftCapitaTo))) ? <span style={{ display: "block" }}>Sq Ft per Capita: Less than {new Intl.NumberFormat().format(parseFloat(strdata.sqftCapitaTo).toFixed(2))}</span> : null}
//                   {(!Number.isNaN(Number.parseFloat(strdata.markScoreCardFrom))) && (!Number.isNaN(Number.parseFloat(strdata.markScoreCardTo))) && parseFloat(strdata.markScoreCardFrom) === parseFloat(strdata.markScoreCardTo) ? <span style={{ display: "block" }}>Average Marketing Scorecard: {strdata.markScoreCardFrom}</span> : (!Number.isNaN(Number.parseFloat(strdata.markScoreCardFrom)) && (parseFloat(strdata.markScoreCardFrom))) && (!Number.isNaN(Number.parseFloat(strdata.markScoreCardTo)) && (parseFloat(strdata.markScoreCardTo))) ? <span style={{ display: "block" }}>Average Marketing Scorecard: Between {strdata.markScoreCardFrom} to {strdata.markScoreCardTo}</span> : (!Number.isNaN(Number.parseFloat(strdata.markScoreCardFrom)) && (parseFloat(strdata.markScoreCardFrom))) ? <span style={{ display: "block" }}>Average Marketing Scorecard: Greater than {strdata.markScoreCardFrom}</span> : (!Number.isNaN(Number.parseFloat(strdata.markScoreCardTo)) && (parseFloat(strdata.markScoreCardTo))) ? <span style={{ display: "block" }}>Average Marketing Scorecard: Less than {strdata.markScoreCardTo}</span> : null} */}
//                 </td>
//                 :
//                 <td>
//                   {strdata.stateFullName ? <span style={{ display: "block" }}>State/Region: {strdata.stateFullName}</span> : strdata.countryName ? <span style={{ display: "block" }}>{CONFIGRegion_Id !== "Regions.UK" ? "State/Region" : "Country"}: {strdata.countryName}</span> : null}
//                   {strdata.categoryName ? <span style={{ display: "block" }}>Category: {strdata.categoryName}</span> : null}
//                   {strdata.rankName ? <span style={{ display: "block" }}>Rank: {strdata.rankName}</span> : null}
//                 </td>
//               }
//             </tr>
//           )
//         })}
//       </table>
//     </div>
//   );
// }

// export default App;


// import React from 'react'
// import data from "./data.json";

// console.log(data);
// const App = () => {
//   let CONFIGRegion_Id = "Regions.UK";
//   let CONFIGCurrency_Symbol = "$";
//   return (
//     <div>
//       <table>
//         <tr>
//           <th>Name</th>
//           <th>Age</th>
//           <th>Gender</th>
//         </tr>
//         {data.map((strdata, key) => {
//           return (
//             <tr key={key}>
//               <td>{strdata.createdDate ? (strdata.createdDate) : null}</td>
//               <td>{parseFloat(strdata.searchTypeID) === 1 ? "Market Conditions" : parseFloat(strdata.searchTypeID) === 2 ? "Market Rank" : ""}</td>
//               <td>{strdata.searchName ? strdata.searchName : null}</td>
//               <td>{strdata.resultsCount ? strdata.resultsCount : null}</td>
//               {/* <td>{val.name}</td>
//               <td>{val.age}</td>
//               <td>{val.gender}</td> */}
//               {parseFloat(strdata.searchTypeID) === 1 || 0 ?
//                 <td>
//                   {strdata.stateFullName ? <span style={{ display: "block" }}>State/Region: {strdata.stateFullName}</span> : strdata.countryName ? <span style={{ display: "block" }}>{CONFIGRegion_Id !== "Regions.UK" ? "State/Region" : "Country"}: {strdata.countryName}</span> : null}
//                   {console.log(Object.keys(strdata))}
//                   {/* {(!Number.isNaN(Number.parseFloat(strdata.psfRangeFrom))) && (!Number.isNaN(Number.parseFloat(strdata.psfRangeTo))) && parseFloat(strdata.psfRangeFrom) === parseFloat(strdata.psfRangeTo) ? <span style={{ display: "block" }}>Price per Square Foot: {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.psfRangeTo).toFixed(2))}</span> : (!Number.isNaN(Number.parseFloat(strdata.psfRangeFrom))) && (!Number.isNaN(Number.parseFloat(strdata.psfRangeTo))) ? <span style={{ display: "block" }}>Price per Square Foot: Between {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.psfRangeFrom).toFixed(2))} to {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.psfRangeTo).toFixed(2))}</span> : (!Number.isNaN(Number.parseFloat(strdata.psfRangeFrom))) ? <span style={{ display: "block" }}>Price per Square Foot: Greater than {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.psfRangeFrom).toFixed(2))}</span> : (!Number.isNaN(Number.parseFloat(strdata.psfRangeTo))) ? <span style={{ display: "block" }}>Price per Square Foot: Less than {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.psfRangeTo).toFixed(2))}</span> : null}
//                   {(!Number.isNaN(Number.parseFloat(strdata.populationRangeFrom))) && (!Number.isNaN(Number.parseFloat(strdata.populationRangeTo))) && parseFloat(strdata.populationRangeFrom) === parseFloat(strdata.populationRangeTo) ? <span style={{ display: "block" }}>Population: {strdata.populationRangeFrom}</span> : (!Number.isNaN(Number.parseFloat(strdata.populationRangeFrom))) && (!Number.isNaN(Number.parseFloat(strdata.populationRangeTo))) ? <span style={{ display: "block" }}>Population: Between {strdata.populationRangeFrom} to {strdata.populationRangeTo}</span> : (!Number.isNaN(Number.parseFloat(strdata.populationRangeFrom))) ? <span style={{ display: "block" }}>Population: Greater than {strdata.populationRangeFrom}</span> : (!Number.isNaN(Number.parseFloat(strdata.populationRangeTo))) ? <span style={{ display: "block" }}>Population: Less than {strdata.populationRangeTo}</span> : null}
//                   {(!Number.isNaN(Number.parseFloat(strdata.rentalPerStoreRangeFrom))) && (!Number.isNaN(Number.parseFloat(strdata.rentalPerStoreRangeTo))) && parseFloat(strdata.rentalPerStoreRangeFrom) === parseFloat(strdata.rentalPerStoreRangeTo) ? <span style={{ display: "block" }}>Rental Properties: {strdata.rentalPerStoreRangeFrom}%</span> : (!Number.isNaN(Number.parseFloat(strdata.rentalPerStoreRangeFrom))) && (!Number.isNaN(Number.parseFloat(strdata.rentalPerStoreRangeTo))) ? <span style={{ display: "block" }}>Rental Properties: Between {strdata.rentalPerStoreRangeFrom}% to {strdata.rentalPerStoreRangeTo}%</span> : (!Number.isNaN(Number.parseFloat(strdata.rentalPerStoreRangeFrom))) ? <span style={{ display: "block" }}>Rental Properties: Greater than {strdata.rentalPerStoreRangeFrom}%</span> : (!Number.isNaN(Number.parseFloat(strdata.rentalPerStoreRangeTo))) ? <span style={{ display: "block" }}>Rental Properties: Less than {strdata.rentalPerStoreRangeTo}%</span> : null}
//                   {(!Number.isNaN(Number.parseFloat(strdata.medianHouseHoldRangeFrom))) && (!Number.isNaN(Number.parseFloat(strdata.medianHouseHoldRangeTo))) && parseFloat(strdata.medianHouseHoldRangeFrom) === parseFloat(strdata.medianHouseHoldRangeTo) ? <span style={{ display: "block" }}>Median Household Income: {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.medianHouseHoldRangeFrom).toFixed(2))}</span> : (!Number.isNaN(Number.parseFloat(strdata.medianHouseHoldRangeFrom))) && (!Number.isNaN(Number.parseFloat(strdata.medianHouseHoldRangeTo))) ? <span style={{ display: "block" }}>Median Household Income: Between {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.medianHouseHoldRangeFrom).toFixed(2))} to {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.medianHouseHoldRangeTo).toFixed(2))}</span> : (!Number.isNaN(Number.parseFloat(strdata.medianHouseHoldRangeFrom))) ? <span style={{ display: "block" }}>Median Household Income: Greater than {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.medianHouseHoldRangeFrom).toFixed(2))}</span> : (!Number.isNaN(Number.parseFloat(strdata.medianHouseHoldRangeTo))) ? <span style={{ display: "block" }}>Median Household Income: Less than {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.medianHouseHoldRangeTo).toFixed(2))}</span> : null}
//                   {(!Number.isNaN(Number.parseFloat(strdata.medianPropertyValuePerStoreRangeFrom))) && (!Number.isNaN(Number.parseFloat(strdata.medianPropertyValuePerStoreRangeTo))) && parseFloat(strdata.medianPropertyValuePerStoreRangeFrom) === parseFloat(strdata.medianPropertyValuePerStoreRangeTo) ? <span style={{ display: "block" }}>Median Property Value: {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.medianPropertyValuePerStoreRangeFrom).toFixed(2))}</span> : (!Number.isNaN(Number.parseFloat(strdata.medianPropertyValuePerStoreRangeFrom))) && (!Number.isNaN(Number.parseFloat(strdata.medianPropertyValuePerStoreRangeTo))) ? <span style={{ display: "block" }}>Median Property Value: Between {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.medianPropertyValuePerStoreRangeFrom).toFixed(2))} to {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.medianPropertyValuePerStoreRangeTo).toFixed(2))}</span> : (!Number.isNaN(Number.parseFloat(strdata.medianPropertyValuePerStoreRangeFrom))) ? <span style={{ display: "block" }}>Median Property Value: Greater than {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.medianPropertyValuePerStoreRangeFrom).toFixed(2))}</span> : (!Number.isNaN(Number.parseFloat(strdata.medianPropertyValuePerStoreRangeTo))) ? <span style={{ display: "block" }}>Median Property Value: Less than {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.medianPropertyValuePerStoreRangeTo).toFixed(2))}</span> : null}
//                   {(!Number.isNaN(Number.parseFloat(strdata.averageRentalCostPerStoreRangeFrom))) && (!Number.isNaN(Number.parseFloat(strdata.averageRentalCostPerStoreRangeTo))) && parseFloat(strdata.averageRentalCostPerStoreRangeFrom) === parseFloat(strdata.averageRentalCostPerStoreRangeTo) ? <span style={{ display: "block" }}>Average Rental Cost: {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.averageRentalCostPerStoreRangeFrom).toFixed(2))}</span> : (!Number.isNaN(Number.parseFloat(strdata.averageRentalCostPerStoreRangeFrom))) && (!Number.isNaN(Number.parseFloat(strdata.averageRentalCostPerStoreRangeTo))) ? <span style={{ display: "block" }}>Average Rental Cost: Between {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.averageRentalCostPerStoreRangeFrom).toFixed(2))} to {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.averageRentalCostPerStoreRangeTo).toFixed(2))}</span> : (!Number.isNaN(Number.parseFloat(strdata.averageRentalCostPerStoreRangeFrom))) ? <span style={{ display: "block" }}>Average Rental Cost: Greater than {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.averageRentalCostPerStoreRangeFrom).toFixed(2))}</span> : (!Number.isNaN(Number.parseFloat(strdata.averageRentalCostPerStoreRangeTo))) ? <span style={{ display: "block" }}>Average Rental Cost: Less than {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.averageRentalCostPerStoreRangeTo).toFixed(2))}</span> : null}
//                   {(!Number.isNaN(Number.parseFloat(strdata.storeMarketFrom))) && (!Number.isNaN(Number.parseFloat(strdata.storeMarketTo))) && parseFloat(strdata.storeMarketFrom) === parseFloat(strdata.storeMarketTo) ? <span style={{ display: "block" }}>Stores in market: {strdata.storeMarketFrom}</span> : (!Number.isNaN(Number.parseFloat(strdata.storeMarketFrom))) && (!Number.isNaN(Number.parseFloat(strdata.storeMarketTo))) ? <span style={{ display: "block" }}>Stores in market: Between {strdata.storeMarketFrom} to {strdata.storeMarketTo}</span> : (!Number.isNaN(Number.parseFloat(strdata.storeMarketFrom))) ? <span style={{ display: "block" }}>Stores in market: Greater than {strdata.storeMarketFrom}</span> : (!Number.isNaN(Number.parseFloat(strdata.storeMarketTo))) ? <span style={{ display: "block" }}>Stores in market: Less than {strdata.storeMarketTo}</span> : null}
//                   {(!Number.isNaN(Number.parseFloat(strdata.reitsFrom))) && (!Number.isNaN(Number.parseFloat(strdata.reitsTo))) && parseFloat(strdata.reitsFrom) === parseFloat(strdata.reitsTo) ? <span style={{ display: "block" }}>REITS: {strdata.reitsFrom}%</span> : (!Number.isNaN(Number.parseFloat(strdata.reitsFrom))) && (!Number.isNaN(Number.parseFloat(strdata.reitsTo))) ? <span style={{ display: "block" }}>REITS: Between {strdata.reitsFrom}% to {strdata.reitsTo}%</span> : (!Number.isNaN(Number.parseFloat(strdata.reitsFrom))) ? <span style={{ display: "block" }}>REITS: Greater than {strdata.reitsFrom}%</span> : (!Number.isNaN(Number.parseFloat(strdata.reitsTo))) ? <span style={{ display: "block" }}>REITS: Less than {strdata.reitsTo}%</span> : null}
//                   {(!Number.isNaN(Number.parseFloat(strdata.sqftCapitaFrom))) && (!Number.isNaN(Number.parseFloat(strdata.sqftCapitaTo))) && parseFloat(strdata.sqftCapitaFrom) === parseFloat(strdata.sqftCapitaTo) ? <span style={{ display: "block" }}>Sq Ft per Capita: {new Intl.NumberFormat().format(parseFloat(strdata.sqftCapitaFrom).toFixed(2))}</span> : (!Number.isNaN(Number.parseFloat(strdata.sqftCapitaFrom))) && (!Number.isNaN(Number.parseFloat(strdata.sqftCapitaTo))) ? <span style={{ display: "block" }}>Sq Ft per Capita: Between {new Intl.NumberFormat().format(parseFloat(strdata.sqftCapitaFrom).toFixed(2))} to {new Intl.NumberFormat().format(parseFloat(strdata.sqftCapitaTo).toFixed(2))}</span> : (!Number.isNaN(Number.parseFloat(strdata.sqftCapitaFrom))) ? <span style={{ display: "block" }}>Sq Ft per Capita: Greater than {new Intl.NumberFormat().format(parseFloat(strdata.sqftCapitaFrom).toFixed(2))}</span> : (!Number.isNaN(Number.parseFloat(strdata.sqftCapitaTo))) ? <span style={{ display: "block" }}>Sq Ft per Capita: Less than {new Intl.NumberFormat().format(parseFloat(strdata.sqftCapitaTo).toFixed(2))}</span> : null}
//                   {(!Number.isNaN(Number.parseFloat(strdata.markScoreCardFrom))) && (!Number.isNaN(Number.parseFloat(strdata.markScoreCardTo))) && parseFloat(strdata.markScoreCardFrom) === parseFloat(strdata.markScoreCardTo) ? <span style={{ display: "block" }}>Average Marketing Scorecard: {strdata.markScoreCardFrom}</span> : (!Number.isNaN(Number.parseFloat(strdata.markScoreCardFrom)) && (parseFloat(strdata.markScoreCardFrom))) && (!Number.isNaN(Number.parseFloat(strdata.markScoreCardTo)) && (parseFloat(strdata.markScoreCardTo))) ? <span style={{ display: "block" }}>Average Marketing Scorecard: Between {strdata.markScoreCardFrom} to {strdata.markScoreCardTo}</span> : (!Number.isNaN(Number.parseFloat(strdata.markScoreCardFrom)) && (parseFloat(strdata.markScoreCardFrom))) ? <span style={{ display: "block" }}>Average Marketing Scorecard: Greater than {strdata.markScoreCardFrom}</span> : (!Number.isNaN(Number.parseFloat(strdata.markScoreCardTo)) && (parseFloat(strdata.markScoreCardTo))) ? <span style={{ display: "block" }}>Average Marketing Scorecard: Less than {strdata.markScoreCardTo}</span> : null} */}
//                 </td>
//                 :
//                 <td>
//                   {strdata.stateFullName ? <span style={{ display: "block" }}>State/Region: {strdata.stateFullName}</span> : strdata.countryName ? <span style={{ display: "block" }}>{CONFIGRegion_Id !== "Regions.UK" ? "State/Region" : "Country"}: {strdata.countryName}</span> : null}
//                   {strdata.categoryName ? <span style={{ display: "block" }}>Category: {strdata.categoryName}</span> : null}
//                   {strdata.rankName ? <span style={{ display: "block" }}>Rank: {strdata.rankName}</span> : null}
//                 </td>
//               }
//             </tr>
//           )
//         })}
//       </table>
//     </div>
//   )
// }

// export default App


import { useEffect, useState } from 'react';
import './App.css';
import data from "./data.json";

function App() {
  const [first, setfirst] = useState([]);
  const ConditionsFormat = {
    psfRange: "Currency",
    populationRange: "Number",
    rentalPerStoreRange: "Percentage",
    medianHouseHoldRange: "Currency",
    medianPropertyValuePerStoreRange: "Currency",
    averageRentalCostPerStoreRange: "Currency",
    storeMarket: "Number",
    reits: "Percentage",
    sqftCapita: "Decimal",
    markScoreCard: "Number",
  };
  const filterName = {
    psfRange: "Price per Square Foot",
    populationRange: "Population",
    rentalPerStoreRange: "Rental Properties",
    medianHouseHoldRange: "Median Household Income",
    medianPropertyValuePerStoreRange: "Median Property Value",
    averageRentalCostPerStoreRange: "Average Rental Cost",
    storeMarket: "Stores in market",
    reits: "REITS",
    sqftCapita: "Sq Ft per Capita",
    markScoreCard: "Average Marketing Scorecard",
  };
  const MDTMarketCondition = [
    { id: 1, dataType: "Currency", name: "Price per Square Foot", shortName: "priceSqRate", apiName: "psfRange" },
    { id: 2, dataType: "Number", name: "Population", shortName: "DemoPopulation", apiName: "populationRange" },
    { id: 3, dataType: "Percentage", name: "Rental Properties", shortName: "DemoRentalPL", apiName: "rentalPerStoreRange" },
    { id: 4, dataType: "Currency", name: "Median Household Income", shortName: "DemoMedianHouse", apiName: "medianHouseHoldRange" },
    { id: 5, dataType: "Currency", name: "Median Property Value", shortName: "DemoMedian", apiName: "medianPropertyValuePerStoreRange" },
    { id: 6, dataType: "Currency", name: "Average Rental Cost", shortName: "DemoAverage", apiName: "averageRentalCostPerStoreRange" },
    { id: 7, dataType: "Number", name: "Stores in market", shortName: "StoreMarket", apiName: "storeMarket" },
    { id: 8, dataType: "Percentage", name: "REITS", shortName: "REITS", apiName: "reits" },
    { id: 9, dataType: "Decimal", name: "Sq Ft per Capita", shortName: "SQFTCapita", apiName: "sqftCapita" },
    { id: 10, dataType: "Number", name: "Average Marketing Scorecard", shortName: "MarkScoreCard", apiName: "markScoreCard" },
  ]

  const formatValue = (value, valueType) => {
    // let type = valueType ?? excelData.valueType;

    if (valueType === 'Number') return new Intl.NumberFormat().format(value);
    else if (valueType === 'Decimal') return new Intl.NumberFormat().format(value.toFixed(2));
    else if (valueType === 'Percentage') return value.toString().concat("%");
    // else if (valueType === 'Percentage') return new Intl.NumberFormat().format(value).concat("%");
    else if (valueType === 'Currency') return (new Intl.NumberFormat().format(value.toFixed(2)));

  }


  useEffect(() => {
    let filterData = data.map((dtd) => {
      let filData = {};
      let ftDup = { ...dtd };
      // let sortFilter = dtd.filterConditionOrder;
      // let sortFilter = ftDup.filterConditionOrder ? ftDup.filterConditionOrder : "";
      // let sortFilterArray = sortFilter.toString().split(",");

      // console.log(filterOrder);

      // console.log(sortFilter.toString().split(","));
      Object.keys(ftDup).map((a, b, c) => {
        // c.filter(val=> console.log(val.filterConditionOrder));
        if (!Object.keys(filData).includes(a.replace(/From|To/g, ''))) {
          let ft = c.filter(val => val.replace(/From|To/g, '') === a.replace(/From|To/g, ''));
          // console.log(ft);
          if (ftDup[ft[0]] && ftDup[ft[1]]) {
            let dtName = ft[0].replace(/From|To/g, '');
            // console.log(ConditionsFormat(dtName));
            let dtFullName = filterName[dtName];
            let minValue = formatValue(Number(ftDup[ft[0]]), ConditionsFormat[dtName]);
            let maxValue = formatValue(Number(ftDup[ft[1]]), ConditionsFormat[dtName]);
            let dtVal = minValue === maxValue ? dtFullName + ":" + minValue : dtFullName + ': Between ' + (ft[0].endsWith('From') ? (minValue + ' to ' + maxValue) : (maxValue + ' to ' + minValue));
            filData[dtName] = dtVal;
            // console.log(filData[dtName]);
          }
          else if (ft[0].endsWith("From") || ft[0].endsWith("To")) {
            let dtName = ft[0].replace(/From|To/g, '');
            // console.log(typeof(dtName));
            // let dtFullName = MDTMarketCondition.filter(fd => {
            //   // console.log(fd.name:fd.apiName)
            //   if(dtName === fd.apiName) {
            //     dtName.replace(dtName ,fd.name)
            //     console.log(dtName);
            //   }
            // });
            // console.log(dtFullName);

            let indx = ftDup[ft[0]] ? 0 : 1;
            let curValue = "";
            if (ftDup[ft[indx]] !== null) curValue = formatValue(Number(ftDup[ft[indx]]), ConditionsFormat[dtName]);
            let dtVal = ""
            // console.log(curValue);
            let dtFullName = filterName[dtName];
            // console.log(dtFullName);
            // console.log(dtFullName + curValue);
            // console.log(curValue !== "" ? curValue : "llllllll");
            // if (curValue !== "") {
            // console.log(ft[0].endsWith('From'));
            // console.log(ft);
            dtVal = ft[indx].endsWith('From') ? (dtFullName + ': Greater than ' + curValue) : (dtFullName + ': Less than ' + curValue);
            // }
            // console.log(typeof(curValue))
            // console.log(dtVal +""+typeof(curValue))
            filData[dtName] = dtVal;
            // console.log(curValue)
            // console.log(filData);
          }
        }
        // let dataConcat = data.concat(filData);
        // setfirst(dataConcat);
        // setfirst(filData);
      });
      // console.log(typeof(filData));
      // console.log(filData);
      // console.log(ftDup);
      // }
      let filterOrder = ftDup.filterConditionOrder?.split(",") ?? [];
      let isRequiredFlag = [ftDup.isRequiredAll];
      // console.log(isRequiredFlag);
      // console.log(filterOrder);
      let backupFields = {};
      if (filterOrder.length > 0) {
        filterOrder.map(val => {
          let filterCount = MDTMarketCondition.filter(fd => fd.id === Number(val))[0];
          // console.log(filterCount.apiName);
          if (filterCount.id === Number(val)) {
            let currentFields = Object.keys(filData).filter(val => val.replace(/From|To/g, '') === filterCount.apiName);
            // let currentFields = Object.keys(filData).filter(val => val === filterCount.apiName);
            // let currentFields = Object.keys(filData).filter(val => {
            //   console.log(val);
            //   if(val.replace(/From|To/g, '') === filterCount.apiName){
            //     // console.log(filData[val]);
            //   }
            //   // console.log(filData[val]);
            // });
            // console.log(currentFields);
            // console.log(filData);
            currentFields.map(val => {
              // console.log(val)
              // ` (${isRequiredFlag ? 'and' : 'or'})`
              // console.log(ftDup.isRequiredAll);
              let fil = isRequiredFlag.map(val => val ? '(and)' : '(or)')
              // console.log(fil)
              // console.log(backupFields);
              backupFields[val] = `${filData[val]}  ${fil}`;
            });
          }
        });
      }
      // let sortedData = backupFields[val] + ` (${ftDup.isRequiredFlag ? 'and' : 'or'})`;
      // console.log(ftDup.isRequiredAll ? "yellow" : "pink");
      // console.log(sortedData);
      // console.log(typeof(ftDup.isRequiredAll && "yellow"));
      // console.log(ftDup.isRequiredFlag ? 'and' : 'or');
      return {
        // ...dtd,
        ...ftDup,
        sortedData: backupFields
        // filData
      }
    })
    setfirst(filterData);
  }, [])

  // console.log(first);
  let CONFIGRegion_Id = "Regions.UK";
  let CONFIGCurrency_Symbol = "$";
  return (
    <div className="App">
      <table>
        <tr>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
        </tr>
        {first.map((strdata, key) => {
          return (
            <tr key={key}>
              <td>{strdata.createdDate ? (strdata.createdDate) : null}</td>
              <td>{parseFloat(strdata.searchTypeID) === 1 ? "Market Conditions" : parseFloat(strdata.searchTypeID) === 2 ? "Market Rank" : ""}</td>
              <td>{strdata.searchName ? strdata.searchName : null}</td>
              <td>{strdata.resultsCount ? strdata.resultsCount : null}</td>
              {parseFloat(strdata.searchTypeID) === 1 || 0 ?
                <td>
                  {/* {strdata.stateFullName ? <span style={{ display: "block" }}>State/Region: {strdata.stateFullName}</span> : strdata.countryName ? <span style={{ display: "block" }}>{CONFIGRegion_Id !== "Regions.UK" ? "State/Region" : "Country"}: {strdata.countryName}</span> : null} */}
                  {<span style={{ display: "block" }}>{strdata.stateFullName ? <span>State/Region: {strdata.stateFullName}</span> : strdata.countryName ? <span>{CONFIGRegion_Id !== "Regions.UK" ? "State/Region" : "Country"}: {strdata.countryName}</span> : null}{strdata.isRequiredAll ? " (and)" : " (or)"}</span>}
                  {console.log(typeof (strdata.isRequiredAll))}
                  {/* {console.log(strdata.isRequiredFlag === "true" || true ? " (and)" : " (or)")} */}
                  {console.log(strdata.isRequiredFlag && " (and)")}
                  {/* {strdata.stateFullName ? <span style={{ display: "block" }}>State/Region: {strdata.stateFullName}{strdata.isRequiredFlag ? " (and)" : " (or)"}</span> : strdata.countryName ? <span style={{ display: "block" }}>{CONFIG.Region_Id !== Regions.UK ? "State/Region" : "Country"}: {strdata.countryName}{strdata.isRequiredFlag ? " (and)" : " (or)"}</span> : null} */}
                  {/* {console.log(typeof(first))} */}
                  {/* {Object.entries(strdata).filter()} */}
                  {/* {(strdata) => } */}
                  {/* {strdata.filData.averageRentalCostPerStoreRange}
                  {console.log(strdata.filData)} */}
                  {/* {console.log(strdata)} */}
                  {Object.entries(strdata.sortedData).map(([key, value], i) => {
                    return (
                      <div key={key}>
                        {value}
                        {/* {console.log(parseFloat(strdata.searchTypeID)) === 1 ? "gel":"hhh"}
                  {parseFloat(strdata.searchTypeID) !== 1 ? null : value} */}
                      </div>
                      //    <span>{parseFloat(strdata.searchTypeID) === 1 ? <div key={key}>
                      //      {value}
                      //    {/* {console.log(parseFloat(strdata.searchTypeID)) === 1 ? "gel":"hhh"}
                      //    {parseFloat(strdata.searchTypeID) !== 1 ? null : value} */}
                      //  </div> : null}</span>

                    )
                  })}
                  {/* {(!Number.isNaN(Number.parseFloat(strdata.psfRangeFrom))) && (!Number.isNaN(Number.parseFloat(strdata.psfRangeTo))) && parseFloat(strdata.psfRangeFrom) === parseFloat(strdata.psfRangeTo) ? <span style={{ display: "block" }}>Price per Square Foot: {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.psfRangeTo).toFixed(2))}</span> : (!Number.isNaN(Number.parseFloat(strdata.psfRangeFrom))) && (!Number.isNaN(Number.parseFloat(strdata.psfRangeTo))) ? <span style={{ display: "block" }}>Price per Square Foot: Between {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.psfRangeFrom).toFixed(2))} to {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.psfRangeTo).toFixed(2))}</span> : (!Number.isNaN(Number.parseFloat(strdata.psfRangeFrom))) ? <span style={{ display: "block" }}>Price per Square Foot: Greater than {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.psfRangeFrom).toFixed(2))}</span> : (!Number.isNaN(Number.parseFloat(strdata.psfRangeTo))) ? <span style={{ display: "block" }}>Price per Square Foot: Less than {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.psfRangeTo).toFixed(2))}</span> : null}
                  {(!Number.isNaN(Number.parseFloat(strdata.populationRangeFrom))) && (!Number.isNaN(Number.parseFloat(strdata.populationRangeTo))) && parseFloat(strdata.populationRangeFrom) === parseFloat(strdata.populationRangeTo) ? <span style={{ display: "block" }}>Population: {strdata.populationRangeFrom}</span> : (!Number.isNaN(Number.parseFloat(strdata.populationRangeFrom))) && (!Number.isNaN(Number.parseFloat(strdata.populationRangeTo))) ? <span style={{ display: "block" }}>Population: Between {strdata.populationRangeFrom} to {strdata.populationRangeTo}</span> : (!Number.isNaN(Number.parseFloat(strdata.populationRangeFrom))) ? <span style={{ display: "block" }}>Population: Greater than {strdata.populationRangeFrom}</span> : (!Number.isNaN(Number.parseFloat(strdata.populationRangeTo))) ? <span style={{ display: "block" }}>Population: Less than {strdata.populationRangeTo}</span> : null}
                  {(!Number.isNaN(Number.parseFloat(strdata.rentalPerStoreRangeFrom))) && (!Number.isNaN(Number.parseFloat(strdata.rentalPerStoreRangeTo))) && parseFloat(strdata.rentalPerStoreRangeFrom) === parseFloat(strdata.rentalPerStoreRangeTo) ? <span style={{ display: "block" }}>Rental Properties: {strdata.rentalPerStoreRangeFrom}%</span> : (!Number.isNaN(Number.parseFloat(strdata.rentalPerStoreRangeFrom))) && (!Number.isNaN(Number.parseFloat(strdata.rentalPerStoreRangeTo))) ? <span style={{ display: "block" }}>Rental Properties: Between {strdata.rentalPerStoreRangeFrom}% to {strdata.rentalPerStoreRangeTo}%</span> : (!Number.isNaN(Number.parseFloat(strdata.rentalPerStoreRangeFrom))) ? <span style={{ display: "block" }}>Rental Properties: Greater than {strdata.rentalPerStoreRangeFrom}%</span> : (!Number.isNaN(Number.parseFloat(strdata.rentalPerStoreRangeTo))) ? <span style={{ display: "block" }}>Rental Properties: Less than {strdata.rentalPerStoreRangeTo}%</span> : null}
                  {(!Number.isNaN(Number.parseFloat(strdata.medianHouseHoldRangeFrom))) && (!Number.isNaN(Number.parseFloat(strdata.medianHouseHoldRangeTo))) && parseFloat(strdata.medianHouseHoldRangeFrom) === parseFloat(strdata.medianHouseHoldRangeTo) ? <span style={{ display: "block" }}>Median Household Income: {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.medianHouseHoldRangeFrom).toFixed(2))}</span> : (!Number.isNaN(Number.parseFloat(strdata.medianHouseHoldRangeFrom))) && (!Number.isNaN(Number.parseFloat(strdata.medianHouseHoldRangeTo))) ? <span style={{ display: "block" }}>Median Household Income: Between {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.medianHouseHoldRangeFrom).toFixed(2))} to {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.medianHouseHoldRangeTo).toFixed(2))}</span> : (!Number.isNaN(Number.parseFloat(strdata.medianHouseHoldRangeFrom))) ? <span style={{ display: "block" }}>Median Household Income: Greater than {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.medianHouseHoldRangeFrom).toFixed(2))}</span> : (!Number.isNaN(Number.parseFloat(strdata.medianHouseHoldRangeTo))) ? <span style={{ display: "block" }}>Median Household Income: Less than {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.medianHouseHoldRangeTo).toFixed(2))}</span> : null}
                  {(!Number.isNaN(Number.parseFloat(strdata.medianPropertyValuePerStoreRangeFrom))) && (!Number.isNaN(Number.parseFloat(strdata.medianPropertyValuePerStoreRangeTo))) && parseFloat(strdata.medianPropertyValuePerStoreRangeFrom) === parseFloat(strdata.medianPropertyValuePerStoreRangeTo) ? <span style={{ display: "block" }}>Median Property Value: {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.medianPropertyValuePerStoreRangeFrom).toFixed(2))}</span> : (!Number.isNaN(Number.parseFloat(strdata.medianPropertyValuePerStoreRangeFrom))) && (!Number.isNaN(Number.parseFloat(strdata.medianPropertyValuePerStoreRangeTo))) ? <span style={{ display: "block" }}>Median Property Value: Between {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.medianPropertyValuePerStoreRangeFrom).toFixed(2))} to {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.medianPropertyValuePerStoreRangeTo).toFixed(2))}</span> : (!Number.isNaN(Number.parseFloat(strdata.medianPropertyValuePerStoreRangeFrom))) ? <span style={{ display: "block" }}>Median Property Value: Greater than {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.medianPropertyValuePerStoreRangeFrom).toFixed(2))}</span> : (!Number.isNaN(Number.parseFloat(strdata.medianPropertyValuePerStoreRangeTo))) ? <span style={{ display: "block" }}>Median Property Value: Less than {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.medianPropertyValuePerStoreRangeTo).toFixed(2))}</span> : null}
                  {(!Number.isNaN(Number.parseFloat(strdata.averageRentalCostPerStoreRangeFrom))) && (!Number.isNaN(Number.parseFloat(strdata.averageRentalCostPerStoreRangeTo))) && parseFloat(strdata.averageRentalCostPerStoreRangeFrom) === parseFloat(strdata.averageRentalCostPerStoreRangeTo) ? <span style={{ display: "block" }}>Average Rental Cost: {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.averageRentalCostPerStoreRangeFrom).toFixed(2))}</span> : (!Number.isNaN(Number.parseFloat(strdata.averageRentalCostPerStoreRangeFrom))) && (!Number.isNaN(Number.parseFloat(strdata.averageRentalCostPerStoreRangeTo))) ? <span style={{ display: "block" }}>Average Rental Cost: Between {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.averageRentalCostPerStoreRangeFrom).toFixed(2))} to {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.averageRentalCostPerStoreRangeTo).toFixed(2))}</span> : (!Number.isNaN(Number.parseFloat(strdata.averageRentalCostPerStoreRangeFrom))) ? <span style={{ display: "block" }}>Average Rental Cost: Greater than {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.averageRentalCostPerStoreRangeFrom).toFixed(2))}</span> : (!Number.isNaN(Number.parseFloat(strdata.averageRentalCostPerStoreRangeTo))) ? <span style={{ display: "block" }}>Average Rental Cost: Less than {CONFIGCurrency_Symbol}{new Intl.NumberFormat().format(parseFloat(strdata.averageRentalCostPerStoreRangeTo).toFixed(2))}</span> : null}
                  {(!Number.isNaN(Number.parseFloat(strdata.storeMarketFrom))) && (!Number.isNaN(Number.parseFloat(strdata.storeMarketTo))) && parseFloat(strdata.storeMarketFrom) === parseFloat(strdata.storeMarketTo) ? <span style={{ display: "block" }}>Stores in market: {strdata.storeMarketFrom}</span> : (!Number.isNaN(Number.parseFloat(strdata.storeMarketFrom))) && (!Number.isNaN(Number.parseFloat(strdata.storeMarketTo))) ? <span style={{ display: "block" }}>Stores in market: Between {strdata.storeMarketFrom} to {strdata.storeMarketTo}</span> : (!Number.isNaN(Number.parseFloat(strdata.storeMarketFrom))) ? <span style={{ display: "block" }}>Stores in market: Greater than {strdata.storeMarketFrom}</span> : (!Number.isNaN(Number.parseFloat(strdata.storeMarketTo))) ? <span style={{ display: "block" }}>Stores in market: Less than {strdata.storeMarketTo}</span> : null}
                  {(!Number.isNaN(Number.parseFloat(strdata.reitsFrom))) && (!Number.isNaN(Number.parseFloat(strdata.reitsTo))) && parseFloat(strdata.reitsFrom) === parseFloat(strdata.reitsTo) ? <span style={{ display: "block" }}>REITS: {strdata.reitsFrom}%</span> : (!Number.isNaN(Number.parseFloat(strdata.reitsFrom))) && (!Number.isNaN(Number.parseFloat(strdata.reitsTo))) ? <span style={{ display: "block" }}>REITS: Between {strdata.reitsFrom}% to {strdata.reitsTo}%</span> : (!Number.isNaN(Number.parseFloat(strdata.reitsFrom))) ? <span style={{ display: "block" }}>REITS: Greater than {strdata.reitsFrom}%</span> : (!Number.isNaN(Number.parseFloat(strdata.reitsTo))) ? <span style={{ display: "block" }}>REITS: Less than {strdata.reitsTo}%</span> : null}
                  {(!Number.isNaN(Number.parseFloat(strdata.sqftCapitaFrom))) && (!Number.isNaN(Number.parseFloat(strdata.sqftCapitaTo))) && parseFloat(strdata.sqftCapitaFrom) === parseFloat(strdata.sqftCapitaTo) ? <span style={{ display: "block" }}>Sq Ft per Capita: {new Intl.NumberFormat().format(parseFloat(strdata.sqftCapitaFrom).toFixed(2))}</span> : (!Number.isNaN(Number.parseFloat(strdata.sqftCapitaFrom))) && (!Number.isNaN(Number.parseFloat(strdata.sqftCapitaTo))) ? <span style={{ display: "block" }}>Sq Ft per Capita: Between {new Intl.NumberFormat().format(parseFloat(strdata.sqftCapitaFrom).toFixed(2))} to {new Intl.NumberFormat().format(parseFloat(strdata.sqftCapitaTo).toFixed(2))}</span> : (!Number.isNaN(Number.parseFloat(strdata.sqftCapitaFrom))) ? <span style={{ display: "block" }}>Sq Ft per Capita: Greater than {new Intl.NumberFormat().format(parseFloat(strdata.sqftCapitaFrom).toFixed(2))}</span> : (!Number.isNaN(Number.parseFloat(strdata.sqftCapitaTo))) ? <span style={{ display: "block" }}>Sq Ft per Capita: Less than {new Intl.NumberFormat().format(parseFloat(strdata.sqftCapitaTo).toFixed(2))}</span> : null}
                  {(!Number.isNaN(Number.parseFloat(strdata.markScoreCardFrom))) && (!Number.isNaN(Number.parseFloat(strdata.markScoreCardTo))) && parseFloat(strdata.markScoreCardFrom) === parseFloat(strdata.markScoreCardTo) ? <span style={{ display: "block" }}>Average Marketing Scorecard: {strdata.markScoreCardFrom}</span> : (!Number.isNaN(Number.parseFloat(strdata.markScoreCardFrom)) && (parseFloat(strdata.markScoreCardFrom))) && (!Number.isNaN(Number.parseFloat(strdata.markScoreCardTo)) && (parseFloat(strdata.markScoreCardTo))) ? <span style={{ display: "block" }}>Average Marketing Scorecard: Between {strdata.markScoreCardFrom} to {strdata.markScoreCardTo}</span> : (!Number.isNaN(Number.parseFloat(strdata.markScoreCardFrom)) && (parseFloat(strdata.markScoreCardFrom))) ? <span style={{ display: "block" }}>Average Marketing Scorecard: Greater than {strdata.markScoreCardFrom}</span> : (!Number.isNaN(Number.parseFloat(strdata.markScoreCardTo)) && (parseFloat(strdata.markScoreCardTo))) ? <span style={{ display: "block" }}>Average Marketing Scorecard: Less than {strdata.markScoreCardTo}</span> : null} */}
                </td>
                :
                <td>
                  {strdata.stateFullName ? <span style={{ display: "block" }}>State/Region: {strdata.stateFullName}</span> : strdata.countryName ? <span style={{ display: "block" }}>{CONFIGRegion_Id !== "Regions.UK" ? "State/Region" : "Country"}: {strdata.countryName}</span> : null}
                  {strdata.categoryName ? <span style={{ display: "block" }}>Category: {strdata.categoryName}</span> : null}
                  {strdata.rankName ? <span style={{ display: "block" }}>Rank: {strdata.rankName}</span> : null}
                </td>
              }
            </tr>
          )
        })}
      </table>
    </div>
  );
}

export default App;