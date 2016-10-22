# **Software Requirements Specification**

#
## for

# OfCourse!

**Prepared by**  **Tyler Anderson, Phillip Breland, Che'La Fleming, Nina Mohammed, Jackie Robinson, Kameron Smart**

**CSC 4330**

**October 2016**

**Table of Contents**

**Table of Contents**

**Revision History**

**1.        Introduction**

1.1        Purpose

1.2        Document Conventions

1.3        Intended Audience and Reading Suggestions

1.4        Product Scope

1.5        References

**2.        Overall Description**

2.1        Product Perspective

2.2        Product Functions

2.3        User Classes and Characteristics

2.4        Operating Environment

2.5        Design and Implementation Constraints

2.6        User Documentation

2.7        Assumptions and Dependencies

**3.        External Interface Requirements**

3.1        User Interfaces

3.2        Hardware Interfaces

3.3        Software Interfaces

3.4        Communications Interfaces

**4.        System Features**

4.1        Weekly Schedule Table

4.2        Daily Schedule Table

4.3  Course Search

4.4  Enroll Function

4.5  Use-Case Diagram

**5.        Other Nonfunctional Requirements**

5.1        Performance Requirements

5.2        Safety Requirements

5.3        Security Requirements

5.4        Software Quality Attributes

5.5        Business Rules

**6.        Other Requirements**

**Appendix A: Glossary**

**Appendix B:**  **Models**



##**Revision History**

| **Name** | **Date** | **Reason For Changes** | **Version** |
| --- | --- | --- | --- |
| Kameron Smart | 10/17 | Initial Document | 1.1 |
| Che&#39;La Fleming | 10/21 | Update to Business and Security Rules | 1.2 |
| Kameron Smart | 10/21 | Continuation of Version 1.1 | 1.3 |



##**1. Introduction**
####**1.1 Purpose**

This document contains the system requirements for **OfCourse!** , the web-based course manager. Enclosed in this document are a list of essential system requirements, their functionality, and miscellaneous information about them.

####**1.2 Document Conventions**

Colors, such as red were used to convey the severity of a feature (low, medium, high). **Bold-font** is used to highlight significant objects in each section.

####**1.3 Intended Audience and Reading Suggestions**

This document is intended for the following parties:

- Developers, who will use the document for identifying requirements
- Stakeholders,
  - Who have financial interest in the project, and;
  - Who must read the document for some miscellaneous purpose.

It is recommended to the read the document in the scope of personal interest in particular topics depending upon the table of contents outlined above, i.e. stakeholders view section two, developers view sections two and three, etc.

####**1.4 Product Scope**

**OfCourse!** functions as a web-based course scheduler and manager. Students can not only schedule courses for a semester, but also view their schedule in real-time.

####**1.5 References**

- Link to course offering catalog used to locate classes for schedule purposes:
  - [http://appl101.lsu.edu/booklet2.nsf/mainframeset](http://appl101.lsu.edu/booklet2.nsf/mainframeset)

- GROK (LSU&#39;s database of IT-related solutions) article on current scheduling process
  - [https://grok.lsu.edu/Article.aspx?articleid=15718](https://grok.lsu.edu/Article.aspx?articleid=15718)

- Link to theUSERTrust Network, home of the AddTrust Certificate used for security purposes on _myLSU_
  - https://www.tbs-certificates.co.uk/FAQ/en/USER-Trust-RSA-Certification-Authority.html

##**2. Overall Description**
####**2.1 Product Perspective**

The current scheduling requires a student to use the Schedule Booklet alongside the application for schedule (Schedule Request) to perform this task. Before adding a class to their schedule, a student would need to check to see if: the class is being offered that semester; the number of sections available; if the class had occupancy, and; the time slot for the course. Then, the user would need to input the course department and code into Schedule Request. This divides a process that can theoretically be placed into one step, into two separate and rather tedious tasks.

Our product hopes to consolidate these processes into an user-friendly application for the LSU student-body. Due to the nature of scheduling, its primary stakeholders include: students, who must schedule each semester for classes, and; the Registrar department on campus, who act as the officiating body for scheduling. The project is being developed by a group of six students in a Software Development (CSC 4330) course at LSU. And though the university as a whole benefits from a revamped and modern scheduling system, the student body specifically have the most to gain from this intuitive application.

####**2.2 Product Functions**

**OfCourse!** has a number of functions that it performs:

- **It** foremost acts as a scheduling application, meaning its primary goal is to schedule courses by adding or removing them from the student&#39;s current schedule.
  - **The** student can manually add courses if they know the department and code, or search for classes dependent upon the aforementioned constraints (department and code).
- **The** schedule is then generated on a weekly calendar, providing a view-level interface that the student can use for other time-management-based activities.

**2.3 User Classes and Characteristics**

User classes include:

- **Students**, who are technologically-savvy in a multitude of devices that connect to the Internet - such as computers, smartphones, and tablets - and are required to schedule courses each semester.

####**2.4 Operating Environment**

The operating environment is as follows:

Hardware

- Windows 7.1 and up Windows-based operating system
  - 1 gigahertz (GHz) or faster 32-bit (x86) or 64-bit (x64) processor
  - 1 gigabyte (GB) RAM (32-bit) or 2 GB RAM (64-bit)
  - 16 GB available hard disk space (32-bit) or 20 GB (64-bit)
  - DirectX 9 graphics device with WDDM 1.0 or higher driver
- Mac OS 10.0 and up Mac-based operating system
  - An Intel Core 2 Duo, Core i3, Core i5, Core i7, or Xeon processor
  - Mac OS X v10.6.6 or later to install via the Mac App Store (v10.6.8 recommended)
  - 7 GB of available disk space
  - 2 GB of RAM

Software

- Any popular web browser, including
  - Google Chrome (v. 54.0.2840.59 as of writing of document)
  - Mozilla Firefox (v. 49.0.1 as of writing of document)
  - Apple Safari (v. 10.0 as of writing of document)
  - Microsoft Edge (build 14393 as of writing of document)
  - Internet Explorer (v. 11 as of writing of document)

Miscellaneous

- Internet Access Required for Usage

####**2.5 Design and Implementation Constraints**

Design and Implementation Constraints include:

- Knowledge of courses offered at University, notably:
  - Information of Processor/Instructor course
  - Room Location
  - Time
  - Discontinuation/deviation from schedule booklet
- Other scheduled-based situations that are dependent upon Student&#39;s current academic standing, alongside administrative decisions by such Student&#39;s counselor.
  - Ex: Student is allowed to enroll in two courses at the exact same time period because courses overlap in material.
- Ability for the user to log into their _myLSU_ account - the application, though stand-alone, is designed to work in conjunction with the user&#39;s existing LSU account for registration.

**2.6 User Documentation**

User Documentation includes:

- A web-page (via a link) that is on the same page of the application that:
  - **Gives** instructions on how the application works, including,
    - How to search for classes manually or by department and course level
    - How to add the course to their schedule
    - How to remove the course from their schedule
  - **Refers** the user to their respective counselor for more information on scheduling, if need-be.
  - Will be delivered in a presentable manner
    - Easily-decipherable font such as Times New Roman and Arial.
    - Appropriate indentation and spacing when necessary.

**2.7 Assumptions and Dependencies**

Assumptions and Dependencies include:

- The user meets the Operating Environment requirements as outlined above
- The courses that are present in the application are still valid, i.e. are listed in the schedule booklet
- The user does not need to schedule two courses for the same time slot
- The customer can log into their _myLSU_ account

**3. External Interface Requirements**
**3.1 User Interfaces**
    ![Image of Mock User Interface]
    (https://github.com/jackierobinson/OfCourse/blob/master/Mock%20User%20Interface.PNG)

Figure: Mock User Interface of **OfCourse!**

The above figure notes **6** essential functions that the user will interact with, including:

**1.** A table which displays the student&#39;s schedule for the week, based on the courses they are enrolled in.

**2.** A table which displays the student&#39;s schedule based on the day the application was accessed.

- A sidebar aligned to the right of the aforementioned tables, which:

**3.** Provide the user with the ability to search for a course using two drop-down menus or manually via a text form, both based on the department and level (i.e., 1000-level course, 2000-level course, etc.).

**4.** A combination of two tools:

  - **4.1** - A list of courses that appear following the selection based on the criteria above. Each listing is clickable, which:
  
  - **4.2** - Displays a pop-up box that details information about the course, such as description, instructor, time offered, and location. Also provides button for enrolling in course.

**5.** A section which details whether the class was successfully enrolled in; if not successfully, the appropriate error message displays.

####**3.2 Hardware Interfaces**

**OfCourse!** requires a few hardware devices in order to operate properly:

- A computer, with the same hardware specifications as outlined in the Operating Environment section of this document.
- Other hardware-inclusive devices, such as
  - A functioning, standard keyboard and mouse.
  - A monitor or similar-functioning device.

####**3.3 Software Interfaces**

**OfCourse!** requires a few software systems in order to operate properly:

- An operating system matching the same specifications as outlined in the Operating Environment section of this document.
- Access to one of the browsers listed in the Operating Environment section of this document.

####**3.4 Communications Interfaces**

**OfCourse!** requires a few network-based functions to be performed in order to operate properly:

- Have functional Internet access, whether wired or wireless.

- As an application under the my.lsu.edu domain, the server certificate wouldl:
  - Be issued by InCommon RSA Server CA, a subsidiary of The USERTrust Network
  - Be encrypted and authenticated using a strong protocol (TLS 1.2), a strong key change (ECDHE\_RSA), and a strong cipher (AES\_128\_GCM)
  - Have securely-served resources

##**4. System Features**
####**4.1** Weekly Schedule Table

4.1.1        Description and Priority

_Purpose:_ Displays the user&#39;s weekly schedule.

_Priority:_ **High**

4.1.2        Stimulus/Response Sequences

This function occurs once the user accesses the application.

4.1.3        Functional Requirements

- **REQ-1:** The user be logged into their _myLSU_ account.

- **REQ-2:** The useris enrolled in courses, so that the table can be populated with such courses.

  - Note: If the user is not enrolled in any course(s), the table will be blank to reflect this status.

####**4.2** Daily Schedule Table

4.2.1 Description and Priority

_Purpose:_ Displays the user&#39;s daily schedule.

_Priority:_ **High**

4.2.2 Stimulus/Response Sequences

This function occurs once the user accesses the application.

4.2.3 Functional Requirements

- **REQ-1:** The user be logged into their _myLSU_ account.

- **REQ-2:** The user is enrolled in courses, so that the table can be populated with such courses.

####**4.3** Course Search

4.3.1 Description and Priority

_Purpose:_ Allows the user to search for a course, via two methods

**1.** Two drop-down menus based on two categories; department and level
**2.** Manually searching the class based on the aforementioned criteria

- The courses are then displayed below this section; each course can be selected, generating a pop-up box with information about the course, as illustrated in the User Interface section.

_Priority:_ **High**

4.3.2 Stimulus/Response Sequences

This function occurs once the user accesses the application **and** selects from the choices listed in the criteria above.

4.3.3 Functional Requirements

- **REQ-1:** The user be logged into their _myLSU_ account.

- **REQ-2:** The user selects **both** a department and level based on course or inputs a valid course based on the above criteria.

  - Note: If the user inputs an invalid department/level; an error message will display, informing them of the error, and to try again.


####**4.4** Enroll Function

4.4.1 Description and Priority

_Purpose:_ Allows an user to enroll in a course by selecting a course from the list generated from the Course Search function.

_Priority:_ **High**

4.4.2 Stimulus/Response Sequences

This function occurs once the user accesses the application **and** has performed the course search function as outlined above; the user must also select a course from the list.

Once the user has selected the &quot;Enroll&quot; button, the following criteria will be evaluated:

**1.** The user has enough credit hours to enroll in the course.
**2.** The user meets the prerequisite for the course.
**3.** The user has an available time slot for the course.

4.4.3 Functional Requirements

- **REQ-1:** The user be logged into their _myLSU_ account.

- **REQ-2:** The user searched for a course via the course search function.

- **REQ-3:** The user has selected a course from the list of courses, as illustrated in the User Interface above.

####**4.5** Use-Case Diagram

The use-case is as follows:

**1.** \*User logs into their _myLSU_

**2.** User can view their course schedule for the week, located on the upper-left hand side of the screen.

**3.** User can view their course schedule for the day, located on the lower-left hand side of the screen (below the weekly schedule).

**4.** User can use the right sidebar located adjacent to the weekly schedule to:
   
**a.** User can search for classes via the drop-down menus based on **Department** and **Level** OR **Manually** using the same categories.
   
**b.** User can view list of classes based on search.
   
**c.** User can select a course from the list generated 
     
- The course generates a pop-up box, with information detailing the course such as professor, description, time period, etc.

**d.** User selects a course, which

- If applicable to be scheduled, generates a &quot;Success&quot; message in the message box, and is added to the daily/weekly schedule of the user **OR**
     
- Generates an error message, detailing the reason the user cannot add the course .

**\*Note - Application assumes user already has already logged into their**  **myLSU**  **account.**

##**5. Other Nonfunctional Requirements**
####**5.1 Performance Requirements**

As the nature of the application is designed to be a tool for scheduling, the performance specifications are as follows:

- The weekly and day schedules respectively should be fully-generated once the user opens the application, meaning a short waiting period of **less than four seconds** will exist.
  - The information that is used inside of the tables for these features originate from a database, meaning that it must pull an user&#39;s enrolled courses. Since all users are unique by definition, the wait time above is taken into the consideration of the time to retrieve the information.
- The drop-down menu search method will accompany a waiting period of **less than four seconds.**
  - The information used for this purpose derives from a database, meaning that it must sort the classes to be displayed depending upon its criteria (i.e. department and level).
- The manual search method will accompany a waiting time of **less than seven seconds.**
  - The information used for this purpose derives from a database, meaning that it must find the class to be displayed based on what was entered into the search form.
- The pop-up box following the selection of a course will accompany a waiting time of **less than two seconds.**
  - The popup box will be generated with information pertaining to the class, meaning this information is different by nature.
- The enrollment button used to enroll a class, following the selection of a course and subsequent pop-up box, will accompany a waiting of time of **less than 10 seconds.**
  - This function accompanies a process that checks to see if the course can be added based upon factors derived from the current schedule (such as time, pre-requisite, etc.)
  - This function also delivers a message, indicating whether or not the enrollment was successful or not.

####**5.2 Safety Requirements**

Due to the nature of scheduling, there are some safety requirements that **OfCourse!** must abide by for its success:

- The application **must** be able to store a user&#39;s courses for future retrieval.
  - A database will be used to store the information externally, so that in the case of a network outage or other network-related incident, the information can be safely retrieved.
- The application **must** properly evaluate an enrollment request to determine if a course is applicable to be added to a user&#39;s schedule.
  - Functionality is designed to see if the user meets the criteria to enroll in the course.
- The application **must** accurately display the same information from the weekly schedule into the daily schedule for the sake of data coherency.
  - The database used to store the information will also be used to retrieve such information.

####**5.3 Security Requirements**

As an application design to work in conjunction with a user&#39;s _myLSU_ account, **OfCourse!** must meet the following security requirements:

- The server certificate will:
  - Be issued by InCommon RSA Server CA, a subsidiary of The USERTrust Network
  - Be encrypted and authenticated using a strong protocol (TLS 1.2), a strong key change (ECDHE\_RSA), and a strong cipher (AES\_128\_GCM)
  - Have securely-served resources

####**5.4 Software Quality Attributes**

Software Quality attributes of **OfCourse!** include:

- **Portability** - The application should be available for use on any device that meets the Hardware and Software external interface requirements
- **Usability** - The application should be easy to use, with a user-friendly user interface and web page that provides instructions
- **Maintainability** - The application should be easy to maintain, include
  - Adding to the list of courses offered at LSU
  - Adding features as they are needed/desired
- **Testability**- The application should be testable for the following events:
  - Determine if a user has a time slot for a course wishing to be enrolled in
  - Determine if the user meets the prerequisite for the course
  - Determine if the user does not exceed their number of available credit hours for the semester

####**5.5 Business Rules**

As an application that is designed to work in conjunction with _myLSU_ as a tool, **OfCourse!** has the listed business rules, as outlined by existing standards set by the Registrar Department at LSU:

- Students who use **OfCourse!** should not be able to schedule certain classes without having credit in the required prerequisite classes.
- Students should only be able to schedule up to the specified amount of hours per semester.

##**6. Other Requirements**

Development Tools not listed above for **OfCourse!** include:

- Visual Studio as the IDE
  - Primary programming language is C#
- GitHub as the hosting service for files, data, etc.
- For the web page
  - HTML version 5.1 (most recent as of documentation)
  - Bootstrap and its associated API for CSS
  - JQuery, JSON
- For the database
  - MySQL and its associated API

**Appendix A: Glossary**

A list of terms featured in this SRS document

- LSU - Short for Louisiana State University, the flagship university in the state of Louisiana.

- Registrar - A department at Louisiana State University, responsible primarily for scheduling.
- myLSU - A Web Portal for LSU Students, _LSU Online_ Students, Faculty and Staff to consolidate campus services in one dashboard.

**Appendix B: Models**

 ![Image of Visual Representation]
 (https://github.com/jackierobinson/OfCourse/blob/master/Visual%20Representation.PNG)

**Appendix C: To Be Determined List**

The list of tentatively implemented objectives for **OfCourse!** include:

- Implementation of the AddTrust server certificate in the Communication Interfaces.
  - **Not likely to be implemented given time constraints**
