export default {
   name: "aboutSectionContent",
   title: "About Section Content",
   type: "document",
   fields:[
      {
         name: "aboutProducts",
         type: "array",
         of:[ {type:"block"} ],
         title: "About Products"
      },
      {
         name: "aboutSectionImages",
         title: "About Section Images",
         type: "array",
         of: [ { type:"image" } ],
         options:{
            hotspot:true,
         }
      }
   ]
}