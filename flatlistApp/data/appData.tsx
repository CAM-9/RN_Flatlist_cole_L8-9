type dataType = {
    id: string; // unique identifier
    title: string; // text we see in flatlist

  }

  const DATA: dataType[] = [
    {id: '1', title: 'First'},
    {id: '2', title: 'Second'},
    {id: '3', title: 'Third'},
    {id: '4', title: 'Fourth'},
    {id: '5', title: 'Fifth'}
];

// export more than one item from a file by NOT using the word 
// default and using curly braces for all items I'm exporting.
export {dataType, DATA};