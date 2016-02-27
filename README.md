## smartTODO
_____
Take back your time! Deal with emails efficiently, like never before.

![Intro](https://raw.githubusercontent.com/tech-dojo/smartToDo/master/app/images/intro.png "Intro")

#### [Checkout the Demo](http://smarttodo.tech-dojo.org/)

### How it works

1. Fetches recent 20 emails for a user (sample emails or from user's Gmail inbox)
2. Applies natural language processing (Naive Bayesian Classification) on each email to classify into the following categories: Meeting, Reminder, Registration, Deadline & Uncategorized. (The categories are determined using Bayesian classifiers created with training data)
3. Converts categorized emails into TODO items, which the user can edit, delete and mark as completed

This app has been built for the [hack.summit() Virtual Hackathon 2016](https://www.koding.com/Hackathon).

For the **demo with sample emails**, 12 emails are read from [this sample JSON](https://raw.githubusercontent.com/tech-dojo/smartToDo/master/server/sampleEmails.js) for a dummy user.

For the **demo with Gmail signin**, 20 emails are fetched only once when a user logs in with their Gmail for the first time. No subsequent fetch calls are made if the user logs out and logs in again.

The TODO data is persisted throughout each server session, and resets if the server is restarted.


*Disclaimer*: The sample size of training data is small given the time constraints, hence high accuracy in email classification is not guaranteed.


#### Notable APIs used:

* [Gmail API](https://developers.google.com/gmail/api/)
* [Natural](https://github.com/NaturalNode/natural)
* [React](https://facebook.github.io/react/)
* [React-Bootstrap](https://react-bootstrap.github.io)
