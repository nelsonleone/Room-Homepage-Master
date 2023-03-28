export default {
   name: "tabContents",
   title: "Tab Contents",
   type: "document",
   fields: [
      {
         name: "serviceOverview",
         title: "Service Overview",
         type: "array",
         of:[ {type:"block"} ]
      },
      {
         name: "overviewImages",
         title: "Overview Images",
         type:  "object",
         fields:[
            {
               name: "largeImage",
               type: "image",
               title: "Large Image"
            },
            {
               name: "smallImage",
               type: "image",
               title: "Small Image"
            }
         ]
      }
   ]
}