/*You’re given an array of transaction objects:

[
  { id: "t1", userId: 101, category: "food",   amount: 120.5,  currency: "INR", ts: "2025-08-01T09:10:00Z" },
  { id: "t2", userId: 101, category: "travel", amount:  80.00, currency: "INR", ts: "2025-08-02T14:33:00Z" },
  { id: "t3", userId: 102, category: "food",   amount:  60.00, currency: "INR", ts: "2025-08-02T07:05:00Z" },
  { id: "t4", userId: 101, category: "food",   amount: -20.00, currency: "INR", ts: "2025-08-03T10:00:00Z" } // refund
]
Return a summary grouped by by (default "userId"), with:
totalAmount (sum of amounts across all categories),
byCategory (object of category → sum),
count (number of transactions),
lastTransactionAt (ISO string of latest ts),
Sorted by totalAmount descending, then by ascending.
Sample output (shortened)

[
  {
    key: 101,
    totalAmount: 180.5,
    byCategory: { food: 100.5, travel: 80 },
    count: 3,
    lastTransactionAt: "2025-08-03T10:00:00.000Z",
    currency: "INR"
  },
  {
    key: 102,
    totalAmount: 60,
    byCategory: { food: 60 },
    count: 1,
    lastTransactionAt: "2025-08-02T07:05:00.000Z",
    currency: "INR"
  }
]*/
const inputFromUser=
[
  { id: "t1", userId: 101, category: "food",   amount: 120.5,  currency: "INR", ts: "2025-08-01T09:10:00Z" },
  { id: "t2", userId: 101, category: "travel", amount:  80.00, currency: "INR", ts: "2025-08-02T14:33:00Z" },
  { id: "t3", userId: 102, category: "food",   amount:  60.00, currency: "INR", ts: "2025-08-02T07:05:00Z" },
  { id: "t4", userId: 101, category: "food",   amount: -20.00, currency: "INR", ts: "2025-08-03T10:00:00Z" } // refund
]


function summarizeTransactions(transactions){
  // Edge Case 1: Input not array
  if(!Array.isArray(transactions)){
    console.error("Error: Input is not an array");
    return false;
  }

  // Edge Case 2: Empty array
  if(transactions.length===0){
    console.error("Error: No transactions to process");
    return false;
  }

  const summary={};

  for(let i=0;i<transactions.length;i++){
    const transactionDetails=transactions[i];

    // Edge Case 3: Missing required fields
    if(!transactionDetails || typeof transactionDetails.userId!=='number' || typeof transactionDetails.amount!=='number' || typeof transactionDetails.category!=='string' || typeof transactionDetails.ts!=='string'){
      console.warn("Warning: Skipping invalid transaction at index "+i);
      continue;
    }

    const key=transactionDetails.userId;
    if(!summary[key]){
      summary[key]={
        key:key,
        totalAmount:0,
        byCategory:{},
        count:0,
        lastTransactionAt:"",
        currency:transactionDetails.currency
      };
    }

    summary[key].totalAmount+=transactionDetails.amount;
    summary[key].count+=1;

    if(!summary[key].byCategory[transactionDetails.category])
      {
      
      summary[key].byCategory[transactionDetails.category]=0;
    }

    summary[key].byCategory[transactionDetails.category]+=transactionDetails.amount;

    if(summary[key].lastTransactionAt===""){

      summary[key].lastTransactionAt=transactionDetails.ts;

    }
    else{
      if(new Date(transactionDetails.ts)>new Date(summary[key].lastTransactionAt))
        {
        summary[key].lastTransactionAt=transactionDetails.ts;
      }
    }
  }

  const result=[];
  for(let key in summary){
    const entry=summary[key];
    entry.lastTransactionAt=new Date(entry.lastTransactionAt).toISOString();
    result.push(entry);
  }


  for(let i=0;i<result.length-1;i++){
    for(let j=i+1;j<result.length;j++){
      if(result[i].totalAmount<result[j].totalAmount || 
        (result[i].totalAmount===result[j].totalAmount && result[i].key>result[j].key)){
        let temp=result[i];
        result[i]=result[j];
        result[j]=temp;
      }
    }
  }


  for(let i=0;i<result.length;i++){
    console.log(result[i]);
  }
}

summarizeTransactions(inputFromUser);









