var natural = require('natural'),
  classifier = new natural.BayesClassifier();

module.exports = function(){

  classifier.addDocument('A credit or debit card thats in your account has expired. If you like tokeep using it for your account, update its expiration date.', 'reminders');
  classifier.addDocument('ready for delvery.You may now collect it from the delivery counter', 'reminders');
  classifier.addDocument('The work week has ended, and your weekly timelog is available for review.', 'reminders');
  classifier.addDocument('pay your internet bill. Internet service will expire by the end of the month.Three days left.', 'reminders');
  classifier.addDocument('thanks for all !  lets test sometime this week', 'meeting');
  classifier.addDocument('Submission of Poster Proposals - deadline. For the review process, an abstract of 300 words should be submitted by Friday', 'deadline');
  classifier.addDocument('register for an event. Registration Regulation: For poster presentation at the Conference and inclusion of the poster extended abstract in the Proceedings, at least one registration per poster is required by 8 April 2016.', 'registration');

  classifier.addDocument('arrange a meeting. I spoke too soon. How about Tuesday at 3:00 pm?', 'meeting');
  classifier.addDocument('Invitation.Join video call', 'meeting');
  classifier.addDocument('Your credit card payment is due. To make a payment, visit Online Banking, or pay directly from your Capital One Mobile App.', 'reminders');
  classifier.addDocument('Abstract Submission Deadline. This is a quick reminder for the AHFE 2016 International Conference abstract and paper proposal submission extended deadline. The conference will be held at Walt Disney.The extended deadline is approaching quickly, please submit as soon as possible!', 'deadline');
  classifier.addDocument('You are invited to Ubiquity Dev Summit. We are excited to announce that we are opening registration for the first Ubiquity Dev Summit and would love to have you there as our guest. The event will take place at The Strand Theater in San Francisco, CA on January 11-12, 2016.', 'registration');
  classifier.addDocument('Career Fair. I would like to invite you to register for the 2016 Carnegie Mellon University Career Fair in Silicon Valley! It is a job and internship fair for Carnegie Mellon University graduate students in tech disciplines seeking full-time or internship opportunities.', 'registration');
  classifier.addDocument('lets have a conference call to regroup, tomorrow? I can call you earlier let me try 7 or 7:30 our time  = 9 or 9:30 your time', 'meeting');
  classifier.addDocument('prepare a presentation for the meeting.This workshop is designed to explore the unique challenges being faced.', 'meeting')
  classifier.addDocument('introduction and meeting. lets debate certain issues and problems, and to take decisions.', 'meeting');
  //classifier.addDocument(['',''],'');
  classifier.addDocument('Board meeting: The directors have decided to meet', 'meeting');
  classifier.addDocument('workshop on react. An introductory workshop on react.js will take place at techdojo.Please register by end of the week.', 'registration');
  classifier.addDocument('programming assignment submission.Submit the programming assignment for the data course by 17th january', 'deadline');

  classifier.addDocument('your credit card has expired. Please recharge the card', 'reminders');
  classifier.addDocument('credit card date expiration, renew the card', 'reminders');
  classifier.addDocument('expiry of credit or debit card. Apply for a new card', 'reminders');

  classifier.addDocument('conference. Hello Mr. John, I just request you to schedule a conference. The manager from each division will be a part of it as will the CEO. Please, let me know the updates.', 'meeting');
  classifier.addDocument('expiry of credit or debit card. Apply for a new card', 'reminders');
  classifier.addDocument('Reunion. Hello Everyone, we are trying to arrange a get together for our batch. Lets meet today regarding this issue.', 'meeting');

  classifier.addDocument('Annual General Meeting. Tivoli A/S Annual General Meeting will take place Monday 18 April 2016, at 13.00 pm, at the Tivoli Concert Hall.', 'meeting');

  classifier.addDocument('General Meeting of Association. Annual General Meeting of the Association will take place Monday 18 May 2016, at 13.00 pm, at the Concert Hall.', 'meeting');

  classifier.addDocument('Urgent Meeting Call. Lets all meet in the conference room in 15 minutes.', 'meeting');

  classifier.addDocument('Work Progress. Lets talk about the last update at 10:30PM', 'meeting');

  classifier.addDocument('Appointment. Upon your request, Mr. Hussy has confirmed your appointment at 1600 Hrs for 15 minutes.', 'meeting');

  classifier.addDocument('Lawyer Appointment. This is to remind you that, you have an appointment with Barrister Moudud Ahmed at 1900 hrs for half an hour. Thank You. MDA Associates', 'meeting');

  classifier.addDocument('Eye Specialist Appointment. Eye specialist Dr. Max Muller has confirmed your appoint on Feb 29, 2016 at 1800 Hrs.', 'meeting');

  //registration
  classifier.addDocument('Get Register for Professional examination. A student is required to complete the Executive and the Professional examination within the registration period. However, on payment of requisite fees the validity of registration may be renewed / extended for further period subject to fulfilling the applicable guidelines.', 'registration');

  classifier.addDocument('Course Registration. Are you using MyLab or Mastering in Blackboard, Canvas, Desire2Learn or Moodle? If so, you need to register through your learning management system instead of on this page.', 'registration');

  classifier.addDocument('Voter Registration Card Collection. Just submit a completed Voter Registration and Absentee Ballot Request Federal Post Card Application (FPCA) (Form 76) to your local Florida election office. You can use the FPCA to request absentee ballots while you are out of state.', 'registration');


  classifier.addDocument('Hybrid Mobile App Workshop. An introductory workshop on Hybrid Mobile Application will take place at North South University. Interested students please contact the secretary, Department of Computer Science & Engineering for your registration. Seats are limited.', 'registration');

  classifier.addDocument('IELTS Examination Registration. As seats are on first come first served basis, we recommend that you register at least two weeks in advance', 'registration');

  classifier.addDocument('Sun Lab Registration. Hereby CSE 323 students are requested to register in person at Enrollment Services in the SAC Building.', 'registration');

  classifier.addDocument('Registration for IBM Conference on ML. You are requested to complete the registration process for the IBM Conference on ML.', 'registration');

  classifier.addDocument('Online Course Registration. To get a free online course on the introductory programming do registration by March 1, 2016', 'registration');

  classifier.addDocument('Google Dev Conference. Google devs are invited to take complete the registration by March 1, 2016', 'registration');
  //deadline

  classifier.addDocument('Call for issues. Any issues for the agenda of the Annual General Meeting must be submitted in writing to executive assistant Laura Lund Olsen at llo@tivoli.dk no later than 4 March 2016.', 'deadline');

  classifier.addDocument('Car registration deadline and instruction. Car registration For further clarification of motor vehicle registration schedule, the last digit of the plate number determines the registration month and the middle digit indicates the weekly deadline', 'deadline');

  classifier.addDocument('Patient Protection and Affordable Care Claim. The Patient Protection and Affordable Care Act (PPACA) was signed into law on March 23, 2010. Claims with dates of services on or after January 1, 2010, must be filed within one year of the date of service according to the PPACA', 'deadline');

  classifier.addDocument('MIS Lab Registration. Hereby MIS 205/CSE 410 students are requested to register for the MIS Lab by the end of second week of the semester spring, 2016.', 'deadline');

  classifier.addDocument('ACCR Submission. Hereby, all the executives are requested to submit their subordinate’s ACCR by May 30, 2016 to the management.', 'deadline');

  classifier.addDocument('Faculty Evaluation. This is notify that students must complete their online faculty evaluation by the last week of the semester spring, 2016, otherwise grades will not be updated.', 'deadline');

  classifier.addDocument('Course Drop. This is notify that application for course drop will not be considered after February 28, 2016.', 'deadline');

  classifier.addDocument('Product Evaluation. We are encouraging our clients to evaluate listed products by June 1, 2016. Client with honest evaluation get one year free subscription to our product', 'deadline');

  classifier.addDocument('Car Fitness Checking. This is notify that your car fitness going to expire soon. To avoid legal issues renew your car fitness by February 28, 2016.', 'deadline');
  //reminders
  classifier.addDocument('credit card date expiration, renew the card', 'reminders');

  classifier.addDocument('Get the Luggage from Mike', 'reminders');

  classifier.addDocument('Need to pay the previous bill of the store', 'reminders');

  classifier.addDocument('Transfer US$10K to Harrry’s Account ', 'reminders');

  classifier.addDocument('License date expiration, renew the license card', 'reminders');

  classifier.addDocument('Get the medicine from the Pharmacy', 'reminders');

  classifier.addDocument('Pay the EMI', 'reminders');

  classifier.addDocument('Call Sam after dinner', 'reminders');

  classifier.addDocument('Get back to home with john', 'reminders');

  classifier.addDocument('Call Sam after dinner', 'reminders');
  classifier.addDocument('hello! how are you?','uncategorised');
classifier.addDocument('The car was broken so I could not come','uncategorised');
classifier.addDocument('school was closed yesterday','uncategorised');
classifier.addDocument('A prize has been awarded to Beatrice and Mr Jones also won.','uncategorised');
classifier.addDocument('trailing in fifth place in South Carolina, with just eight percent of the vote','uncategorised');
classifier.addDocument('The importance of small business to our community intersects with memories of how business ownership impacted my childhood','uncategorised');
classifier.addDocument('It takes high marks in areas such as financial strength, people management and innovation.','uncategorised');
classifier.addDocument('its an excuse to go out armed with business cards, pay for bottle service, and probably still go home ','uncategorised');
classifier.addDocument('I’ve got the upper hand right now, at least when it comes to jogging','uncategorised');
classifier.addDocument('we have reached the grand finale','uncategorised');
classifier.addDocument('please add me to your LinkedIn network. I would like to join your LinkedIn network.','uncategorised');
classifier.addDocument('is now following you on Twitter! You have a new follower on Twitter.','uncategorised');
classifier.addDocument('An awe-inspiring story! This week the internet is a-buzz with this very heart-breaking yet awe-inspiring story.','uncategorised');
classifier.addDocument('Latest updates from your friends. Check out what your friends have been up to recently.','uncategorised');

  classifier.train();
   console.log(classifier.getClassifications('expired'));
   console.log(classifier.classify('expired'));
  return classifier;

};
