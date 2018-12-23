import React from 'react';
import Navigation from "../navigation/Navigation";

class Menu extends React.Component {

    render() {
     return (
        <div>
          <main>
             <section>
                 <Navigation/>
             </section>
             <section>
                <div>
                    Please select Menu type
                 </div>
             </section>
           </main>
        </div>
     );
    }
}

export default Menu;