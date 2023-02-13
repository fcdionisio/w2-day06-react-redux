import React from 'react';
import MenuTop from './components/MenuTop';
import FuncViewEmployee from './FuncViewEmployee';
import ViewEmployee from './ViewEmployee';

const App = () => {
  return (
    <div>
      <MenuTop />  {/* Just a header like menu appvar */}
      <ViewEmployee /> {/* show employee and update salary using CLASS COMPONENT */}
      <FuncViewEmployee /> {/* show employee and update salary using FUNCTION COMPONENT */}
    </div>
  );
};

export default App;