// Code your solution here
function findMatching(names, driversReturn){
    return names.filter((filteredNames) =>
   filteredNames.toUpperCase()===driversReturn.toUpperCase());
}

function fuzzyMatch(names, driversReturn){
return names.filter((filteredNames)=>
filteredNames.toUpperCase().indexOf(driversReturn.toUpperCase())===0);
}

function matchName(names, hometown){
    return names.filter((filteredNames)=>
    filteredNames.name===hometown);
}