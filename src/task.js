import React from 'react';
import EpicComponent from 'epic-component';

export const Task = EpicComponent(self => {

   self.render = function () {
      const {task} = self.props;
      const {min, max} = task;
      return (
         <div>
            <p>Guess a number between {min} and {max}.</p>
         </div>
      );
   };

});
