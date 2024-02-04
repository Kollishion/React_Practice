const data = [
  {
    id: "1",
    question: "What are accordion components?",
    answer:
      "Accordion components are user interface elements used for organizing and presenting content in a collapsible manner. They typically consist of a header, content, and an expand/collapse action.",
  },
  {
    id: "2",
    question: "What are they used for?",
    answer:
      "They are commonly employed in various contexts, including FAQs, product descriptions, navigation menus, settings panels, and data tables, to save screen space and provide a structured and user-friendly interface for presenting information or options.",
  },
  {
    id: "3",
    question: "Accordion as a musical instrument",
    answer:
      "The accordion is a musical instrument with a keyboard and bellows. It produces sound by air passing over reeds when the player expands or compresses the bellows, used in various music genres.",
  },
  {
    id: "4",
    question: "Can I create an accordion component with a different framework?",
    answer:
      "Yes of course, it is very possible to create an accordion component with another framework.",
  },
];

export default data;

// import React, { useState } from 'react'
// import data from './components/accordian/data';

// function Accordian() {
//   const [symbol, setSymbol] = useState(true);
//   const [selected, setSelected] = useState(null);
//   const [enableMultiSelection, setenableMultiSelection] = useState(false);
//   const [multiple, setMultiple] = useState([]);
//   function handleSingleSelection(getCurrentId){
//     setSelected(getCurrentId === selected ? null : getCurrentId);
//     setSymbol(!symbol);
//   };
//   function handleMultiSelection(getCurrentId){
//     let cpyMultiple = [...multiple];
//     const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
//     console.log(findIndexOfCurrentId);
//     if(findIndexOfCurrentId === -1){ cpyMultiple.push(getCurrentId);}
//     else {cpyMultiple.splice(findIndexOfCurrentId, 1);}
//     setMultiple(cpyMultiple);
//   }

//   console.log(selected, multiple);
//   return (
//     <div className="bg-black text-white w-full">
//       <div className="p-5 flex flex-col">
//         <button onClick={()=> setenableMultiSelection(!enableMultiSelection)} className="bg-orange-600 w-[200px] p-1.5 rounded-md cursor-pointer ml-[35vw]">Enable multiple selection</button>
//         {data && data.length > 0 ? (
//           data.map((dataItem) => (
//             <div className="relative m-5">
//               <div
//                 onClick={enableMultiSelection ? () => handleMultiSelection(dataItem.id) :
//                    () => handleSingleSelection(dataItem.id)}
//                 className="flex justify-between p-5 cursor-pointer  bg-red-600 rounded-md"
//               >
//                 <h3>{dataItem.question}</h3>
//                 <span className="text-xl">
//                   {selected === dataItem.id ? (symbol ? null : "-") : "+"}
//                 </span>
//               </div>
//               {selected === dataItem.id || multiple.indexOf(dataItem.id)!== -1 ? (
//                 <div className="bg-blue-600 mt-5 rounded-md p-5 text-center">
//                   {dataItem.answer}
//                 </div>
//               ) : null}
//             </div>
//           ))
//         ) : (
//           <div>No content found</div>
//         )}
//       </div>
//     </div>
//   );
// }
//export default Accordian