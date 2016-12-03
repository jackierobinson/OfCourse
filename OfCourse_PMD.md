![alt text](https://github.com/jackierobinson/OfCourse/blob/master/OfCourse%20SDD%20Logo.PNG)

#Project Management Document
##Prepared by the OfCourse! Development Team
####(Tyler Anderson, Phillip Breland, Che’La Fleming, Nina Mohammed, Jackie Robinson, Kameron Smart)


##CSC 4330
##Fall 2016



#Table of Contents

**Vision**.................................................................**3**

**Process Model**...............................................**3**

**Configuration Management**...................**3**

**Deliverables**....................................................**4**

**Potential Risks**...............................................**4**

**Team Members**.............................................**5**

**Project Schedule**..........................................**6**

**Meeting Summaries**...................................**6**

**Project Personnel**........................................**7**





##Vision

The goal of OfCourse! was to create an application which consolidated various websites needed during scheduling process at Louisiana State University into an easily-accessible tool. The user can view their current schedule by the week, view detailed information about courses on a particular day, and enroll in courses. The idea of the application stemmed from personal griefs with the scheduling process. Through a combination of HTML (such as Bootstrap and Angular for aesthetics and responsiveness on a multitude of devices) and database implementation (to add courses and reflect such changes on other components), we hoped that our product could serve as design paradigm to the software development process and achieve the goals it was intended for. 

##Process Model

The development of OfCourse! was conducted chiefly utilizing the pair programming model. Pair programming is an Agile software development technique in which two programmers work as a pair together on one workstation. As one person wrote the code, the other person assisted with reviewing each segment, alongside conducting tests and analysis of functions. With three groups involved in the project (front-end, back-end, and documentation), we were able to design and develop each particular element of the project effectively, from the documentation to the coding.
   
##Configuration Management

Maintaining essential documents, especially in a group-based environment, was essential towards the success of the project. As such, it was important to utilize a tool that could retain the various files that were designed and developed.

To accomplish this, we used GitHub to keep track of requirement documents and the codebase. Our repository contained two branches, master and develop. The develop branch was used solely for commits involving code, and the master branch was used for the requirement documents. The two branches allowed us to update the requirement documents without affecting the work of the developers when committing. Our team tried to make sure we did not commit broken code, asynchronous documents, and other files that would impact the consistency of the application. Whenever components of the project were finalized, they were pushed into the master branch. The master branch always reflected the latest version of our project.

While GitHub served as our storage for files, Google Drive served as a means to draft up several documents and create the presentation that was later shown during the lifecycle of the project. Google Drive provided a convenient means to share edit documents amongst the group members. And when documents were finalized, they would be converted into markdown to be placed inside of our GitHub repository. An additional tool used for communication and designation of various tasks was Trello. Trello provided a means to layout the schedule of important documents due and components for the website.
 
##Deliverables

The completion of OfCourse! saw several deliverables, including:
 - A functioning web-based application, which:
	- Displayed a weekly calendar of courses, sorted by attendance day and time period
	- Provided a daily calendar, showing classes on a particular day, alongside additional information not displayed in the weekly calendar
	- Had an enrollment feature, which would add a course into a schedule if the course was not already present
	- “Real-time” updates to schedule changes (in the form of a page refresh)
	- HTML, CSS, JS (JavaScript), and a host of other files essential towards the application
 - Several documents which outlined the project, including:
	- Software Requirement Specifications - Listed essential system requirements, their functionality, and miscellaneous information
	- Software Design Document - Described internal and external design of the application
	- Software Testing Document - Provided several tests to check the functionality of the application
 - Miscellaneous documents and files, including:
	- Artwork
	- Presentation
	- Demonstration Video

##Potential Risks

Any project presents potential risks. Risks that affected our project include:
 - Time constraints due to the nature of the project (semester-long)
	- Schedule complications between members
 - Lack of knowledge/inexperience using tools to create the application
	- This risk would impact the coding process
 - Number of design constraints, including:
	- Neglecting sections, semester-based enrollment, etc.
	- Limited number of courses offered for enrollment
 - Communication risks such as not properly relaying information, lack of information, etc.


##Team Members

Teamwork was essential towards the completion of the project. To facilitate productivity and improve communications, we designated three groups: front-end (composed of Nina Mohammed and Jackie Robinson) who handled the HTML and CSS of the application; back-end (composed of Phillip Breland and Kameron Smart) who handled the database and functionality of particular elements, and; documentation (Tyler Anderson and Che’La Fleming) who handled recording meetings, documentation, and miscellaneous tasks. We implemented a derived-hierarchal team style, in which two of the members (Jackie Robinson and Kameron Smart) served as co-project managers as the remaining members were designated tasks in their appropriate roles. The team members, and their associated roles are as follows:

**Tyler Anderson** worked on converting documentation to Markdown, writing meeting summaries, and designed the logo featured on many of the documents and the front page.

**Phillip Breland** advised on system requirements and technologies, provided back-end code debugging and DIA diagrams. He also co-designed the initial schema.

**Che’La Fleming** worked on converting documentation to Markdown, recording summaries of group meetings, and worked with Tyler on the design of the OfCourse! logo.

**Nina Mohammed** worked on designing and styling the user interface with HTML and CSS.

**Jackie Robinson** worked on creating responsive user interface components like dropdowns and tables using AngularJS, Bootstrap, and AngularUI. She also served as co-project manager, managed the GitHub repository for the project and created the project code skeleton. She also created the Trello account that helped designate the tasks between group members.

**Kameron Smart** worked on the back-end functionality of the application using JavaScript and JSON. He also served as co-project manager by formulating tasks and roles. 


##Project Schedule
![alt text](https://github.com/jackierobinson/OfCourse/blob/master/project_schedule.PNG)

The development of OfCourse! (derived from the graph listed above), was as follows:
 - September
	- Organized group; discussed idea for project
		- Established sub-groups and tasks
 - October
	- Began initial stages of application
		- Established front-end and back-end functionality of application
		- Developed mock visual design of application
		- Designated deadlines for certain tasks
	- Drafted Software Requirements Specification document
	- Began development of the application
		- Created source files for components of the application
			- Schedule, Calendar, CourseOfferings, etc.
			- CSS files for formatting purposes
			- Included libraries essential towards the application design
 - November
	- Drafted Software Design Document
	- Continued with development of application
		- Front-end design
			- Created controllers for each component using Angular and Bootstrap
			- Created HTML elements to reflect visual design
		- Back-end design
			- Created function headings to perform tasks; linked buttons to functions
	- Drafted Software Testing Document
	- Finalized development of application
		- Encoded functions for back-end; ran tests from STD to monitor performance
			- enrollInCourse(), printCourses(), etc.
		- Added comments to identify functions and objects
	- Created Presentation, Demonstration Video
		- Rehearsed demonstration
 - December
	- Finalized code
		- Formatting and additional comments
	- Drafted Project Management Document

##Meeting Summaries

###October 3rd

Time: 2:17pm-2:41pm

*Members there: Tyler, Che’La, Jackie, Nina, and Kameron*

We discussed the template that we had on Google Docs, including what we wanted to change about it and what we wanted keep at this point. We also said that we wanted to do the project in HTML. We decided that once we came up with a final one, it would be uploaded onto GitHub. Finally, we discussed the layout of the webpage.  We wanted a login function based on myLSU, ability to add to the schedule per day, filter enrolled classes per day, filter potential courses, and implement a pop-up of description of classes.
	
###October 12th

Time: 5pm-5:40pm

*Members there: Tyler, Che’La, Jackie, Kameron, and Phillip*

We discussed Phase 1, which is the website phase.  We wanted the table to hold weekly schedule and discussed functions and design of table/chart.  Kameron told Che’La what he thought the website should look like and Che’la drew it up.  Lastly, we said what we wanted to have these tasks done for the next meeting; Che’La and Tyler were to markdown the SRS document, Jackie and Nina were to generate HTML code for the front-end, and Kameron and Phillip were to write out functions for the back-end.
	
###October 16th

Time: 3pm-5pm

*Members there: Che’La, Jackie, Nina, Kameron, and Phillip*

We met to work on the some of the External Interface Requirements. We decided that we wanted the scheduling application to function on the desktop as well as mobile devices and tablets. We also discussed the various APIs we intended to use. The TA had seen our initial draft our SRS Document, so we also discussed some business rules pertaining to OfCourse!
	
###November 16th

Time: 6:30pm-7pm

*Members there: Jackie, Nina, Kameron, and Phillip*

Made a to-do list.

1.  Update database to have course number, section number, and day of week.
2.  Implemented a today schedule, so that the program can get the current day of the week, and the courses for that day would be reflected in the schedule.
3.  Include more ‘CSC’ classes into offerings.
	
###November 27th

Time: 3pm-4pm

*Members there: Tyler, Che’La, Jackie, Nina, Kameron, and Phillip*

We worked on the PowerPoint presentation and rehearsed for the actual presentation later that day. 


##Project Personnel

**Tyler Anderson**

I worked on the markdown for all the documents, while also editing them.  I designed the logo with the help of Che’La. I met with the TA to discuss the SRS document to see how we could make it better. I didn’t make the meeting on October 16th because I had another mandatory meeting for the organization that I am apart of. I was told that I didn’t need to be at the meeting on November 16th because they were just meeting to get on the same page for a part of the project I wasn’t a part of.
	
**Phillip Breland**

I advised on system requirements and technologies, provided back-end code debugging and DIA diagrams, and co-designed the initial schema. I designed a couple of the algorithms used in the back-end. I was not able to attend the initial meeting on October 3rd because of my work schedule.	
	
**Che’La Fleming**

I also worked on the markdown for all documentation turned in. I designed the initial OfCourse! logo and worked on the official logo with Tyler. I was also a part of the meeting with the TA for the SRS document and drafted the revisions after the meeting. I did not participate in the November 16th meeting because it was only to scheduled to clarify some things for the back-end and front-end of this project.
	
**Nina Mohammed**

I worked on the design aspect of our project, by adding the background picture and styling some of the components such as the calendar, course offerings, and the schedule boxes. Using HTML5 and CSS3, I added color to the components, positioned them on the page and tried to make the calendar more visually appealing. I missed the meeting on October 12th, because I was unable to come back to school.
	
**Jackie Robinson**

I worked on creating the calendar, course offerings, and daily schedule components with Bootstrap, AngularUI, and AngularJS. More specifically, I created the dropdowns, tables, and modals. I created a model for a course object and created my components with the ability to bind data from the course object to the view. I created the GitHub repository and tried to maintain a steady flow of commits throughout the project to keep the team updated with the user interface. I created the project in Visual Studio and the project skeleton. I created all the tests on the Software Testing Document and proofread the SRS document. I created the theme and majority of the slides for the presentation. I recommended we use Trello to maintain our Agile board. 
	
**Kameron Smart**

I performed a number of tasks, including: initiating documents for drafting (notably the SRS and SDD documents); assisting in defining the scope of our project; communicating between the various sections in our group for coherency purposes; outlining and developing the back-end capabilities of the application (including refactoring, restructuring, and commenting); designing the demonstration video for the presentation, and; presenting the application to the TA during the code implementation portion of the assignment. As co-project manager, I attended every meeting to discuss features, design, and implementation and provide updates.  
