import React from 'react';
import Navigation from "../navigation/Navigation";
import "./Menu.css";

class Menu extends React.Component {

    menuTypes = [{"id":"1", "name":"Three Course Meal"},
        {"id":"2", "name":"Swedish Buffet"},
        {"id":"3", "name":"No Meal"}];

    render() {
     return (
        <div>
          <main>
             <section>
                 <Navigation/>
             </section>
             <section>
                <div class="menu__container">
                    <div class="menu__title">
                       Please select Menu type
                    </div>
                 </div>
                 <div>
                     Next
                 </div>
             </section>
           </main>
        </div>
     );
    }
}

export default Menu;