# Creating and connecting a container


### What is a container?
A container component is a component that is responsible for retrieving data, and in order to get that data, the component needs to use Redux's connect and mapStateToProps functions.\
A container component will grab data from state via mapStateToProps. The component will then pass necessary portions of that data down to its children as props.\
A container component is also responsible for dispatching actions that make changes to application state.

## [Click the link for a full breakdown of containers in redux](https://www.thegreatcodeadventure.com/the-react-plus-redux-container-pattern/)


### Breakdown of our current container, and it's dependencies.

[container](#container)
[actions](#actions)
* [fetchTweets](#fetchTweets)
[reducers](#reducers)
* [users](#users)

#### <a name="container"></a>Container
```javascript
//connect is a part of redux which lets you hook the state of the react app into a component as props so that you don't have to touch the state inside of actual components.
import { connect } from "react-redux";
//Feed is our component which takes in an array of tweets, and an array of users.
import Feed from "../components/Feed";

import React from "react";
//fetchTweets, and fetchUsers actions that fetch and set the users, and messages portion of the state.
import { fetchTweets, fetchUsers } from "../actions";

//Create a component, this component just like our other components only uses props.
class VisibleFeed extends React.Component {
    //since this component is guaranteed to be both the profile, and home page it runs the fetch actions to set the state for us.
    //just like in our klack assignment we run the fetch requests in a special function called componentDidMount() which runs before the component renders
  componentDidMount() {
      //since this component is hooked into redux using {connect} we can use it's props to actually call dispatch to run our actions.
    this.props.dispatch(fetchTweets());
    this.props.dispatch(fetchUsers());
  }

  render() {
      //We deconstruct parts from our props to user them a bit easier
    const {
      tweetsError,
      tweetsLoading,
      tweets,
      users,
      usersLoading,
      usersError
    } = this.props;
    
    //To make sure that our state has fully loaded to avoid undefined errors we check the boilerplate variables I created which keep track of if the fetch requests have finished
    
    //check to see if there was an error
    if (usersError || tweetsError) {
      return <div> Error! {users.message}</div>;
    }
    //check to see if it's still loading
    if (usersLoading || tweetsLoading) {
      return <div>Loading...</div>;
    }
    
    
    //if it's no longer loading it loads the actual component so we now return the page/components and pass in the data they need.
    //The feed component needs a list of all the tweets, and a list of all the users to build itself, so we pass those in as props
    return <Feed tweets={tweets} users={users} />;
  }
}


//Redux uses the connect function to set data from the state into props for the object
//here we name all of the props we want in our container component, and then set it to the data we want from the state.
const mapStateToProps = state => ({
  users: state.users.users,
  usersLoading: state.users.loading,
  usersError: state.users.error,
  tweets: state.messages.tweets,
  tweetsLoading: state.messages.loading,
  tweetsError: state.messages.error
});

//Lastly we implement the connect function, here we export the componenet, and call connect, in side of the first () we put our mapStateToProps object, and in the 2nd () we give it our component that we built above.
//This sets all of the this.props in VisibleFeed to what we told it to in matStateToProps.
export default connect(mapStateToProps)(VisibleFeed);

```

#### <a name="actions"></a>Actions

<a name="#fetchTweets"> fetchTweets() </a>| messages.js
The message.js file is responsible for holding all of our actions that effect the state.messages portion of our state, which stores our tweets.

```javascript
//import in variables from out constants.js
import {
  FETCH_TWEETS_FAILURE,
  FETCH_TWEETS_SUCCESS,
  FETCH_TWEETS_BEGIN,
  domain
} from "./constants";


//first we get our boilerplate out of the way. Because our fetch requests are asynchronous and we have no built in way to wait for the response, we have to build some simple objects that keep track of what is happening with the request, and call the appropriate reducers to keep our state, up to date.

//fetchTweetsBegin calls our reducer which updates the state so that loading = true, so we know the component is loading
export const fetchTweetsBegin = () => ({
  type: FETCH_TWEETS_BEGIN
});
//This function changes loading to false, and passes along what we got from the fetch request to the state
export const fetchTweetsSuccess = tweets => ({
//payload is used to easily define the data this action returns
  type: FETCH_TWEETS_SUCCESS,
  payload: { tweets }
});
//If there is a problem/error in the fetch request this will allow us to catch it and display the error
export const fetchTweetsFailure = error => ({
  type: FETCH_TWEETS_FAILURE,
  //payload is used to easily define the data this action returns
  payload: { error }
});


//The fetchTweets function actually runs a fetch request, and runs our boilerplate actions above.

export function fetchTweets() {
  return dispatch => {
      //first we run/dispense our fetchTweetsBegin action to set the state to know we're loading our list of messages
    dispatch(fetchTweetsBegin());
    //now we make and return the results of our fetch request, the fetch request will either return and run our fetchTweetsSuccess action and pass along the fetch results, or if an error of occurs it will return and run the fetchTweetsFailure action.
    return fetch(domain + "/messages")
    //First we run our handleError function, which checks to response object from the fetch, and throws an error if there was a problem
      .then(handleErrors)
      //if the fetch result returns without an error we now convert the object it returned to json so we can easily use it in javascript
      .then(res => res.json())
      //now that we have our response as json we can run our fetchTweetsSuccess action, in this we use json.messages, as the messages in our object are the only thing we want from the request.
      .then(json => {
        dispatch(fetchTweetsSuccess(json.messages));
        return json.messages;
      })
      //if an error occurs during this function the catch stops the function and returns this action instead of showing a normal error message.
      .catch(error => dispatch(fetchTweetsFailure(error)));
  };
}

//since fetch doesn't have an error handler we simply make on here to cover those errors
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

```


#### <a name="reducers"></a>Reducers

<a name="#users"></a> users.js
```javascript
//first we import in all of our constants to make checking type a lot easier
import {FETCH_USERS_BEGIN, FETCH_USERS_FAILURE, FETCH_USERS_SUCCESS} from "../actions/constants";
//now we set the starting state for this portion of our redux state.
const initialState = {
  users: [],
  loading: false,
  error: null
};
//Now we export our reducer, which runs when actions are dispatched, this takes our initial state, and the action that is being dispatched.
export default (state = initialState, action) => {
    //first we run a switch statement which checks the 'type' attribute of the action, and changes our state if the 'type' matches.
  switch (action.type) {
      //if the type is FECTH_USERS_BEGIN the reducer takes what the state currently is, but changes the loading property to true.
    case FETCH_USERS_BEGIN:
      return {
          // we're using spread syntax (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Spread_syntax) to expand the current state
        ...state,
        //sets loading to true
        loading: true,
        //sets error to null (falsie)
        error: null
      };
      //if this the reducer sets the loading state to false, and sets the users attribute of the state to the users object from the payload we got from our action
    case FETCH_USERS_SUCCESS:
      return {
        ...state,
        loading: false,
        users: action.payload.users
      };
      //if this the reducer sets the loading state to false, and sets the error from the payload we got from our action
    case FETCH_USERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        users: []
      };
      //every reducer needs a default, which keeps the state as it is incase none of the 'type' attributes matched.
    default:
      return state;
  }
};
```
