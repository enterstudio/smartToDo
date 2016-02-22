module.exports = function(){
  var sampleEmails = [{
  	subject: 'You have a new bill from Bank of America Credit Card',
  	mail_date:'Thu, 18 Feb 2016 13:11:06 -0600',
  	from: 'billpay <billpay@billpay.bankofamerica.com>',
  	snippet:'Bill Pay Alert - you have a new e-Bill',
  	body:'Bill Pay Alert - You have a new e-Bill from Bank of America Credit Card - BOA Travel Rewards'
  },{
  	subject: 'Attractive Quotes (@AttractlveQuote) is now following you on Twitter!',
  	mail_date:'Thu, 18 Feb 2016 09:24:41 +0000',
  	from: '"Attractive Quotes (via Twitter)" <notify@twitter.com>',
  	snippet:'TechDojo, You have a new follower on Twitter',
  	body:'TechDojo, You have a new follower on Twitter. Attractive Quotes @AttractlveQuote Thank you for following Attractive Quotes! Bronx, NY Follow Forgot your Twitter password? Get instructions on how to reset it. You can also unsubscribe from these emails or change your notification settings . Need help ? If you received this message in error and did not sign up for Twitter, click not my account . Twitter, Inc. 1355 Market St., Suite 900 San Francisco, CA 94103'
  },{
  	subject: 'Facebook Mini Tech Talk and Poster Walk - Reminder',
  	mail_date:'Fri, 19 Feb 2016 16:02:47 -0500',
  	from: 'Facebook <minitechtalkandposterwalk@event.splashthat.com>',
  	snippet:'A Friendly Reminder -MINI TECH TALK AND POSTER WALK\nHappening in 11 Days',
  	body:'A Friendly Reminder -MINI TECH TALK AND POSTER WALK\nHappening in 11 Days Clear your calendar - It\'s going down!'
  },{
  	subject: 'Details on how to submit your hackathon project.',
  	mail_date:'Sat, 20 Feb 2016 20:47:48 +0000',
  	from: 'Koding <hackathon@koding.com>',
  	snippet:'Hello! First and foremost, a toast to you and your team for your energy! Twitter is abuzz! :) We hope',
  	body:'Hello!First and foremost, a toast to you and your team for your energy!\n\nTwitter is abuzz ! :)We hope you and your team are feverishly coding away your amazing creation for\nthe hackathon. We cannot wait to see your work!Since submitting your project properly is very critical, weâre sending you\nthis email to ensure that there is no confusion around the submission process.\nWeâve already outlined a lot of this info in the README.md file, but never\nhurts to repeat.KEY POINTS FOR SUBMITTING YOUR HACKATHON PROJECT: 1.  Hereâs the URL to submit your project: http://www.koding.com/hackathon/submit-project . Preview this URL now so if you have questions, you can ask us right\n     away.\n 2.  The submission form will go offline at 00:00 (midnight) PST on the 21st.\n     Please make sure that you donât wait till the last minute to submit. Give\n     yourselves 30 minutes to submit.\n 3.  You can submit your work anytime from now until 23:59 PST, February 21st,\n     2016.\n 4.  Donât do it over a mobile phone, use a desktop browser (preferably chrome\n     or firefox).\n 5.  Each team should only submit the form ONCE.\n 6.  The final project MUST be hosted on the "softlayer-vm-xx" VM that we have\n     added to your account... no exceptions. e.g. your project URL can be\n     http://159.8.66.189/my_start_page (159.8.66.189 is an example ip address).\n     You can get the IP address of your VM by using this command in Terminal:\n     curl ifconfig.co\n 7.  Do not use domain names, use only the IP address of the VM to construct the\n     URL when you submit the project. Projects submitted without IP addresses as\n     the URL will be rejected.\n 8.  Even if multiple team members on your team have the softlayer-vm-xx VM\n     added to their account, you only need to submit your project on one of\n     these VMs.\n 9.  Your project must be a web app (mobile apps are not acceptable) that is\n     accessible from the url that you provide. Each of these hackathon VMâs\n     have a public IP address. Remember, your project should be in running and\n     accessible to the public via a web browser. We will not be starting any\n     servers or services on your VM in order to evaluate your work. We will\n     simply hit the URL you provide us in order to view your work.\n 10. You can make changes to your team members up until the time you submit the\n     final project. The final project submission form will have a place for you\n     to list all the team members.\n 11. Your project MUST fall under one of the themes of the event.\n 12. You MUST host the code for your project on GitHub as a public repo. We will\n     ask for that repoâs URL as part of the submission process. (Your code\n     belongs to you, but we need to access it.)\n 13. If anyone is found "bending" the rules, then they, along with their team,\n     will be automatically disqualified. (We really don\'t want to do this so\n     please don\'t give us a reason)\n\nGood luck!\n-- Team Koding'
  },{
  	subject: 'CSE231 Assignment Submission',
  	mail_date:'Thu, 18 Feb 2016 01:58:37 -0800',
  	from: 'csbot@nsu.edu',
  	snippet:'Hello, its almost the end of February',
  	body:'Hello, its almost the end of March and that means Assignment 3 is already due. Please send in your assignment by March 1st.'
  },{
  	subject: 'Gerry wants to meet and catch up',
  	mail_date:'Sun, 21 Feb 2016 19:35:31 +0000',
  	from: 'Ron Katz <r.katz@gmail.com>',
  	snippet:'Hey, I talked to Gerry this morning, he expressed',
  	body:'Hey, I talked to Gerry this morning, he expressed interest in continuing with the project. He wants to set up a meeting next week. Let me know what times are best for you. R.'
  },{
  	subject: 'Last Call: Paper Deadline ACHI',
  	mail_date:'Sat, 20 Feb 2016 17:32:04 +0000',
  	from: 'ACHI <info@achi.org>',
  	snippet:'We are closing our call for papers on Feb 28',
  	body:'We are closing our call for papers on Feb 28, no submissions will be accepted after this deadline. '
  },{
  	subject: 'Been a long while!',
  	mail_date:'Sun, 21 Feb 2016 16:42:31 +0600',
  	from: 'Pete K <pete@krw.org>',
  	snippet:'Hi, How are you doing? Long time since we talked. - K',
  	body:'Hi, How are you doing? Long time since we talked. - K'
  },{
  	subject: 'You are invite to our TechTalk',
  	mail_date:'Sun, 21 Feb 2016 16:45:27 +0600',
  	from: 'TD <info@tech-dojo.org>',
  	snippet:'This weekend we are hosting a TechTalk on Isomorphic Web Apps with React.js',
  	body:'This weekend we are hosting a TechTalk on Isomorphic Web Apps with React.js. It will start at 3:00pm at our office, please RSVP with a reply to this email, so I can reserve a seat for you. S.'
  },{
  	subject: 'Pick up groceries today',
  	mail_date:'Wed, 17 Feb 2016 12:11:06 -0600',
  	from: 'Ma J. <maj@home.com>',
  	snippet:'We are out of milk and orange juice',
  	body:'We are out of milk and orange juice, remember to pick up some on your way here. M.'
  },
  {
    subject: 'Meeting with Gerry & Rod',
    mail_date:'Wed, 17 Feb 2016 12:15:06 -0600',
    from: 'Terry <terry@krw.com>',
    snippet:'As we discussed earlier, I set up the meeting for Saturday',
    body:'As we discussed earlier, I set up the meeting for Saturday the 27th at 11pm.'
  },
  {
    subject: 'Registrations open for SMe2016',
    mail_date:'Wed, 17 Feb 2016 12:15:06 -0600',
    from: 'Terry <terry@krw.com>',
    snippet:'We are pleased to annnouce, that early-bird registrations are ',
    body:'We are pleased to annnouce, that early-bird registrations are now open for SMe2016! You can register at our website.'
  }];
return sampleEmails;
};
