import React from 'react';
import {Button} from 'react-bootstrap';
import EpicComponent from 'epic-component';
import {include, defineAction, addReducer} from 'epic-linker';
import WorkspaceBuilder from 'alkindi-task-lib/simple_workspace';

export default function* (deps) {

  /* Actions dispatched by the workspace */

  yield defineAction('guessTooSmall', 'Workspace.GuessTooSmall');
  yield defineAction('guessTooLarge', 'Workspace.GuessTooLarge');
  yield defineAction('resetInterval', 'Workspace.ResetInterval');

  /* Simple workspace interface: init, dump, load, update, View */

  const init = function (task) {
    const {min, max} = task.hints;
    const guess = computeGuess(min, max);
    return {min, max, guess};
  };

  const dump = function (workspace) {
    const {min, max} = workspace;
    return {min, max}; // dump (the guess is not stored)
  };

  const load = function (dump) {
    const {min, max} = dump;
    return {min, max}; // workspace (will be passed to update)
  };

  const update = function (task, workspace) {
    let {min, max} = workspace;
    min = Math.max(min, task.hints.min);
    max = Math.min(max, task.hints.max);
    const guess = computeGuess(min, max);
    return {...workspace, min, max};
  };

  const View = EpicComponent(self => {

    const onTooSmall = function (event) {
      const guess = self.props.workspace.guess;
      self.props.dispatch({type: deps.guessTooSmall, guess});
    };

    const onTooLarge = function (event) {
      const guess = self.props.workspace.guess;
      self.props.dispatch({type: deps.guessTooLarge, guess});
    };

    const onResetInterval = function (event) {
      self.props.dispatch({type: deps.resetInterval});
    };

    self.render = function () {
      const {score, task, workspace, dispatch} = self.props;
      return (
        <div>
          <p>Find a number between {task.min} and {task.max}.</p>
          <p>Current hint: it is between {task.hints.min} and {task.hints.max}.</p>
          <p>Try {workspace.guess}.</p>
          <p>
            <Button onClick={onTooSmall}>it is too small</Button>
            <Button onClick={onTooLarge}>it is too large</Button>
            <Button onClick={onResetInterval}>reset interval</Button>
          </p>
        </div>
      );
    };

  });

  yield include(WorkspaceBuilder({init, dump, load, update, View}));

  /*
    Add reducers for workspace actions and any needed sagas below:
  */

  const computeGuess = function (min, max) {
    return Math.floor((min + max) / 2);
  };

  yield addReducer('guessTooSmall', function (state, action) {
    let {guess} = action;
    let {workspace} = state;
    let {min, max} = workspace;
    min = guess;
    guess = computeGuess(min, max);
    workspace = {...workspace, min, guess};
    return {...state, workspace};
  });

  yield addReducer('guessTooLarge', function (state, action) {
    let {guess} = action;
    let {workspace} = state;
    let {min, max} = workspace;
    max = guess;
    guess = computeGuess(min, max);
    workspace = {...workspace, max, guess};
    return {...state, workspace};
  });

  yield addReducer('resetInterval', function (state, action) {
    const {task, workspace} = state;
    const {min, max} = task.hints;
    const guess = computeGuess(min, max);
    return {...state, workspace: {...workspace, min, max, guess}};
  });

};