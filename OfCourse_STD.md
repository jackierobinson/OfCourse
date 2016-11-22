

# Software Design Document

# CSC 4430

# Prepared by Tyler Anderson, Phillip Breland, Che'La Fleming, Nina Mohammed, Jackie Robinson, Kameron Smart

**Revision History**

| **Name** | **Date** | **Reason For Changes** | **Version** |
| --- | --- | --- | --- |
| OfCourse! Development Team | 11/20 | Initial Document/Draft | 1.1 |



| Test Case #: 1 | Test Case Name: Enroll in Course |
| --- | --- | --- | --- |
| System: | Subsystem: |
| Designed by: Jackie | Design Date: 11/21/2016 
| Executed by: User | Execution Date: |
| Short Description: Test if enrolled course is displayed on calendar |

| Precondition |
| --- |
| User must not be taking a course at the same day of the week and time |
| User meets prerequisites for course |

| Step | Action | Expected System Response | Pass/Fail | Comment |
| --- | --- | --- | --- | --- |
| 1 | User clicks &#39;Enroll&#39; button | The calendar displays the course in the corresponding time and day |   |   |



| Post Condition N/A |
| --- |








| Test Case #: 2 | Test Case Name: Course Model Displays
| --- | --- |
| System: | Subsystem: |
| Designed by: Jackie | Design Date: 11/21/2016 |
| Executed by: User | Execution Date:|
| Short Description: Test if a course model is displayed |                               


| Precondition N/A |
| --- |

| Step | Action | Expected System Response | Pass/Fail | Comment |
| --- | --- | --- | --- | --- |
| 1 | User clicks on course &quot;CSC 4330&quot; in the offerings | A course model is displayed with the corresponding course information: name, location, description, course number, dept, professor, Enroll button, close button




| Post Condition N/A |
| --- |





| Test Case #: 3 | Test Case Name: Close Course Modal
| --- | --- |
| System: | Subsystem: |
| Designed by: Jackie | Design Date: 11/21/2016 |
| Executed by: User | Execution Date: |
| Short Description: Test if Course Model is closed when the close button is clicked |                              


| Precondition |
| --- |
| User must have a course model open |


| Step | Action | Expected System Response | Pass/Fail | Comment |
| --- | --- | --- | --- | --- |
| 1 | User clicks &#39;Close&#39; button | Course Model disappears from the view |   |   |



| Post Condition N/A |
| --- |



| Test Case #: 4 | Test Case Name: Department Dropdown Filter
| --- | --- |
| System: | Subsystem: |
| Designed by: Jackie | Design Date: 11/21/2016 |
| Executed by: User| Execution Date: |
| Short Description: Test if department dropdown filter offerings by department |                            


| Precondition N/A |
| --- |

| Step | Action | Expected System Response | Pass/Fail | Comment |
| --- | --- | --- | --- | --- |
| 1 | User clicks Department dropdown | Displays a list of all the departments |   |   |
| 2 | User selects Department &quot;Computer Science&quot; | The course offerings displays all the course that are in selected department |   |   |



| Post Condition N/A |
| --- |





| Test Case #: 5 | Test Case Name: Course Number Dropdown Filter |
| --- | --- |
| System: | Subsystem: |
| Designed by: Jackie | Design Date: 11/21/2016
| Executed by: | Execution Date: |
| Short Description: Test if Course Number dropdown filter offerings by course number |                            


| Precondition |
| --- |
| User must select department from the department dropdown first |


| Step | Action | Expected System Response | Pass/Fail | Comment |
| --- | --- | --- | --- | --- |
| 1 | User clicks Course Number dropdown | Displays a list of all the course numbers in the selected department |   |   |
| 2 | User selects Department &quot;Computer Science&quot; and Number &quot;3000&quot; | The course offerings displays the course that matches the course number and department |   |   |



| Post Condition N/A |
| --- |





| Test Case #: 6 | Test Case Name: Department Dropdown |
| --- | --- |
| System: | Subsystem: |
| Designed by: Jackie | Design Date: 11/21/2016 |
| Executed by: User | Execution Date: |
| Short Description: Test if department dropdown lists departments |                            


| Precondition N/A |
| --- |

| Step | Action | Expected System Response | Pass/Fail | Comment |
| --- | --- | --- | --- | --- |
| 1 | User clicks dropdown menu | Displays a list of all the departments |   |   |



| Post Condition N/A |
| --- |





| Test Case #: 7 | Test Case Name: Course Number Dropdown |
| --- | --- |
| System: | Subsystem: |
| Designed by: Jackie | Design Date: 11/21/2016 |
| Executed by: User | Execution Date: |
| Short Description: Test if Course Number dropdown lists course numbers |                            


| Precondition |
| --- |
| User must select department from the department dropdown first |


| Step | Action | Expected System Response | Pass/Fail | Comment |
| --- | --- | --- | --- | --- |
| 1 | User clicks Course Number dropdown | Displays a list of all the course numbers in the selected department |   |   |



| Post Condition N/A |
| --- |
