import { useState } from "react";
import ExpandableText from "./components/ExpandableText";

function App() {
  return (
    <div>
      <ExpandableText maxChars={10}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
        facilis quam corporis corrupti ullam, rerum iusto hic porro asperiores
        nihil voluptatem odio, ipsum, eaque tempora adipisci incidunt dicta.
        Soluta perferendis molestiae deleniti ipsam asperiores labore temporibus
        neque molestias. Dicta numquam esse magnam amet unde rem expedita, nemo
        commodi obcaecati provident, autem reiciendis architecto maxime in eum
        nulla placeat doloribus consectetur inventore maiores facilis blanditiis
        ad. Eveniet officiis necessitatibus cupiditate accusantium autem earum
        harum, optio molestias? Facere quos deserunt ut dolorum, totam sed nam
        fugiat quis dolor neque? Architecto iure aspernatur sit consequuntur
        omnis rem, eos ipsum maiores repellendus vitae dicta.
      </ExpandableText>
    </div>
  );
}

export default App;
