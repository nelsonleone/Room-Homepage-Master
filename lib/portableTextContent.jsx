import { UrlFor } from "./sanityClient";

export const components = {
   types: {
      image: ({value}) => (
         <img src={UrlFor(value.asset._ref)} alt="product image overview" />
      ),
      p: ({children}) => (
         <p>{children}</p>
      )
   }
}